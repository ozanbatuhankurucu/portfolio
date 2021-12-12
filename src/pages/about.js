import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid
const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const { image, info, stack, title } = nodes[0]
  return (
    <Layout>
      <SEO title="About" description="This is our about page." />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>Ozan Batuhan Kurucu, Mobile Application Developer</p>
            <p>
              I am dedicated to developing engaging mobile applications for the
              software world.
            </p>
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default About
