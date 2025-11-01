import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  Clock,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ARManagementPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Accounts Receivable (A/R) Management Services - Trinity RCM Solution";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Comprehensive A/R management services to reduce outstanding receivables, improve cash flow, and accelerate collections. Expert follow-up and aging analysis."
      );
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute(
        "content",
        "Comprehensive A/R management services to reduce outstanding receivables, improve cash flow, and accelerate collections. Expert follow-up and aging analysis."
      );
      document.head.appendChild(metaDescription);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        "href",
        "https://trinityrcmsolution.com/services/arManagement"
      );
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute(
        "href",
        "https://trinityrcmsolution.com/services/arManagement"
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
      "https://trinityrcmsolution.com/services/arManagement"
    );
    updateMetaTag(
      "og:title",
      "Accounts Receivable (A/R) Management Services - Trinity RCM Solution"
    );
    updateMetaTag(
      "og:description",
      "Comprehensive A/R management services to reduce outstanding receivables, improve cash flow, and accelerate collections."
    );
    updateMetaTag("og:image", "https://trinityrcmsolution.com/logo.png");
    updateMetaTag("og:image:width", "1200");
    updateMetaTag("og:image:height", "630");
    updateMetaTag("og:image:alt", "Trinity RCM Solution - A/R Management");

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag(
      "twitter:url",
      "https://trinityrcmsolution.com/services/arManagement"
    );
    updateMetaTag(
      "twitter:title",
      "Accounts Receivable (A/R) Management Services - Trinity RCM Solution"
    );
    updateMetaTag(
      "twitter:description",
      "Comprehensive A/R management services to reduce outstanding receivables, improve cash flow, and accelerate collections."
    );
    updateMetaTag("twitter:image", "https://trinityrcmsolution.com/logo.png");
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Improved Cash Flow",
      description:
        "Accelerate collections and reduce days in accounts receivable significantly.",
    },
    {
      icon: Clock,
      title: "Proactive Follow-Up",
      description:
        "Systematic follow-up processes ensure no claim is left unaddressed.",
    },
    {
      icon: BarChart3,
      title: "Aging Analysis",
      description:
        "Detailed reporting on receivables aging to identify collection opportunities.",
    },
    {
      icon: DollarSign,
      title: "Revenue Recovery",
      description:
        "Maximize revenue recovery from outstanding claims and denials.",
    },
  ];

  const services = [
    "Accounts Receivable Aging Analysis",
    "Insurance Follow-Up & Status Checks",
    "Outstanding Balance Collections",
    "Claim Status Verification",
    "Payment Reconciliation",
    "Denial Investigation & Resolution",
    "Secondary Insurance Billing",
    "Patient Balance Collections",
    "Bad Debt Management",
    "Performance Reporting & Analytics",
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
                  Accounts Receivable Management
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  Accelerate Collections & Improve Cash Flow
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
                    Comprehensive A/R Management Solutions
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Accounts Receivable (A/R) management is crucial for
                    maintaining healthy cash flow in healthcare practices.
                    Outstanding receivables tie up capital and can significantly
                    impact your practice's financial health.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Our A/R management services include systematic follow-up on
                    outstanding claims, aging analysis, denial resolution, and
                    proactive collections strategies. We work diligently to
                    reduce your days in A/R and recover maximum revenue from
                    outstanding balances.
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
                    A/R Management Services
                  </h2>
                  <p className="text-xl text-gray-600">
                    Complete accounts receivable solutions
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
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
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
                  Optimize Your Accounts Receivable Today
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Reduce outstanding balances and improve cash flow with our
                  expert A/R management services.
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

export default ARManagementPage;
