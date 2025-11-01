/**
 * SEO utility functions for updating meta tags dynamically
 */

export interface SEOData {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  ogImageAlt?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterUrl?: string;
}

export const updateSEO = (data: SEOData) => {
  // Update document title
  document.title = data.title;

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", data.description);
  } else {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute("content", data.description);
    document.head.appendChild(metaDescription);
  }

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute("href", data.canonical);
  } else {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", data.canonical);
    document.head.appendChild(canonical);
  }

  // Helper function to update/create meta tags
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

  // Update OG tags
  if (data.ogTitle) updateMetaTag("og:title", data.ogTitle);
  if (data.ogDescription) updateMetaTag("og:description", data.ogDescription);
  if (data.ogUrl) updateMetaTag("og:url", data.ogUrl);
  if (data.ogImage) {
    updateMetaTag("og:image", data.ogImage);
    if (data.ogImageWidth) updateMetaTag("og:image:width", data.ogImageWidth);
    if (data.ogImageHeight) updateMetaTag("og:image:height", data.ogImageHeight);
    if (data.ogImageAlt) updateMetaTag("og:image:alt", data.ogImageAlt);
  }

  // Update Twitter tags
  updateMetaTag("twitter:card", "summary_large_image");
  if (data.twitterTitle) updateMetaTag("twitter:title", data.twitterTitle);
  if (data.twitterDescription) updateMetaTag("twitter:description", data.twitterDescription);
  if (data.twitterUrl) updateMetaTag("twitter:url", data.twitterUrl);
  if (data.twitterImage) updateMetaTag("twitter:image", data.twitterImage);
};

