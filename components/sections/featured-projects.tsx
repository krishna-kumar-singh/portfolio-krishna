'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const featuredProjects = [
  {
    title: 'Anonymous Feedback App',
    description: 'Secure anonymous messaging platform with AI-powered suggestions and real-time analytics.',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'MongoDB', 'NextAuth', 'AI Integration'],
    liveUrl: 'https://anonymous-feedback-app-fawn.vercel.app/',
    githubUrl: 'https://github.com/krishna-kumar-singh/Anonymous-Feedback-App',
  },
  {
    title: 'SP Architects Website',
    description: 'Professional portfolio website showcasing architectural designs with automated contact system.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Google Sheets API', 'Vercel'],
    liveUrl: 'https://sparchitects.vercel.app',
    githubUrl: '#',
  },
  {
    title: 'SOSE School Website',
    description: 'Official school website with admin dashboard and dynamic content management.',
    image: 'https://soselajpatnagar.in/logo.png',
    tags: ['Next.js', 'PostgreSQL', 'Admin Dashboard'],
    liveUrl: 'https://soselajpatnagar.in',
    githubUrl: '#',
  },
];

export function FeaturedProjects() {
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
    <section className="py-16 relative overflow-hidden">
      {/* Animated background */}
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
            variants={cardVariants}
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
          
          <motion.h2
            variants={cardVariants}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="mt-4 text-lg text-muted-foreground"
          >
            A showcase of my recent work and achievements
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project, index) => (
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
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm relative">
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
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <CardTitle className="line-clamp-1 text-base">{project.title}</CardTitle>
                    </motion.div>
                    <CardDescription className="line-clamp-2 text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: 0.5 + tagIndex * 0.1,
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
                    
                    <div className="flex gap-2">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Button size="sm" asChild className="relative overflow-hidden group">
                          {project.liveUrl && project.liveUrl !== "#" ? (
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
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
                          ) : (
                            <span className="flex items-center opacity-50 cursor-not-allowed">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Live Demo
                            </span>
                          )}
                        </Button>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Button size="sm" variant="outline" asChild>
                          {project.githubUrl && project.githubUrl !== "#" ? (
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </Link>
                          ) : (
                            <span className="flex items-center opacity-50 cursor-not-allowed">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Button size="lg" asChild className="relative overflow-hidden group">
              <Link href="/projects">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">View All Projects</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}