import React from 'react'
import "./whatweare.scss"
import whatweareData from '../../Data/whatweareData'
import { Link } from 'react-router-dom'
function WhatWeAre() {
    return (
        <>
            <section className='whatweare-section py-5'>
                <div className="container">
                    <h4 className='fw-bold my-5 what-title'>What We Are?</h4>
                    <div className="row">
                        {whatweareData.map((a) => (
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12" key={a.id}>
                                <div className='we-are-box p-4 text-center'>
                                    <img className='w-100 img-fluid img-thumbnails' src={a.whatweareImg} alt="" />
                                    <h4 className='mt-4 fw-semibold'>{a.whatweareTitle}</h4>
                                </div>
                                <p className='fs-6 p-4 we-are-box-content'>{a.whatweareContent}</p>

                            </div>
                        ))}
                    </div>
                       <button className='readmore-button what-title1 p-2 d-flex align-items-center gap-3 my-3'><Link to="/about">Read More <i className="fa-solid fa-arrow-right"></i></Link></button>
                </div>
            </section>
        </>
    )
}

export default WhatWeAre
