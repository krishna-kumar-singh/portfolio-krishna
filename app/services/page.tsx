'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { Globe, Brain, ShoppingCart, ArrowRight, CheckCircle, Sparkles, Zap, Rocket } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { FloatingParticles } from '@/components/ui/floating-particles';

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
    color: 'bg-blue-500/10 text-blue-500 dark:bg-blue-500/20',
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
    color: 'bg-purple-500/10 text-purple-500 dark:bg-purple-500/20',
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
    color: 'bg-green-500/10 text-green-500 dark:bg-green-500/20',
  },
];

export default function ServicesPage() {
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
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
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
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
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-6 w-6 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">What I Offer</span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Services
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            High-quality, scalable solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 lg:grid-cols-1 xl:grid-cols-1 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm relative">
                {/* Animated border gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-lg" />
                
                <div className="relative z-10">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        transition={{ delay: index * 0.2 }}
                        className={`p-3 rounded-lg ${service.color}`}
                      >
                        <service.icon className="h-6 w-6" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <CardTitle className="text-base">{service.title}</CardTitle>
                        </motion.div>
                        <CardDescription className="mt-2 text-sm">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-sm">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + featureIndex * 0.1 }}
                              className="flex items-start gap-2 text-sm"
                            >
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.3 }}
                                className="text-green-500 mt-0.5 flex-shrink-0"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </motion.div>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-sm">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                delay: 0.8 + techIndex * 0.1,
                                type: "spring",
                                stiffness: 300
                              }}
                            >
                              <Badge 
                                variant="secondary" 
                                className="text-xs hover:scale-110 transition-transform cursor-default"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Card className="max-w-2xl mx-auto hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="p-8 relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <motion.div
                      variants={floatingVariants}
                      animate="animate"
                      className="p-2 bg-primary/10 rounded-lg"
                    >
                      <Rocket className="h-5 w-5 text-primary" />
                    </motion.div>
                    <h3 className="text-base font-semibold">
                      Ready to Start Your Project?
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Let's discuss your requirements and create something amazing together.
                  </p>
                  <Button size="lg" asChild className="relative overflow-hidden group">
                    <Link href="/contact">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center">
                        Get Started
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.div>
                      </span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}