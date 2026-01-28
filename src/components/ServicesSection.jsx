import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Smartphone, 
  Server, 
  Database, 
  Cpu, 
  Cloud, 
  Rocket,
  Shield,
  Zap,
  Sparkles,
  Monitor
} from "lucide-react";

const ServiceCard = ({ icon, title, description, index, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <div className={`group relative h-full rounded-2xl border ${gradient.border} bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[size:20px_20px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] dark:bg-[size:20px_20px]" />
        </div>

        <div className="relative p-6 md:p-8">
          {/* Icon */}
          <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${gradient.background} border ${gradient.border} inline-flex`}>
            <div className={gradient.icon}>
              {icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Scalable solutions
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Modern technologies
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Performance optimized
              </span>
            </div>
          </div>

          {/* Hover Effect Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-500 pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
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
      icon: <Cpu className="h-6 w-6" />,
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern frameworks with seamless frontend-backend integration and scalable architecture.",
      gradient: {
        background: "from-blue-500/20 to-blue-600/10",
        border: "border-blue-500/30",
        icon: "text-blue-500"
      }
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Building responsive, accessible, and high-performance user interfaces with React, Next.js, and modern CSS frameworks.",
      gradient: {
        background: "from-teal-500/20 to-teal-600/10",
        border: "border-teal-500/30",
        icon: "text-teal-500"
      }
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Developing secure, scalable APIs and server-side applications using Node.js, Express, and Spring Boot frameworks.",
      gradient: {
        background: "from-emerald-500/20 to-emerald-600/10",
        border: "border-emerald-500/30",
        icon: "text-emerald-500"
      }
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications with React Native and Expo for consistent user experiences across iOS and Android.",
      gradient: {
        background: "from-purple-500/20 to-purple-600/10",
        border: "border-purple-500/30",
        icon: "text-purple-500"
      }
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "DevOps & Deployment",
      description: "Implementing CI/CD pipelines, containerization with Docker, Kubernetes orchestration, and cloud deployment solutions.",
      gradient: {
        background: "from-amber-500/20 to-amber-600/10",
        border: "border-amber-500/30",
        icon: "text-amber-500"
      }
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Solutions",
      description: "Designing and implementing efficient database architectures with MongoDB, MySQL, and PostgreSQL for optimal performance.",
      gradient: {
        background: "from-indigo-500/20 to-indigo-600/10",
        border: "border-indigo-500/30",
        icon: "text-indigo-500"
      }
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

  const capabilities = [
    "Scalable Architecture",
    "Performance Optimization",
    "Code Maintenance",
    "Security Implementation",
    "Cross-Platform Support",
    "API Development",
    "Database Design",
    "Cloud Deployment"
  ];

  return (
    <section id="services" className="w-full py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 dark:bg-blue-500/10 dark:border-blue-500/20 backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              What I Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
             Development Services
            </span>
          </h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive full-stack development solutions to transform your ideas into 
            high-performance digital experiences with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              gradient={service.gradient}
            />
          ))}
        </motion.div>

        {/* Capabilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
                Core Capabilities
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Additional expertise and skills I bring to every project
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2.5 rounded-full bg-gradient-to-r from-gray-100 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {capability}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-blue-100 dark:border-gray-700">
              <Rocket className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fast Development</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Rapid prototyping and efficient development cycles
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-teal-100 dark:border-gray-700">
              <Shield className="h-8 w-8 text-teal-600 dark:text-teal-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure Solutions</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Built-in security measures and best practices
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-emerald-100 dark:border-gray-700">
              <Zap className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Optimized Performance</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                High-performance applications with minimal latency
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;