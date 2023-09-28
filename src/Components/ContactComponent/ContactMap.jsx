import React from 'react'
import Iframe from 'react-iframe'
function ContactMap() {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <h4 className='mb-4 fw-bold text-uppercase'>Find us on Map</h4>
                    <Iframe url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.012779767882!2d85.34188247461425!3d27.74775182370981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194df9aa4eff%3A0xaf4b9c99b44bebb5!2sCaldron%20Graphics%20Nepal%2C%20Apex%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1694759389915!5m2!1sen!2snp' className='w-100' height='500px' display="block" position="relative"></Iframe>
                </div>
            </section>

        </>
    )
}

export default ContactMap
