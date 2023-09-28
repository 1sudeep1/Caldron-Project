import React from 'react'
import "./footer.scss"
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'
import logo from "/src/assets/logo.jpg"
function Footer() {
  return (
    <>
      <footer>
        <div className="container py-5">
          <div className="row justify-content-center row-gap-4">
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <Link to="/"><img style={{ maxWidth: '100%', maxHeight: '30%' }} src={logo} alt="" title='CALDRON GRAPHICS NEPAL (P.) LTD.' /></Link>
              <div className="mt-3">
                <p>Welcome to Caldron Graphics Nepal Pvt. Ltd.- leading players of Nepal’s signage
                  industry.</p>
                <div className='d-flex gap-3'>
                  <p>MON - FRI :</p> <p>9AM - 9PM</p>
                </div>
                <div className='d-flex gap-3'>
                  <p>SAT :</p> <p>9AM - 3PM</p>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <h4>Contact</h4>
              <div className='d-flex align-items-center gap-2 mt-4'>
                <i className="fa-solid fa-phone"></i>
                <Link to="tel:	+977-1- 4373508">	+977-1- 4373508</Link>
              </div>
              <div className='d-flex align-items-center gap-2 my-3'>
                <i className="fa-solid fa-envelope"></i>
                <Link to="mailto:info@caldrongraphics.com.np">info@caldrongraphics.com.np</Link>
              </div>
              <div className='d-flex align-items-center gap-2 my-3'>
                <i className="fa-solid fa-location-dot"></i>
                <span>	Bansbari, Kathmandu-3</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <h4>Quick Links</h4>
              <div className='d-flex flex-column gap-3 mt-4'>
                <Link to="/information">Delivery Information</Link>
                <Link to="/information">Privacy Policy</Link>
                <Link to="/information">Terms and Conditions</Link>
                <Link to="/about">About Caldron</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <h4>Map</h4>
              <Iframe url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.012779767882!2d85.34188247461425!3d27.74775182370981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194df9aa4eff%3A0xaf4b9c99b44bebb5!2sCaldron%20Graphics%20Nepal%2C%20Apex%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1694759389915!5m2!1sen!2snp' className='w-100' display="block" position="relative"></Iframe>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
