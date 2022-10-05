import React from "react"
import "./footer.css"

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <>
      <div className="footer__container">
        <p>Zaryabkhalid.info @{year} PORTFOLIO </p>
      </div>
    </>
  )
}

export default Footer
