# Contact Form Setup Guide

## Overview

The contact form on the Legacy Wealth Advisory website sends submissions to:
1. **Email**: Damian's email (damian@legacywealthadvisory.ca)
2. **Zoho CRM**: Creates a new lead (optional)

## Email Configuration

### Option 1: Using Gmail

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and generate a password
3. Update `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   ```

### Option 2: Using Office 365/Outlook

1. Update `.env.local`:
   ```
   SMTP_HOST=smtp.office365.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=damian@legacywealthadvisory.ca
   SMTP_PASSWORD=your-password
   ```

### Option 3: Using Other Email Providers

Check your email provider's SMTP documentation and update the settings accordingly.

## Zoho CRM Integration (Optional)

### Step 1: Create Zoho API Credentials

1. Go to the correct regional API console:
   - **Canada**: https://api-console.zoho.ca/
   - **US**: https://api-console.zoho.com/
   - **EU**: https://api-console.zoho.eu/
2. Click "Add Client"
3. Choose "Server-based Applications"
4. Fill in:
   - Client Name: Legacy Wealth Advisory Website
   - Homepage URL: https://legacywealthadvisory.ca
   - JavaScript Domain: https://legacywealthadvisory.ca
   - Redirect URIs: http://localhost:3000/zoho-callback
5. Save and note down the Client ID and Client Secret

### Step 2: Generate Refresh Token

1. Visit this URL (use your regional domain and replace YOUR_CLIENT_ID):

   **For Canada:**
   ```
   https://accounts.zohocloud.ca/oauth/v2/auth?scope=ZohoCRM.modules.ALL&client_id=YOUR_CLIENT_ID&response_type=code&access_type=offline&redirect_uri=http://localhost:3000/zoho-callback
   ```

   **For US:**
   ```
   https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.modules.ALL&client_id=YOUR_CLIENT_ID&response_type=code&access_type=offline&redirect_uri=http://localhost:3000/zoho-callback
   ```

2. Approve the permissions
3. Copy the code from the redirect URL
4. Exchange code for refresh token using curl (use your regional domain):

   **For Canada:**
   ```bash
   curl -X POST https://accounts.zohocloud.ca/oauth/v2/token \
     -d "code=YOUR_CODE" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET" \
     -d "redirect_uri=http://localhost:3000/zoho-callback" \
     -d "grant_type=authorization_code"
   ```

   **For US:**
   ```bash
   curl -X POST https://accounts.zoho.com/oauth/v2/token \
     -d "code=YOUR_CODE" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET" \
     -d "redirect_uri=http://localhost:3000/zoho-callback" \
     -d "grant_type=authorization_code"
   ```

5. Save the refresh_token from the response

### Step 3: Configure Custom Fields in Zoho CRM

The integration expects these custom fields in the Leads module:
- `Service_Interest` (Dropdown)
- `Net_Worth` (Dropdown)
- `Timeframe` (Dropdown)
- `Preferred_Contact_Method` (Text)

To add custom fields:
1. Go to Zoho CRM Settings
2. Navigate to Customization > Modules and Fields
3. Select "Leads"
4. Add the custom fields listed above

### Step 4: Update Environment Variables

Add to `.env.local`:
```
ZOHO_CLIENT_ID=your-client-id
ZOHO_CLIENT_SECRET=your-client-secret
ZOHO_REFRESH_TOKEN=your-refresh-token
```

## Testing the Form

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Go to http://localhost:3000/contact

3. Fill out and submit the form

4. Check:
   - Email inbox for notification
   - Zoho CRM Leads module (if configured)

## What Happens When Form is Submitted

1. **Form Validation**: Data is validated on client and server
2. **Email Notification**: Sent to damian@legacywealthadvisory.ca
3. **Confirmation Email**: Sent to the person who filled out the form
4. **Zoho CRM**: Lead is created (if configured)
5. **Success Message**: User sees confirmation

## Troubleshooting

### Email Not Sending

- Check SMTP credentials in `.env.local`
- Verify firewall/antivirus isn't blocking SMTP ports
- For Gmail, ensure App Password is correct
- Check spam folder for test emails

### Zoho Integration Issues

- Verify refresh token is still valid (they expire after 6 months of non-use)
- Check custom fields exist in Zoho CRM
- Review console logs for specific error messages
- Ensure Zoho API limits haven't been exceeded

### Form Not Submitting

- Check browser console for errors
- Verify `/api/contact` endpoint is accessible
- Check Next.js server logs for errors

## Security Notes

- Never commit `.env.local` to version control
- Use environment variables in production (Vercel, etc.)
- Regularly rotate passwords and API tokens
- Monitor form submissions for spam/abuse