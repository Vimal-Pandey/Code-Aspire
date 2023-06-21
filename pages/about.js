import React from "react";

import NavbarTwo from "@/components/Layout/NavbarTwo";
import WhoWeAre from '@/components/AboutThree/WhoWeAre';
import WorkingProcess from '@/components/Common/WorkingProcess';



import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";

;
import ServiceSlider from "@/components/Services/ServiceSlider";

export default function About() {
  return (
    <>
      <NavbarTwo />

      <div className="page-banner-area mt-94" style={{ backgroundImage: `url(/images/page-banner/banner-bg-3.jpg` }}>
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>About us</h2>
            
          </div>
        </div>
      </div>

      <WhoWeAre />

      <WorkingProcess />

    
  
      <div className="radius-0">
        <ServiceSlider />
      </div>

      
    

      <ContactForm />
  
      <Footer />
    </>
  );
}
