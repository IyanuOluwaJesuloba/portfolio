# Contact Form Setup Guide

The contact form is currently configured to work with EmailJS for sending emails. Here's how to set it up:

## Quick Setup (Recommended)

### Option 1: EmailJS Setup (Professional)

1. **Sign up for EmailJS**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create a free account

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template content:
   ```
   Subject: New Contact Form Message: {{subject}}
   
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```

4. **Get Your Configuration**
   - Service ID: Found in your Email Services section
   - Template ID: Found in your Email Templates section
   - Public Key: Found in Account > API Keys

5. **Configure Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Replace the placeholder values with your actual EmailJS configuration:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

6. **Restart your development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Option 2: Demo Mode (Current Fallback)

If you don't set up EmailJS, the form will work in demo mode:
- Form submissions will be logged to the console
- Success message will still appear
- No actual emails will be sent

## Testing

1. Fill out the contact form
2. Check the browser console for any errors
3. If EmailJS is configured, check your email
4. If in demo mode, check the browser console for the form data

## Troubleshooting

- **Form shows error**: Check browser console for detailed error messages
- **No email received**: Verify EmailJS configuration and check spam folder
- **Environment variables not working**: Make sure to restart the development server after adding them

## Security Notes

- Environment variables starting with `NEXT_PUBLIC_` are exposed to the browser
- EmailJS public keys are safe to expose as they're designed for client-side use
- Never put private API keys in `NEXT_PUBLIC_` variables
