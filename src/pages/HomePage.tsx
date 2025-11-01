import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
// import Specialties from "../components/Specialties";
import Footer from "../components/Footer";
import { updateSEO } from "../utils/seo";

const HomePage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Update SEO meta tags for homepage
    updateSEO({
      title:
        "Trinity RCM Solution - Healthcare Revenue Cycle Management Services",
      description:
        "Leading healthcare RCM solution provider offering dental and medical billing, coding, credentialing, and revenue cycle management services. Free RCM audit available.",
      canonical: "/", // Will be converted to full URL automatically
      ogTitle: "Trinity RCM Solution - Healthcare Revenue Cycle Management",
      ogDescription:
        "Leading healthcare RCM solution provider offering dental and medical billing, coding, credentialing, and revenue cycle management services.",
      ogUrl: "/", // Will be converted to full URL automatically
      ogImage: "/logo.png", // Will be converted to full URL automatically
      ogImageWidth: "1200",
      ogImageHeight: "630",
      ogImageAlt: "Trinity RCM Solution - Healthcare Revenue Cycle Management",
      twitterTitle:
        "Trinity RCM Solution - Healthcare Revenue Cycle Management",
      twitterDescription:
        "Leading healthcare RCM solution provider offering dental and medical billing, coding, credentialing, and revenue cycle management services.",
      twitterUrl: "/", // Will be converted to full URL automatically
      twitterImage: "/logo.png", // Will be converted to full URL automatically
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
