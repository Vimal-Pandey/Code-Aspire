import React from "react";
import Link from "next/link";

const AllProductCard = () => {
  return (
    <>
      <div className="services-area bg-with-14042C-color rounded-0 ptb-100">
        <div className="container">
          <div className="section-title">
            <span>SERVICES</span>
            <h2>
              We Provide the Best Quality <b>Services</b>
            </h2>
            <p>
              We are technology solutions providing company all over the world
              doing over 40 years. lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/Products/products-details">
                    <a>
                      <img src="/images/services/services-1.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/products/products-details">
                      <a>Database Administrator</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                  </p>
                  <Link href="/products/products-details">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/products/products-details">
                    <a>
                      <img src="/images/services/services-2.jpg" alt="image" />
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
                    Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                  </p>
                  <Link href="/products/products-details">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/products/products-details">
                    <a>
                      <img src="/images/services/services-3.jpg" alt="image" />
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
                    Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                  </p>
                  <Link href="/products/products-details">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/products/products-details">
                    <a>
                      <img src="/images/services/services-4.jpg" alt="image" />
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
                    Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                  </p>
                  <Link href="/products/products-details">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/products/products-details">
                    <a>
                      <img src="/images/services/services-5.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/products/products-details">
                      <a>Analytic Solutions</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                  </p>
                  <Link href="/products/products-details">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/products/products-details">
                    <a>
                      <img src="/images/services/services-6.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/products/products-details">
                      <a>Product Design</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                  </p>
                  <Link href="/products/products-details">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <img src="/images/services/services-shape-1.png" alt="image" />
        </div>
        <div className="services-shape-2">
          <img src="/images/services/services-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AllProductCard;
