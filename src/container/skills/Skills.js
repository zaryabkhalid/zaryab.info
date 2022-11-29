import React, { useState, useEffect } from "react"
import "./Skills.css"
import { client } from "../../client"
import { AppContainer, SkillImage, WorkExprience, Wrap } from "../../components"

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    const expQuery = '*[_type == "experiences"]'
    const skillquery = '*[_type=="skills"]'

    const getExperience = async () => {
      const data = await client.fetch(expQuery)
      setExperiences(data)
    }

    const getSkills = async () => {
      const data = await client.fetch(skillquery)
      setSkills(data)
    }

    getExperience()
    getSkills()
  }, [])

  return (
    <div id="Skills">
      <AppContainer>
        <Wrap heading="Skills & Experiences">
          <div className="skills-main">
            {/* Skills */}
            <div className="skills-list">
              {skills?.map((skill) => {
                return (
                  <div key={skill._id}>
                    <SkillImage skill={skill} />
                  </div>
                )
              })}
            </div>

            {/* Experience */}

            <div className="exprience-list">
              {experiences?.map((exp, index) => {
                return (
                  <div key={index}>
                    <p className="exp-year">{exp.year}</p>

                    <div>
                      {exp.works?.map((work, index) => (
                        <WorkExprience key={index} work={work} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Wrap>
      </AppContainer>
    </div>
  )
}

export default Skills
