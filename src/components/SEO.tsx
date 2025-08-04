import Head from "next/head";
import { SEOConfig } from "@/lib/seo";

interface SEOProps extends SEOConfig {
  noindex?: boolean;
  nofollow?: boolean;
}

export function SEO({
  title,
  description,
  keywords = [],
  canonical,
  openGraph,
  twitter,
  structuredData,
  noindex = false,
  nofollow = false,
}: SEOProps) {
  const robotsContent = [
    noindex ? "noindex" : "index",
    nofollow ? "nofollow" : "follow",
  ].join(", ");

  return (
    <Head>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta name="robots" content={robotsContent} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph tags */}
      {openGraph && (
        <>
          <meta property="og:title" content={openGraph.title || title} />
          <meta
            property="og:description"
            content={openGraph.description || description}
          />
          <meta property="og:type" content={openGraph.type || "website"} />
          {openGraph.image && (
            <meta property="og:image" content={openGraph.image} />
          )}
          {openGraph.url && <meta property="og:url" content={openGraph.url} />}
          <meta property="og:site_name" content="PulsePal" />
        </>
      )}

      {/* Twitter Card tags */}
      {twitter && (
        <>
          <meta
            name="twitter:card"
            content={twitter.card || "summary_large_image"}
          />
          {twitter.site && <meta name="twitter:site" content={twitter.site} />}
          {twitter.creator && (
            <meta name="twitter:creator" content={twitter.creator} />
          )}
          <meta name="twitter:title" content={twitter.title || title} />
          <meta
            name="twitter:description"
            content={twitter.description || description}
          />
          {twitter.image && (
            <meta name="twitter:image" content={twitter.image} />
          )}
        </>
      )}

      {/* Additional meta tags */}
      <meta name="theme-color" content="#66CCFF" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="PulsePal" />
      <meta name="application-name" content="PulsePal" />
      <meta name="msapplication-TileColor" content="#66CCFF" />

      {/* Structured data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  );
}

// Hook for dynamic SEO updates
export function useSEO() {
  const updateSEO = (config: Partial<SEOConfig>) => {
    // Update page title
    if (config.title) {
      document.title = config.title;
    }

    // Update meta description
    if (config.description) {
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", config.description);
      }
    }

    // Update canonical URL
    if (config.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", config.canonical);
    }

    // Update Open Graph tags
    if (config.openGraph) {
      const ogTags = [
        { property: "og:title", content: config.openGraph.title },
        { property: "og:description", content: config.openGraph.description },
        { property: "og:image", content: config.openGraph.image },
        { property: "og:url", content: config.openGraph.url },
      ];

      ogTags.forEach((tag) => {
        if (tag.content) {
          let metaTag = document.querySelector(
            `meta[property="${tag.property}"]`
          );
          if (!metaTag) {
            metaTag = document.createElement("meta");
            metaTag.setAttribute("property", tag.property);
            document.head.appendChild(metaTag);
          }
          metaTag.setAttribute("content", tag.content);
        }
      });
    }
  };

  return { updateSEO };
}
