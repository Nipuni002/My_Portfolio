import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  ArrowDownCircle,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";
import profileImg from "./images/profile3.jpeg";

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
  title = "Hi, I'm Thakshila Perera",
  subtitle = "Full-Stack Developer",
  description = "I build modern, user-focused web applications with seamless front-end experiences and strong, scalable backend systems using the latest technologies.",
  ctaText = "View My Work",
  onCtaClick = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
  profileImage = profileImg,
}) => {
  const canvasRef = useRef(null);

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `rgba(${Math.floor(Math.random() * 100) + 155}, ${
            Math.floor(Math.random() * 100) + 155
          }, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.2})`,
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

        // Draw connections between particles that are close to each other
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(150, 150, 255, ${0.2 - distance / 500})`;
              ctx.lineWidth = 0.5;
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

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center">
      {/* Particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(to bottom, #0f0f1e, #1a1a2e)" }}
      />

      {/* Content container */}
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text content */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {title}
          </motion.h2>

          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-blue-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {subtitle}
          </motion.h3>

          <motion.p
            className="text-lg text-gray-300 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              onClick={onCtaClick}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg font-medium shadow-[0_0_15px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_rgba(79,70,229,0.7)] transition-all duration-300"
            >
              {ctaText}
              <ArrowDownCircle className="ml-2 h-5 w-5" />
            </Button>

            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/Nipuni002"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 hover:text-blue-400"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <GithubIcon className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/thakshilaNP/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 hover:text-blue-400"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <LinkedinIcon className="h-5 w-5" />
              </motion.a>
             
            </div>
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
            <motion.div
              className="relative rounded-full overflow-hidden border-4 border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.5)] w-64 h-64 md:w-80 md:h-80"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          <ArrowDownCircle className="h-6 w-6 text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;