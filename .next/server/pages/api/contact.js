"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
;// CONCATENATED MODULE: external "sweetalert2"
const external_sweetalert2_namespaceObject = require("sweetalert2");
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_namespaceObject);
;// CONCATENATED MODULE: external "sweetalert2-react-content"
const external_sweetalert2_react_content_namespaceObject = require("sweetalert2-react-content");
var external_sweetalert2_react_content_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_react_content_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/dist/client/page-loader.js
var page_loader = __webpack_require__(6423);
;// CONCATENATED MODULE: ./lib/api.js

const api_sendContactForm = async (data)=>{
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

;// CONCATENATED MODULE: ./components/Common/ContactForm.js





const MySwal = external_sweetalert2_react_content_default()((external_sweetalert2_default()));





const ContactForm_alertError = ()=>{
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
    const { 0: contact , 1: setContact  } = useState(INITIAL_STATE);
    const { 0: loading , 1: setloading  } = useState(false);
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
            ContactForm_alertError();
        }
        setloading(false);
    };
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "talk-area ptb-100",
            children: /*#__PURE__*/ _jsx("div", {
                className: "container",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-6 col-md-12",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "talk-image",
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: "/images/talk/talk.png",
                                    alt: "image"
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-6 col-md-12",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "talk-content margin-zero",
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        children: "LET'S TALK"
                                    }),
                                    /*#__PURE__*/ _jsx("h3", {
                                        children: "We Would Like To Hear From You Anytime"
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "contact-from",
                                        children: /*#__PURE__*/ _jsx("form", {
                                            onSubmit: handleSubmit,
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "col-lg-6 col-md-6",
                                                        children: /*#__PURE__*/ _jsx("div", {
                                                            className: "form-group",
                                                            children: /*#__PURE__*/ _jsx("input", {
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
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "col-lg-6 col-md-6",
                                                        children: /*#__PURE__*/ _jsx("div", {
                                                            className: "form-group",
                                                            children: /*#__PURE__*/ _jsx("input", {
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
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "col-lg-6 col-md-6",
                                                        children: /*#__PURE__*/ _jsx("div", {
                                                            className: "form-group",
                                                            children: /*#__PURE__*/ _jsx("input", {
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
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "col-lg-6 col-md-6 col-sm-6",
                                                        children: /*#__PURE__*/ _jsx("div", {
                                                            className: "form-group",
                                                            children: /*#__PURE__*/ _jsx("input", {
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
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "col-lg-12 col-md-12 col-sm-12",
                                                        children: /*#__PURE__*/ _jsx("div", {
                                                            className: "form-group",
                                                            children: /*#__PURE__*/ _jsx("textarea", {
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
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "col-lg-12 col-md-12 col-sm-12",
                                                        children: /*#__PURE__*/ _jsxs("button", {
                                                            type: "submit",
                                                            className: "default-btn",
                                                            children: [
                                                                "Send Message",
                                                                /*#__PURE__*/ _jsx("span", {}),
                                                                loading && /*#__PURE__*/ _jsx("div", {
                                                                    className: Styles.spinner
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
/* harmony default export */ const Common_ContactForm = ((/* unused pure expression or super */ null && (ContactForm)));

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./config/nodemailer.js

const transporter = external_nodemailer_default().createTransport({
    service: "gmail",
    auth: {
        user: "rathore.as09@gmail.com",
        pass: "lsxmooyyxbkautgv"
    }
});
const mailOption = {
    from: "rathore.as09@gmail.com",
    to: "rathore.as09@gmail.com"
};

;// CONCATENATED MODULE: ./pages/api/contact.js


const generateEmailContent = (data)=>{
    const EmailIdentifier = {
        name: "Name",
        email: "Email",
        number: "Number",
        subject: "Subject",
        text: "Message"
    };
    const stringData = Object.entries(data).reduce((str, [key, val])=>{
        return str += `${EmailIdentifier[key]}: \n${val}\n \n `;
    }, "");
    const htmlData = Object.entries(data).reduce((str, [key, val])=>{
        return str += `<h1 class="form-heading" align="left">${EmailIdentifier[key]}</h1><p class="form-answer" align="left">${val}</p>`;
    }, "");
    return {
        text: stringData,
        html: `<!DOCTYPE html>
    <html>
      <head>
        <title></title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css">
          body,
          table,
          td,
          a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
          table {
            border-collapse: collapse !important;
          }
          body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }
          @media screen and (max-width: 525px) {
            .wrapper {
              width: 100% !important;
              max-width: 100% !important;
            }
            .responsive-table {
              width: 100% !important;
            }
            .padding {
              padding: 10px 5% 15px 5% !important;
            }
            .section-padding {
              padding: 0 15px 50px 15px !important;
            }
          }
          .form-container {
            margin-bottom: 24px;
            padding: 20px;
            border: 1px dashed #ccc;
          }
          .form-heading {
            color: #ff0000;
            font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            text-align: left;
            line-height: 20px;
            font-size: 24px;
            margin: 0 0 8px;
            padding: 0;
          }
          .form-answer {
            color: #009700;
            font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            font-weight: 300;
            text-align: left;
            line-height: 20px;
            font-size: 20px;
            margin: 0 0 24px;
            padding: 0;
          }
          div[style*="margin: 16px 0;"] {
            margin: 0 !important;
          }
        </style>
      </head>
      <body style="margin: 0 !important; padding: 0 !important; background: #fff">
        <div
          style="
            display: none;
            font-size: 1px;
            color: #fefefe;
            line-height: 1px;
            max-height: 0px;
            max-width: 0px;
            opacity: 0;
            overflow: hidden;
          "
        ></div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td
              bgcolor="#ffffff"
              align="center"
              style="padding: 10px 15px 30px 15px"
              class="section-padding"
            >
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 500px"
                class="responsive-table"
              >
                <tr>
                  <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <table
                            width="100%"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                          >
                            <tr>
                              <td
                                style="
                                  padding: 0 0 0 0;
                                  font-size: 16px;
                                  line-height: 25px;
                                  color: #232323;
                                "
                                class="padding message-content"
                              >
                                <h2>New Contact Message</h2>
                                <div class="form-container">${htmlData}</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`
    };
};
async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        if (!data.name || !data.email || !data.number || !data.subject || !data.text) {
            return res.status(400).json({
                message: "You Should not be here"
            });
        }
        try {
            await transporter.sendMail({
                ...mailOption,
                ...generateEmailContent(data),
                subject: data.subject
            });
            ;
            return res.status(200).json({
                success: true
            });
        } catch (error) {
            console.log(error);
            console.log(error.error.err);
            return res.status(400).json({
                message: error.message
            });
        }
    }
    return res.status(400).json({
        message: "Bad Request"
    });
}; // import nodemailer from "nodemailer";
 // import sgTransport from "nodemailer-sendgrid-transport";
 // const transporter = {
 //   auth: {
 //     // Update your SendGrid API key here
 //     api_key: "...",
 //   },
 // };
 // const mailer = nodemailer.createTransport(sgTransport(transporter));
 // export default async (req, res) => {
 //   // console.log(req.body)
 //   const { name, email, number, subject, text } = req.body;
 //   const data = {
 //     // Update your email here
 //     to: "exampleyourdomain@gmail.com",
 //     from: email,
 //     subject: "Hi there",
 //     text: text,
 //     html: `
 //             <b>From:</b> ${name} <br /> 
 //             <b>Number:</b> ${number} <br /> 
 //             <b>Subject:</b> ${subject} <br /> 
 //             <b>Message:</b> ${text} 
 //         `,
 //   };
 //   try {
 //     const response = await mailer.sendMail(data);
 //     console.log(response);
 //     res.status(200).send("Email send successfully");
 //   } catch (error) {
 //     console.log(error);
 //     res.status(500).send("Error proccessing charge");
 //   }
 // };


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [423], () => (__webpack_exec__(3944)));
module.exports = __webpack_exports__;

})();