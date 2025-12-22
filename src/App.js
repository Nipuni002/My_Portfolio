import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  ArrowUp, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  Code,
  Sparkles,
  Globe,
  Home,
  Briefcase,
  GraduationCap,
  Cpu,
  Users,
  UserCircle
} from 'lucide-react';
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
    { name: "Home", href: "#home", icon: <Home className="h-4 w-4" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Education", href: "#education", icon: <GraduationCap className="h-4 w-4" /> },
    { name: "Skills", href: "#skills", icon: <Cpu className="h-4 w-4" /> },
    { name: "Services", href: "#services", icon: <Users className="h-4 w-4" /> },
    { name: "About", href: "#about", icon: <UserCircle className="h-4 w-4" /> },
    { name: "Contact", href: "#contact", icon: <MessageSquare className="h-4 w-4" /> }
  ];

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "thakshilaperera37@gmail.com",
      link: "mailto:thakshilaperera37@gmail.com",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      delay: 0.1
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "linkedin.com/in/thakshilaNP",
      link: "https://www.linkedin.com/in/thakshilaNP/",
      color: "text-sky-500",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
      delay: 0.2
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "github.com/Nipuni002",
      link: "https://github.com/Nipuni002",
      color: "text-gray-800 dark:text-gray-200",
      bg: "bg-gray-800/10 dark:bg-gray-800/20",
      border: "border-gray-800/20 dark:border-gray-700/30",
      delay: 0.3
    },
  ];

  const services = [
    "Full-Stack Web Development",
    "Mobile App Development",
    "API Development & Integration",
    "Database Design & Optimization",
    "Cloud Deployment & DevOps",
    "Code Review & Optimization"
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
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {item.icon}
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
          <div className="w-full py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 dark:bg-blue-500/10 dark:border-blue-500/20 backdrop-blur-sm mb-6">
                  <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Get In Touch
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
                    Contact Me
                  </span>
                </h2>

                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 mx-auto mb-6 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                />

                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                  Have a project in mind or want to discuss opportunities? I'm always open to new challenges and collaborations.
                </p>
              </motion.div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: method.delay }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <a
                      href={method.link}
                      target={method.title !== "Email" ? "_blank" : "_self"}
                      rel={method.title !== "Email" ? "noopener noreferrer" : ""}
                      className={`group block relative rounded-2xl border ${method.border} bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden h-full`}
                    >
                      <div className="relative p-6">
                        {/* Icon */}
                        <div className={`mb-4 p-3 rounded-xl ${method.bg} border ${method.border} inline-flex`}>
                          <div className={method.color}>
                            {method.icon}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {method.title}
                        </h3>

                        {/* Value */}
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {method.value}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium">
                          <span>Get in touch</span>
                          <ArrowUp className="h-4 w-4 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Hover Effect Border */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-500 pointer-events-none" />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Availability & Services */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {/* Availability Card */}
                  <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Availability</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Current status and response time</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-gray-700 dark:text-gray-300 font-medium">Status</span>
                        </div>
                        <span className="text-green-600 dark:text-green-400 font-semibold">Available</span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span className="text-gray-700 dark:text-gray-300 font-medium">Response Time</span>
                        </div>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">Within 24 hours</span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                          <Globe className="h-4 w-4 text-purple-500" />
                          <span className="text-gray-700 dark:text-gray-300 font-medium">Location</span>
                        </div>
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">Sri Lanka</span>
                      </div>
                    </div>
                  </div>

                  {/* Services Card */}
                  <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20">
                        <Sparkles className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Services Offered</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Areas where I can add value</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services.map((service, index) => (
                        <motion.div
                          key={service}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 transition-all duration-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Connect & Message */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {/* Connect Card */}
                  <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Let's Connect & Collaborate
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      Whether you have a project in mind, need technical consultation, or just want to connect 
                      and discuss technology, I'm always excited to hear from like-minded individuals and organizations.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <motion.a
                          href="https://github.com/Nipuni002"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 p-3 rounded-xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-3">
                            <Github className="h-5 w-5 text-gray-800 dark:text-gray-200 group-hover:text-gray-800 dark:group-hover:text-gray-100" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                              GitHub Profile
                            </span>
                          </div>
                        </motion.a>

                        <motion.a
                          href="https://www.linkedin.com/in/thakshilaNP/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-900/10 border border-blue-200 dark:border-blue-800/30 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-3">
                            <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-500" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              LinkedIn Profile
                            </span>
                          </div>
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Quick Response */}
                  <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-900/20 dark:to-teal-900/10 backdrop-blur-sm shadow-lg p-6">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="h-6 w-6 text-teal-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quick Response Guaranteed</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          I make it a priority to respond to all inquiries within 24 hours. 
                          Let's start a conversation about how we can work together to bring your ideas to life.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
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

export default App;