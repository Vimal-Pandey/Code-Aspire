import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import KeyFeatures from "@/components/Common/KeyFeatures";
import AllProductsCardStyle2 from "@/components/Products/AllProductsCardStyle2";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";

export default function product() {
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-4.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Product Overview</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Product</li>
            </ul>
          </div>
        </div>
      </div>

      <KeyFeatures />

      {/* <AllServicesCard /> */}
      <AllProductsCardStyle2/>
      <ContactForm />

      <Footer />
    </>
  );
}
