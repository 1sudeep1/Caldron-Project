import React from 'react'
import "./top.scss"
import { Link } from 'react-router-dom'
function Top() {
    return (
        <>
            <section className='bg-dark top-section'>
                <div className="container">
                    <div className="row align-items-center py-1 justify-content-between top">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <span className='text-white'><a href="tel:+977-1- 4373508">+977-1- 4373508</a>, <a href="tel:+977-1- 4378589">+977-1- 4378589</a> </span>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className='d-flex gap-3 justify-content-end text-end'>
                                <Link to="/information">Delivery Information</Link>
                                <Link to="/information">Privacy Policy</Link>
                                <Link to="/information">Terms and Conditions</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-12 s-icon">
                            <div className='d-flex gap-3 justify-content-end text-end text-white social-icon'>
                                <Link to='https://www.facebook.com/cgnpl' target='_blank' title='Facebook'><i className=" fa-brands fa-facebook-f"></i></Link>
                                <Link to=''><i className=" fa-brands fa-twitter" target='_blank' title='Twitter'></i></Link>
                                <Link to=''><i className=" fa-brands fa-google-plus-g" target='_blank' title='Google Plus'></i></Link>
                                <Link to=''><i className="fa-brands fa-instagram" target='_blank' title='Instagram'></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Top
