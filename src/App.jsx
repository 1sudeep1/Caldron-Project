import React from 'react'
import Top from './Components/HeaderComponent/Top'
import Header from './Components/HeaderComponent/Header'
import Footer from './Components/FooterComponent/Footer'
import FooterBottom from './Components/FooterComponent/FooterBottom'
import ScrollToTop from 'react-scroll-to-top'
import ScrollToTop1 from './Components/ScrollTopTop/ScrollToTop1'


function App() {
  return (
    <div>
      <Top/>
      <Header/>
      <Footer/>
      <FooterBottom/>
      <ScrollToTop smooth className='scroll-top' color='white' height='15' width='15' />
      <ScrollToTop1/>
    </div>
  )
}

export default App
