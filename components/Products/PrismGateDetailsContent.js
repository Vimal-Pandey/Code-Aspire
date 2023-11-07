import React from "react";
import data from "pages/static_Data/PrismGateData.json";
import styles from "../../styles/PrismGateDetailsContent.module.css"
import ContainerBodyBox from "./ContainerBodyBox";
import { useState } from 'react'

function PrismGateDetailsContent() {

const active_color = 'rgb(63, 0, 134)';
const inactive_color = 'white';

const [info, setInfo] = useState({
  headOne: 'visible',
  headTwo: 'hidden',
  headThree: 'hidden',
  colorOne: active_color,
  colorTwo: inactive_color,
  colorThree: inactive_color
});

function selectone () {
    if(info.headOne === 'hidden'){
        setInfo({
          ...info,
          headThree: 'hidden',
          headOne: 'visible',
          headTwo: 'hidden',
          colorOne: active_color,
          colorTwo: inactive_color,
          colorThree: inactive_color
        });
    }
}

function selecttwo () {
    if(info.headTwo === 'hidden'){
        setInfo({
          ...info,
          headThree: 'hidden',
          headOne: 'hidden',
          headTwo: 'visible',
          colorOne: inactive_color,
          colorTwo: active_color,
          colorThree: inactive_color
        });
    }
}

function selectthree () {
    if(info.headThree === 'hidden'){
        setInfo({
          ...info,
          headThree: 'visible',
          headOne: 'hidden',
          headTwo: 'hidden',
          colorOne: inactive_color,
          colorTwo: inactive_color,
          colorThree: active_color
        });
    }
}
  

  return (
    <div className={styles.container}>
      <div className={`${styles.head} head`}>
        <span className={`${styles.title} ${styles.head_1} title`} onClick={selectone} style={{color: `${info.colorOne}`}}>Visitor Management System</span>
        <span className={`${styles.title} ${styles.head_2} title`} onClick={selecttwo} style={{color: `${info.colorTwo}`}}>Maintenance Department</span>       
        <span className={`${styles.title} ${styles.head_3} title`} onClick={selectthree} style={{color: `${info.colorThree}`}}>Security Staff Management</span>
      </div>
 
          
      <div id='one' style={{visibility:`${info.headOne}`}} className={`${styles.container_body} container_body`}>
        {data.slice(0,5).map((item) => (
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

      <div id='two' style={{visibility:`${info.headTwo}`}} className={`${styles.container_body} container_body`}>
      {data.slice(5, 11).map((item) => (
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

      <div id='three' style={{visibility:`${info.headThree}`}} className={`${styles.container_body} container_body`}>
      {data.slice(11).map((item) => (
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
  )

}

export default PrismGateDetailsContent;
