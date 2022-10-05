import React from "react"
import "./App.css"
import { Navbar, Footer } from "./components"
import { About, Header, Skills, Contact, Work } from "./container"

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <Skills />
        <Work />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
