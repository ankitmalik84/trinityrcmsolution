import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const headerVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  const navItemAuditBtnVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn" as const,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.header
      className={`bg-white/10 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-white/20 transition-all duration-300 ${isScrolled ? "bg-white/15 shadow-3xl" : "bg-white/10"
        }`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Unified Navigation Bar */}
      <nav className="mx-auto px-4 py-4 w-full max-w-7xl">
        <div className="flex justify-between items-center gap-8">
          {/* Logo - Bigger */}
          <Link to="/" className="flex items-center cursor-pointer flex-shrink-0">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-40 md:w-56 h-16 md:h-24 rounded-xl flex items-center justify-center shadow-md md:shadow-xl overflow-hidden"
                variants={logoVariants}
              >
                <img
                  src="/logo.png"
                  alt="Trinity RCM Solution Logo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </Link>

          {/* Right Side: Navigation + Address */}
          <div className="hidden xl:flex flex-col items-end gap-3">
            {/* Navigation Buttons - Upper */}
            <motion.div
              className="flex items-center gap-6"
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
            >
              <motion.a
                href="/#home"
                className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group"
                variants={navItemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
              <motion.a
                href="/#solution"
                className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group"
                variants={navItemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                About
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
              <motion.div
                variants={navItemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/testimonials"
                  className={`text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group ${location.pathname === "/testimonials" ? "text-blue-600" : ""
                    }`}
                >
                  Testimonials
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-200"
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
              <motion.div
                variants={navItemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className={`text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group ${location.pathname === "/contact" ? "text-blue-600" : ""
                    }`}
                >
                  Contact
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-200"
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
              <Link to="/contact">
                <motion.button
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-100 font-bold shadow-glow hover-lift"
                  variants={navItemVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(251, 191, 36, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 4px 15px rgba(251, 191, 36, 0.3)",
                      "0 8px 25px rgba(251, 191, 36, 0.5)",
                      "0 4px 15px rgba(251, 191, 36, 0.3)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  Free RCM Audit
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="xl:hidden p-2 rounded-lg hover:bg-white/20 transition-colors text-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="xl:hidden mt-4 pb-2 border-t border-white/20 bg-white/10 backdrop-blur-xl rounded-b-lg"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="flex flex-col gap-3 pt-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >

                <motion.a
                  href="/#home"
                  className="text-gray-800 hover:text-blue-600 font-medium transition-colors py-1.5"
                  variants={navItemVariants}
                  whileHover={{ x: 10, color: "#2563eb" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </motion.a>
                <motion.a
                  href="/#solution"
                  className="text-gray-800 hover:text-blue-600 font-medium transition-colors py-1.5"
                  variants={navItemVariants}
                  whileHover={{ x: 10, color: "#2563eb" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </motion.a>
                <motion.div
                  variants={navItemVariants}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/testimonials"
                    className={`text-gray-800 hover:text-blue-600 font-medium transition-colors py-1.5 block ${location.pathname === "/testimonials" ? "text-blue-600" : ""
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                </motion.div>
                <motion.div
                  variants={navItemVariants}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className={`text-gray-800 hover:text-blue-600 font-medium transition-colors py-1.5 block ${location.pathname === "/contact" ? "text-blue-600" : ""
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <motion.button
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 font-medium w-full mt-1"
                    variants={navItemAuditBtnVariant}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Free RCM Audit
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
