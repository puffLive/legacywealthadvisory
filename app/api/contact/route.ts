import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Zoho CRM integration function
async function addLeadToZoho(data: ContactFormData) {
  try {
    // Check if Zoho credentials are configured
    if (!process.env.ZOHO_CLIENT_ID || !process.env.ZOHO_CLIENT_SECRET || !process.env.ZOHO_REFRESH_TOKEN) {
      console.log('Zoho CRM integration not configured - skipping');
      return { success: true, message: 'Zoho integration skipped (not configured)' };
    }

    // Get access token using refresh token (Canadian data center)
    const tokenResponse = await fetch('https://accounts.zohocloud.ca/oauth/v2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: 'refresh_token',
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      throw new Error('Failed to get Zoho access token');
    }

    // Create lead in Zoho CRM
    const leadData = {
      data: [
        {
          First_Name: data.firstName,
          Last_Name: data.lastName,
          Email: data.email,
          Phone: data.phone,
          Company: 'Individual',
          Lead_Source: 'Website',
          Description: data.message || 'No additional details provided',
        },
      ],
    };

    const createLeadResponse = await fetch('https://www.zohoapis.ca/crm/v2/Leads', {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${tokenData.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    const leadResult = await createLeadResponse.json();

    if (leadResult.data && leadResult.data[0] && leadResult.data[0].code === 'SUCCESS') {
      return { success: true, leadId: leadResult.data[0].details.id };
    } else {
      throw new Error('Failed to create lead in Zoho CRM');
    }
  } catch (error) {
    console.error('Zoho CRM integration error:', error);
    // Don't fail the entire submission if Zoho fails
    return { success: false, error: error instanceof Error ? error.message : 'Zoho CRM error' };
  }
}

// Send email notification
async function sendEmailNotification(data: ContactFormData) {
  // Create transporter using SMTP settings
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Format the email content
  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <hr>
    <h3>Contact Information:</h3>
    <ul>
      <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Phone:</strong> ${data.phone}</li>
    </ul>

    ${data.message ? `<h3>Message:</h3>
    <p>${data.message.replace(/\n/g, '<br>')}</p>` : ''}

    <hr>
    <p style="color: #666; font-size: 12px;">
      This message was sent from the Legacy Wealth Advisory website contact form.
    </p>
  `;

  const textContent = `
New Contact Form Submission

Contact Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone}
${data.message ? `
Message:
${data.message}` : ''}

---
This message was sent from the Legacy Wealth Advisory website contact form.
  `;

  // Send email to Damian
  await transporter.sendMail({
    from: `"Legacy Wealth Advisory Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: 'info@legacywealthadvisory.ca',
    replyTo: data.email,
    subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
    text: textContent,
    html: htmlContent,
  });

  // Send confirmation email to the person who filled out the form
  const confirmationHtml = `
    <h2>Thank you for contacting Legacy Wealth Advisory</h2>
    <p>Dear ${data.firstName},</p>
    <p>We have received your inquiry and appreciate your interest in our services. A member of our team will review your information and contact you within 1-2 business days.</p>

    <p>If you have any urgent questions, please don't hesitate to call us directly at (905) 840-2222.</p>

    <p>Best regards,<br>
    Damian Alexander<br>
    Legacy Wealth Advisory</p>

    <hr>
    <p style="color: #666; font-size: 12px;">
      14-30 Eglinton Ave W, Mississauga, ON L5R 0C1<br>
      Phone: (905) 840-2222<br>
      info@legacywealthadvisory.ca | www.legacywealthadvisory.ca
    </p>
  `;

  await transporter.sendMail({
    from: `"Legacy Wealth Advisory" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: data.email,
    subject: 'Thank you for contacting Legacy Wealth Advisory',
    html: confirmationHtml,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the data
    const validatedData = contactSchema.parse(body);

    // Send email notification
    await sendEmailNotification(validatedData);

    // Add to Zoho CRM (this won't fail the submission if it errors)
    const zohoResult = await addLeadToZoho(validatedData);

    return NextResponse.json({
      success: true,
      message: 'Thank you for your submission! We will contact you soon.',
      zoho: zohoResult,
    });
  } catch (error) {
    console.error('Contact form submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data provided.',
          details: error.issues,
        },
        { status: 400 }
      );
    }

    // Check if it's an email error
    if (error instanceof Error && error.message.includes('SMTP')) {
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to send email. Please try again or contact us directly at (905) 840-2222.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process your submission. Please try again.',
      },
      { status: 500 }
    );
  }
}