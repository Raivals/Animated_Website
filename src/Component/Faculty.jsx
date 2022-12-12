import React, { Fragment } from "react"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import "../CSS/Faculty.css"

const Faculty = () => {
  return (
    <Fragment>
      <section className="faculty">
        <div className="container">
          <OwlCarousel
            className="owl-theme"
            items={1}
            loop={8}
            autoPlay={false}
          >
            <div className="owl-container">
              <div className="owl-text">
                <p>
                  The rain pelted the windshield as the darkness engulfed us.You
                  can't compare apples and oranges, but what about bananas and
                  plantains?
                </p>

                <div className="comp-info">
                  <h4>Robert Jonson</h4>
                  <span>Company Owner</span>
                </div>
              </div>
            </div>

            <div className="owl-container">
              <div className="owl-text">
                <p>
                  The rain pelted the windshield as the darkness engulfed us.You
                  can't compare apples and oranges, but what about bananas and
                  plantains?
                </p>

                <div className="comp-info">
                  <h4>Tom Hardy</h4>
                  <span>Director</span>
                </div>
              </div>
            </div>

            <div className="owl-container">
              <div className="owl-text">
                <p>
                  The rain pelted the windshield as the darkness engulfed us.You
                  can't compare apples and oranges, but what about bananas and
                  plantains?
                </p>

                <div className="comp-info">
                  <h4>Tony Stark</h4>
                  <span>Manager</span>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </Fragment>
  )
}

export default Faculty
