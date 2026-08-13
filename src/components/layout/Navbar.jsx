import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    // Close menu first
    setIsMobileMenuOpen(false);

    if (element) {
      setTimeout(() => {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map(link => link.name.toLowerCase());
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold text-gray-900 tracking-tight group"
          >
            {/* {portfolioData.personal.name.split(" ")[0]} */}
            <span className="text-primary-600 transition-colors group-hover:text-cyan-600"> Portfolio</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative group text-sm font-medium transition-colors interactive"
                  style={{ color: isActive ? '#0284c7' : '#4b5563' }}
                >
                  <span className="group-hover:text-primary-600 transition-colors">{link.name}</span>
                  <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary-500 to-cyan-400 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </a>
              )
            })}

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=deepthakur10404@gmail.com&su=Job%20Opportunity%20-%20Full%20Stack%20Developer"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-medium transition-colors text-sm shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] interactive group"
            >
              <span className="relative z-10 flex items-center">
                Hire Me
                <motion.span 
                  className="ml-2 inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >→</motion.span>
              </span>
            </motion.a>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-gray-600 focus:outline-none interactive"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-100 overflow-hidden"
          >
            <div className="py-4 px-4 flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 font-medium block px-2 py-2 rounded-md hover:bg-primary-50 transition-colors cursor-pointer"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
