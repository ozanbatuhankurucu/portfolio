import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="Projects" description="This is my projects page." />
      <section className="projects-page">
        <Projects projects={projects} title="All Projects"></Projects>
      </section>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  {
    allStrapiProjects(sort: { fields: createdAt, order: DESC }) {
      nodes {
        description
        github
        id
        title
        url
        statu
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
        features {
          id
          featureText
        }
        featuresTitle
      }
    }
  }
`
