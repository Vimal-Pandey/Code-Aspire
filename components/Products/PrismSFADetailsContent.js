import data from "pages/static_Data/PrismSFAData.json";
import React from "react";
import styles_specific from "styles/PrismSFADetailsContent.module.css"
import ContainerBodyBox from "./ContainerBodyBox";


function PrismSFADetailsContent() {
  return (
    <div className={styles_specific.container} >
      <div className='head'>
        <span className="title head_3" >Visitor Management System</span>
      </div>

      <div id='one' className="container_body">
        {data.map((item) => (
          <ContainerBodyBox
            key={item.id}
            title={item.title}
            imageSrc={item.imageSrc}
            imageHeight={item.imageHeight}
            imageWidth={item.imageWidth}
            description={item.description}
          />
        ))}
      </div>
      
    </div>
  );
}

export default PrismSFADetailsContent;

