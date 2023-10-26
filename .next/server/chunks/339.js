"use strict";
exports.id = 339;
exports.ids = [339];
exports.modules = {

/***/ 7339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d9": () => (/* binding */ alertError),
  "ZP": () => (/* binding */ Common_ContactForm)
});

// UNUSED EXPORTS: alertContent

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
// EXTERNAL MODULE: external "sweetalert2-react-content"
var external_sweetalert2_react_content_ = __webpack_require__(3810);
var external_sweetalert2_react_content_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_react_content_);
// EXTERNAL MODULE: ./node_modules/next/dist/client/page-loader.js
var page_loader = __webpack_require__(976);
// EXTERNAL MODULE: ./pages/Changes.module.css
var Changes_module = __webpack_require__(5079);
var Changes_module_default = /*#__PURE__*/__webpack_require__.n(Changes_module);
;// CONCATENATED MODULE: ./lib/api.js

const sendContactForm = async (data)=>{
    try {
        const resp = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json "
            }
        });
        return resp.status;
    } catch (error) {
        console.log(error);
        alertError();
        return "Error";
    }
};

;// CONCATENATED MODULE: ./helper/emailValidator.js
function emailValidator(email) {
    const re = /\S+@\S+\.\S+/;
    if (!email) return "Email can't be empty.";
    if (!re.test(email)) return "Ooops! We need a valid email address.";
    return "";
}

;// CONCATENATED MODULE: ./components/Common/ContactForm.js





const MySwal = external_sweetalert2_react_content_default()((external_sweetalert2_default()));





const alertError = ()=>{
    MySwal.fire({
        title: "Something Went Wrong",
        text: "Please Try After Some Time",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
    });
};
const alertContent = ()=>{
    MySwal.fire({
        title: "Congratulations!",
        text: "Your message was successfully send and will back to you soon",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
    });
};
// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};
const ContactForm = ()=>{
    const { 0: contact , 1: setContact  } = (0,external_react_.useState)(INITIAL_STATE);
    const { 0: loading , 1: setloading  } = (0,external_react_.useState)(false);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setContact((prevState)=>({
                ...prevState,
                [name]: value
            })
        );
    // console.log(contact)
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const emailError = emailValidator(contact.email);
        if (contact.number.length < 10) {
            return MySwal.fire({
                title: "Please Enter a Vaild Number",
                text: "Make You Enter a Valid Number  ",
                icon: "warning",
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false
            });
        }
        if (emailError) {
            return MySwal.fire({
                title: "Invalid Email",
                text: emailError,
                icon: "warning",
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false
            });
        }
        setloading(true);
        const resp = await sendContactForm(contact);
        if (resp === 200) {
            alertContent();
            setContact(INITIAL_STATE);
        } else {
            alertError();
        }
        setloading(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "talk-area ptb-100",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-6 col-md-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "talk-image",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                    src: "/images/talk/talk.png",
                                    alt: "image"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-6 col-md-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "talk-content margin-zero",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        children: "LET'S TALK"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                        children: "We Would Like To Hear From You Anytime"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "contact-from",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("form", {
                                            onSubmit: handleSubmit,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: "col-lg-6 col-md-6",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "form-group",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                                type: "text",
                                                                name: "name",
                                                                className: "form-control",
                                                                placeholder: "Your name",
                                                                value: contact.name,
                                                                onChange: handleChange,
                                                                required: true
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: "col-lg-6 col-md-6",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "form-group",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                                type: "text",
                                                                name: "email",
                                                                className: "form-control",
                                                                placeholder: "Your email address",
                                                                value: contact.email,
                                                                onChange: handleChange,
                                                                required: true
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: "col-lg-6 col-md-6",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "form-group",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                                type: "text",
                                                                name: "subject",
                                                                className: "form-control",
                                                                placeholder: "Your Subject",
                                                                value: contact.subject,
                                                                onChange: handleChange,
                                                                required: true
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: "col-lg-6 col-md-6 col-sm-6",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "form-group",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                                type: "tel",
                                                                name: "number",
                                                                className: "form-control",
                                                                value: contact.number,
                                                                onChange: handleChange,
                                                                placeholder: "Your Phone",
                                                                maxLength: 10,
                                                                required: true
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: "col-lg-12 col-md-12 col-sm-12",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "form-group",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("textarea", {
                                                                name: "text",
                                                                cols: "30",
                                                                rows: "6",
                                                                className: "form-control",
                                                                placeholder: "Your message...",
                                                                value: contact.text,
                                                                onChange: handleChange,
                                                                required: true
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: "col-lg-12 col-md-12 col-sm-12",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            type: "submit",
                                                            className: "default-btn",
                                                            children: [
                                                                "Send Message",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {}),
                                                                loading && /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: (Changes_module_default()).spinner
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Common_ContactForm = (ContactForm);


/***/ })

};
;