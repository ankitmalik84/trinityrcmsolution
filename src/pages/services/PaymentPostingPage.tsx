import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CreditCard,
  Clock,
  CheckCircle,
  DollarSign,
  Receipt,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { updateSEO } from "../../utils/seo";

const PaymentPostingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Update SEO meta tags
    updateSEO({
      title: "Payment Posting & Reconciliation Services - Trinity RCM Solution",
      description:
        "Automated payment posting and reconciliation services for faster payment processing. EFT posting, deposit reconciliation, and accurate payment tracking.",
      canonical: "/services/paymentPosting", // Will be converted to full URL automatically
      ogTitle:
        "Payment Posting & Reconciliation Services - Trinity RCM Solution",
      ogDescription:
        "Automated payment posting and reconciliation services for faster payment processing.",
      ogUrl: "/services/paymentPosting", // Will be converted to full URL automatically
      ogImage: "/logo.png", // Will be converted to full URL automatically
      ogImageWidth: "1200",
      ogImageHeight: "630",
      ogImageAlt: "Trinity RCM Solution - Payment Posting",
      twitterTitle:
        "Payment Posting & Reconciliation Services - Trinity RCM Solution",
      twitterDescription:
        "Automated payment posting and reconciliation services for faster payment processing.",
      twitterUrl: "/services/paymentPosting", // Will be converted to full URL automatically
      twitterImage: "/logo.png", // Will be converted to full URL automatically
    });
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "Fast Processing",
      description:
        "Same-day payment posting for faster revenue recognition and cash flow.",
    },
    {
      icon: CheckCircle,
      title: "100% Accuracy",
      description:
        "Meticulous verification ensures every payment is posted correctly.",
    },
    {
      icon: CreditCard,
      title: "EFT Automation",
      description:
        "Automated processing of electronic fund transfers and direct deposits.",
    },
    {
      icon: DollarSign,
      title: "Complete Reconciliation",
      description:
        "Full deposit reconciliation to ensure all payments are accounted for.",
    },
  ];

  const services = [
    "Insurance Payment Posting",
    "Patient Payment Posting",
    "EFT/ERA Processing",
    "Manual Check Processing",
    "Credit Card Payment Posting",
    "Deposit Reconciliation",
    "Payment Variance Analysis",
    "Overpayment Identification",
    "Payment Remittance Matching",
    "Real-Time Payment Tracking",
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
                  Payment Posting & Reconciliation
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  Fast, Accurate Payment Processing & Reconciliation
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
                    Efficient Payment Posting Services
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Payment posting is a critical component of the revenue cycle
                    that ensures all payments from insurance companies and
                    patients are accurately recorded and applied to the correct
                    patient accounts and claims. Timely and accurate payment
                    posting is essential for maintaining accurate financial
                    records and identifying discrepancies.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Our payment posting services handle all payment types,
                    including EFT (Electronic Funds Transfer), ERA (Electronic
                    Remittance Advice), paper checks, and credit card payments.
                    We ensure complete deposit reconciliation and provide
                    detailed reporting for every payment processed.
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
                  Why Choose Our Payment Posting Services
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
                    Payment Processing Services
                  </h2>
                  <p className="text-xl text-gray-600">
                    Comprehensive payment posting and reconciliation solutions
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
                      <Receipt className="w-5 h-5 text-green-500 flex-shrink-0" />
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
                  Streamline Your Payment Processing
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Experience fast, accurate payment posting and reconciliation.
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

export default PaymentPostingPage;
