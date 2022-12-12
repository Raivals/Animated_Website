import React, { Fragment, useEffect } from "react"
import user from "../Images/Desk.png"
import Aos from "aos"
import "aos/dist/aos.css"
import "../CSS/Work.css"

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: "ease" })
  }, [])
  return (
    <Fragment>
      <section className="work">
        <div className="work-heading">
          <h3>Our Recent Works</h3>
          <p> We understand the value and the importance of Business</p>
        </div>
        <div className="work-row">
          <div data-aos="fade-right" className="work-column">
            <div className="work-item">
              <div className="work-img">
                <img src={user} alt="user" />
              </div>
              <div className="work-text">
                <h3>
                  <a href="#"> Product Branding</a>
                </h3>
                <p>
                  A suit of armor provides excellent sun protection on hot days.
                  He would only survive if he kept the fire going and he could
                  hear thunder in the distance....
                </p>
                <a href="#" className="work-btn">
                  LEARN NOW
                </a>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="work-column">
            <div className="work-item">
              <div className="work-img">
                <img src={user} alt="user" />
              </div>
              <div className="work-text">
                <h3>
                  <a href="#"> Consultant Service</a>
                </h3>
                <p>
                  A suit of armor provides excellent sun protection on hot days.
                  He would only survive if he kept the fire going and he could
                  hear thunder in the distance....
                </p>
                <a className="work-btn" href="#">
                  LEARN NOW
                </a>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="work-column">
            <div className="work-item">
              <div className="work-img">
                <img src={user} alt="user" />
              </div>
              <div className="work-text">
                <h3>
                  <a href="#"> Management</a>
                </h3>
                <p>
                  A suit of armor provides excellent sun protection on hot days.
                  He would only survive if he kept the fire going and he could
                  hear thunder in the distance....
                </p>
                <a className="work-btn" href="#">
                  LEARN NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Work
