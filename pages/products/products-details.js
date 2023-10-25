import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
// import ServicesDetailsContent from "@/components/Services/ServicesDetailsContent";
import ProductsDetailsContent from "@/components/Products/ProductsDetailsContent";
import ContactForm from "@/components/Common/ContactForm";
import ServiceSlider from "@/components/Services/ServiceSlider";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";

export default function ProductDetails() {
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
            <h2>Product Details</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Product Details</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <ServicesDetailsContent /> */}
      <ProductsDetailsContent/>
      <ContactForm />
      <CTO />

      <Footer />
    </>
  );
}
