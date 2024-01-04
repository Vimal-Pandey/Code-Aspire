import data from "pages/static_Data/PrismSFAData.json";
import React from "react";
import ContainerBodyBox from "./ContainerBodyBox";
import Link from "next/link";

function PrismSFADetailsContent() {
  return (
    <>
      <div className="services-area pt-100 pb-75" 
      style={{
          background: 'url("/images/backgroundImg.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          marginTop: "1vw"
      }}
      
      >
        <div className="container">
          <div className="section-title">
          <Link href="/products">
                <a style={{marginBottom:"2vw", }}>- Go back -</a>
              </Link>
            <h2>
            Visitor Management System
            </h2>
            <p style={{color: "#333"}}>
              Global tech solutions provider, 40+ years experience, offers advanced Product Visitor Management System for streamlined visitor experiences.
            </p>
          </div>

          <div className="row justify-content-center">
              {data.map((item) => (
                <ContainerBodyBox
                  key={item.id}
                  title={item.title}
                  imageSrc={item.imageSrc}
                  description={item.description}
                />
              ))}
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
}

export default PrismSFADetailsContent;
