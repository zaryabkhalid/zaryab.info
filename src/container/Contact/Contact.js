import React, { useRef } from "react"
import "./Contact.css"
import { AppContainer, Wrap } from "../../components"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify"
import contactImg from "../../assests/images/contact.png"

const Contact = () => {
  const form = useRef()

  const formSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success(`Email Send: ${result.text}`, {
            position: "top-center",
          })
        },
        (error) => {
          toast.error(`Email Send: ${error.text}`, {
            position: "top-center",
          })
        }
      )
  }

  return (
    <div id="Contact">
      <AppContainer>
        <Wrap heading="Contact Me">
          <section className="contact-form">
            <form onSubmit={formSubmit} ref={form} className="form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter Your name"
                  required
                  name="user_name"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="Email"
                  placeholder="Enter Your Email"
                  required
                  name="user_email"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  type="textarea"
                  placeholder="Your Message"
                  name="message"
                  rows={10}
                />
              </div>

              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>

            <div className="contact-image">
              <img src={contactImg} alt="contact" />
            </div>
          </section>
          <ToastContainer />
        </Wrap>
      </AppContainer>
    </div>
  )
}

export default Contact
