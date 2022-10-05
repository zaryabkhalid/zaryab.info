import React, { useState, useEffect } from "react"
import { AppContainer, Wrap } from "../../components"
import { client, urlFor } from "../../client"

import "./About.css"
const About = () => {
  const [details, setDetails] = useState([])

  useEffect(() => {
    const aboutQuery = "*[_type=='abouts']"
    const getAboutDetails = async () => {
      const data = await client.fetch(aboutQuery)
      setDetails(data)
    }

    getAboutDetails()
  }, [])

  const aboutInfo = details.map((detail) => {
    return (
      <div className="about-data" key={detail._id}>
        <div className="about-img-container">
          <img src={urlFor(detail.imageurl)} alt={detail.name} />
        </div>

        <div className="about-info">
          <p className="about-para">{detail.description}</p>
        </div>
      </div>
    )
  })

  return (
    <div id="About">
      <AppContainer>
        <Wrap heading="About">
          <section className="about__section">{aboutInfo}</section>
        </Wrap>
      </AppContainer>
    </div>
  )
}

export default About
