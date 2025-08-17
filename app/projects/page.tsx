'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { FloatingParticles } from '@/components/ui/floating-particles';

const projects = [
  {
    title: 'Anonymous Feedback App',
    description: 'Built with Next.js 14, TypeScript, and MongoDB, this app enables users to send anonymous messages with secure login and intuitive UX.',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Tailwind', 'Shadcn', 'MongoDB',"AI Integration" ,'Resend', 'NextAuth', 'JWT', 'Bcrypt'],
    features: [
      'Anonymous messaging',
      'Dashboard with feedback analytics',
      'AI-suggested messages using Gemini',
      'Secure login & email integration',
      'Real-time username availability check',
      'Fully responsive and production-ready'
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/krishna-kumar-singh/Anonymous-Feedback-App',
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
    image: 'https://res.cloudinary.com/duedvfcd9/image/upload/v1750876158/addictchokers_jhfmaw.jpg',
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-16 relative overflow-hidden">
      <AnimatedGradient />
      <FloatingParticles />
      
      {/* Background animated elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="h-6 w-6 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">My Work</span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Projects
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A collection of my work showcasing expertise in full-stack development, AI integration, and modern web technologies
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm relative h-full">
                {/* Animated border gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-lg" />
                
                <div className="relative z-10">
                  <div className="aspect-video overflow-hidden relative">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <CardTitle className="text-base mb-2">{project.title}</CardTitle>
                        </motion.div>
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
                          {project.features.map((feature, featureIndex) => (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + featureIndex * 0.1 }}
                            >
                              • {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.div
                              key={tag}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                delay: 0.8 + tagIndex * 0.1,
                                type: "spring",
                                stiffness: 300
                              }}
                            >
                              <Badge 
                                variant="secondary" 
                                className="text-xs hover:scale-110 transition-transform cursor-default"
                              >
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <motion.div
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Button
                            size="sm"
                            asChild
                            variant="outline"
                            disabled={!project.githubUrl || project.githubUrl === "#"}
                            className="relative overflow-hidden group"
                          >
                            {(!project.githubUrl || project.githubUrl === "#") ? (
                              <span className="flex items-center opacity-50 cursor-not-allowed">
                                <Github className="h-4 w-4 mr-1" />
                                Code
                              </span>
                            ) : (
                              <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                  initial={{ x: "-100%" }}
                                  whileHover={{ x: "0%" }}
                                  transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10 flex items-center">
                                  <Github className="h-4 w-4 mr-1" />
                                  Code
                                </span>
                              </Link>
                            )}
                          </Button>
                        </motion.div>
                        
                        <motion.div
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Button
                            size="sm"
                            asChild
                            disabled={!project.liveUrl || project.liveUrl === "#"}
                            className="relative overflow-hidden group"
                          >
                            {(!project.liveUrl || project.liveUrl === "#") ? (
                              <span className="flex items-center opacity-50 cursor-not-allowed">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Live Demo
                              </span>
                            ) : (
                              <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                  initial={{ x: "-100%" }}
                                  whileHover={{ x: "0%" }}
                                  transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10 flex items-center">
                                  <ExternalLink className="h-4 w-4 mr-1" />
                                  Live Demo
                                </span>
                              </Link>
                            )}
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}