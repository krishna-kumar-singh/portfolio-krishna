# Google Sheets Form Submission Setup Guide

This guide will help you set up the Google Sheets integration with enhanced email system for the contact form on Krishna Kumar Singh's portfolio website.

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Portfolio Contact Form Submissions"
4. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
   - ID: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

## Step 2: Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default `Code.gs` content with the code from `lib/google-apps-script.js`
4. Replace `YOUR_SPREADSHEET_ID` with your actual spreadsheet ID
5. Update the `WEBSITE_URL` constant with your actual domain
6. Save the project with a name like "Portfolio Contact Form Handler"

## Step 3: Deploy the Script

1. In Google Apps Script, click "Deploy" → "New deployment"
2. Choose type: "Web app"
3. Set the following configuration:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click "Deploy"
5. Copy the Web App URL (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

## Step 4: Update the Contact Form

1. Open `app/contact/page.tsx`
2. Find the line with `const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||`
3. Replace the fallback URL with your actual Web App URL

## Step 5: Test the Integration

1. Run the portfolio website locally
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your Google Spreadsheet to see if the data appears
5. Check both email addresses for the confirmation and notification emails

## Enhanced Email System Features

### ✅ Confirmation Email (Sent to Form Submitter)
- **Professional Design**: Beautiful HTML email with your branding
- **Submission Summary**: Complete details of what they submitted
- **Clear Expectations**: Response time and next steps
- **Personal Touch**: Information about you and your services
- **Social Links**: Easy access to your GitHub, LinkedIn, and Twitter
- **Mobile Responsive**: Looks great on all devices

### ✅ Notification Email (Sent to You)
- **Instant Alerts**: Immediate notification of new submissions
- **Action-Oriented**: Clear call-to-action to respond quickly
- **Complete Information**: All contact details and message content
- **Professional Formatting**: Easy to read and process
- **Quick Stats**: Submission ID and tracking information

## Spreadsheet Structure

The spreadsheet will automatically be set up with the following columns:

| Column | Description |
|--------|-------------|
| Timestamp | When the form was submitted |
| Name | Contact's full name |
| Email | Contact's email address |
| Phone | Contact's phone number |
| Message | The message content |
| Status | Submission status (New/Reviewed/Responded) |
| Response Sent | Whether you've responded (Yes/No) |

## Email Templates

### Confirmation Email Features:
- **Personalized Greeting**: Uses the submitter's name
- **Submission Confirmation**: Confirms successful receipt
- **Response Timeline**: Sets expectation of 24-hour response
- **Your Information**: Brief bio and specializations
- **Social Media Links**: GitHub, LinkedIn, Twitter
- **Professional Signature**: Complete contact information
- **Responsive Design**: Works on desktop and mobile

### Notification Email Features:
- **Urgent Styling**: Eye-catching design to grab attention
- **Contact Information**: Clickable email and phone links
- **Message Preview**: Full message content in readable format
- **Action Reminders**: Prompts for timely response
- **Tracking Information**: Unique submission ID
- **Professional Layout**: Clean, organized information

## Testing Functions

The script includes several test functions you can run:

### Test Complete Form Submission:
```javascript
testFormSubmission()
```

### Test Confirmation Email Only:
```javascript
testConfirmationEmail()
```

### Test Notification Email Only:
```javascript
testNotificationEmail()
```

### Set Up Spreadsheet Formatting:
```javascript
setupSpreadsheet()
```

## Security & Privacy

1. **Data Protection**: All form data is securely stored in your Google Spreadsheet
2. **Email Privacy**: Confirmation emails are sent from your Google account
3. **Access Control**: Only you have access to the spreadsheet and script
4. **No Data Sharing**: No third-party services involved in data processing

## Troubleshooting

### Common Issues:

1. **Emails not sending**: 
   - Check Gmail quota limits (100 emails/day for personal accounts)
   - Verify email addresses are correct
   - Check spam folders

2. **Confirmation email not received**:
   - Verify the submitter's email address is valid
   - Check their spam/junk folder
   - Test with your own email address

3. **HTML not rendering**:
   - Some email clients block HTML by default
   - Plain text version is automatically included as fallback

4. **Script permissions**:
   - Ensure the script has permission to send emails
   - Re-authorize if needed in Google Apps Script

### Email Delivery Best Practices:

1. **Avoid Spam Filters**:
   - Professional subject lines
   - Balanced text-to-image ratio
   - No excessive capitalization or exclamation marks

2. **Mobile Optimization**:
   - Responsive HTML design
   - Readable font sizes
   - Touch-friendly buttons

3. **Professional Appearance**:
   - Consistent branding
   - Clean layout
   - Professional language

## Maintenance

- **Monitor Email Delivery**: Check for bounced emails regularly
- **Update Contact Information**: Keep your details current in the script
- **Review Submissions**: Regularly check the spreadsheet for new entries
- **Response Tracking**: Update the "Response Sent" column after replying
- **Archive Old Data**: Consider archiving submissions older than 6 months

## Support

If you encounter any issues:
1. Check the Google Apps Script execution logs
2. Test individual email functions
3. Verify all configuration settings
4. Check Google Workspace/Gmail settings
5. Review email delivery reports in Gmail

The enhanced email system provides a professional experience for both you and your potential clients, ensuring no opportunities are missed and all inquiries are handled promptly and professionally.