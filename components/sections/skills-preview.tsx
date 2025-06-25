'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui'],
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    title: 'Backend & Database',
    icon: Database,
    skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'Appwrite', 'Vector DBs'],
    color: 'bg-green-500/10 text-green-500',
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['Python', 'RAG Systems', 'Gemini AI', 'LangChain', 'OpenAI'],
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    title: 'Mobile & E-commerce',
    icon: Smartphone,
    skills: ['Shopify', 'React Native', 'PWA', 'Payment Integration'],
    color: 'bg-orange-500/10 text-orange-500',
  },
];

export function SkillsPreview() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Building modern applications with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-lg ${category.color} mb-4`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}