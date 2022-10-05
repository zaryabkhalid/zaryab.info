import React from "react"
import "./Header.css"
import Wrap from "../../components/wrap/Wrap"
import { AppContainer } from "../../components"
import bgHeader from "../../assests/images/bg-header.png"
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs"

const Header = () => {
  return (
    <>
      <div id="Home">
        <AppContainer>
          <Wrap>
            <section className="header__main">
              <div className="header__info">
                <h4 className="header__name">Zaryab Khalid</h4>
                <p className="header__profession">React Js Developer.</p>
                <p className="header__profession_intro">
                  A passionate React Js Frontend Developer experience in
                  building React Js <br />
                  web Apps with React Js | Node Js | and some other cool
                  libraries and frameworks.
                </p>
                <div className="btn-container">
                  <a
                    href="ZaryabKhalid SEP2022.pdf"
                    download="ZaryabKhalid SEP2022.pdf"
                  >
                    <button className="btn" type="button">
                      Resume
                    </button>
                  </a>
                  <a href="#Work">
                    <button type="button" className="btn">
                      Projects
                    </button>
                  </a>
                </div>
              </div>
              <div className="bg-header-img">
                <img src={bgHeader} alt="web Developer react Js" />
              </div>
            </section>
          </Wrap>
        </AppContainer>
      </div>
      <div className="social-icons">
        <a
          href="https://github.com/zaryabkhalid"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsGithub />
        </a>

        <a
          href="https://www.facebook.com/zaryab.khalid.56/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsFacebook />
        </a>

        <a
          href="https://www.linkedin.com/in/zaryab-khalid-09a285b6/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
    </>
  )
}

export default Header
