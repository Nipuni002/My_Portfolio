import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import LandImg from "./images/Land.png";
import SkinImg from "./images/Skin.png";
import CompImg from "./images/comp.png";
import StuImg from "./images/stu.png";
import mindImg from "./images/mind.png";
import FinaImg from "./images/Fina.png";
import bloodImg from "./images/blood.png";
import TravelImg from "./images/travel.png";
import FoodImg from "./images/Food.png";
import AIchatbot from "./images/AIChat.png";
import SmartCity from "./images/smartcity.png";
import { Sparkles, Filter } from "lucide-react";

const ProjectsGrid = () => {
  const [filter, setFilter] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? defaultProjects 
    : defaultProjects.filter(project => project.technologies.includes(filter));

  const technologies = ["all", ...new Set(defaultProjects.flatMap(p => p.technologies))];

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
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Featured Projects</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
              My Project
            </span>
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-300 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A collection of projects showcasing my expertise in full-stack development, modern technologies, and problem-solving skills
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="text-gray-400 font-medium">Filter by Technology</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech) => (
              <motion.button
                key={tech}
                onClick={() => handleFilterChange(tech)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === tech
                    ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 backdrop-blur-sm"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech === "all" ? "All Projects" : tech}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center">
              <Filter className="h-12 w-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No Projects Found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Try selecting a different technology filter to see more projects
            </p>
          </motion.div>
        )}

        {/* Project Count Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800/50"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
                  {filteredProjects.length}
                </span>{" "}
                <span className="text-gray-300">Projects Displayed</span>
              </h3>
              <p className="text-gray-500 text-sm">
                {filter === "all" 
                  ? "Showing all projects" 
                  : `Filtered by: ${filter}`}
              </p>
            </div>
            <div className="text-gray-400 text-sm">
              Total Projects: {defaultProjects.length}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const defaultProjects = [
  {
    id: "1",
    title: "AI Business Assistant (RAG Chatbot)",
    description: "Developed a full-stack AI chatbot using Python (FastAPI) and Next.js that provides document-based, context-aware answers through Retrieval-Augmented Generation (RAG) with LangChain and ChromaDB, including secure JWT authentication and multi-format document support.",
    image: AIchatbot,
    technologies: ["Next.js", "Python", "LangChain", "ChromaDB"],
    link: "https://github.com/Nipuni002/Business-Assistant-AI.git",
  },
   {
    id: "2",
    title: "Smart City Issue Reporting Platform",
    description: "A modern Smart City Issue Reporting Platform built using Go (Gin + GORM) and MySQL for a secure, scalable RESTful backend, with a fast, responsive React (Vite) frontend powered by JWT-based authentication.",
    image: SmartCity,
    technologies: ["Go", "Gin", "GORM", "MySQL", "React", "Vite"],
    link: "https://github.com/Nipuni002/Smart-City-Issue-Reporting-Platform.git",
  },
  {
    id: "3",
    title: "Blood Donation Management System",
    description: "Built a microservice-based blood donation platform using React, Node.js, and PostgreSQL with JWT authentication, appointment management, Docker containers, and Kubernetes deployment supported by GitHub Actions CI/CD.",
    image: bloodImg,
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Docker", "Kubernetes", "CI/CD"],
    link: "https://github.com/Nipuni002/Blood-donation-system",
  },
  {
    id: "4",
    title: "Travel & Booking Accommodation System",
    description: "Contributed to a full-stack MERN-based travel system using React, Node.js, Express, MongoDB, JWT authentication, PayPal SDK, and CI/CD with GitHub Actions. Developed the Package Management module with admin-managed travel packages and user booking workflows.",
    image: TravelImg,
    technologies: ["React", "Node.js", "MongoDB", "Express", "CI/CD"],
    link: "https://github.com/Nipuni002/Booking-System",
  },
  {
    id: "5",
    title: "Landscaping & Garden Service Management",
    description: "Comprehensive MERN stack solution for managing landscaping and gardening services, featuring service booking, customer management, and employee management systems.",
    image: LandImg,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/Nipuni002/GreenScape",
  },
  {
    id: "6",
    title: "Skin Care Consultation Management System",
    description: "Spring Boot and React.js platform combining AI technology, progress tracking, appointment management, and blog content to deliver a complete skincare solution.",
    image: SkinImg,
    technologies: ["Spring Boot", "React", "MySQL"],
    link: "https://github.com/Nipuni002/Skin_Care_Consultation",
  },
  {
    id: "7",
    title: "Computer Spare Parts Management System",
    description: "Web-based project implemented following Model-View-Controller architecture using Java, JSP, MySQL, and Bootstrap for an online computer parts management solution.",
    image: CompImg,
    technologies: ["Java", "JSP", "MySQL", "Bootstrap"],
    link: "https://github.com/Nipuni002/Online_Computer_Spare_Parts_System",
  },
  {
    id: "8",
    title: "University Student Helpdesk System",
    description: "Developed a student online helpdesk system using HTML, CSS, and PHP to streamline student support and query management.",
    image: StuImg,
    technologies: ["HTML", "CSS", "PHP"],
    link: "https://github.com/Nipuni002/University_Students_Online_Helpdesk",
  },
  {
    id: "9",
    title: "Healthy Food Tips Mobile App",
    description: "Cross-platform React Native app providing science-based nutrition guidance with daily tips, meal planning, water tracking, and offline access built with Expo and TypeScript.",
    image: FoodImg,
    technologies: ["React Native", "Expo", "TypeScript"],
    link: "https://github.com/Nipuni002/Healthy_Food_Tips-App.git",
  },
  {
    id: "10",
    title: "MindSets Mobile App",
    description: "Mindfulness Android app built with Kotlin to help users track sleep, yoga, and meditation sessions for improved mental wellbeing.",
    image: mindImg,
    technologies: ["Kotlin", "Android Studio"],
    link: "https://github.com/Nipuni002/Mindsets_mobile_App",
  },
  {
    id: "11",
    title: "Personal Finance Tracker",
    description: "Android finance app developed with Kotlin and SQLite for expense tracking, budget setting, and financial management with intuitive tools and smart alerts.",
    image: FinaImg,
    technologies: ["Kotlin", "Android Studio", "SQLite"],
    link: "https://github.com/Nipuni002/BudgetBee",
  },
];

export default ProjectsGrid;