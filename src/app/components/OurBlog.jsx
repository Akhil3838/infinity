import React from 'react'
import Image from 'next/image';
import Link from 'next/link';



function OurBlog() {
  return (
    <>
            <div className="row">
          {[
            {
              img: '/images/post-1.jpg',
              title: 'The Linux Threat You Need to Know',
              delay: '',
            },
            {
              img: '/images/post-2.jpg',
              title: 'Closing Security Gaps with Innovation',
              delay: '0.2s',
            },
            {
              img: '/images/post-3.jpg',
              title: 'BianLian Focuses on Data Extortion',
              delay: '0.4s',
            },
          ].map((post, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              {/* Post Item Start */}
              <div className={`post-item wow fadeInUp`} data-wow-delay={post.delay}>
                {/* Post Featured Image Start */}
                <div className="post-featured-image">
                  <Link href="/blog-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <Image src={post.img} alt={post.title} width={400} height={250} />
                    </figure>
                  </Link>
                </div>
                {/* Post Featured Image End */}

                {/* Post Item Content Start */}
                <div className="post-item-content">
                  {/* Post Item Body Start */}
                  <div className="post-item-body">
                    <h2>
                      <Link href="/blog-single">{post.title}</Link>
                    </h2>
                  </div>
                  {/* Post Item Body End */}

                  {/* Post Item Button Start */}
                  <div className="post-item-btn">
                    <Link href="/blog-single" className="post-btn">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                  {/* Post Item Button End */}
                </div>
                {/* Post Item Content End */}
              </div>
              {/* Post Item End */}
            </div>
          ))}
        </div>

    </>
  )
}

export default OurBlog