import "./App.css"
import React, { Fragment } from "react"
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import Services from "./Component/Services"
import About from "./Component/About"
import Counter from "./Component/Counter"
import Testimonial from "./Component/Testimonial"
import Work from "./Component/Work"
import Faculty from "./Component/Faculty"
import Contact from "./Component/Contact"
import Footer from "./Component/Footer"

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Counter />
      <Testimonial />
      <Work />
      <Faculty />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default App
