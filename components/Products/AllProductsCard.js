import React from "react";
import Link from "next/link";

const AllProductsCard = () => {
  return (
    <>
      <div className="services-area bg-with-14042C-color rounded-0 ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Product</span>
            <h2>
              We Provide the Best Quality <b>Products</b>
            </h2>
            <p>
              our company has been a global technology solutions provider, leveraging innovation 
              and tailored expertise to serve diverse clients across various industries. 
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/Products/products-details">
                    <a>
                      <img src="/images/products/prism gate.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/products/products-details">
                      {/* <a>Database Administrator</a> */}
                      <a>Prism Gate</a>
                    </Link>
                  </h3>
                  <p>
                  Prism Gate by Code Aspire is more than just an app, it's a commitment to enhancing the 
                  quality of life within your community.
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
                      <img src="/images/products/prism office.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/products/products-details">
                      {/* <a>Software Development</a> */}
                      <a>Prism Office</a>
                    </Link>
                  </h3>
                  <p>
                  Prism Office by the Code Aspire is the ultimate solution to simplify your workplace operations, 
                  enhance security.
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
                      <img src="/images/products/prism scanner.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/products/products-details">
                      {/* <a>App Development</a> */}
                      <a>Prism Scanner</a>
                    </Link>
                  </h3>
                  <p>
                  Discover the power of Prism Scanner by Code Aspire and transform the way you manage 
                  attendance and access control.
                  </p>
                  <Link href="/products/products-details">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6">
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
            </div> */}

            {/* <div className="col-lg-4 col-md-6">
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
            </div> */}

            {/* <div className="col-lg-4 col-md-6">
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
            </div> */}
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

export default AllProductsCard;
