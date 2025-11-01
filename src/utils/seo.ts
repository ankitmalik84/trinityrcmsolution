/**
 * SEO utility functions for updating meta tags dynamically
 */

/**
 * Get the base URL dynamically based on current domain
 * Works for both Vercel preview (vercel.app) and production domain
 */
export const getBaseUrl = (): string => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  // Fallback for SSR (if needed in future)
  return "https://trinityrcmsolution.vercel.app/";
};

/**
 * Build full URL from a path
 */
export const buildUrl = (path: string): string => {
  const baseUrl = getBaseUrl();
  // Ensure path starts with /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

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

  // Update canonical URL - use dynamic base URL if path provided, otherwise use provided URL
  let canonicalUrl = data.canonical;
  // If canonical is a relative path (starts with /), make it absolute using current domain
  if (canonicalUrl.startsWith("/")) {
    canonicalUrl = buildUrl(canonicalUrl);
  }
  
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute("href", canonicalUrl);
  } else {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", canonicalUrl);
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
  if (data.ogUrl) {
    // If ogUrl is a relative path, make it absolute
    const ogUrl = data.ogUrl.startsWith("/") ? buildUrl(data.ogUrl) : data.ogUrl;
    updateMetaTag("og:url", ogUrl);
  }
  if (data.ogImage) {
    // If ogImage is a relative path, make it absolute
    const ogImage = data.ogImage.startsWith("/") ? buildUrl(data.ogImage) : data.ogImage;
    updateMetaTag("og:image", ogImage);
    if (data.ogImageWidth) updateMetaTag("og:image:width", data.ogImageWidth);
    if (data.ogImageHeight) updateMetaTag("og:image:height", data.ogImageHeight);
    if (data.ogImageAlt) updateMetaTag("og:image:alt", data.ogImageAlt);
  }

  // Update Twitter tags
  updateMetaTag("twitter:card", "summary_large_image");
  if (data.twitterTitle) updateMetaTag("twitter:title", data.twitterTitle);
  if (data.twitterDescription) updateMetaTag("twitter:description", data.twitterDescription);
  if (data.twitterUrl) {
    // If twitterUrl is a relative path, make it absolute
    const twitterUrl = data.twitterUrl.startsWith("/") ? buildUrl(data.twitterUrl) : data.twitterUrl;
    updateMetaTag("twitter:url", twitterUrl);
  }
  if (data.twitterImage) {
    // If twitterImage is a relative path, make it absolute
    const twitterImage = data.twitterImage.startsWith("/") ? buildUrl(data.twitterImage) : data.twitterImage;
    updateMetaTag("twitter:image", twitterImage);
  }
};

