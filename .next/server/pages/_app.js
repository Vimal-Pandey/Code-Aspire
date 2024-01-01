/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/ScrollToTop.js":
/*!******************************************!*\
  !*** ./components/Layout/ScrollToTop.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ScrollToTop = ()=>{\n    const { 0: showScroll , 1: setShowScroll  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", checkScrollTop);\n        return function cleanup() {\n            window.removeEventListener(\"scroll\", checkScrollTop);\n        };\n    });\n    const checkScrollTop = ()=>{\n        if (!showScroll && window.pageYOffset > 100) {\n            setShowScroll(true);\n        } else if (showScroll && window.pageYOffset <= 100) {\n            setShowScroll(false);\n        }\n    };\n    const scrollTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"scroll-to-top\",\n            onClick: scrollTop,\n            style: {\n                display: showScroll ? \"block\" : \"none\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"ri-arrow-up-s-line\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\components\\\\Layout\\\\ScrollToTop.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\components\\\\Layout\\\\ScrollToTop.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9TY3JvbGxUb1RvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQW1EO0FBRW5ELE1BQU1HLFdBQVcsR0FBRyxJQUFNO0lBQ3hCLE1BQU0sRUFIUixHQUdTQyxVQUFVLEdBSG5CLEdBR3FCQyxhQUFhLE1BQUlKLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBRW5EQyxnREFBUyxDQUFDLElBQU07UUFDZEksTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sU0FBU0MsT0FBTyxHQUFHO1lBQ3hCSCxNQUFNLENBQUNJLG1CQUFtQixDQUFDLFFBQVEsRUFBRUYsY0FBYyxDQUFDLENBQUM7U0FDdEQsQ0FBQztLQUNILENBQUMsQ0FBQztJQUVILE1BQU1BLGNBQWMsR0FBRyxJQUFNO1FBQzNCLElBQUksQ0FBQ0osVUFBVSxJQUFJRSxNQUFNLENBQUNLLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDM0NOLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQixNQUFNLElBQUlELFVBQVUsSUFBSUUsTUFBTSxDQUFDSyxXQUFXLElBQUksR0FBRyxFQUFFO1lBQ2xETixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDRjtJQUVELE1BQU1PLFNBQVMsR0FBRyxJQUFNO1FBQ3RCTixNQUFNLENBQUNPLFFBQVEsQ0FBQztZQUFFQyxHQUFHLEVBQUUsQ0FBQztZQUFFQyxRQUFRLEVBQUUsUUFBUTtTQUFFLENBQUMsQ0FBQztLQUNqRDtJQUVELHFCQUNFO2tCQUNFLDRFQUFDQyxLQUFHO1lBQ0ZDLFNBQVMsRUFBQyxlQUFlO1lBQ3pCQyxPQUFPLEVBQUVOLFNBQVM7WUFDbEJPLEtBQUssRUFBRTtnQkFDTEMsT0FBTyxFQUFFaEIsVUFBVSxHQUFHLE9BQU8sR0FBRyxNQUFNO2FBQ3ZDO3NCQUVELDRFQUFDaUIsR0FBQztnQkFBQ0osU0FBUyxFQUFDLG9CQUFvQjs7Ozs7eUJBQUs7Ozs7O3FCQUNsQztxQkFDTCxDQUNIO0NBQ0g7QUFFRCxpRUFBZWQsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RheC8uL2NvbXBvbmVudHMvTGF5b3V0L1Njcm9sbFRvVG9wLmpzPzQ0MWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93U2Nyb2xsLCBzZXRTaG93U2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoZWNrU2Nyb2xsVG9wKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja1Njcm9sbFRvcCk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjaGVja1Njcm9sbFRvcCA9ICgpID0+IHtcclxuICAgIGlmICghc2hvd1Njcm9sbCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPiAxMDApIHtcclxuICAgICAgc2V0U2hvd1Njcm9sbCh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoc2hvd1Njcm9sbCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPD0gMTAwKSB7XHJcbiAgICAgIHNldFNob3dTY3JvbGwoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNjcm9sbFRvcCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJzY3JvbGwtdG8tdG9wXCJcclxuICAgICAgICBvbkNsaWNrPXtzY3JvbGxUb3B9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IHNob3dTY3JvbGwgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktYXJyb3ctdXAtcy1saW5lXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxUb1RvcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTY3JvbGxUb1RvcCIsInNob3dTY3JvbGwiLCJzZXRTaG93U2Nyb2xsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrU2Nyb2xsVG9wIiwiY2xlYW51cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/ScrollToTop.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/bootstrap.min.css */ \"./styles/bootstrap.min.css\");\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/animate.min.css */ \"./styles/animate.min.css\");\n/* harmony import */ var _styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_remixicon_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/remixicon.css */ \"./styles/remixicon.css\");\n/* harmony import */ var _styles_remixicon_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_remixicon_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/navbar.css */ \"./styles/navbar.css\");\n/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/footer.css */ \"./styles/footer.css\");\n/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/responsive.css */ \"./styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _components_Layout_ScrollToTop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/Layout/ScrollToTop */ \"./components/Layout/ScrollToTop.js\");\n\n\n\n\n\n\n\n\n\n\n// Navbar CSS\n\n// Footer CSS\n\n// Globals CSS\n\n// Responsive CSS\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_2___default().init();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_14___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Code Aspire | a creative graphic - web design, software, product development company based at Kanpur, India\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charset: \"UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"X-UA-Compatible\",\n                        content: \"IE=edge,chrome=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"google-site-verification\",\n                        content: \"9ayOk7hs8MyNRZwiPg-Y52QcNBGobX8ECCVqMPA1VPY\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Code Aspire Pvt. Ltd. is a graphic, web design, mobile app, and web application development company based in Kanpur India\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"webdesign,website,web design,kanpur,mobile,ios,android,startup,india,noida,vector microstock,design,logo,illustrations,application,business,card,business card,web development,web design india,web development india,web design usa,web design kanpur,web development kanpur,web design company,web development in the uk,illustration design,stock images,agency,web design in the uk,e-commerce,specialists uk,corporate internet services india,internet consultant india,content,management india,designers india,application development leeds,database development,design services,usability,accessibility,web development leeds,india web site design,web solutions,website design,website solutions,leeds website development,india web,website build,ria,flex,flash,actionscript,actionscript3,as2,as3,ajax,html,dhtml,css,xhtml,mysql,sql java,asp,.net,server,consultants,web agency,web development agency,html5,css3,iphone,blackberry,symfony,joomla,php,crm,cms,wordpress,ex-yahoo,adobe,rich internet application,web application,flash animation,adobe flash,adobe flex,air,adobe air,microformats,semantic,markup,ebook,publishing,print,media,ffmpeg,video,transcoding,technologist\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:site_name\",\n                        content: \"Code Aspire - Be Innovative\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"article\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"Code Aspire | a creative graphic - web design, software, product development company based at Kanpur, India\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: \"Code Aspire Pvt. Ltd. is a graphic, web design, mobile app, and web application development company based in Kanpur India\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_ScrollToTop__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenov\\\\OneDrive\\\\Desktop\\\\code-aspire\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDSjtBQUNvQjtBQUNMO0FBQ0Y7QUFDRjtBQUMwQjtBQUN2QztBQUNPO0FBQzNCLGFBQWE7QUFDaUI7QUFDOUIsYUFBYTtBQUNpQjtBQUM5QixjQUFjO0FBQ2lCO0FBQy9CLGlCQUFpQjtBQUNpQjtBQUVMO0FBQzZCO0FBRTFELFNBQVNJLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDTixzREFBZSxDQUFDLElBQU07UUFDcEJDLCtDQUFRLEVBQUUsQ0FBQztLQUNaLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxxQkFDRTs7MEJBQ0UsOERBQUNDLG1EQUFJOztrQ0FDSCw4REFBQ08sT0FBSztrQ0FBQyw2R0FHUDs7Ozs7NEJBQVE7a0NBRVIsOERBQUNDLE1BQUk7d0JBQUNDLE9BQU8sRUFBQyxPQUFPOzs7Ozs0QkFBRztrQ0FDeEIsOERBQUNELE1BQUk7d0JBQUNFLElBQUksRUFBQyxpQkFBaUI7d0JBQUNDLE9BQU8sRUFBQyxrQkFBa0I7Ozs7OzRCQUFHO2tDQUMxRCw4REFBQ0gsTUFBSTt3QkFBQ0UsSUFBSSxFQUFDLFVBQVU7d0JBQUNDLE9BQU8sRUFBQyx1Q0FBdUM7Ozs7OzRCQUFHO2tDQUN4RSw4REFBQ0gsTUFBSTt3QkFBQ0UsSUFBSSxFQUFDLDBCQUEwQjt3QkFBQ0MsT0FBTyxFQUFDLDZDQUE2Qzs7Ozs7NEJBQUc7a0NBQzlGLDhEQUFDSCxNQUFJO3dCQUNIRSxJQUFJLEVBQUMsYUFBYTt3QkFDbEJDLE9BQU8sRUFBQywySEFBMkg7Ozs7OzRCQUNuSTtrQ0FDRiw4REFBQ0gsTUFBSTt3QkFDSEUsSUFBSSxFQUFDLFVBQVU7d0JBQ2ZDLE9BQU8sRUFBQyx5b0NBQXlvQzs7Ozs7NEJBQ2pwQztrQ0FDRiw4REFBQ0gsTUFBSTt3QkFBQ0ksUUFBUSxFQUFDLGNBQWM7d0JBQUNELE9BQU8sRUFBQyw2QkFBNkI7Ozs7OzRCQUFHO2tDQUN0RSw4REFBQ0gsTUFBSTt3QkFBQ0ksUUFBUSxFQUFDLFNBQVM7d0JBQUNELE9BQU8sRUFBQyxTQUFTOzs7Ozs0QkFBRztrQ0FDN0MsOERBQUNILE1BQUk7d0JBQ0hJLFFBQVEsRUFBQyxVQUFVO3dCQUNuQkQsT0FBTyxFQUFDLDZHQUE2Rzs7Ozs7NEJBQ3JIO2tDQUNGLDhEQUFDSCxNQUFJO3dCQUNISSxRQUFRLEVBQUMsZ0JBQWdCO3dCQUN6QkQsT0FBTyxFQUFDLDJIQUEySDs7Ozs7NEJBQ25JOzs7Ozs7b0JBQ0c7MEJBRVAsOERBQUNSLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7MEJBRTVCLDhEQUFDSCx1RUFBVzs7OztvQkFBRzs7b0JBQ2QsQ0FDSDtDQUNIO0FBRUQsaUVBQWVDLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXgvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcclxuaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9hbmltYXRlLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3JlbWl4aWNvbi5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtYWNjZXNzaWJsZS1hY2NvcmRpb24vZGlzdC9mYW5jeS1leGFtcGxlLmNzc1wiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvYnVuZGxlXCI7XHJcbi8vIE5hdmJhciBDU1NcclxuaW1wb3J0IFwiLi4vc3R5bGVzL25hdmJhci5jc3NcIjtcclxuLy8gRm9vdGVyIENTU1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZm9vdGVyLmNzc1wiO1xyXG4vLyBHbG9iYWxzIENTU1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuLy8gUmVzcG9uc2l2ZSBDU1NcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3Jlc3BvbnNpdmUuY3NzXCI7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dC9TY3JvbGxUb1RvcFwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEFPUy5pbml0KCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICBDb2RlIEFzcGlyZSB8IGEgY3JlYXRpdmUgZ3JhcGhpYyAtIHdlYiBkZXNpZ24sIHNvZnR3YXJlLCBwcm9kdWN0XHJcbiAgICAgICAgICBkZXZlbG9wbWVudCBjb21wYW55IGJhc2VkIGF0IEthbnB1ciwgSW5kaWFcclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlLGNocm9tZT0xXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiIGNvbnRlbnQ9XCI5YXlPazdoczhNeU5SWndpUGctWTUyUWNOQkdvYlg4RUNDVnFNUEExVlBZXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJDb2RlIEFzcGlyZSBQdnQuIEx0ZC4gaXMgYSBncmFwaGljLCB3ZWIgZGVzaWduLCBtb2JpbGUgYXBwLCBhbmQgd2ViIGFwcGxpY2F0aW9uIGRldmVsb3BtZW50IGNvbXBhbnkgYmFzZWQgaW4gS2FucHVyIEluZGlhXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwia2V5d29yZHNcIlxyXG4gICAgICAgICAgY29udGVudD1cIndlYmRlc2lnbix3ZWJzaXRlLHdlYiBkZXNpZ24sa2FucHVyLG1vYmlsZSxpb3MsYW5kcm9pZCxzdGFydHVwLGluZGlhLG5vaWRhLHZlY3RvciBtaWNyb3N0b2NrLGRlc2lnbixsb2dvLGlsbHVzdHJhdGlvbnMsYXBwbGljYXRpb24sYnVzaW5lc3MsY2FyZCxidXNpbmVzcyBjYXJkLHdlYiBkZXZlbG9wbWVudCx3ZWIgZGVzaWduIGluZGlhLHdlYiBkZXZlbG9wbWVudCBpbmRpYSx3ZWIgZGVzaWduIHVzYSx3ZWIgZGVzaWduIGthbnB1cix3ZWIgZGV2ZWxvcG1lbnQga2FucHVyLHdlYiBkZXNpZ24gY29tcGFueSx3ZWIgZGV2ZWxvcG1lbnQgaW4gdGhlIHVrLGlsbHVzdHJhdGlvbiBkZXNpZ24sc3RvY2sgaW1hZ2VzLGFnZW5jeSx3ZWIgZGVzaWduIGluIHRoZSB1ayxlLWNvbW1lcmNlLHNwZWNpYWxpc3RzIHVrLGNvcnBvcmF0ZSBpbnRlcm5ldCBzZXJ2aWNlcyBpbmRpYSxpbnRlcm5ldCBjb25zdWx0YW50IGluZGlhLGNvbnRlbnQsbWFuYWdlbWVudCBpbmRpYSxkZXNpZ25lcnMgaW5kaWEsYXBwbGljYXRpb24gZGV2ZWxvcG1lbnQgbGVlZHMsZGF0YWJhc2UgZGV2ZWxvcG1lbnQsZGVzaWduIHNlcnZpY2VzLHVzYWJpbGl0eSxhY2Nlc3NpYmlsaXR5LHdlYiBkZXZlbG9wbWVudCBsZWVkcyxpbmRpYSB3ZWIgc2l0ZSBkZXNpZ24sd2ViIHNvbHV0aW9ucyx3ZWJzaXRlIGRlc2lnbix3ZWJzaXRlIHNvbHV0aW9ucyxsZWVkcyB3ZWJzaXRlIGRldmVsb3BtZW50LGluZGlhIHdlYix3ZWJzaXRlIGJ1aWxkLHJpYSxmbGV4LGZsYXNoLGFjdGlvbnNjcmlwdCxhY3Rpb25zY3JpcHQzLGFzMixhczMsYWpheCxodG1sLGRodG1sLGNzcyx4aHRtbCxteXNxbCxzcWwgamF2YSxhc3AsLm5ldCxzZXJ2ZXIsY29uc3VsdGFudHMsd2ViIGFnZW5jeSx3ZWIgZGV2ZWxvcG1lbnQgYWdlbmN5LGh0bWw1LGNzczMsaXBob25lLGJsYWNrYmVycnksc3ltZm9ueSxqb29tbGEscGhwLGNybSxjbXMsd29yZHByZXNzLGV4LXlhaG9vLGFkb2JlLHJpY2ggaW50ZXJuZXQgYXBwbGljYXRpb24sd2ViIGFwcGxpY2F0aW9uLGZsYXNoIGFuaW1hdGlvbixhZG9iZSBmbGFzaCxhZG9iZSBmbGV4LGFpcixhZG9iZSBhaXIsbWljcm9mb3JtYXRzLHNlbWFudGljLG1hcmt1cCxlYm9vayxwdWJsaXNoaW5nLHByaW50LG1lZGlhLGZmbXBlZyx2aWRlbyx0cmFuc2NvZGluZyx0ZWNobm9sb2dpc3RcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiQ29kZSBBc3BpcmUgLSBCZSBJbm5vdmF0aXZlXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYXJ0aWNsZVwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxyXG4gICAgICAgICAgY29udGVudD1cIkNvZGUgQXNwaXJlIHwgYSBjcmVhdGl2ZSBncmFwaGljIC0gd2ViIGRlc2lnbiwgc29mdHdhcmUsIHByb2R1Y3QgZGV2ZWxvcG1lbnQgY29tcGFueSBiYXNlZCBhdCBLYW5wdXIsIEluZGlhXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJDb2RlIEFzcGlyZSBQdnQuIEx0ZC4gaXMgYSBncmFwaGljLCB3ZWIgZGVzaWduLCBtb2JpbGUgYXBwLCBhbmQgd2ViIGFwcGxpY2F0aW9uIGRldmVsb3BtZW50IGNvbXBhbnkgYmFzZWQgaW4gS2FucHVyIEluZGlhXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblxyXG4gICAgICA8U2Nyb2xsVG9Ub3AgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBT1MiLCJIZWFkIiwiU2Nyb2xsVG9Ub3AiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsImluaXQiLCJ0aXRsZSIsIm1ldGEiLCJjaGFyc2V0IiwibmFtZSIsImNvbnRlbnQiLCJwcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.min.css":
/*!***************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.min.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/animate.min.css":
/*!********************************!*\
  !*** ./styles/animate.min.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/bootstrap.min.css":
/*!**********************************!*\
  !*** ./styles/bootstrap.min.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/footer.css":
/*!***************************!*\
  !*** ./styles/footer.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/navbar.css":
/*!***************************!*\
  !*** ./styles/navbar.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/remixicon.css":
/*!******************************!*\
  !*** ./styles/remixicon.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/responsive.css":
/*!*******************************!*\
  !*** ./styles/responsive.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();