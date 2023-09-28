import React from 'react'
import "./contactBanner.scss"
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function ContactBanner(props) {
    return (
        <>
            <section className='contact-banner position-relative'>
                <img className='w-100 img-fluid' src="https://img.freepik.com/free-photo/modern-printing-press-produces-multi-colored-printouts-accurately-generated-by-ai_188544-15381.jpg" alt="" />
                <div className='dark position-absolute'></div>
                <div className='position-absolute bread-crumb d-flex flex-column align-items-center justify-content-center row-gap-2'>
                <h2 className='text-uppercase fw-bold'>{props.bannerTitle}</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>{props.bannerTitle}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </section>
        </>
    )
}

export default ContactBanner
