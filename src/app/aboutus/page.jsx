import React from 'react'
import Topborder from '../components/Topborder'
import Header from '../components/Header'
import WhyChooseUs from '../components/WhyChooseUs'
import Aboutus from '../components/Aboutus'
import Footer from '../components/Footer'

function AboutUs() {
  return (
    <>
    <Topborder/>
    <Header/>
    <div className="page-header parallaxie">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-12">
        {/* Page Header Box Start */}
        <div className="page-header-box">
          <h1 className="wow fadeInUp" data-cursor="-opaque">About us</h1>
          <nav className="wow fadeInUp" data-wow-delay="0.2s">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index-2.html">home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                about us
              </li>
            </ol>
          </nav>
        </div>
        {/* Page Header Box End */}
      </div>
    </div>
  </div>
</div>
{/* .....aboutus............ */}

<div className="about-us">
      <div className="container">
        <Aboutus/>
      </div>
    </div>

    <WhyChooseUs/>

    <Footer/>

    </>
  )
}

export default AboutUs