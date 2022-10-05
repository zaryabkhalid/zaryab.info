import React from "react"
import "./WorkExprience.css"

const WorkExprience = ({ work }) => {
  return (
    <>
      <div className="exp-info" key={work._key}>
        <p className="exp company">{work.company}</p>
        <p className="exp name">{work.name}</p>
        <p className="exp desc">{work.desc}</p>
      </div>
    </>
  )
}

export default WorkExprience
