/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/testing";
exports.ids = ["pages/testing"];
exports.modules = {

/***/ "./lib/apolo-client.js":
/*!*****************************!*\
  !*** ./lib/apolo-client.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n  uri: 'http://localhost:1337/graphql',\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9saWIvYXBvbG8tY2xpZW50LmpzPzU2MDciXSwibmFtZXMiOlsiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwidXJpIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyx3REFBSixDQUFpQjtBQUM5QkMsS0FBRyxFQUFFLCtCQUR5QjtBQUU5QkMsT0FBSyxFQUFFLElBQUlDLHlEQUFKO0FBRnVCLENBQWpCLENBQWY7QUFLQSwrREFBZUosTUFBZiIsImZpbGUiOiIuL2xpYi9hcG9sby1jbGllbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9ncmFwaHFsJyxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/apolo-client.js\n");

/***/ }),

/***/ "./pages/testing.jsx":
/*!***************************!*\
  !*** ./pages/testing.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_apolo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/apolo-client */ \"./lib/apolo-client.js\");\n\n\nvar _jsxFileName = \"/home/guanacone/my-project/frontend/pages/testing.jsx\";\n\n\n\nconst Testing = props => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Hello world\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"Page was build with \", props.locale, \" language\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: props.homepage.attributes.hero.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nasync function getStaticProps({\n  locale\n}) {\n  const currentLocale = locale === 'en' ? 'en' : 'es-NI';\n  const {\n    data: {\n      homepage: {\n        data\n      }\n    }\n  } = await _lib_apolo_client__WEBPACK_IMPORTED_MODULE_2__.default.query({\n    query: _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n      query homepage($currentLocale: I18NLocaleCode) {\n        homepage(locale: $currentLocale) {\n          data {\n            attributes {\n              hero {\n                title\n              }\n            }\n          }\n        }\n      }\n    `,\n    variable: {\n      currentLocale\n    }\n  });\n  console.log('querry in: ' + currentLocale, 'data: ' + JSON.stringify(data));\n  return {\n    props: {\n      homepage: data,\n      locale: currentLocale\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testing);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9wYWdlcy90ZXN0aW5nLmpzeD9jNjBhIl0sIm5hbWVzIjpbIlRlc3RpbmciLCJwcm9wcyIsImxvY2FsZSIsImhvbWVwYWdlIiwiYXR0cmlidXRlcyIsImhlcm8iLCJ0aXRsZSIsImdldFN0YXRpY1Byb3BzIiwiY3VycmVudExvY2FsZSIsImRhdGEiLCJjbGllbnQiLCJxdWVyeSIsImdxbCIsInZhcmlhYmxlIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFJQyxLQUFELElBQVc7QUFDekIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEseUNBQXlCQSxLQUFLLENBQUNDLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsZ0JBQUlELEtBQUssQ0FBQ0UsUUFBTixDQUFlQyxVQUFmLENBQTBCQyxJQUExQixDQUErQkM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBLGtCQURGO0FBT0QsQ0FSRDs7QUFVTyxlQUFlQyxjQUFmLENBQThCO0FBQUVMO0FBQUYsQ0FBOUIsRUFBMEM7QUFDL0MsUUFBTU0sYUFBYSxHQUFHTixNQUFNLEtBQUssSUFBWCxHQUFrQixJQUFsQixHQUF5QixPQUEvQztBQUNBLFFBQU07QUFDSk8sUUFBSSxFQUFFO0FBQ0pOLGNBQVEsRUFBRTtBQUFFTTtBQUFGO0FBRE47QUFERixNQUlGLE1BQU1DLDREQUFBLENBQWE7QUFDckJDLFNBQUssRUFBRUMsK0NBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FieUI7QUFjckJDLFlBQVEsRUFBRTtBQUFFTDtBQUFGO0FBZFcsR0FBYixDQUpWO0FBb0JBTSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBZ0JQLGFBQTVCLEVBQTJDLFdBQVdRLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixJQUFmLENBQXREO0FBQ0EsU0FBTztBQUNMUixTQUFLLEVBQUU7QUFDTEUsY0FBUSxFQUFFTSxJQURMO0FBRUxQLFlBQU0sRUFBRU07QUFGSDtBQURGLEdBQVA7QUFNRDtBQUVELCtEQUFlUixPQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGVzdGluZy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vbGliL2Fwb2xvLWNsaWVudCdcblxuY29uc3QgVGVzdGluZyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+SGVsbG8gd29ybGQ8L2gxPlxuICAgICAgPGgyPlBhZ2Ugd2FzIGJ1aWxkIHdpdGgge3Byb3BzLmxvY2FsZX0gbGFuZ3VhZ2U8L2gyPlxuICAgICAgPHA+e3Byb3BzLmhvbWVwYWdlLmF0dHJpYnV0ZXMuaGVyby50aXRsZX08L3A+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgbG9jYWxlIH0pIHtcbiAgY29uc3QgY3VycmVudExvY2FsZSA9IGxvY2FsZSA9PT0gJ2VuJyA/ICdlbicgOiAnZXMtTkknXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7XG4gICAgICBob21lcGFnZTogeyBkYXRhIH0sXG4gICAgfSxcbiAgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IGdxbGBcbiAgICAgIHF1ZXJ5IGhvbWVwYWdlKCRjdXJyZW50TG9jYWxlOiBJMThOTG9jYWxlQ29kZSkge1xuICAgICAgICBob21lcGFnZShsb2NhbGU6ICRjdXJyZW50TG9jYWxlKSB7XG4gICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICAgICAgaGVybyB7XG4gICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAgdmFyaWFibGU6IHsgY3VycmVudExvY2FsZSB9LFxuICB9KVxuICBjb25zb2xlLmxvZygncXVlcnJ5IGluOiAnICsgY3VycmVudExvY2FsZSwgJ2RhdGE6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaG9tZXBhZ2U6IGRhdGEsXG4gICAgICBsb2NhbGU6IGN1cnJlbnRMb2NhbGUsXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW5nXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/testing.jsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/testing.jsx"));
module.exports = __webpack_exports__;

})();