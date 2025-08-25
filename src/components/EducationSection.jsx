import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import LogoImg from "./images/logo2.png";
import Sc from "./images/S.png";
import ES from "./images/Esoft.png";
/**
 * @typedef {Object} EducationItem
 * @property {number} id
 * @property {string} degree
 * @property {string} institution
 * @property {string} period
 * @property {string=} description
 * @property {string=} logo
 * @property {"university"|"school"} type
 */

const EducationSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  /** @type {EducationItem[]} */
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science Information Technology Specializing in Software Engineering",
      institution: "SLIIT (Sri Lanka Institute of Information Technology)",
      period: "2023 - 2027",
      description:
        "Specialized in Software Engineering with focus on web technologies and application development.",
      logo: LogoImg,
      type: "university",
    },
    {
      id: 2,
      degree: "Diploma in Information Technology",
      institution: "ESoft Metro Campus -Kurunegala",
      period: "2022 - 2023",
      description:
        "Completed a Diploma in Information Technology with Merit pass.",
      logo: ES,
      type: "university",
    },
    {
      id: 3,
      degree: "School Education",
      institution: "Ku/Ibbagamuwa Central College",
      period: "2012 - 2020",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>G.C.E. A/L (Physical Science Stream) -  2020 <br />
            Mathematics - C | Physics - C | Chemistry -C
          </li> <br />
          <li>G.C.E. O/L - 2017 <br />
          </li>
        </ul>
      ),
      logo: Sc,
      type: "school",
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-slate-950" id="education">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-500">
            Education & Qualifications
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            My academic journey that has shaped my knowledge and expertise in
            the field.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full hidden md:block" />

          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div
                className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-purple-500 border-4 border-gray-950 shadow-[0_0_15px_rgba(147,51,234,0.6)] z-10"
                style={{ top: `calc(${index * 50}% + 2rem)` }}
              />

              <div
                className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"} flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                <Card className="w-full max-w-md bg-gray-900/90 border border-purple-800/50 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:border-purple-600/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-purple-200 mb-1">
                          {item.degree}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {item.institution}
                        </p>
                      </div>
                      {item.logo && (
                        <div className={`rounded-full overflow-hidden transition-all duration-300 ${
                          item.type === "university" ? "w-36 h-36" : "w-20 h-20"
                        }`}>
                          <img
                            src={item.logo}
                            alt={`${item.institution} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                    <div className="text-gray-300 text-sm mb-4">
                      {item.description}
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge
                        variant="outline"
                        className="border-blue-500/70 text-purple-200 border bg-blue-950/50"
                      >
                        {item.period}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-purple-900/60 text-purple-200 border border-purple-700/50"
                      >
                        {item.type === "university"
                          ? "Higher Education"
                          : "School Education"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;