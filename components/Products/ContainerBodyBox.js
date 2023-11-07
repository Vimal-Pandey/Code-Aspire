import React from "react";
import Image from "next/image";
import styles_specific from "styles/PrismSFADetailsContent.module.css"




function ContainerBodyBox({ title, imageSrc, imageHeight, imageWidth, description }) {
    return (
      <div className={`${styles_specific.container_body_box} container_body_box`}>
        <div className={`${styles_specific.arrange_box} arrange_box`}>
          <h1>{title}</h1>
          <Image src={imageSrc} height={imageHeight} width={imageWidth} ></Image>
        </div>
        <p>{description}</p>
      </div>
    );
  }


export default ContainerBodyBox