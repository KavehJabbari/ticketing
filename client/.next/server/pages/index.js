"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst LandingPage = ({ currentUser , tickets  })=>{\n    const ticketList = tickets.map((ticket)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: ticket.title\n                }, void 0, false, {\n                    fileName: \"E:\\\\06-Software General\\\\Desktop\\\\Projects\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 5,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: ticket.price\n                }, void 0, false, {\n                    fileName: \"E:\\\\06-Software General\\\\Desktop\\\\Projects\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 6,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, ticket.id, true, {\n            fileName: \"E:\\\\06-Software General\\\\Desktop\\\\Projects\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Tickets\"\n            }, void 0, false, {\n                fileName: \"E:\\\\06-Software General\\\\Desktop\\\\Projects\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Title\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\06-Software General\\\\Desktop\\\\Projects\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Price\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\06-Software General\\\\Desktop\\\\Projects\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\06-Software General\\\\Desktop\\\\Projects\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\06-Software General\\\\Desktop\\\\Projects\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: ticketList\n                    }, void 0, false, {\n                        fileName: \"E:\\\\06-Software General\\\\Desktop\\\\Projects\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\06-Software General\\\\Desktop\\\\Projects\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\06-Software General\\\\Desktop\\\\Projects\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\nLandingPage.getInitialProps = async (context, client, currentUser)=>{\n    const { data  } = await client.get(\"/api/tickets\");\n    return {\n        tickets: data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsY0FBYyxDQUFDLEVBQUVDLFlBQVcsRUFBRUMsUUFBTyxFQUFFLEdBQUs7SUFDaEQsTUFBTUMsYUFBYUQsUUFBUUUsR0FBRyxDQUFDLENBQUNDLFNBQVc7UUFDekMscUJBQ0UsOERBQUNDOzs4QkFDQyw4REFBQ0M7OEJBQUlGLE9BQU9HLEtBQUs7Ozs7Ozs4QkFDakIsOERBQUNEOzhCQUFJRixPQUFPSSxLQUFLOzs7Ozs7O1dBRlZKLE9BQU9LLEVBQUU7Ozs7O0lBS3RCO0lBQ0EscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU1DLFdBQVU7O2tDQUNmLDhEQUFDQztrQ0FDQyw0RUFBQ1Q7OzhDQUNDLDhEQUFDVTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNDO2tDQUFPZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhCO0FBRUFILFlBQVlrQixlQUFlLEdBQUcsT0FBT0MsU0FBU0MsUUFBUW5CLGNBQWdCO0lBQ3BFLE1BQU0sRUFBRW9CLEtBQUksRUFBRSxHQUFHLE1BQU1ELE9BQU9FLEdBQUcsQ0FBQztJQUNsQyxPQUFPO1FBQUVwQixTQUFTbUI7SUFBSztBQUN6QjtBQUVBLGlFQUFlckIsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGFuZGluZ1BhZ2UgPSAoeyBjdXJyZW50VXNlciwgdGlja2V0cyB9KSA9PiB7XHJcbiAgY29uc3QgdGlja2V0TGlzdCA9IHRpY2tldHMubWFwKCh0aWNrZXQpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ciBrZXk9e3RpY2tldC5pZH0+XHJcbiAgICAgICAgPHRkPnt0aWNrZXQudGl0bGV9PC90ZD5cclxuICAgICAgICA8dGQ+e3RpY2tldC5wcmljZX08L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgKTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlRpY2tldHM8L2gxPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5Pnt0aWNrZXRMaXN0fTwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuTGFuZGluZ1BhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQsIGNsaWVudCwgY3VycmVudFVzZXIpID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoXCIvYXBpL3RpY2tldHNcIik7XHJcbiAgcmV0dXJuIHsgdGlja2V0czogZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XHJcbiJdLCJuYW1lcyI6WyJMYW5kaW5nUGFnZSIsImN1cnJlbnRVc2VyIiwidGlja2V0cyIsInRpY2tldExpc3QiLCJtYXAiLCJ0aWNrZXQiLCJ0ciIsInRkIiwidGl0bGUiLCJwcmljZSIsImlkIiwiZGl2IiwiaDEiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRoZWFkIiwidGgiLCJ0Ym9keSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjbGllbnQiLCJkYXRhIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();