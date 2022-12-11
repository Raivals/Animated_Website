import React, { Fragment } from "react"
import user1 from "../Images/girl.png"
import user2 from "../Images/men2.png"
import user3 from "../Images/men3.png"
import "../CSS/Testimonial.css"
import Carousel from "react-material-ui-carousel"

const Testimonial = () => {
  return (
    <Fragment>
      <section className="testimonial">
        <div className="testimonial-heading">
          <h2>Client Testimonial</h2>
        </div>

        <div className="testimonial-row">
          <Carousel>
            <div className="testimonial-column">
              <div className="testimonial-caption">
                <p>
                  He went on a whiskey diet and immediately lost three days.This
                  book is sure to liquefy your brain.
                </p>
              </div>
              <div className="user-detail">
                <div className="user-img">
                  <img src={user1} alt="user1" />
                </div>
                <div className="user-name">
                  <span>Hana Jhon</span>
                </div>
              </div>
            </div>

            <div className="testimonial-column">
              <div className="testimonial-caption">
                <p>
                  He went on a whiskey diet and immediately lost three days.This
                  book is sure to liquefy your brain.
                </p>
              </div>
              <div className="user-detail">
                <div className="user-img">
                  <img src={user2} alt="user2" />
                </div>
                <div className="user-name">
                  <span>Tim David</span>
                </div>
              </div>
            </div>

            <div className="testimonial-column">
              <div className="testimonial-caption">
                <p>
                  He went on a whiskey diet and immediately lost three days.This
                  book is sure to liquefy your brain.
                </p>
              </div>
              <div className="user-detail">
                <div className="user-img">
                  <img src={user3} alt="user3" />
                </div>
                <div className="user-name">
                  <span>Tom Hardy</span>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </Fragment>
  )
}

export default Testimonial
