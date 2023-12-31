import React from "react";
import Link from "next/link";

const TopServices = () => {
  return (
    <>
      <div className="features-area pb-75">
        <div className="container">
          <div className="features-inner-box">
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-sm-6"
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="single-features-card">
                  <div className="features-image">
                    <Link href="/services/service-details">
                      <a>
                        <img
                          src="/images/features/features-1.png"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="/services/service-details">
                        <a>App Development</a>
                      </Link>
                    </h3>
                    <p>
                      Innovative app development solutions that elevate
                      businesses, combining functionality and design for optimal
                      user experiences.
                    </p>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <Link href="/services/service-details">
                        <a>App Development</a>
                      </Link>
                    </h3>
                    <Link href="/services/service-details">
                      <a className="features-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="single-features-card" data-tilt>
                  <div className="features-image" data-tilt>
                    <Link href="/services/service-details">
                      <a>
                        <img
                          src="/images/features/features-2.png"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="/services/service-details">
                        <a>Web Development</a>
                      </Link>
                    </h3>
                    <p>
                      Crafting captivating web experiences, our expert team
                      combines creativity and functionality to build stunning
                      websites.
                    </p>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <Link href="/services/service-details">
                        <a>Web Development</a>
                      </Link>
                    </h3>
                    <Link href="/services/service-details">
                      <a className="features-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-sm-6"
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="single-features-card" data-tilt>
                  <div className="features-image" data-tilt>
                    <Link href="/services/service-details">
                      <a>
                        <img
                          src="/images/features/features-3.png"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="/services/service-details">
                        <a>SoftWare Development</a>
                      </Link>
                    </h3>
                    <p>
                      Driving digital transformations with our software
                      development expertise, we create scalable and robust
                      solutions to fuel business growth and success.
                    </p>
                  </div>
                  <div className="hover-content">
                    <h3>
                      <Link href="/services/service-details">
                        <a>SoftWare Development</a>
                      </Link>
                    </h3>
                    <Link href="/services/service-details">
                      <a className="features-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopServices;
