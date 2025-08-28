import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import LandImg from "./images/Land.png";
import SkinImg from "./images/Skin.png";
import CompImg from "./images/comp.png";
import StuImg from "./images/stu.png";
import mindImg from "./images/mind.png";
import FinaImg from "./images/Fina.png";

const ProjectsGrid = ({ projects = defaultProjects }) => {
  const [filter, setFilter] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  const technologies = ["all", ...new Set(projects.flatMap(p => p.technologies))];

  const handleFilterChange = (tech) => {
    setFilter(tech);
    setActiveFilter(tech);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="w-full py-24 bg-slate-950" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              My Projects
            </span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my latest work showcasing my skills in full-stack development
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {technologies.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => handleFilterChange(tech)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tech
                  ? "bg-gradient-to-r from-green-500 to-blue-600 text-gray-100 shadow-lg shadow-emerald-500/20"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </motion.button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.image}
              technologies={project.technologies}
              projectUrl={project.link}
            />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-600 text-lg">
              No projects found with the selected filter.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const defaultProjects = [
  {
    id: "1",
    title: "Landscaping & Garden Service Management System",
    description: "This application developed using MERN stack. It provides a comprehensive solution for managing Landscaping and gardening services, includes features like service booking, customer management, and employee management.",
    image: LandImg,
    technologies: ["React", "Node", "MongoDB", "Express"],
    link: "https://github.com/Nipuni002/GreenScape",
  },
  {
    id: "2",
    title: "Skin Care Consultation Management System",
    description: "This application developed using Spring Boot(java) and React.js. This platform combines AI technology, progress tracking, appointment management, and blog content to deliver a complete skincare solution.",
    image: SkinImg,
    technologies: ["Spring Boot", "React", "MySQL"],
    link: "https://github.com/Nipuni002/Skin_Care_Consultation",
  },
  {
    id: "3",
    title: "Online Computer Spare Parts Management System",
    description: "This web based project is implemeted following the Model-View-Controller (MVC) architecture, utillizing java as primary programming language.",
    image: CompImg,
    technologies: ["Java", "JSP", "MySQL", "Boostrap"],
    link: "https://github.com/Nipuni002/Online_Computer_Spare_Parts_System",
  },
  {
    id: "4",
    title: "University Student Helpdesk Management System",
    description: "Developed the student online helpdesk using HTML,CSS, PHP. ",
    image: StuImg,
    technologies: ["HTML", "CSS", "PHP"],
    link: "https://github.com/Nipuni002/University_Students_Online_Helpdesk",
  },
  {
    id: "5",
    title: "MindSets Mobile App",
    description: "EchoZen is a mindfulness app designed to help users track their sleep, yoga, and meditation sessions effortlessly. ",
    image: mindImg,
    technologies: ["Kotlin", "Android Studio"],
    link: "https://github.com/Nipuni002/Mindsets_mobile_App",
  },
  {
    id: "6",
    title: "Personal Finance Tracker",
    description: "BudgetBee is your friendly financial companion that helps you track expenses, set budgets, and save money effortlessly. With intuitive tools for monitoring spending patterns, setting monthly limits, and receiving smart alerts, BudgetBee ensures you're always in control of your finances. ",
    image: FinaImg,
    technologies: ["Kotlin", "Android Studio", "SQLite"],
    link: "https://github.com/Nipuni002/BudgetBee",
  },
];

export default ProjectsGrid;