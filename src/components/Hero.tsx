import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden gradient-hero"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        ></motion.div>
      </div>
      <motion.div
        className="mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-[1400px] mx-auto pt-4">
          {/* Main Heading and image */}
          <div className="flex flex-col xl:flex-row items-center justify-center gap-12 mb-4 md:mb-8">
            <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start">
              <motion.h1
                className="text-5xl xl:text-6xl font-black text-white mb-8 leading-tight"
                variants={itemVariants}
              >
                Trinity RCM
                <motion.span
                  className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent block mt-4 text-4xl"
                  variants={itemVariants}
                >
                  The Nation's Leading RCM company, USA Physician-Owned &
                  Managed
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-2xl text-white/90 mb-8 max-w-4xl leading-tight font-light"
                variants={itemVariants}
              >
                Trinity is dedicated to empowering clients to optimize their
                workflows and achieve greater financial success. Expert RCM
                solution for dental and medical practices.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                variants={itemVariants}
              >
                <motion.button
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center gap-3 shadow-glow-lg hover-lift"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 10px 30px rgba(251, 191, 36, 0.3)",
                      "0 15px 35px rgba(251, 191, 36, 0.5)",
                      "0 10px 30px rgba(251, 191, 36, 0.3)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <span>Schedule Free RCM Audit</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
                <motion.button
                  className="glass text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/20 transition-all duration-300 hover-lift"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </motion.div>
            </div>
            <div className="flex-shrink-0">
              <motion.img
                src="/hero.jpg"
                alt="Hero Image"
                className="object-cover rounded-2xl w-full xl:max-w-2xl"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {[
              { value: "95%", label: "Clean Claim Rate" },
              { value: "Up to 40%", label: "Reduced Cost" },
              { value: "98%", label: "Collection Success Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 border border-white/20 p-8 rounded-2xl hover-lift"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-5xl font-black text-yellow-300 mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/90 font-semibold text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Features */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-6"
            variants={containerVariants}
          >
            {[
              {
                title: "15+ Years of RCM Expertise",
                description:
                  "Our RCM Experts have deep understanding of Dental and Medical Codes and Billing nuances that helps maximize your revenue.",
              },
              {
                title: "Data-Driven Process",
                description:
                  "Our expert team analyze your AR reports and find the best possible solution to streamline the workflow.",
              },
              {
                title: "Personalized Assistance",
                description:
                  "We are just a call or a text message away from you to address your questions and concerns.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 border border-white/20 p-8 rounded-2xl hover-lift"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
