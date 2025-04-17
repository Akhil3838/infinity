import React from 'react';

function Header() {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <a className="navbar-brand" href="index-2.html">
              <img
                src="images/logo1.png"
                alt="Logo"
                style={{ height: 'auto', width: '150px' }}
              />
            </a>
            {/* Logo End */}

            {/* Toggle Button for mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu" id="navbarNav">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item submen">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="/aboutus">About Us</a></li>
                  <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                  {/* <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li> */}
                  <li className="nav-item"><a className="nav-link" href="/contactus">Contact Us</a></li>
                </ul>
              </div>
            </div>
            {/* Main Menu End */}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
