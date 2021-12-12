import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Services" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, icons, title, text } = service
          return (
            <article key={id} className="service">
              {icons.map(icon => {
                return icon
              })}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
