import React from "react"
import "./SkillImage.css"
import { urlFor } from "../../client"

const SkillImage = (props) => {
  return (
    <>
      <div className="skill-item">
        <div className="skill-img" style={{ background: props.skill.bgColor }}>
          <img src={urlFor(props.skill.icon)} alt={props.skill.name} />
        </div>
        <p className="p-text" style={{ textAlign: "center" }}>
          {props.skill.name}
        </p>
      </div>
    </>
  )
}

export default SkillImage
