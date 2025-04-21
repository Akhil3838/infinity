import React from 'react';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Footer Header Start */}
            <div className="footer-header">
              {/* Footer Logo Start */}
              <div className="footer-logo">
                <img
                  src="images/logo1.png"
                  alt="Logo"
                  style={{ height: 'auto', width: '150px' }}
                />
              </div>
              {/* Footer Logo End */}

              {/* Footer Social Links Start */}
              <div className="footer-social-links">
                <ul>
                  {/* <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li> */}
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
              {/* Footer Social Links End */}
            </div>
            {/* Footer Header End */}
          </div>

          {/* Modified columns to use full width */}
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            {/* Footer Links Start */}
            <div className="footer-links footer-quick-links">
              <h3>Quick link</h3>
              <ul>
                <li><a href="/">home</a></li>
                <li><a href="/aboutus">about us</a></li>
                <li><a href="/services">services</a></li>
                <li><a href="/contactus">Contact us</a></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>Services</h3>
              <ul>
                <li><a href="/services">Kerala Vision Connection</a></li>
                <li><a href="/services">Broadband Internet</a></li>
                <li><a href="/services">Solar Connection Service</a></li>
                <li><a href="/services">CCTV Service</a></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>Support</h3>
              <ul>
                <li><a href="#">Help</a></li>
                <li><a href="#">Term's & condition</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>Contact</h3>
              <ul>
                <li><a href="tel:+123456789">+123 456 789</a></li>
                <li><a href="mailto:info@domain.com">info@domain.com</a></li>
                <li>123 High Street LN1 1AB United Kingdom</li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>
        </div>
      </div>

      {/* Footer Copyright Start */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-copyright-text">
                <p>Copyright © 2025 All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Copyright End */}
    </footer>
  );
}

export default Footer;