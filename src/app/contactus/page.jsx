import React from 'react'
import Topborder from '../components/Topborder'
import Header from '../components/Header'
import Footer from '../components/Footer'

function contactus() {
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
          <h1 className="wow fadeInUp" data-cursor="-opaque">Contact us</h1>
          {/* <nav className="wow fadeInUp" data-wow-delay="0.2s">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index-2.html">home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                contact us
              </li>
            </ol>
          </nav> */}
        </div>
        {/* Page Header Box End */}
      </div>
    </div>
  </div>
</div>


<div className="page-contact-us">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title">
          <h3 className="wow fadeInUp">contact us</h3>
          <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
            Do you have questions? <span>ask us anytime</span>
          </h2>
        </div>
        {/* Section Title End */}
      </div>
    </div>

    <div className="row">
      <div className="col-lg-12">
        {/* Page Contact Box Start */}
        <div className="page-contact-box parallaxie">
          {/* Contact Info List Start */}
          <div className="contact-info-list">
            {/* Contact Info Item Start */}
            <div className="contact-info-item wow fadeInUp">
              <div className="icon-box">
                <img src="images/icon-phone-accent.svg" alt="phone icon" />
              </div>
              <div className="contact-info-content">
                <h3>contact us</h3>
                <p><a href="tel:+91123456789">+91-123 456 789</a></p>
                <p><a href="tel:+91123456789">+91-123 456 789</a></p>
              </div>
            </div>
            {/* Contact Info Item End */}

            {/* Contact Info Item Start */}
            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
              <div className="icon-box">
                <img src="images/icon-mail-accent.svg" alt="email icon" />
              </div>
              <div className="contact-info-content">
                <h3>e-mail us</h3>
                <p><a href="mailto:infodomainname@gmail.com">infodomainname@gmail.com</a></p>
                <p><a href="mailto:domainname@gmail.com">domainname@gmail.com</a></p>
              </div>
            </div>
            {/* Contact Info Item End */}

            {/* Contact Info Item Start */}
            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
              <div className="icon-box">
                <img src="images/icon-location.svg" alt="location icon" />
              </div>
              <div className="contact-info-content">
                <h3>our location</h3>
                <p>12345 Unity Avenue Suite 100 Springfield, USA 54321</p>
              </div>
            </div>
            {/* Contact Info Item End */}
          </div>
          {/* Contact Info List End */}

          <div className="contact-us-form">
            {/* Section Title Start */}
            <div className="section-title dark-section wow fadeInUp">
              <h2 className="wow fadeInUp" data-cursor="-opaque">Get in touch with us</h2>
            </div>
            {/* Section Title End */}

            <div className="member-contact-form contact-form">
              <form 
                id="contactForm" 
                action="#" 
                method="POST" 
                data-toggle="validator" 
                className="wow fadeInUp" 
                data-wow-delay="0.2s"
              >
                <div className="row">                                
                  <div className="form-group col-md-6 mb-4">
                    <input 
                      type="text" 
                      name="fname" 
                      className="form-control" 
                      id="fname" 
                      placeholder="First name" 
                      required 
                    />
                    <div className="help-block with-errors"></div>
                  </div>
  
                  <div className="form-group col-md-6 mb-4">
                    <input 
                      type="text" 
                      name="lname" 
                      className="form-control" 
                      id="lname" 
                      placeholder="Last name" 
                      required 
                    />
                    <div className="help-block with-errors"></div>
                  </div>
  
                  <div className="form-group col-md-6 mb-4">
                    <input 
                      type="text" 
                      name="phone" 
                      className="form-control" 
                      id="phone" 
                      placeholder="Enter Your Phone No." 
                      required 
                    />
                    <div className="help-block with-errors"></div>
                  </div>
  
                  <div className="form-group col-md-6 mb-4">
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control" 
                      id="email" 
                      placeholder="Enter Your E-mail" 
                      required 
                    />
                    <div className="help-block with-errors"></div>
                  </div>
  
                  <div className="form-group col-md-12 mb-5">
                    <textarea 
                      name="message" 
                      className="form-control" 
                      id="message" 
                      rows="4" 
                      placeholder="Write Message"
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
  
                  <div className="col-md-12">
                    <button type="submit" className="btn-default btn-highlighted">
                      <span>submit message</span>
                    </button>
                    <div id="msgSubmit" className="h3 hidden"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Page Contact Box End */}
      </div>
    </div>
  </div>
</div>
{/* Page Contact Us End */}

{/* Google Map Section Start */}
<div className="google-map">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        {/* Google Map IFrame Start */}
        <div className="google-map-iframe">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        {/* Google Map IFrame End */}
      </div>
    </div>
  </div>
</div>
<Footer/>
    </>
  )
}

export default contactus