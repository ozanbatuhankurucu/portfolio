import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { getProjectStatuProps } from "../constants/projectstatus"

const Project = ({
  description,
  title,
  github,
  stack,
  url,
  image,
  index,
  statu,
  features = [],
  featuresTitle,
}) => {
  const { projectStatu, statuColor } = getProjectStatuProps(statu)

  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <span className="project-statu" style={{ backgroundColor: statuColor }}>
          {projectStatu}
        </span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        {features.length > 0 ? (
          <figure>
            {featuresTitle && <figcaption>{featuresTitle}</figcaption>}
            <ul className="features-list">
              {features.map(feature => {
                const { id, featureText } = feature
                return <li key={id}>{featureText}</li>
              })}
            </ul>
          </figure>
        ) : null}
        <div className="project-stack">
          {stack.map(item => {
            const { id, title } = item
            return <span key={id}>{title}</span>
          })}
        </div>

        <div className="project-links">
          <a href={github} target="_blank">
            <FaGithubSquare className="project-icon" />
          </a>
          {url && (
            <a href={url} target="_blank">
              <FaShareSquare className="project-icon" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Project
