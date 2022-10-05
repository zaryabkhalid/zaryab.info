import React, { useState, useEffect } from "react"
import "./Navbar.css"
import { AiOutlineAlignCenter, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => {
      return window.innerWidth <= 768 ? setShowMenu(false) : null
    })
    return () => {
      window.removeEventListener("resize")
    }
  }, [])

  const navItems = ["Home", "Skills", "Work", "About", "Contact"]

  const setMobileMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-container">
          {/* Navbar Logo */}
          <div className="app__navbar-logo-container">
            <a href="#Home" className="logo">
              PORTFOLIO
            </a>
          </div>

          {/* Nav Items */}
          <ul className="app__navbar-items">
            {navItems.map((item) => (
              <li key={`${item}+link`} className="item">
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-btn">
            {!showMenu ? (
              <AiOutlineAlignCenter onClick={setMobileMenu} />
            ) : (
              <AiOutlineClose onClick={setMobileMenu} />
            )}
          </div>
        </div>

        {/* Mobile-Menu */}
        {showMenu && (
          <ul className="mobile__navbar-items">
            {navItems.map((item) => (
              <li key={`${item}+link`} className="item">
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  )
}

export default Navbar
