import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myImg from "./images/my.jpeg";

/**
 * @typedef {Object} AboutSectionProps
 * @property {string} [name]
 * @property {string} [bio]
 * @property {string[]} [skills]
 * @property {string} [photo]
 */

const AboutSection = ({
  name = "Thakshila Perera",
  bio = "I'm a passionate full-stack developer with expertise in creating modern web applications. With a strong foundation in both frontend and backend technologies, I strive to build intuitive, efficient, and visually appealing digital experiences.",
  skills = [
    "Frontend Development",
    "React.js",
    "Spring Boot",
    "Mobile Development",
    "Backend Development",
  ],
  photo = myImg,
}) => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [skills.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-16 px-4 md:px-8 bg-slate-950 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                About Me
              </span>
            </h2>

            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-4 text-white"
            >
              Hi, I'm {name}
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-6 leading-relaxed"
            >
              {bio}
            </motion.p>

            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-gray-300 mb-2">I specialize in:</p>
              <div className="h-12 flex items-center">
                <motion.span
                  key={currentSkillIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500"
                >
                  {skills[currentSkillIndex]}
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="order-1 md:order-2 flex justify-center"
          >
           <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(124, 58, 237, 0.5)"
                }}
                className="w-full h-full rounded-full overflow-hidden border-4 border-purple-500/20"
              >
                <img
                  src={photo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;