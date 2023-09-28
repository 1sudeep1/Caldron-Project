import React, { useRef } from 'react'
import "./header.scss"
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import logo from "/src/assets/logo.jpg"
import { useState, useEffect } from 'react'
import accessoriesData from '../../Data/accessoriesData'
import inksData from '../../Data/inksData'
import laserrouterData from '../../Data/laserrouterData'
import printersData from '../../Data/PrintersData'
import Home from '../../Pages/Home'
import Contact from '../../Pages/Contact'
function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  // Close the navbar when a nav-item is clicked
  const closeNavbar = () => {
    setIsNavCollapsed(true);
  };

  // Listen for route changes and close the navbar
  React.useEffect(() => {
    closeNavbar();
  }, [location.pathname]);


  const [searchInitiated, setSearchInitiated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef();

  const allProducts = [...accessoriesData, ...inksData, ...laserrouterData, ...printersData];



  const handleInputChange = (e) => {

    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setSearchQuery(e.target.value);
    const filteredData = allProducts.filter((item) => {
      const name = item.productTitle.toLowerCase();
      return name.includes(query)
    });
    setSearchInitiated(true);

    setSearchResults(filteredData);
  }
  const clearResults = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSearchInitiated(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" >
        <div className="container">
          <div className='d-flex justify-content-between align-items-center gap-3 main-nav'>
            <Link to="/" className="navbar-brand"><img style={{ width: '50%' }} src={logo} alt="" title='Caldron Graphics Nepal' /></Link>
            <form className="d-flex position-relative form1 " role="search" >
              <input className="search-form form-control position-relative" placeholder="Search Products" aria-label="Search" onChange={handleInputChange} ref={inputRef} value={searchQuery} />
              <button className="position-absolute search-btn" type="submit" onClick={handleInputChange}><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <button className={`navbar-toggler  ${isNavCollapsed ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation" onClick={handleNavCollapse}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 align-items-center row-gap-2">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home
                  <div className='bottom-line'></div>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/about" className="nav-link">About Us
                  <div className='bottom-line'></div>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/services" className="nav-link">Services
                  <div className='bottom-line'></div>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/all-products" className="nav-link">Products
                  <div className='bottom-line'></div>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li className='dropdown-item'><Link to='/accessories'>Accessories</Link></li>
                  <li className='dropdown-item'><Link to='/inksProduct'>Inks</Link></li>
                  <li className='dropdown-item'><Link to='/inksProduct'>Spare Parts</Link></li>
                  <li className='dropdown-item'><Link to='/laser-routers'>Laser and Routers</Link></li>
                  <li className='dropdown-item'><Link to='/printers-product'>Printers</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us
                  <div className='bottom-line'></div>
                </Link>
              </li>

              <li className="nav-item position-relative">
                <form className="d-flex position-relative form2" role="search" >
                  <input className="search-form form-control position-relative" placeholder="Search Products" aria-label="Search" onChange={handleInputChange} ref={inputRef} value={searchQuery} />
                  <button className="position-absolute search-btn" type="submit" onClick={handleInputChange}><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
              </li>

            </ul>
          </div>
        </div>
        <div className='position-absolute search-section'>
          {searchInitiated && (
            <span onClick={clearResults} className='bg-danger px-2 clear-btn'>
              clear
            </span>
          )}
          {searchResults && (
            <ul className='list-group'>
              {searchResults.map((a) => (
                <Link to={`/single-product/${a.id}`} key={a.id}><li className='list-group-item search-result-link'>{a.productTitle}</li></Link>
              ))}
            </ul>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default Header
