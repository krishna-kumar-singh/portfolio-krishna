/**
 * Google Apps Script Code for Form Submission Handler with Enhanced Email System
 * 
 * Instructions:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Create a Google Spreadsheet and note its ID from the URL
 * 5. Replace 'YOUR_SPREADSHEET_ID' with your actual spreadsheet ID
 * 6. Deploy as a web app with execute permissions set to "Anyone"
 * 7. Copy the web app URL and update it in the contact form
 */

// Replace with your Google Spreadsheet ID
const SPREADSHEET_ID = '1uh7fKsQBwjnWVVspq0gf0XM7GCN7MfE4iQj01WJiSF8';
const SHEET_NAME = 'Contact Form Submissions';

// Email configuration
const ADMIN_EMAIL = 'krishnakumarsingh2212@gmail.com';
const FROM_NAME = 'Krishna Kumar Singh';
const WEBSITE_URL = 'https://krishnakumarsingh.vercel.app'; // Update with your actual domain

function doPost(e) {
  try {
    console.log('Incoming POST event:', JSON.stringify(e));

    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Message',
        'Status',
        'Response Sent'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
      sheet.setColumnWidth(1, 150);
      sheet.setColumnWidth(2, 150);
      sheet.setColumnWidth(3, 200);
      sheet.setColumnWidth(4, 120);
      sheet.setColumnWidth(5, 300);
      sheet.setColumnWidth(6, 100);
      sheet.setColumnWidth(7, 120);
    }

    // ✅ NEW: Smart parsing of request body
    let formData = {};
    if (e.postData && e.postData.contents) {
      try {
        formData = JSON.parse(e.postData.contents);
        console.log('Parsed JSON body:', formData);
      } catch (err) {
        console.error('Failed to parse JSON body:', err);
      }
    }
    if (!formData.name && e.parameter && Object.keys(e.parameter).length > 0) {
      formData = e.parameter;
      console.log('Using URL-encoded parameters:', formData);
    }

    const timestamp = new Date();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('Missing required fields');
    }

    // Prepare row data
    const rowData = [
      timestamp,
      formData.name || '',
      formData.email || '',
      formData.phone || '',
      formData.message || '',
      'New',
      'No'
    ];

    // Add data to sheet
    sheet.appendRow(rowData);
    const lastRow = sheet.getLastRow();
    const dataRange = sheet.getRange(lastRow, 1, 1, 7);
    if (lastRow % 2 === 0) {
      dataRange.setBackground('#f8f9fa');
    }
    sheet.autoResizeColumns(1, 7);

    // Send emails
    const emailResults = sendEmails(formData, timestamp);

    if (emailResults.confirmationSent) {
      sheet.getRange(lastRow, 7).setValue('Yes');
    }

    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Form submitted successfully',
        emailsSent: emailResults
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Error processing form submission:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Failed to process form submission',
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Contact Form Handler is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}

function sendEmails(formData, timestamp) {
  const results = {
    confirmationSent: false,
    notificationSent: false,
    errors: []
  };

  try {
    sendConfirmationEmail(formData, timestamp);
    results.confirmationSent = true;
    console.log('Confirmation email sent successfully to:', formData.email);
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    results.errors.push('Confirmation email failed: ' + error.toString());
  }

  try {
    sendNotificationEmail(formData, timestamp);
    results.notificationSent = true;
    console.log('Notification email sent successfully to:', ADMIN_EMAIL);
  } catch (error) {
    console.error('Failed to send notification email:', error);
    results.errors.push('Notification email failed: ' + error.toString());
  }

  return results;
}

