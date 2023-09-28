import React from 'react'
import "./contactForm.scss"
import coreValueData from '../../Data/CoreValueData'
import { Link } from 'react-router-dom'
function ContactForm() {
    return (
        <>
            <section className='py-5 contact-us'>
                <div className="container">
                    <form action="" method=''>
                        <div className="row justify-content-between row-gap-4">
                            <div className="col-lg-6 fs-5 col-md-12 col-sm-12 col-12">
                                <h4 className='mb-4 fw-bold text-uppercase '>CONTACT US</h4>
                                <div className='d-flex flex-column row-gap-3'>
                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <div className='d-flex gap-3 my-2'>
                                        
                                            <input className='form-control' type="text" name='fName' id='name' placeholder='First Name' required />
                                            <input className='form-control' type="text" name='lName' id='name' placeholder='Last Name' required />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <div className='d-flex gap-3 my-2'>
                                            <input className='form-control' type="email" name='email' id='email' placeholder='Email' required />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message">Your Inquery</label>
                                        <div className='d-flex gap-3 my-2'>
                                            <textarea className='form-control' name="" id="message" cols="60" rows="8" placeholder='Your message...'>
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                    <button className='readmore-button  what-title1 fs-6 d-flex align-items-center gap-2 text-white' type='submit'>Send Message <i className="fa-solid fa-arrow-right"></i></button>
                            </div>

                            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                <h4 className='text-uppercase fw-bold mb-4'>FREQUENTLY ASKED QUESTIONS!</h4>
                                <div className="accordion" id="accordionExample">
                                    {coreValueData.map((a) => (
                                        <div className="accordion-item" key={a.id}>
                                            <h2 className="accordion-header">
                                                <button className={`accordion-button ${a.coreValueDataCollaspsed}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${a.coreValueDataId}`} aria-expanded={a.coreValueDataAreaExpand} aria-controls={a.coreValueDataId}>
                                                    <strong className='d-flex gap-3 align-items-center'><i className={a.coreValueDataIcon}></i> {a.coreValueDataTitle}</strong>
                                                </button>
                                            </h2>
                                            <div id={a.coreValueDataId} className={`accordion-collapse collapse ${a.coreValueDatashow}`} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>{a.coreValueDataContent}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Link to='/all-products'><button className='readmore-button text-white what-title1 fs-6 d-flex align-items-center my-4'>View Our Products<i className="fa-solid fa-arrow-right"></i></button></Link>
                            </div>
                        </div>
                    </form>
                </div >
            </section >
        </>
    )
}

export default ContactForm
