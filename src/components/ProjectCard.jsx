import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

/**
 * @typedef {Object} ProjectCardProps
 * @property {string} title
 * @property {string} description
 * @property {string} image
 * @property {string[]} tags
 * @property {string} [githubUrl]
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
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="group relative h-full overflow-hidden rounded-xl border border-transparent bg-gradient-to-br from-slate-900/80 to-slate-800/80 shadow-lg transition-all duration-300 hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-600/10 via-transparent to-transparent -z-10" />
        
        {/* Image container with gradient overlay */}
        <div className="relative h-52 overflow-hidden">
          <motion.img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-70" />
        </div>

        <CardContent className="flex h-[calc(100%-13rem)] flex-col justify-between p-6">
          <div>
            <motion.h3 
              className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400 group-hover:to-blue-500"
              whileHover={{ x: 2 }}
            >
              {title}
            </motion.h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-300 line-clamp-3">
              {description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {technologies.map((tag, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Badge
                    variant="outline"
                    className="border-slate-700 bg-slate-800/50 text-xs text-slate-200 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:text-blue-200"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {projectUrl && (
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="rounded-full p-2 text-slate-400 hover:bg-blue-500/20 hover:text-purple-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(projectUrl, "_blank");
                    }}
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </motion.div>
              )}
              {liveUrl && (
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="rounded-full p-2 text-slate-400 hover:bg-blue-500/20 hover:text-purple-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(liveUrl, "_blank");
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Live Demo</span>
                  </Button>
                </motion.div>
              )}
            </div>

            <motion.div 
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                size="sm"
                variant="ghost"
                className="group/btn flex items-center gap-1 rounded-full px-3 text-slate-300 hover:bg-blue-500/20 hover:text-purple-500"
                onClick={(e) => {
                  e.stopPropagation();
                  if (projectUrl && projectUrl !== "#") {
                    window.open(projectUrl, "_blank");
                  }
                }}
              >
                <span className="text-xs font-medium">View More</span>
                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </CardContent>

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 -z-10 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100"
          initial={{ background: "linear-gradient(45deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0) 50%, rgba(139,92,246,0.1) 100%)" }}
          whileHover={{
            background: [
              "linear-gradient(45deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0) 50%, rgba(139,92,246,0.1) 100%)",
              "linear-gradient(45deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0.1) 50%, rgba(139,92,246,0.1) 100%)",
              "linear-gradient(45deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0.05) 50%, rgba(139,92,246,0.1) 100%)",
            ],
            transition: { duration: 3, repeat: Infinity, repeatType: "reverse" }
          }}
        />
      </Card>
    </motion.div>
  );
};

export default ProjectCard;