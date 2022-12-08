import "./App.css"
import React, { Fragment } from "react"
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import Services from "./Component/Services"

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Services />
    </Fragment>
  )
}

export default App
