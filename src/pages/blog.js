import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({data: {allStrapiBlogs: {nodes: blogs}}}) => {
  return (
    <Layout>
      <SEO title="Blog" description="Faris Adlin's Blog"/>
      <section className="blog-page">
        <Blogs blogs={blogs} title="Blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
{
  allStrapiBlogs {
    nodes {
      slug
      desc
      date(formatString: "MMMM Do, YYYY")
      title
      id
      category
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
