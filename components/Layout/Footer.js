import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer-area with-black-background pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="widget-logo">
                  <Link href="/">
                    <a>
                      <img src="/images/logo.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <p>
                  Transforming visions into reality, our company specializes in
                  delivering exceptional IT services.
                </p>

                <ul className="widget-social">
              
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100070215794236&mibextid=LQQJ4d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Code_Aspire"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/codeaspire-consultancy-services/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/code_aspire?igshid=YTQwZjQ0NmI0OA=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-instagram-fill"></i>
                  </a>
                </li>
              
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <h3>Links</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/product">
                      <a>Products</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <h3>Pages</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                 
                  <li>
                    <Link href="/terms-of-service">
                      <a>Terms of Service</a>
                    </Link>
                  </li>
                 
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/prism-sfa-policy">
                      <a>Prism SFA Policy</a>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="footer-shape-1">
          <img src="/images/footer/footer-shape-1.png" alt="image" />
        </div>
        <div className="footer-shape-2">
          <img src="/images/footer/footer-shape-2.png" alt="image" />
        </div>
        <div className="footer-shape-3">
          <img src="/images/footer/footer-shape-3.png" alt="image" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
