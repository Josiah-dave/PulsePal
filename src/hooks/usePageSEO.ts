import { useEffect } from "react";
import { SEOConfig } from "@/lib/seo";

export function usePageSEO(config: Partial<SEOConfig>) {
  useEffect(() => {
    // Update document title
    if (config.title) {
      document.title = config.title;
    }

    // Update meta description
    if (config.description) {
      updateMetaTag("description", config.description);
    }

    // Update keywords
    if (config.keywords && config.keywords.length > 0) {
      updateMetaTag("keywords", config.keywords.join(", "));
    }

    // Update canonical URL
    if (config.canonical) {
      updateCanonicalUrl(config.canonical);
    }

    // Update Open Graph tags
    if (config.openGraph && config.title && config.description) {
      updateOpenGraphTags(config.openGraph, config as SEOConfig);
    }

    // Update Twitter Card tags
    if (config.twitter && config.title && config.description) {
      updateTwitterCardTags(config.twitter, config as SEOConfig);
    }

    // Add structured data
    if (config.structuredData) {
      addStructuredData(config.structuredData);
    }
  }, [config]);
}

function updateMetaTag(name: string, content: string) {
  let metaTag = document.querySelector(`meta[name="${name}"]`);
  if (!metaTag) {
    metaTag = document.createElement("meta");
    metaTag.setAttribute("name", name);
    document.head.appendChild(metaTag);
  }
  metaTag.setAttribute("content", content);
}

function updateCanonicalUrl(url: string) {
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute("href", url);
}

function updateOpenGraphTags(
  openGraph: NonNullable<SEOConfig["openGraph"]>,
  config: SEOConfig
) {
  const ogTags = [
    { property: "og:title", content: openGraph.title || config.title },
    {
      property: "og:description",
      content: openGraph.description || config.description,
    },
    { property: "og:type", content: openGraph.type || "website" },
    { property: "og:image", content: openGraph.image },
    { property: "og:url", content: openGraph.url },
    { property: "og:site_name", content: "PulsePal" },
  ];

  ogTags.forEach((tag) => {
    if (tag.content) {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", tag.content);
    }
  });
}

function updateTwitterCardTags(
  twitter: NonNullable<SEOConfig["twitter"]>,
  config: SEOConfig
) {
  const twitterTags = [
    { name: "twitter:card", content: twitter.card || "summary_large_image" },
    { name: "twitter:site", content: twitter.site },
    { name: "twitter:creator", content: twitter.creator },
    { name: "twitter:title", content: twitter.title || config.title },
    {
      name: "twitter:description",
      content: twitter.description || config.description,
    },
    { name: "twitter:image", content: twitter.image },
  ];

  twitterTags.forEach((tag) => {
    if (tag.content) {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("name", tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", tag.content);
    }
  });
}

function addStructuredData(data: Record<string, any>) {
  // Remove existing structured data script
  const existingScript = document.querySelector(
    'script[type="application/ld+json"]'
  );
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

// Utility functions for tracking and analytics
export function trackPageView(url: string, title: string) {
  // Google Analytics 4
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", "GA_MEASUREMENT_ID", {
      page_title: title,
      page_location: url,
    });
  }

  // Facebook Pixel
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "PageView");
  }

  // LinkedIn Insight Tag
  if (typeof window !== "undefined" && (window as any)._linkedin_partner_id) {
    (window as any).lintrk("track", { conversion_id: "your_conversion_id" });
  }
}

export function trackEvent(
  eventName: string,
  parameters: Record<string, any> = {}
) {
  // Google Analytics 4
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, parameters);
  }

  // Facebook Pixel
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", eventName, parameters);
  }
}
