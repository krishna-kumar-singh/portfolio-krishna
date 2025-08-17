'use client'
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const socialLinks = [
    {
      href: "https://github.com/krishna-kumar-singh",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/krishna-kumar-singh-dev/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://x.com/krishnasinghh_",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "mailto:krishnakumarsingh2212@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <footer className="border-t bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center gap-4 md:flex-row"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4 text-primary" />
              </motion.div>
              <p className="text-sm text-muted-foreground">
                © 2025 Krishna Kumar Singh. All rights reserved.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex items-center space-x-2"
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  asChild
                  className="hover:bg-primary/10 dark:hover:bg-primary/20"
                >
                  <Link 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}