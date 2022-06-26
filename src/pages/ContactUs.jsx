import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../assets/styles/contact.css'
import ContactInput from '../components/ContactInput'
import HeaderButton from '../components/HeaderButton'

import callUs from '../assets/images/call-us.png'
import supportUs from '../assets/images/support-us.png'
import emailUs from '../assets/images/email-us.png'
import ContactCard from '../components/ContactCard'

const ContactUs = () => {
  return (
    <div className="contact_page">
      <div className="contact_form_outside_wrapper">
        <div className="cliped_bg"></div>
        <Container>
          <div className="contact_us_container">
            <h3 className="heading">Contact our sales team</h3>
            <p className="description">
              If you need our help, have questions about how to use the platform
              or are experiencing
              <br />
              technical difficulties, please do not hesitate to contact us.
            </p>

            <div className="contactform">
              <Row className="g-2 gy-4">
                <ContactInput label="Your name*" placeholder="Julia William" />
                <ContactInput
                  label="Contact email *"
                  placeholder="you@example.com"
                />
                <ContactInput
                  label="Company name*"
                  placeholder="Company name"
                />
                <ContactInput label="Country*" placeholder="Indonesia" />
                <ContactInput
                  label="Your message*"
                  placeholder="Type your message…"
                />
              </Row>

              <p className="agreement_heading">
                By submitting this form you agree to our terms and conditions
                and our Privacy Policy which explains how we may collect, use
                and disclose your personal information including to third
                parties.
              </p>

              <div style={{ width: '200px', textAlign: 'center' }}>
                <HeaderButton color="#FFFFFF" bg="#F9B233" title="Submit" />
              </div>
            </div>
          </div>

          <div className="contact_card_container">
            <Row className="g-2 align-items-center">
              <ContactCard
                img={emailUs}
                title="Email us"
                des="Email us for general queries, including marketing and partnership opportunities."
                callToAction="hello@helpcenter.com"
              />
              <ContactCard
                img={callUs}
                title="Call us"
                des="Call us to speak to a member of our team. We are always happy to help."
                callToAction="+1 (646) 786-5060"
              />
              <ContactCard
                img={supportUs}
                title="Support"
                des="Check out helpful resources, FAQs and developer tools."
                callToAction="Support Center"
              />
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ContactUs
