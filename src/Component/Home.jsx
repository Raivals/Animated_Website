import React, { Fragment } from "react"
import "../CSS/Home.css"
const Home = () => {
  return (
    <Fragment>
      <section className="home">
        <div className="home-container">
          <h1>
            The journey of a thousand miles <br />
            begins with a single step
          </h1>
          <p>
            Greetings from the galaxy MACS0647-JD, or what we call home. <br />{" "}
            It's important to remember to be aware of rampaging grizzly bears.
          </p>
          <div className="link">
            <a href="#" className="detail">
              View Detail
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home
