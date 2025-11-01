import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  RefreshCw,
  TrendingUp,
  Shield,
  FileSearch,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DenialManagementPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Denial Management & Appeals Services - Trinity RCM Solution";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Expert denial management and appeals services to recover denied claims and reduce future denials. Increase revenue recovery with strategic appeals process."
      );
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute(
        "content",
        "Expert denial management and appeals services to recover denied claims and reduce future denials. Increase revenue recovery with strategic appeals process."
      );
      document.head.appendChild(metaDescription);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        "href",
        "https://trinityrcmsolution.com/services/denialManagement"
      );
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute(
        "href",
        "https://trinityrcmsolution.com/services/denialManagement"
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
      "https://trinityrcmsolution.com/services/denialManagement"
    );
    updateMetaTag(
      "og:title",
      "Denial Management & Appeals Services - Trinity RCM Solution"
    );
    updateMetaTag(
      "og:description",
      "Expert denial management and appeals services to recover denied claims and reduce future denials."
    );
    updateMetaTag("og:image", "https://trinityrcmsolution.com/logo.jpeg");
    updateMetaTag("og:image:width", "1200");
    updateMetaTag("og:image:height", "630");
    updateMetaTag("og:image:alt", "Trinity RCM Solution - Denial Management");

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag(
      "twitter:url",
      "https://trinityrcmsolution.com/services/denialManagement"
    );
    updateMetaTag(
      "twitter:title",
      "Denial Management & Appeals Services - Trinity RCM Solution"
    );
    updateMetaTag(
      "twitter:description",
      "Expert denial management and appeals services to recover denied claims and reduce future denials."
    );
    updateMetaTag("twitter:image", "https://trinityrcmsolution.com/logo.jpeg");
  }, []);

  const benefits = [
    {
      icon: RefreshCw,
      title: "Claim Recovery",
      description:
        "Aggressive appeals process to recover revenue from denied claims.",
    },
    {
      icon: Shield,
      title: "Denial Prevention",
      description:
        "Identify patterns and implement strategies to prevent future denials.",
    },
    {
      icon: TrendingUp,
      title: "Higher Recovery Rate",
      description:
        "Proven track record of successfully appealing denied claims.",
    },
    {
      icon: FileSearch,
      title: "Root Cause Analysis",
      description:
        "Deep analysis of denial reasons to address systemic issues.",
    },
  ];

  const commonDenials = [
    "Prior Authorization Missing",
    "Medical Necessity",
    "Coding Errors",
    "Duplicate Claims",
    "Timely Filing",
    "Coverage Limitations",
    "Documentation Issues",
    "Eligibility Problems",
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
                  Denial Management & Appeals
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  Recover Revenue from Denied Claims
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
                    Expert Denial Management Services
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Claim denials are a significant challenge in healthcare
                    revenue cycle management, often resulting in lost revenue
                    and increased administrative burden. Our denial management
                    services help practices recover denied claims through
                    strategic appeals while identifying and addressing the root
                    causes of denials.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    We handle the entire denial lifecycle, from initial denial
                    analysis to appeals submission and follow-up. Our team
                    understands payer-specific requirements and develops
                    customized appeal strategies to maximize recovery rates.
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
                  Our Denial Management Approach
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
                    Common Denial Reasons We Handle
                  </h2>
                  <p className="text-xl text-gray-600">
                    Expert handling of all types of claim denials
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {commonDenials.map((denial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700">{denial}</span>
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
                  Start Recovering Denied Claims Today
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let us help you recover lost revenue and reduce future
                  denials.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                >
                  Contact Us
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

export default DenialManagementPage;
