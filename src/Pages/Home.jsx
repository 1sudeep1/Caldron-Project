import React, { useRef } from 'react'
import Banner from '../Components/HomePageComponent/Banner';
import HomeService from '../Components/HomePageComponent/HomeService';
import DifferentAccessories from '../Components/HomePageComponent/DifferentAccessories';
import Inks from '../Components/HomePageComponent/Inks';
import LaserRouters from '../Components/HomePageComponent/LaserRouters';
import Printers from '../Components/HomePageComponent/Printers';
import WhatWeAre from '../Components/HomePageComponent/WhatWeAre';
import WhyUs from '../Components/HomePageComponent/WhyUs';
function Home() {
    return (
        <>  
            <Banner />
            <HomeService/>
            <DifferentAccessories/>
            <Inks/>
            <LaserRouters/>
            <Printers/>
            <WhatWeAre/>
            <WhyUs/>
        </>
    )
}

export default Home
