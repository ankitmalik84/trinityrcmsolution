import React, { useEffect } from "react";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { updateSEO } from "../utils/seo";

const TestimonialsPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Update SEO meta tags
    updateSEO({
      title: "Client Testimonials - Trinity RCM Solution | Success Stories",
      description:
        "Read testimonials from satisfied clients of Trinity RCM Solution. Discover how we've helped dental and medical practices improve their revenue cycle management with our expert billing and credentialing services.",
      canonical: "https://trinityrcmsolution.com/testimonials",
      ogTitle: "Client Testimonials - Trinity RCM Solution | Success Stories",
      ogDescription:
        "Read testimonials from satisfied clients of Trinity RCM Solution. Discover how we've helped dental and medical practices improve their revenue cycle management.",
      ogImage: "https://trinityrcmsolution.com/logo.png",
      ogImageWidth: "1200",
      ogImageHeight: "630",
      ogImageAlt: "Trinity RCM Solution - Client Testimonials",
      twitterTitle:
        "Client Testimonials - Trinity RCM Solution | Success Stories",
      twitterDescription:
        "Read testimonials from satisfied clients of Trinity RCM Solution. Discover how we've helped dental and medical practices improve their revenue cycle management.",
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
    updateMetaTag("og:url", "https://trinityrcmsolution.com/testimonials");
    updateMetaTag("twitter:url", "https://trinityrcmsolution.com/testimonials");
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
