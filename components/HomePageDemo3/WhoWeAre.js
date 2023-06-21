import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <>
      <div className="about-area pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-wrap-image">
                <img
                  src="/images/about/about-3.jpg"
                  alt="image"
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-wrap-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="about-bg-text">ABOUT US</div>
                <span>WHO WE ARE</span>
                <h3>
                  Your Trusted Partner For All IT Solutions
                </h3>
                <p>
                If you are looking for an agency to help you get the right talents as per your needs , you’ve come to the right place. We can help you take your business to the next level.
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-box">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <h3>Our Vision</h3>
                  <p>
                   
							Our vision is to become a global leader in providing the best and unique web design and marketing services to improve our client’s productivity and business strength.						
                  </p>

                  <div className="about-btn">
                    <Link href="/about">
                      <a className="default-btn">
                        Know More About Us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-down"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <h3>Our Mission</h3>
                  <p>
                   
							Our mission is to empower our clients to use the internet to its full potential by providing affordable, effective, custom design and marketing solutions.						
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="card-image">
                    <img src="/images/about/about-4.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-circle-shape">
          <img src="/images/about/about-circle.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
