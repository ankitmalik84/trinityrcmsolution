import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  BarChart3,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { updateSEO } from "../../utils/seo";

const RevenueCycleManagementPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Update SEO meta tags
    updateSEO({
      title: "Revenue Cycle Management Services - Trinity RCM Solution",
      description:
        "Comprehensive Revenue Cycle Management services to optimize your healthcare practice's financial performance. End-to-end RCM solutions including billing, coding, A/R management, and more.",
      canonical:
        "https://trinityrcmsolution.com/services/revenueCycleManagement",
      ogTitle: "Revenue Cycle Management Services - Trinity RCM Solution",
      ogDescription:
        "Comprehensive Revenue Cycle Management services to optimize your healthcare practice's financial performance.",
      ogImage: "https://trinityrcmsolution.com/logo.png",
      ogImageWidth: "1200",
      ogImageHeight: "630",
      ogImageAlt: "Trinity RCM Solution - Revenue Cycle Management",
      twitterTitle: "Revenue Cycle Management Services - Trinity RCM Solution",
      twitterDescription:
        "Comprehensive Revenue Cycle Management services to optimize your healthcare practice's financial performance.",
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
      "https://trinityrcmsolution.com/services/revenueCycleManagement"
    );
    updateMetaTag(
      "twitter:url",
      "https://trinityrcmsolution.com/services/revenueCycleManagement"
    );
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Revenue",
      description:
        "Maximize your practice's revenue potential through optimized billing processes and reduced claim denials.",
    },
    {
      icon: Shield,
      title: "Compliance & Accuracy",
      description:
        "Ensure complete compliance with healthcare regulations and industry standards.",
    },
    {
      icon: Clock,
      title: "Faster Reimbursements",
      description:
        "Accelerate payment cycles with efficient claim submission and follow-up processes.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description:
        "Gain valuable insights into your practice's financial performance with comprehensive reporting.",
    },
  ];

  const services = [
    "Patient Registration & Insurance Verification",
    "Medical Coding & Charge Capture",
    "Claim Submission & Processing",
    "Accounts Receivable Management",
    "Payment Posting & Reconciliation",
    "Denial Management & Appeals",
    "Prior Authorization Services",
    "Provider Credentialing",
    "Revenue Analytics & Reporting",
    "Patient Billing & Collections",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Revenue Cycle Management Services",
            description:
              "Comprehensive Revenue Cycle Management services for healthcare practices",
            url: "https://trinityrcmsolution.com/services/revenueCycleManagement",
            provider: {
              "@type": "Organization",
              name: "Trinity RCM Solution",
              url: "https://trinityrcmsolution.com",
            },
            areaServed: "US",
            serviceType: "Revenue Cycle Management",
          }),
        }}
      />

      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Revenue Cycle Management Services
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  Optimize Your Healthcare Practice's Financial Performance with
                  End-to-End RCM Solutions
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Free Consultation
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Overview Section */}
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
                    What is Revenue Cycle Management?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="text-lg mb-4">
                      Revenue Cycle Management (RCM) is a comprehensive process
                      that healthcare practices use to manage the financial
                      aspects of patient care, from initial appointment
                      scheduling to final payment collection. Our end-to-end RCM
                      services ensure that every step of the revenue cycle is
                      optimized for maximum efficiency and profitability.
                    </p>
                    <p className="text-lg mb-4">
                      At Trinity RCM Solution, we combine advanced technology,
                      industry expertise, and personalized service to help your
                      practice achieve optimal financial performance while
                      maintaining the highest standards of compliance and
                      patient care.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Key Benefits
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Why choose our Revenue Cycle Management services?
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
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

          {/* Services Included Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Comprehensive RCM Services
                  </h2>
                  <p className="text-xl text-gray-600">
                    Our complete suite of Revenue Cycle Management solutions
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

          {/* Process Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our RCM Process
                  </h2>
                  <p className="text-xl text-gray-600">
                    A streamlined approach to revenue optimization
                  </p>
                </motion.div>

                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Patient Registration",
                      description:
                        "Comprehensive patient registration with insurance verification to ensure coverage and eligibility.",
                    },
                    {
                      step: "2",
                      title: "Charge Capture & Coding",
                      description:
                        "Accurate medical coding using industry-standard codes (CPT, ICD-10, HCPCS) for maximum reimbursement.",
                    },
                    {
                      step: "3",
                      title: "Claim Submission",
                      description:
                        "Timely submission of clean claims to insurance payers with all required documentation.",
                    },
                    {
                      step: "4",
                      title: "Payment Processing",
                      description:
                        "Efficient payment posting, reconciliation, and deposit management with automated workflows.",
                    },
                    {
                      step: "5",
                      title: "Denial Management",
                      description:
                        "Proactive denial prevention and comprehensive appeals process to recover lost revenue.",
                    },
                    {
                      step: "6",
                      title: "Reporting & Analytics",
                      description:
                        "Real-time dashboards and comprehensive reports to track performance and identify opportunities.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-lg flex gap-6"
                    >
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Optimize Your Revenue Cycle?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Schedule a free consultation and discover how we can help
                  maximize your practice's revenue potential.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                >
                  Get Started Today
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

export default RevenueCycleManagementPage;
