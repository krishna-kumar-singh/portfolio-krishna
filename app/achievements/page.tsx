'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { Trophy, Star, Zap, Users, Award, Target, Sparkles, Rocket } from 'lucide-react';
import { useRef } from 'react';
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { FloatingParticles } from '@/components/ui/floating-particles';

const achievements = [
  {
    title: 'Winner - Delhi Hackathon 2023-24',
    category: 'Junior Category',
    description: 'Won first place in the Delhi Hackathon junior category, competing against talented developers from across the region.',
    icon: Trophy,
    color: 'bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20',
    date: '2023-24',
    type: 'Competition',
  },
  {
    title: 'Top 200 Startup Ideas - Vivo Ignite 3rd Edition',
    category: 'Among 37,000 participants',
    description: 'Selected as one of the top 200 startup ideas in Vivo Ignite 3rd Edition from a pool of 37,000 participants nationwide.',
    icon: Star,
    color: 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/20',
    date: '2024-2025',
    type: 'Startup Competition',
  },
  {
    title: 'Founder - Fodenge',
    category: 'AI-powered Learning Platform',
    description: 'Founded and developed Fodenge, a bite-sized AI-based learning platform specifically designed for JEE aspirants.',
    icon: Zap,
    color: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20',
    date: '2025',
    type: 'Entrepreneurship',
  },
  {
    title: 'School Website Development Lead',
    category: 'SOSE Lajpat Nagar',
    description: 'Led the complete development of the official website for Dr. B.R. Ambedkar SOSE, Lajpat Nagar, from concept to deployment.',
    icon: Users,
    color: 'bg-green-500/10 text-green-600 dark:bg-green-500/20',
    date: '2024',
    type: 'Leadership',
  },
  {
    title: 'Multiple Production Deployments',
    category: 'Real-world Applications',
    description: 'Successfully built and deployed several production-ready applications while still in high school, serving real users.',
    icon: Award,
    color: 'bg-orange-500/10 text-orange-600 dark:bg-orange-500/20',
    date: '2023-24',
    type: 'Technical Achievement',
  },
  {
    title: 'Self-taught Full Stack Developer',
    category: 'Comprehensive Technology Stack',
    description: 'Mastered React, Next.js, AI workflows, database design, and modern development practices through self-directed learning.',
    icon: Target,
    color: 'bg-red-500/10 text-red-600 dark:bg-red-500/20',
    date: '2023-24',
    type: 'Learning Achievement',
  },
];

const stats = [
  { label: 'Production Apps Built', value: '8+' },
  { label: 'Technologies Mastered', value: '15+' },
  { label: 'Years of Experience', value: '2+' },
  { label: 'Projects Completed', value: '20+' },
];

export default function AchievementsPage() {
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
              <Trophy className="h-6 w-6 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">My Achievements</span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Achievements
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Milestones and recognition earned through dedication and continuous learning
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="text-2xl font-bold text-primary mb-1"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm relative">
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
                    <div className="flex items-start gap-3">
                      <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        transition={{ delay: index * 0.2 }}
                        className={`p-3 rounded-lg ${achievement.color}`}
                      >
                        <achievement.icon className="h-5 w-5" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Badge variant="outline" className="text-xs">
                              {achievement.type}
                            </Badge>
                          </motion.div>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xs text-muted-foreground"
                          >
                            {achievement.date}
                          </motion.span>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <CardTitle className="text-base leading-tight">
                            {achievement.title}
                          </CardTitle>
                        </motion.div>
                        <CardDescription className="text-sm font-medium text-primary mt-1">
                          {achievement.category}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm text-muted-foreground"
                    >
                      {achievement.description}
                    </motion.p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
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
                      The Journey Continues
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm">
                    These achievements represent just the beginning. I'm constantly learning, 
                    building, and pushing the boundaries of what's possible with technology.
                  </p>
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-sm text-muted-foreground italic"
                  >
                    "Success is not final, failure is not fatal: it is the courage to continue that counts."
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}