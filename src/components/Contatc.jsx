  import React from "react";
  import "./Contatc.css";

  const Contact = () => {
    return (
      <section className="contact" id="contact">
        <div className="contact-wrapper">
          <div className="contact-form-card">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtext">
              We’d love to hear from you. Reach out for inquiries, custom orders or
              partnership opportunities.
            </p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
              </div>

              <textarea name="message" rows="6" placeholder="Your Message" required />

              <div className="form-actions">
                <button type="submit" className="contact-btn">Send Message</button>
              </div>
            </form>
          </div>

          <aside className="contact-info-card" aria-label="Contact information">
            <div className="info-item">
              {/* If you have icons, replace the emoji with <img src={mailIcon} alt="" /> */}
              <div className="info-icon">📧</div>
              <div className="info-text">
                <h4>Email</h4>
                <a href="mailto:hello@kingsfurniture68@gmail.com">kingsfurniture68@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <h4>Call Us</h4>
                <a href="tel:+2348035059077">+234 803 505 9077</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>Visit Us</h4>
                <address>
                  30 Akinola Sholanke street Ajao Estate Adjacent Ajao Police Station off MMI Airport, Lagos
                </address>
              </div>
            </div>

            <div className="info-footer">
              <p>Mon — Fri: 9:00am — 6:00pm</p>
              <a className="whatsapp-link" href="https://wa.me/2348035059077" target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>
    );
  };

  export default Contact;