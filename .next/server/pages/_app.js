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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ScrollToTop = ()=>{\n    const { 0: showScroll , 1: setShowScroll  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", checkScrollTop);\n        return function cleanup() {\n            window.removeEventListener(\"scroll\", checkScrollTop);\n        };\n    });\n    const checkScrollTop = ()=>{\n        if (!showScroll && window.pageYOffset > 100) {\n            setShowScroll(true);\n        } else if (showScroll && window.pageYOffset <= 100) {\n            setShowScroll(false);\n        }\n    };\n    const scrollTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"scroll-to-top\",\n            onClick: scrollTop,\n            style: {\n                display: showScroll ? \"block\" : \"none\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"ri-arrow-up-s-line\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Repositery\\\\Code-Aspire\\\\components\\\\Layout\\\\ScrollToTop.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"F:\\\\Repositery\\\\Code-Aspire\\\\components\\\\Layout\\\\ScrollToTop.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9TY3JvbGxUb1RvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQW1EO0FBRW5ELE1BQU1HLFdBQVcsR0FBRyxJQUFNO0lBQ3hCLE1BQU0sRUFIUixHQUdTQyxVQUFVLEdBSG5CLEdBR3FCQyxhQUFhLE1BQUlKLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBRW5EQyxnREFBUyxDQUFDLElBQU07UUFDZEksTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sU0FBU0MsT0FBTyxHQUFHO1lBQ3hCSCxNQUFNLENBQUNJLG1CQUFtQixDQUFDLFFBQVEsRUFBRUYsY0FBYyxDQUFDLENBQUM7U0FDdEQsQ0FBQztLQUNILENBQUMsQ0FBQztJQUVILE1BQU1BLGNBQWMsR0FBRyxJQUFNO1FBQzNCLElBQUksQ0FBQ0osVUFBVSxJQUFJRSxNQUFNLENBQUNLLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDM0NOLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQixNQUFNLElBQUlELFVBQVUsSUFBSUUsTUFBTSxDQUFDSyxXQUFXLElBQUksR0FBRyxFQUFFO1lBQ2xETixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDRjtJQUVELE1BQU1PLFNBQVMsR0FBRyxJQUFNO1FBQ3RCTixNQUFNLENBQUNPLFFBQVEsQ0FBQztZQUFFQyxHQUFHLEVBQUUsQ0FBQztZQUFFQyxRQUFRLEVBQUUsUUFBUTtTQUFFLENBQUMsQ0FBQztLQUNqRDtJQUVELHFCQUNFO2tCQUNFLDRFQUFDQyxLQUFHO1lBQ0ZDLFNBQVMsRUFBQyxlQUFlO1lBQ3pCQyxPQUFPLEVBQUVOLFNBQVM7WUFDbEJPLEtBQUssRUFBRTtnQkFDTEMsT0FBTyxFQUFFaEIsVUFBVSxHQUFHLE9BQU8sR0FBRyxNQUFNO2FBQ3ZDO3NCQUVELDRFQUFDaUIsR0FBQztnQkFBQ0osU0FBUyxFQUFDLG9CQUFvQjs7Ozs7eUJBQUs7Ozs7O3FCQUNsQztxQkFDTCxDQUNIO0NBQ0g7QUFFRCxpRUFBZWQsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RheC8uL2NvbXBvbmVudHMvTGF5b3V0L1Njcm9sbFRvVG9wLmpzPzQ0MWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93U2Nyb2xsLCBzZXRTaG93U2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoZWNrU2Nyb2xsVG9wKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja1Njcm9sbFRvcCk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjaGVja1Njcm9sbFRvcCA9ICgpID0+IHtcclxuICAgIGlmICghc2hvd1Njcm9sbCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPiAxMDApIHtcclxuICAgICAgc2V0U2hvd1Njcm9sbCh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoc2hvd1Njcm9sbCAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPD0gMTAwKSB7XHJcbiAgICAgIHNldFNob3dTY3JvbGwoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNjcm9sbFRvcCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJzY3JvbGwtdG8tdG9wXCJcclxuICAgICAgICBvbkNsaWNrPXtzY3JvbGxUb3B9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IHNob3dTY3JvbGwgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktYXJyb3ctdXAtcy1saW5lXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxUb1RvcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTY3JvbGxUb1RvcCIsInNob3dTY3JvbGwiLCJzZXRTaG93U2Nyb2xsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrU2Nyb2xsVG9wIiwiY2xlYW51cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/ScrollToTop.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/bootstrap.min.css */ \"./styles/bootstrap.min.css\");\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/animate.min.css */ \"./styles/animate.min.css\");\n/* harmony import */ var _styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_remixicon_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/remixicon.css */ \"./styles/remixicon.css\");\n/* harmony import */ var _styles_remixicon_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_remixicon_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/navbar.css */ \"./styles/navbar.css\");\n/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/footer.css */ \"./styles/footer.css\");\n/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/responsive.css */ \"./styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _components_Layout_ScrollToTop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/Layout/ScrollToTop */ \"./components/Layout/ScrollToTop.js\");\n\n\n\n\n\n\n\n\n\n\n// Navbar CSS\n\n// Footer CSS\n\n// Globals CSS\n\n// Responsive CSS\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_2___default().init();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_14___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Code Aspire | a creative graphic - web design, software, product development company based at Kanpur, India\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Repositery\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Repositery\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Code Aspire Pvt. Ltd. is a graphic, web design, mobile app, and web application development company based in Kanpur India\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Repositery\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"webdesign,website,web design,kanpur,mobile,ios,android,startup,india,noida,vector microstock,design,logo,illustrations,application,business,card,business card,web development,web design india,web development india,web design usa,web design kanpur,web development kanpur,web design company,web development in the uk,illustration design,stock images,agency,web design in the uk,e-commerce,specialists uk,corporate internet services india,internet consultant india,content,management india,designers india,application development leeds,database development,design services,usability,accessibility,web development leeds,india web site design,web solutions,website design,website solutions,leeds website development,india web,website build,ria,flex,flash,actionscript,actionscript3,as2,as3,ajax,html,dhtml,css,xhtml,mysql,sql java,asp,.net,server,consultants,web agency,web development agency,html5,css3,iphone,blackberry,symfony,joomla,php,crm,cms,wordpress,ex-yahoo,adobe,rich internet application,web application,flash animation,adobe flash,adobe flex,air,adobe air,microformats,semantic,markup,ebook,publishing,print,media,ffmpeg,video,transcoding,technologist\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Repositery\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:site_name\",\n                        content: \"Code Aspire - Be Innovative\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Repositery\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"article\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Repositery\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"Code Aspire | a creative graphic - web design, software, product development company based at Kanpur, India\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Repositery\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: \"Code Aspire Pvt. Ltd. is a graphic, web design, mobile app, and web application development company based in Kanpur India\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Repositery\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Repositery\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"F:\\\\Repositery\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_ScrollToTop__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                fileName: \"F:\\\\Repositery\\\\Code-Aspire\\\\pages\\\\_app.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDSjtBQUNvQjtBQUNMO0FBQ0Y7QUFDRjtBQUMwQjtBQUN2QztBQUNPO0FBQzNCLGFBQWE7QUFDaUI7QUFDOUIsYUFBYTtBQUNpQjtBQUM5QixjQUFjO0FBQ2lCO0FBQy9CLGlCQUFpQjtBQUNpQjtBQUVMO0FBQzZCO0FBRTFELFNBQVNJLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDTixzREFBZSxDQUFDLElBQU07UUFDcEJDLCtDQUFRLEVBQUUsQ0FBQztLQUNaLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxxQkFDRTs7MEJBQ0UsOERBQUNDLG1EQUFJOztrQ0FDSCw4REFBQ08sT0FBSztrQ0FBQyw2R0FHUDs7Ozs7NEJBQVE7a0NBQ1IsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDQyxPQUFPLEVBQUMsdUNBQXVDOzs7Ozs0QkFBRztrQ0FDeEUsOERBQUNGLE1BQUk7d0JBQ0hDLElBQUksRUFBQyxhQUFhO3dCQUNsQkMsT0FBTyxFQUFDLDJIQUEySDs7Ozs7NEJBQ25JO2tDQUNGLDhEQUFDRixNQUFJO3dCQUNIQyxJQUFJLEVBQUMsVUFBVTt3QkFDZkMsT0FBTyxFQUFDLHlvQ0FBeW9DOzs7Ozs0QkFDanBDO2tDQUNGLDhEQUFDRixNQUFJO3dCQUFDRyxRQUFRLEVBQUMsY0FBYzt3QkFBQ0QsT0FBTyxFQUFDLDZCQUE2Qjs7Ozs7NEJBQUc7a0NBQ3RFLDhEQUFDRixNQUFJO3dCQUFDRyxRQUFRLEVBQUMsU0FBUzt3QkFBQ0QsT0FBTyxFQUFDLFNBQVM7Ozs7OzRCQUFHO2tDQUM3Qyw4REFBQ0YsTUFBSTt3QkFDSEcsUUFBUSxFQUFDLFVBQVU7d0JBQ25CRCxPQUFPLEVBQUMsNkdBQTZHOzs7Ozs0QkFDckg7a0NBQ0YsOERBQUNGLE1BQUk7d0JBQ0hHLFFBQVEsRUFBQyxnQkFBZ0I7d0JBQ3pCRCxPQUFPLEVBQUMsMkhBQTJIOzs7Ozs0QkFDbkk7Ozs7OztvQkFDRzswQkFFUCw4REFBQ1AsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTswQkFFNUIsOERBQUNILHVFQUFXOzs7O29CQUFHOztvQkFDZCxDQUNIO0NBQ0g7QUFFRCxpRUFBZUMsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RheC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xyXG5pbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvYW9zL2Rpc3QvYW9zLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2FuaW1hdGUubWluLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvcmVtaXhpY29uLmNzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbi9kaXN0L2ZhbmN5LWV4YW1wbGUuY3NzXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9idW5kbGVcIjtcclxuLy8gTmF2YmFyIENTU1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvbmF2YmFyLmNzc1wiO1xyXG4vLyBGb290ZXIgQ1NTXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9mb290ZXIuY3NzXCI7XHJcbi8vIEdsb2JhbHMgQ1NTXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG4vLyBSZXNwb25zaXZlIENTU1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvcmVzcG9uc2l2ZS5jc3NcIjtcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFNjcm9sbFRvVG9wIGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0L1Njcm9sbFRvVG9wXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQU9TLmluaXQoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgIENvZGUgQXNwaXJlIHwgYSBjcmVhdGl2ZSBncmFwaGljIC0gd2ViIGRlc2lnbiwgc29mdHdhcmUsIHByb2R1Y3RcclxuICAgICAgICAgIGRldmVsb3BtZW50IGNvbXBhbnkgYmFzZWQgYXQgS2FucHVyLCBJbmRpYVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIkNvZGUgQXNwaXJlIFB2dC4gTHRkLiBpcyBhIGdyYXBoaWMsIHdlYiBkZXNpZ24sIG1vYmlsZSBhcHAsIGFuZCB3ZWIgYXBwbGljYXRpb24gZGV2ZWxvcG1lbnQgY29tcGFueSBiYXNlZCBpbiBLYW5wdXIgSW5kaWFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJrZXl3b3Jkc1wiXHJcbiAgICAgICAgICBjb250ZW50PVwid2ViZGVzaWduLHdlYnNpdGUsd2ViIGRlc2lnbixrYW5wdXIsbW9iaWxlLGlvcyxhbmRyb2lkLHN0YXJ0dXAsaW5kaWEsbm9pZGEsdmVjdG9yIG1pY3Jvc3RvY2ssZGVzaWduLGxvZ28saWxsdXN0cmF0aW9ucyxhcHBsaWNhdGlvbixidXNpbmVzcyxjYXJkLGJ1c2luZXNzIGNhcmQsd2ViIGRldmVsb3BtZW50LHdlYiBkZXNpZ24gaW5kaWEsd2ViIGRldmVsb3BtZW50IGluZGlhLHdlYiBkZXNpZ24gdXNhLHdlYiBkZXNpZ24ga2FucHVyLHdlYiBkZXZlbG9wbWVudCBrYW5wdXIsd2ViIGRlc2lnbiBjb21wYW55LHdlYiBkZXZlbG9wbWVudCBpbiB0aGUgdWssaWxsdXN0cmF0aW9uIGRlc2lnbixzdG9jayBpbWFnZXMsYWdlbmN5LHdlYiBkZXNpZ24gaW4gdGhlIHVrLGUtY29tbWVyY2Usc3BlY2lhbGlzdHMgdWssY29ycG9yYXRlIGludGVybmV0IHNlcnZpY2VzIGluZGlhLGludGVybmV0IGNvbnN1bHRhbnQgaW5kaWEsY29udGVudCxtYW5hZ2VtZW50IGluZGlhLGRlc2lnbmVycyBpbmRpYSxhcHBsaWNhdGlvbiBkZXZlbG9wbWVudCBsZWVkcyxkYXRhYmFzZSBkZXZlbG9wbWVudCxkZXNpZ24gc2VydmljZXMsdXNhYmlsaXR5LGFjY2Vzc2liaWxpdHksd2ViIGRldmVsb3BtZW50IGxlZWRzLGluZGlhIHdlYiBzaXRlIGRlc2lnbix3ZWIgc29sdXRpb25zLHdlYnNpdGUgZGVzaWduLHdlYnNpdGUgc29sdXRpb25zLGxlZWRzIHdlYnNpdGUgZGV2ZWxvcG1lbnQsaW5kaWEgd2ViLHdlYnNpdGUgYnVpbGQscmlhLGZsZXgsZmxhc2gsYWN0aW9uc2NyaXB0LGFjdGlvbnNjcmlwdDMsYXMyLGFzMyxhamF4LGh0bWwsZGh0bWwsY3NzLHhodG1sLG15c3FsLHNxbCBqYXZhLGFzcCwubmV0LHNlcnZlcixjb25zdWx0YW50cyx3ZWIgYWdlbmN5LHdlYiBkZXZlbG9wbWVudCBhZ2VuY3ksaHRtbDUsY3NzMyxpcGhvbmUsYmxhY2tiZXJyeSxzeW1mb255LGpvb21sYSxwaHAsY3JtLGNtcyx3b3JkcHJlc3MsZXgteWFob28sYWRvYmUscmljaCBpbnRlcm5ldCBhcHBsaWNhdGlvbix3ZWIgYXBwbGljYXRpb24sZmxhc2ggYW5pbWF0aW9uLGFkb2JlIGZsYXNoLGFkb2JlIGZsZXgsYWlyLGFkb2JlIGFpcixtaWNyb2Zvcm1hdHMsc2VtYW50aWMsbWFya3VwLGVib29rLHB1Ymxpc2hpbmcscHJpbnQsbWVkaWEsZmZtcGVnLHZpZGVvLHRyYW5zY29kaW5nLHRlY2hub2xvZ2lzdFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJDb2RlIEFzcGlyZSAtIEJlIElubm92YXRpdmVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJhcnRpY2xlXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp0aXRsZVwiXHJcbiAgICAgICAgICBjb250ZW50PVwiQ29kZSBBc3BpcmUgfCBhIGNyZWF0aXZlIGdyYXBoaWMgLSB3ZWIgZGVzaWduLCBzb2Z0d2FyZSwgcHJvZHVjdCBkZXZlbG9wbWVudCBjb21wYW55IGJhc2VkIGF0IEthbnB1ciwgSW5kaWFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIkNvZGUgQXNwaXJlIFB2dC4gTHRkLiBpcyBhIGdyYXBoaWMsIHdlYiBkZXNpZ24sIG1vYmlsZSBhcHAsIGFuZCB3ZWIgYXBwbGljYXRpb24gZGV2ZWxvcG1lbnQgY29tcGFueSBiYXNlZCBpbiBLYW5wdXIgSW5kaWFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuXHJcbiAgICAgIDxTY3JvbGxUb1RvcCAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFPUyIsIkhlYWQiLCJTY3JvbGxUb1RvcCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlRWZmZWN0IiwiaW5pdCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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