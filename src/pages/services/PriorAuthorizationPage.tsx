import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileCheck, Clock, Shield, CheckCircle, Send } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { updateSEO } from "../../utils/seo";

const PriorAuthorizationPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Update SEO meta tags
    updateSEO({
      title: "Prior Authorization Management Services - Trinity RCM Solution",
      description:
        "Expert prior authorization services to secure approvals before treatment. Fast turnaround times and high approval rates for procedures and medications.",
      canonical: "https://trinityrcmsolution.com/services/priorAuthorization",
      ogTitle: "Prior Authorization Management Services - Trinity RCM Solution",
      ogDescription:
        "Expert prior authorization services to secure approvals before treatment. Fast turnaround times and high approval rates.",
      ogImage: "https://trinityrcmsolution.com/logo.png",
      ogImageWidth: "1200",
      ogImageHeight: "630",
      ogImageAlt: "Trinity RCM Solution - Prior Authorization",
      twitterTitle:
        "Prior Authorization Management Services - Trinity RCM Solution",
      twitterDescription:
        "Expert prior authorization services to secure approvals before treatment. Fast turnaround times and high approval rates.",
      twitterImage: "https://trinityrcmsolution.com/logo.png",
    });

    // Update OG and Twitter URL
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
      "https://trinityrcmsolution.com/services/priorAuthorization"
    );
    updateMetaTag(
      "twitter:url",
      "https://trinityrcmsolution.com/services/priorAuthorization"
    );
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "Fast Processing",
      description:
        "Expedited authorization requests with average turnaround times of 24-48 hours.",
    },
    {
      icon: Shield,
      title: "High Approval Rate",
      description:
        "Expert handling ensures maximum approval rates for authorization requests.",
    },
    {
      icon: FileCheck,
      title: "Complete Documentation",
      description:
        "Thorough documentation and clinical justification for optimal approval chances.",
    },
    {
      icon: CheckCircle,
      title: "Status Tracking",
      description:
        "Real-time tracking of authorization status and proactive follow-ups.",
    },
  ];

  const services = [
    "Procedure Authorizations",
    "Medication Prior Authorizations",
    "Imaging & Diagnostic Testing",
    "Durable Medical Equipment (DME)",
    "Specialist Referrals",
    "Surgery Pre-Approvals",
    "Physical Therapy & Rehabilitation",
    "Emergency Authorization Requests",
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
                  Prior Authorization Management
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  Secure Treatment Approvals Before Services Are Rendered
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
                    Expert Prior Authorization Services
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Prior authorization is a critical requirement for many
                    medical procedures, treatments, and medications. Without
                    proper authorization, claims are automatically denied,
                    leading to lost revenue and frustrated patients.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Our experienced team handles all aspects of the prior
                    authorization process, from identifying which services
                    require approval to submitting complete documentation and
                    tracking requests through to approval. We work directly with
                    insurance companies to expedite approvals and keep your
                    practice informed every step of the way.
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
                  Why Choose Our Authorization Services
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
                    Authorization Types We Handle
                  </h2>
                  <p className="text-xl text-gray-600">
                    Comprehensive authorization management for all service types
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <Send className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
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
                  Streamline Your Authorization Process
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let us handle your prior authorizations so you can focus on
                  patient care.
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

export default PriorAuthorizationPage;
