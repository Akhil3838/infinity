// components/OurServices.jsx
import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <div className="our-services">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">our services</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                Comprehensive cybersecurity <span>services for protection</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          {[
            {
              icon: "images/icon-service-1.svg",
              title: "Threat Detection and Prevention",
              delay: "0s"
            },
            {
              icon: "images/icon-service-2.svg",
              title: "Endpoint Security Solutions",
              delay: "0.2s",
              active: true
            },
            {
              icon: "images/icon-service-3.svg",
              title: "Network Defense and Firewalls",
              delay: "0.4s"
            },
            {
              icon: "images/icon-service-4.svg",
              title: "Data Encryption and Privacy",
              delay: "0.6s"
            },
            {
              icon: "images/icon-service-5.svg",
              title: "Cloud Security and Compliance",
              delay: "0.8s"
            },
            {
              icon: "images/icon-service-6.svg",
              title: "Incident Response and Management",
              delay: "1s"
            }
          ].map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              {/* Service Item Start */}
              <div className={`service-item wow fadeInUp ${service.active ? "active" : ""}`} data-wow-delay={service.delay}>
                <div className="icon-box">
                  <img src={service.icon} alt="" />
                </div>
                <div className="service-title-box">
                  <div className="service-title">
                    <h3>
                      <Link href="/service-single">
                        {service.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="service-btn">
                    <Link href="/service-single">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="service-content">
                  <p>Real-time monitoring and proactive and measures to identify and threats.</p>
                </div>
              </div>
              {/* Service Item End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
