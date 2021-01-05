import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
// import { globalHistory } from '@reach/router'

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
  }
`

const SEO = ({ title, description, blogImage, blogSlug}) => {
  const { site } = useStaticQuery(query)
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata
  // const {location: {pathname, origin}} = globalHistory
  console.log(siteTitle, siteDesc)

  const blogUrl = `${siteUrl}/blogs/${blogSlug}`
  const blogImg = `${siteUrl}${blogImage}`
  const defaultImg = `${siteUrl}${image}`
  const headTitle = `${title} || ${siteTitle}`
  // const currentUrl = `${siteUrl}${pathname}`

  console.log(`This is blogUrl: ${blogUrl}`)

  // console.log(`This is currentUrl: ${currentUrl}`)

  console.log(`This is defaultImg: ${defaultImg}`)

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={headTitle}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || siteDesc} />
      <meta name="twitter:image" content={blogImg || defaultImg || "https://farisadlin.com/twitter-img.png"} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDesc} />
      <meta property="og:image" content={blogImg || defaultImg || "https://farisadlin.com/twitter-img.png"} />
    </Helmet>
  )
}

export default SEO
