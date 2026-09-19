// import React, { useRef } from 'react';
// import { ArrowRight, Download } from 'lucide-react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { portfolioData } from '../../data/portfolioData';
// import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

// const FloatingBadge = ({ title, className, delay, yOffset }) => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.8 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ delay, duration: 0.5 }}
//     className={`absolute glass-card px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap shadow-lg flex items-center gap-2 z-20 ${className}`}
//     style={{
//       transform: 'translateZ(30px)',
//     }}
//   >
//     <motion.div
//       className="w-2 h-2 rounded-full bg-current"
//       animate={{ opacity: [1, 0.5, 1] }}
//       transition={{ duration: 2, repeat: Infinity }}
//     />
//     {title}
//     <motion.div
//       className="absolute inset-0 rounded-full"
//       animate={{
//         y: yOffset,
//       }}
//       transition={{
//         duration: 4,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut",
//         delay: delay
//       }}
//     />
//   </motion.div>
// );

// const HeroSection = () => {
//   const { name, role, summary, github, linkedin } = portfolioData.personal;
//   const containerRef = useRef(null);

//   // Parallax on scroll
//   const { scrollY } = useScroll();
//   const y1 = useTransform(scrollY, [0, 500], [0, 50]);

//   // 3D Mouse parallax
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
//   const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

//   const handleMouseMove = (e) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();

//     const width = rect.width;
//     const height = rect.height;
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;

//     x.set(xPct);
//     y.set(yPct);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
//     }
//   };

//   return (
//     <section
//       id="hero"
//       className="min-h-0 md:min-h-[95vh] flex items-center relative overflow-visible pt-28 pb-10 md:pt-0 md:pb-0"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-20 w-full flex flex-col-reverse md:flex-row items-center justify-between z-10 gap-8 md:gap-0">

//         {/* Left Side */}
//         <motion.div
//           className="md:w-[55%] space-y-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <div>
//             <motion.p variants={itemVariants} className="text-primary-600 font-bold tracking-wider uppercase mb-3 text-sm flex items-center gap-3">
//               <span className="w-10 h-[2px] bg-primary-600 inline-block rounded-full"></span>
//               Hello, I am
//             </motion.p>

//             <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-4 relative inline-block">
//               {name}
//               <motion.div
//                 className="absolute -right-8 -top-4 w-6 h-6 rounded-full bg-cyan-400 blur-md"
//                 animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               />
//             </motion.h1>

//             <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 mb-6">
//               {role}
//             </motion.h2>

//             <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
//               {summary.split('.')[0]}. {summary.split('.')[1]}.
//             </motion.p>
//           </div>

//           <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
//             <a
//               href="#projects"
//               className="interactive group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base font-medium text-white transition-all duration-300 bg-primary-600 border border-transparent rounded-xl hover:bg-primary-700 hover:shadow-[0_8px_25px_rgb(37,99,235,0.3)] hover:-translate-y-1 overflow-hidden"
//             >
//               <div className="absolute inset-0 w-full h-full -ml-20 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
//               <span className="relative z-10 flex items-center gap-2">
//                 View Projects
//                 <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
//               </span>
//             </a>

//             <a
//               href="#contact"
//               className="interactive inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 border border-gray-200 text-sm md:text-base font-medium rounded-xl text-gray-700 bg-white/70 backdrop-blur-sm hover:bg-white hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
//             >
//               Contact Me
//             </a>

//             <a
//               href="/resume.pdf"
//               download="Deepak-Kumar-Resume.pdf"
//               className="interactive group inline-flex items-center justify-center px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-medium text-primary-600 hover:text-primary-700 transition-colors"
//             >
//               <Download className="mr-2 transition-transform group-hover:-translate-y-1" size={20} />
//               Resume
//             </a>
//           </motion.div>

