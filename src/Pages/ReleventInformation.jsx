import React from 'react'
import ContactBanner from '../Components/ContactComponent/ContactBanner'
import ServiceBanner from '../Components/ServicePageComponent/ServiceBanner'
import Information from '../Components/ReleventInformationComponent/Information'

function ReleventInformation() {
    return (
        <>
            <ContactBanner bannerTitle='Relevent Information'/>
            <ServiceBanner/>
            <Information/>
        </>
    )
}

export default ReleventInformation
