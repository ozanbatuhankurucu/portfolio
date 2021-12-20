import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ComponentName = ({ data, pageContext }) => {
  const [readingTime, setReadingTime] = useState("")
  const {
    blog: {
      content,
      title,
      desc,
      image: {
        childImageSharp: {
          fluid: { src },
        },
      },
    },
  } = data
  const { author } = pageContext
  const articleData = {
    articleCardImagePath: src,
    articleTitle: title,
    articleDesc: desc,
  }

  useEffect(() => {
    setReadingTime(getReadingTime())
  }, [])

  function LinkRenderer(props) {
    return (
      <a href={props.href} target="_blank">
        {props.children}
      </a>
    )
  }

  function getReadingTime() {
    const text = document.getElementById("blog-content").innerText
    const wpm = 225
    const words = text.trim().split(/\s+/).length
    const time = Math.ceil(words / wpm)
    return time
  }

  return (
    <Layout>
      <SEO article={articleData} />
      <section className="blog-template">
        <div className="section-center">
          <h1>{articleData.articleTitle}</h1>
          <article id="blog-content" className="blog-content">
            <ReactMarkdown
              renderers={{ link: LinkRenderer }}
              source={content}
            />
          </article>
          <Link to="blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
      image {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
`

export default ComponentName
