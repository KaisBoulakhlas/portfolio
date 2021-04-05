import * as React from "react"
import { useAllProjects } from "../hooks/use-all-projects"
import Project from "../components/project"
import * as containerProjectsStyles from "../components/projects.module.css"


const Projects  = () => {
    const projects = useAllProjects()
return(
    <div className={containerProjectsStyles.container}>
    {
        projects.map( (project) => {
            return (    
         
                <Project 
                    key={project.id}
                    title={project.frontmatter.title}
                    image={project.frontmatter.image} 
                    slug={project.fields.slug}
                />  
            )
        })
    }
    </div>
)
       
 
      
            
  
}

export default Projects