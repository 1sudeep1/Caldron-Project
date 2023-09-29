import React from 'react'
import '../Components/HomePageComponent/differentaccessories.scss'
import Accessories from '../Components/AllProducts/Accessories'
import Inks from '../Components/AllProducts/Inks'
import LaserRouters from '../Components/AllProducts/LaserRouters'
import Printers from '../Components/AllProducts/Printers'
function AllProducts() {
    return (
        <>
            <section>
                    <Accessories/>
                    <Inks/>
                    <LaserRouters/>
                    <Printers/>
            </section>
        </>
    )
}

export default AllProducts
