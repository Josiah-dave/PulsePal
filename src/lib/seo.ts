import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: "website" | "article" | "product";
    image?: string;
    url?: string;
  };
  twitter?: {
    card?: "summary" | "summary_large_image" | "app" | "player";
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  structuredData?: Record<string, any>;
}

const defaultSEO: SEOConfig = {
  title: "PulsePal - Smart Leisure Centre Management",
  description:
    "AI-powered CRM & booking platform for leisure centres. Streamline bookings, payments, and member management with intelligent automation.",
  keywords: [
    "leisure centre management",
    "CRM software",
    "booking system",
    "gym management",
    "fitness centre software",
    "member management",
    "AI automation",
    "sports facility management",
    "recreation centre software",
    "booking platform",
  ],
  openGraph: {
    title: "PulsePal - Smart Leisure Centre Management",
    description:
      "AI-powered CRM & booking platform for leisure centres. Streamline bookings, payments, and member management with intelligent automation.",
    type: "website",
    image: "/og-image.jpg",
    url: "https://pulsepal.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "@PulsePal",
    creator: "@PulsePal",
    title: "PulsePal - Smart Leisure Centre Management",
    description:
      "AI-powered CRM & booking platform for leisure centres. Streamline bookings, payments, and member management with intelligent automation.",
    image: "/twitter-image.jpg",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PulsePal",
    applicationCategory: "BusinessApplication",
    description:
      "AI-powered CRM & booking platform for leisure centres. Streamline bookings, payments, and member management with intelligent automation.",
    url: "https://pulsepal.com",
    publisher: {
      "@type": "Organization",
      name: "PulsePal",
      url: "https://pulsepal.com",
    },
    offers: {
      "@type": "Offer",
      price: "99",
      priceCurrency: "GBP",
      priceSpecification: {
        "@type": "RecurringCharge",
        frequency: "monthly",
      },
    },
    featureList: [
      "AI-powered booking system",
      "Automated CRM",
      "Payment processing",
      "Member management",
      "Access control",
      "Analytics and reporting",
    ],
  },
};

export function generateMetadata(config: Partial<SEOConfig> = {}): Metadata {
  const seo = { ...defaultSEO, ...config };

  // Merge OpenGraph and Twitter data
  const openGraph = { ...defaultSEO.openGraph, ...config.openGraph };
  const twitter = { ...defaultSEO.twitter, ...config.twitter };

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords?.join(", "),

    // Open Graph
    openGraph: {
      title: openGraph.title,
      description: openGraph.description,
      type: openGraph.type === "article" || openGraph.type === "website" ? openGraph.type : "website",
      images: openGraph.image ? [openGraph.image] : undefined,
      url: openGraph.url,
      siteName: "PulsePal",
    },

    // Twitter
    twitter: {
      card: twitter.card ?? "summary",
      site: twitter.site,
      creator: twitter.creator,
      title: twitter.title,
      description: twitter.description,
      images: twitter.image ? [twitter.image] : undefined,
    },

    // Additional meta tags
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Canonical URL
    alternates: {
      canonical: seo.canonical,
    },

    // Additional metadata
    authors: [{ name: "PulsePal Team" }],
    creator: "PulsePal",
    publisher: "PulsePal",
    category: "Business Software",

    // App metadata
    applicationName: "PulsePal",
    generator: "Next.js",

    // Verification tags (add your actual verification codes)
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },

    // Other metadata
    other: {
      "theme-color": "#66CCFF",
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "apple-mobile-web-app-title": "PulsePal",
      "msapplication-TileColor": "#66CCFF",
      "msapplication-config": "/browserconfig.xml",
    },
  };
}

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title:
      "PulsePal - Smart Leisure Centre Management | AI-Powered CRM & Booking",
    description:
      "Transform your leisure centre with PulsePal's AI-powered platform. Streamline bookings, automate CRM, process payments, and delight members. Start your free trial today.",
    canonical: "https://pulsepal.com",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "PulsePal",
      url: "https://pulsepal.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://pulsepal.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  },

  features: {
    title: "Features - PulsePal Leisure Centre Management",
    description:
      "Discover PulsePal's comprehensive features: AI booking system, automated CRM, payment processing, member management, and more. Built for modern leisure centres.",
    canonical: "https://pulsepal.com/features",
  },

  pricing: {
    title: "Pricing - PulsePal Leisure Centre Software | £99/month",
    description:
      "Simple, transparent pricing for PulsePal. £99/month includes everything: AI CRM, booking system, payments, and support. 30-day free trial, no setup fees.",
    canonical: "https://pulsepal.com/pricing",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "PulsePal Leisure Centre Management",
      offers: {
        "@type": "Offer",
        price: "99",
        priceCurrency: "GBP",
        priceSpecification: {
          "@type": "RecurringCharge",
          frequency: "monthly",
        },
        availability: "https://schema.org/InStock",
      },
    },
  },

  contact: {
    title: "Contact Us - PulsePal Support & Sales",
    description:
      "Get in touch with PulsePal. Book a demo, ask questions, or get support. Our team is here to help you transform your leisure centre management.",
    canonical: "https://pulsepal.com/contact",
  },
};

export default defaultSEO;
