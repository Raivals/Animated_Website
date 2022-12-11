import "./App.css"
import React, { Fragment } from "react"
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import Services from "./Component/Services"
import About from "./Component/About"
import Counter from "./Component/Counter"
import Testimonial from "./Component/Testimonial"

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Counter />
      <Testimonial />
    </Fragment>
  )
}

export default App
