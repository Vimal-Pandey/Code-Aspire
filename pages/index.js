import React from "react";
import NavbarThree from "@/components/Layout/NavbarThree";
import MainBanner from "@/components/HomePageDemo3/MainBanner";
import TopServices from "@/components/HomePageDemo3/TopServices";
import WhoWeAre from "@/components/HomePageDemo3/WhoWeAre";
import ServiceSlider from "@/components/Services/ServiceSlider";
import WorkingProcess from "@/components/Common/WorkingProcess";


import ContactForm from "@/components/Common/ContactForm";

import CTO from "@/components/Common/CTO";

import Footer from "@/components/Layout/Footer";
export default function Home3() {

  return (
    <>
      <NavbarThree />

      <MainBanner />

      <TopServices />

      <WhoWeAre />

      <div className="radius-0">
        <ServiceSlider />
      </div>

      <WorkingProcess />
      


      {/* <TestimonialSliderStyle2 /> */}

      <ContactForm />
    

    
      <CTO />



      <Footer />
    </>
  );
}
