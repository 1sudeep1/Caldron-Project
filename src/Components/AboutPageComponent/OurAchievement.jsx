import React from 'react'
import "./ourAchievement.scss"
import companyAttributeData from '../../Data/companyAttributeData'
import { Link } from 'react-router-dom'
function OurAchievement() {
  return (
    <>
      <section className='our-achievement'>
        <div className="container py-5">
          <div className="row justify-content-between row-gap-4">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <h4 className='text-uppercase fw-bold mb-4'>Our Achievements</h4>
              <p className='fs-6 text-start'>The company has been registered with the objective to harmonize the advertisement and distribution system through Digital Printing technology and production facilities.</p>
              <div className="row row-gap-4">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className='d-flex flex-column align-items-center'>
                    <div className="progress-bar crn-achivement fw-bold fs-5">
                    </div>
                    <p className='fs-5 fw-regular'>Research and Development</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className='d-flex flex-column align-items-center'>
                    <div className="progress-bar crn-achivement1 fw-bold fs-5">
                    </div>
                    <p className='fs-5 fw-regular'>Industry Experience</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className='d-flex flex-column align-items-center'>
                    <div className="progress-bar crn-achivement2 fw-bold fs-5">
                    </div>
                    <p className='fs-5 fw-regular'>Quality Control</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className='d-flex flex-column align-items-center'>
                    <div className="progress-bar crn-achivement3 fw-bold fs-5">
                    </div>
                    <p className='fs-5 fw-regular'>Sales & Supply</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <h4 className='text-uppercase fw-bold mb-4'>COMPANY'S ATTRIBUTES</h4>
              {companyAttributeData.map(a => (
                <div className='d-flex align-items-center gap-2 fs-6 my-4' key={a.id}>
                  <i className="fa-solid fa-circle-arrow-right text-danger"></i><p className='m-0'>{a.companyAttributeTitle}</p>
                </div>
              ))}
              <Link to='/contact'><button className='readmore-button what-title1 fs-6 d-flex align-items-center gap-3 mt-5'>Request Service<i className="fa-solid fa-arrow-right"></i></button></Link>

            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default OurAchievement
