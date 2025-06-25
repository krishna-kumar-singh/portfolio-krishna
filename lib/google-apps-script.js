/**
 * Google Apps Script Code for Form Submission Handler
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

function doPost(e) {
  try {
    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // Add headers
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Message',
        'Status'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
      
      // Set column widths
      sheet.setColumnWidth(1, 150); // Timestamp
      sheet.setColumnWidth(2, 150); // Name
      sheet.setColumnWidth(3, 200); // Email
      sheet.setColumnWidth(4, 120); // Phone
      sheet.setColumnWidth(5, 300); // Message
      sheet.setColumnWidth(6, 100); // Status
    }
    
    // Get form data
    const formData = e.parameter;
    const timestamp = new Date();
    
    // Prepare row data
    const rowData = [
      timestamp,
      formData.name || '',
      formData.email || '',
      formData.phone || '',
      formData.message || '',
      'New'
    ];
    
    // Add data to sheet
    sheet.appendRow(rowData);
    
    // Format the new row
    const lastRow = sheet.getLastRow();
    const dataRange = sheet.getRange(lastRow, 1, 1, 6);
    
    // Alternate row colors for better readability
    if (lastRow % 2 === 0) {
      dataRange.setBackground('#f8f9fa');
    }
    
    // Auto-resize columns if needed
    sheet.autoResizeColumns(1, 6);
    
    // Send email notification (optional)
    sendEmailNotification(formData, timestamp);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Return error response
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
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput('Contact Form Handler is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}

function sendEmailNotification(formData, timestamp) {
  try {
    // Email configuration
    const recipientEmail = 'krishnakumarsingh2212@gmail.com'; // Your email
    const subject = `New Contact Form Submission from ${formData.name}`;
    
    const emailBody = `
      New contact form submission received:
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Message: ${formData.message}
      
      Submitted at: ${timestamp.toLocaleString()}
      
      Please respond to this inquiry promptly.
    `;
    
    // Send email
    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      body: emailBody
    });
    
    console.log('Email notification sent successfully');
    
  } catch (error) {
    console.error('Failed to send email notification:', error);
    // Don't throw error here to avoid breaking the main form submission
  }
}

function testFormSubmission() {
  // Test function to verify the script works
  const testData = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      message: 'This is a test message',
      timestamp: new Date().toISOString()
    }
  };
  
  const result = doPost(testData);
  console.log('Test result:', result.getContent());
}

function setupSpreadsheet() {
  // Helper function to set up the spreadsheet with proper formatting
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }
    
    // Clear existing content
    sheet.clear();
    
    // Add headers
    const headers = [
      'Timestamp',
      'Name',
      'Email',
      'Phone',
      'Message',
      'Status'
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('white');
    headerRange.setHorizontalAlignment('center');
    
    // Set column widths
    sheet.setColumnWidth(1, 150); // Timestamp
    sheet.setColumnWidth(2, 150); // Name
    sheet.setColumnWidth(3, 200); // Email
    sheet.setColumnWidth(4, 120); // Phone
    sheet.setColumnWidth(5, 300); // Message
    sheet.setColumnWidth(6, 100); // Status
    
    // Freeze header row
    sheet.setFrozenRows(1);
    
    console.log('Spreadsheet setup completed successfully');
    
  } catch (error) {
    console.error('Error setting up spreadsheet:', error);
  }
}