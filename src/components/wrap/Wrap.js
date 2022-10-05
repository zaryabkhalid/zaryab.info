import React from "react"
import "./wrap.css"

const Wrap = ({ heading, children }) => {
  return (
    <>
      <div className="container">
        {heading && <h2 className="heading">{heading}</h2>}
        <div className="childrens">{children}</div>
      </div>
    </>
  )
}

export default Wrap
