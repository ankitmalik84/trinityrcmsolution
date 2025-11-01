import React, { useEffect } from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const ContactPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Update document title
    document.title =
      "Contact Us - Trinity RCM Solution | Get Your Free RCM Audit";

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact Trinity RCM Solution for expert healthcare revenue cycle management services. Get a free RCM audit and consultation. Located in Bangalore and Gurugram, India."
      );
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute(
        "content",
        "Contact Trinity RCM Solution for expert healthcare revenue cycle management services. Get a free RCM audit and consultation. Located in Bangalore and Gurugram, India."
      );
      document.head.appendChild(metaDescription);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://trinityrcmsolution.com/contact");
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", "https://trinityrcmsolution.com/contact");
      document.head.appendChild(canonical);
    }

    // Update OG tags
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
    updateMetaTag(
      "og:title",
      "Contact Us - Trinity RCM Solution | Get Your Free RCM Audit"
    );
    updateMetaTag(
      "og:description",
      "Contact Trinity RCM Solution for expert healthcare revenue cycle management services. Get a free RCM audit and consultation."
    );

    // Update Twitter tags
    updateMetaTag("twitter:url", "https://trinityrcmsolution.com/contact");
    updateMetaTag(
      "twitter:title",
      "Contact Us - Trinity RCM Solution | Get Your Free RCM Audit"
    );
    updateMetaTag(
      "twitter:description",
      "Contact Trinity RCM Solution for expert healthcare revenue cycle management services. Get a free RCM audit and consultation."
    );
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
              logo: "https://trinityrcmsolution.com/logo.jpeg",
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
