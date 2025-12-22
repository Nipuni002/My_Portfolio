import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myImg from "./images/Pro.png";
import { 
  Sparkles, 
  Code, 
  Server, 
  Smartphone, 
  Database,
  Cpu,
  ArrowRight,
  Zap
} from "lucide-react";

const AboutSection = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const skills = [
    "Full-Stack Development",
    "React & Next.js Applications",
    "Backend API Development",
    "Mobile App Development",
    "Database Design & Optimization",
    "Cloud Deployment & DevOps"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  const specialties = [
    { icon: <Code className="h-5 w-5" />, title: "Frontend Development", description: "React, Next.js, Tailwind" },
    { icon: <Server className="h-5 w-5" />, title: "Backend Development", description: "Node.js, Spring Boot, APIs" },
    { icon: <Smartphone className="h-5 w-5" />, title: "Mobile Development", description: "React Native, Expo" },
    { icon: <Database className="h-5 w-5" />, title: "Database Design", description: "MongoDB, MySQL, PostgreSQL" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="about"
      className="w-full py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
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
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Get to Know Me
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
              About Me
            </span>
          </h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Intro */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">Nipuni Perera</span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                A passionate full-stack developer with expertise in creating modern, scalable web and mobile applications. 
                I combine technical expertise with creative problem-solving to build intuitive, efficient, and visually 
                appealing digital experiences that deliver real value.
              </p>
            </div>

            {/* Rotating Skills */}
            <motion.div variants={itemVariants} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-5 w-5 text-amber-500" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  I specialize in:
                </span>
              </div>
              <div className="h-14 flex items-center bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-xl border border-blue-100 dark:border-gray-700 p-4">
                <motion.span
                  key={currentSkillIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg font-semibold text-gray-900 dark:text-white"
                >
                  {skills[currentSkillIndex]}
                </motion.span>
              </div>
              <div className="flex gap-2 mt-3">
                {skills.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSkillIndex
                        ? "w-6 bg-gradient-to-r from-blue-500 to-teal-400"
                        : "w-2 bg-gray-300 dark:bg-gray-700"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Specialties Grid */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                My Technical Specialties
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {specialties.map((specialty, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="group p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20">
                        <div className="text-blue-500">
                          {specialty.icon}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {specialty.title}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {specialty.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-teal-400/20 rounded-3xl blur-xl opacity-70 group-hover:blur-2xl transition-all duration-500" />
              
              {/* Border Rings */}
              <div className="absolute -ins-2 border-2 border-blue-500/30 rounded-3xl group-hover:border-blue-400/50 transition-all duration-500 animate-pulse" />
              <div className="absolute -ins-1 border-2 border-teal-400/20 rounded-3xl group-hover:border-teal-300/30 transition-all duration-500 delay-75" />

              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-3xl overflow-hidden border-2 border-gray-800/50 dark:border-gray-700 backdrop-blur-sm shadow-2xl w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
              >
                <img
                  src={myImg}
                  alt="Nipuni Thakshila Perera - Full-Stack Developer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
              </motion.div>

              {/* Status Badge */}
          
            </div>
          </motion.div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-teal-500/10 border border-blue-500/20">
                <Cpu className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  My Development Philosophy
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I believe in building solutions that are not only technically sound but also user-centric, 
                  scalable, and maintainable. Every line of code should serve a purpose and contribute to a 
                  better overall experience.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;