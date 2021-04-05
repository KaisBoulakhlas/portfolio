import * as React from "react"
import { Link } from "gatsby"
import Projects  from "../components/projects"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default function IndexProjects() {
 return(
 <Layout>
    <SEO title="Mes projets" />
    <h1>Mes projets</h1>

      <Projects />

    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}
    
