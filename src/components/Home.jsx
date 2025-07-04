import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp, Mail, Github, Linkedin, Twitter, Code, Layers, Cpu, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import HeroSection from "./HeroSection";
import ProjectsGrid from "./ProjectsGrid";
import EducationSection from "./EducationSection";
import SkillsDisplay from "./SkillsDisplay";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

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

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-x-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div 
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          background: `
            radial-gradient(600px at 20% 30%, rgba(79, 70, 229, 0.4), transparent 80%),
            radial-gradient(600px at 80% 70%, rgba(124, 58, 237, 0.4), transparent 80%),
            radial-gradient(600px at 50% 90%, rgba(16, 185, 129, 0.3), transparent 80%)
          `,
          y: backgroundY
        }}
      />
      
      {/* Floating 3D shapes */}
      <motion.div 
        className="fixed top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl -z-20"
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
        className="fixed top-3/4 right-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl -z-20"
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
        className="fixed bottom-1/4 left-1/2 w-56 h-56 rounded-full bg-purple-500/10 blur-3xl -z-20"
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
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-400"
          >
            Portfolio
          </motion.div>
          <nav>
            <motion.ul 
              className="flex space-x-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {["Home", "Projects", "Education", "Skills", "Services", "About", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    {item}
                  </a>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-1 pt-32 pb-20 relative overflow-hidden">
        <HeroSection />
      </section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-1 relative"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-80" />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center mb-16"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-300">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 ml-4" />
          </motion.div>
          <ProjectsGrid />
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-1 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900"
      >
        <EducationSection />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-1 relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-950 via-blue-900/20 to-gray-950" />
        </div>
        <SkillsDisplay />
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-1 bg-gradient-to-b from-gray-950 to-gray-900"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center mb-16"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-emerald-400 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-300">
              My Services
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-purple-500 ml-4" />
          </motion.div>
          <ServicesSection />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-1 relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-950 via-purple-900/20 to-gray-950" />
        </div>
        <AboutSection />
      </motion.section>

      {/* Contact Section */}
    
<motion.section
  id="contact"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeInUp}
  className="py-1 bg-gray-50 dark:bg-slate-950"
>
  <div className="container mx-auto px-6 max-w-4xl">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 from-indigo-500 to-purple-500 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
           Get In Touch
          </span>
          </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Feel free to reach out to me through any of the channels below.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="p-8 bg-white dark:bg-gray-800 shadow-sm rounded-lg">
          <form 
            action="https://formsubmit.co/thakshilaperera37@gmail.com" 
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_next" value="https://yourportfolio.com/thank-you" />
            <input type="hidden" name="_subject" value="New message from portfolio contact form" />
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </Card>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col justify-center"
      >
        <Card className="p-8 bg-white dark:bg-gray-800 shadow-sm rounded-lg h-full">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                    <a 
                      href="mailto:thakshilaperera37@gmail.com" 
                      className="text-base text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      thakshilaperera37@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/thakshilaNP/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/thakshilaNP
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">GitHub</h4>
                    <a 
                      href="https://github.com/shiranthaDS" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      github.com/shiranthaDS
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/shiranthaDS"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/shiranthads"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Twitter className="h-5 w-5 text-blue-400 dark:text-blue-300" />
                </motion.a>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Footer */}
      <footer className="py-16 bg-gray-950 border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-400">
                DevPortfolio
              </p>
              <p className="text-gray-400 mt-3 max-w-md">
                Crafting digital experiences with cutting-edge technology and innovative design.
              </p>
            </motion.div>
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <motion.a
                href="https://github.com/Nipuni002"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/thakshilaNP/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
             
            </motion.div>
          </div>
          <motion.div 
            className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 text-white shadow-xl shadow-blue-500/20 z-50 hover:shadow-blue-500/30 transition-all"
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </div>
  );
};

export default Home;