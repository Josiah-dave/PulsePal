import Script from "next/script";

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

// Common structured data schemas
export const structuredDataSchemas = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PulsePal",
    url: "https://pulsepal.com",
    logo: "https://pulsepal.com/logo.png",
    description: "AI-powered CRM & booking platform for leisure centres",
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-XXX-XXX-XXXX",
      contactType: "Customer Service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://twitter.com/pulsepal",
      "https://linkedin.com/company/pulsepal",
      "https://facebook.com/pulsepal",
    ],
  },

  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PulsePal",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "CRM Software",
    operatingSystem: "Web Browser",
    description:
      "AI-powered CRM & booking platform for leisure centres. Streamline bookings, payments, and member management with intelligent automation.",
    url: "https://pulsepal.com",
    downloadUrl: "https://pulsepal.com/signup",
    softwareVersion: "2.0",
    datePublished: "2024-01-01",
    publisher: {
      "@type": "Organization",
      name: "PulsePal",
    },
    offers: {
      "@type": "Offer",
      price: "99",
      priceCurrency: "GBP",
      priceSpecification: {
        "@type": "RecurringCharge",
        frequency: "monthly",
      },
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "PulsePal",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "AI-powered booking system",
      "Automated CRM",
      "Payment processing",
      "Member management",
      "Access control",
      "Analytics and reporting",
      "Mobile app integration",
      "Real-time notifications",
    ],
  },

  localBusiness: {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    name: "PulsePal",
    description:
      "We help leisure centres streamline operations with AI-powered management software",
    url: "https://pulsepal.com",
    telephone: "+44-XXX-XXX-XXXX",
    email: "contact@pulsepal.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Tech Street",
      addressLocality: "London",
      addressRegion: "England",
      postalCode: "SW1A 1AA",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.5074",
      longitude: "-0.1278",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    priceRange: "££",
    paymentAccepted: ["Credit Card", "Bank Transfer", "Direct Debit"],
  },

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),

  faq: (questions: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.answer,
      },
    })),
  }),

  article: (article: {
    title: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    url: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "PulsePal",
      logo: {
        "@type": "ImageObject",
        url: "https://pulsepal.com/logo.png",
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image,
    url: article.url,
  }),
};
