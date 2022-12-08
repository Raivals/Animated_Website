import React, { Fragment, useEffect } from "react"
import Person from "../Images/men1.png"
import "../CSS/About.css"
import Aos from "aos"
import "aos/dist/aos.css"

const About = () => {
  // UseEffect Animation on scroll
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: "ease" })
  }, [])

  return (
    <Fragment>
      <section className="about">
        <div className="about-row">
          <div data-aos="fade-right" className="about-column">
            <div className="about-pic">
              <img src={Person} alt="Person" />
            </div>
          </div>

          <div data-aos="fade-left" className="about-column">
            <div className="about-text">
              <div className="title">
                <span>About our company</span>
                <h2>Better life for everyone</h2>
              </div>
              <p>
                The mysterious diary records the voice.The tour bus was packed
                with teenage girls heading toward their next adventure.The
                external scars tell only part of the story.The three-year-old
                girl ran down the beach as the kite flew behind her.
              </p>
              <a href="#" className="learn-btn">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default About
