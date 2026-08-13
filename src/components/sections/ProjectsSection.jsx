import React, { useRef } from "react";
import { portfolioData } from "../../data/portfolioData";
import SectionWrapper from "../layout/SectionWrapper";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass-card rounded-[2.5rem] overflow-hidden border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)] hover:border-primary-200 transition-all duration-500 flex flex-col lg:flex-row group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Project Image */}
      <div className="lg:w-2/5 relative overflow-hidden bg-gray-50/50 flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-gray-100/50">
        <div className="w-full h-[320px] lg:h-[100%] min-h-[400px] flex items-center justify-center relative z-10 transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-1">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-contain filter drop-shadow-xl"
            style={{ transform: "translateZ(30px)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>

      {/* Project Details */}
      <div className="lg:w-3/5 p-8 md:p-12 flex flex-col relative z-10">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-cyan-500 transition-all duration-300">
            {project.name.split("—")[0].trim()}
          </h3>
          <p className="text-primary-600 font-medium">
            {project.name.split("—")[1]?.trim()}
          </p>
        </div>

        <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="mb-8">
          <h5 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-6 h-1 bg-primary-500 rounded-full inline-block"></span>
            Key Features
          </h5>
          <ul className="space-y-3 text-gray-600 text-sm md:text-base">
            {project.details.map((detail, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 mr-3 flex-shrink-0"></span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100/50">
          <h5 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
            Tech Stack
          </h5>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded-full shadow-sm group-hover:border-primary-100 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {/* <button
              className="flex items-center px-6 py-2.5 rounded-xl text-sm font-semibold text-gray-500 bg-gray-50 border border-gray-200 cursor-not-allowed opacity-50"
              title="Link not provided in resume"
            >
              <ExternalLink size={18} className="mr-2" />
              Live Demo
            </button> */}
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-2.5 rounded-xl text-sm font-semibold text-primary-600 bg-primary-50 border border-primary-100 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </a>
            ) : (
              <button
                disabled
                className="flex items-center px-6 py-2.5 rounded-xl text-sm font-semibold text-gray-400 bg-gray-50 border border-gray-200 cursor-not-allowed opacity-60"
                title="Live demo not available"
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </button>
            )}

            {/* <button
              className="flex items-center px-6 py-2.5 rounded-xl text-sm font-semibold text-gray-500 bg-gray-50 border border-gray-200 cursor-not-allowed opacity-50"
              title="Link not provided in resume"
            >
              <FaGithub size={18} className="mr-2" />
              Source Code
            </button> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      className="bg-transparent relative"
    >
      {/* Decorative */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-[120px] -z-10 translate-x-1/3"></div>

      <div className="space-y-16 perspective-[1200px]">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
