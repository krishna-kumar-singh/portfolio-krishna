'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { Calendar, Code, Heart, Zap, Sparkles, Brain, Rocket } from 'lucide-react';
import { useRef } from 'react';
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { FloatingParticles } from '@/components/ui/floating-particles';

export default function AboutPage() {
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
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
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
              <span className="text-sm font-medium text-primary">My Story</span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              About Me
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg text-muted-foreground"
            >
              The journey of a curious mind in the world of technology
            </motion.p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <motion.div
                variants={itemVariants}
                className="prose prose-lg dark:prose-invert max-w-none space-y-6"
              >
                <motion.p
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="text-base leading-relaxed"
                >
                  I've been a passionate tech enthusiast for as long as I can remember. From the days of CRT monitors to the rise of AI tools like ChatGPT, I've witnessed—and been fascinated by—the evolution of technology. These transitions didn't just amaze me; they inspired me to build, to create, and to contribute to something that holds real meaning and impact.
                </motion.p>

                <motion.p
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="text-base leading-relaxed"
                >
                  My actual coding journey began in Grade 10. I started with HTML and CSS, then JavaScript, and gradually moved into React. That's when things started to click. I built several frontend projects, then transitioned to exploring backends using Appwrite, MongoDB, and PostgreSQL. Later, I even explored <motion.span className="text-primary font-semibold" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>vector databases</motion.span>, enabling me to build AI-powered tools like RAG (Retrieval-Augmented Generation) systems using Python.
                </motion.p>

                <motion.p
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="text-base leading-relaxed"
                >
                  One of my biggest milestones was learning and using <motion.span className="text-primary font-semibold" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>Next.js 14</motion.span> in real-world projects. I've since built professional-grade applications and led the development of my school's official website. I also won a hackathon and began working on my own venture — <motion.span className="text-primary font-semibold" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>Fodenge</motion.span>, a bite-sized AI-based learning platform for students.
                </motion.p>

                <motion.p
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="text-base leading-relaxed"
                >
                  Every challenge, every bug, every breakthrough has added to the thrill. I'm here to learn more, build more, and leave an impact — because for me, <motion.span className="text-primary font-semibold" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>technology isn't just a skill—it's a superpower to shape the future</motion.span>.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                  <CardContent className="p-6 relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          variants={floatingVariants}
                          animate="animate"
                          className="p-2 bg-primary/10 rounded-lg"
                        >
                          <Calendar className="h-5 w-5 text-primary" />
                        </motion.div>
                        <h3 className="font-semibold text-base">Quick Facts</h3>
                      </div>
                      <div className="space-y-2 text-sm">
                        {[
                          { label: "Grade", value: "12th (Senior Year)" },
                          { label: "Started Coding", value: "Grade 10 (2022)" },
                          { label: "Location", value: "India" },
                        ].map((fact, index) => (
                          <motion.div
                            key={fact.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex justify-between"
                          >
                            <span className="text-muted-foreground">{fact.label}:</span>
                            <span>{fact.value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                  <CardContent className="p-6 relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          variants={floatingVariants}
                          animate="animate"
                          transition={{ delay: 0.5 }}
                          className="p-2 bg-pink-500/10 rounded-lg"
                        >
                          <Heart className="h-5 w-5 text-pink-500" />
                        </motion.div>
                        <h3 className="font-semibold text-base">Interests</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Coding", "Volleyball", "AI Research", "Open Source"].map((interest, index) => (
                          <motion.div
                            key={interest}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 300 }}
                          >
                            <Badge variant="secondary" className="text-xs hover:scale-110 transition-transform cursor-default">
                              {interest}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                  <CardContent className="p-6 relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          variants={floatingVariants}
                          animate="animate"
                          transition={{ delay: 1 }}
                          className="p-2 bg-orange-500/10 rounded-lg"
                        >
                          <Zap className="h-5 w-5 text-orange-500" />
                        </motion.div>
                        <h3 className="font-semibold text-base">Current Focus</h3>
                      </div>
                      <ul className="text-sm space-y-2">
                        {[
                          "Building AI-powered applications",
                          "Developing Fodenge platform",
                          "Developing Last Period",
                          "Contributing to open source",
                        ].map((focus, index) => (
                          <motion.li
                            key={focus}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 + index * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                              className="w-1 h-1 bg-primary rounded-full"
                            />
                            {focus}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}