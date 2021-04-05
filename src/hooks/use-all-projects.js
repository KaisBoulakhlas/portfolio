import { useStaticQuery, graphql } from "gatsby"
export const  useAllProjects = () => {
    const projects = useStaticQuery(graphql`
    query AllProjects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, quality: 95, width: 400, height: 400)
              }
            }
            description
            link
          }
          fields {
            slug
          }
          id
        }
      }
    }
`)

  return projects.allMarkdownRemark.nodes;
}