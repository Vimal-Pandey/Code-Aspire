import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import PrismGateDetailsContent from "@/components/Products/PrismGateDetailsContent";
import ContactForm from "@/components/Common/ContactForm";
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
            <h2>Prism Gate</h2>
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

      <PrismGateDetailsContent/>
      <ContactForm />
      <CTO />

      <Footer />
    </>
  );
}
