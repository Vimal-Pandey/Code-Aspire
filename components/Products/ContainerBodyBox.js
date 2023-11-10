import React from "react";
import Image from "next/image";
import styles_specific from "styles/PrismSFADetailsContent.module.css"




function ContainerBodyBox({ title, imageSrc, imageHeight, imageWidth, description }) {
  function calc(value) {
    value = (value/80)*100;
    return value;
  }
    return (
      <div className={`${styles_specific.container_body_box} container_body_box`}>
        <div className={`${styles_specific.arrange_box} arrange_box`}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
          <Image src={imageSrc} height={calc(imageHeight)} width={calc(imageWidth)} ></Image>
      </div>
    );
  }


export default ContainerBodyBox