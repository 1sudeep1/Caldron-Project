import React from 'react'
import "./homeservice.scss"
import homeserviceData from '../../Data/homeServiceData'
function HomeService() {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row row-gap-3">
                        {homeserviceData.map((hsItem) => (
                            <div className="col-lg-3 col-md-12 col-sm-12 col-12" key={hsItem.id}>
                                <div className='flip-card ' style={{backgroundColor:`${hsItem.hsBackgroundColor}`}}>
                                    <div className='flip-card-inner text-center'>
                                        <div className='d-flex flex-column row-gap-2 flip-card-front align-items-center'>
                                            <i className={`fs-3 fa-solid ${hsItem.hsIcon}  bg-white flip-card-icon`} style={{color:`${hsItem.hsBackgroundColor}`}}></i>
                                            <h5 className='fw-bold'>{hsItem.hsTitle}</h5>
                                            <p>{hsItem.hsContentFront}</p>
                                        </div>
                                        <div className='d-flex flex-column text-center row-gap-2  home-service flip-card-back'>
                                            <p>{hsItem.hsContentBack}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeService
