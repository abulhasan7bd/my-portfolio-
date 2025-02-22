import React from "react";
import "../styles/pages/Contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content">
          <h1 className="section-title">Contact Me</h1>
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
              <img
                src="https://img.freepik.com/premium-vector/automated-mail-service-with-ai-digital-helpdesk-support-robot-from-open-envelope_1135642-348.jpg?uid=R90026751&ga=GA1.1.1322734213.1735572178&semt=ais_hybrid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