//           <motion.div variants={itemVariants} className="flex items-center space-x-6 pt-8 border-t border-gray-200/60">
//             <a
//               href={`https://${github}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="interactive text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-3 group"
//             >
//               <div className="p-2.5 bg-white rounded-full shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 border border-gray-100">
//                 <FaGithub size={22} className="group-hover:scale-110 transition-transform" />
//               </div>
//               <span className="font-medium text-sm">GitHub</span>
//             </a>
//             <a
//               href={`https://${linkedin}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="interactive text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-3 group"
//             >
//               <div className="p-2.5 bg-white rounded-full shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 border border-gray-100">
//                 <FaLinkedin size={22} className="group-hover:scale-110 transition-transform" />
//               </div>
//               <span className="font-medium text-sm">LinkedIn</span>
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Right Side - Visual */}
//         <motion.div
//           className="md:w-[45%] flex justify-center items-center relative perspective-[1200px]"
//           style={{ y: y1 }}
//           ref={containerRef}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//         >
//           <motion.div
//             className="relative w-full max-w-[480px] aspect-square"
//             style={{
//               rotateX,
//               rotateY,
//               transformStyle: "preserve-3d"
//             }}
//           >
//             {/* Glow effect behind */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-primary-400/20 to-cyan-300/20 blur-[80px] rounded-full scale-90 -z-10"></div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
//               className="w-full h-full"
//               style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
//             >
//               <img
//                 src="/full stack1.jpg"
//                 alt="Full Stack Developer"
//                 className="w-full h-full object-contain filter drop-shadow-2xl"
//               />
//             </motion.div>

//             {/* Floating Badges */}
//             <motion.div style={{ transform: "translateZ(80px)" }} className="absolute inset-0 pointer-events-none">
//               <FloatingBadge title="React.js" className="-top-4 -left-4 text-blue-500" delay={0.8} yOffset={[-10, 10, -10]} />
//               <FloatingBadge title="Node.js" className="top-32 -right-8 text-green-600" delay={1.2} yOffset={[10, -10, 10]} />
//               <FloatingBadge title="MySQL" className="bottom-24 -left-6 text-orange-500" delay={1.6} yOffset={[-8, 8, -8]} />
//               <FloatingBadge title="AWS" className="-bottom-4 right-12 text-yellow-600" delay={2} yOffset={[8, -8, 8]} />
//             </motion.div>
//           </motion.div>
//         </motion.div>

//       </div>

//       {/* Adding custom keyframes to index.css will handle the shimmer animation */}
//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes shimmer {
//           100% { transform: translateX(100%); }
//         }
//       `}} />
//     </section>
//   );
// };

// export default HeroSection;

import React, { useRef } from "react";
import {
  ArrowRight,
  Download,
  Terminal,
  Code2,
  Database,
  Cloud,
  GitBranch,
  CircleCheck,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

/* =========================================================
   TECH CHIP
========================================================= */

const TechChip = ({ icon: Icon, label, color }) => (
  <motion.div
    whileHover={{
      y: -4,
      scale: 1.03,
    }}
    transition={{
      duration: 0.2,
    }}
    className="
      flex items-center gap-2
      px-3 py-2
      rounded-xl
      bg-white/80
      border border-white
      shadow-sm
      backdrop-blur-md
      cursor-default
    "
  >
    <div className={`p-1.5 rounded-lg ${color}`}>
      <Icon size={14} />
    </div>

    <span className="text-xs font-semibold text-gray-700">{label}</span>
  </motion.div>
);

/* =========================================================
   HERO SECTION
========================================================= */

const HeroSection = () => {
  const { name, role, summary, github, linkedin } = portfolioData.personal;

  /* =======================================================
     CONTAINER
  ======================================================= */

  const containerRef = useRef(null);

  /* =======================================================
     PARALLAX ON SCROLL
  ======================================================= */

  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 50]);

  /* =======================================================
     3D MOUSE PARALLAX
  ======================================================= */

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 100,
    damping: 30,
  });

  const mouseYSpring = useSpring(y, {
    stiffness: 100,
    damping: 30,
  });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);

  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  /* =======================================================
     MOUSE MOVE
  ======================================================= */

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;

    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;

    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  /* =======================================================
     MOUSE LEAVE
  ======================================================= */

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  /* =======================================================
     CONTAINER ANIMATION
  ======================================================= */

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  /* =======================================================
     ITEM ANIMATION
  ======================================================= */

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <section
      id="hero"
      className="
  min-h-0
  md:min-h-[95vh]
  flex
  items-center
  relative
  overflow-visible
  pt-6
  pb-10
  sm:pt-8
  md:pt-0
  md:pb-0
