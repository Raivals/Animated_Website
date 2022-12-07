import React, { Fragment } from "react"
import "../CSS/Navbar.css"

const Navbar = () => {
  return (
    <Fragment>
      <section className="res-navbar">
        <div className="top-area">
          <div className="nav-row">
            <div className="column">
              <div className="social-icon">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-pinterest"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div className="column">
              <div className="info">
                <i className="fa-solid fa-phone"></i>
                <span>+2 292 2088 234</span>
              </div>

              <div className="info">
                <i className="fa-solid fa-envelope"></i>
                <span>office@example.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-nav">
          <div className="bottom-row">
            <a href="/">
              <h1>
                Learn <span>Dev</span>
              </h1>
            </a>
            <ul className="menu" id="menu">
              <li>
                <a href="/"> Home </a>
              </li>
              <li>
                <a href="#"> Blog </a>
              </li>
              <li>
                <a href="#"> About </a>
              </li>
              <li>
                <a href="#"> Services </a>
              </li>
              <li>
                <a href="#"> Contact </a>
              </li>
            </ul>
          </div>
          <div className="nav-border"></div>
        </div>
      </section>
    </Fragment>
  )
}

export default Navbar
