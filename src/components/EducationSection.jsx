import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from "lucide-react";
import LogoImg from "./images/logo2.png";
import ES from "./images/Esoft.png";
import Sc from "./images/S.png";

const EducationSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Information Technology",
      specialization: "Specializing in Software Engineering",
      institution: "SLIIT (Sri Lanka Institute of Information Technology)",
      location: "Malabe, Sri Lanka",
      period: "2023 - Present",
      description: [
        "Specialized in Software Engineering with focus on modern web technologies",
        "Advanced coursework in full-stack development, cloud computing, and software architecture",
        "Active participant in university tech communities and hackathons"
      ],
      type: "university",
      status: "Ongoing",
      logo: LogoImg,
      timelineYear: "2023 - Present"
    },
    {
      id: 2,
      degree: "Diploma in Information Technology",
      institution: "ESOFT Metro Campus",
      location: "Kurunegala, Sri Lanka",
      period: "2022 - 2023",
      description: [
        "Completed with Merit Pass distinction",
        "Comprehensive study of IT fundamentals, programming, and database systems",
        "Hands-on projects in web development and software applications"
      ],
      type: "diploma",
      status: "Completed",
      logo: ES,
      timelineYear: "2022 - 2023"
    },
    {
      id: 3,
      degree: "Secondary Education",
      institution: "Ibbagamuwa Central College",
      location: "Kurunegala, Sri Lanka",
      period: "2012 - 2020",
      description: [
        "G.C.E. Advanced Level (Physical Science Stream)",
        "Subjects: Combined Mathematics (C), Physics (C), Chemistry(C)",
        "G.C.E. Ordinary Level - Completed with strong performance in Science and Mathematics"
      ],
      type: "school",
      status: "Completed",
      logo: Sc,
      timelineYear: "2012 - 2020"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case "university":
        return <GraduationCap className="h-5 w-5 text-blue-400" />;
      case "diploma":
        return <Award className="h-5 w-5 text-teal-400" />;
      case "school":
        return <BookOpen className="h-5 w-5 text-green-400" />;
      default:
        return <GraduationCap className="h-5 w-5 text-blue-400" />;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case "university":
        return {
          bg: "from-blue-500/20 to-blue-600/10",
          border: "border-blue-500/30",
          text: "text-blue-400"
        };
      case "diploma":
        return {
          bg: "from-teal-500/20 to-teal-600/10",
          border: "border-teal-500/30",
          text: "text-teal-400"
        };
      case "school":
        return {
          bg: "from-green-500/20 to-green-600/10",
          border: "border-green-500/30",
          text: "text-green-400"
        };
      default:
        return {
          bg: "from-gray-500/20 to-gray-600/10",
          border: "border-gray-500/30",
          text: "text-gray-400"
        };
    }
  };

  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950" id="education">
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
            <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Academic Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
              Education & Qualifications
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
            A comprehensive overview of my academic background and qualifications that have shaped my technical expertise
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative max-w-6xl mx-auto"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/30 via-teal-500/30 to-green-500/30 dark:from-blue-400/30 dark:via-teal-400/30 dark:to-green-400/30 rounded-full" />

          {educationData.map((item, index) => {
            const typeColor = getTypeColor(item.type);
            const isEvenIndex = index % 2 === 0;
            
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row items-start mb-12 md:mb-16"
              >
                {/* Timeline Dot */}
                <div 
                  className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 z-10 ${
                    item.status === "Ongoing" 
                      ? "animate-pulse bg-gradient-to-r from-blue-500 to-teal-400" 
                      : "bg-gradient-to-r from-blue-400 to-teal-300"
                  }`}
                  style={{ top: "1.5rem" }}
                />

                {/* Content Card - Always on the right side for better readability */}
                <div className={`w-full md:w-5/12 ${isEvenIndex ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"} pl-10 md:pl-0`}>
                  <div className={`group relative rounded-2xl border ${typeColor.border} bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                    <div className="relative p-6">
                      {/* Header with Logo and Status */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${typeColor.bg} border ${typeColor.border}`}>
                            {getTypeIcon(item.type)}
                          </div>
                          <div>
                            <div className="inline-flex items-center gap-2 mb-1">
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                item.status === "Ongoing"
                                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                  : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              }`}>
                                {item.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Institution Logo */}
                        {item.logo && (
                          <div className="w-10 h-10 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-1 flex-shrink-0">
                            <img
                              src={item.logo}
                              alt={`${item.institution} logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                      </div>

                      {/* Degree and Institution */}
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.degree}
                      </h3>
                      {item.specialization && (
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 text-sm">
                          {item.specialization}
                        </p>
                      )}

                      {/* Institution Details */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <GraduationCap className="h-4 w-4" />
                          <span className="font-medium">{item.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-4">
                        {Array.isArray(item.description) ? (
                          <ul className="space-y-2">
                            {item.description.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                <span className="text-sm leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>

                      {/* Footer with Period */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-800">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">{item.period}</span>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          item.type === "university"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : item.type === "diploma"
                            ? "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        }`}>
                          {item.type === "university" ? "Bachelor's" : 
                           item.type === "diploma" ? "Diploma" : "School"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Year with Full Duration Dates */}
                <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 items-center gap-2 z-20 ${
                  isEvenIndex ? "flex-row-reverse" : ""
                }`}>
                  <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 shadow-lg min-w-[100px] text-center">
                    <span className="text-white text-xs font-semibold whitespace-nowrap">
                      {item.timelineYear}
                    </span>
                  </div>
                  <div className={`h-0.5 w-8 ${isEvenIndex ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-blue-100 dark:border-gray-700">
              <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Higher Education</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Pursuing Software Engineering specialization</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-teal-100 dark:border-gray-700">
              <Award className="h-8 w-8 text-teal-600 dark:text-teal-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Diploma Completed</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Merit Pass in Information Technology</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-green-100 dark:border-gray-700">
              <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Academic Foundation</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Strong background in Science and Mathematics</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;