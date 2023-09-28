import React from 'react'
import "./footerbottom.scss"
import { Link } from 'react-router-dom'
function FooterBottom() {
    return (
        <>
            <section className='footer-bottom'>
                <div className="container">
                    <div className="row align-items-center justify-content-between bottom-footer">
                        <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                            <p className='pt-3'>Copyright 2023 <Link to="https://radiantnepal.com/" target='_blank' title='Radiant Info Tech Nepal'>@Radiant Infotech </Link>| All Rights Reserved</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className='d-flex gap-4 justify-content-end text-end text-white social-icon fs-6'>
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

export default FooterBottom
