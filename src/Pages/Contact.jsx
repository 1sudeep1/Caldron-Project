import React from 'react'
import ContactBanner from '../Components/ContactComponent/ContactBanner'
import ContactForm from '../Components/ContactComponent/ContactForm'
import ContactMap from '../Components/ContactComponent/ContactMap'
import OurContactInformation from '../Components/ContactComponent/OurContactInformation'

function Contact() {
  return (
    <>
      <ContactBanner bannerTitle='Contact Us'/>
      <ContactForm/>
      <ContactMap/>
      <OurContactInformation/>
    </>
  )
}

export default Contact
