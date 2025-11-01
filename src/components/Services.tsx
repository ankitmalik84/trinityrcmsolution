import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  FileText,
  CreditCard,
  Users,
  CheckCircle,
  Phone,
  DollarSign,
  ClipboardList,
} from "lucide-react";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const medicalServices = [
    {
      icon: Shield,
      title: "Insurance Verification & Eligibility Check",
      description:
        "Real-time verification to confirm patient coverage and benefits.",
      path: "/services/insuranceVerification",
    },
    {
      icon: FileText,
      title: "Prior Authorization Management",
      description:
        "Efficient authorization management to prevent claim denials.",
      path: "/services/priorAuthorization",
    },
    {
      icon: CreditCard,
      title: "Medical Coding & Billing",
      description:
        "Accurate medical coding using CPT, ICD-10, and HCPCS codes.",
      path: "/services/medicalCodingBilling",
    },
    {
      icon: DollarSign,
      title: "A/R and Denial Management",
      description:
        "Comprehensive accounts receivable management and denial appeals.",
      path: "/services/arManagement",
    },
    {
      icon: CreditCard,
      title: "Payment Posting and EFT/Deposit Reconciliation",
      description: "Automated payment posting and reconciliation processes.",
      path: "/services/paymentPosting",
    },
    {
      icon: Phone,
      title: "Patient Billing & Support",
      description:
        "Patient-friendly billing and comprehensive support services.",
      path: "/contact",
    },
    {
      icon: ClipboardList,
      title: "Revenue Cycle Management",
      description: "End-to-end revenue cycle optimization and management.",
      path: "/services/revenueCycleManagement",
    },
    {
      icon: Users,
      title: "Provider Credentialing/Fee Negotiation",
      description:
        "Complete provider enrollment and fee schedule negotiations.",
      path: "/services/providerCredentialing",
    },
    {
      icon: FileText,
      title: "Practice Transition and Planning",
      description:
        "Smooth practice transitions and strategic planning support.",
      path: "/contact",
    },
    {
      icon: DollarSign,
      title: "Legacy A/R Resolution",
      description:
        "Resolution of aging accounts receivable and outstanding balances.",
      path: "/services/arManagement",
    },
    {
      icon: CheckCircle,
      title: "Credit A/R Resolution",
      description:
        "Management and resolution of credit balances and overpayments.",
      path: "/services/arManagement",
    },
  ];

  return (
    <section
      id="solution"
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      ></motion.div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.h2
            className="text-5xl font-black text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Our{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              solution
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Comprehensive RCM solution tailored for dental and medical practices
            to maximize revenue and streamline operations.
          </motion.p>
        </motion.div>

        {/* Medical RCM solution */}
        <motion.div variants={itemVariants}>
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h3
              className="text-4xl font-black text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Medical RCM
              </motion.span>{" "}
              solution
            </motion.h3>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Complete medical billing and revenue cycle management for
              healthcare providers.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {medicalServices.map((service, index) => (
              <Link key={index} to={service.path} className="block">
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift group border border-gray-100 cursor-pointer h-full"
                  variants={serviceCardVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h4
                    className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h4>
                  <motion.p
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Overview Image */}
        <motion.div
          className="text-center mt-16 mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src="/graph.jpg"
              alt="Trinity RCM Services Overview"
              className="w-full h-auto rounded-2xl shadow-md border border-gray-200"
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
          <motion.p
            className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Comprehensive overview of all our RCM services designed to maximize
            your practice's revenue potential
          </motion.p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 max-w-5xl mx-auto shadow-glow-lg relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0"
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.h3
              className="text-4xl font-black text-white mb-6 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to Optimize Your Revenue Cycle?
            </motion.h3>
            <motion.p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get a free RCM audit and discover how we can help maximize your
              practice's revenue potential.
            </motion.p>
            <Link to="/contact">
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-12 py-4 rounded-2xl text-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-glow hover-lift relative z-10"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(251, 191, 36, 0.3)",
                    "0 15px 35px rgba(251, 191, 36, 0.5)",
                    "0 10px 30px rgba(251, 191, 36, 0.3)",
                  ],
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                Schedule your Free RCM Audit with our experts
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
