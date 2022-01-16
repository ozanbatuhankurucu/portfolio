import React from "react"
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        siteUrl
        twitterUsername
      }
    }
    file(relativePath: { eq: "hero-img-me.jpeg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`
const SEO = ({ title, article }) => {
  const { pathname } = useLocation()
  const {
    site,
    file: {
      childImageSharp: {
        fluid: { src: siteImg },
      },
    },
  } = useStaticQuery(query)
  const { description, siteUrl, twitterUsername } = site.siteMetadata

  const seo = {
    image: `${siteUrl}${article?.articleCardImagePath || siteImg}`,
    url: `${siteUrl}${pathname}`,
    twitterUsername: twitterUsername,
    pageDescription: article?.articleDesc || description,
    pageTitle: article?.articleTitle || title,
    ogType: article ? "article" : "website",
  }

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={seo.pageTitle}>
      <meta name="description" content={seo.pageDescription} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={seo.ogType} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:title" content={seo.pageTitle} />
      <meta property="og:description" content={seo.pageDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.pageTitle} />
      <meta name="twitter:description" content={seo.pageDescription} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}
export default SEO
