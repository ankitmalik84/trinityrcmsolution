import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Clock, UserCheck, FileCheck } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const InsuranceVerificationPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Insurance Verification & Eligibility Services - Trinity RCM Solution";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Real-time insurance verification and eligibility checks to confirm patient coverage before treatment. Reduce denials and improve cash flow."
      );
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute(
        "content",
        "Real-time insurance verification and eligibility checks to confirm patient coverage before treatment. Reduce denials and improve cash flow."
      );
      document.head.appendChild(metaDescription);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        "href",
        "https://trinityrcmsolution.com/services/insuranceVerification"
      );
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute(
        "href",
        "https://trinityrcmsolution.com/services/insuranceVerification"
      );
      document.head.appendChild(canonical);
    }

    const updateMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    updateMetaTag(
      "og:url",
      "https://trinityrcmsolution.com/services/insuranceVerification"
    );
    updateMetaTag(
      "og:title",
      "Insurance Verification & Eligibility Services - Trinity RCM Solution"
    );
    updateMetaTag(
      "og:description",
      "Real-time insurance verification and eligibility checks to confirm patient coverage before treatment."
    );
    updateMetaTag("og:image", "https://trinityrcmsolution.com/logo.png");
    updateMetaTag("og:image:width", "1200");
    updateMetaTag("og:image:height", "630");
    updateMetaTag(
      "og:image:alt",
      "Trinity RCM Solution - Insurance Verification"
    );

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag(
      "twitter:url",
      "https://trinityrcmsolution.com/services/insuranceVerification"
    );
    updateMetaTag(
      "twitter:title",
      "Insurance Verification & Eligibility Services - Trinity RCM Solution"
    );
    updateMetaTag(
      "twitter:description",
      "Real-time insurance verification and eligibility checks to confirm patient coverage before treatment."
    );
    updateMetaTag("twitter:image", "https://trinityrcmsolution.com/logo.png");
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: "Prevent Denials",
      description:
        "Verify coverage before treatment to avoid claim rejections and denials.",
    },
    {
      icon: Clock,
      title: "Real-Time Verification",
      description:
        "Instant eligibility checks to confirm patient insurance status.",
    },
    {
      icon: UserCheck,
      title: "Accurate Benefits",
      description:
        "Detailed benefit information including deductibles, copays, and coverage limits.",
    },
    {
      icon: CheckCircle,
      title: "Cost Estimation",
      description:
        "Provide patients with accurate cost estimates before procedures.",
    },
  ];

  const verificationItems = [
    "Active Coverage Status",
    "Policy Effective & Expiration Dates",
    "Deductible & Out-of-Pocket Status",
    "Copay & Coinsurance Amounts",
    "Coverage Limitations & Exclusions",
    "Prior Authorization Requirements",
    "Network Status (In-Network/Out-of-Network)",
    "Primary vs Secondary Insurance",
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
                  Insurance Verification & Eligibility Services
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  Confirm Patient Coverage Before Treatment
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Learn More
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
                    Verify Insurance Coverage in Real-Time
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Insurance verification is a critical step in the revenue
                    cycle that helps prevent claim denials and ensures patients
                    understand their financial responsibility upfront. Our
                    comprehensive verification services confirm coverage status,
                    benefits, and authorization requirements before treatment
                    begins.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    By verifying insurance eligibility proactively, we help your
                    practice reduce denial rates, improve collections, and
                    provide better patient service through transparent
                    communication about costs and coverage.
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
                  Key Benefits
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
                    className="bg-white p-6 rounded-xl shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <benefit.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    What We Verify
                  </h2>
                  <p className="text-xl text-gray-600">
                    Comprehensive eligibility information for every patient
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {verificationItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                    >
                      <FileCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
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
                  Start Verifying Insurance Today
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Reduce denials and improve your revenue cycle with our
                  verification services.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                >
                  Get Started
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

export default InsuranceVerificationPage;
