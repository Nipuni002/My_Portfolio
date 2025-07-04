import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Code, Smartphone, Server } from "lucide-react";
import { Card, CardContent } from "./ui/card";

// PropTypes import for prop type checking
import PropTypes from "prop-types";

const ServiceCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <Card className="h-full overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all hover:border-slate-700 hover:shadow-[0_0_15px_rgba(125,211,252,0.15)]">
        <CardContent className="flex h-full flex-col p-6">
          <div className="mb-4 rounded-full bg-slate-800/50 p-3 text-cyan-400 w-12 h-12 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
          <p className="text-slate-400">{description}</p>
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
};

// New ServicesSection component
const ServicesSection = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const services = [
    {
      icon: <Server size={24} />,
      title: "Backend Development",
      description:
        "I build secure, scalable, and high-performance backend systems that ensure smooth data flow, robust API integrations, and reliable server-side operations.",
    },
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      description:
        "I create responsive, user-friendly, and visually engaging web interfaces with modern UI/UX practices to deliver seamless user experiences.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Development",
      description:
        "I develop cross-platform and native mobile applications with smooth performance and intuitive designs to provide accessible, on-the-go solutions.",
    },
    
  ];

  return (
    <section id="services" className="py-20 bg-slate-950" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 from-indigo-500 to-purple-500 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
           My Services
          </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Specialized expertise to bring your digital vision to life with
            modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;