'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Globe, Brain, ShoppingCart, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Full Stack Web Development',
    description: 'Dynamic web applications using modern frameworks and best practices',
    icon: Globe,
    features: [
      'React & Next.js Development',
      'PostgreSQL & MongoDB Integration',
      'Tailwind CSS & Shadcn/ui Design',
      'Authentication & Security',
      'API Development & Integration',
      'Responsive Design & Performance Optimization'
    ],
    technologies: ['Next.js', 'React', 'TypeScript',"AI Integration" ,'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Shadcn UI'],
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    title: 'AI Automation Systems',
    description: 'Intelligent automation solutions using cutting-edge AI technologies',
    icon: Brain,
    features: [
      'RAG (Retrieval-Augmented Generation) Systems',
      'Chatbot Development with AI Integration',
      'Python-based Machine Learning Solutions',
      'Vector Database Implementation',
      'Custom AI Workflows',
      'Data Processing & Analysis'
    ],
    technologies: ['Python', 'LangChain', 'OpenAI', 'Gemini AI', 'Vector DBs', 'TensorFlow'],
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    title: 'E-Commerce Development',
    description: 'Professional online stores with custom themes and optimized experiences',
    icon: ShoppingCart,
    features: [
      'Custom Shopify Theme Development',
      'Payment Gateway Integration',
      'Inventory Management Systems',
      'SEO Optimization',
      'Mobile-Responsive Design',
      'Analytics & Performance Tracking'
    ],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Payment APIs', 'Analytics'],
    color: 'bg-green-500/10 text-green-500',
  },
];

export default function ServicesPage() {
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
            Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            High-quality, scalable solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-1 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${service.color}`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Card className="max-w-2xl mx-auto bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your requirements and create something amazing together.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}