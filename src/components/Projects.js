import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { sortProjectsByStatu } from "../constants/projectstatus"

const Projects = ({ projects, title, showLink }) => {
  const sortedList = sortProjectsByStatu(projects)

  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {sortedList.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