"
    >
      <div
        className="
    max-w-7xl
    mx-auto
    px-4
    sm:px-6
    lg:px-8
    py-4
    md:py-20
    w-full
    flex
    flex-col
    md:flex-row
    items-center
    justify-between
    z-10
    gap-12
    md:gap-4
  "
      >
        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <motion.div
          className=" w-full
            md:w-[53%]
            space-y-8 
          "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            {/* HELLO */}
            <motion.p
              variants={itemVariants}
              className="
                text-primary-600
                font-bold
                tracking-wider
                uppercase
                mb-3
                text-sm
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  w-10
                  h-[2px]
                  bg-primary-600
                  inline-block
                  rounded-full
                "
              />
              Hello, I am
            </motion.p>

            {/* NAME */}
            <motion.h1
              variants={itemVariants}
              className="
                text-4xl
                sm:text-5xl
                md:text-7xl
                font-extrabold
                text-gray-900
                tracking-tight
                mb-4
                relative
                inline-block
              "
            >
              {name}

              {/* NAME GLOW */}
              <motion.div
                className="
                  absolute
                  -right-8
                  -top-4
                  w-6
                  h-6
                  rounded-full
                  bg-cyan-400
                  blur-md
                "
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.h1>

            {/* ROLE */}
            <motion.h2
              variants={itemVariants}
              className="
                text-xl
                sm:text-2xl
                md:text-4xl
                font-bold
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-gray-700
                to-gray-500
                mb-6
              "
            >
              {role}
            </motion.h2>

            {/* SUMMARY */}
            <motion.p
              variants={itemVariants}
              className="
                text-base
                sm:text-lg
                text-gray-600
                max-w-xl
                leading-relaxed text-justify
              "
            >
              {summary}
            </motion.p>
          </div>

          {/* =================================================
              BUTTONS
          ================================================= */}

          {/* <motion.div
            variants={itemVariants}
            className="
              flex
              flex-wrap
              gap-4
              pt-2
            "
          > */}

          <motion.div
            variants={itemVariants}
            className="
    flex
    flex-wrap
    justify-center
    md:justify-start
    gap-3
    md:gap-4
    pt-2
  "
          >
            <a
              href="#projects"
              className="
    interactive
    group
    relative
    inline-flex
    items-center
    justify-center
    w-full
    md:w-auto
    px-6
    py-3
    md:px-8
    md:py-3.5
    text-sm
    md:text-base
    font-medium
    text-white
    transition-all
    duration-300
    bg-primary-600
    border
    border-transparent
    rounded-xl
    hover:bg-primary-700
    hover:shadow-[0_8px_25px_rgb(37,99,235,0.3)]
    hover:-translate-y-1
    overflow-hidden
  "
            >
              {/* SHIMMER */}
              <div
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  -ml-20
                  translate-x-[-100%]
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  group-hover:animate-[shimmer_1.5s_infinite]
                "
              />

              <span
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-2
                "
              >
                View Projects
                <ArrowRight
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                  size={20}
                />
              </span>
            </a>

            {/* CONTACT */}
            {/* <a
              href="#contact"
              className="
                interactive
                inline-flex
                items-center
                justify-center
                px-6
                py-3
                md:px-8
                md:py-3.5
                border
                border-gray-200
                text-sm
                md:text-base
                font-medium
                rounded-xl
                text-gray-700
                bg-white/70
                backdrop-blur-sm
                hover:bg-white
                hover:border-gray-300
                transition-all
                duration-300
                shadow-sm
                hover:shadow-md
                hover:-translate-y-1
              "
            >
              Contact Me
            </a>

           
            <a
              href="/resume.pdf"
              download="Deepak-Kumar-Resume.pdf"
              className="
                interactive
                group
                inline-flex
                items-center
                justify-center
                px-4
                py-3
                md:px-6
                md:py-3.5
                text-sm
                md:text-base
                font-medium
                text-primary-600
                hover:text-primary-700
                transition-colors
              "
            >
              <Download
                className="
                  mr-2
                  transition-transform
                  group-hover:-translate-y-1
                "
                size={20}
              />
              Resume
            </a> */}

            {/* CONTACT + RESUME */}
