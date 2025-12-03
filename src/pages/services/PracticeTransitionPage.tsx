import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, CheckCircle, TrendingUp, Users, FileCheck } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { updateSEO } from "../../utils/seo";

const PracticeTransitionPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        // Update SEO meta tags
        updateSEO({
            title:
                "Practice Transition and Planning Services - Trinity RCM Solution",
            description:
                "Smooth practice transitions and strategic planning support. Expert guidance for practice mergers, acquisitions, and succession planning.",
            canonical: "/services/practiceTransition",
            ogTitle:
                "Practice Transition and Planning Services - Trinity RCM Solution",
            ogDescription:
                "Smooth practice transitions and strategic planning support for healthcare providers.",
            ogUrl: "/services/practiceTransition",
            ogImage: "/logo.png",
            ogImageWidth: "1200",
            ogImageHeight: "630",
            ogImageAlt: "Trinity RCM Solution - Practice Transition",
            twitterTitle:
                "Practice Transition and Planning Services - Trinity RCM Solution",
            twitterDescription:
                "Smooth practice transitions and strategic planning support for healthcare providers.",
            twitterUrl: "/services/practiceTransition",
            twitterImage: "/logo.png",
        });
    }, []);

    const benefits = [
        {
            icon: FileText,
            title: "Strategic Planning",
            description:
                "Comprehensive transition planning to ensure smooth practice changes and minimal disruption.",
        },
        {
            icon: TrendingUp,
            title: "Revenue Optimization",
            description:
                "Maximize practice value and revenue potential during transition periods.",
        },
        {
            icon: Users,
            title: "Stakeholder Management",
            description:
                "Coordinate communication between all parties for seamless transitions.",
        },
        {
            icon: CheckCircle,
            title: "Compliance Assurance",
            description:
                "Ensure all regulatory and compliance requirements are met throughout the transition.",
        },
    ];

    const transitionServices = [
        "Practice Valuation & Assessment",
        "Merger & Acquisition Support",
        "Succession Planning",
        "Contract Negotiation Assistance",
        "RCM System Integration",
        "Staff Training & Transition Support",
        "Payer Contract Analysis & Renegotiation",
        "Financial Reporting & Documentation",
        "Regulatory Compliance Review",
        "Post-Transition Support & Optimization",
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
                                    Practice Transition and Planning Services
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                                    Smooth Practice Transitions & Strategic Planning Support
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
                                        Expert Guidance for Practice Transitions
                                    </h2>
                                    <p className="text-lg text-gray-700 mb-4">
                                        Practice transitions—whether through mergers, acquisitions,
                                        retirement, or expansion—are complex undertakings that require
                                        careful planning and execution. Our practice transition and
                                        planning services provide comprehensive support to ensure your
                                        transition is smooth, financially sound, and strategically
                                        aligned with your goals.
                                    </p>
                                    <p className="text-lg text-gray-700 mb-4">
                                        With years of experience in healthcare revenue cycle
                                        management, we understand the unique challenges of practice
                                        transitions. From initial valuation and due diligence to
                                        post-transition integration and optimization, we guide you
                                        through every step to protect your investment and maximize
                                        your success.
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
                                        Our Transition Services
                                    </h2>
                                    <p className="text-xl text-gray-600">
                                        Comprehensive support throughout your practice transition
                                    </p>
                                </motion.div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {transitionServices.map((item, index) => (
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
                                    Plan Your Practice Transition Today
                                </h2>
                                <p className="text-xl text-blue-100 mb-8">
                                    Let our experts guide you through a successful practice
                                    transition.
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

export default PracticeTransitionPage;
