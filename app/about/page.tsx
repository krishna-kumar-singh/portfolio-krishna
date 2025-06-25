'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Calendar, Code, Heart, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Me
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              The journey of a curious mind in the world of technology
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <p>
                  I've been a passionate tech enthusiast for as long as I can remember. From the days of CRT monitors to the rise of AI tools like ChatGPT, I've witnessed—and been fascinated by—the evolution of technology. These transitions didn't just amaze me; they inspired me to build, to create, and to contribute to something that holds real meaning and impact.
                </p>

                <p>
                  My actual coding journey began in Grade 10. I started with HTML and CSS, then JavaScript, and gradually moved into React. That's when things started to click. I built several frontend projects, then transitioned to exploring backends using Appwrite, MongoDB, and PostgreSQL. Later, I even explored <strong>vector databases</strong>, enabling me to build AI-powered tools like RAG (Retrieval-Augmented Generation) systems using Python.
                </p>

                <p>
                  One of my biggest milestones was learning and using <strong>Next.js 14</strong> in real-world projects. I've since built professional-grade applications and led the development of my school's official website. I also won a hackathon and began working on my own venture — <strong>Fodenge</strong>, a bite-sized AI-based learning platform for students.
                </p>

                <p>
                  Every challenge, every bug, every breakthrough has added to the thrill. I'm here to learn more, build more, and leave an impact — because for me, <strong>technology isn't just a skill—it's a superpower to shape the future</strong>.
                </p>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Quick Facts</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Grade:</span>
                        <span>12th (Senior Year)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Started Coding:</span>
                        <span>Grade 10 (2022)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span>India</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Interests</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Coding</Badge>
                      <Badge variant="secondary">Volleyball</Badge>
                      <Badge variant="secondary">AI Research</Badge>
                      <Badge variant="secondary">Open Source</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Current Focus</h3>
                    </div>
                    <ul className="text-sm space-y-2">
                      <li>• Building AI-powered applications</li>
                      <li>• Developing Fodenge platform</li>
                      <li>• Developing Last Period</li>
                      <li>• Contributing to open source</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}