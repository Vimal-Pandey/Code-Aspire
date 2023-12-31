import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const ProductsSlider = () => {
  return (
    <>
      <div className="services-area with-radius ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div
                className="services-section-content"
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>SERVICES</span>
                <h3>
                  We Provide the Best Quality <b>Services</b>
                </h3>
                <p>
                  We are technology solutions providing company all over the
                  world .
                </p>
                <div className="services-section-btn">
                  <Link href="/products">
                    <a className="default-btn">Explore All Services</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper services-slides"
              >
                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/products/products-details">
                        <a>
                          <img
                            src="/images/services/services-1.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/products/products-details">
                          <a>Software Development</a>
                        </Link>
                      </h3>
                      <p>
                        Software development involves designing and building
                        tailored solutions that address specific business needs,
                        ensuring efficiency and scalability.
                      </p>
                      <Link href="/products/products-details">
                        <a className="services-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/products/products-details">
                        <a>
                          <img
                            src="/images/services/services-2.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/products/products-details">
                          <a>App Development</a>
                        </Link>
                      </h3>
                      <p>
                        App development involves creating robust, user-friendly
                        mobile applications that meet client requirements and
                        enhance customer experiences.
                      </p>
                      <Link href="/products/products-details">
                        <a className="services-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/products/products-details">
                        <a>
                          <img
                            src="/images/services/services-3.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/products/products-details">
                          <a>Web Development</a>
                        </Link>
                      </h3>
                      <p>
                        Web development for an IT services company entails
                        crafting responsive, visually appealing websites with
                        seamless navigation and robust functionality to meet
                        client objectives.
                      </p>
                      <Link href="/products/products-details">
                        <a className="services-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsSlider;