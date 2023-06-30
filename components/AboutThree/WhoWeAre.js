import React from "react";

const WhoWeAre = () => {
  return (
    <>
      <div className="about-area pt-100">
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
                <h3 style={{fontFamily:"serif"}}>WHO WE ARE</h3>
                <p>
                  We are leading technology solutions providing company all over
                  the world. We are creating a new wave in remote hiring by
                  helping companies hire from a strong network of top talents
                  from India for the world.
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-box">
            <div className="row justify-content-center align-items-center">
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
                    Our vision is to become a global leader in providing the
                    best and unique web design and marketing services to improve
                    our client’s productivity and business strength.
                  </p>
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
                    Our mission is to empower our clients to use the internet to
                    its full potential by providing affordable, effective,
                    custom design and marketing solutions.
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
                  <div className="card-image" data-tilt>
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
