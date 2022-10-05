import React, { useState, useEffect } from "react"
import { AppContainer, ProjectCard, Wrap } from "../../components"
import { client } from "../../client"

import "./Work.css"

const Work = () => {
  const [projects, setProjects] = useState([])
  const projectQuery = '*[_type == "works"]'

  useEffect(() => {
    const getProjects = async () => {
      const data = await client.fetch(projectQuery)
      setProjects(data)
    }

    getProjects()
  }, [])

  return (
    <>
      <div id="Work">
        <AppContainer>
          <Wrap heading="Projects">
            <div className="work-list">
              {projects.map((project) => {
                return (
                  <>
                    <ProjectCard key={project._id} project={project} />
                  </>
                )
              })}
            </div>
          </Wrap>
        </AppContainer>
      </div>
    </>
  )
}

export default Work
