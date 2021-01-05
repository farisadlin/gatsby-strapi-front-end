import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
    blog: strapiBlogs {
      blogSlug: slug
      blogTitle: title
      blogDesc: desc
      blogImage: image {
        publicURL
      }
    }
  }
`

const SEO = ({ title, description, blogImage }) => {
  const { site, blog } = useStaticQuery(query)
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata

  console.log(`${siteUrl}${blogImage}`)

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} || ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${blogImage}` || `${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
