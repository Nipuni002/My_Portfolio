import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';
import HeroSection from './components/HeroSection';
import ProjectsGrid from './components/ProjectsGrid';
import EducationSection from './components/EducationSection';
import SkillsDisplay from './components/SkillsDisplay';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';

const App = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
      <section id="home" className="py-1 relative overflow-hidden">
        <HeroSection />
      </section>

      {/* Main Content */}
      <main>
        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-1 bg-gradient-to-b from-black to-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProjectsGrid />
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="py-1 bg-gradient-to-b from-gray-900 to-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <EducationSection />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-1 bg-gradient-to-b from-black to-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SkillsDisplay />
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          className="py-1 bg-gradient-to-b from-gray-900 to-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ServicesSection />
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-1 bg-gradient-to-b from-black to-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AboutSection />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-20 from-black to-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
  <div className="container mx-auto px-4 max-w-4xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 from-cyan-400 to-blue-500 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
           Get In Touch
          </span>
          </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Feel free to reach out to me through any of the channels below.
      </p>
    </div>

    <div className="max-w-4xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Contact Information */}
    <Card className="p-8 bg-gradient-to-br from-slate-900/70 to-slate-800/50 border border-slate-700/30 rounded-xl backdrop-blur-sm">
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Get In Touch
          </h3>
          
          <div className="space-y-6">
            <motion.div 
              className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              <div className="flex-shrink-0 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <Mail className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-1">Email</h4>
                <a 
                  href="mailto:thakshilaperera37@gmail.com" 
                  className="text-base text-white hover:text-cyan-400 transition-colors duration-300"
                >
                  thakshilaperera37@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              <div className="flex-shrink-0 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Linkedin className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-1">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/thakshilaNP/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base text-white hover:text-blue-400 transition-colors duration-300"
                >
                  linkedin.com/in/thakshilaNP
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              <div className="flex-shrink-0 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <Github className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-1">GitHub</h4>
                <a 
                  href="https://github.com/Nipuni002" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base text-white hover:text-purple-400 transition-colors duration-300"
                >
                  github.com/Nipuni002
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-700/50">
          <h3 className="text-xl font-semibold text-white mb-6">Let's Connect</h3>
          <p className="text-slate-400 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/Nipuni002"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="p-3 bg-slate-800/50 rounded-lg hover:bg-cyan-500/20 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <Github className="h-5 w-5 text-slate-300 group-hover:text-cyan-400" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/thakshilaNP/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="p-3 bg-slate-800/50 rounded-lg hover:bg-blue-500/20 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 text-slate-300 group-hover:text-blue-400" />
            </motion.a>
          </div>
        </div>
      </div>
    </Card>

    {/* Availability & Response Time */}
    <Card className="p-8 bg-gradient-to-br from-slate-900/70 to-slate-800/50 border border-slate-700/30 rounded-xl backdrop-blur-sm">
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Availability
          </h3>
          
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/30">
              <div className="flex items-center mb-2">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">Currently Available</span>
              </div>
              <p className="text-sm text-slate-400">I'm open to new opportunities and collaborations</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/30">
              <h4 className="text-sm font-medium text-slate-400 mb-2">Response Time</h4>
              <p className="text-white">Within 24 hours</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/30">
              <h4 className="text-sm font-medium text-slate-400 mb-2">Preferred Contact Method</h4>
              <p className="text-white">Email or LinkedIn</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-700/50">
          <h3 className="text-xl font-semibold text-white mb-4">What I Offer</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-slate-300">
              <div className="h-1 w-1 rounded-full bg-cyan-500 mr-3"></div>
              Full-Stack Development
            </li>
            <li className="flex items-center text-slate-300">
              <div className="h-1 w-1 rounded-full bg-cyan-500 mr-3"></div>
              Web Application Development
            </li>
            <li className="flex items-center text-slate-300">
              <div className="h-1 w-1 rounded-full bg-cyan-500 mr-3"></div>
              Mobile App Development
            </li>
           
          </ul>
        </div>
      </div>
    </Card>
  </div>
</div>
  </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                My Portfolio
              </p>
              <p className="text-gray-400 mt-2">
                Full-Stack Developer | Software Engineer
              </p>
            </div>
            <div className="flex space-x-6">
              <motion.a
                href="https://github.com/Nipuni002"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/thakshilaNP/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-purple-600 text-white shadow-lg z-50 hover:bg-purple-700 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowDown className="h-6 w-6 transform rotate-180" />
      </motion.button>
    </div>
  );
};

export default App;