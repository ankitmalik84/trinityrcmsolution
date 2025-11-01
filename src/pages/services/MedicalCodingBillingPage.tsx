import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  Shield,
  Clock,
  DollarSign,
  Search,
  Code,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { updateSEO } from "../../utils/seo";

const MedicalCodingBillingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Update SEO meta tags
    updateSEO({
      title: "Medical Coding & Billing Services - Trinity RCM Solution",
      description:
        "Expert medical coding and billing services using CPT, ICD-10, and HCPCS codes. Accurate coding for maximum reimbursement and faster claim processing.",
      canonical: "/services/medicalCodingBilling", // Will be converted to full URL automatically
      ogTitle: "Medical Coding & Billing Services - Trinity RCM Solution",
      ogDescription:
        "Expert medical coding and billing services using CPT, ICD-10, and HCPCS codes. Accurate coding for maximum reimbursement.",
      ogUrl: "/services/medicalCodingBilling", // Will be converted to full URL automatically
      ogImage: "/logo.png", // Will be converted to full URL automatically
      ogImageWidth: "1200",
      ogImageHeight: "630",
      ogImageAlt: "Trinity RCM Solution - Medical Coding & Billing",
      twitterTitle: "Medical Coding & Billing Services - Trinity RCM Solution",
      twitterDescription:
        "Expert medical coding and billing services using CPT, ICD-10, and HCPCS codes. Accurate coding for maximum reimbursement.",
      twitterUrl: "/services/medicalCodingBilling", // Will be converted to full URL automatically
      twitterImage: "/logo.png", // Will be converted to full URL automatically
    });
  }, []);

  const codeTypes = [
    {
      icon: Code,
      title: "CPT Codes",
      description:
        "Current Procedural Terminology codes for medical procedures and services.",
    },
    {
      icon: FileText,
      title: "ICD-10 Codes",
      description:
        "International Classification of Diseases codes for diagnoses and conditions.",
    },
    {
      icon: Search,
      title: "HCPCS Codes",
      description:
        "Healthcare Common Procedure Coding System for supplies and equipment.",
    },
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "99% Accuracy Rate",
      description:
        "Our certified coders maintain exceptional accuracy standards to minimize denials.",
    },
    {
      icon: Shield,
      title: "Compliance Guaranteed",
      description:
        "All coding follows CMS guidelines and industry best practices for compliance.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description:
        "Quick processing times ensure timely claim submission and payment.",
    },
    {
      icon: DollarSign,
      title: "Maximize Revenue",
      description:
        "Optimal code selection ensures you receive maximum reimbursement.",
    },
  ];

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Medical Coding & Billing Services
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  Accurate Medical Coding for Maximum Reimbursement
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Professional Medical Coding Services
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Medical coding is the foundation of successful healthcare
                    billing. Our certified coders translate medical procedures,
                    diagnoses, and treatments into standardized codes that
                    insurance companies understand and accept.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    With extensive experience in both dental and medical coding,
                    we ensure that every claim is accurately coded, properly
                    documented, and optimized for maximum reimbursement while
                    maintaining full compliance with healthcare regulations.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Coding Standards We Use
                </h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {codeTypes.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Our Coding Services
                </h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="bg-green-100 p-3 rounded-lg h-fit">
                      <benefit.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Improve Your Coding Accuracy?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let our expert coders handle your billing needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                >
                  Contact Us Today
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MedicalCodingBillingPage;
