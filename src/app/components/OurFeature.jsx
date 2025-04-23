import React from 'react'
import Image from 'next/image';


function OurFeature() {
  return (
    <>
            <div className="row align-items-center">
          {/* Feature Images Section */}
          <div className="col-lg-6">
            <div className="our-feature-images">
              <div className="feature-image">
                <figure className="image-anime reveal">
                  <Image src="/images/whychoose.jpg" alt="Feature 1" width={500} height={500} />
                </figure>
              </div>

              <div className="company-experience-info">
                <div className="feature-image">
                  <figure className="image-anime reveal">
                    <Image src="/images/feature3.jpg" alt="Feature 2" width={500} height={500} />
                  </figure>
                </div>

                <div className="company-experience-box">
                  <div className="company-experience-content">
                    <h2><span className="counter">25</span>+</h2>
                    <p>Years of experience in network</p>
                  </div>

                  {/* <div className="our-client-images company-client-images">
                    <div className="client-image">
                      <figure className="image-anime">
                        <Image src="/images/client-image-1.jpg" alt="Client 1" width={80} height={80} />
                      </figure>
                    </div>
                    <div className="client-image">
                      <figure className="image-anime">
                        <Image src="/images/client-image-2.jpg" alt="Client 2" width={80} height={80} />
                      </figure>
                    </div>
                    <div className="client-image">
                      <figure className="image-anime">
                        <Image src="/images/client-image-3.jpg" alt="Client 3" width={80} height={80} />
                      </figure>
                    </div>
                    <div className="client-image client-counter">
                      <h3><span className="counter">25</span>k</h3>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Feature Content Section */}
          <div className="col-lg-6">
            <div className="our-feature-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">our feature</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                  Comprehensive protection <span>simplified security</span>
                </h2>
              </div>

              <div className="ferature-list">
                <div className="ferature-list-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <Image src="/images/icon-ferature-1.svg" alt="Icon 1" width={60} height={60} />
                  </div>
                  <div className="ferature-list-content">
                    <h3>real-time threat detection</h3>
                    <p>
                      Real-Time Threat Detection provides instant monitoring & response to cyber threats,
                      ensuring your devices and data remain secure.
                    </p>
                  </div>
                </div>

                <div className="ferature-list-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="icon-box">
                    <Image src="/images/icon-ferature-2.svg" alt="Icon 2" width={60} height={60} />
                  </div>
                  <div className="ferature-list-content">
                    <h3>malware and virus prevention</h3>
                    <p>
                      Malware and virus prevention provides instant monitoring & response to cyber threats,
                      ensuring your devices and data remain secure.
                    </p>
                  </div>
                </div>

                <div className="ferature-list-item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="icon-box">
                    <Image src="/images/icon-ferature-3.svg" alt="Icon 3" width={60} height={60} />
                  </div>
                  <div className="ferature-list-content">
                    <h3>24/7 monitoring and support</h3>
                    <p>
                      24/7 monitoring and support provides instant monitoring & response to cyber threats,
                      ensuring your devices and data remain secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Feature Content */}
        </div>

    </>
  )
}

export default OurFeature