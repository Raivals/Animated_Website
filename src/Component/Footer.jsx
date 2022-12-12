import React, { Fragment } from "react"
import "../CSS/Footer.css"
const Footer = () => {
  return (
    <Fragment>
      <section className="footer">
        <div className="footer-top">
          <div className="footer-row">
            <div className="footer-column">
              <div className="column-content">
                <h2>
                  Learn<span>Dev</span>
                </h2>
                <p>She was too short to see over the fence.</p>
                <ul className="footer-link">
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-column">
              <div className="column-content">
                <h2>Services</h2>
                <ul>
                  <li>
                    <a href="#">
                      <span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                      </span>
                      Classic
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                      </span>
                      Professional
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                      </span>
                      Premium
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                      </span>
                      Personal
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-column">
              <div className="column-content">
                <h2>Company</h2>
                <ul>
                  <li>
                    <a href="#">
                      <span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                      </span>
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                      </span>
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                      </span>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                      </span>
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-column">
              <div className="column-content">
                <h2>Have a Question ?</h2>
                <ul>
                  <li className="list">
                    <span className="footer-icon">
                      <i class="fa-solid fa-location-dot"></i>
                    </span>
                    <span className="txt">
                      20 W 34th St., New York, NY 10001, USA
                    </span>
                  </li>
                  <li className="list">
                    <span className="footer-icon">
                      <i class="fa-solid fa-phone"></i>
                    </span>
                    <span className="txt number">+2 292 2088 234</span>
                  </li>
                  <li className="list">
                    <span className="footer-icon">
                      <i class="fa-solid fa-envelope"></i>
                    </span>
                    <span className="txt email">office@example.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-2">
          <div className="container-2">
            <p>
              Copyright @2022 All rights reserved by Learn<span>Dev</span>
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Footer