function sendConfirmationEmail(formData, timestamp) {
  const subject = `Thank you for reaching out, ${formData.name}!`;
  
  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; }
        .content { padding: 30px 20px; background: #f9f9f9; }
        .card { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px; }
        .highlight { background: #e3f2fd; padding: 15px; border-radius: 6px; border-left: 4px solid #2196f3; }
        .footer { background: #333; color: white; padding: 20px; text-align: center; font-size: 14px; }
        .social-links { margin: 15px 0; }
        .social-links a { color: #667eea; text-decoration: none; margin: 0 10px; }
        .button { display: inline-block; background: #667eea; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
        h1 { margin: 0; font-size: 28px; }
        h2 { color: #667eea; margin-top: 0; }
        .submission-details { background: #f5f5f5; padding: 15px; border-radius: 6px; margin: 15px 0; }
        .detail-row { margin: 8px 0; }
        .label { font-weight: bold; color: #555; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Thank You for Reaching Out!</h1>
        <p>Your message has been received successfully</p>
      </div>
      
      <div class="content">
        <div class="card">
          <h2>Hi ${formData.name},</h2>
          <p>Thank you for taking the time to contact me! I've received your message and wanted to confirm that it has been successfully submitted.</p>
          
          <div class="highlight">
            <strong>What happens next?</strong>
            <ul>
              <li>I typically respond to all inquiries within <strong>24 hours</strong></li>
              <li>I'll review your message and get back to you with a detailed response</li>
              <li>If your inquiry is urgent, feel free to reach out directly via phone or LinkedIn</li>
            </ul>
          </div>
        </div>
        
        <div class="card">
          <h2>Your Submission Details</h2>
          <div class="submission-details">
            <div class="detail-row">
              <span class="label">Name:</span> ${formData.name}
            </div>
            <div class="detail-row">
              <span class="label">Email:</span> ${formData.email}
            </div>
            ${formData.phone ? `<div class="detail-row"><span class="label">Phone:</span> ${formData.phone}</div>` : ''}
            <div class="detail-row">
              <span class="label">Submitted:</span> ${timestamp.toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </div>
            <div class="detail-row">
              <span class="label">Message:</span><br>
              <div style="margin-top: 8px; padding: 10px; background: white; border-radius: 4px; font-style: italic;">
                "${formData.message}"
              </div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <h2>About Me</h2>
          <p>I'm Krishna Kumar Singh, a Full Stack Developer currently in Grade 12, passionate about building AI systems and modern web applications. I specialize in:</p>
          <ul>
            <li><strong>Full Stack Development:</strong> React, Next.js, Node.js, PostgreSQL</li>
            <li><strong>AI Integration:</strong> RAG systems, Python, Machine Learning</li>
            <li><strong>E-commerce Solutions:</strong> Shopify, custom themes, payment integration</li>
          </ul>
          
          <div class="social-links">
            <strong>Connect with me:</strong><br>
            <a href="https://github.com/krishna-kumar-singh">GitHub</a> |
            <a href="https://www.linkedin.com/in/krishna-kumar-singh-dev/">LinkedIn</a> |
            <a href="https://x.com/krishnasinghh_">Twitter/X</a>
          </div>
          
          <a href="${WEBSITE_URL}" class="button">Visit My Portfolio</a>
        </div>
      </div>
      
      <div class="footer">
        <p><strong>Krishna Kumar Singh</strong><br>
        Full Stack Developer & AI Explorer<br>
        📧 krishnakumarsingh2212@gmail.com</p>
        
        <p style="font-size: 12px; margin-top: 15px; opacity: 0.8;">
          This is an automated confirmation email. Please do not reply directly to this message.
          If you need immediate assistance, please contact me directly via the methods listed above.
        </p>
      </div>
    </body>
    </html>
  `;
  
  const plainTextBody = `
Hi ${formData.name},

Thank you for reaching out! I've received your message and wanted to confirm that it has been successfully submitted.

SUBMISSION DETAILS:
- Name: ${formData.name}
- Email: ${formData.email}
${formData.phone ? `- Phone: ${formData.phone}` : ''}
- Submitted: ${timestamp.toLocaleString()}
- Message: "${formData.message}"

WHAT HAPPENS NEXT:
• I typically respond to all inquiries within 24 hours
• I'll review your message and get back to you with a detailed response
• If your inquiry is urgent, feel free to reach out directly via LinkedIn or phone

ABOUT ME:
I'm Krishna Kumar Singh, a Full Stack Developer currently in Grade 12, passionate about building AI systems and modern web applications.

Connect with me:
• GitHub: https://github.com/krishna-kumar-singh
• LinkedIn: https://www.linkedin.com/in/krishna-kumar-singh-dev/
• Twitter/X: https://x.com/krishnasinghh_
• Portfolio: ${WEBSITE_URL}

Best regards,
Krishna Kumar Singh
Full Stack Developer & AI Explorer
📧 krishnakumarsingh2212@gmail.com

---
This is an automated confirmation email. Please do not reply directly to this message.
  `;
  
  // Send email with both HTML and plain text versions
  MailApp.sendEmail({
    to: formData.email,
    subject: subject,
    htmlBody: htmlBody,
    body: plainTextBody,
    name: FROM_NAME
  });
}

function sendNotificationEmail(formData, timestamp) {
  const subject = `🚀 New Contact Form Submission from ${formData.name}`;
  
  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 25px 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 15px; }
        .urgent { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 6px; margin: 15px 0; }
        .contact-details { background: #e8f5e8; padding: 15px; border-radius: 6px; border-left: 4px solid #27ae60; }
        .message-box { background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #3498db; margin: 15px 0; }
        .footer { background: #2c3e50; color: white; padding: 15px; text-align: center; font-size: 14px; }
        h1 { margin: 0; font-size: 24px; }
        h2 { color: #e74c3c; margin-top: 0; }
        .detail-row { margin: 8px 0; }
        .label { font-weight: bold; color: #2c3e50; }
        .priority { color: #e74c3c; font-weight: bold; }
        .action-needed { background: #ff6b6b; color: white; padding: 10px 20px; border-radius: 5px; text-align: center; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🚀 New Contact Form Submission</h1>
        <p>Someone just reached out through your portfolio!</p>
      </div>
      
      <div class="content">
        <div class="urgent">
          <strong>⚡ Action Required:</strong> A new contact form submission needs your attention!
        </div>
        
        <div class="card">
          <h2>Contact Information</h2>
          <div class="contact-details">
            <div class="detail-row">
              <span class="label">👤 Name:</span> ${formData.name}
            </div>
            <div class="detail-row">
              <span class="label">📧 Email:</span> <a href="mailto:${formData.email}">${formData.email}</a>
            </div>
            ${formData.phone ? `<div class="detail-row"><span class="label">📱 Phone:</span> <a href="tel:${formData.phone}">${formData.phone}</a></div>` : ''}
            <div class="detail-row">
              <span class="label">🕒 Submitted:</span> ${timestamp.toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </div>
          </div>
        </div>
        
        <div class="card">
          <h2>📝 Message</h2>
          <div class="message-box">
            <p style="margin: 0; font-style: italic; font-size: 16px; line-height: 1.6;">
              "${formData.message}"
            </p>
          </div>
        </div>
        
        <div class="action-needed">
          <strong>🎯 Remember:</strong> Aim to respond within 24 hours for the best impression!
        </div>
        
        <div class="card">
          <h2>📊 Quick Stats</h2>
          <p><strong>Submission ID:</strong> ${timestamp.getTime()}</p>
          <p><strong>Form Source:</strong> Portfolio Contact Page</p>
          <p><strong>User Agent:</strong> Web Form Submission</p>
          <p><strong>Status:</strong> <span class="priority">Awaiting Response</span></p>
        </div>
      </div>
      
      <div class="footer">
        <p><strong>Portfolio Contact Form Handler</strong><br>
        Automated notification system</p>
        <p style="font-size: 12px; margin-top: 10px; opacity: 0.8;">
          This email was automatically generated when someone submitted your contact form.
        </p>
      </div>
    </body>
    </html>
  `;
  
  const plainTextBody = `
🚀 NEW CONTACT FORM SUBMISSION

ACTION REQUIRED: A new contact form submission needs your attention!

CONTACT INFORMATION:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
${formData.phone ? `📱 Phone: ${formData.phone}` : ''}
🕒 Submitted: ${timestamp.toLocaleString()}

MESSAGE:
"${formData.message}"

QUICK STATS:
• Submission ID: ${timestamp.getTime()}
• Form Source: Portfolio Contact Page
• Status: Awaiting Response

🎯 REMINDER: Aim to respond within 24 hours for the best impression!

---
This email was automatically generated when someone submitted your contact form.
  `;
  
  // Send email with both HTML and plain text versions
  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
    body: plainTextBody,
    name: 'Portfolio Contact Form'
  });
}

function testFormSubmission() {
  const testData = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      message: 'This is a test message to verify the email system is working correctly.',
      timestamp: new Date().toISOString()
    }
  };
  const result = doPost(testData);
  console.log('Test result:', result.getContent());
}

function setupSpreadsheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }
    sheet.clear();
    const headers = [
      'Timestamp', 'Name', 'Email', 'Phone', 'Message', 'Status', 'Response Sent'
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('white');
    headerRange.setHorizontalAlignment('center');
    sheet.setColumnWidth(1, 150);
    sheet.setColumnWidth(2, 150);
    sheet.setColumnWidth(3, 200);
    sheet.setColumnWidth(4, 120);
    sheet.setColumnWidth(5, 300);
    sheet.setColumnWidth(6, 100);
    sheet.setColumnWidth(7, 120);
    sheet.setFrozenRows(1);
    console.log('Spreadsheet setup completed successfully');
  } catch (error) {
    console.error('Error setting up spreadsheet:', error);
  }
}

function testConfirmationEmail() {
  const testData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    message: 'I am interested in discussing a potential project collaboration. Could we schedule a call this week?'
  };
  
  try {
    sendConfirmationEmail(testData, new Date());
    console.log('Confirmation email test sent successfully');
  } catch (error) {
    console.error('Confirmation email test failed:', error);
  }
}

function testNotificationEmail() {
  const testData = {
    name: 'Jane Smith',
    email: 'jane.smith@startup.com',
    phone: '+1 (555) 987-6543',
    message: 'Hi Krishna, I came across your portfolio and I am impressed with your work. We are a startup looking for a full-stack developer. Would you be interested in a freelance opportunity?'
  };
  
  try {
    sendNotificationEmail(testData, new Date());
    console.log('Notification email test sent successfully');
  } catch (error) {
    console.error('Notification email test failed:', error);
  }
}