import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, quality: 95, width: 120, height: 120)
          }
        }
        link
      }
      html
    }
  }
`

const Project = props => {
  const image = getImage(props.data.markdownRemark.frontmatter.image)
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.description}</p>
      <GatsbyImage image={image} alt={props.data.markdownRemark.frontmatter.title}/>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
      <Link to={props.data.markdownRemark.frontmatter.link}>Voir mon projet</Link>
    </Layout>
  )
}

export default Project