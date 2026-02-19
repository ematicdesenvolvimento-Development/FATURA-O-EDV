import { useLocation } from "react-router";
import { Helmet } from "react-helmet-async";

import { APP_DEFAULT_IMAGE, APP_DESCRIPTION, APP_DOMAIN, APP_NAME, IS_PRODUCTION } from "../../constants/config";
import type { SeoProps } from "../../types/seo-props";

export default function Seo({
    title,
    description, 
    image,
    noIndex = false,
}: SeoProps) {
    const location = useLocation();
    
    const fullTitle = title ? `${title} | ${APP_NAME}` : APP_NAME;
    const metaDescription = description || APP_DESCRIPTION;
    const canonicalUrl = `${APP_DOMAIN}${location.pathname}`;;
    const metaImage = image || APP_DEFAULT_IMAGE;

    const robotsContent = noIndex
        ? "noindex, nofollow"
        : IS_PRODUCTION
            ? "index, follow"
            : "noindex, nofollow";

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: APP_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: APP_DESCRIPTION,
        url: APP_DOMAIN,
    };

    return (
        <Helmet key={location.pathname}>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="robots" content={robotsContent} />

            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:site_name" content={APP_NAME} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
}
