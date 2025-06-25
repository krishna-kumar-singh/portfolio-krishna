/**
 * Utility functions for form handling and validation
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormSubmissionResponse {
  status: 'success' | 'error';
  message: string;
  error?: string;
}

/**
 * Submit form data to Google Apps Script
 */
export async function submitContactForm(data: ContactFormData): Promise<FormSubmissionResponse> {
  try {
    // This should be replaced with your actual Google Apps Script URL
    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 
      'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('message', data.message);
    formData.append('timestamp', new Date().toISOString());

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors', // Required for Google Apps Script
    });

    // Since we're using no-cors mode, we can't read the response
    // We'll assume success if no error is thrown
    return {
      status: 'success',
      message: 'Form submitted successfully'
    };

  } catch (error) {
    console.error('Form submission error:', error);
    return {
      status: 'error',
      message: 'Failed to submit form',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Validate phone number format
 */
export function validatePhoneNumber(phone: string): boolean {
  // Basic phone number validation - accepts various formats
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone.trim());
}

/**
 * Sanitize form input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000); // Limit length
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-numeric characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // Basic formatting for US numbers
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  // Return as-is for international numbers
  return phone;
}

/**
 * Generate a unique submission ID
 */
export function generateSubmissionId(): string {
  return `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Check if email domain is valid (basic check)
 */
export function isValidEmailDomain(email: string): boolean {
  const domain = email.split('@')[1];
  if (!domain) return false;
  
  // Basic domain validation
  const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
  return domainRegex.test(domain);
}

/**
 * Rate limiting helper (client-side)
 */
export class FormRateLimiter {
  private static lastSubmission: number = 0;
  private static readonly RATE_LIMIT_MS = 30000; // 30 seconds

  static canSubmit(): boolean {
    const now = Date.now();
    if (now - this.lastSubmission < this.RATE_LIMIT_MS) {
      return false;
    }
    this.lastSubmission = now;
    return true;
  }

  static getTimeUntilNextSubmission(): number {
    const now = Date.now();
    const timeSinceLastSubmission = now - this.lastSubmission;
    return Math.max(0, this.RATE_LIMIT_MS - timeSinceLastSubmission);
  }
}