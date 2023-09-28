import React from 'react'
import "./ourContactInformation.scss"
import OurContactInformationData from '../../Data/OurContactInformationData'
function OurContactInformation() {
    return (
        <>
            <section className='direct-contact py-5'>
                <div className="container">
                    <h4 className='mb-4 fw-bold text-uppercase'>Our Contact and Informations</h4>
                    <div className="row justify-content-between row-gap-4">
                        {OurContactInformationData.map((a)=>(
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12" key={a.id}>
                            <h4 className='mb-4 fw-bold text-uppercase'>{a.ourContactName}</h4>
                            <div className='d-flex align-items-center gap-2 mt-4'>
                                <i className={a.ourContactPhoneIcon}></i>
                                <a href={`tel:${a.ourContactNumber}`}>{a.ourContactNumber}</a>
                                <a href={`tel:${a.ourContactNumber1}`}>{a.ourContactNumber1}</a>
                            </div>
                            <div className='d-flex align-items-center gap-2 my-3'>
                                <i className={a.ourContactEmailIcon}></i>
                                <a href={`mailto:${a.ourContactEmail}`}>{a.ourContactEmail}</a>
                            </div>
                            <div className='d-flex align-items-center gap-2 my-3'>
                                <i className={a.ourContactAddressIcon}></i>
                                <span>{a.ourContactAddress}</span>
                            </div>
                            <div className='d-flex align-items-center gap-2 my-3'>
                                <i className={a.ourContactSkypeIcon}></i>
                                <span>{a.ourContactSkype}</span>
                            </div>
                            <div className='d-flex align-items-center gap-2 mt-4'>
                                <i className={a.ourContactWeChatIcon}></i>
                                <a href={`tel:${a.ourContactNumber}`}>{a.ourContactNumber}</a>
                                <a href={`tel:${a.ourContactNumber1}`}>{a.ourContactNumber1}</a>
                            </div>
                            <div className='d-flex align-items-center gap-2 my-3'>
                                <i className={a.ourContactWeChatIcon}></i>
                                <span>{a.ourContactWechat}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurContactInformation
