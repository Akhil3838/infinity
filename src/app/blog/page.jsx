import React from 'react'
import Topborder from '../components/Topborder'
import Header from '../components/Header'
import Footer from '../components/Footer'

function blog() {
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
          <h1 className="wow fadeInUp" data-cursor="-opaque">Latest blog</h1>
          {/* <nav className="wow fadeInUp" data-wow-delay="0.2s">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index-2.html">home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                blog
              </li>
            </ol>
          </nav> */}
        </div>
        {/* Page Header Box End */}
      </div>
    </div>
  </div>
</div>
<div className="page-blog">
  <div className="container">
    <div className="row">
      {/* Blog Post 1 */}
      <div className="col-lg-4 col-md-6">
        <div className="post-item wow fadeInUp">
          <div className="post-featured-image">
            <a href="blog-single.html" data-cursor-text="View">
              <figure className="image-anime">
                <img src="images/post-1.jpg" alt="Linux security threat" />
              </figure>
            </a>
          </div>
          <div className="post-item-content">
            <div className="post-item-body">
              <h2><a href="blog-single.html">The Linux Threat You Need to Know</a></h2>
            </div>
            <div className="post-item-btn">
              <a href="blog-single.html" className="post-btn">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post 2 */}
      <div className="col-lg-4 col-md-6">
        <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
          <div className="post-featured-image">
            <a href="blog-single.html" data-cursor-text="View">
              <figure className="image-anime">
                <img src="images/post-2.jpg" alt="Security innovation" />
              </figure>
            </a>
          </div>
          <div className="post-item-content">
            <div className="post-item-body">
              <h2><a href="blog-single.html">Closing Security Gaps with Innovation</a></h2>
            </div>
            <div className="post-item-btn">
              <a href="blog-single.html" className="post-btn">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post 3 */}
      <div className="col-lg-4 col-md-6">
        <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
          <div className="post-featured-image">
            <a href="blog-single.html" data-cursor-text="View">
              <figure className="image-anime">
                <img src="images/post-3.jpg" alt="BianLian data extortion" />
              </figure>
            </a>
          </div>
          <div className="post-item-content">
            <div className="post-item-body">
              <h2><a href="blog-single.html">BianLian Focuses on Data Extortion</a></h2>
            </div>
            <div className="post-item-btn">
              <a href="blog-single.html" className="post-btn">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post 4 */}
      <div className="col-lg-4 col-md-6">
        <div className="post-item wow fadeInUp" data-wow-delay="0.6s">
          <div className="post-featured-image">
            <a href="blog-single.html" data-cursor-text="View">
              <figure className="image-anime">
                <img src="images/post-4.jpg" alt="AI in cyber defense" />
              </figure>
            </a>
          </div>
          <div className="post-item-content">
            <div className="post-item-body">
              <h2><a href="blog-single.html">The Role of Artificial Intelligence in Cyber Defense</a></h2>
            </div>
            <div className="post-item-btn">
              <a href="blog-single.html" className="post-btn">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post 5 */}
      <div className="col-lg-4 col-md-6">
        <div className="post-item wow fadeInUp" data-wow-delay="0.8s">
          <div className="post-featured-image">
            <a href="blog-single.html" data-cursor-text="View">
              <figure className="image-anime">
                <img src="images/post-5.jpg" alt="Insider threats protection" />
              </figure>
            </a>
          </div>
          <div className="post-item-content">
            <div className="post-item-body">
              <h2><a href="blog-single.html">Protecting Your Business from Insider Threats</a></h2>
            </div>
            <div className="post-item-btn">
              <a href="blog-single.html" className="post-btn">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post 6 */}
      <div className="col-lg-4 col-md-6">
        <div className="post-item wow fadeInUp" data-wow-delay="1s">
          <div className="post-featured-image">
            <a href="blog-single.html" data-cursor-text="View">
              <figure className="image-anime">
                <img src="images/post-6.jpg" alt="Endpoint security guide" />
              </figure>
            </a>
          </div>
          <div className="post-item-content">
            <div className="post-item-body">
              <h2><a href="blog-single.html">How to Choose the Right Endpoint Security</a></h2>
            </div>
            <div className="post-item-btn">
              <a href="blog-single.html" className="post-btn">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="col-lg-12">
        <div className="page-pagination wow fadeInUp" data-wow-delay="1.2s">
          <ul className="pagination">
            <li><a href="#"><i className="fa-solid fa-angle-left"></i></a></li>
            <li className="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#"><i className="fa-solid fa-angle-right"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </>
  )
}

export default blog