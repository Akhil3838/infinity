'use client'
import React from 'react'
import Image from 'next/image'

function Aboutus() {
  return (
    <section className="about-us">
      <div className="row align-items-center">
        {/* About Images */}
        <div className="col-lg-6">
          <div className="about-us-image">
            <div className="about-image-box about-img-1">
              <figure className="image-anime reveal">
                <Image src="/images/about-image-1.jpg" alt="About Image 1" width={500} height={500} />
              </figure>
            </div>

            <div className="about-image-box">
              <div className="about-img-2">
                <figure className="image-anime reveal">
                  <Image src="/images/about_1.jpg" alt="About Image 2" width={500} height={500} />
                </figure>
              </div>

              <div className="about-img-3">
                <figure className="image-anime reveal">
                  <Image src="/images/about_3.jpg" alt="About Image 3" width={500} height={500} />
                </figure>
              </div>
            </div>

            {/* Optional Button Circle */}
            {/* <div className="get-free-security-circle">
              <Link href="/contact">
                <Image src="/images/get-free-security-circle.svg" alt="" width={120} height={120} />
              </Link>
            </div> */}
          </div>
        </div>

        {/* About Content */}
        <div className="col-lg-6">
  <div className="about-us-content">
    <div className="section-title">
      <h3 className="wow fadeInUp">Welcome to Infynity</h3>
      <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
        Discover reliable solutions in <span>digital connectivity & smart technology</span>
      </h2>
      <p className="wow fadeInUp" data-wow-delay="0.4s">
        At Infynity, we are dedicated to delivering outstanding service in the digital and smart tech space. 
        Our expert team ensures fast, reliable, and customer-focused support to bring technology seamlessly into your life.
      </p>
    </div>

    <div className="about-us-body wow fadeInUp" data-wow-delay="0.6s">
      <div className="about-us-body-img">
        <figure className="image-anime">
          <Image src="/images/mix.jpg" alt="Body Image" width={500} height={300} />
        </figure>
      </div>

      <div className="about-us-body-content">
        <h3>Trusted Services for Modern Living</h3>
        <small className='text-white'>
          Infynity offers end-to-end solutions including digital TV, high-speed broadband, solar energy systems, 
          advanced CCTV surveillance, home automation. Our commitment is to empower your space with smart connectivity.
        </small>
      </div>
    </div>

    <div className="about-us-footer wow fadeInUp" data-wow-delay="0.8s">
      <div className="about-footer-list">
        <ul>
          <li>Keralavision Digital TV Connection</li>
          <li>Broadband Internet</li>
          <li>Solar Power Solutions</li>
          {/* <li>CCTV Surveillance Systems</li>
          <li>Home Automation Systems</li>
          <li>KFON Broadband</li> */}
        </ul>
      </div>

      <div className="about-footer-content">
        <div className="about-contact-btn">
          <div className="icon-box">
            <Image src="/images/icon-phone.svg" alt="Phone Icon" width={40} height={40} />
          </div>
          <div className="about-footer-btn-content">
            <h3>
              <a href="tel:+91123456789">+91 123 456 789</a>
            </h3>
          </div>
        </div>

        <div className="about-footer-btn">
          <a href="/about" className="btn-default">
            more about
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}

export default Aboutus
