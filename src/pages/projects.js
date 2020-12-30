import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: project },
  },
}) => {
  return <Layout>
    <SEO title="Projects" content="Faris Adlin's Projects"/>
    <section className="projects-page">
      <Projects projects={project} title="all projects" />
    </section>
  </Layout>
}

export const query = graphql`
{
  allStrapiProjects(filter: {featured: {eq: true}}) {
    nodes {
      github
      title
      id
      description
      url
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default ProjectsPage
