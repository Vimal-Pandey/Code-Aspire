import React from "react";
import data from "pages/static_Data/PrismGateData.json";
import ContainerBodyBox from "./ContainerBodyBox";
import { useState } from "react";
import Link from "next/link";

function PrismGateDetailsContent() {

  const [info, setInfo] = useState({
    headOne: "flex",
    headTwo: "none",
    headThree: "none"
  });

  function selectone(e) {
    e.preventDefault();
    if (info.headOne === "none") {
      setInfo({
        ...info,
        headThree: "none",
        headOne: "flex",
        headTwo: "none",
      });
    }
  }

  function selecttwo(e) {
    e.preventDefault();
    if (info.headTwo === "none") {
      setInfo({
        ...info,
        headThree: "none",
        headOne: "none",
        headTwo: "flex",
      });
    }
  }

  function selectthree(e) {
    e.preventDefault();
    if (info.headThree === "none") {
      setInfo({
        ...info,
        headThree: "flex",
        headOne: "none",
        headTwo: "none",
      });
    }
  }

  return (
    <>
      <div
        className="services-area pt-100 pb-75"
        style={{
          background: 'url("/images/backgroundImg.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          marginTop: "1vw",
        }}
      >
        <div className="container">
          <div className="section-content">
              <Link href="/products">
                <a style={{marginBottom:"2vw"}}>- Go back -</a>
              </Link>
            <h3
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                borderBottom: "3px solid black",
                paddingBottom: "3vw",
                marginBottom: "3vw",
              }}
            >
              <Link href="#" >
                <a onClick={selectone}>Visitor Management System</a>
              </Link>
              <Link href="#" >
                <a onClick={selecttwo}>Maintenance Department</a>
              </Link>
              <Link href="#" >
                <a onClick={selectthree}>Security Staff Management</a>
              </Link>
            </h3>
          </div>

          <div className="row justify-content-center" id="one" style={{display: info.headOne}}>
            {data.slice(0,6).map((item) => (
              <ContainerBodyBox
                key={item.id}
                title={item.title}
                imageSrc={item.imageSrc}
                description={item.description}
              />
            ))}
          </div>
          <div className="row justify-content-center" id="two" style={{display: info.headTwo}}>
            {data.slice(6,12).map((item) => (
              <ContainerBodyBox
                key={item.id}
                title={item.title}
                imageSrc={item.imageSrc}
                description={item.description}
              />
            ))}
          </div>
          <div className="row justify-content-center" id="three" style={{display: info.headThree}}>
            {data.slice(12).map((item) => (
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

export default PrismGateDetailsContent;