<div
  className="
    w-full
    md:w-auto
    flex
    items-center
    justify-center
    gap-3
  "
>
  {/* CONTACT */}
  <a
    href="#contact"
    className="
      interactive
      inline-flex
      items-center
      justify-center
      flex-1
      md:flex-none
      px-5
      py-3
      md:px-8
      md:py-3.5
      border
      border-gray-200
      text-sm
      md:text-base
      font-medium
      rounded-xl
      text-gray-700
      bg-white/70
      backdrop-blur-sm
      hover:bg-white
      hover:border-gray-300
      transition-all
      duration-300
      shadow-sm
      hover:shadow-md
      hover:-translate-y-1
    "
  >
    Contact Me
  </a>


  {/* RESUME */}
  <a
    href="/Deepak Resume.pdf"
    download="Deepak-Kumar-Resume.pdf"
    className="
      interactive
      group
      inline-flex
      items-center
      justify-center
      flex-1
      md:flex-none
      px-5
      py-3
      md:px-6
      md:py-3.5
      text-sm
      md:text-base
      font-medium
      text-primary-600
      hover:text-primary-700
      transition-colors
    "
  >
    <Download
      className="
        mr-2
        transition-transform
        group-hover:-translate-y-1
      "
      size={18}
    />

    <span>Resume</span>
  </a>
</div>

          </motion.div>

          {/* =================================================
              SOCIAL LINKS
          ================================================= */}

          <motion.div
            variants={itemVariants}
            className="
  flex
  items-center
  justify-center
  md:justify-start
  space-x-6
  pt-8
  border-t
  border-gray-200/60
