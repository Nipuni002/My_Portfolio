import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Code, Smartphone, Server, Database, Cpu, Layout, Cloud, GitBranch } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import PropTypes from "prop-types";

const ServiceCard = ({ icon, title, description, delay, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5, 
        transition: { duration: 0.2 } 
      }}
    >
      <Card className="h-full overflow-hidden border border-slate-800 bg-gradient-to-b from-slate-900/70 to-slate-900/40 backdrop-blur-sm transition-all hover:shadow-xl group">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        <CardContent className="flex h-full flex-col p-6 relative">
          <div className={`mb-4 rounded-full bg-slate-800/70 p-3 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${gradient.replace('bg-gradient-to-br', 'text')}`}>
            {icon}
          </div>
          <h3 className="mb-3 text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
            {title}
          </h3>
          <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
            {description}
          </p>
          <div className="mt-4 pt-4 border-t border-slate-800/50">
            
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  gradient: PropTypes.string.isRequired,
};

const ServicesSection = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const services = [
    {
      icon: <Cpu size={24} />,
      title: "Full-Stack Development",
      description: "End-to-end web application development with modern frameworks, ensuring seamless integration between frontend and backend systems.",
      gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
    },
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      description: "Creating responsive, accessible, and performant user interfaces with React, Next.js, and modern CSS frameworks.",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    },
    {
      icon: <Server size={24} />,
      title: "Backend Development",
      description: "Building secure, scalable APIs and server-side applications with Node.js, Express, and Spring Boot frameworks.",
      gradient: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with React Native for consistent experiences across devices.",
      gradient: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="mb-16 text-center"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-2 inline-block"
          >
            What I Offer
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Development Services
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive full-stack development solutions to transform your ideas into 
            high-performance digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
              gradient={service.gradient}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-1 bg-slate-800/50 rounded-full border border-slate-700/30">
            <span className="px-4 py-2 text-sm text-slate-300">
              <span className="text-cyan-400 mr-1">+</span> Scalability Design
            </span>
            <span className="px-4 py-2 text-sm text-slate-300">
              <span className="text-cyan-400 mr-1">+</span> Performance Optimization
            </span>
            <span className="px-4 py-2 text-sm text-slate-300">
              <span className="text-cyan-400 mr-1">+</span> Code Maintenance
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;