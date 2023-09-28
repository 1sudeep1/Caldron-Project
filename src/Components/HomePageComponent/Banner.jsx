import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import sliderData from '../../Data/sliderData';
import "./banner.scss"
function Banner() {
    const slider = {
        items: 1,
        nav: true,
        dots: false,
        autoplay: true
    }
    return (
        <>
            <section className='banner bg-light'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <OwlCarousel className='owl-theme' loop margin={10} {...slider}>
                                {sliderData.map((a) => (
                                    <div className='item' key={a.id}>
                                        <img className='w-100 img-fluid' src={a.sliderImg} alt="" />
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
