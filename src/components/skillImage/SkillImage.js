import React from "react"
import "./SkillImage.css"
import { urlFor } from "../../client"

const SkillImage = ({ skill }) => {
  return (
    <>
      <div className="skill-item" key={skill._id}>
        <div className="skill-img" style={{ background: skill.bgColor }}>
          <img src={urlFor(skill.icon)} alt={skill.name} />
        </div>
        <p className="p-text" style={{ textAlign: "center" }}>
          {skill.name}
        </p>
      </div>
    </>
  )
}

export default SkillImage
