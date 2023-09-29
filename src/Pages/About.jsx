import React from 'react'
import ContactBanner from '../Components/ContactComponent/ContactBanner'
import AboutBanner from '../Components/AboutPageComponent/AboutBanner'
import OurAchievement from '../Components/AboutPageComponent/OurAchievement'
import CorevalueProgress from '../Components/AboutPageComponent/CorevalueProgress'
function About() {
    return (
        <>
            <ContactBanner bannerTitle="About Us" />
            <AboutBanner />
            <OurAchievement/>
            <CorevalueProgress/>
        </>
    )
}

export default About
