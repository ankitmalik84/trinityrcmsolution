import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
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
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
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
      className={`bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? "shadow-2xl" : "shadow-xl"
      }`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top Bar */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3"
        animate={{
          background: [
            "linear-gradient(to right, #2563eb, #9333ea)",
            "linear-gradient(to right, #1d4ed8, #7c3aed)",
            "linear-gradient(to right, #2563eb, #9333ea)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="flex justify-end items-center text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="flex items-center gap-1 md:gap-2 hover:text-yellow-300 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MapPin className="w-4 h-4" />
              </motion.div>
              <span className="font-semibold text-xs md:text-sm truncate max-w-[150px] md:max-w-none">
                Elite Coworking — 4th Floor, MFAR, Manyata Tech Park, Nagawara,
                Bengaluru 560045
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <nav className="mx-auto px-4 py-3 w-full">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0.5 cursor-pointer">
            <motion.div
              className="flex items-center gap-0.5"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-xl overflow-hidden"
                variants={logoVariants}
                whileHover={{
                  rotate: 360,
                  scale: 1.01,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
                }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/logo.jpeg"
                  alt="Trinity RCM Solution Logo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="ml-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-red-500 via-orange-400 to-red-600 bg-clip-text text-transparent whitespace-nowrap changa-one-regular">
                  Trinity RCM Solution
                </h1>
              </motion.div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden xl:flex items-center gap-6"
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
          >
            <motion.a
              href="/#home"
              className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300 relative group"
              variants={navItemVariants}
              whileHover={{
                scale: 1.02,
                color: "#2563eb",
              }}
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
              className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300 relative group"
              variants={navItemVariants}
              whileHover={{
                scale: 1.02,
                color: "#2563eb",
              }}
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
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/testimonials"
                className={`text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300 relative group ${
                  location.pathname === "/testimonials" ? "text-blue-600" : ""
                }`}
              >
                Testimonials
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
            <motion.div
              variants={navItemVariants}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className={`text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300 relative group ${
                  location.pathname === "/contact" ? "text-blue-600" : ""
                }`}
              >
                Contact
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"
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

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
              className="xl:hidden mt-2 pb-2 border-t border-gray-200"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="flex flex-col gap-2 pt-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a
                  href="/#home"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-1.5"
                  variants={navItemVariants}
                  whileHover={{ x: 10, color: "#2563eb" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </motion.a>
                <motion.a
                  href="/#solution"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-1.5"
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
                    className={`text-gray-700 hover:text-blue-600 font-medium transition-colors py-1.5 block ${
                      location.pathname === "/testimonials"
                        ? "text-blue-600"
                        : ""
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
                    className={`text-gray-700 hover:text-blue-600 font-medium transition-colors py-1.5 block ${
                      location.pathname === "/contact" ? "text-blue-600" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <motion.button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium w-full mt-1"
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
