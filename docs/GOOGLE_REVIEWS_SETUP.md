# Google Reviews Integration Setup

This guide will help you set up the Google Places API to display real Google Reviews on your website.

## Prerequisites

- A Google Business Profile for Legacy Wealth Advisory
- A Google Cloud Platform account
- A billing account set up in Google Cloud (API has free tier)

## Step 1: Get Your Google Place ID

1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for "Legacy Wealth Advisory Mississauga" or your exact business name
3. Click on your business when it appears
4. Copy the Place ID (it looks like: `ChIJxxxxxxxxxxxxxxxxxxxxxx`)

Alternative method:

1. Find your business on Google Maps
2. Copy the URL
3. Extract the Place ID from the URL or use the Place ID Finder tool

## Step 2: Set Up Google Cloud Platform

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Name it something like "Legacy Wealth Advisory Website"

## Step 3: Enable the Places API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Places API"
3. Click on "Places API"
4. Click "Enable"

## Step 4: Create API Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the API key that's generated
4. (Recommended) Click "Edit API Key" to add restrictions:
   - Application restrictions: "HTTP referrers"
   - Add your website URLs:
     - `https://legacywealthadvisory.ca/*`
     - `https://www.legacywealthadvisory.ca/*`
     - `http://localhost:3000/*` (for development)
   - API restrictions: Select "Places API"
5. Save the restrictions

## Step 5: Configure Environment Variables

Add these to your `.env.local` file (create it if it doesn't exist):

```env
# Google Places API
GOOGLE_PLACES_API_KEY=your-api-key-here
GOOGLE_PLACE_ID=your-place-id-here
NEXT_PUBLIC_GOOGLE_PLACE_ID=your-place-id-here
```

Replace:

- `your-api-key-here` with your Google Cloud API key
- `your-place-id-here` with your Google Place ID

## Step 6: Test Locally

1. Restart your development server:

   ```bash
   npm run dev
   ```

2. Check the browser console for any errors
3. The testimonials section should now show real Google reviews

## Step 7: Deploy to Production

1. Add the environment variables to Vercel:
   - Go to your Vercel project dashboard
   - Settings > Environment Variables
   - Add all three Google-related variables
   - Redeploy your site

## Troubleshooting

### No reviews showing up?

- Check that your Place ID is correct
- Verify the API key has Places API enabled
- Check browser console for error messages
- Ensure your Google Business Profile has reviews

### API quota exceeded?

- The free tier includes $200/month credit
- Places Details calls cost $0.017 each
- You get ~11,000 free calls per month
- The component caches results for 1 hour

### Reviews not updating?

- Reviews are cached for 1 hour to minimize API calls
- Clear your browser cache or wait for the cache to expire
- You can adjust the cache time in `/app/api/google-reviews/route.ts`

## API Usage Optimization

The current setup:

- Caches reviews for 1 hour
- Only fetches when the page loads
- Falls back to placeholder testimonials if API fails
- Shows only 4+ star reviews
- Limits to 10 most recent reviews

## Security Notes

- Never commit your actual API key to Git
- Always use environment variables
- Add API key restrictions in Google Cloud Console
- Monitor usage in Google Cloud Console

## Support

If you need help:

1. Check Google Cloud Console for API errors
2. Review browser console for JavaScript errors
3. Verify all environment variables are set correctly
4. Contact support with specific error messages
