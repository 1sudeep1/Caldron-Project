import React from 'react'
import inksData from '../../Data/inksData'
import { Link } from 'react-router-dom'

function Inks() {
    return (
        <>
            <section className='py-5 bg-light'>
                <div className="container">
                    <h4 className='fw-bold my-5 what-title'>Inks</h4>
                    <div className="row row-gap-4">
                        {inksData.map((a) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12" key={a.id}>
                                <div className='product-box text-center d-flex flex-column align-items-center '>
                                    <div className='position-relative product-img-div'>
                                        <Link to={`/single-product/${a.id}`}><img className='product-img img-fluid img-thumbnails' src={a.productImg} alt="" /></Link>
                                        <Link to={`/single-product/${a.id}`}><button className='cart-btn position-absolute fw-bold'><i className="fa-solid fa-eye"></i></button></Link>
                                    </div>

                                    <Link to={`/single-product/${a.id}`}><h5 className='fs-6 my-2 fw-semibold '>{a.productTitle}</h5></Link>
                                    <ul className='p-0 d-flex gap-1'>
                                        <li><i className="fa-regular fa-star"></i></li>
                                        <li><i className="fa-regular fa-star"></i></li>
                                        <li><i className="fa-regular fa-star"></i></li>
                                        <li><i className="fa-regular fa-star"></i></li>
                                        <li><i className="fa-regular fa-star"></i></li>
                                    </ul>
                                    <Link to={`/single-product/${a.id}`}><p className='fs-6 text-danger'>Price: Rs. {a.productPrice}</p></Link>
                                    <div className='border-top'></div>
                                    <div className='border-right'></div>
                                    <div className='border-bottom'></div>
                                    <div className='border-left'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Inks
