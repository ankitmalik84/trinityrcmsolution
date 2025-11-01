import React, { useEffect } from "react";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const TestimonialsPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Update document title
    document.title =
      "Client Testimonials - Trinity RCM Solution | Success Stories";

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read testimonials from satisfied clients of Trinity RCM Solution. Discover how we've helped dental and medical practices improve their revenue cycle management with our expert billing and credentialing services."
      );
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute(
        "content",
        "Read testimonials from satisfied clients of Trinity RCM Solution. Discover how we've helped dental and medical practices improve their revenue cycle management with our expert billing and credentialing services."
      );
      document.head.appendChild(metaDescription);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        "href",
        "https://trinityrcmsolution.com/testimonials"
      );
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute(
        "href",
        "https://trinityrcmsolution.com/testimonials"
      );
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

    updateMetaTag("og:url", "https://trinityrcmsolution.com/testimonials");
    updateMetaTag(
      "og:title",
      "Client Testimonials - Trinity RCM Solution | Success Stories"
    );
    updateMetaTag(
      "og:description",
      "Read testimonials from satisfied clients of Trinity RCM Solution. Discover how we've helped dental and medical practices improve their revenue cycle management."
    );
    updateMetaTag("og:image", "https://trinityrcmsolution.com/logo.png");
    updateMetaTag("og:image:width", "1200");
    updateMetaTag("og:image:height", "630");
    updateMetaTag("og:image:alt", "Trinity RCM Solution - Client Testimonials");

    // Update Twitter tags
    updateMetaTag("twitter:url", "https://trinityrcmsolution.com/testimonials");
    updateMetaTag(
      "twitter:title",
      "Client Testimonials - Trinity RCM Solution | Success Stories"
    );
    updateMetaTag(
      "twitter:description",
      "Read testimonials from satisfied clients of Trinity RCM Solution. Discover how we've helped dental and medical practices improve their revenue cycle management."
    );
    updateMetaTag("twitter:image", "https://trinityrcmsolution.com/logo.png");
  }, []);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Client Testimonials - Trinity RCM Solution",
            description:
              "Client testimonials and success stories from Trinity RCM Solution customers",
            url: "https://trinityrcmsolution.com/testimonials",
            mainEntity: {
              "@type": "Organization",
              name: "Trinity RCM Solution",
              url: "https://trinityrcmsolution.com",
              logo: "https://trinityrcmsolution.com/logo.png",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.4",
                reviewCount: "8",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Organization",
                    name: "Clinton Dental",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "We have been consistently impressed by the exceptional professionalism and depth of expertise demonstrated by the Trinity RCM Health team.",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Organization",
                    name: "Springfield Dental",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Trinity RCM Health has played a pivotal role in transforming our practice's billing and credentialing procedures.",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Organization",
                    name: "State Street Dental",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "4",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Trinity RCM Health has been a game-changer for our practice. Their efficient claim submission and follow-up processes have significantly reduced our outstanding AR.",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen">
        <Header />
        <main>
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TestimonialsPage;
