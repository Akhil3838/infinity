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
                  <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
              {/* Footer Social Links End */}
            </div>
            {/* Footer Header End */}
          </div>

          <div className="col-lg-4">
            {/* Footer Newsletter Form Start */}
            <div className="footer-links footer-newsletter-form">
              <h3>Subscribe our newsletter:</h3>
              <p>Protecting networks, systems data from evolving.</p>
              <form id="newsletterForm" action="#" method="POST">
                <div className="form-group">
                  <input type="email" name="email" className="form-control" id="mail" placeholder="Enter Your Email" required />
                  <button type="submit" className="newsletter-btn"><i className="fa-regular fa-paper-plane"></i></button>
                </div>
              </form>
            </div>
            {/* Footer Newsletter Form End */}
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            {/* Footer Links Start */}
            <div className="footer-links footer-quick-links">
              <h3>Quick link</h3>
              <ul>
                <li><a href="index.html">home</a></li>
                <li><a href="about.html">about us</a></li>
                <li><a href="services.html">services</a></li>
                <li><a href="blog-single.html">blog</a></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>Services</h3>
              <ul>
                <li><a href="service-single.html">Threat detection</a></li>
                <li><a href="service-single.html">Endpoint security</a></li>
                <li><a href="service-single.html">Network defense</a></li>
                <li><a href="service-single.html">Data encryption</a></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>Support</h3>
              <ul>
                <li><a href="#">Help</a></li>
                <li><a href="#">Term's & condition</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="contact.html">Contact us</a></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-2 col-md-3 col-6">
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
