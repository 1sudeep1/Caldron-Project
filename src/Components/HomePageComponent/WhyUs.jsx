import React from 'react'
import "./whyus.scss"
import whyUsData from '../../Data/whyusData'
import whyusData1 from '../../Data/whyusData1'
function WhyUs() {
    return (
        <>
            <section className='why-us py-5'>
                <div className="container">
                    <h4 className='fw-bold my-5 what-title'>Why Us?</h4>
                    <div className="row">
                        <div className="col-lg-8 col-md-6 col-sm-12 text-white">
                            <p>For over a decade Caldron Graphics Nepal has been providing services in sector of signage machines and related materials and services to the people of Nepal.
                                Developed nations around the world has prosper greatly in the field of printing by the help of printer companies like Crystal-Jet, Xenons and world renowned HP brand& which Caldron Graphics Nepal is the official distributor for our country. Since 2074we have added Toshiba Print-heads UV and Eco-solvent Printers and HP Brand Large Format Printers to our previous line of printers i.e. Xaar, Seiko ,EPSONPrint-heads technology.</p>
                            <p>To introduce latest and greatest technologies in signage Industry in Nepal our company is always dedicated to find best quality materials at reasonable price so that everyone could have access to signage based advertisement to boon their businesses. Beside Signage Industry related machines we also deal in Printing Medias, Inks, Display Items,Gift items, Promotional Items and Spare Parts. We also provide after sales maintenance service all over Nepal.</p>

                            <div className='row row-gap-3 justify-content-center'>
                                {whyUsData.map((a) => (
                                    <div className='col-lg-6 d-flex align-items-center gap-3' key={a.id}>
                                        <i className={`${a.whyusIcon} ${a.whyfontSize} bg-danger p-2`}></i>
                                        <span className='fs-5'>{a.whyusTitle}</span>
                                    </div>
                                ))}
                            </div>
                            <h5 className='my-5'>Our motto is “You Before Us”, Meaning we take our customers for highest importance and our team is dedicated to provide unmatched support to your needs.</h5>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="accordion" id="accordionExample">
                                {whyusData1.map((a) => (
                                    <div className="accordion-item" key={a.id}>
                                        <h2 className="accordion-header">
                                            <button className={`accordion-button ${a.whyusData1Collaspsed}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${a.whyusData1Id}`} aria-expanded={a.whyusData1AreaExpand} aria-controls={a.whyusData1Id}>
                                                <strong className='d-flex gap-3 align-items-center'><i className={a.whyusData1Icon}></i> {a.whyusData1Title}</strong>
                                            </button>
                                        </h2>
                                        <div id={a.whyusData1Id} className={`accordion-collapse collapse ${a.whyusData1show}`} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                {a.whyusData1Content.map((classification, index)=>(
                                                <p key={index}>{classification}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <img className='w-100 img-fluid img-thumbnails my-4' src="https://caldrongraphics.com.np/wp-content/uploads/2019/04/PowerfulDimInexpectatumpleco-small.gif" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs
