import React from "react";
// import styles from "../../pages/Changes.module.css";
import styles from "../../styles/PrismGateDetailsContent.module.css"
import Images from "next/image"
import { useState } from 'react'

function PrismGateDetailsContent() {

const [headOne, setHeadOne] = useState('visible')
const [headTwo, setHeadTwo] = useState('hidden')
const [headThree, setHeadThree] = useState('hidden')
const [colorOne, setColorOne] = useState('rgb(63, 0, 134)')
const [colorTwo, setColorTwo] = useState('white')
const [colorThree, setColorThree] = useState('white')

function selectone () {
    if(headOne === 'hidden'){
        setHeadThree('hidden')
        setHeadOne('visible')
        setHeadTwo('hidden')
        setColorOne('rgb(63, 0, 134)')
        setColorTwo('white')
        setColorThree('white')
    }
}

function selecttwo () {
    if(headTwo === 'hidden'){
        setHeadThree('hidden')
        setHeadOne('hidden')
        setHeadTwo('visible')
        setColorOne('white')
        setColorTwo('rgb(63, 0, 134)')
        setColorThree('white')
    }
}

function selectthree () {
    if(headThree === 'hidden'){
        setHeadThree('visible')
        setHeadOne('hidden')
        setHeadTwo('hidden')
        setColorOne('white')
        setColorTwo('white')
        setColorThree('rgb(63, 0, 134)')
    }
}



  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span className={`${styles.title} ${styles.head_1}`} onClick={selectone} style={{color: `${colorOne}`}}>Visitor Management System</span>
        <span className={`${styles.title} ${styles.head_2}`} onClick={selecttwo} style={{color: `${colorTwo}`}}>Maintenance Department</span>       
        <span className={`${styles.title} ${styles.head_3}`} onClick={selectthree} style={{color: `${colorThree}`}}>Security Staff Management</span>
      </div>

  
      <div id='one' style={{visibility:`${headOne}`}} className={styles.container_body}>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
                <h1>Domestic Staff Management</h1>
                <Images src="/Clipart/1.png" height={250} width={300}></Images>
            </div>
            <p>Specify each employee's duties and responsibilities. Make sure they know what is anticipated of them. Establish and distribute precise work schedules. Keep tabs on their presence.</p>
        </div>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
                <h1>Maintenance and Utility Bill Payments</h1>
                <Images src="/Clipart/2.png" height={250} width={300}></Images>
            </div>
            <p>Select your favorite way of receiving money. This could be accomplished by using a specialized bill payment service, financial management software, mobile banking, or internet banking.</p>
        </div>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
                <h1>Communication management</h1>
                <Images src="/Clipart/3.png" height={250} width={300}></Images>

            </div>
            <p>Establish discussion boards where locals may converse about issues pertaining to the community, exchange information, and pose questions. Ensure that these discussion boards are moderated to ensure a civil and productive atmosphere.</p>
        </div>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
                <h1>Managing Safety and Security</h1>
                <Images src="/Clipart/4.png" height={250} width={300}></Images>
            </div>
            <p>Identification and evaluation of potential risks and hazards in a given environment or operation is the first step in safety management. This entails being aware of both current and possible hazards. We have the SOS feature.</p>
        </div>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
                <h1>Managing Customer Feedback Effectively</h1>
                <Images src="/Clipart/5.png" height={250} width={300}></Images>
            </div>
            <p>Simplified complaint procedures increase client happiness and trust. We provide recommendations for a customer-focused system that enhances tracking, submissions, and brand loyalty in the cutthroat commercial world.</p>
        </div>
      </div>

      <div id='two' style={{visibility:`${headTwo}`}} className={styles.container_body}>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
            <h1>Accounts & Billing Solution</h1>
            <Images src="/Clipart/6.png" height={250} width={300}></Images>
            </div>
            <p>Maintain accurate financial records, including income, expenses, and transactions. This involves recording all financial activities and ensuring that they align with the budget.</p>
        </div>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
            <h1>Maintenance & Utility Bill Payments</h1>
            <Images src="/Clipart/7.png" height={250} width={300}></Images>
            </div>
            <p>Automate invoice creation for maintenance and utilities using software. Input billing details and ensure clear information on due dates, payment methods, amount due, and a breakdown of charges.</p>
        </div>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
            <h1>Residents & Apartments Management</h1>
            <Images src="/Clipart/8.png" height={250} width={300}></Images>
            </div>
            <p>Assign each resident to their respective apartment or unit. Ensure that the allocation is up to date and reflects the current occupancy status</p>
        </div>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
            <h1>Complaint Management and Security</h1>
            <Images src="/Clipart/9.png" height={250} width={300}></Images>
            </div>
            <p>Consider using property management software or a customer relationship management (CRM) system to streamline the issue tracking process, automate notifications, and manage communication more efficiently.</p>
        </div>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
            <h1>Digitised Communications</h1>
            <Images src="/Clipart/10.png" height={250} width={300}></Images>
            </div>
            <p>Promptly acknowledge the issue, using automated or personal responses, to reassure residents. Keep them updated on issue status and expected resolution times for effective communication.</p>
        </div>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
            <h1>Manage Staff and Vendors</h1>
            <Images src="/Clipart/11.png" height={250} width={300}></Images>
            </div>
            <p>Clearly define job roles, expectations, and performance standards for each staff member and Vendor.Communicate company values, mission, and goals to create a shared sense of purpose.</p>
        </div>

      </div>

      <div id='three' style={{visibility:`${headThree}`}} className={styles.container_body}>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
            <h1>Visitor Management System</h1>
            <Images src="/Clipart/12.png" height={250} width={300}></Images>
            </div>
            <p>A Visitor Management System (VMS) is a software application or system designed to efficiently and securely manage the entry and exit of visitors to a facility or premises using QR code enabled which help to hassle free authorize access.</p>
        </div>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
            <h1>Services and Staff Monitoring</h1>
            <Images src="/Clipart/13.png" height={250} width={300}></Images>
            </div>
            <p>Effective monitoring is vital for efficiency, compliance, and resource management. It offers insights, optimizes resource allocation, and ensures standards compliance. Robust monitoring is key to organizational success. </p>
        </div>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
            <h1>User-friendly and Intuitive Guard App</h1>
            <Images src="/Clipart/14.png" height={250} width={300}></Images>
            </div>
            <p>Creating a user-friendly and intuitive guard app is essential for security personnel to efficiently manage their responsibilities.<b>This app is designed to keep things simple so that guards can use it efficiently.</b></p>
        </div>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
            <h1>Facility Services Oversight</h1>
            <Images src="/Clipart/15.png" height={250} width={300}></Images>
            </div>
            <p>Amenities management involves the efficient and effective operation, maintenance, and enhancement of amenities within a property or facility. Here's a guide to amenities anagement</p>
        </div>
        <div className={styles.container_body_box}>
            <div className={styles.arrange_box}>
            <h1>Administration Application Access</h1>
            <Images src="/Clipart/16.png" height={250} width={300}></Images>
            </div>
            <p>An admin app, short for administrative application, streamlines tasks like <b>scheduling, document management, and data analysis for efficient operations.</b> It's a vital tool for modern organizations.</p>
        </div>
        
      </div>
  
    </div>
  )
}

export default PrismGateDetailsContent