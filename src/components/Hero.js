import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img-me.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="hero-div">
            <div className="job">
              <h3>Front-end Developer</h3>
            </div>

            <h1>Hi, I'm Ozan</h1>
            <h4>I'm a front-end developer from Izmir.</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="download-div">
              <a
                className="download-cv"
                href="https://my-portfolio-ozan.s3.eu-central-1.amazonaws.com/pdfFiles/ozan's+Resume.pdf"
                target="_blank"
              >
                Download CV
              </a>
            </div>
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
