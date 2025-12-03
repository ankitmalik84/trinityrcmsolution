import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Clock, Users, FileCheck } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { updateSEO } from "../../utils/seo";

const PatientBillingPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        // Update SEO meta tags
        updateSEO({
            title:
                "Patient Billing & Support Services - Trinity RCM Solution",
            description:
                "Patient-friendly billing and comprehensive support services. Improve patient satisfaction with clear communication and flexible payment options.",
            canonical: "/services/patientBilling",
            ogTitle:
                "Patient Billing & Support Services - Trinity RCM Solution",
            ogDescription:
                "Patient-friendly billing and comprehensive support services to improve satisfaction and collections.",
            ogUrl: "/services/patientBilling",
            ogImage: "/logo.png",
            ogImageWidth: "1200",
            ogImageHeight: "630",
            ogImageAlt: "Trinity RCM Solution - Patient Billing & Support",
            twitterTitle:
                "Patient Billing & Support Services - Trinity RCM Solution",
            twitterDescription:
                "Patient-friendly billing and comprehensive support services to improve satisfaction and collections.",
            twitterUrl: "/services/patientBilling",
            twitterImage: "/logo.png",
        });
    }, []);

    const benefits = [
        {
            icon: Phone,
            title: "24/7 Patient Support",
            description:
                "Round-the-clock assistance to answer patient billing questions and concerns.",
        },
        {
            icon: Users,
            title: "Patient-Friendly Communication",
            description:
                "Clear, easy-to-understand billing statements and payment explanations.",
        },
        {
            icon: Clock,
            title: "Flexible Payment Plans",
            description:
                "Customized payment arrangements to help patients afford their care.",
        },
        {
            icon: CheckCircle,
            title: "Improved Collections",
            description:
                "Professional billing practices that increase payment rates while maintaining patient relationships.",
        },
    ];

    const serviceItems = [
        "Detailed Patient Statements",
        "Payment Plan Setup & Management",
        "Patient Portal Support",
        "Billing Inquiry Resolution",
        "Payment Processing & Receipts",
        "Financial Counseling",
        "Insurance Explanation of Benefits (EOB) Assistance",
        "Account Balance Monitoring",
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
                                    Patient Billing & Support Services
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                                    Patient-Friendly Billing with Comprehensive Support
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
                                        Compassionate Patient Billing Solutions
                                    </h2>
                                    <p className="text-lg text-gray-700 mb-4">
                                        Patient billing is more than just sending invoices—it's about
                                        maintaining positive patient relationships while ensuring
                                        timely payments. Our patient billing and support services
                                        combine professional billing practices with compassionate
                                        communication to enhance patient satisfaction and improve
                                        collections.
                                    </p>
                                    <p className="text-lg text-gray-700 mb-4">
                                        We understand that medical bills can be confusing and
                                        stressful for patients. Our team provides clear explanations,
                                        flexible payment options, and responsive support to help
                                        patients understand their financial obligations and make
                                        payments manageable.
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
                                        Our Patient Billing Services
                                    </h2>
                                    <p className="text-xl text-gray-600">
                                        Comprehensive support for better patient experience
                                    </p>
                                </motion.div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {serviceItems.map((item, index) => (
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
                                    Improve Patient Satisfaction Today
                                </h2>
                                <p className="text-xl text-blue-100 mb-8">
                                    Enhance patient experience while optimizing your billing
                                    collections.
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

export default PatientBillingPage;
