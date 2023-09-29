import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./singleProduct.scss"
import accessoriesData from '../Data/accessoriesData';
import inksData from '../Data/inksData';
import laserrouterData from '../Data/laserrouterData';
import printersData from '../Data/PrintersData';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Components/HomePageComponent/differentaccessories.scss'
import Iframe from 'react-iframe';
function SingleProduct() {
    let { sid } = useParams();

    const [currentProduct, setCurrentProduct] = useState('');
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        // Function to find the current product based on the 'sid' (product ID)
        const findCurrentProduct = () => {
            const allProducts = [...accessoriesData, ...inksData, ...laserrouterData, ...printersData];
            return allProducts.find((product) => product.id == sid);
        };
        // Find the current product
        const product = findCurrentProduct();
        setCurrentProduct(product);

        const findRelatedProducts = (catData) => {
            return catData.filter((product) => product.id !== sid)
        }
        let catData = [];
        if (accessoriesData.find((a) => a.id === parseInt(sid))) {
            catData = accessoriesData;
        } else if (inksData.find((a) => a.id === parseInt(sid))) {
            catData = inksData;
        } else if (laserrouterData.find((a) => a.id === parseInt(sid))) {
            catData = laserrouterData;
        } else if (printersData.find((a) => a.id === parseInt(sid))) {
            catData = printersData;
        }

        const related = findRelatedProducts(catData);
        setRelatedProducts(related);
    }, [sid])
    const slider = {
        items: 5,
        nav: true,
        dots: false,
        margin: 5,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true,
            },
            600: {
                items: 3,
                nav: true,
                loop: true
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    }
    return (
        <>
            <section className='single-product py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <img className='w-75 img-fluid text-center' src={currentProduct.productImg} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            {currentProduct && (
                                <div className='d-flex flex-column row-gap-2'>
                                    <h1>{currentProduct.productTitle}</h1>
                                    <ul className='p-0 d-flex gap-1'>
                                        <li><i className="fa-regular fa-star"></i></li>
                                        <li><i className="fa-regular fa-star"></i></li>
                                        <li><i className="fa-regular fa-star"></i></li>
                                        <li><i className="fa-regular fa-star"></i></li>
                                        <li><i className="fa-regular fa-star"></i></li>
                                    </ul>
                                    <p className='fs-4 text-primary'>Price: Rs. {currentProduct.productPrice}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {currentProduct && (
                        <div className="row py-5 px-2">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 features">
                                <div className='d-flex'>
                                    <h4>Features</h4>
                                </div>
                                <div>
                                    {currentProduct.productFeatures.map((classification, index) => (
                                        <p key={index} className='d-flex gap-2'> <i className="fa-solid fa-caret-right fs-4"></i>{classification}</p>
                                    ))}
                                </div>

                            </div>
                            <div className="col-lg-6 features col-md-12 col-sm-12 col-12">
                                <div className='d-flex'>
                                    <h4>Technical Specifications</h4>
                                </div>
                                {currentProduct.productSpecifications.map((classification, index) => (
                                    <p key={index} className='d-flex gap-2'><i className="fa-solid fa-caret-right fs-4"></i> {classification}</p>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className='form-section py-4'>
                        <form action="" method=''>
                            <div className="row justify-content-between row-gap-3">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 fs-5">
                                    <h4 className='mb-4 fw-bold text-uppercase '>Order Now</h4>
                                    <div className='d-flex flex-column row-gap-3'>
                                        <div>
                                            <label htmlFor="name">Name</label>
                                            <div className='d-flex gap-3 my-2'>
                                                <input className='form-control' type="text" name='fName' id='name' placeholder='First Name' required />
                                                <input className='form-control' type="text" name='lName' id='name' placeholder='Last Name' required />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="phone">Contact Number</label>
                                            <div className='d-flex gap-3 my-2'>
                                                <input className='form-control' type="number" name='phone' id='phone' placeholder='Phone Number' required />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <div className='d-flex gap-3 my-2'>
                                                <input className='form-control' type="email" name='email' id='email' placeholder='Email' required />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="address">Address</label>
                                            <div className='d-flex gap-3 my-2'>
                                                <input className='form-control' type="text" name='address' id='address' placeholder='Address' required />
                                            </div>
                                        </div>

                                        {/* <div className='d-flex gap-3'>
                                            <label htmlFor="rate">Your Rating</label>
                                            <select name="" id="">
                                                <option value="">1 Star</option>
                                                <option value="">2 Star</option>
                                                <option value="">3 Star</option>
                                                <option value="">4 Star</option>
                                                <option value="">5 Star</option>
                                            </select>
                                        </div> */}

                                        <div>
                                            <label htmlFor="inquery">Inquery</label>
                                            <div className='d-flex gap-3 my-2'>
                                                <textarea className='form-control' name="" id="inquery" cols="100" rows="5" placeholder='Your inquery...'>
                                                </textarea>
                                            </div>
                                        </div>

                                        {/* <div>
                                            <label>Would you recommend the product to others?</label>
                                            <div className='d-flex gap-3'>
                                                <input type="radio" name="recommend" id="Offcourse" /> <label htmlFor="Offcourse">Offcourse</label>
                                                <input type="radio" name="recommend" id="Never" /><label htmlFor="Never">Never</label>
                                                <input type="radio" name="recommend" id="Maybe" /><label htmlFor="Maybe">Maybe</label>
                                            </div>
                                        </div>

                                        <div className='d-flex gap-3'>
                                            <input type="checkbox" id='save' /><label htmlFor="save">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div> */}
                                    </div>
                                    <button className='readmore-button what-title1 fs-6 d-flex align-items-center gap-3' type='submit'>Submit <i className="fa-solid fa-arrow-right"></i></button>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                    <h4 className='text-uppercase fw-bold mb-4'>Facebook Page</h4>
                                    <Iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcgnpl&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=281586187730480" width="100%" height='600px' style="border:none;overflow:hidden;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></Iframe>
                                </div>
                            </div>
                        </form>

                    </div>

                    <div className='py-5 px-2'>
                        <h4>Related Products</h4>
                        <div className="row">
                            {relatedProducts.length > 0 && (
                                <OwlCarousel className='owl-theme px-2' {...slider}>
                                    {relatedProducts && relatedProducts.map((a) => (
                                        <div className='product-box text-center d-flex flex-column align-items-center' key={a.id}>
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
                                    ))}
                                </OwlCarousel>
                            )}
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default SingleProduct
