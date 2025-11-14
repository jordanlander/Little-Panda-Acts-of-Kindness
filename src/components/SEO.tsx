import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  type?: string;
  jsonLd?: object | object[];
};

const SEO = ({ title, description, keywords, canonical, type = "website", jsonLd }: SEOProps) => {
  const siteUrl = "https://rebeccacoppock.com";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {jsonLd && (
        Array.isArray(jsonLd) ? (
          jsonLd.map((schema, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
          </script>
        )
      )}
    </Helmet>
  );
};

export default SEO;
