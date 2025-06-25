'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Anonymous Feedback App',
    description: 'Built with Next.js 14, TypeScript, and MongoDB, this app enables users to send anonymous messages with secure login and intuitive UX.',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Tailwind', 'Shadcn', 'MongoDB', 'Resend', 'NextAuth', 'JWT', 'Bcrypt'],
    features: [
      'Anonymous messaging',
      'Dashboard with feedback analytics',
      'AI-suggested messages using Gemini',
      'Secure login & email integration',
      'Real-time username availability check',
      'Fully responsive and production-ready'
    ],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web Application',
  },
  {
    title: 'SP Architects Official Website',
    description: 'A sleek portfolio site built for SP Architects to showcase their design work and services.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js 14', 'Tailwind CSS', 'Shadcn', 'Google Sheets API', 'Google Apps Script', 'Vercel'],
    features: [
      'Form submission with automated emails',
      'Responsive layout with animations',
      'SEO-optimized and deployed on Vercel',
      'Project sections with clear case-study layouts'
    ],
    liveUrl: 'https://sparchitects.vercel.app',
    githubUrl: '#',
    category: 'Portfolio Website',
  },
  {
    title: 'Addict Chokers – Shopify E-commerce',
    description: 'Built a custom Shopify store for a niche jewelry brand with a dark theme and conversion-driven layout.',
    image: 'https://asset.cloudinary.com/duedvfcd9/7e5bb6bab382b2b075f4cdb6ff5728a3',
    tags: ['Shopify', 'Liquid', 'CSS', 'JavaScript', 'Payment Integration'],
    features: [
      'Clean navigation and responsive layout',
      'Secure checkout with Shopify Payments',
      'Email subscription widget',
      'Sales badges and promotional highlights'
    ],
    liveUrl: 'https://addictchokers.life',
    githubUrl: '#',
    category: 'E-commerce',
  },
  {
    title: 'SOSE Lajpat Nagar – Official School Website',
    description: 'Developed the official website for Dr. B.R. Ambedkar SOSE, Lajpat Nagar.',
    image: 'https://soselajpatnagar.in/logo.png',
    tags: ['Next.js 14', 'Shadcn', 'PostgreSQL', 'Admin Dashboard'],
    features: [
      'Daily events & contact form',
      'Admin dashboard for secure content editing',
      'Fully responsive with real school visuals'
    ],
    liveUrl: 'https://soselajpatnagar.in',
    githubUrl: '#',
    category: 'Institutional Website',
  },
];

export default function ProjectsPage() {
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
            Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work showcasing expertise in full-stack development, AI integration, and modern web technologies
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <Badge variant="outline" className="mb-2">{project.category}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" asChild>
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}