import mailchimp from '@mailchimp/mailchimp_marketing';

if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_AUDIENCE_ID) {
  console.warn('Mailchimp configuration missing. Email capture will not work.');
}

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_KEY?.split('-')[1] || 'us1', // Extract server from API key
});

export interface NewsletterSubscriber {
  email: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
  interests?: { [key: string]: boolean };
}

export async function subscribeToNewsletter(subscriber: NewsletterSubscriber) {
  if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_AUDIENCE_ID) {
    throw new Error('Mailchimp configuration missing');
  }

  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: subscriber.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: subscriber.firstName || '',
          LNAME: subscriber.lastName || '',
        },
        tags: subscriber.tags || [],
        interests: subscriber.interests || {},
      }
    );

    return {
      success: true,
      data: response,
    };
  } catch (error: any) {
    console.error('Mailchimp subscription error:', error);

    // Handle specific Mailchimp errors
    if (error.status === 400 && error.response?.body?.title === 'Member Exists') {
      return {
        success: false,
        error: 'This email is already subscribed to our newsletter.',
      };
    }

    return {
      success: false,
      error: 'Failed to subscribe to newsletter. Please try again.',
    };
  }
}

export async function addResourceDownloadTag(email: string, resourceName: string) {
  if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_AUDIENCE_ID) {
    console.warn('Mailchimp configuration missing. Tag will not be added.');
    return { success: false };
  }

  try {
    // Get subscriber info first
    const subscriberHash = require('crypto')
      .createHash('md5')
      .update(email.toLowerCase())
      .digest('hex');

    // Add tag to existing subscriber
    await mailchimp.lists.updateListMemberTags(
      process.env.MAILCHIMP_AUDIENCE_ID,
      subscriberHash,
      {
        tags: [
          {
            name: `Downloaded: ${resourceName}`,
            status: 'active',
          },
        ],
      }
    );

    return { success: true };
  } catch (error: any) {
    console.error('Mailchimp tag error:', error);
    return { success: false };
  }
}

export async function subscribeAndDownload(subscriber: NewsletterSubscriber, resourceName: string) {
  // First, subscribe to newsletter
  const subscriptionResult = await subscribeToNewsletter({
    ...subscriber,
    tags: [...(subscriber.tags || []), `Downloaded: ${resourceName}`],
  });

  // If subscription failed but user already exists, still add the download tag
  if (!subscriptionResult.success && subscriptionResult.error?.includes('already subscribed')) {
    await addResourceDownloadTag(subscriber.email, resourceName);
    return {
      success: true,
      message: 'Thank you! The resource has been sent to your email.',
    };
  }

  if (subscriptionResult.success) {
    return {
      success: true,
      message: 'Thank you for subscribing! The resource has been sent to your email.',
    };
  }

  return subscriptionResult;
}