"
          >
            {/* GITHUB */}
            <a
              href={`https://${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                interactive
                text-gray-500
                hover:text-gray-900
                transition-colors
                flex
                items-center
                gap-3
                group
              "
            >
              <div
                className="
                  p-2.5
                  bg-white
                  rounded-full
                  shadow-sm
                  group-hover:shadow-md
                  group-hover:-translate-y-1
                  transition-all
                  duration-300
                  border
                  border-gray-100
                "
              >
                <FaGithub
                  size={22}
                  className="
                    group-hover:scale-110
                    transition-transform
                  "
                />
              </div>

              <span
                className="
                  font-medium
                  text-sm
                "
              >
                GitHub
              </span>
            </a>

            {/* LINKEDIN */}
            <a
              href={`https://${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                interactive
                text-gray-500
                hover:text-blue-600
                transition-colors
                flex
                items-center
                gap-3
                group
              "
            >
              <div
                className="
                  p-2.5
                  bg-white
                  rounded-full
                  shadow-sm
                  group-hover:shadow-md
                  group-hover:-translate-y-1
                  transition-all
                  duration-300
                  border
                  border-gray-100
                "
              >
                <FaLinkedin
                  size={22}
                  className="
                    group-hover:scale-110
                    transition-transform
                  "
                />
              </div>

              <span
                className="
                  font-medium
                  text-sm
                "
              >
                LinkedIn
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* =================================================
            RIGHT SIDE - DEVELOPER WORKSPACE
        ================================================= */}

        <motion.div
          className=" w-full
            md:w-[47%]
            flex
            justify-center
            items-center
            relative
            perspective-[1200px]
          "
          style={{
            y: y1,
          }}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="
              relative
              w-full
              max-w-[510px]
            "
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* =================================================
                BACKGROUND GLOW
            ================================================= */}

            <div
              className="
                absolute
                -inset-10
                bg-gradient-to-br
                from-blue-400/20
                via-cyan-300/10
                to-purple-400/20
                blur-[80px]
                rounded-full
                -z-10
              "
            />

            {/* =================================================
                MAIN DEVELOPER CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="
                relative
                rounded-3xl
                overflow-hidden
                border
                border-white/80
                bg-white/75
                backdrop-blur-2xl
                shadow-[0_30px_80px_rgba(15,23,42,0.15)]
              "
              style={{
                transform: "translateZ(50px)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* =================================================
                  BROWSER HEADER
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
                  border-b
                  border-gray-200/70
                  bg-white/70
                "
              >
                {/* Browser dots */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-red-400
                    "
                  />

                  <span
                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-yellow-400
                    "
                  />

                  <span
                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-green-400
                    "
                  />
                </div>

                {/* Terminal title */}

                <div className="w-8" />
              </div>

              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div className="p-6 md:p-7">
                {/* =================================================
                    CURRENTLY BUILDING
                ================================================= */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mb-6
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <div
                      className="
                        p-2
                        rounded-lg
                        bg-blue-50
                        text-blue-600
                      "
                    >
                      <Code2 size={18} />
                    </div>

                    <div>
                      <p
                        className="
                          text-xs
                          text-gray-400
                        "
                      >
                        Currently building
                      </p>

                      <p
                        className="
                          text-sm
                          font-bold
                          text-gray-800
                        "
                      >
                        Full Stack Applications
                      </p>
                    </div>
                  </div>

                  {/* STATUS */}
                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      px-3
                      py-1.5
                      rounded-full
                      bg-green-50
                      border
                      border-green-100
                    "
                  >
                    <span
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-green-500
                        animate-pulse
                      "
                    />

                    <span
                      className="
                        text-xs
                        font-semibold
                        text-green-600
                      "
                    >
                      Available
                    </span>
                  </div>
                </div>

                {/* =================================================
                    CODE WINDOW
                ================================================= */}

                <div
                  className="
                    rounded-2xl
                    bg-[#111827]
                    p-5
                    shadow-inner
                    overflow-hidden
                  "
                >
                  {/* File path */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      mb-4
                      text-gray-400
                      text-xs
                    "
                  >
                    <span className="text-blue-400">src</span>

                    <span>/</span>

                    <span>developer.js</span>
                  </div>

                  {/* CODE */}
                  <div
                    className="
                      font-mono
                      text-[12px]
                      sm:text-[13px]
                      leading-7
                    "
                  >
                    <div>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-300">developer</span>{" "}
                      <span className="text-gray-300">=</span>{" "}
                      <span className="text-yellow-300">{"{"}</span>
                    </div>

                    <div className="pl-5">
                      <span className="text-blue-300">name</span>
                      <span className="text-gray-400">:</span>{" "}
                      <span className="text-green-300">"Deepak Kumar"</span>
                      <span className="text-gray-400">,</span>
                    </div>

                    <div className="pl-5">
                      <span className="text-blue-300">role</span>
                      <span className="text-gray-400">:</span>{" "}
                      <span className="text-green-300">
                        "Full Stack Developer"
                      </span>
                      <span className="text-gray-400">,</span>
                    </div>

                    <div className="pl-5">
                      <span className="text-blue-300">experience</span>
                      <span className="text-gray-400">:</span>{" "}
                      <span className="text-orange-300">"1.5+ years"</span>
                      <span className="text-gray-400">,</span>
                    </div>

                    <div className="pl-5">
                      <span className="text-blue-300">passion</span>
                      <span className="text-gray-400">:</span>{" "}
                      <span className="text-green-300">
                        "Building scalable apps"
                      </span>
                    </div>

                    <div>
                      <span className="text-yellow-300">{"}"}</span>

                      <span className="text-gray-300">;</span>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    TECH STACK
                ================================================= */}

                <div className="mt-6">
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-gray-400
                      mb-3
                    "
                  >
                    Tech Stack
                  </p>

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    <TechChip
                      icon={Code2}
                      label="React.js"
                      color="
                        bg-blue-50
                        text-blue-600
                      "
                    />

                    <TechChip
                      icon={Terminal}
                      label="Node.js"
                      color="
                        bg-green-50
                        text-green-600
                      "
                    />

                    <TechChip
                      icon={Database}
                      label="MySQL"
                      color="
                        bg-orange-50
                        text-orange-600
                      "
                    />

                    <TechChip
                      icon={Cloud}
                      label="AWS"
                      color="
                        bg-yellow-50
                        text-yellow-600
                      "
                    />
                  </div>
                </div>

                {/* =================================================
                    STATS
                ================================================= */}

                <div
                  className="
                    grid
                    grid-cols-3
                    gap-3
                    mt-6
                  "
                >
                  {/* EXPERIENCE */}
                  <div
                    className="
                      rounded-xl
                      bg-gray-50/80
                      border
                      border-gray-100
                      p-3
                      text-center
                    "
                  >
                    <p
                      className="
                        text-lg
                        font-bold
                        text-gray-900
                      "
                    >
                      1.5+
                    </p>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-wide
                        text-gray-400
                      "
                    >
                      Years
                    </p>
                  </div>

                  {/* PROJECTS */}
                  <div
                    className="
                      rounded-xl
                      bg-gray-50/80
                      border
                      border-gray-100
                      p-3
                      text-center
                    "
                  >
                    <p
                      className="
                        text-lg
                        font-bold
                        text-gray-900
                      "
                    >
                      10+
                    </p>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-wide
                        text-gray-400
                      "
                    >
                      Projects
                    </p>
                  </div>

                  {/* TECHNOLOGIES */}
                  <div
                    className="
                      rounded-xl
                      bg-gray-50/80
                      border
                      border-gray-100
                      p-3
                      text-center
                    "
                  >
                    <p
                      className="
                        text-lg
                        font-bold
                        text-gray-900
                      "
                    >
                      4+
                    </p>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-wide
                        text-gray-400
                      "
                    >
                      Technologies
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING STATUS CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1.1,
                duration: 0.6,
              }}
              className="
                absolute
                -right-6
                top-20
                hidden
                lg:flex
                items-center
                gap-2
                px-4
                py-3
                rounded-2xl
                bg-white/90
                backdrop-blur-xl
                border
                border-white
                shadow-xl
              "
              style={{
                transform: "translateZ(100px)",
              }}
            ></motion.div>

            {/* =================================================
                FLOATING GIT CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1.4,
                duration: 0.6,
              }}
              className="
                absolute
                -left-6
                bottom-16
                hidden
                lg:flex
                items-center
                gap-2
                px-4
                py-3
                rounded-2xl
                bg-white/90
                backdrop-blur-xl
                border
                border-white
                shadow-xl
              "
              style={{
                transform: "translateZ(110px)",
              }}
            ></motion.div>

            {/* =================================================
                SPARKLE
            ================================================= */}

            <motion.div
              className="
                absolute
                -top-5
                right-16
                text-blue-400
              "
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              style={{
                transform: "translateZ(130px)",
              }}
            >
              <Sparkles size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          SHIMMER ANIMATION
      ===================================================== */}

      <style
        dangerouslySetInnerHTML={{
          __html: `

            @keyframes shimmer {

              100% {
                transform: translateX(100%);
              }

            }

          `,
        }}
      />
    </section>
  );
};

export default HeroSection;
