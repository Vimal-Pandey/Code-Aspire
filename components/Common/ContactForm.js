import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "@/utils/baseUrl";
import PageLoader from "next/dist/client/page-loader";
import Styles from "../../pages/Changes.module.css"
import { sendContactForm } from "lib/api";
import { emailValidator } from "helper/emailValidator";

export const alertError = ()=>{
  MySwal.fire({
    title: "Something Went Wrong",
    text: "Please Try After Some Time",
    icon: "error",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  })
}
export const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  
  const [loading,setloading] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const emailError = emailValidator(contact.email)
    if (contact.number.length <10){
      return MySwal.fire({
        title: "Please Enter a Vaild Number",
        text: "Make You Enter a Valid Number  ",
        icon: "warning",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      })
        }
        if (emailError){
          return MySwal.fire({
            title:"Invalid Email",
            text:emailError,
            icon:"warning",
            timer:2000,
            timerProgressBar:true,
            showConfirmButton:false
          })
        }
    setloading(true)
    const resp =  await sendContactForm(contact)
    if (resp === 200){
      alertContent()
      setContact(INITIAL_STATE)
    }
    else {
      alertError()
    }
     setloading(false)
   
  };

    
  return (
    <>
    
      <div className="talk-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="talk-image">
                <img src="/images/talk/talk.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="talk-content margin-zero">
                
                <span>LET&apos;S TALK</span>
                <h3>We Would Like To Hear From You Anytime</h3>

                <div className="contact-from">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your name"
                            value={contact.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Your email address"
                            value={contact.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="Your Subject"
                            value={contact.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            name="number"
                            className="form-control"
                            value={contact.number}
                            onChange={handleChange}
                            placeholder="Your Phone"
                            maxLength={10}
                            required
                            
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <textarea
                            name="text"
                            cols="30"
                            rows="6"
                            className="form-control"
                            placeholder="Your message..."
                            value={contact.text}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <button  type="submit" className="default-btn">
                          Send Message<span></span>
                          {loading &&<div className={Styles.spinner}></div>}
                        </button>
                      
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
