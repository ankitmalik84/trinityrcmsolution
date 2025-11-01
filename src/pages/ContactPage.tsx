import React, { useEffect } from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { updateSEO } from "../utils/seo";

const ContactPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Update SEO meta tags
    updateSEO({
      title: "Contact Us - Trinity RCM Solution | Get Your Free RCM Audit",
      description:
        "Contact Trinity RCM Solution for expert healthcare revenue cycle management services. Get a free RCM audit and consultation. Located in Bangalore and Gurugram, India.",
      canonical: "https://trinityrcmsolution.com/contact",
      ogTitle: "Contact Us - Trinity RCM Solution | Get Your Free RCM Audit",
      ogDescription:
        "Contact Trinity RCM Solution for expert healthcare revenue cycle management services. Get a free RCM audit and consultation.",
      ogImage: "https://trinityrcmsolution.com/logo.png",
      ogImageWidth: "1200",
      ogImageHeight: "630",
      ogImageAlt: "Trinity RCM Solution - Contact Us",
      twitterTitle:
        "Contact Us - Trinity RCM Solution | Get Your Free RCM Audit",
      twitterDescription:
        "Contact Trinity RCM Solution for expert healthcare revenue cycle management services. Get a free RCM audit and consultation.",
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
    updateMetaTag("og:url", "https://trinityrcmsolution.com/contact");
    updateMetaTag("twitter:url", "https://trinityrcmsolution.com/contact");
  }, []);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Trinity RCM Solution",
            description:
              "Contact page for Trinity RCM Solution - Expert healthcare revenue cycle management services",
            url: "https://trinityrcmsolution.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "Trinity RCM Solution",
              url: "https://trinityrcmsolution.com",
              logo: "https://trinityrcmsolution.com/logo.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9068738713",
                  contactType: "customer service",
                  email: "Info@trinityrcmsolution.com",
                  areaServed: "IN",
                  availableLanguage: ["en", "hi"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9068738713",
                  contactType: "HR",
                  email: "HRQueries@trinityrcmsolution.com",
                  areaServed: "IN",
                  availableLanguage: ["en", "hi"],
                },
              ],
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress:
                    "Elite Coworking — 4th Floor, MFAR, Manyata Tech Park, Nagawara",
                  addressLocality: "Bengaluru",
                  addressRegion: "Karnataka",
                  postalCode: "560045",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress:
                    "CorporatEdge, DLF Building No. 10, DLF Cyber City, Sector 24",
                  addressLocality: "Gurugram",
                  addressRegion: "Haryana",
                  postalCode: "122022",
                  addressCountry: "IN",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen">
        <Header />
        <main>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
