import { NextRequest, NextResponse } from 'next/server';
import { subscribeAndDownload } from '@/lib/mailchimp';
import { z } from 'zod';

const downloadSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().optional(),
  resourceId: z.string().min(1, 'Resource ID is required'),
  resourceTitle: z.string().min(1, 'Resource title is required'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, resourceId, resourceTitle } = downloadSchema.parse(body);

    const result = await subscribeAndDownload(
      {
        email,
        firstName,
        lastName,
        tags: ['Resource Download', `Resource: ${resourceId}`],
      },
      resourceTitle
    );

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message,
        downloadUrl: `/api/resources/${resourceId}/download`, // We'll implement this later
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
    console.error('Resource download error:', error);

    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(err => err.message).join(', ');
      return NextResponse.json(
        {
          success: false,
          error: errorMessages,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process resource download. Please try again.',
      },
      { status: 500 }
    );
  }
}