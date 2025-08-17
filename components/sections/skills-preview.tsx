'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Brain, Smartphone, Zap, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui'],
    color: 'bg-blue-500/10 text-blue-500 dark:bg-blue-500/20',
  },
  {
    title: 'Backend & Database',
    icon: Database,
    skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'Appwrite', 'Vector DBs'],
    color: 'bg-green-500/10 text-green-500 dark:bg-green-500/20',
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['Python', 'RAG Systems', 'Gemini AI', 'LangChain', 'OpenAI'],
    color: 'bg-purple-500/10 text-purple-500 dark:bg-purple-500/20',
  },
  {
    title: 'Mobile & E-commerce',
    icon: Smartphone,
    skills: ['Shopify', 'React Native', 'PWA', 'Payment Integration'],
    color: 'bg-orange-500/10 text-orange-500 dark:bg-orange-500/20',
  },
];

export function SkillsPreview() {
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
    <section className="py-16 bg-muted/30 relative overflow-hidden">
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
            variants={cardVariants}
            className="inline-flex items-center gap-2 mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="h-6 w-6 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">My Expertise</span>
          </motion.div>
          
          <motion.h2
            variants={cardVariants}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="mt-4 text-lg text-muted-foreground"
          >
            Building modern applications with cutting-edge technologies
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="p-6 relative overflow-hidden group">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className={`inline-flex p-3 rounded-lg ${category.color} mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <category.icon className="h-6 w-6" />
                    </motion.div>
                    
                    <h3 className="font-semibold mb-3 text-base">{category.title}</h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: 0.8 + skillIndex * 0.1,
                            type: "spring",
                            stiffness: 300
                          }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs hover:scale-110 transition-transform cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Projects Completed", value: "25+", icon: TrendingUp },
            { label: "Technologies", value: "20+", icon: Code },
            { label: "Experience", value: "2+ Years", icon: Brain },
            { label: "Happy Clients", value: "15+", icon: Zap },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            >
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                className="inline-flex p-2 rounded-full bg-primary/10 mb-2"
              >
                <stat.icon className="h-5 w-5 text-primary" />
              </motion.div>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}