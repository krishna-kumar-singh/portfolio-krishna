'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').regex(/^[\+]?[0-9\s\-\(\)]+$/, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'krishnakumarsingh2212@gmail.com',
    href: 'mailto:krishnakumarsingh2212@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'krishna-kumar-singh',
    href: 'https://github.com/krishna-kumar-singh',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'krishna-kumar-singh-dev',
    href: 'https://www.linkedin.com/in/krishna-kumar-singh-dev/',
  },
  {
    icon: Twitter,
    label: 'Twitter/X',
    value: '@krishnasinghh_',
    href: 'https://x.com/krishnasinghh_',
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      
      // Replace this URL with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
      'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
      // check by testing a demo submission
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
      setSubmitStatus('success');
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      reset();
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Me
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and explore how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      {...register('name')}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register('email')}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      {...register('phone')}
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, requirements, or any questions you have..."
                      rows={6}
                      {...register('message')}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">Message sent successfully!</span>
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <div className="flex items-center gap-2 text-red-800 dark:text-red-200">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">Failed to send message</span>
                      </div>
                      <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                        Please try again or contact me directly via email.
                      </p>
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.value}</div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Let's Build Something Together</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm always excited to take on new challenges and collaborate on innovative projects. 
                  Whether you're a startup founder, recruiter, or fellow developer, I'd love to hear from you.
                </p>
                <div className="text-sm text-muted-foreground space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    <span>Based in India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3" />
                    <span>Usually responds within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3" />
                    <span>Open to internships and freelance projects</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}