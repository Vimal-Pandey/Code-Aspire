"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Layout/ScrollToTop.js


const ScrollToTop = ()=>{
    const { 0: showScroll , 1: setShowScroll  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", checkScrollTop);
        return function cleanup() {
            window.removeEventListener("scroll", checkScrollTop);
        };
    });
    const checkScrollTop = ()=>{
        if (!showScroll && window.pageYOffset > 100) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 100) {
            setShowScroll(false);
        }
    };
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "scroll-to-top",
            onClick: scrollTop,
            style: {
                display: showScroll ? "block" : "none"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                className: "ri-arrow-up-s-line"
            })
        })
    });
};
/* harmony default export */ const Layout_ScrollToTop = (ScrollToTop);

;// CONCATENATED MODULE: ./pages/_app.js










// Navbar CSS

// Footer CSS

// Globals CSS

// Responsive CSS



function MyApp({ Component , pageProps  }) {
    external_react_default().useEffect(()=>{
        external_aos_default().init();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("title", {
                        children: "Code Aspire | a creative graphic - web design, software, product development company based at Kanpur, India"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        name: "description",
                        content: "Code Aspire Pvt. Ltd. is a graphic, web design, mobile app, and web application development company based in Kanpur India"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        name: "keywords",
                        content: "webdesign,website,web design,kanpur,mobile,ios,android,startup,india,noida,vector microstock,design,logo,illustrations,application,business,card,business card,web development,web design india,web development india,web design usa,web design kanpur,web development kanpur,web design company,web development in the uk,illustration design,stock images,agency,web design in the uk,e-commerce,specialists uk,corporate internet services india,internet consultant india,content,management india,designers india,application development leeds,database development,design services,usability,accessibility,web development leeds,india web site design,web solutions,website design,website solutions,leeds website development,india web,website build,ria,flex,flash,actionscript,actionscript3,as2,as3,ajax,html,dhtml,css,xhtml,mysql,sql java,asp,.net,server,consultants,web agency,web development agency,html5,css3,iphone,blackberry,symfony,joomla,php,crm,cms,wordpress,ex-yahoo,adobe,rich internet application,web application,flash animation,adobe flash,adobe flex,air,adobe air,microformats,semantic,markup,ebook,publishing,print,media,ffmpeg,video,transcoding,technologist"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        property: "og:site_name",
                        content: "Code Aspire - Be Innovative"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        property: "og:title",
                        content: "Code Aspire | a creative graphic - web design, software, product development company based at Kanpur, India"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        property: "og:description",
                        content: "Code Aspire Pvt. Ltd. is a graphic, web design, mobile app, and web application development company based in Kanpur India"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Layout_ScrollToTop, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3802));
module.exports = __webpack_exports__;

})();