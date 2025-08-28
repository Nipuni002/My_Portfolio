import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiPhp,
  SiGit,
  SiMysql,
  SiKotlin,
  SiPython,
  SiJavascript,
  SiCplusplus,

} from "react-icons/si";
import { FaServer, FaDatabase, FaTools } from "react-icons/fa";

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

  const skills = {
    frontend: [
      { name: "React", level: 90, category: "frontend", icon: SiReact },
      { name: "Next.js", level: 75, category: "frontend", icon: SiNextdotjs },
      { name: "Tailwind CSS", level: 85, category: "frontend", icon: SiTailwindcss },
    ],
    backend: [
      { name: "Node.js", level: 85, category: "backend", icon: SiNodedotjs },
      { name: "Express", level: 80, category: "backend", icon: SiExpress },
      { name: "SpringBoot", level: 85, category: "backend", icon: SiSpringboot },
      { name: "PHP", level: 80, category: "backend", icon: SiPhp },
    ],
    tools: [
      { name: "Git", level: 90, category: "tools", icon: SiGit },
      { name: "MongoDB", level: 80, category: "tools", icon: SiMongodb },
      { name: "MySQL", level: 85, category: "tools", icon: SiMysql },
    ],
    languages: [
      { name: "Python", level: 75, category: "languages", icon: SiPython },
      { name: "Java", level: 90, category: "languages", icon: SiJavascript },
      { name: "C++", level: 75, category: "languages", icon: SiCplusplus },
      { name: "Kotlin", level: 80, category: "languages", icon: SiKotlin },
    ],
  };

  const categories = [
    { 
      id: "frontend", 
      name: "Frontend", 
      icon: FaServer, 
      colors: {
        primary: "text-cyan-400",
        border: "border-cyan-500/30",
        background: "from-cyan-500/5 to-blue-500/5"
      }
    },
    { 
      id: "backend", 
      name: "Backend", 
      icon: FaDatabase, 
      colors: {
        primary: "text-emerald-400",
        border: "border-emerald-500/30",
        background: "from-emerald-500/5 to-green-500/5"
      }
    },
    { 
      id: "tools", 
      name: "Tools & Databases", 
      icon: FaTools, 
      colors: {
        primary: "text-amber-400",
        border: "border-amber-500/30",
        background: "from-amber-500/5 to-orange-500/5"
      }
    },
    { 
      id: "languages", 
      name: "Languages", 
      icon: FaServer, 
      colors: {
        primary: "text-purple-400",
        border: "border-purple-500/30",
        background: "from-purple-500/5 to-indigo-500/5"
      }
    },
  ];

  // Function to get the appropriate color for each technology icon
  const getIconColor = (skillName) => {
    const colorMap = {
      'React': 'text-cyan-400 hover:text-cyan-300',
      'Next.js': 'text-white hover:text-gray-200',
      'Tailwind CSS': 'text-cyan-500 hover:text-cyan-400',
      'Node.js': 'text-green-500 hover:text-green-400',
      'Express': 'text-gray-300 hover:text-white',
      'SpringBoot': 'text-green-600 hover:text-green-500',
      'PHP': 'text-indigo-500 hover:text-indigo-400',
      'Git': 'text-orange-500 hover:text-orange-400',
      'MongoDB': 'text-green-400 hover:text-green-300',
      'MySQL': 'text-blue-500 hover:text-blue-400',
      'Python': 'text-yellow-400 hover:text-yellow-300',
      'Java': 'text-orange-600 hover:text-orange-500',
      'C++': 'text-blue-400 hover:text-blue-300',
      'Kotlin': 'text-purple-500 hover:text-purple-400'
    };
    return colorMap[skillName] || 'text-purple-500 hover:text-purple-400';
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-black min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various technologies and tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Card className={`bg-gray-800/30 border ${category.colors.border} backdrop-blur-sm overflow-hidden relative group hover:shadow-lg transition-all duration-300`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${category.colors.background} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className={`text-xl font-bold mb-6 flex items-center ${category.colors.primary}`}>
                    {category.icon && (
                      <category.icon className="mr-3" size={20} />
                    )}
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {skills[category.id]?.map((skill) => (
                      <motion.div 
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700 group-hover:border-gray-600 transition-colors"
                      >
                        <skill.icon 
                          className={`${getIconColor(skill.name)} text-2xl mb-2 transition-colors`} 
                          size={24} 
                        />
                        <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 italic">
            Continuously expanding my skillset with new technologies and best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsDisplay;