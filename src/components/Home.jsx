import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp, Mail, Github, Linkedin, MessageSquare, Code, Sparkles, Globe } from "lucide-react";
import HeroSection from "./HeroSection";
import ProjectsGrid from "./ProjectsGrid";
import EducationSection from "./EducationSection";
import SkillsDisplay from "./SkillsDisplay";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white overflow-x-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div 
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          background: `
            radial-gradient(600px at 20% 30%, rgba(59, 130, 246, 0.1), transparent 80%),
            radial-gradient(600px at 80% 70%, rgba(6, 182, 212, 0.1), transparent 80%),
            radial-gradient(600px at 50% 90%, rgba(20, 184, 166, 0.08), transparent 80%)
          `,
          y: backgroundY
        }}
      />
      
      {/* Subtle floating shapes */}
      <motion.div 
        className="fixed top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl -z-20"
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="fixed top-3/4 right-1/4 w-72 h-72 rounded-full bg-teal-500/5 blur-3xl -z-20"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="fixed bottom-1/4 left-1/2 w-56 h-56 rounded-full bg-blue-500/5 blur-3xl -z-20"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Sticky Navigation */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300"
        style={{ opacity }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20">
                <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Nipuni<span className="text-blue-600 dark:text-blue-400">.</span>
              </span>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:block">
              <motion.ul 
                className="flex space-x-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    variants={fadeInUp}
                    custom={index}
                    className="relative group"
                  >
                    <a
                      href={item.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                    <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-400 mb-1.5" />
              <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-400 mb-1.5" />
              <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-400" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative">
          <HeroSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative">
          <ProjectsGrid />
        </section>

        {/* Education Section */}
        <section id="education" className="relative">
          <EducationSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative">
          <SkillsDisplay />
        </section>

        {/* Services Section */}
        <section id="services" className="relative">
          <ServicesSection />
        </section>

        {/* About Section */}
        <section id="about" className="relative">
          <AboutSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Brand */}
            <motion.div 
              className="mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20">
                  <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  Nipuni Thakshila Perera
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-md text-sm">
                Full-Stack Developer passionate about creating modern, scalable web applications
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <motion.a
                href="https://github.com/Nipuni002"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              >
                <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/thakshilaNP/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-900/10 border border-blue-200 dark:border-blue-800/30 hover:border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </motion.a>
              <motion.a
                href="mailto:thakshilaperera37@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-900/20 dark:to-teal-900/10 border border-teal-200 dark:border-teal-800/30 hover:border-teal-500/50 hover:bg-teal-500/20 transition-all duration-300"
              >
                <Mail className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              </motion.a>
              <motion.a
                href="https://github.com/Nipuni002"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-700 hover:border-gray-500/50 hover:bg-gray-500/10 transition-all duration-300"
              >
                <Globe className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </motion.a>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div 
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Nipuni Thakshila Perera. All rights reserved.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">
              Crafted with passion and modern web technologies
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow-lg shadow-blue-500/20 z-50 hover:shadow-blue-500/30 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </motion.button>
    </div>
  );
};

export default Home;