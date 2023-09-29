import React, { useState } from 'react'
import Iframe from 'react-iframe'
import "./whatweare.scss"
import coreValueData from '../../Data/CoreValueData';
function WhatWeAre() {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (id) => {
        setActiveTab(id);
    };
    return (
        <>
            <section className='our-achievement mt-5'>
                <div className="container py-5">
                    <div className="row justify-content-between row-gap-4">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <h4 className='text-uppercase fw-bold mb-4'>WHAT WE ARE?</h4>
                            <div>
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    {coreValueData.map(a => (
                                        <li className="nav-item" role="presentation" key={a.id}>
                                            <button className={`nav-link ${a.id === activeTab ? "active" : ""}`} onClick={() => handleTabClick(a.id)}>
                                            <i className={a.coreValueDataIcon}></i> {a.coreValueDataTitle}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <div className="tab-content">
                                    {coreValueData.map(a => (
                                        <div className={`tab-pane fade ${a.id === activeTab ? "show active" : ""
                                            }`} key={a.id}>
                                            <p>{a.coreValueDataContent}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <h4 className='text-uppercase fw-bold mb-4'>Facebook Page</h4>
                            <Iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcgnpl&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=281586187730480" width="100%" height='400px' style="border:none;overflow:hidden;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></Iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatWeAre
