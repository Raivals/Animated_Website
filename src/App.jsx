import "./App.css"
import React, { Fragment } from "react"
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import Services from "./Component/Services"
import About from "./Component/About"
import Counter from "multer/lib/counter"

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Counter />
    </Fragment>
  )
}

export default App
