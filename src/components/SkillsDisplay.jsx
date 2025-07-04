import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  SiReact,
  SiTypescript,
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

/**
 * @typedef {Object} Skill
 * @property {string} name
 * @property {number} level
 * @property {"frontend" | "backend" | "tools" | "other"} category
 * @property {import("react-icons").IconType} [icon]
 */

const SkillsDisplay = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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
      { name: "TypeScript", level: 85, category: "frontend", icon: SiTypescript },
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
    other: [
      { name: "Python", level: 75, category: "other", icon: SiPython },
      { name: "Java", level: 90, category: "other", icon: SiJavascript },
      { name: "C++", level: 75, category: "other", icon: SiCplusplus },
      { name: "Kotlin", level: 80, category: "other", icon: SiKotlin },
    ],
  };

  const categories = [
    { 
      id: "frontend", 
      name: "Frontend", 
      icon: FaServer, 
      colors: {
        primary: "purple-500",
        secondary: "green-500",
        gradient: "from-green-500 to-purple-500",
        border: "green-500/30",
        background: "from-green-500/10 to-purple-500/10"
      }
    },
    { 
      id: "backend", 
      name: "Backend", 
      icon: FaDatabase, 
      colors: {
        primary: "purple-500",
        secondary: "green-500",
        gradient: "from-purple-500 to-green-500",
        border: "purple-500/30",
        background: "from-purple-500/10 to-green-500/10"
      }
    },
    { 
      id: "tools", 
      name: "Additional Technology", 
      icon: FaTools, 
      colors: {
        primary: "purple-500",
        secondary: "green-500",
        gradient: "from-green-500 to-purple-500",
        border: "green-500/30",
        background: "from-green-500/10 to-purple-500/10"
      }
    },
    { 
      id: "other", 
      name: "Programming Languages", 
      icon: FaServer, 
      colors: {
        primary: "purple-500",
        secondary: "green-500",
        gradient: "from-purple-500 to-green-500",
        border: "purple-500/30",
        background: "from-purple-500/10 to-green-500/10"
      }
    },
  ];

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels across various technologies and tools.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Card className={`bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden relative hover:border-${category.colors.border} transition-all duration-300`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${category.colors.background} z-0`}></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                    {category.icon && (
                      <category.icon className={`text-${category.colors.primary} mr-3`} size={20} />
                    )}
                    {category.name}
                  </h3>
                  <div className="space-y-6">
                    {skills[category.id]?.map((skill, index) => (
                      <SkillBar key={skill.name} skill={skill} index={index} colors={category.colors} />
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
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.values(skills)
              .flat()
              .map((skill, index) => {
                const categoryIndex = Math.floor(index / 4);
                const categoryColors = categories[categoryIndex % categories.length]?.colors;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 hover:border-purple-500/50 transition-all"
                  >
                    {skill.icon && (
                      <skill.icon className={`text-${categoryColors?.primary || 'purple-500'} mr-2`} size={18} />
                    )}
                    <span className="text-sm text-purple-500">{skill.name}</span>
                  </div>
                );
              })}
          </div>
          <p className="text-gray-400 italic">
            Always learning and expanding my skillset with new technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * @typedef {Object} SkillBarProps
 * @property {Skill} skill
 * @property {number} index
 * @property {Object} colors
 */

const SkillBar = ({ skill, index, colors }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${skill.level}%`,
        transition: { duration: 1, delay: index * 0.1, ease: "easeOut" },
      });
    }
  }, [controls, isInView, skill.level, index]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {skill.icon && (
            <skill.icon className={`text-${colors.primary} mr-2`} size={16} />
          )}
          <span className="text-sm font-medium text-gray-200">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-medium text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="relative h-2 w-full bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          className={`h-full rounded-full bg-gradient-to-r ${colors.gradient} relative`}
        >
          <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/20 blur-sm"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsDisplay;