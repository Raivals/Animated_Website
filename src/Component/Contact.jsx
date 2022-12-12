import React, { Fragment } from "react"
import "../CSS/Contact.css"

const Contact = () => {
  return (
    <Fragment>
      <section className="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528002261!2d-74.1444870958112!3d40.69763123327531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20%C3%89tat%20de%20New%20York%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sfr!4v1670841207765!5m2!1sfr!2sfr"
          width="800"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="map">
          <div className="address">
            <h3>Address</h3>
            <div className="address-info">
              <ul>
                <li> 20 W 34th St., New York, NY 10001, USA</li>
                <li> +2 292 2088 234 </li>
                <li className="Email"> office@example.com</li>
                <li> Mon - Fri: 9:00 - 19:00</li>
                <li> Closed on Weekend</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Contact
