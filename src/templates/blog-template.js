import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
const ComponentName = ({ data }) => {
  const {
    content,
    title,
    desc,
    image: {
      childImageSharp: {
        fluid: { src },
      },
    },
  } = data.blog
  console.log("%c -----data.src----- ", "background: #FF0000")
  console.log(src)
  console.log("%c -----data.src----- ", "background: #FF0000")
  const articleData = {
    articleCardImagePath: src,
    articleTitle: title,
    articleDesc: desc,
  }
  return (
    <Layout>
      <SEO article={articleData} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
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
