# Google Sheets Form Submission Setup Guide

This guide will help you set up the Google Sheets integration for the contact form on Krishna Kumar Singh's portfolio website.

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
5. Save the project with a name like "Portfolio Contact Form Handler"

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
2. Find the line with `const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';`
3. Replace `YOUR_SCRIPT_ID` with your actual script ID from the Web App URL

## Step 5: Test the Integration

1. Run the portfolio website locally
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your Google Spreadsheet to see if the data appears

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

## Features Included

### ✅ Automatic Data Collection
- All form submissions are automatically saved to Google Sheets
- Timestamps are added for each submission
- Data is properly formatted and organized

### ✅ Email Notifications
- You'll receive an email notification for each new submission
- Emails include all form details and submission time

### ✅ Error Handling
- Robust error handling for failed submissions
- User-friendly error messages
- Fallback options for users

### ✅ Data Validation
- Form validation on the frontend
- Server-side data processing
- Spam protection through form validation

### ✅ Professional Formatting
- Clean spreadsheet layout with headers
- Alternating row colors for readability
- Auto-resized columns
- Frozen header row

## Security Considerations

1. **Access Control**: The script is set to "Anyone" access, but it only accepts POST requests with form data
2. **Data Validation**: All form inputs are validated before processing
3. **Error Logging**: Errors are logged for debugging without exposing sensitive information
4. **Email Privacy**: Email notifications are sent only to your specified address

## Troubleshooting

### Common Issues:

1. **Form not submitting**: Check that the Web App URL is correct in the contact form
2. **No data in spreadsheet**: Verify the spreadsheet ID in the Apps Script
3. **No email notifications**: Check your Gmail spam folder and verify the recipient email
4. **Permission errors**: Ensure the script has proper permissions to access your spreadsheet

### Testing the Setup:

You can test the Google Apps Script directly:
1. In the Apps Script editor, run the `testFormSubmission()` function
2. Check the execution log for any errors
3. Verify that test data appears in your spreadsheet

## Maintenance

- Regularly check the spreadsheet for new submissions
- Update the "Status" column to track your response progress
- Consider archiving old submissions periodically
- Monitor the Apps Script execution logs for any issues

## Support

If you encounter any issues with the setup, you can:
1. Check the Google Apps Script execution logs
2. Verify all IDs and URLs are correctly configured
3. Test the form submission process step by step
4. Contact Google Apps Script support for platform-specific issues