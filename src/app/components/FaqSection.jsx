import React from 'react';

const FaqSection = () => {
  return (
    <div className="our-faqs home-our-faqs">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Faqs Content Start */}
            <div className="faq-content">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">faq</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                  Cybersecurity questions <span>answered clearly</span>
                </h2>
              </div>
              {/* Section Title End */}

              {/* Faqs Image Start */}
              <div className="faq-image">
                <figure className="image-anime reveal">
                  <img src="images/faq-image.jpg" alt="Cybersecurity FAQ" />
                </figure>
              </div>
              {/* Faqs Image End */}
            </div>
            {/* Faqs Content End */}
          </div>
          <div className="col-lg-6">
            {/* FAQ Accordion Start */}
            <div className="faq-accordion" id="accordion">
              {/* FAQ Item Start */}
              <div className="accordion-item wow fadeInUp">
                <h2 className="accordion-header" id="heading1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    What is cybersecurity?
                  </button>
                </h2>
                <div
                  id="collapse1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading1"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      Cybersecurity is critical for safeguarding sensitive information, ensuring business continuity, and preventing financial and reputational loss due to cyberattacks.
                    </p>
                  </div>
                </div>
              </div>
              {/* FAQ Item End */}

              {/* FAQ Item Start */}
              <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                <h2 className="accordion-header" id="heading2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Why is cybersecurity important?
                  </button>
                </h2>
                <div
                  id="collapse2"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading2"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      Cybersecurity is critical for safeguarding sensitive information, ensuring business continuity, and preventing financial and reputational loss due to cyberattacks.
                    </p>
                  </div>
                </div>
              </div>
              {/* FAQ Item End */}

              {/* FAQ Item Start */}
              <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                <h2 className="accordion-header" id="heading3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    What are the most common cyber threats?
                  </button>
                </h2>
                <div
                  id="collapse3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading3"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      Cybersecurity is critical for safeguarding sensitive information, ensuring business continuity, and preventing financial and reputational loss due to cyberattacks.
                    </p>
                  </div>
                </div>
              </div>
              {/* FAQ Item End */}

              {/* FAQ Item Start */}
              <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                <h2 className="accordion-header" id="heading4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    How can I protect my business from cyber threats?
                  </button>
                </h2>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading4"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      Cybersecurity is critical for safeguarding sensitive information, ensuring business continuity, and preventing financial and reputational loss due to cyberattacks.
                    </p>
                  </div>
                </div>
              </div>
              {/* FAQ Item End */}
            </div>
            {/* FAQ Accordion End */}
          </div>
        </div>
      </div>
    </div>



  );
};

export default FaqSection;