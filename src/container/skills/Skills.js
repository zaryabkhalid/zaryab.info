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
              {skills.map((skill) => (
                <SkillImage key={skill._id} skill={skill} />
              ))}
            </div>

            {/* Experience */}

            <div className="exprience-list">
              {experiences.map((exp) => {
                return (
                  <>
                    <h4 key={exp._id} className="exp-year">
                      {exp.year}
                    </h4>

                    <div>
                      {exp.works.map((work) => (
                        <WorkExprience key={work._id} work={work} />
                      ))}
                    </div>
                  </>
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
