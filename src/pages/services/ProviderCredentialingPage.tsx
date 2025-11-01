import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserCheck, Clock, Shield, TrendingUp, Briefcase } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ProviderCredentialingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Provider Credentialing & Enrollment Services - Trinity RCM Solution";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Expert provider credentialing and payer enrollment services. Fast, efficient enrollment with insurance networks to get providers credentialed quickly."
      );
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute(
        "content",
        "Expert provider credentialing and payer enrollment services. Fast, efficient enrollment with insurance networks to get providers credentialed quickly."
      );
      document.head.appendChild(metaDescription);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        "href",
        "https://trinityrcmsolution.com/services/providerCredentialing"
      );
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute(
        "href",
        "https://trinityrcmsolution.com/services/providerCredentialing"
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
      "https://trinityrcmsolution.com/services/providerCredentialing"
    );
    updateMetaTag(
      "og:title",
      "Provider Credentialing & Enrollment Services - Trinity RCM Solution"
    );
    updateMetaTag(
      "og:description",
      "Expert provider credentialing and payer enrollment services. Fast, efficient enrollment with insurance networks."
    );
    updateMetaTag("og:image", "https://trinityrcmsolution.com/logo.png");
    updateMetaTag("og:image:width", "1200");
    updateMetaTag("og:image:height", "630");
    updateMetaTag(
      "og:image:alt",
      "Trinity RCM Solution - Provider Credentialing"
    );

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag(
      "twitter:url",
      "https://trinityrcmsolution.com/services/providerCredentialing"
    );
    updateMetaTag(
      "twitter:title",
      "Provider Credentialing & Enrollment Services - Trinity RCM Solution"
    );
    updateMetaTag(
      "twitter:description",
      "Expert provider credentialing and payer enrollment services. Fast, efficient enrollment with insurance networks."
    );
    updateMetaTag("twitter:image", "https://trinityrcmsolution.com/logo.png");
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "Fast Turnaround",
      description:
        "Expedited credentialing process to get providers enrolled faster.",
    },
    {
      icon: Shield,
      title: "Complete Compliance",
      description:
        "Full compliance with all payer requirements and regulations.",
    },
    {
      icon: UserCheck,
      title: "Multi-Payer Enrollment",
      description:
        "Simultaneous enrollment with multiple insurance payers and networks.",
    },
    {
      icon: TrendingUp,
      title: "Fee Negotiation",
      description:
        "Expert fee schedule negotiation to maximize reimbursement rates.",
    },
  ];

  const services = [
    "New Provider Enrollment",
    "Re-Credentialing Services",
    "Insurance Network Enrollment",
    "Medicare & Medicaid Enrollment",
    "Commercial Payer Enrollment",
    "NPI Registration",
    "CAQH Profile Management",
    "State License Verification",
    "DEA Registration Assistance",
    "Fee Schedule Negotiation",
    "Credentialing Status Tracking",
    "Ongoing Maintenance & Updates",
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
                  Provider Credentialing & Enrollment
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  Get Providers Credentialed & Enrolled Quickly
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
                    Expert Provider Credentialing Services
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Provider credentialing is the process of verifying and
                    validating a healthcare provider's qualifications,
                    credentials, and professional history to enroll them with
                    insurance payers and healthcare networks. This process is
                    essential for providers to bill insurance companies and
                    receive reimbursement for services rendered.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Our credentialing services handle the entire enrollment
                    process, from initial application submission to ongoing
                    maintenance and re-credentialing. We work with all major
                    payers including Medicare, Medicaid, and commercial
                    insurance networks to ensure providers are credentialed and
                    enrolled as quickly as possible.
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
                  Why Choose Our Credentialing Services
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
                    Credentialing Services We Offer
                  </h2>
                  <p className="text-xl text-gray-600">
                    Complete provider enrollment and credentialing solutions
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
                      <Briefcase className="w-5 h-5 text-blue-500 flex-shrink-0" />
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
                  Get Your Providers Credentialed Today
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Fast, efficient credentialing to get providers enrolled and
                  billing quickly.
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

export default ProviderCredentialingPage;
