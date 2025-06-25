'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Users, Award, Target } from 'lucide-react';

const achievements = [
  {
    title: 'Winner - Delhi Hackathon 2023-24',
    category: 'Junior Category',
    description: 'Won first place in the Delhi Hackathon junior category, competing against talented developers from across the region.',
    icon: Trophy,
    color: 'bg-yellow-500/10 text-yellow-600',
    date: '2023-24',
    type: 'Competition',
  },
  {
    title: 'Top 200 Startup Ideas - Vivo Ignite 3rd Edition',
    category: 'Among 37,000 participants',
    description: 'Selected as one of the top 200 startup ideas in Vivo Ignite 3rd Edition from a pool of 37,000 participants nationwide.',
    icon: Star,
    color: 'bg-purple-500/10 text-purple-600',
    date: '2024-2025',
    type: 'Startup Competition',
  },
  {
    title: 'Founder - Fodenge',
    category: 'AI-powered Learning Platform',
    description: 'Founded and developed Fodenge, a bite-sized AI-based learning platform specifically designed for JEE aspirants.',
    icon: Zap,
    color: 'bg-blue-500/10 text-blue-600',
    date: '2025',
    type: 'Entrepreneurship',
  },
  {
    title: 'School Website Development Lead',
    category: 'SOSE Lajpat Nagar',
    description: 'Led the complete development of the official website for Dr. B.R. Ambedkar SOSE, Lajpat Nagar, from concept to deployment.',
    icon: Users,
    color: 'bg-green-500/10 text-green-600',
    date: '2024',
    type: 'Leadership',
  },
  {
    title: 'Multiple Production Deployments',
    category: 'Real-world Applications',
    description: 'Successfully built and deployed several production-ready applications while still in high school, serving real users.',
    icon: Award,
    color: 'bg-orange-500/10 text-orange-600',
    date: '2023-24',
    type: 'Technical Achievement',
  },
  {
    title: 'Self-taught Full Stack Developer',
    category: 'Comprehensive Technology Stack',
    description: 'Mastered React, Next.js, AI workflows, database design, and modern development practices through self-directed learning.',
    icon: Target,
    color: 'bg-red-500/10 text-red-600',
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
            Achievements
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognition earned through dedication and continuous learning
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <Card key={stat.label}>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className={`p-3 rounded-lg ${achievement.color}`}>
                      <achievement.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {achievement.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {achievement.date}
                        </span>
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {achievement.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-primary mt-1">
                        {achievement.category}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">
                The Journey Continues
              </h3>
              <p className="text-muted-foreground mb-6">
                These achievements represent just the beginning. I'm constantly learning, 
                building, and pushing the boundaries of what's possible with technology.
              </p>
              <div className="text-sm text-muted-foreground">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}