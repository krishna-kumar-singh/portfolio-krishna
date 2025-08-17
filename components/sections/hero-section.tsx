'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Zap } from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FloatingParticles } from '@/components/ui/floating-particles';
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

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
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <AnimatedGradient />
      <FloatingParticles />
      
      {/* Interactive background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: mousePosition.x * 0.01, y: mousePosition.y * 0.01 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      <div className="container px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Animated icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8 space-x-4"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="p-3 bg-primary/10 rounded-full"
            >
              <Code className="h-8 w-8 text-primary" />
            </motion.div>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 0.5 }}
              className="p-3 bg-purple-500/10 rounded-full"
            >
              <Zap className="h-8 w-8 text-purple-500" />
            </motion.div>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 1 }}
              className="p-3 bg-pink-500/10 rounded-full"
            >
              <Sparkles className="h-8 w-8 text-pink-500" />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <motion.span
                className="block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Krishna Kumar Singh
              </motion.span>
              <motion.span
                className="block text-primary mt-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Full Stack Developer
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            A curious mind building{' '}
            <motion.span
              className="text-primary font-semibold"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              AI systems
            </motion.span>{' '}
            to solve real-world problems. Currently in Grade 12, passionate about creating meaningful technology.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
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
                  <span className="relative z-10">See My Work</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center space-x-6"
          >
            {[
              { href: "https://github.com/krishna-kumar-singh", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/krishna-kumar-singh-dev/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:krishnakumarsingh2212@gmail.com", icon: Mail, label: "Email" },
            ].map((social, index) => (
              <motion.div
                key={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
        <span className="sr-only">Scroll down</span>
      </motion.button>
    </section>
  );
}