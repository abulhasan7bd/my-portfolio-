import React from "react";
import "../styles/pages/Contact.css";
import contact from "../assets/contact.png";
const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content">
          <h1 className="section-title">Contact Me 
          <i class="ri-arrow-right-line"></i>
          </h1>
          <div className="contact-info">
            <div className="contact-left">
              <form>
                <div>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Email address" required />
                </div>
                <textarea
                  placeholder="Write Message Here.."
                  cols="30"
                  rows="10"
                  required
                ></textarea>
                <button type="submit" class="contact_button">
                  Send
                </button>
              </form>
            </div>
            <div className="contact-right">
              <img src={`${contact}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
