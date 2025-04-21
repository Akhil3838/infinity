import React from 'react';

function Topborder() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="topbar-info-text">
              {/* <p>
                We are always ready to protect your data{' '}
                <a href="contact.html">Contact now</a>
              </p> */}
            </div>
          </div>

          <div className="col-md-5">
            <div className="topbar-links">
              {/* Topbar Contact Info */}
              <div className="topbar-contact-info">
                <ul>
                  {/* <li><a href="#">Help</a></li> */}
                  <li><a href="#">04985-297295</a></li>
                  <li><a href="contact.html">7034199109</a></li>
                </ul>
              </div>

              {/* Topbar Social Links */}
              <div className="topbar-social-links">
                <ul>
                  {/* <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li> */}
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topborder;
