import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./differentaccessories.scss"
import accessoriesData from '../../Data/accessoriesData';
import { Link } from 'react-router-dom';
function DifferentAccessories() {
    const slider = {
        items: 5,
        nav: true,
        dots: false,
        margin: 5,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop:true,
            },
            600: {
                items: 3,
                nav: true,
                loop:true
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    }
    return (
        <>
            <section className='py-5 bg-light'>
                <div className="container">
                    <h4 className='fw-bold my-5 what-title'>Roll and Acrylic Sheets</h4>
                    <OwlCarousel className='owl-theme px-2' {...slider}>
                        {accessoriesData.map((a) => (
                            <div className='product-box text-center d-flex flex-column align-items-center' key={a.id}>
                                <div className='position-relative product-img-div'>
                                    <Link to={`/single-product/${a.id}`}><img className='product-img img-fluid img-thumbnails' src={a.productImg} alt="" /></Link>
                                    <Link to={`/single-product/${a.id}`}><button className='cart-btn position-absolute fw-bold'><i className="fa-solid fa-eye"></i></button></Link>
                                </div>

                                <Link to={`/single-product/${a.id}`}><h5 className='fs-6 my-2 fw-semibold '>{a.productTitle}</h5></Link>
                                <ul className='p-0 d-flex gap-1'>
                                    <li><i className="fa-regular fa-star"></i></li>
                                    <li><i className="fa-regular fa-star"></i></li>
                                    <li><i className="fa-regular fa-star"></i></li>
                                    <li><i className="fa-regular fa-star"></i></li>
                                    <li><i className="fa-regular fa-star"></i></li>
                                </ul>
                                <Link to={`/single-product/${a.id}`}><p className='fs-6 text-danger'>Price: Rs. {a.productPrice}</p></Link>
                                <div className='border-top'></div>
                                <div className='border-right'></div>
                                <div className='border-bottom'></div>
                                <div className='border-left'></div>
                            </div>
                        ))}
                    </OwlCarousel>
                    <button className='readmore-button what-title1 p-2 d-flex align-items-center gap-3 my-3'><Link to="/accessories">View More <i className="fa-solid fa-arrow-right"></i></Link></button>
                </div>
            </section>
        </>
    )
}

export default DifferentAccessories
