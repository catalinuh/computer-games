import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import './contact.scss'

export default function Contact() {
  return (
    <div className="contact">
      <div>
        <h4>Send a Message</h4>
        <form
          action="https://formspree.io/f/mleznlzz"
          method="POST"
          className="contact__form"
        >
          <div className="contact__form--field">
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" placeholder="Your Name" type="text" />
          </div>

          <div className="contact__form--field">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              placeholder="Your Email"
              type="email"
            />
          </div>

          <div className="contact__form--field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              placeholder="Subject"
              type="text"
            />
          </div>

          <div className="contact__form--field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={5}
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div>
        <h4>Get in Touch</h4>
        <p>
          Whether you want to get in touch, talk about a project collaboration,
          or just say hi, I'd love to hear from you. Simply fill out the form
          and send me an email. I'll do my best to get back to you as soon as
          possible!
        </p>
        <p>
          Alternatively, you can also connect with me on LinkedIn. Looking
          forward to connecting with you!
        </p>

        <div className="contact__icons">
          <button
            className="contact__icons--btn"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/catalina-mcquade/',
                '_blank'
              )
            }
            // for mobile
            onTouchEndCapture={() =>
              window.open(
                'https://www.linkedin.com/in/catalina-mcquade/',
                '_blank'
              )
            }
          >
            <LinkedInIcon />
          </button>
          <button
            className="contact__icons--btn"
            onClick={() =>
              window.open('https://github.com/catalinuh', '_blank')
            }
            // for mobile
            onTouchEndCapture={() =>
              window.open('https://github.com/catalinuh', '_blank')
            }
          >
            <GitHubIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
