import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  ArrowDownCircle,
  GithubIcon,
  LinkedinIcon,
  Mail,
  Sparkles,
} from "lucide-react";
import profileImg from "./images/My.png";

/**
 * @typedef {Object} HeroSectionProps
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {string} [description]
 * @property {string} [ctaText]
 * @property {() => void} [onCtaClick]
 * @property {string} [profileImage]
 */

const HeroSection = ({
  title = "Hi, I'm Nipuni Thakshila Perera",
  subtitle = "Full-Stack Developer",
  description = "I build modern, user-focused web applications with seamless front-end experiences and strong, scalable backend systems using the latest technologies.",
  ctaText = "View My Work",
  onCtaClick = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
  profileImage = profileImg,
}) => {
  const canvasRef = useRef(null);

  // Enhanced particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 8), 150); // Limit particles

    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          color: `rgba(${Math.floor(Math.random() * 60) + 195}, ${
            Math.floor(Math.random() * 80) + 175
          }, ${Math.floor(Math.random() * 60) + 195}, ${Math.random() * 0.3 + 0.1})`,
        });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;

        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;

        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw subtle connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 80) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(200, 200, 230, ${0.1 - distance / 800})`;
              ctx.lineWidth = 0.3;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animateParticles);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };

    window.addEventListener("resize", handleResize);
    createParticles();
    animateParticles();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to projects section
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-white flex items-center justify-center">
      {/* Enhanced background with gradient overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        }}
      />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/30 z-1" />

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-12">
        {/* Text content */}
        <motion.div
          className="lg:w-1/2 space-y-6 lg:space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Available for opportunities</span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block text-gray-100">Hi, I'm</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 mt-2">
              Nipuni Thakshila Perera
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              {subtitle}
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {description}
          </motion.p>

          {/* Action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="flex gap-4">
              <Button
                onClick={onCtaClick}
                className="group bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white px-8 py-6 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  {ctaText}
                  <ArrowDownCircle className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-gray-500 text-sm font-medium">Connect with me:</span>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/Nipuni002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:text-white"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GithubIcon className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/thakshilaNP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:text-white"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LinkedinIcon className="h-6 w-6" />
                </motion.a>
                <motion.button
                  onClick={handleContact}
                  className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:text-white"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-6 w-6" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70" />
            
            {/* Floating rings */}
            <div className="absolute inset-0 border-2 border-blue-500/30 rounded-3xl group-hover:border-blue-400/50 transition-all duration-500 animate-pulse" />
            <div className="absolute inset-4 border-2 border-teal-400/20 rounded-3xl group-hover:border-teal-300/30 transition-all duration-500 delay-75" />

            <motion.div
              className="relative rounded-3xl overflow-hidden border-2 border-gray-800/50 backdrop-blur-sm shadow-2xl w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={profileImage}
                alt="Nipuni Thakshila Perera - Full-Stack Developer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - Now clickable */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={scrollToProjects}
      >
        <span className="text-sm text-gray-500 mb-3 font-medium group-hover:text-blue-400 transition-colors duration-300">
          Explore projects
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <div className="p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 transition-all duration-300">
            <ArrowDownCircle className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;