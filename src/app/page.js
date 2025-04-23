import Aboutus from "./components/Aboutus";
// import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import OurBlog from "./components/OurBlog";
import OurFeature from "./components/OurFeature";
import OurServices from "./components/OurServices";
import Topborder from "./components/Topborder";
import VideoReveal from "./components/VideoReveal";
import WhyChooseUs from "./components/WhyChooseUs";
export default function Home() {
  return (
    <>
  <Topborder/>  
  <Header/>  
  {/* hero */}
  <div className="hero parallaxie">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            {/* Hero Content Start */}
            <div className="hero-content">
              {/* Section Title Start */}
              <div className="section-title dark-section">
                <h3 className="wow fadeInUp">welcome Infinity</h3>
                <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                  Secure your world, effortlessly today!
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  Protect your digital world with seamless, cutting-edge cybersecurity solutions designed to
                  safeguard your data, systems, and peace of mind.
                </p>
              </div>
              {/* Section Title End */}

              {/* Hero Content Body Start */}
              <div className="hero-content-body wow fadeInUp" data-wow-delay="0.6s">
                {/* Hero Button Start */}
               
                {/* Hero Button End */}

                {/* Video Play Button Start */}
                {/* <div className="video-play-button">
                  
                  <a
                    href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <h3>Play video</h3>
                </div> */}
                <VideoReveal/>
                {/* Video Play Button End */}
              </div>
              {/* Hero Content Body End */}

             
            </div>
            {/* Hero Content End */}
          </div>
        </div>
      </div>
    </div>
    {/* hero end */}

    {/* about start */}

    <div className="about-us">
      <div className="container">
        <Aboutus/>
      </div>
    </div>
    {/* about end */}

    {/* our service */}
    <OurServices/>

    {/* our service end */}

    <div className="our-feature">
      <div className="container">
    <OurFeature/>
        
      </div>
    </div>
    {/* our service end */}
    {/* why choose us */}
    <WhyChooseUs/>

    {/* end od why choose us */}

    {/* testimonial */}
    {/* <Testimonials/> */}
    {/*  end testimonial */}


    {/* <FaqSection/> */}

    <div className="cta-box-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        {/* CTA Box Start */}
        <div className="cta-box">
          {/* CTA Box Content Start */}
          <div className="cta-box-content">
            {/* Section Title Start */}
            <div className="section-title dark-section">
              <h2 className="wow fadeInUp" data-cursor="-opaque">
                Protect business, cyber security solution today!
              </h2>
            </div>
            {/* Section Title End */}

            {/* CTA Contact Info Start */}
            <div className="cta-contact-info">
              {/* CTA Contact Item Start */}
              <div className="cta-contact-item">
                <div className="icon-box">
                  <img src="images/icon-phone.svg" alt="" />
                </div>
                <div className="cta-contact-content">
                  <h3>Get contact now</h3>
                  <p><a href="tel:+123456789">+123 456 789</a></p>
                </div>
              </div>
              {/* CTA Contact Item End */}
              
              {/* CTA Contact Item Start */}
              <div className="cta-contact-item">
                <div className="icon-box">
                  <img src="images/icon-mail.svg" alt="" />
                </div>
                <div className="cta-contact-content">
                  <h3>Sent e-mail</h3>
                  <p><a href="mailto:info@domainname.com">info@domainname.com</a></p>
                </div>
              </div>
              {/* CTA Contact Item End */}
            </div>
            {/* CTA Contact Info End */}
          </div>
          {/* CTA Box Content End */}

          {/* CTA Box Image Start */}
          <div className="cta-box-image">
            <figure className="image-anime reveal">
              <img src="images/child.jpg" alt="" />
            </figure>
          </div>
          {/* CTA Box Image End */}
        </div>
        {/* CTA Box End */}
      </div>
    </div>
  </div>
</div>

<Footer/>
    </>
  );
}
