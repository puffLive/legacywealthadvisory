import { NextRequest, NextResponse } from 'next/server';
import { subscribeToNewsletter } from '@/lib/mailchimp';
import { z } from 'zod';

const subscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName } = subscribeSchema.parse(body);

    const result = await subscribeToNewsletter({
      email,
      firstName,
      lastName,
      tags: ['Newsletter Signup'],
    });

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Thank you for subscribing to our newsletter!',
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: result.error,
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email address provided.',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to subscribe to newsletter. Please try again.',
      },
      { status: 500 }
    );
  }
}

// GET method to check subscription status (optional)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json(
      { success: false, error: 'Email parameter required' },
      { status: 400 }
    );
  }

  // This would require additional Mailchimp API calls to check status
  // For now, just return a basic response
  return NextResponse.json({
    success: true,
    message: 'Subscription status check not implemented yet',
  });
}