import React from 'react'
import serviceBanner from '../../Data/serviceBannerData';

function ServiceBanner() {
    return (
        <>
            <section className='about-section py-5'>
                <div className="container py-3">
                    <div className="row row-gap-4">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center">
                            <img className='w-75 img-fluid img-thumbnails' src="/images/about-banner.jpg" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            {serviceBanner.map(a => (
                                <div className='d-flex gap-3 my-3' key={a.id}>
                                    <i className={`fs-1 ${a.serviceBannerIcon} text-danger`}></i>
                                    <div>
                                        <h5 className='fw-bold'>{a.serviceBannerTitle}</h5>
                                        <p className='text-left' >{a.serviceBannerContent}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>                   
                </div>
            </section>
        </>
    )
}

export default ServiceBanner
