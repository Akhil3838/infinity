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
                  <Image src="/images/about-image-2.jpg" alt="About Image 2" width={500} height={500} />
                </figure>
              </div>

              <div className="about-img-3">
                <figure className="image-anime reveal">
                  <Image src="/images/about-image-3.jpg" alt="About Image 3" width={500} height={500} />
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
              <h3 className="wow fadeInUp">about us</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                Your trusted partner in our <span>cyber security solutions</span>
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                We provide reliable, cutting-edge cybersecurity solutions to protect your digital assets,
                ensuring safety and peace of mind.
              </p>
            </div>

            <div className="about-us-body wow fadeInUp" data-wow-delay="0.6s">
              <div className="about-us-body-img">
                <figure className="image-anime">
                  <Image src="/images/about-body-img.png" alt="Body Image" width={500} height={300} />
                </figure>
              </div>

              <div className="about-us-body-content">
                <h3>24/7 security assistance</h3>
                <p>
                  Real-time support for all cybersecurity concerns, including breach response,
                  threat detection, guidance.
                </p>
              </div>
            </div>

            <div className="about-us-footer wow fadeInUp" data-wow-delay="0.8s">
              <div className="about-footer-list">
                <ul>
                  <li>Threat Detection and Monitoring</li>
                  <li>Access Control Management</li>
                  <li>Security Awareness Training</li>
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
