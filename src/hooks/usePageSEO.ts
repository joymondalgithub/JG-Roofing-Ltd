import { useEffect } from "react";

interface PageSEOConfig {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

const CANONICAL_ORIGIN = "https://jgroofingltd.com";
const DEFAULT_OG_IMAGE = `${CANONICAL_ORIGIN}/assets/images/hero-slate-roofing.webp`;

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function usePageSEO({ title, description, path, ogImage }: PageSEOConfig) {
  useEffect(() => {
    const cleanPath = path === "/" ? "/" : path.replace(/\/+$/, "");
    const canonicalUrl = `${CANONICAL_ORIGIN}${cleanPath}`;
    const imageUrl = ogImage
      ? ogImage.startsWith("http")
        ? ogImage
        : `${CANONICAL_ORIGIN}${ogImage}`
      : DEFAULT_OG_IMAGE;

    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);
  }, [title, description, path, ogImage]);
}
