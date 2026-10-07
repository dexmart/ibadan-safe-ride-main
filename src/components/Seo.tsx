import { Helmet } from "react-helmet-async";
import { SITE, absoluteUrl } from "@/seo/site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  jsonLd?: object;
  noindex?: boolean;
};

const Seo = ({ title, description, path, jsonLd, noindex }: SeoProps) => {
  const url = absoluteUrl(path);
  const image = absoluteUrl(SITE.ogImage);

  return (
    <Helmet>
      <html lang="en-NG" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}
      />
      {!noindex && <link rel="canonical" href={url} />}
      {!noindex && <link rel="alternate" hrefLang="en-NG" href={url} />}
      {!noindex && <link rel="alternate" hrefLang="x-default" href={url} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};

export default Seo;
