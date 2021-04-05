import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as projectStyles from "../components/project.module.css"

function Project ({ title, description, image, slug }) {
  const img = getImage(image)
  return(
    <div >
      <Link to={`/projects${slug}`}><GatsbyImage image={img} alt={title} className={projectStyles.project}/></Link> 
      <p>{description}</p>
    </div>
  )
}

export default Project