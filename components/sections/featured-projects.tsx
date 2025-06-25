'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuredProjects = [
  {
    title: 'Anonymous Feedback App',
    description: 'Secure anonymous messaging platform with AI-powered suggestions and real-time analytics.',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'MongoDB', 'NextAuth', 'AI Integration'],
    liveUrl: '#',
    githubUrl: '#',
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
  return (
    <section className="py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of my recent work and achievements
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"     className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </Link>
                    ) : (
                      <span className="flex items-center opacity-50 cursor-not-allowed">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </span>
                    )}
                  </Button>
                  
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
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button size="lg" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}