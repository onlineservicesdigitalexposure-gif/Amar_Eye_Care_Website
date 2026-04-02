import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  schema?: object;
}

export const SEO = ({ title, description, schema }: SEOProps) => {
  useEffect(() => {
    // Update Document Title
    const previousTitle = document.title;
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    let previousDescription = metaDescription ? metaDescription.getAttribute("content") : "";

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }

    // Handle Schema Org
    let scriptTag = document.getElementById("schema-org") as HTMLScriptElement;
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "schema-org";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schema);
    }

    return () => {
      // Cleanup on unmount
      document.title = previousTitle;
      if (metaDescription) {
        metaDescription.setAttribute("content", previousDescription || "");
      }
      if (scriptTag) {
        scriptTag.text = "";
      }
    };
  }, [title, description, schema]);

  return null;
};
