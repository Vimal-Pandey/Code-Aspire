import React from "react";
import Link from "next/link";

const AllProductsCardStyle2 = () => {
  return (
    <>
      <div className="services-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>PRODUCTS</span>
            <h2>
              We Provide the Best Quality <b>Products</b>
            </h2>
            <p>
              We are technology solutions providing company all over the world
              doing over 40 years.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/products/PrismGateDetailsContent">
                    <a>
                      {/* <img src="/images/services/services-2.jpg" alt="image" /> */}
                      <img src="/images/products/prismGATE.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/products/PrismGateDetailsContent">
                      <a>Prism Gate</a>
                    </Link>
                  </h3>
                  <p>
                  The security measures and access control protocols implemented within Prism Gate, our society registration application, are essential for safeguarding your organization's premises.
                  
                  </p>
                  <Link href="/products/PrismGateDetailsContent">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image">
                  <Link href="/products/PrismSFADetailsContent">
                    <a>
                      <img src="/images/products/prismSFA.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/products/PrismSFADetailsContent">
                      <a>Prism SFA</a>
                    </Link>
                  </h3>
                  <p>
                  The scanner policy for the Prism Gate application is a critical component of 
                  ensuring security and access control within your organization's premises.
                  </p>
                  <Link href="/products/PrismSFADetailsContent">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item">
                <div className="services-image" >
                  <Link href="/products/PrismOfficeDetailsContent">
                    <a>
                      <img src="/images/products/prismOFFICE.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/products/PrismOfficeDetailsContent">
                      <a>Prism Office</a>
                    </Link>
                  </h3>
                  <p>
                  The Prism Office Employee Management, Visitor QR Code, and Attendance System is an 
                  integrated solution designed to streamline office operations and enhance security.
                  
                  </p>
                  <Link href="/products/PrismOfficeDetailsContent">
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

export default AllProductsCardStyle2;
