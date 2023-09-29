import React from 'react'
import ServiceBanner from '../Components/ServicePageComponent/ServiceBanner'
import WhatWeAre from '../Components/ServicePageComponent/WhatWeAre'
import ContactBanner from '../Components/ContactComponent/ContactBanner'

function Services() {
  return (
    <div>
      <ContactBanner bannerTitle='What we Are'/>
      <ServiceBanner/>
      <WhatWeAre/>
    </div>
  )
}

export default Services
