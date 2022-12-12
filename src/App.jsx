import "./App.css"
import React, { Fragment } from "react"
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import Services from "./Component/Services"
import About from "./Component/About"
import Counter from "./Component/Counter"
import Testimonial from "./Component/Testimonial"
import Work from "./Component/Work"

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
    </Fragment>
  )
}

export default App
