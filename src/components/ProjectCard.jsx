import React from "react";
import { motion } from "framer-motion";

/**
 * @typedef {Object} ProjectCardProps
 * @property {string} title
 * @property {string} description
 * @property {string} imageUrl
 * @property {string[]} technologies
 * @property {string} projectUrl
 * @property {string} [liveUrl]
 * @property {() => void} [onClick]
 */

const ProjectCard = ({
  title = "Project Title",
  description = "A short description of the project showcasing the key features and technologies used.",
  imageUrl = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
  technologies = ["React", "TypeScript", "Tailwind"],
  projectUrl = "#",
  liveUrl = "#",
  onClick = () => {},
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <div 
        className="group relative h-full overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm shadow-lg transition-all duration-500 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (projectUrl && projectUrl !== "#") {
            window.open(projectUrl, "_blank");
          }
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-transparent to-teal-500/10" />
        
        {/* Image container */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute top-4 right-4 z-10">
            <div className="rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 px-3 py-1">
              <span className="text-xs font-medium text-gray-300">Full Stack</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <motion.h3 
              className="mb-3 text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300"
              whileHover={{ x: 2 }}
            >
              {title}
            </motion.h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tag, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-xs font-medium text-gray-300 transition-all duration-300 group-hover:border-blue-500/50 group-hover:text-blue-300">
                    {tag}
                  </div>
                </motion.div>
              ))}
              {technologies.length > 4 && (
                <div className="px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-xs font-medium text-gray-400">
                  +{technologies.length - 4}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <motion.a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ x: 5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View Code
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/5 border border-blue-500/30 text-blue-400 text-sm font-medium hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Explore</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;