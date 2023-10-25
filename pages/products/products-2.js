import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
// import AllServicesCardStyle2 from "@/components/Services/AllServicesCardStyle2";
import AllProductsCardStyle2 from "@/components/Products/AllProductsCardStyle2";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";

export default function Products2() {
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-3.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>product style One</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
  
      {/* <AllServicesCardStyle2 /> */}
      <AllProductsCardStyle2/>

      <ContactForm />

      <Footer />
    </>
  );
}
