import React from "react";
import { motion } from "framer-motion";
import { 
  FaServer, 
  FaDatabase, 
  FaTools, 
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaLanguage
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiKotlin,
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiGithubactions,
  SiPostgresql,
  SiTypescript,
  SiExpo,
  SiReact as SiReactNative,
  SiGo,
} from "react-icons/si";
import { Sparkles, Cpu, Terminal, Code2 } from "lucide-react";

const SkillsDisplay = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skills = {
    frontend: [
      { name: "React", icon: SiReact },
      { name: "React Native", icon: SiReactNative },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Expo", icon: SiExpo },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    backend: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "PHP", icon: SiPhp },
      { name: "Golang", icon: SiGo },
    ],
    devops: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Vercel", icon: SiVercel },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
    databases: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    languages: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: SiJavascript },
      { name: "C++", icon: SiCplusplus },
      { name: "Kotlin", icon: SiKotlin },
      { name: "TypeScript", icon: SiTypescript },
    ],
  };

  const categories = [
    { 
      id: "frontend", 
      name: "Frontend Development", 
      icon: FaCode, 
      colors: {
        primary: "text-blue-500",
        border: "border-blue-500/20",
        background: "from-blue-500/5 to-blue-600/5",
        badge: "bg-blue-500/10 text-blue-400"
      },
      description: "Building modern user interfaces and web applications"
    },
    { 
      id: "backend", 
      name: "Backend Development", 
      icon: FaServer, 
      colors: {
        primary: "text-teal-500",
        border: "border-teal-500/20",
        background: "from-teal-500/5 to-teal-600/5",
        badge: "bg-teal-500/10 text-teal-400"
      },
      description: "Server-side development and API creation"
    },
    { 
      id: "devops", 
      name: "DevOps & Deployment", 
      icon: FaCloud, 
      colors: {
        primary: "text-amber-500",
        border: "border-amber-500/20",
        background: "from-amber-500/5 to-amber-600/5",
        badge: "bg-amber-500/10 text-amber-400"
      },
      description: "Infrastructure and deployment automation"
    },
    { 
      id: "databases", 
      name: "Databases", 
      icon: FaDatabase, 
      colors: {
        primary: "text-purple-500",
        border: "border-purple-500/20",
        background: "from-purple-500/5 to-purple-600/5",
        badge: "bg-purple-500/10 text-purple-400"
      },
      description: "Data storage and management systems"
    },
    { 
      id: "languages", 
      name: "Programming Languages", 
      icon: FaLanguage, 
      colors: {
        primary: "text-green-500",
        border: "border-green-500/20",
        background: "from-green-500/5 to-green-600/5",
        badge: "bg-green-500/10 text-green-400"
      },
      description: "Core programming languages and frameworks"
    },
  ];

  const getIconColor = (skillName, category) => {
    const colorMap = {
      'React': 'text-blue-400',
      'React Native': 'text-blue-500',
      'Expo': 'text-gray-800 dark:text-gray-200',
      'TypeScript': 'text-blue-600',
      'Next.js': 'text-gray-800 dark:text-gray-100',
      'Tailwind CSS': 'text-cyan-500',
      'Node.js': 'text-green-500',
      'Express.js': 'text-gray-400',
      'Spring Boot': 'text-green-600',
      'PHP': 'text-indigo-500',
      'Docker': 'text-sky-500',
      'Kubernetes': 'text-blue-500',
      'Vercel': 'text-gray-800 dark:text-gray-100',
      'GitHub Actions': 'text-indigo-500',
      'MongoDB': 'text-green-400',
      'MySQL': 'text-blue-500',
      'PostgreSQL': 'text-blue-600',
      'Python': 'text-yellow-500',
      'Java': 'text-orange-600',
      'C++': 'text-blue-400',
      'Kotlin': 'text-purple-500',
    };
    return colorMap[skillName] || 'text-gray-400';
  };

  return (
    <section
      id="skills"
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
              Technical Expertise
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
             Technical Skills
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
            A comprehensive collection of technologies and tools I work with to build modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <div className={`group relative h-full rounded-2xl border ${category.colors.border} bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[size:20px_20px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] dark:bg-[size:20px_20px]" />
                </div>

                <div className="relative p-6">
                  {/* Category Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.colors.background} border ${category.colors.border}`}>
                      <category.icon className={`h-5 w-5 ${category.colors.primary}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {skills[category.id]?.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ x: 3 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <skill.icon 
                            className={`h-5 w-5 ${getIconColor(skill.name, category.id)}`}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Skill Count */}
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Technologies
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${category.colors.badge}`}>
                        {skills[category.id]?.length || 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-blue-100 dark:border-gray-700">
              <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Full-Stack Development</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                End-to-end development from frontend to backend systems
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-teal-100 dark:border-gray-700">
              <Cpu className="h-8 w-8 text-teal-600 dark:text-teal-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Modern Technologies</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Working with latest frameworks and tools
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-purple-100 dark:border-gray-700">
              <Terminal className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Cross-Platform</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Web, mobile, and cloud-based solutions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsDisplay;