import React from 'react'
import aboutWhoWeAreData from '../../Data/aboutWhoWeAreData';
import './aboutBanner.scss';
import { Link } from 'react-router-dom';
function AboutBanner() {
    return (
        <>
            <section className='about-section py-5'>
                <div className="container py-3">
                    <div className="row row-gap-4">
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12 text-center">
                            <img className='w-75 img-fluid' src="/images/about-banner.jpg" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <h3 className='text-uppercase fw-bold '>Caldron Graphics Nepal</h3>
                            <p>Welcome to Caldron Graphics Nepal Pvt. Ltd.- leading players of Nepal’s signage industry for supply and operation of Signage machines, materials and latest outdoor and indoor advertising components and operated by the high class professionals with 10 years plus experience in this field.</p>
                            <p>Incepted in 2010, Caldron Graphics Nepal Pvt. Ltd is a cutting edge company established to cater the need of growing digital technology in country especially in the field of Digital Signage and equipments. The company is registered in the office of the company registrar of Nepal on 25March 2010 (Company registration number 71635/066/067). The Company’s registered address is Bansbari, Kathmandu-3 with Permanent Account Number (PAN) having 304220238 The company has been registered with the objective to harmonize the advertisement and distribution system through Digital Printing technology and production facilities.</p>
                        </div>
                    </div>

                    <div className="row py-5">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <h4 className='mb-4 fw-bold '>WHO WE ARE</h4>
                            {aboutWhoWeAreData.map(a => (
                                <div className='d-flex align-items-center gap-2 fs-6 my-3 who-we-are' key={a.id}>
                                    <i className="fa-solid fa-circle-arrow-right text-danger"></i><p className='m-0'>{a.aboutWhoWeAreTitle}</p>
                                </div>
                            ))}
                            <Link to='/all-products'><button className='readmore-button what-title1 fs-6 d-flex align-items-center gap-3'>View Our Products<i className="fa-solid fa-arrow-right"></i></button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutBanner
