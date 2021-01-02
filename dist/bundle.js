/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! ./noConflict */ \"./node_modules/@babel/polyfill/lib/noConflict.js\");\n\nvar _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ \"./node_modules/core-js/library/fn/global.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nif (_global[\"default\"]._babelPolyfill && typeof console !== \"undefined\" && console.warn) {\n  console.warn(\"@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended \" + \"and may have consequences if different versions of the polyfills are applied sequentially. \" + \"If you do need to load the polyfill more than once, use @babel/polyfill/noConflict \" + \"instead to bypass the warning.\");\n}\n\n_global[\"default\"]._babelPolyfill = true;\n\n//# sourceURL=webpack://presentation/./node_modules/@babel/polyfill/lib/index.js?");

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/es6 */ \"./node_modules/core-js/es6/index.js\");\n\n__webpack_require__(/*! core-js/fn/array/includes */ \"./node_modules/core-js/fn/array/includes.js\");\n\n__webpack_require__(/*! core-js/fn/array/flat-map */ \"./node_modules/core-js/fn/array/flat-map.js\");\n\n__webpack_require__(/*! core-js/fn/string/pad-start */ \"./node_modules/core-js/fn/string/pad-start.js\");\n\n__webpack_require__(/*! core-js/fn/string/pad-end */ \"./node_modules/core-js/fn/string/pad-end.js\");\n\n__webpack_require__(/*! core-js/fn/string/trim-start */ \"./node_modules/core-js/fn/string/trim-start.js\");\n\n__webpack_require__(/*! core-js/fn/string/trim-end */ \"./node_modules/core-js/fn/string/trim-end.js\");\n\n__webpack_require__(/*! core-js/fn/symbol/async-iterator */ \"./node_modules/core-js/fn/symbol/async-iterator.js\");\n\n__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ \"./node_modules/core-js/fn/object/get-own-property-descriptors.js\");\n\n__webpack_require__(/*! core-js/fn/object/values */ \"./node_modules/core-js/fn/object/values.js\");\n\n__webpack_require__(/*! core-js/fn/object/entries */ \"./node_modules/core-js/fn/object/entries.js\");\n\n__webpack_require__(/*! core-js/fn/promise/finally */ \"./node_modules/core-js/fn/promise/finally.js\");\n\n__webpack_require__(/*! core-js/web */ \"./node_modules/core-js/web/index.js\");\n\n__webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\n//# sourceURL=webpack://presentation/./node_modules/@babel/polyfill/lib/noConflict.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_reveal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/reveal.js */ \"./node_modules/reveal.js/dist/reveal.esm.js\");\n/* harmony import */ var _node_modules_reveal_js_plugin_markdown_markdown_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/reveal.js/plugin/markdown/markdown.esm.js */ \"./node_modules/reveal.js/plugin/markdown/markdown.esm.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _slides_slide1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slides/slide1 */ \"./slides/slide1.js\");\n/* harmony import */ var _slides_slide2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slides/slide2 */ \"./slides/slide2.js\");\n/* harmony import */ var _slides_slide3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slides/slide3 */ \"./slides/slide3.js\");\n/* harmony import */ var _slides_slide4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides/slide4 */ \"./slides/slide4.js\");\n/* harmony import */ var _slides_slide5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slides/slide5 */ \"./slides/slide5.js\");\n/* harmony import */ var _slides_slide6__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slides/slide6 */ \"./slides/slide6.js\");\n/* harmony import */ var _slides_slide7__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slides/slide7 */ \"./slides/slide7.js\");\n/* harmony import */ var _slides_slide8__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slides/slide8 */ \"./slides/slide8.js\");\n/* harmony import */ var _slides_slide9__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slides/slide9 */ \"./slides/slide9.js\");\n/* harmony import */ var _slides_slide10__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slides/slide10 */ \"./slides/slide10.js\");\n/* harmony import */ var _slides_slide11__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slides/slide11 */ \"./slides/slide11.js\");\n/* harmony import */ var _slides_slide12__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./slides/slide12 */ \"./slides/slide12.js\");\n/* harmony import */ var _slides_slide13__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./slides/slide13 */ \"./slides/slide13.js\");\n/* harmony import */ var _slides_slide14__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./slides/slide14 */ \"./slides/slide14.js\");\n/* harmony import */ var _slides_slide15__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./slides/slide15 */ \"./slides/slide15.js\");\n/* harmony import */ var _slides_slide16__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./slides/slide16 */ \"./slides/slide16.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar deck = new _node_modules_reveal_js__WEBPACK_IMPORTED_MODULE_0__.default({\n  plugins: [_node_modules_reveal_js_plugin_markdown_markdown_esm_js__WEBPACK_IMPORTED_MODULE_1__.default]\n});\ndeck.initialize();\nvar slidesContainer = document.querySelector('.slides');\nvar slides = slidesContainer.children;\nvar section1 = document.querySelector('.slide_1');\nvar section2 = document.querySelector('.slide_2');\nvar section3 = document.querySelector('.slide_3');\nvar section4 = document.querySelector('.slide_4');\nvar section5 = document.querySelector('.slide_5');\nvar section6 = document.querySelector('.slide_6');\nvar section7 = document.querySelector('.slide_7');\nvar section8 = document.querySelector('.slide_8');\nvar section9 = document.querySelector('.slide_9');\nvar section10 = document.querySelector('.slide_10');\nvar section11 = document.querySelector('.slide_11');\nvar section12 = document.querySelector('.slide_12');\nvar section13 = document.querySelector('.slide_13');\nvar section14 = document.querySelector('.slide_14');\nvar section15 = document.querySelector('.slide_15');\nvar section16 = document.querySelector('.slide_16');\nsection1.appendChild((0,_slides_slide1__WEBPACK_IMPORTED_MODULE_3__.default)(1));\nsection2.appendChild((0,_slides_slide2__WEBPACK_IMPORTED_MODULE_4__.default)(2));\nsection3.appendChild((0,_slides_slide3__WEBPACK_IMPORTED_MODULE_5__.default)(3));\nsection4.appendChild((0,_slides_slide4__WEBPACK_IMPORTED_MODULE_6__.default)(4));\nsection5.appendChild((0,_slides_slide5__WEBPACK_IMPORTED_MODULE_7__.default)(5));\nsection6.appendChild((0,_slides_slide6__WEBPACK_IMPORTED_MODULE_8__.default)(6));\nsection7.appendChild((0,_slides_slide7__WEBPACK_IMPORTED_MODULE_9__.default)(7));\nsection8.appendChild((0,_slides_slide8__WEBPACK_IMPORTED_MODULE_10__.default)(8));\nsection9.appendChild((0,_slides_slide9__WEBPACK_IMPORTED_MODULE_11__.default)(9));\nsection10.appendChild((0,_slides_slide10__WEBPACK_IMPORTED_MODULE_12__.default)(10));\nsection11.appendChild((0,_slides_slide11__WEBPACK_IMPORTED_MODULE_13__.default)(11));\nsection12.appendChild((0,_slides_slide12__WEBPACK_IMPORTED_MODULE_14__.default)(12));\nsection13.appendChild((0,_slides_slide13__WEBPACK_IMPORTED_MODULE_15__.default)(13));\nsection14.appendChild((0,_slides_slide14__WEBPACK_IMPORTED_MODULE_16__.default)(14));\nsection15.appendChild((0,_slides_slide15__WEBPACK_IMPORTED_MODULE_17__.default)(15));\nsection16.appendChild((0,_slides_slide16__WEBPACK_IMPORTED_MODULE_18__.default)(16));\n\n//# sourceURL=webpack://presentation/./index.js?");

/***/ }),

/***/ "./slides/slide1.js":
/*!**************************!*\
  !*** ./slides/slide1.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  var bodyTop = document.createElement('div');\n  var bodyMiddle = document.createElement('div');\n  var bodyFooter = document.createElement('div');\n  bodyTop.className = 'slide1-body-top';\n  bodyMiddle.className = 'slide1-body-middle';\n  bodyFooter.className = 'slide1-body-footer';\n  bodyElement.appendChild(bodyTop);\n  bodyElement.appendChild(bodyMiddle);\n  bodyElement.appendChild(bodyFooter);\n  bodyTop.textContent = \"RS School 2020 Q3\";\n  bodyMiddle.innerHTML = \"<span>Presentation:</span><br><span>«State management in<br>React - applications»</span>\";\n  bodyFooter.textContent = \"Samorukov M.L.\";\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide1.js?");

/***/ }),

/***/ "./slides/slide10.js":
/*!***************************!*\
  !*** ./slides/slide10.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide10.js?");

/***/ }),

/***/ "./slides/slide11.js":
/*!***************************!*\
  !*** ./slides/slide11.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide11.js?");

/***/ }),

/***/ "./slides/slide12.js":
/*!***************************!*\
  !*** ./slides/slide12.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide12.js?");

/***/ }),

/***/ "./slides/slide13.js":
/*!***************************!*\
  !*** ./slides/slide13.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide13.js?");

/***/ }),

/***/ "./slides/slide14.js":
/*!***************************!*\
  !*** ./slides/slide14.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide14.js?");

/***/ }),

/***/ "./slides/slide15.js":
/*!***************************!*\
  !*** ./slides/slide15.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide15.js?");

/***/ }),

/***/ "./slides/slide16.js":
/*!***************************!*\
  !*** ./slides/slide16.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide16.js?");

/***/ }),

/***/ "./slides/slide2.js":
/*!**************************!*\
  !*** ./slides/slide2.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  var bodyTop = document.createElement('div');\n  var bodyMiddle = document.createElement('div');\n  var bodyFooter = document.createElement('div');\n  var bodyFooterFooter = document.createElement('div');\n  bodyTop.className = 'slide2-body-top';\n  bodyMiddle.className = 'slide2-body-middle';\n  bodyFooter.className = 'slide2-body-footer';\n  bodyElement.appendChild(bodyTop);\n  bodyElement.appendChild(bodyMiddle);\n  bodyElement.appendChild(bodyFooter);\n  bodyTop.textContent = \"What is React?\";\n  bodyMiddle.innerHTML = \"React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'.\";\n  bodyFooter.textContent = \"class plase here!!!!\";\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide2.js?");

/***/ }),

/***/ "./slides/slide3.js":
/*!**************************!*\
  !*** ./slides/slide3.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  var bodyTop = document.createElement('div');\n  var bodyMiddle = document.createElement('div');\n  var bodyFooter = document.createElement('div');\n  var bodyFooterFooter = document.createElement('div');\n  bodyTop.className = 'slide3-body-top';\n  bodyMiddle.className = 'slide3-body-middle';\n  bodyFooter.className = 'slide3-body-footer';\n  bodyFooterFooter.className = 'slide3-body-footer-footer';\n  bodyElement.appendChild(bodyTop);\n  bodyElement.appendChild(bodyMiddle);\n  bodyElement.appendChild(bodyFooter);\n  bodyElement.appendChild(bodyFooterFooter);\n  bodyTop.textContent = \"What is State?\";\n  bodyMiddle.textContent = \"State is a special built-in object, which allows components to create and manage their own data. Components cannot pass data with state, but they can create and manage it internally.\";\n  bodyFooter.textContent = \"How do you update a component’s state?\";\n  bodyFooterFooter.textContent = \"State should not be modified directly, but it can be modified with a special method called `setState()`.\";\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide3.js?");

/***/ }),

/***/ "./slides/slide4.js":
/*!**************************!*\
  !*** ./slides/slide4.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide4.js?");

/***/ }),

/***/ "./slides/slide5.js":
/*!**************************!*\
  !*** ./slides/slide5.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide5.js?");

/***/ }),

/***/ "./slides/slide6.js":
/*!**************************!*\
  !*** ./slides/slide6.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide6.js?");

/***/ }),

/***/ "./slides/slide7.js":
/*!**************************!*\
  !*** ./slides/slide7.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide7.js?");

/***/ }),

/***/ "./slides/slide8.js":
/*!**************************!*\
  !*** ./slides/slide8.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide8.js?");

/***/ }),

/***/ "./slides/slide9.js":
/*!**************************!*\
  !*** ./slides/slide9.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (number) {\n  var container = document.createElement('div');\n  container.className = 'slide-container';\n  var titleElement = document.createElement('div');\n  var bodyElement = document.createElement('div');\n  var footerElement = document.createElement('div');\n  titleElement.className = 'slide-title';\n  bodyElement.className = 'slide-body';\n  footerElement.className = 'slide-footer';\n  titleElement.textContent = \"Slide: \".concat(number);\n  container.appendChild(titleElement);\n  container.appendChild(bodyElement);\n  container.appendChild(footerElement);\n  return container;\n});\n\n//# sourceURL=webpack://presentation/./slides/slide9.js?");

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n__webpack_require__(/*! ../modules/es6.object.create */ \"./node_modules/core-js/modules/es6.object.create.js\");\n__webpack_require__(/*! ../modules/es6.object.define-property */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n__webpack_require__(/*! ../modules/es6.object.define-properties */ \"./node_modules/core-js/modules/es6.object.define-properties.js\");\n__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ \"./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js\");\n__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ \"./node_modules/core-js/modules/es6.object.get-prototype-of.js\");\n__webpack_require__(/*! ../modules/es6.object.keys */ \"./node_modules/core-js/modules/es6.object.keys.js\");\n__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ \"./node_modules/core-js/modules/es6.object.get-own-property-names.js\");\n__webpack_require__(/*! ../modules/es6.object.freeze */ \"./node_modules/core-js/modules/es6.object.freeze.js\");\n__webpack_require__(/*! ../modules/es6.object.seal */ \"./node_modules/core-js/modules/es6.object.seal.js\");\n__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ \"./node_modules/core-js/modules/es6.object.prevent-extensions.js\");\n__webpack_require__(/*! ../modules/es6.object.is-frozen */ \"./node_modules/core-js/modules/es6.object.is-frozen.js\");\n__webpack_require__(/*! ../modules/es6.object.is-sealed */ \"./node_modules/core-js/modules/es6.object.is-sealed.js\");\n__webpack_require__(/*! ../modules/es6.object.is-extensible */ \"./node_modules/core-js/modules/es6.object.is-extensible.js\");\n__webpack_require__(/*! ../modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n__webpack_require__(/*! ../modules/es6.object.is */ \"./node_modules/core-js/modules/es6.object.is.js\");\n__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ \"./node_modules/core-js/modules/es6.object.set-prototype-of.js\");\n__webpack_require__(/*! ../modules/es6.object.to-string */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.function.bind */ \"./node_modules/core-js/modules/es6.function.bind.js\");\n__webpack_require__(/*! ../modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n__webpack_require__(/*! ../modules/es6.function.has-instance */ \"./node_modules/core-js/modules/es6.function.has-instance.js\");\n__webpack_require__(/*! ../modules/es6.parse-int */ \"./node_modules/core-js/modules/es6.parse-int.js\");\n__webpack_require__(/*! ../modules/es6.parse-float */ \"./node_modules/core-js/modules/es6.parse-float.js\");\n__webpack_require__(/*! ../modules/es6.number.constructor */ \"./node_modules/core-js/modules/es6.number.constructor.js\");\n__webpack_require__(/*! ../modules/es6.number.to-fixed */ \"./node_modules/core-js/modules/es6.number.to-fixed.js\");\n__webpack_require__(/*! ../modules/es6.number.to-precision */ \"./node_modules/core-js/modules/es6.number.to-precision.js\");\n__webpack_require__(/*! ../modules/es6.number.epsilon */ \"./node_modules/core-js/modules/es6.number.epsilon.js\");\n__webpack_require__(/*! ../modules/es6.number.is-finite */ \"./node_modules/core-js/modules/es6.number.is-finite.js\");\n__webpack_require__(/*! ../modules/es6.number.is-integer */ \"./node_modules/core-js/modules/es6.number.is-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.is-nan */ \"./node_modules/core-js/modules/es6.number.is-nan.js\");\n__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ \"./node_modules/core-js/modules/es6.number.is-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ \"./node_modules/core-js/modules/es6.number.max-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ \"./node_modules/core-js/modules/es6.number.min-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.parse-float */ \"./node_modules/core-js/modules/es6.number.parse-float.js\");\n__webpack_require__(/*! ../modules/es6.number.parse-int */ \"./node_modules/core-js/modules/es6.number.parse-int.js\");\n__webpack_require__(/*! ../modules/es6.math.acosh */ \"./node_modules/core-js/modules/es6.math.acosh.js\");\n__webpack_require__(/*! ../modules/es6.math.asinh */ \"./node_modules/core-js/modules/es6.math.asinh.js\");\n__webpack_require__(/*! ../modules/es6.math.atanh */ \"./node_modules/core-js/modules/es6.math.atanh.js\");\n__webpack_require__(/*! ../modules/es6.math.cbrt */ \"./node_modules/core-js/modules/es6.math.cbrt.js\");\n__webpack_require__(/*! ../modules/es6.math.clz32 */ \"./node_modules/core-js/modules/es6.math.clz32.js\");\n__webpack_require__(/*! ../modules/es6.math.cosh */ \"./node_modules/core-js/modules/es6.math.cosh.js\");\n__webpack_require__(/*! ../modules/es6.math.expm1 */ \"./node_modules/core-js/modules/es6.math.expm1.js\");\n__webpack_require__(/*! ../modules/es6.math.fround */ \"./node_modules/core-js/modules/es6.math.fround.js\");\n__webpack_require__(/*! ../modules/es6.math.hypot */ \"./node_modules/core-js/modules/es6.math.hypot.js\");\n__webpack_require__(/*! ../modules/es6.math.imul */ \"./node_modules/core-js/modules/es6.math.imul.js\");\n__webpack_require__(/*! ../modules/es6.math.log10 */ \"./node_modules/core-js/modules/es6.math.log10.js\");\n__webpack_require__(/*! ../modules/es6.math.log1p */ \"./node_modules/core-js/modules/es6.math.log1p.js\");\n__webpack_require__(/*! ../modules/es6.math.log2 */ \"./node_modules/core-js/modules/es6.math.log2.js\");\n__webpack_require__(/*! ../modules/es6.math.sign */ \"./node_modules/core-js/modules/es6.math.sign.js\");\n__webpack_require__(/*! ../modules/es6.math.sinh */ \"./node_modules/core-js/modules/es6.math.sinh.js\");\n__webpack_require__(/*! ../modules/es6.math.tanh */ \"./node_modules/core-js/modules/es6.math.tanh.js\");\n__webpack_require__(/*! ../modules/es6.math.trunc */ \"./node_modules/core-js/modules/es6.math.trunc.js\");\n__webpack_require__(/*! ../modules/es6.string.from-code-point */ \"./node_modules/core-js/modules/es6.string.from-code-point.js\");\n__webpack_require__(/*! ../modules/es6.string.raw */ \"./node_modules/core-js/modules/es6.string.raw.js\");\n__webpack_require__(/*! ../modules/es6.string.trim */ \"./node_modules/core-js/modules/es6.string.trim.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/es6.string.code-point-at */ \"./node_modules/core-js/modules/es6.string.code-point-at.js\");\n__webpack_require__(/*! ../modules/es6.string.ends-with */ \"./node_modules/core-js/modules/es6.string.ends-with.js\");\n__webpack_require__(/*! ../modules/es6.string.includes */ \"./node_modules/core-js/modules/es6.string.includes.js\");\n__webpack_require__(/*! ../modules/es6.string.repeat */ \"./node_modules/core-js/modules/es6.string.repeat.js\");\n__webpack_require__(/*! ../modules/es6.string.starts-with */ \"./node_modules/core-js/modules/es6.string.starts-with.js\");\n__webpack_require__(/*! ../modules/es6.string.anchor */ \"./node_modules/core-js/modules/es6.string.anchor.js\");\n__webpack_require__(/*! ../modules/es6.string.big */ \"./node_modules/core-js/modules/es6.string.big.js\");\n__webpack_require__(/*! ../modules/es6.string.blink */ \"./node_modules/core-js/modules/es6.string.blink.js\");\n__webpack_require__(/*! ../modules/es6.string.bold */ \"./node_modules/core-js/modules/es6.string.bold.js\");\n__webpack_require__(/*! ../modules/es6.string.fixed */ \"./node_modules/core-js/modules/es6.string.fixed.js\");\n__webpack_require__(/*! ../modules/es6.string.fontcolor */ \"./node_modules/core-js/modules/es6.string.fontcolor.js\");\n__webpack_require__(/*! ../modules/es6.string.fontsize */ \"./node_modules/core-js/modules/es6.string.fontsize.js\");\n__webpack_require__(/*! ../modules/es6.string.italics */ \"./node_modules/core-js/modules/es6.string.italics.js\");\n__webpack_require__(/*! ../modules/es6.string.link */ \"./node_modules/core-js/modules/es6.string.link.js\");\n__webpack_require__(/*! ../modules/es6.string.small */ \"./node_modules/core-js/modules/es6.string.small.js\");\n__webpack_require__(/*! ../modules/es6.string.strike */ \"./node_modules/core-js/modules/es6.string.strike.js\");\n__webpack_require__(/*! ../modules/es6.string.sub */ \"./node_modules/core-js/modules/es6.string.sub.js\");\n__webpack_require__(/*! ../modules/es6.string.sup */ \"./node_modules/core-js/modules/es6.string.sup.js\");\n__webpack_require__(/*! ../modules/es6.date.now */ \"./node_modules/core-js/modules/es6.date.now.js\");\n__webpack_require__(/*! ../modules/es6.date.to-json */ \"./node_modules/core-js/modules/es6.date.to-json.js\");\n__webpack_require__(/*! ../modules/es6.date.to-iso-string */ \"./node_modules/core-js/modules/es6.date.to-iso-string.js\");\n__webpack_require__(/*! ../modules/es6.date.to-string */ \"./node_modules/core-js/modules/es6.date.to-string.js\");\n__webpack_require__(/*! ../modules/es6.date.to-primitive */ \"./node_modules/core-js/modules/es6.date.to-primitive.js\");\n__webpack_require__(/*! ../modules/es6.array.is-array */ \"./node_modules/core-js/modules/es6.array.is-array.js\");\n__webpack_require__(/*! ../modules/es6.array.from */ \"./node_modules/core-js/modules/es6.array.from.js\");\n__webpack_require__(/*! ../modules/es6.array.of */ \"./node_modules/core-js/modules/es6.array.of.js\");\n__webpack_require__(/*! ../modules/es6.array.join */ \"./node_modules/core-js/modules/es6.array.join.js\");\n__webpack_require__(/*! ../modules/es6.array.slice */ \"./node_modules/core-js/modules/es6.array.slice.js\");\n__webpack_require__(/*! ../modules/es6.array.sort */ \"./node_modules/core-js/modules/es6.array.sort.js\");\n__webpack_require__(/*! ../modules/es6.array.for-each */ \"./node_modules/core-js/modules/es6.array.for-each.js\");\n__webpack_require__(/*! ../modules/es6.array.map */ \"./node_modules/core-js/modules/es6.array.map.js\");\n__webpack_require__(/*! ../modules/es6.array.filter */ \"./node_modules/core-js/modules/es6.array.filter.js\");\n__webpack_require__(/*! ../modules/es6.array.some */ \"./node_modules/core-js/modules/es6.array.some.js\");\n__webpack_require__(/*! ../modules/es6.array.every */ \"./node_modules/core-js/modules/es6.array.every.js\");\n__webpack_require__(/*! ../modules/es6.array.reduce */ \"./node_modules/core-js/modules/es6.array.reduce.js\");\n__webpack_require__(/*! ../modules/es6.array.reduce-right */ \"./node_modules/core-js/modules/es6.array.reduce-right.js\");\n__webpack_require__(/*! ../modules/es6.array.index-of */ \"./node_modules/core-js/modules/es6.array.index-of.js\");\n__webpack_require__(/*! ../modules/es6.array.last-index-of */ \"./node_modules/core-js/modules/es6.array.last-index-of.js\");\n__webpack_require__(/*! ../modules/es6.array.copy-within */ \"./node_modules/core-js/modules/es6.array.copy-within.js\");\n__webpack_require__(/*! ../modules/es6.array.fill */ \"./node_modules/core-js/modules/es6.array.fill.js\");\n__webpack_require__(/*! ../modules/es6.array.find */ \"./node_modules/core-js/modules/es6.array.find.js\");\n__webpack_require__(/*! ../modules/es6.array.find-index */ \"./node_modules/core-js/modules/es6.array.find-index.js\");\n__webpack_require__(/*! ../modules/es6.array.species */ \"./node_modules/core-js/modules/es6.array.species.js\");\n__webpack_require__(/*! ../modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n__webpack_require__(/*! ../modules/es6.regexp.constructor */ \"./node_modules/core-js/modules/es6.regexp.constructor.js\");\n__webpack_require__(/*! ../modules/es6.regexp.exec */ \"./node_modules/core-js/modules/es6.regexp.exec.js\");\n__webpack_require__(/*! ../modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n__webpack_require__(/*! ../modules/es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\n__webpack_require__(/*! ../modules/es6.regexp.match */ \"./node_modules/core-js/modules/es6.regexp.match.js\");\n__webpack_require__(/*! ../modules/es6.regexp.replace */ \"./node_modules/core-js/modules/es6.regexp.replace.js\");\n__webpack_require__(/*! ../modules/es6.regexp.search */ \"./node_modules/core-js/modules/es6.regexp.search.js\");\n__webpack_require__(/*! ../modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n__webpack_require__(/*! ../modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n__webpack_require__(/*! ../modules/es6.map */ \"./node_modules/core-js/modules/es6.map.js\");\n__webpack_require__(/*! ../modules/es6.set */ \"./node_modules/core-js/modules/es6.set.js\");\n__webpack_require__(/*! ../modules/es6.weak-map */ \"./node_modules/core-js/modules/es6.weak-map.js\");\n__webpack_require__(/*! ../modules/es6.weak-set */ \"./node_modules/core-js/modules/es6.weak-set.js\");\n__webpack_require__(/*! ../modules/es6.typed.array-buffer */ \"./node_modules/core-js/modules/es6.typed.array-buffer.js\");\n__webpack_require__(/*! ../modules/es6.typed.data-view */ \"./node_modules/core-js/modules/es6.typed.data-view.js\");\n__webpack_require__(/*! ../modules/es6.typed.int8-array */ \"./node_modules/core-js/modules/es6.typed.int8-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint8-array */ \"./node_modules/core-js/modules/es6.typed.uint8-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ \"./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.int16-array */ \"./node_modules/core-js/modules/es6.typed.int16-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint16-array */ \"./node_modules/core-js/modules/es6.typed.uint16-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.int32-array */ \"./node_modules/core-js/modules/es6.typed.int32-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint32-array */ \"./node_modules/core-js/modules/es6.typed.uint32-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.float32-array */ \"./node_modules/core-js/modules/es6.typed.float32-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.float64-array */ \"./node_modules/core-js/modules/es6.typed.float64-array.js\");\n__webpack_require__(/*! ../modules/es6.reflect.apply */ \"./node_modules/core-js/modules/es6.reflect.apply.js\");\n__webpack_require__(/*! ../modules/es6.reflect.construct */ \"./node_modules/core-js/modules/es6.reflect.construct.js\");\n__webpack_require__(/*! ../modules/es6.reflect.define-property */ \"./node_modules/core-js/modules/es6.reflect.define-property.js\");\n__webpack_require__(/*! ../modules/es6.reflect.delete-property */ \"./node_modules/core-js/modules/es6.reflect.delete-property.js\");\n__webpack_require__(/*! ../modules/es6.reflect.enumerate */ \"./node_modules/core-js/modules/es6.reflect.enumerate.js\");\n__webpack_require__(/*! ../modules/es6.reflect.get */ \"./node_modules/core-js/modules/es6.reflect.get.js\");\n__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ \"./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js\");\n__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ \"./node_modules/core-js/modules/es6.reflect.get-prototype-of.js\");\n__webpack_require__(/*! ../modules/es6.reflect.has */ \"./node_modules/core-js/modules/es6.reflect.has.js\");\n__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ \"./node_modules/core-js/modules/es6.reflect.is-extensible.js\");\n__webpack_require__(/*! ../modules/es6.reflect.own-keys */ \"./node_modules/core-js/modules/es6.reflect.own-keys.js\");\n__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ \"./node_modules/core-js/modules/es6.reflect.prevent-extensions.js\");\n__webpack_require__(/*! ../modules/es6.reflect.set */ \"./node_modules/core-js/modules/es6.reflect.set.js\");\n__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ \"./node_modules/core-js/modules/es6.reflect.set-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/modules/_core.js\");\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/es6/index.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/array/flat-map.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es7.array.flat-map */ \"./node_modules/core-js/modules/es7.array.flat-map.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Array.flatMap;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/fn/array/flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es7.array.includes */ \"./node_modules/core-js/modules/es7.array.includes.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Array.includes;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/fn/array/includes.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es7.object.entries */ \"./node_modules/core-js/modules/es7.object.entries.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Object.entries;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/fn/object/entries.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ \"./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Object.getOwnPropertyDescriptors;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/fn/object/get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es7.object.values */ \"./node_modules/core-js/modules/es7.object.values.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Object.values;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/fn/object/values.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n__webpack_require__(/*! ../../modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n__webpack_require__(/*! ../../modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Promise.finally;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/fn/promise/finally.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es7.string.pad-end */ \"./node_modules/core-js/modules/es7.string.pad-end.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.padEnd;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/fn/string/pad-end.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es7.string.pad-start */ \"./node_modules/core-js/modules/es7.string.pad-start.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.padStart;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/fn/string/pad-start.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es7.string.trim-right */ \"./node_modules/core-js/modules/es7.string.trim-right.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.trimRight;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/fn/string/trim-end.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es7.string.trim-left */ \"./node_modules/core-js/modules/es7.string.trim-left.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.trimLeft;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/fn/string/trim-start.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\").f('asyncIterator');\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/fn/symbol/async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../modules/es7.global */ \"./node_modules/core-js/library/modules/es7.global.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").global;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/fn/global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("var core = module.exports = { version: '2.6.12' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/***/ ((module) => {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\n$export($export.G, { global: __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\") });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/library/modules/es7.global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = function (it, msg) {\n  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);\n  return +it;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_a-number-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('unscopables');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n // `AdvanceStringIndex` abstract operation\n// https://tc39.github.io/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? at(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_advance-string-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/***/ ((module) => {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {\n  var O = toObject(this);\n  var len = toLength(O.length);\n  var to = toAbsoluteIndex(target, len);\n  var from = toAbsoluteIndex(start, len);\n  var end = arguments.length > 2 ? arguments[2] : undefined;\n  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);\n  var inc = 1;\n  if (from < to && to < from + count) {\n    inc = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n  while (count-- > 0) {\n    if (from in O) O[to] = O[from];\n    else delete O[to];\n    to += inc;\n    from += inc;\n  } return O;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_array-copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function fill(value /* , start = 0, end = @length */) {\n  var O = toObject(this);\n  var length = toLength(O.length);\n  var aLen = arguments.length;\n  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);\n  var end = aLen > 2 ? arguments[2] : undefined;\n  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);\n  while (endPos > index) O[index++] = value;\n  return O;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_array-fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar asc = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      val = self[index];\n      res = f(val, index, O);\n      if (TYPE) {\n        if (IS_MAP) result[index] = res;   // map\n        else if (res) switch (TYPE) {\n          case 3: return true;             // some\n          case 5: return val;              // find\n          case 6: return index;            // findIndex\n          case 2: result.push(val);        // filter\n        } else if (IS_EVERY) return false; // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_array-methods.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = function (that, callbackfn, aLen, memo, isRight) {\n  aFunction(callbackfn);\n  var O = toObject(that);\n  var self = IObject(O);\n  var length = toLength(O.length);\n  var index = isRight ? length - 1 : 0;\n  var i = isRight ? -1 : 1;\n  if (aLen < 2) for (;;) {\n    if (index in self) {\n      memo = self[index];\n      index += i;\n      break;\n    }\n    index += i;\n    if (isRight ? index < 0 : length <= index) {\n      throw TypeError('Reduce of empty array with no initial value');\n    }\n  }\n  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {\n    memo = callbackfn(memo, self[index], index, O);\n  }\n  return memo;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_array-reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ \"./node_modules/core-js/modules/_array-species-constructor.js\");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function (F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  } return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n  var bound = function (/* args... */) {\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ ((module) => {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar fastKey = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").fastKey;\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar SIZE = DESCRIPTORS ? '_s' : 'size';\n\nvar getEntry = function (that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== 'F') return that._i[index];\n  // frozen object case\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;         // collection type\n      that._i = create(null); // index\n      that._f = undefined;    // first entry\n      that._l = undefined;    // last entry\n      that[SIZE] = 0;         // size\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function (key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        } return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this);\n          // revert to the last existing entry\n          while (entry && entry.r) entry = entry.p;\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, 'size', {\n      get: function () {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index;\n    // change existing entry\n    if (entry) {\n      entry.v = value;\n    // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true), // <- index\n        k: key,                        // <- key\n        v: value,                      // <- value\n        p: prev = that._l,             // <- previous entry\n        n: undefined,                  // <- next entry\n        r: false                       // <- removed\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++;\n      // add to index\n      if (index !== 'F') that._i[index] = entry;\n    } return that;\n  },\n  getEntry: getEntry,\n  setStrong: function (C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n      this._k = kind;                     // kind\n      this._l = undefined;                // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l;\n      // revert to the last existing entry\n      while (entry && entry.r) entry = entry.p;\n      // get next entry\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      }\n      // return step by kind\n      if (kind == 'keys') return step(0, entry.k);\n      if (kind == 'values') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(NAME);\n  }\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_collection-strong.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar getWeak = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").getWeak;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\");\nvar $has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar arrayFind = createArrayMethod(5);\nvar arrayFindIndex = createArrayMethod(6);\nvar id = 0;\n\n// fallback for uncaught frozen keys\nvar uncaughtFrozenStore = function (that) {\n  return that._l || (that._l = new UncaughtFrozenStore());\n};\nvar UncaughtFrozenStore = function () {\n  this.a = [];\n};\nvar findUncaughtFrozen = function (store, key) {\n  return arrayFind(store.a, function (it) {\n    return it[0] === key;\n  });\n};\nUncaughtFrozenStore.prototype = {\n  get: function (key) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) return entry[1];\n  },\n  has: function (key) {\n    return !!findUncaughtFrozen(this, key);\n  },\n  set: function (key, value) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) entry[1] = value;\n    else this.a.push([key, value]);\n  },\n  'delete': function (key) {\n    var index = arrayFindIndex(this.a, function (it) {\n      return it[0] === key;\n    });\n    if (~index) this.a.splice(index, 1);\n    return !!~index;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;      // collection type\n      that._i = id++;      // collection id\n      that._l = undefined; // leak store for uncaught frozen objects\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.3.3.2 WeakMap.prototype.delete(key)\n      // 23.4.3.3 WeakSet.prototype.delete(value)\n      'delete': function (key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);\n        return data && $has(data, this._i) && delete data[this._i];\n      },\n      // 23.3.3.4 WeakMap.prototype.has(key)\n      // 23.4.3.4 WeakSet.prototype.has(value)\n      has: function has(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);\n        return data && $has(data, this._i);\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var data = getWeak(anObject(key), true);\n    if (data === true) uncaughtFrozenStore(that).set(key, value);\n    else data[that._i] = value;\n    return that;\n  },\n  ufstore: uncaughtFrozenStore\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_collection-weak.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var proto = C && C.prototype;\n  var O = {};\n  var fixMethod = function (KEY) {\n    var fn = proto[KEY];\n    redefine(proto, KEY,\n      KEY == 'delete' ? function (a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'has' ? function has(a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'get' ? function get(a) {\n        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }\n        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }\n    );\n  };\n  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    var instance = new C();\n    // early implementations not supports chaining\n    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;\n    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false\n    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });\n    // most early implementations doesn't supports iterables, most modern - not close it correctly\n    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new\n    // for early implementations -0 and +0 not the same\n    var BUGGY_ZERO = !IS_WEAK && fails(function () {\n      // V8 ~ Chromium 42- fails only with 5+ elements\n      var $instance = new C();\n      var index = 5;\n      while (index--) $instance[ADDER](index, index);\n      return !$instance.has(-0);\n    });\n    if (!ACCEPT_ITERABLES) {\n      C = wrapper(function (target, iterable) {\n        anInstance(target, C, NAME);\n        var that = inheritIfRequired(new Base(), target, C);\n        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n        return that;\n      });\n      C.prototype = proto;\n      proto.constructor = C;\n    }\n    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {\n      fixMethod('delete');\n      fixMethod('has');\n      IS_MAP && fixMethod('get');\n    }\n    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);\n    // weak collections should not contains .clear method\n    if (IS_WEAK && proto.clear) delete proto.clear;\n  }\n\n  setToStringTag(C, NAME);\n\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F * (C != Base), O);\n\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n\n  return C;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_collection.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ ((module) => {

eval("var core = module.exports = { version: '2.6.12' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar getTime = Date.prototype.getTime;\nvar $toISOString = Date.prototype.toISOString;\n\nvar lz = function (num) {\n  return num > 9 ? num : '0' + num;\n};\n\n// PhantomJS / old WebKit has a broken implementations\nmodule.exports = (fails(function () {\n  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';\n}) || !fails(function () {\n  $toISOString.call(new Date(NaN));\n})) ? function toISOString() {\n  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');\n  var d = this;\n  var y = d.getUTCFullYear();\n  var m = d.getUTCMilliseconds();\n  var s = y < 0 ? '-' : y > 9999 ? '+' : '';\n  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +\n    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +\n    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +\n    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';\n} : $toISOString;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_date-to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar NUMBER = 'number';\n\nmodule.exports = function (hint) {\n  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');\n  return toPrimitive(anObject(this), hint != NUMBER);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_date-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ ((module) => {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ ((module) => {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (KEY) {\n  var re = /./;\n  try {\n    '/./'[KEY](re);\n  } catch (e) {\n    try {\n      re[MATCH] = false;\n      return !'/./'[KEY](re);\n    } catch (f) { /* empty */ }\n  } return true;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_fails-is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.exec */ \"./node_modules/core-js/modules/es6.regexp.exec.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n\nvar SPECIES = wks('species');\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {\n  // Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length === 2 && result[0] === 'a' && result[1] === 'b';\n})();\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n    re.exec = function () { execCalled = true; return null; };\n    if (KEY === 'split') {\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n    }\n    re[SYMBOL]('');\n    return !execCalled;\n  }) : undefined;\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var fns = exec(\n      defined,\n      SYMBOL,\n      ''[KEY],\n      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {\n        if (regexp.exec === regexpExec) {\n          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n            // The native String method already delegates to @@method (this\n            // polyfilled function), leasing to infinite recursion.\n            // We avoid it by directly calling the native @@method method.\n            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n          }\n          return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n        }\n        return { done: false };\n      }\n    );\n    var strfn = fns[0];\n    var rxfn = fns[1];\n\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return rxfn.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return rxfn.call(string, this); }\n    );\n  }\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_fix-re-wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 21.2.5.3 get RegExp.prototype.flags\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('isConcatSpreadable');\n\nfunction flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {\n  var targetIndex = start;\n  var sourceIndex = 0;\n  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;\n  var element, spreadable;\n\n  while (sourceIndex < sourceLen) {\n    if (sourceIndex in source) {\n      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];\n\n      spreadable = false;\n      if (isObject(element)) {\n        spreadable = element[IS_CONCAT_SPREADABLE];\n        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);\n      }\n\n      if (spreadable && depth > 0) {\n        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;\n      } else {\n        if (targetIndex >= 0x1fffffffffffff) throw TypeError();\n        target[targetIndex] = element;\n      }\n\n      targetIndex++;\n    }\n    sourceIndex++;\n  }\n  return targetIndex;\n}\n\nmodule.exports = flattenIntoArray;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_flatten-into-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_function-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ ((module) => {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ ((module) => {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar setPrototypeOf = __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set;\nmodule.exports = function (that, target, C) {\n  var S = target.constructor;\n  var P;\n  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {\n    setPrototypeOf(that, P);\n  } return that;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_inherit-if-required.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ ((module) => {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_invoke.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.3 Number.isInteger(number)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar floor = Math.floor;\nmodule.exports = function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.2.8 IsRegExp(argument)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/***/ ((module) => {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ ((module) => {

eval("module.exports = false;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("// 20.2.2.14 Math.expm1(x)\nvar $expm1 = Math.expm1;\nmodule.exports = (!$expm1\n  // Old FF bug\n  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168\n  // Tor Browser bug\n  || $expm1(-2e-17) != -2e-17\n) ? function expm1(x) {\n  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;\n} : $expm1;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_math-expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.16 Math.fround(x)\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\");\nvar pow = Math.pow;\nvar EPSILON = pow(2, -52);\nvar EPSILON32 = pow(2, -23);\nvar MAX32 = pow(2, 127) * (2 - EPSILON32);\nvar MIN32 = pow(2, -126);\n\nvar roundTiesToEven = function (n) {\n  return n + 1 / EPSILON - 1 / EPSILON;\n};\n\nmodule.exports = Math.fround || function fround(x) {\n  var $abs = Math.abs(x);\n  var $sign = sign(x);\n  var a, result;\n  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;\n  a = (1 + EPSILON32 / EPSILON) * $abs;\n  result = a - (a - $abs);\n  // eslint-disable-next-line no-self-compare\n  if (result > MAX32 || result != result) return $sign * Infinity;\n  return $sign * result;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_math-fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("// 20.2.2.20 Math.log1p(x)\nmodule.exports = Math.log1p || function log1p(x) {\n  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_math-log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/***/ ((module) => {

eval("// 20.2.2.28 Math.sign(x)\nmodule.exports = Math.sign || function sign(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_math-sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar isEnum = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f;\nmodule.exports = function (isEntries) {\n  return function (it) {\n    var O = toIObject(it);\n    var keys = getKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) {\n      key = keys[i++];\n      if (!DESCRIPTORS || isEnum.call(O, key)) {\n        result.push(isEntries ? [key, O[key]] : O[key]);\n      }\n    }\n    return result;\n  };\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_object-to-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// all object keys, includes non-enumerable and symbols\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar Reflect = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect;\nmodule.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {\n  var keys = gOPN.f(anObject(it));\n  var getSymbols = gOPS.f;\n  return getSymbols ? keys.concat(getSymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $parseFloat = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").parseFloat;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\n\nmodule.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\") + '-0') !== -Infinity ? function parseFloat(str) {\n  var string = $trim(String(str), 3);\n  var result = $parseFloat(string);\n  return result === 0 && string.charAt(0) == '-' ? -0 : result;\n} : $parseFloat;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $parseInt = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").parseInt;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\nvar ws = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar hex = /^[-+]?0[xX]/;\n\nmodule.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {\n  var string = $trim(String(str), 3);\n  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));\n} : $parseInt;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_perform.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ ((module) => {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) redefine(target, key, src[key], safe);\n  return target;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('src');\nvar $toString = __webpack_require__(/*! ./_function-to-string */ \"./node_modules/core-js/modules/_function-to-string.js\");\nvar TO_STRING = 'toString';\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar builtinExec = RegExp.prototype.exec;\n\n // `RegExpExec` abstract operation\n// https://tc39.github.io/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw new TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n  if (classof(R) !== 'RegExp') {\n    throw new TypeError('RegExp#exec called on incompatible receiver');\n  }\n  return builtinExec.call(R, S);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar regexpFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\n\nvar nativeExec = RegExp.prototype.exec;\n// This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\nvar nativeReplace = String.prototype.replace;\n\nvar patchedExec = nativeExec;\n\nvar LAST_INDEX = 'lastIndex';\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/,\n      re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;\n})();\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + re.source + '$(?!\\\\s)', regexpFlags.call(re));\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];\n\n    match = nativeExec.call(re, str);\n\n    if (UPDATES_LAST_INDEX_WRONG && match) {\n      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      // eslint-disable-next-line no-loop-func\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("// 7.2.9 SameValue(x, y)\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_same-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n\nmodule.exports = function (method, arg) {\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call\n    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);\n  });\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_strict-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// helper for String#{startsWith, endsWith, includes}\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, searchString, NAME) {\n  if (isRegExp(searchString)) throw TypeError('String#' + NAME + \" doesn't accept regex!\");\n  return String(defined(that));\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_string-context.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar quot = /\"/g;\n// B.2.3.2.1 CreateHTML(string, tag, attribute, value)\nvar createHTML = function (string, tag, attribute, value) {\n  var S = String(defined(string));\n  var p1 = '<' + tag;\n  if (attribute !== '') p1 += ' ' + attribute + '=\"' + String(value).replace(quot, '&quot;') + '\"';\n  return p1 + '>' + S + '</' + tag + '>';\n};\nmodule.exports = function (NAME, exec) {\n  var O = {};\n  O[NAME] = exec(createHTML);\n  $export($export.P + $export.F * fails(function () {\n    var test = ''[NAME]('\"');\n    return test !== test.toLowerCase() || test.split('\"').length > 3;\n  }), 'String', O);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_string-html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-string-pad-start-end\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, maxLength, fillString, left) {\n  var S = String(defined(that));\n  var stringLength = S.length;\n  var fillStr = fillString === undefined ? ' ' : String(fillString);\n  var intMaxLength = toLength(maxLength);\n  if (intMaxLength <= stringLength || fillStr == '') return S;\n  var fillLen = intMaxLength - stringLength;\n  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));\n  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);\n  return left ? stringFiller + S : S + stringFiller;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_string-pad.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function repeat(count) {\n  var str = String(defined(this));\n  var res = '';\n  var n = toInteger(count);\n  if (n < 0 || n == Infinity) throw RangeError(\"Count can't be negative\");\n  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;\n  return res;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_string-repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar spaces = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar space = '[' + spaces + ']';\nvar non = '\\u200b\\u0085';\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function (KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n};\n\n// 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/***/ ((module) => {

eval("module.exports = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' +\n  '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_string-ws.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_task.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/ecma262/#sec-toindex\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function (it) {\n  if (it === undefined) return 0;\n  var number = toInteger(it);\n  var length = toLength(number);\n  if (number !== length) throw RangeError('Wrong length!');\n  return length;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_to-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\")) {\n  var LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\n  var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\n  var fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n  var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n  var $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\n  var $buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\");\n  var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\n  var anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\n  var propertyDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n  var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\n  var redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\n  var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\n  var toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n  var toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/core-js/modules/_to-index.js\");\n  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\n  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n  var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\n  var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\n  var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n  var toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\n  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\n  var create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\n  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\n  var gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\n  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n  var uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\n  var wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\");\n  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\");\n  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\n  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n  var Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\n  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\");\n  var setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\");\n  var arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\");\n  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/core-js/modules/_array-copy-within.js\");\n  var $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\n  var $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\n  var dP = $DP.f;\n  var gOPD = $GOPD.f;\n  var RangeError = global.RangeError;\n  var TypeError = global.TypeError;\n  var Uint8Array = global.Uint8Array;\n  var ARRAY_BUFFER = 'ArrayBuffer';\n  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;\n  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';\n  var PROTOTYPE = 'prototype';\n  var ArrayProto = Array[PROTOTYPE];\n  var $ArrayBuffer = $buffer.ArrayBuffer;\n  var $DataView = $buffer.DataView;\n  var arrayForEach = createArrayMethod(0);\n  var arrayFilter = createArrayMethod(2);\n  var arraySome = createArrayMethod(3);\n  var arrayEvery = createArrayMethod(4);\n  var arrayFind = createArrayMethod(5);\n  var arrayFindIndex = createArrayMethod(6);\n  var arrayIncludes = createArrayIncludes(true);\n  var arrayIndexOf = createArrayIncludes(false);\n  var arrayValues = ArrayIterators.values;\n  var arrayKeys = ArrayIterators.keys;\n  var arrayEntries = ArrayIterators.entries;\n  var arrayLastIndexOf = ArrayProto.lastIndexOf;\n  var arrayReduce = ArrayProto.reduce;\n  var arrayReduceRight = ArrayProto.reduceRight;\n  var arrayJoin = ArrayProto.join;\n  var arraySort = ArrayProto.sort;\n  var arraySlice = ArrayProto.slice;\n  var arrayToString = ArrayProto.toString;\n  var arrayToLocaleString = ArrayProto.toLocaleString;\n  var ITERATOR = wks('iterator');\n  var TAG = wks('toStringTag');\n  var TYPED_CONSTRUCTOR = uid('typed_constructor');\n  var DEF_CONSTRUCTOR = uid('def_constructor');\n  var ALL_CONSTRUCTORS = $typed.CONSTR;\n  var TYPED_ARRAY = $typed.TYPED;\n  var VIEW = $typed.VIEW;\n  var WRONG_LENGTH = 'Wrong length!';\n\n  var $map = createArrayMethod(1, function (O, length) {\n    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);\n  });\n\n  var LITTLE_ENDIAN = fails(function () {\n    // eslint-disable-next-line no-undef\n    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;\n  });\n\n  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {\n    new Uint8Array(1).set({});\n  });\n\n  var toOffset = function (it, BYTES) {\n    var offset = toInteger(it);\n    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');\n    return offset;\n  };\n\n  var validate = function (it) {\n    if (isObject(it) && TYPED_ARRAY in it) return it;\n    throw TypeError(it + ' is not a typed array!');\n  };\n\n  var allocate = function (C, length) {\n    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {\n      throw TypeError('It is not a typed array constructor!');\n    } return new C(length);\n  };\n\n  var speciesFromList = function (O, list) {\n    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);\n  };\n\n  var fromList = function (C, list) {\n    var index = 0;\n    var length = list.length;\n    var result = allocate(C, length);\n    while (length > index) result[index] = list[index++];\n    return result;\n  };\n\n  var addGetter = function (it, key, internal) {\n    dP(it, key, { get: function () { return this._d[internal]; } });\n  };\n\n  var $from = function from(source /* , mapfn, thisArg */) {\n    var O = toObject(source);\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var iterFn = getIterFn(O);\n    var i, length, values, result, step, iterator;\n    if (iterFn != undefined && !isArrayIter(iterFn)) {\n      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {\n        values.push(step.value);\n      } O = values;\n    }\n    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);\n    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {\n      result[i] = mapping ? mapfn(O[i], i) : O[i];\n    }\n    return result;\n  };\n\n  var $of = function of(/* ...items */) {\n    var index = 0;\n    var length = arguments.length;\n    var result = allocate(this, length);\n    while (length > index) result[index] = arguments[index++];\n    return result;\n  };\n\n  // iOS Safari 6.x fails here\n  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });\n\n  var $toLocaleString = function toLocaleString() {\n    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);\n  };\n\n  var proto = {\n    copyWithin: function copyWithin(target, start /* , end */) {\n      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    every: function every(callbackfn /* , thisArg */) {\n      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars\n      return arrayFill.apply(validate(this), arguments);\n    },\n    filter: function filter(callbackfn /* , thisArg */) {\n      return speciesFromList(this, arrayFilter(validate(this), callbackfn,\n        arguments.length > 1 ? arguments[1] : undefined));\n    },\n    find: function find(predicate /* , thisArg */) {\n      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    findIndex: function findIndex(predicate /* , thisArg */) {\n      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    forEach: function forEach(callbackfn /* , thisArg */) {\n      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    indexOf: function indexOf(searchElement /* , fromIndex */) {\n      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    includes: function includes(searchElement /* , fromIndex */) {\n      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    join: function join(separator) { // eslint-disable-line no-unused-vars\n      return arrayJoin.apply(validate(this), arguments);\n    },\n    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars\n      return arrayLastIndexOf.apply(validate(this), arguments);\n    },\n    map: function map(mapfn /* , thisArg */) {\n      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduce.apply(validate(this), arguments);\n    },\n    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduceRight.apply(validate(this), arguments);\n    },\n    reverse: function reverse() {\n      var that = this;\n      var length = validate(that).length;\n      var middle = Math.floor(length / 2);\n      var index = 0;\n      var value;\n      while (index < middle) {\n        value = that[index];\n        that[index++] = that[--length];\n        that[length] = value;\n      } return that;\n    },\n    some: function some(callbackfn /* , thisArg */) {\n      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    sort: function sort(comparefn) {\n      return arraySort.call(validate(this), comparefn);\n    },\n    subarray: function subarray(begin, end) {\n      var O = validate(this);\n      var length = O.length;\n      var $begin = toAbsoluteIndex(begin, length);\n      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(\n        O.buffer,\n        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,\n        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)\n      );\n    }\n  };\n\n  var $slice = function slice(start, end) {\n    return speciesFromList(this, arraySlice.call(validate(this), start, end));\n  };\n\n  var $set = function set(arrayLike /* , offset */) {\n    validate(this);\n    var offset = toOffset(arguments[1], 1);\n    var length = this.length;\n    var src = toObject(arrayLike);\n    var len = toLength(src.length);\n    var index = 0;\n    if (len + offset > length) throw RangeError(WRONG_LENGTH);\n    while (index < len) this[offset + index] = src[index++];\n  };\n\n  var $iterators = {\n    entries: function entries() {\n      return arrayEntries.call(validate(this));\n    },\n    keys: function keys() {\n      return arrayKeys.call(validate(this));\n    },\n    values: function values() {\n      return arrayValues.call(validate(this));\n    }\n  };\n\n  var isTAIndex = function (target, key) {\n    return isObject(target)\n      && target[TYPED_ARRAY]\n      && typeof key != 'symbol'\n      && key in target\n      && String(+key) == String(key);\n  };\n  var $getDesc = function getOwnPropertyDescriptor(target, key) {\n    return isTAIndex(target, key = toPrimitive(key, true))\n      ? propertyDesc(2, target[key])\n      : gOPD(target, key);\n  };\n  var $setDesc = function defineProperty(target, key, desc) {\n    if (isTAIndex(target, key = toPrimitive(key, true))\n      && isObject(desc)\n      && has(desc, 'value')\n      && !has(desc, 'get')\n      && !has(desc, 'set')\n      // TODO: add validation descriptor w/o calling accessors\n      && !desc.configurable\n      && (!has(desc, 'writable') || desc.writable)\n      && (!has(desc, 'enumerable') || desc.enumerable)\n    ) {\n      target[key] = desc.value;\n      return target;\n    } return dP(target, key, desc);\n  };\n\n  if (!ALL_CONSTRUCTORS) {\n    $GOPD.f = $getDesc;\n    $DP.f = $setDesc;\n  }\n\n  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {\n    getOwnPropertyDescriptor: $getDesc,\n    defineProperty: $setDesc\n  });\n\n  if (fails(function () { arrayToString.call({}); })) {\n    arrayToString = arrayToLocaleString = function toString() {\n      return arrayJoin.call(this);\n    };\n  }\n\n  var $TypedArrayPrototype$ = redefineAll({}, proto);\n  redefineAll($TypedArrayPrototype$, $iterators);\n  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);\n  redefineAll($TypedArrayPrototype$, {\n    slice: $slice,\n    set: $set,\n    constructor: function () { /* noop */ },\n    toString: arrayToString,\n    toLocaleString: $toLocaleString\n  });\n  addGetter($TypedArrayPrototype$, 'buffer', 'b');\n  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');\n  addGetter($TypedArrayPrototype$, 'byteLength', 'l');\n  addGetter($TypedArrayPrototype$, 'length', 'e');\n  dP($TypedArrayPrototype$, TAG, {\n    get: function () { return this[TYPED_ARRAY]; }\n  });\n\n  // eslint-disable-next-line max-statements\n  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {\n    CLAMPED = !!CLAMPED;\n    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';\n    var GETTER = 'get' + KEY;\n    var SETTER = 'set' + KEY;\n    var TypedArray = global[NAME];\n    var Base = TypedArray || {};\n    var TAC = TypedArray && getPrototypeOf(TypedArray);\n    var FORCED = !TypedArray || !$typed.ABV;\n    var O = {};\n    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];\n    var getter = function (that, index) {\n      var data = that._d;\n      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);\n    };\n    var setter = function (that, index, value) {\n      var data = that._d;\n      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;\n      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);\n    };\n    var addElement = function (that, index) {\n      dP(that, index, {\n        get: function () {\n          return getter(this, index);\n        },\n        set: function (value) {\n          return setter(this, index, value);\n        },\n        enumerable: true\n      });\n    };\n    if (FORCED) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME, '_d');\n        var index = 0;\n        var offset = 0;\n        var buffer, byteLength, length, klass;\n        if (!isObject(data)) {\n          length = toIndex(data);\n          byteLength = length * BYTES;\n          buffer = new $ArrayBuffer(byteLength);\n        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          buffer = data;\n          offset = toOffset($offset, BYTES);\n          var $len = data.byteLength;\n          if ($length === undefined) {\n            if ($len % BYTES) throw RangeError(WRONG_LENGTH);\n            byteLength = $len - offset;\n            if (byteLength < 0) throw RangeError(WRONG_LENGTH);\n          } else {\n            byteLength = toLength($length) * BYTES;\n            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);\n          }\n          length = byteLength / BYTES;\n        } else if (TYPED_ARRAY in data) {\n          return fromList(TypedArray, data);\n        } else {\n          return $from.call(TypedArray, data);\n        }\n        hide(that, '_d', {\n          b: buffer,\n          o: offset,\n          l: byteLength,\n          e: length,\n          v: new $DataView(buffer)\n        });\n        while (index < length) addElement(that, index++);\n      });\n      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);\n      hide(TypedArrayPrototype, 'constructor', TypedArray);\n    } else if (!fails(function () {\n      TypedArray(1);\n    }) || !fails(function () {\n      new TypedArray(-1); // eslint-disable-line no-new\n    }) || !$iterDetect(function (iter) {\n      new TypedArray(); // eslint-disable-line no-new\n      new TypedArray(null); // eslint-disable-line no-new\n      new TypedArray(1.5); // eslint-disable-line no-new\n      new TypedArray(iter); // eslint-disable-line no-new\n    }, true)) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME);\n        var klass;\n        // `ws` module bug, temporarily remove validation length for Uint8Array\n        // https://github.com/websockets/ws/pull/645\n        if (!isObject(data)) return new Base(toIndex(data));\n        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          return $length !== undefined\n            ? new Base(data, toOffset($offset, BYTES), $length)\n            : $offset !== undefined\n              ? new Base(data, toOffset($offset, BYTES))\n              : new Base(data);\n        }\n        if (TYPED_ARRAY in data) return fromList(TypedArray, data);\n        return $from.call(TypedArray, data);\n      });\n      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {\n        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);\n      });\n      TypedArray[PROTOTYPE] = TypedArrayPrototype;\n      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;\n    }\n    var $nativeIterator = TypedArrayPrototype[ITERATOR];\n    var CORRECT_ITER_NAME = !!$nativeIterator\n      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);\n    var $iterator = $iterators.values;\n    hide(TypedArray, TYPED_CONSTRUCTOR, true);\n    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);\n    hide(TypedArrayPrototype, VIEW, true);\n    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);\n\n    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {\n      dP(TypedArrayPrototype, TAG, {\n        get: function () { return NAME; }\n      });\n    }\n\n    O[NAME] = TypedArray;\n\n    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);\n\n    $export($export.S, NAME, {\n      BYTES_PER_ELEMENT: BYTES\n    });\n\n    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {\n      from: $from,\n      of: $of\n    });\n\n    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);\n\n    $export($export.P, NAME, proto);\n\n    setSpecies(NAME);\n\n    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });\n\n    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);\n\n    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;\n\n    $export($export.P + $export.F * fails(function () {\n      new TypedArray(1).slice();\n    }), NAME, { slice: $slice });\n\n    $export($export.P + $export.F * (fails(function () {\n      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();\n    }) || !fails(function () {\n      TypedArrayPrototype.toLocaleString.call([1, 2]);\n    })), NAME, { toLocaleString: $toLocaleString });\n\n    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;\n    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);\n  };\n} else module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_typed-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/core-js/modules/_to-index.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar ARRAY_BUFFER = 'ArrayBuffer';\nvar DATA_VIEW = 'DataView';\nvar PROTOTYPE = 'prototype';\nvar WRONG_LENGTH = 'Wrong length!';\nvar WRONG_INDEX = 'Wrong index!';\nvar $ArrayBuffer = global[ARRAY_BUFFER];\nvar $DataView = global[DATA_VIEW];\nvar Math = global.Math;\nvar RangeError = global.RangeError;\n// eslint-disable-next-line no-shadow-restricted-names\nvar Infinity = global.Infinity;\nvar BaseBuffer = $ArrayBuffer;\nvar abs = Math.abs;\nvar pow = Math.pow;\nvar floor = Math.floor;\nvar log = Math.log;\nvar LN2 = Math.LN2;\nvar BUFFER = 'buffer';\nvar BYTE_LENGTH = 'byteLength';\nvar BYTE_OFFSET = 'byteOffset';\nvar $BUFFER = DESCRIPTORS ? '_b' : BUFFER;\nvar $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;\nvar $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;\n\n// IEEE754 conversions based on https://github.com/feross/ieee754\nfunction packIEEE754(value, mLen, nBytes) {\n  var buffer = new Array(nBytes);\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;\n  var i = 0;\n  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;\n  var e, m, c;\n  value = abs(value);\n  // eslint-disable-next-line no-self-compare\n  if (value != value || value === Infinity) {\n    // eslint-disable-next-line no-self-compare\n    m = value != value ? 1 : 0;\n    e = eMax;\n  } else {\n    e = floor(log(value) / LN2);\n    if (value * (c = pow(2, -e)) < 1) {\n      e--;\n      c *= 2;\n    }\n    if (e + eBias >= 1) {\n      value += rt / c;\n    } else {\n      value += rt * pow(2, 1 - eBias);\n    }\n    if (value * c >= 2) {\n      e++;\n      c /= 2;\n    }\n    if (e + eBias >= eMax) {\n      m = 0;\n      e = eMax;\n    } else if (e + eBias >= 1) {\n      m = (value * c - 1) * pow(2, mLen);\n      e = e + eBias;\n    } else {\n      m = value * pow(2, eBias - 1) * pow(2, mLen);\n      e = 0;\n    }\n  }\n  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);\n  e = e << mLen | m;\n  eLen += mLen;\n  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);\n  buffer[--i] |= s * 128;\n  return buffer;\n}\nfunction unpackIEEE754(buffer, mLen, nBytes) {\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var nBits = eLen - 7;\n  var i = nBytes - 1;\n  var s = buffer[i--];\n  var e = s & 127;\n  var m;\n  s >>= 7;\n  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);\n  m = e & (1 << -nBits) - 1;\n  e >>= -nBits;\n  nBits += mLen;\n  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);\n  if (e === 0) {\n    e = 1 - eBias;\n  } else if (e === eMax) {\n    return m ? NaN : s ? -Infinity : Infinity;\n  } else {\n    m = m + pow(2, mLen);\n    e = e - eBias;\n  } return (s ? -1 : 1) * m * pow(2, e - mLen);\n}\n\nfunction unpackI32(bytes) {\n  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];\n}\nfunction packI8(it) {\n  return [it & 0xff];\n}\nfunction packI16(it) {\n  return [it & 0xff, it >> 8 & 0xff];\n}\nfunction packI32(it) {\n  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];\n}\nfunction packF64(it) {\n  return packIEEE754(it, 52, 8);\n}\nfunction packF32(it) {\n  return packIEEE754(it, 23, 4);\n}\n\nfunction addGetter(C, key, internal) {\n  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });\n}\n\nfunction get(view, bytes, index, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = store.slice(start, start + bytes);\n  return isLittleEndian ? pack : pack.reverse();\n}\nfunction set(view, bytes, index, conversion, value, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = conversion(+value);\n  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];\n}\n\nif (!$typed.ABV) {\n  $ArrayBuffer = function ArrayBuffer(length) {\n    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);\n    var byteLength = toIndex(length);\n    this._b = arrayFill.call(new Array(byteLength), 0);\n    this[$LENGTH] = byteLength;\n  };\n\n  $DataView = function DataView(buffer, byteOffset, byteLength) {\n    anInstance(this, $DataView, DATA_VIEW);\n    anInstance(buffer, $ArrayBuffer, DATA_VIEW);\n    var bufferLength = buffer[$LENGTH];\n    var offset = toInteger(byteOffset);\n    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');\n    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);\n    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);\n    this[$BUFFER] = buffer;\n    this[$OFFSET] = offset;\n    this[$LENGTH] = byteLength;\n  };\n\n  if (DESCRIPTORS) {\n    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');\n    addGetter($DataView, BUFFER, '_b');\n    addGetter($DataView, BYTE_LENGTH, '_l');\n    addGetter($DataView, BYTE_OFFSET, '_o');\n  }\n\n  redefineAll($DataView[PROTOTYPE], {\n    getInt8: function getInt8(byteOffset) {\n      return get(this, 1, byteOffset)[0] << 24 >> 24;\n    },\n    getUint8: function getUint8(byteOffset) {\n      return get(this, 1, byteOffset)[0];\n    },\n    getInt16: function getInt16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;\n    },\n    getUint16: function getUint16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return bytes[1] << 8 | bytes[0];\n    },\n    getInt32: function getInt32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1]));\n    },\n    getUint32: function getUint32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;\n    },\n    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);\n    },\n    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);\n    },\n    setInt8: function setInt8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packF32, value, arguments[2]);\n    },\n    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {\n      set(this, 8, byteOffset, packF64, value, arguments[2]);\n    }\n  });\n} else {\n  if (!fails(function () {\n    $ArrayBuffer(1);\n  }) || !fails(function () {\n    new $ArrayBuffer(-1); // eslint-disable-line no-new\n  }) || fails(function () {\n    new $ArrayBuffer(); // eslint-disable-line no-new\n    new $ArrayBuffer(1.5); // eslint-disable-line no-new\n    new $ArrayBuffer(NaN); // eslint-disable-line no-new\n    return $ArrayBuffer.name != ARRAY_BUFFER;\n  })) {\n    $ArrayBuffer = function ArrayBuffer(length) {\n      anInstance(this, $ArrayBuffer);\n      return new BaseBuffer(toIndex(length));\n    };\n    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];\n    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {\n      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);\n    }\n    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;\n  }\n  // iOS Safari 7.x bug\n  var view = new $DataView(new $ArrayBuffer(2));\n  var $setInt8 = $DataView[PROTOTYPE].setInt8;\n  view.setInt8(0, 2147483648);\n  view.setInt8(1, 2147483649);\n  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {\n    setInt8: function setInt8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    }\n  }, true);\n}\nsetToStringTag($ArrayBuffer, ARRAY_BUFFER);\nsetToStringTag($DataView, DATA_VIEW);\nhide($DataView[PROTOTYPE], $typed.VIEW, true);\nexports[ARRAY_BUFFER] = $ArrayBuffer;\nexports[DATA_VIEW] = $DataView;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_typed-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar TYPED = uid('typed_array');\nvar VIEW = uid('view');\nvar ABV = !!(global.ArrayBuffer && global.DataView);\nvar CONSTR = ABV;\nvar i = 0;\nvar l = 9;\nvar Typed;\n\nvar TypedArrayConstructors = (\n  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'\n).split(',');\n\nwhile (i < l) {\n  if (Typed = global[TypedArrayConstructors[i++]]) {\n    hide(Typed.prototype, TYPED, true);\n    hide(Typed.prototype, VIEW, true);\n  } else CONSTR = false;\n}\n\nmodule.exports = {\n  ABV: ABV,\n  CONSTR: CONSTR,\n  TYPED: TYPED,\n  VIEW: VIEW\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_typed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ ((module) => {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_validate-collection.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/core-js/modules/_array-copy-within.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('copyWithin');\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $every = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(4);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].every, true), 'Array', {\n  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])\n  every: function every(callbackfn /* , thisArg */) {\n    return $every(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.every.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('fill');\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $filter = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(2);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].filter, true), 'Array', {\n  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.filter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(6);\nvar KEY = 'findIndex';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  findIndex: function findIndex(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.find-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(5);\nvar KEY = 'find';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.find.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $forEach = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar STRICT = __webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].forEach, true);\n\n$export($export.P + $export.F * !STRICT, 'Array', {\n  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])\n  forEach: function forEach(callbackfn /* , thisArg */) {\n    return $forEach(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $indexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar $native = [].indexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? $native.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\") });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 22.1.3.13 Array.prototype.join(separator)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayJoin = [].join;\n\n// fallback for not array-like strings\n$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\") != Object || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")(arrayJoin)), 'Array', {\n  join: function join(separator) {\n    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.join.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar $native = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])\n  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {\n    // convert -0 to +0\n    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;\n    var O = toIObject(this);\n    var length = toLength(O.length);\n    var index = length - 1;\n    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));\n    if (index < 0) index = length + index;\n    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;\n    return -1;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.last-index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $map = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(1);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].map, true), 'Array', {\n  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\n\n// WebKit Array.of isn't generic\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  function F() { /* empty */ }\n  return !(Array.of.call(F) instanceof F);\n}), 'Array', {\n  // 22.1.2.3 Array.of( ...items)\n  of: function of(/* ...args */) {\n    var index = 0;\n    var aLen = arguments.length;\n    var result = new (typeof this == 'function' ? this : Array)(aLen);\n    while (aLen > index) createProperty(result, index, arguments[index++]);\n    result.length = aLen;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].reduceRight, true), 'Array', {\n  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])\n  reduceRight: function reduceRight(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], true);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.reduce-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].reduce, true), 'Array', {\n  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], false);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar arraySlice = [].slice;\n\n// fallback for not array-like ES3 strings and DOM objects\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  if (html) arraySlice.call(html);\n}), 'Array', {\n  slice: function slice(begin, end) {\n    var len = toLength(this.length);\n    var klass = cof(this);\n    end = end === undefined ? len : end;\n    if (klass == 'Array') return arraySlice.call(this, begin, end);\n    var start = toAbsoluteIndex(begin, len);\n    var upTo = toAbsoluteIndex(end, len);\n    var size = toLength(upTo - start);\n    var cloned = new Array(size);\n    var i = 0;\n    for (; i < size; i++) cloned[i] = klass == 'String'\n      ? this.charAt(start + i)\n      : this[start + i];\n    return cloned;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $some = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(3);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].some, true), 'Array', {\n  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])\n  some: function some(callbackfn /* , thisArg */) {\n    return $some(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.some.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $sort = [].sort;\nvar test = [1, 2, 3];\n\n$export($export.P + $export.F * (fails(function () {\n  // IE8-\n  test.sort(undefined);\n}) || !fails(function () {\n  // V8 bug\n  test.sort(null);\n  // Old WebKit\n}) || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($sort)), 'Array', {\n  // 22.1.3.25 Array.prototype.sort(comparefn)\n  sort: function sort(comparefn) {\n    return comparefn === undefined\n      ? $sort.call(toObject(this))\n      : $sort.call(toObject(this), aFunction(comparefn));\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.sort.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('Array');\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.array.species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.3.3.1 / 15.9.4.4 Date.now()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.date.now.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toISOString = __webpack_require__(/*! ./_date-to-iso-string */ \"./node_modules/core-js/modules/_date-to-iso-string.js\");\n\n// PhantomJS / old WebKit has a broken implementations\n$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {\n  toISOString: toISOString\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.date.to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return new Date(NaN).toJSON() !== null\n    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;\n}), 'Date', {\n  // eslint-disable-next-line no-unused-vars\n  toJSON: function toJSON(key) {\n    var O = toObject(this);\n    var pv = toPrimitive(O);\n    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.date.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toPrimitive');\nvar proto = Date.prototype;\n\nif (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ \"./node_modules/core-js/modules/_date-to-primitive.js\"));\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.date.to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var DateProto = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar $toString = DateProto[TO_STRING];\nvar getTime = DateProto.getTime;\nif (new Date(NaN) + '' != INVALID_DATE) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(DateProto, TO_STRING, function toString() {\n    var value = getTime.call(this);\n    // eslint-disable-next-line no-self-compare\n    return value === value ? $toString.call(this) : INVALID_DATE;\n  });\n}\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.date.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\") });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.function.bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar HAS_INSTANCE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('hasInstance');\nvar FunctionProto = Function.prototype;\n// 19.2.3.6 Function.prototype[@@hasInstance](V)\nif (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f(FunctionProto, HAS_INSTANCE, { value: function (O) {\n  if (typeof this != 'function' || !isObject(O)) return false;\n  if (!isObject(this.prototype)) return O instanceof this;\n  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:\n  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;\n  return false;\n} });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.function.has-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar FProto = Function.prototype;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// 19.2.4.2 name\nNAME in FProto || __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && dP(FProto, NAME, {\n  configurable: true,\n  get: function () {\n    try {\n      return ('' + this).match(nameRE)[1];\n    } catch (e) {\n      return '';\n    }\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.function.name.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar MAP = 'Map';\n\n// 23.1 Map Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(MAP, function (get) {\n  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.1.3.6 Map.prototype.get(key)\n  get: function get(key) {\n    var entry = strong.getEntry(validate(this, MAP), key);\n    return entry && entry.v;\n  },\n  // 23.1.3.9 Map.prototype.set(key, value)\n  set: function set(key, value) {\n    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);\n  }\n}, strong, true);\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.3 Math.acosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar log1p = __webpack_require__(/*! ./_math-log1p */ \"./node_modules/core-js/modules/_math-log1p.js\");\nvar sqrt = Math.sqrt;\nvar $acosh = Math.acosh;\n\n$export($export.S + $export.F * !($acosh\n  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509\n  && Math.floor($acosh(Number.MAX_VALUE)) == 710\n  // Tor Browser bug: Math.acosh(Infinity) -> NaN\n  && $acosh(Infinity) == Infinity\n), 'Math', {\n  acosh: function acosh(x) {\n    return (x = +x) < 1 ? NaN : x > 94906265.62425156\n      ? Math.log(x) + Math.LN2\n      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.acosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.5 Math.asinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $asinh = Math.asinh;\n\nfunction asinh(x) {\n  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));\n}\n\n// Tor Browser bug: Math.asinh(0) -> -0\n$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.asinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.7 Math.atanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $atanh = Math.atanh;\n\n// Tor Browser bug: Math.atanh(-0) -> 0\n$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {\n  atanh: function atanh(x) {\n    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.atanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.9 Math.cbrt(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\");\n\n$export($export.S, 'Math', {\n  cbrt: function cbrt(x) {\n    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.cbrt.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.11 Math.clz32(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clz32: function clz32(x) {\n    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.clz32.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.12 Math.cosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  cosh: function cosh(x) {\n    return (exp(x = +x) + exp(-x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.cosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.14 Math.expm1(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\n\n$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.16 Math.fround(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ \"./node_modules/core-js/modules/_math-fround.js\") });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Math', {\n  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars\n    var sum = 0;\n    var i = 0;\n    var aLen = arguments.length;\n    var larg = 0;\n    var arg, div;\n    while (i < aLen) {\n      arg = abs(arguments[i++]);\n      if (larg < arg) {\n        div = larg / arg;\n        sum = sum * div * div + 1;\n        larg = arg;\n      } else if (arg > 0) {\n        div = arg / larg;\n        sum += div * div;\n      } else sum += arg;\n    }\n    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.hypot.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.18 Math.imul(x, y)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $imul = Math.imul;\n\n// some WebKit versions fails with big numbers, some has wrong arity\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;\n}), 'Math', {\n  imul: function imul(x, y) {\n    var UINT16 = 0xffff;\n    var xn = +x;\n    var yn = +y;\n    var xl = UINT16 & xn;\n    var yl = UINT16 & yn;\n    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.imul.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.21 Math.log10(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log10: function log10(x) {\n    return Math.log(x) * Math.LOG10E;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.log10.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.20 Math.log1p(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ \"./node_modules/core-js/modules/_math-log1p.js\") });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.22 Math.log2(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log2: function log2(x) {\n    return Math.log(x) / Math.LN2;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.log2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.28 Math.sign(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\") });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.30 Math.sinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n// V8 near Chromium 38 has a problem with very small numbers\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return !Math.sinh(-2e-17) != -2e-17;\n}), 'Math', {\n  sinh: function sinh(x) {\n    return Math.abs(x = +x) < 1\n      ? (expm1(x) - expm1(-x)) / 2\n      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.sinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.33 Math.tanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  tanh: function tanh(x) {\n    var a = expm1(x = +x);\n    var b = expm1(-x);\n    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.tanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.34 Math.trunc(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  trunc: function trunc(it) {\n    return (it > 0 ? Math.floor : Math.ceil)(it);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.math.trunc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\nvar NUMBER = 'Number';\nvar $Number = global[NUMBER];\nvar Base = $Number;\nvar proto = $Number.prototype;\n// Opera ~12 has broken Object#toString\nvar BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\")(proto)) == NUMBER;\nvar TRIM = 'trim' in String.prototype;\n\n// 7.1.3 ToNumber(argument)\nvar toNumber = function (argument) {\n  var it = toPrimitive(argument, false);\n  if (typeof it == 'string' && it.length > 2) {\n    it = TRIM ? it.trim() : $trim(it, 3);\n    var first = it.charCodeAt(0);\n    var third, radix, maxCode;\n    if (first === 43 || first === 45) {\n      third = it.charCodeAt(2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (it.charCodeAt(1)) {\n        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i\n        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i\n        default: return +it;\n      }\n      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {\n        code = digits.charCodeAt(i);\n        // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n        if (code < 48 || code > maxCode) return NaN;\n      } return parseInt(digits, radix);\n    }\n  } return +it;\n};\n\nif (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {\n  $Number = function Number(value) {\n    var it = arguments.length < 1 ? 0 : value;\n    var that = this;\n    return that instanceof $Number\n      // check on 1..constructor(foo) case\n      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)\n        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);\n  };\n  for (var keys = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPN(Base) : (\n    // ES3:\n    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +\n    // ES6 (in case, if modules with ES6 Number statics required before):\n    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +\n    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'\n  ).split(','), j = 0, key; keys.length > j; j++) {\n    if (has(Base, key = keys[j]) && !has($Number, key)) {\n      dP($Number, key, gOPD(Base, key));\n    }\n  }\n  $Number.prototype = proto;\n  proto.constructor = $Number;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, NUMBER, $Number);\n}\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.number.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.1 Number.EPSILON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.number.epsilon.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.2 Number.isFinite(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar _isFinite = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").isFinite;\n\n$export($export.S, 'Number', {\n  isFinite: function isFinite(it) {\n    return typeof it == 'number' && _isFinite(it);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.number.is-finite.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.3 Number.isInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/modules/_is-integer.js\") });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.number.is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.4 Number.isNaN(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  isNaN: function isNaN(number) {\n    // eslint-disable-next-line no-self-compare\n    return number != number;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.number.is-nan.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.5 Number.isSafeInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isInteger = __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/modules/_is-integer.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Number', {\n  isSafeInteger: function isSafeInteger(number) {\n    return isInteger(number) && abs(number) <= 0x1fffffffffffff;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.number.is-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.6 Number.MAX_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.number.max-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.10 Number.MIN_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.number.min-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/core-js/modules/_parse-float.js\");\n// 20.1.2.12 Number.parseFloat(string)\n$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.number.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/core-js/modules/_parse-int.js\");\n// 20.1.2.13 Number.parseInt(string, radix)\n$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.number.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/core-js/modules/_a-number-value.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar $toFixed = 1.0.toFixed;\nvar floor = Math.floor;\nvar data = [0, 0, 0, 0, 0, 0];\nvar ERROR = 'Number.toFixed: incorrect invocation!';\nvar ZERO = '0';\n\nvar multiply = function (n, c) {\n  var i = -1;\n  var c2 = c;\n  while (++i < 6) {\n    c2 += n * data[i];\n    data[i] = c2 % 1e7;\n    c2 = floor(c2 / 1e7);\n  }\n};\nvar divide = function (n) {\n  var i = 6;\n  var c = 0;\n  while (--i >= 0) {\n    c += data[i];\n    data[i] = floor(c / n);\n    c = (c % n) * 1e7;\n  }\n};\nvar numToString = function () {\n  var i = 6;\n  var s = '';\n  while (--i >= 0) {\n    if (s !== '' || i === 0 || data[i] !== 0) {\n      var t = String(data[i]);\n      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;\n    }\n  } return s;\n};\nvar pow = function (x, n, acc) {\n  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);\n};\nvar log = function (x) {\n  var n = 0;\n  var x2 = x;\n  while (x2 >= 4096) {\n    n += 12;\n    x2 /= 4096;\n  }\n  while (x2 >= 2) {\n    n += 1;\n    x2 /= 2;\n  } return n;\n};\n\n$export($export.P + $export.F * (!!$toFixed && (\n  0.00008.toFixed(3) !== '0.000' ||\n  0.9.toFixed(0) !== '1' ||\n  1.255.toFixed(2) !== '1.25' ||\n  1000000000000000128.0.toFixed(0) !== '1000000000000000128'\n) || !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  // V8 ~ Android 4.3-\n  $toFixed.call({});\n})), 'Number', {\n  toFixed: function toFixed(fractionDigits) {\n    var x = aNumberValue(this, ERROR);\n    var f = toInteger(fractionDigits);\n    var s = '';\n    var m = ZERO;\n    var e, z, j, k;\n    if (f < 0 || f > 20) throw RangeError(ERROR);\n    // eslint-disable-next-line no-self-compare\n    if (x != x) return 'NaN';\n    if (x <= -1e21 || x >= 1e21) return String(x);\n    if (x < 0) {\n      s = '-';\n      x = -x;\n    }\n    if (x > 1e-21) {\n      e = log(x * pow(2, 69, 1)) - 69;\n      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);\n      z *= 0x10000000000000;\n      e = 52 - e;\n      if (e > 0) {\n        multiply(0, z);\n        j = f;\n        while (j >= 7) {\n          multiply(1e7, 0);\n          j -= 7;\n        }\n        multiply(pow(10, j, 1), 0);\n        j = e - 1;\n        while (j >= 23) {\n          divide(1 << 23);\n          j -= 23;\n        }\n        divide(1 << j);\n        multiply(1, 1);\n        divide(2);\n        m = numToString();\n      } else {\n        multiply(0, z);\n        multiply(1 << -e, 0);\n        m = numToString() + repeat.call(ZERO, f);\n      }\n    }\n    if (f > 0) {\n      k = m.length;\n      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));\n    } else {\n      m = s + m;\n    } return m;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.number.to-fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/core-js/modules/_a-number-value.js\");\nvar $toPrecision = 1.0.toPrecision;\n\n$export($export.P + $export.F * ($fails(function () {\n  // IE7-\n  return $toPrecision.call(1, undefined) !== '1';\n}) || !$fails(function () {\n  // V8 ~ Android 4.3-\n  $toPrecision.call({});\n})), 'Number', {\n  toPrecision: function toPrecision(precision) {\n    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');\n    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.number.to-precision.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\") });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.5 Object.freeze(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('freeze', function ($freeze) {\n  return function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.freeze.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyDescriptor', function () {\n  return function getOwnPropertyDescriptor(it, key) {\n    return $getOwnPropertyDescriptor(toIObject(it), key);\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.7 Object.getOwnPropertyNames(O)\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyNames', function () {\n  return __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\").f;\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.11 Object.isExtensible(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isExtensible', function ($isExtensible) {\n  return function isExtensible(it) {\n    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.12 Object.isFrozen(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isFrozen', function ($isFrozen) {\n  return function isFrozen(it) {\n    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.is-frozen.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.13 Object.isSealed(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isSealed', function ($isSealed) {\n  return function isSealed(it) {\n    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.is-sealed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.3.10 Object.is(value1, value2)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ \"./node_modules/core-js/modules/_same-value.js\") });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.is.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.15 Object.preventExtensions(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('preventExtensions', function ($preventExtensions) {\n  return function preventExtensions(it) {\n    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.17 Object.seal(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('seal', function ($seal) {\n  return function seal(it) {\n    return $seal && isObject(it) ? $seal(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.seal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 19.1.3.6 Object.prototype.toString()\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar test = {};\ntest[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag')] = 'z';\nif (test + '' != '[object z]') {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(Object.prototype, 'toString', function toString() {\n    return '[object ' + classof(this) + ']';\n  }, true);\n}\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/core-js/modules/_parse-float.js\");\n// 18.2.4 parseFloat(string)\n$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/core-js/modules/_parse-int.js\");\n// 18.2.5 parseInt(string, radix)\n$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/modules/_perform.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar rApply = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect || {}).apply;\nvar fApply = Function.apply;\n// MS Edge argumentsList argument is optional\n$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  rApply(function () { /* empty */ });\n}), 'Reflect', {\n  apply: function apply(target, thisArgument, argumentsList) {\n    var T = aFunction(target);\n    var L = anObject(argumentsList);\n    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.reflect.apply.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar bind = __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\");\nvar rConstruct = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect || {}).construct;\n\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() { /* empty */ }\n  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  rConstruct(function () { /* empty */ });\n});\n\n$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {\n  construct: function construct(Target, args /* , newTarget */) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0: return new Target();\n        case 1: return new Target(args[0]);\n        case 2: return new Target(args[0], args[1]);\n        case 3: return new Target(args[0], args[1], args[2]);\n        case 4: return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.reflect.construct.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n\n// MS Edge has broken Reflect.defineProperty - throwing instead of returning false\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  // eslint-disable-next-line no-undef\n  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });\n}), 'Reflect', {\n  defineProperty: function defineProperty(target, propertyKey, attributes) {\n    anObject(target);\n    propertyKey = toPrimitive(propertyKey, true);\n    anObject(attributes);\n    try {\n      dP.f(target, propertyKey, attributes);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.reflect.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.4 Reflect.deleteProperty(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  deleteProperty: function deleteProperty(target, propertyKey) {\n    var desc = gOPD(anObject(target), propertyKey);\n    return desc && !desc.configurable ? false : delete target[propertyKey];\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.reflect.delete-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 26.1.5 Reflect.enumerate(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar Enumerate = function (iterated) {\n  this._t = anObject(iterated); // target\n  this._i = 0;                  // next index\n  var keys = this._k = [];      // keys\n  var key;\n  for (key in iterated) keys.push(key);\n};\n__webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\")(Enumerate, 'Object', function () {\n  var that = this;\n  var keys = that._k;\n  var key;\n  do {\n    if (that._i >= keys.length) return { value: undefined, done: true };\n  } while (!((key = keys[that._i++]) in that._t));\n  return { value: key, done: false };\n});\n\n$export($export.S, 'Reflect', {\n  enumerate: function enumerate(target) {\n    return new Enumerate(target);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.reflect.enumerate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {\n    return gOPD.f(anObject(target), propertyKey);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.8 Reflect.getPrototypeOf(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar getProto = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getPrototypeOf: function getPrototypeOf(target) {\n    return getProto(anObject(target));\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.reflect.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.6 Reflect.get(target, propertyKey [, receiver])\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\nfunction get(target, propertyKey /* , receiver */) {\n  var receiver = arguments.length < 3 ? target : arguments[2];\n  var desc, proto;\n  if (anObject(target) === receiver) return target[propertyKey];\n  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')\n    ? desc.value\n    : desc.get !== undefined\n      ? desc.get.call(receiver)\n      : undefined;\n  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);\n}\n\n$export($export.S, 'Reflect', { get: get });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.reflect.get.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.9 Reflect.has(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', {\n  has: function has(target, propertyKey) {\n    return propertyKey in target;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.reflect.has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.10 Reflect.isExtensible(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $isExtensible = Object.isExtensible;\n\n$export($export.S, 'Reflect', {\n  isExtensible: function isExtensible(target) {\n    anObject(target);\n    return $isExtensible ? $isExtensible(target) : true;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.reflect.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.11 Reflect.ownKeys(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ \"./node_modules/core-js/modules/_own-keys.js\") });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.reflect.own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.12 Reflect.preventExtensions(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $preventExtensions = Object.preventExtensions;\n\n$export($export.S, 'Reflect', {\n  preventExtensions: function preventExtensions(target) {\n    anObject(target);\n    try {\n      if ($preventExtensions) $preventExtensions(target);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.reflect.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.14 Reflect.setPrototypeOf(target, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar setProto = __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\");\n\nif (setProto) $export($export.S, 'Reflect', {\n  setPrototypeOf: function setPrototypeOf(target, proto) {\n    setProto.check(target, proto);\n    try {\n      setProto.set(target, proto);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.reflect.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\nfunction set(target, propertyKey, V /* , receiver */) {\n  var receiver = arguments.length < 4 ? target : arguments[3];\n  var ownDesc = gOPD.f(anObject(target), propertyKey);\n  var existingDescriptor, proto;\n  if (!ownDesc) {\n    if (isObject(proto = getPrototypeOf(target))) {\n      return set(proto, propertyKey, V, receiver);\n    }\n    ownDesc = createDesc(0);\n  }\n  if (has(ownDesc, 'value')) {\n    if (ownDesc.writable === false || !isObject(receiver)) return false;\n    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {\n      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;\n      existingDescriptor.value = V;\n      dP.f(receiver, propertyKey, existingDescriptor);\n    } else dP.f(receiver, propertyKey, createDesc(0, V));\n    return true;\n  }\n  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);\n}\n\n$export($export.S, 'Reflect', { set: set });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.reflect.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar $RegExp = global.RegExp;\nvar Base = $RegExp;\nvar proto = $RegExp.prototype;\nvar re1 = /a/g;\nvar re2 = /a/g;\n// \"new\" creates a new object, old webkit buggy here\nvar CORRECT_NEW = new $RegExp(re1) !== re1;\n\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  re2[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match')] = false;\n  // RegExp constructor can alter flags and IsRegExp works correct with @@match\n  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';\n}))) {\n  $RegExp = function RegExp(p, f) {\n    var tiRE = this instanceof $RegExp;\n    var piRE = isRegExp(p);\n    var fiU = f === undefined;\n    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p\n      : inheritIfRequired(CORRECT_NEW\n        ? new Base(piRE && !fiU ? p.source : p, f)\n        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)\n      , tiRE ? this : proto, $RegExp);\n  };\n  var proxy = function (key) {\n    key in $RegExp || dP($RegExp, key, {\n      configurable: true,\n      get: function () { return Base[key]; },\n      set: function (it) { Base[key] = it; }\n    });\n  };\n  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);\n  proto.constructor = $RegExp;\n  $RegExp.prototype = proto;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, 'RegExp', $RegExp);\n}\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('RegExp');\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.regexp.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n__webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\")({\n  target: 'RegExp',\n  proto: true,\n  forced: regexpExec !== /./.exec\n}, {\n  exec: regexpExec\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f(RegExp.prototype, 'flags', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\")\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.regexp.flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\n// @@match logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('match', 1, function (defined, MATCH, $match, maybeCallNative) {\n  return [\n    // `String.prototype.match` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.match\n    function match(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[MATCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n    },\n    // `RegExp.prototype[@@match]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match\n    function (regexp) {\n      var res = maybeCallNative($match, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      if (!rx.global) return regExpExec(rx, S);\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n      var A = [];\n      var n = 0;\n      var result;\n      while ((result = regExpExec(rx, S)) !== null) {\n        var matchStr = String(result[0]);\n        A[n] = matchStr;\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n        n++;\n      }\n      return n === 0 ? null : A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.regexp.match.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\nvar max = Math.max;\nvar min = Math.min;\nvar floor = Math.floor;\nvar SUBSTITUTION_SYMBOLS = /\\$([$&`']|\\d\\d?|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&`']|\\d\\d?)/g;\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n// @@replace logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {\n  return [\n    // `String.prototype.replace` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.replace\n    function replace(searchValue, replaceValue) {\n      var O = defined(this);\n      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];\n      return fn !== undefined\n        ? fn.call(searchValue, O, replaceValue)\n        : $replace.call(String(O), searchValue, replaceValue);\n    },\n    // `RegExp.prototype[@@replace]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace\n    function (regexp, replaceValue) {\n      var res = maybeCallNative($replace, regexp, this, replaceValue);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var functionalReplace = typeof replaceValue === 'function';\n      if (!functionalReplace) replaceValue = String(replaceValue);\n      var global = rx.global;\n      if (global) {\n        var fullUnicode = rx.unicode;\n        rx.lastIndex = 0;\n      }\n      var results = [];\n      while (true) {\n        var result = regExpExec(rx, S);\n        if (result === null) break;\n        results.push(result);\n        if (!global) break;\n        var matchStr = String(result[0]);\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      }\n      var accumulatedResult = '';\n      var nextSourcePosition = 0;\n      for (var i = 0; i < results.length; i++) {\n        result = results[i];\n        var matched = String(result[0]);\n        var position = max(min(toInteger(result.index), S.length), 0);\n        var captures = [];\n        // NOTE: This is equivalent to\n        //   captures = result.slice(1).map(maybeToString)\n        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n        // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));\n        var namedCaptures = result.groups;\n        if (functionalReplace) {\n          var replacerArgs = [matched].concat(captures, position, S);\n          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);\n          var replacement = String(replaceValue.apply(undefined, replacerArgs));\n        } else {\n          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n        }\n        if (position >= nextSourcePosition) {\n          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;\n          nextSourcePosition = position + matched.length;\n        }\n      }\n      return accumulatedResult + S.slice(nextSourcePosition);\n    }\n  ];\n\n    // https://tc39.github.io/ecma262/#sec-getsubstitution\n  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {\n    var tailPos = position + matched.length;\n    var m = captures.length;\n    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n    if (namedCaptures !== undefined) {\n      namedCaptures = toObject(namedCaptures);\n      symbols = SUBSTITUTION_SYMBOLS;\n    }\n    return $replace.call(replacement, symbols, function (match, ch) {\n      var capture;\n      switch (ch.charAt(0)) {\n        case '$': return '$';\n        case '&': return matched;\n        case '`': return str.slice(0, position);\n        case \"'\": return str.slice(tailPos);\n        case '<':\n          capture = namedCaptures[ch.slice(1, -1)];\n          break;\n        default: // \\d\\d?\n          var n = +ch;\n          if (n === 0) return match;\n          if (n > m) {\n            var f = floor(n / 10);\n            if (f === 0) return match;\n            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);\n            return match;\n          }\n          capture = captures[n - 1];\n      }\n      return capture === undefined ? '' : capture;\n    });\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.regexp.replace.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar sameValue = __webpack_require__(/*! ./_same-value */ \"./node_modules/core-js/modules/_same-value.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\n// @@search logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {\n  return [\n    // `String.prototype.search` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.search\n    function search(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[SEARCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n    },\n    // `RegExp.prototype[@@search]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search\n    function (regexp) {\n      var res = maybeCallNative($search, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      var previousLastIndex = rx.lastIndex;\n      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;\n      var result = regExpExec(rx, S);\n      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;\n      return result === null ? -1 : result.index;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.regexp.search.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $min = Math.min;\nvar $push = [].push;\nvar $SPLIT = 'split';\nvar LENGTH = 'length';\nvar LAST_INDEX = 'lastIndex';\nvar MAX_UINT32 = 0xffffffff;\n\n// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError\nvar SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });\n\n// @@split logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {\n  var internalSplit;\n  if (\n    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||\n    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||\n    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||\n    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||\n    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||\n    ''[$SPLIT](/.?/)[LENGTH]\n  ) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function (separator, limit) {\n      var string = String(this);\n      if (separator === undefined && limit === 0) return [];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) return $split.call(string, separator, limit);\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n      while (match = regexpExec.call(separatorCopy, string)) {\n        lastIndex = separatorCopy[LAST_INDEX];\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));\n          lastLength = match[0][LENGTH];\n          lastLastIndex = lastIndex;\n          if (output[LENGTH] >= splitLimit) break;\n        }\n        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string[LENGTH]) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;\n    };\n  // Chakra, V8\n  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {\n    internalSplit = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);\n    };\n  } else {\n    internalSplit = $split;\n  }\n\n  return [\n    // `String.prototype.split` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.split\n    function split(separator, limit) {\n      var O = defined(this);\n      var splitter = separator == undefined ? undefined : separator[SPLIT];\n      return splitter !== undefined\n        ? splitter.call(separator, O, limit)\n        : internalSplit.call(String(O), separator, limit);\n    },\n    // `RegExp.prototype[@@split]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split\n    //\n    // NOTE: This cannot be properly polyfilled in engines that don't support\n    // the 'y' flag.\n    function (regexp, limit) {\n      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var C = speciesConstructor(rx, RegExp);\n\n      var unicodeMatching = rx.unicode;\n      var flags = (rx.ignoreCase ? 'i' : '') +\n                  (rx.multiline ? 'm' : '') +\n                  (rx.unicode ? 'u' : '') +\n                  (SUPPORTS_Y ? 'y' : 'g');\n\n      // ^(? + rx + ) is needed, in combination with some S slicing, to\n      // simulate the 'y' flag.\n      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n      var p = 0;\n      var q = 0;\n      var A = [];\n      while (q < S.length) {\n        splitter.lastIndex = SUPPORTS_Y ? q : 0;\n        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));\n        var e;\n        if (\n          z === null ||\n          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p\n        ) {\n          q = advanceStringIndex(S, q, unicodeMatching);\n        } else {\n          A.push(S.slice(p, q));\n          if (A.length === lim) return A;\n          for (var i = 1; i <= z.length - 1; i++) {\n            A.push(z[i]);\n            if (A.length === lim) return A;\n          }\n          q = p = e;\n        }\n      }\n      A.push(S.slice(p));\n      return A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.regexp.split.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function (fn) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/',\n      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n// FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar SET = 'Set';\n\n// 23.2 Set Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(SET, function (get) {\n  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.2.3.1 Set.prototype.add(value)\n  add: function add(value) {\n    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);\n  }\n}, strong);\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.2 String.prototype.anchor(name)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('anchor', function (createHTML) {\n  return function anchor(name) {\n    return createHTML(this, 'a', 'name', name);\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.anchor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.3 String.prototype.big()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('big', function (createHTML) {\n  return function big() {\n    return createHTML(this, 'big', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.big.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.4 String.prototype.blink()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('blink', function (createHTML) {\n  return function blink() {\n    return createHTML(this, 'blink', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.blink.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.5 String.prototype.bold()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('bold', function (createHTML) {\n  return function bold() {\n    return createHTML(this, 'b', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.bold.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(false);\n$export($export.P, 'String', {\n  // 21.1.3.3 String.prototype.codePointAt(pos)\n  codePointAt: function codePointAt(pos) {\n    return $at(this, pos);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.code-point-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar ENDS_WITH = 'endsWith';\nvar $endsWith = ''[ENDS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(ENDS_WITH), 'String', {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = context(this, searchString, ENDS_WITH);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = toLength(that.length);\n    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);\n    var search = String(searchString);\n    return $endsWith\n      ? $endsWith.call(that, search, end)\n      : that.slice(end - search.length, end) === search;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.ends-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.6 String.prototype.fixed()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fixed', function (createHTML) {\n  return function fixed() {\n    return createHTML(this, 'tt', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.7 String.prototype.fontcolor(color)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fontcolor', function (createHTML) {\n  return function fontcolor(color) {\n    return createHTML(this, 'font', 'color', color);\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.fontcolor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.8 String.prototype.fontsize(size)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fontsize', function (createHTML) {\n  return function fontsize(size) {\n    return createHTML(this, 'font', 'size', size);\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.fontsize.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar fromCharCode = String.fromCharCode;\nvar $fromCodePoint = String.fromCodePoint;\n\n// length should be 1, old FF problem\n$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {\n  // 21.1.2.2 String.fromCodePoint(...codePoints)\n  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars\n    var res = [];\n    var aLen = arguments.length;\n    var i = 0;\n    var code;\n    while (aLen > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');\n      res.push(code < 0x10000\n        ? fromCharCode(code)\n        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)\n      );\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.from-code-point.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 21.1.3.7 String.prototype.includes(searchString, position = 0)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar INCLUDES = 'includes';\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(INCLUDES), 'String', {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~context(this, searchString, INCLUDES)\n      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.9 String.prototype.italics()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('italics', function (createHTML) {\n  return function italics() {\n    return createHTML(this, 'i', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.italics.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.10 String.prototype.link(url)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('link', function (createHTML) {\n  return function link(url) {\n    return createHTML(this, 'a', 'href', url);\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.link.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\n$export($export.S, 'String', {\n  // 21.1.2.4 String.raw(callSite, ...substitutions)\n  raw: function raw(callSite) {\n    var tpl = toIObject(callSite.raw);\n    var len = toLength(tpl.length);\n    var aLen = arguments.length;\n    var res = [];\n    var i = 0;\n    while (len > i) {\n      res.push(String(tpl[i++]));\n      if (i < aLen) res.push(String(arguments[i]));\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.raw.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'String', {\n  // 21.1.3.13 String.prototype.repeat(count)\n  repeat: __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\")\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.11 String.prototype.small()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('small', function (createHTML) {\n  return function small() {\n    return createHTML(this, 'small', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.small.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 21.1.3.18 String.prototype.startsWith(searchString [, position ])\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar STARTS_WITH = 'startsWith';\nvar $startsWith = ''[STARTS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(STARTS_WITH), 'String', {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = context(this, searchString, STARTS_WITH);\n    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return $startsWith\n      ? $startsWith.call(that, search, index)\n      : that.slice(index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.12 String.prototype.strike()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('strike', function (createHTML) {\n  return function strike() {\n    return createHTML(this, 'strike', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.strike.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.13 String.prototype.sub()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('sub', function (createHTML) {\n  return function sub() {\n    return createHTML(this, 'sub', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.sub.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.14 String.prototype.sup()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('sup', function (createHTML) {\n  return function sup() {\n    return createHTML(this, 'sup', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.sup.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 21.1.3.25 String.prototype.trim()\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trim', function ($trim) {\n  return function trim() {\n    return $trim(this, 3);\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.string.trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $GOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  $GOPS.f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\nvar FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });\n\n$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return $GOPS.f(toObject(it));\n  }\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\nvar buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar ArrayBuffer = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").ArrayBuffer;\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar $ArrayBuffer = buffer.ArrayBuffer;\nvar $DataView = buffer.DataView;\nvar $isView = $typed.ABV && ArrayBuffer.isView;\nvar $slice = $ArrayBuffer.prototype.slice;\nvar VIEW = $typed.VIEW;\nvar ARRAY_BUFFER = 'ArrayBuffer';\n\n$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });\n\n$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {\n  // 24.1.3.1 ArrayBuffer.isView(arg)\n  isView: function isView(it) {\n    return $isView && $isView(it) || isObject(it) && VIEW in it;\n  }\n});\n\n$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;\n}), ARRAY_BUFFER, {\n  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)\n  slice: function slice(start, end) {\n    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix\n    var len = anObject(this).byteLength;\n    var first = toAbsoluteIndex(start, len);\n    var fin = toAbsoluteIndex(end === undefined ? len : end, len);\n    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));\n    var viewS = new $DataView(this);\n    var viewT = new $DataView(result);\n    var index = 0;\n    while (first < fin) {\n      viewT.setUint8(index++, viewS.getUint8(first++));\n    } return result;\n  }\n});\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(ARRAY_BUFFER);\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.typed.array-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\").ABV, {\n  DataView: __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\").DataView\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.typed.data-view.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Float32', 4, function (init) {\n  return function Float32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.typed.float32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Float64', 8, function (init) {\n  return function Float64Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.typed.float64-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int16', 2, function (init) {\n  return function Int16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.typed.int16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int32', 4, function (init) {\n  return function Int32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.typed.int32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int8', 1, function (init) {\n  return function Int8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.typed.int8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint16', 2, function (init) {\n  return function Uint16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.typed.uint16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint32', 4, function (init) {\n  return function Uint32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.typed.uint32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.typed.uint8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8ClampedArray(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n}, true);\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar each = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\");\nvar assign = __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/modules/_object-assign.js\");\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/core-js/modules/_collection-weak.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;\nvar WEAK_MAP = 'WeakMap';\nvar getWeak = meta.getWeak;\nvar isExtensible = Object.isExtensible;\nvar uncaughtFrozenStore = weak.ufstore;\nvar InternalMap;\n\nvar wrapper = function (get) {\n  return function WeakMap() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n};\n\nvar methods = {\n  // 23.3.3.3 WeakMap.prototype.get(key)\n  get: function get(key) {\n    if (isObject(key)) {\n      var data = getWeak(key);\n      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);\n      return data ? data[this._i] : undefined;\n    }\n  },\n  // 23.3.3.5 WeakMap.prototype.set(key, value)\n  set: function set(key, value) {\n    return weak.def(validate(this, WEAK_MAP), key, value);\n  }\n};\n\n// 23.3 WeakMap Objects\nvar $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(WEAK_MAP, wrapper, methods, weak, true, true);\n\n// IE11 WeakMap frozen keys fix\nif (NATIVE_WEAK_MAP && IS_IE11) {\n  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);\n  assign(InternalMap.prototype, methods);\n  meta.NEED = true;\n  each(['delete', 'has', 'get', 'set'], function (key) {\n    var proto = $WeakMap.prototype;\n    var method = proto[key];\n    redefine(proto, key, function (a, b) {\n      // store frozen objects on internal weakmap shim\n      if (isObject(a) && !isExtensible(a)) {\n        if (!this._f) this._f = new InternalMap();\n        var result = this._f[key](a, b);\n        return key == 'set' ? this : result;\n      // store all the rest on native weakmap\n      } return method.call(this, a, b);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/core-js/modules/_collection-weak.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar WEAK_SET = 'WeakSet';\n\n// 23.4 WeakSet Objects\n__webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(WEAK_SET, function (get) {\n  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.4.3.1 WeakSet.prototype.add(value)\n  add: function add(value) {\n    return weak.def(validate(this, WEAK_SET), value, true);\n  }\n}, weak, false, true);\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es6.weak-set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./node_modules/core-js/modules/_flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatMap: function flatMap(callbackfn /* , thisArg */) {\n    var O = toObject(this);\n    var sourceLen, A;\n    aFunction(callbackfn);\n    sourceLen = toLength(O.length);\n    A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('flatMap');\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es7.array.flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://github.com/tc39/Array.prototype.includes\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $includes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(true);\n\n$export($export.P, 'Array', {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('includes');\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es7.array.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $entries = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/core-js/modules/_object-to-array.js\")(true);\n\n$export($export.S, 'Object', {\n  entries: function entries(it) {\n    return $entries(it);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es7.object.entries.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-object-getownpropertydescriptors\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar ownKeys = __webpack_require__(/*! ./_own-keys */ \"./node_modules/core-js/modules/_own-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\n\n$export($export.S, 'Object', {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIObject(object);\n    var getDesc = gOPD.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var i = 0;\n    var key, desc;\n    while (keys.length > i) {\n      desc = getDesc(O, key = keys[i++]);\n      if (desc !== undefined) createProperty(result, key, desc);\n    }\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $values = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/core-js/modules/_object-to-array.js\")(false);\n\n$export($export.S, 'Object', {\n  values: function values(it) {\n    return $values(it);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es7.object.values.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es7.string.pad-end.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padStart: function padStart(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);\n  }\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es7.string.pad-start.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trimLeft', function ($trim) {\n  return function trimLeft() {\n    return $trim(this, 1);\n  };\n}, 'trimStart');\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es7.string.trim-left.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trimRight', function ($trim) {\n  return function trimRight() {\n    return $trim(this, 2);\n  };\n}, 'trimEnd');\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es7.string.trim-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $iterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);\n  }\n}\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\");\n$export($export.G + $export.B, {\n  setImmediate: $task.set,\n  clearImmediate: $task.clear\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/web.immediate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// ie9- setTimeout & setInterval additional parameters fix\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\nvar slice = [].slice;\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\nvar wrap = function (set) {\n  return function (fn, time /* , ...args */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : false;\n    return set(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func\n      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);\n    } : fn, time);\n  };\n};\n$export($export.G + $export.B + $export.F * MSIE, {\n  setTimeout: wrap(global.setTimeout),\n  setInterval: wrap(global.setInterval)\n});\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/modules/web.timers.js?");

/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../modules/web.timers */ \"./node_modules/core-js/modules/web.timers.js\");\n__webpack_require__(/*! ../modules/web.immediate */ \"./node_modules/core-js/modules/web.immediate.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/modules/_core.js\");\n\n\n//# sourceURL=webpack://presentation/./node_modules/core-js/web/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://presentation/./node_modules/normalize.css/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_styleSlide1_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!./node_modules/css-loader/dist/cjs.js!./styles/styleSlide1.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/styleSlide1.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_styleSlide2_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!./node_modules/css-loader/dist/cjs.js!./styles/styleSlide2.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/styleSlide2.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_styleSlide3_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!./node_modules/css-loader/dist/cjs.js!./styles/styleSlide3.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/styleSlide3.css\");\n// Imports\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_styleSlide1_css__WEBPACK_IMPORTED_MODULE_2__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_styleSlide2_css__WEBPACK_IMPORTED_MODULE_3__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_styleSlide3_css__WEBPACK_IMPORTED_MODULE_4__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"section {\\n  margin: 0;\\n  padding: 1px;\\n  height: auto;\\n}\\n\\n.slide-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  width: 100%;\\n  min-width: 100%;\\n  height: 100vh;\\n  min-height: 100vh;\\n  border: 1px solid red;\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  /* background-color: cyan; */\\n}\\n\\n.slide-title {\\n  width: auto;\\n  height: 100px;\\n  border: 1px solid red;\\n  padding: 0;\\n  margin: 1px;\\n}\\n\\n.slide-body {\\n  width: auto;\\n  height: 100%;\\n  border: 1px solid red;\\n  padding: 0;\\n  margin: 1px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n\\n.slide-footer {\\n  width: auto;\\n  height: 100px;\\n  border: 1px solid red;\\n  padding: 0;\\n  margin: 1px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://presentation/./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/styleSlide1.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/styleSlide1.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.slide1-body-top {\\n  width: auto;\\n  height: 100px;\\n  border: 1px solid forestgreen;\\n  padding: 0;\\n  margin: 1px;\\n  text-align: center;\\n  font-size: 20px;\\n}\\n\\n.slide1-body-middle {\\n  box-sizing: border-box;\\n  width: auto;\\n  height: 100%;\\n  border: 1px solid forestgreen;\\n  padding: 0;\\n  padding-top: 50px;\\n  margin: 1px;\\n}\\n\\n.slide1-body-middle>span:nth-child(3) {\\n  font-size: 60px;\\n}\\n\\n.slide1-body-footer {\\n  width: auto;\\n  height: 100px;\\n  border: 1px solid forestgreen;\\n  padding: 0;\\n  margin: 1px;\\n  text-align: right;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://presentation/./styles/styleSlide1.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/styleSlide2.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/styleSlide2.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.slide2-body-top {\\n  width: auto;\\n  height: 100px;\\n  border: 1px solid forestgreen;\\n  padding: 0;\\n  margin: 1px;\\n  text-align: left;\\n}\\n\\n.slide2-body-middle {\\n  box-sizing: border-box;\\n  width: auto;\\n  height: 50%;\\n  border: 1px solid forestgreen;\\n  padding: 0;\\n  padding-top: 50px;\\n  margin: 1px;\\n  text-align: left;\\n}\\n\\n.slide2-body-footer {\\n  width: auto;\\n  height: 100px;\\n  border: 1px solid forestgreen;\\n  padding: 0;\\n  margin: 1px;\\n  text-align: left;\\n}\\n\\n.slide2-body-footer-footer {\\n  width: auto;\\n  height: 50%;\\n  border: 1px solid forestgreen;\\n  padding: 0;\\n  margin: 1px;\\n  text-align: left;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://presentation/./styles/styleSlide2.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/styleSlide3.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/styleSlide3.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.slide3-body-top {\\n  width: auto;\\n  height: 100px;\\n  border: 1px solid forestgreen;\\n  padding: 0;\\n  margin: 1px;\\n  text-align: left;\\n}\\n\\n.slide3-body-middle {\\n  box-sizing: border-box;\\n  width: auto;\\n  height: 50%;\\n  border: 1px solid forestgreen;\\n  padding: 0;\\n  padding-top: 50px;\\n  margin: 1px;\\n  text-align: left;\\n}\\n\\n.slide3-body-footer {\\n  width: auto;\\n  height: 100px;\\n  border: 1px solid forestgreen;\\n  padding: 0;\\n  margin: 1px;\\n  text-align: left;\\n}\\n\\n.slide3-body-footer-footer {\\n  width: auto;\\n  height: 50%;\\n  border: 1px solid forestgreen;\\n  padding: 0;\\n  margin: 1px;\\n  text-align: left;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://presentation/./styles/styleSlide3.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://presentation/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n    return obj[key];\n  }\n  try {\n    // IE 8 has a broken Object.defineProperty that only works on DOM objects.\n    define({}, \"\");\n  } catch (err) {\n    define = function(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunction.displayName = define(\n    GeneratorFunctionPrototype,\n    toStringTagSymbol,\n    \"GeneratorFunction\"\n  );\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      define(prototype, method, function(arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      define(genFun, toStringTagSymbol, \"GeneratorFunction\");\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  define(Gp, toStringTagSymbol, \"Generator\");\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : 0\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack://presentation/./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/reveal.js/dist/reveal.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/reveal.js/dist/reveal.esm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/*!\n* reveal.js 4.0.2\n* https://revealjs.com\n* MIT licensed\n*\n* Copyright (C) 2020 Hakim El Hattab, https://hakim.se\n*/\nvar e=\"undefined\"!=typeof globalThis?globalThis:\"undefined\"!=typeof window?window:\"undefined\"!=typeof __webpack_require__.g?__webpack_require__.g:\"undefined\"!=typeof self?self:{};function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,\"default\")?e.default:e}function i(e,t,i){return e(i={path:t,exports:{},require:function(e,t){return function(){throw new Error(\"Dynamic requires are not currently supported by @rollup/plugin-commonjs\")}(null==t&&i.path)}},i.exports),i.exports}var n,a=function(e){return e&&e.Math==Math&&e},s=a(\"object\"==typeof globalThis&&globalThis)||a(\"object\"==typeof window&&window)||a(\"object\"==typeof self&&self)||a(\"object\"==typeof e&&e)||Function(\"return this\")(),r={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},o=function(e){try{return!!e()}catch(e){return!0}},l={}.toString,d=function(e){return l.call(e).slice(8,-1)},c=\"\".split,u=o((function(){return!Object(\"z\").propertyIsEnumerable(0)}))?function(e){return\"String\"==d(e)?c.call(e,\"\"):Object(e)}:Object,h=function(e){if(null==e)throw TypeError(\"Can't call method on \"+e);return e},g=function(e){return u(h(e))},v=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),p=function(e){return\"object\"==typeof e?null!==e:\"function\"==typeof e},f=s.document,m=p(f)&&p(f.createElement),b=function(e){return m?f.createElement(e):{}},y=!v&&!o((function(){return 7!=Object.defineProperty(b(\"div\"),\"a\",{get:function(){return 7}}).a})),w=function(e){if(!p(e))throw TypeError(String(e)+\" is not an object\");return e},S=function(e,t){if(!p(e))return e;var i,n;if(t&&\"function\"==typeof(i=e.toString)&&!p(n=i.call(e)))return n;if(\"function\"==typeof(i=e.valueOf)&&!p(n=i.call(e)))return n;if(!t&&\"function\"==typeof(i=e.toString)&&!p(n=i.call(e)))return n;throw TypeError(\"Can't convert object to primitive value\")},E=Object.defineProperty,R={f:v?E:function(e,t,i){if(w(e),t=S(t,!0),w(i),y)try{return E(e,t,i)}catch(e){}if(\"get\"in i||\"set\"in i)throw TypeError(\"Accessors not supported\");return\"value\"in i&&(e[t]=i.value),e}},A=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},k=v?function(e,t,i){return R.f(e,t,A(1,i))}:function(e,t,i){return e[t]=i,e},L=function(e,t){try{k(s,e,t)}catch(i){s[e]=t}return t},x=s[\"__core-js_shared__\"]||L(\"__core-js_shared__\",{}),C=i((function(e){(e.exports=function(e,t){return x[e]||(x[e]=void 0!==t?t:{})})(\"versions\",[]).push({version:\"3.6.5\",mode:\"global\",copyright:\"© 2020 Denis Pushkarev (zloirock.ru)\"})})),P={}.hasOwnProperty,N=function(e,t){return P.call(e,t)},M=0,I=Math.random(),T=function(e){return\"Symbol(\"+String(void 0===e?\"\":e)+\")_\"+(++M+I).toString(36)},D=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),O=D&&!Symbol.sham&&\"symbol\"==typeof Symbol.iterator,z=C(\"wks\"),H=s.Symbol,B=O?H:H&&H.withoutSetter||T,U=function(e){return N(z,e)||(D&&N(H,e)?z[e]=H[e]:z[e]=B(\"Symbol.\"+e)),z[e]},j=Math.ceil,F=Math.floor,q=function(e){return isNaN(e=+e)?0:(e>0?F:j)(e)},W=Math.min,_=function(e){return e>0?W(q(e),9007199254740991):0},V=Math.max,K=Math.min,X=function(e){return function(t,i,n){var a,s=g(t),r=_(s.length),o=function(e,t){var i=q(e);return i<0?V(i+t,0):K(i,t)}(n,r);if(e&&i!=i){for(;r>o;)if((a=s[o++])!=a)return!0}else for(;r>o;o++)if((e||o in s)&&s[o]===i)return e||o||0;return!e&&-1}},$={includes:X(!0),indexOf:X(!1)},Y={},G=$.indexOf,J=function(e,t){var i,n=g(e),a=0,s=[];for(i in n)!N(Y,i)&&N(n,i)&&s.push(i);for(;t.length>a;)N(n,i=t[a++])&&(~G(s,i)||s.push(i));return s},Q=[\"constructor\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"toLocaleString\",\"toString\",\"valueOf\"],Z=Object.keys||function(e){return J(e,Q)},ee=v?Object.defineProperties:function(e,t){w(e);for(var i,n=Z(t),a=n.length,s=0;a>s;)R.f(e,i=n[s++],t[i]);return e},te=s,ie=function(e){return\"function\"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?ie(te[e])||ie(s[e]):te[e]&&te[e][t]||s[e]&&s[e][t]},ae=ne(\"document\",\"documentElement\"),se=C(\"keys\"),re=function(e){return se[e]||(se[e]=T(e))},oe=re(\"IE_PROTO\"),le=function(){},de=function(e){return\"<script>\"+e+\"<\\/script>\"},ce=function(){try{n=document.domain&&new ActiveXObject(\"htmlfile\")}catch(e){}var e,t;ce=n?function(e){e.write(de(\"\")),e.close();var t=e.parentWindow.Object;return e=null,t}(n):((t=b(\"iframe\")).style.display=\"none\",ae.appendChild(t),t.src=String(\"javascript:\"),(e=t.contentWindow.document).open(),e.write(de(\"document.F=Object\")),e.close(),e.F);for(var i=Q.length;i--;)delete ce.prototype[Q[i]];return ce()};Y[oe]=!0;var ue=Object.create||function(e,t){var i;return null!==e?(le.prototype=w(e),i=new le,le.prototype=null,i[oe]=e):i=ce(),void 0===t?i:ee(i,t)},he=U(\"unscopables\"),ge=Array.prototype;null==ge[he]&&R.f(ge,he,{configurable:!0,value:ue(null)});var ve=function(e){ge[he][e]=!0},pe=Function.toString;\"function\"!=typeof x.inspectSource&&(x.inspectSource=function(e){return pe.call(e)});var fe,me,be,ye=x.inspectSource,we=s.WeakMap,Se=\"function\"==typeof we&&/native code/.test(ye(we)),Ee=s.WeakMap;if(Se){var Re=new Ee,Ae=Re.get,ke=Re.has,Le=Re.set;fe=function(e,t){return Le.call(Re,e,t),t},me=function(e){return Ae.call(Re,e)||{}},be=function(e){return ke.call(Re,e)}}else{var xe=re(\"state\");Y[xe]=!0,fe=function(e,t){return k(e,xe,t),t},me=function(e){return N(e,xe)?e[xe]:{}},be=function(e){return N(e,xe)}}var Ce,Pe,Ne,Me={set:fe,get:me,has:be,enforce:function(e){return be(e)?me(e):fe(e,{})},getterFor:function(e){return function(t){var i;if(!p(t)||(i=me(t)).type!==e)throw TypeError(\"Incompatible receiver, \"+e+\" required\");return i}}},Ie={}.propertyIsEnumerable,Te=Object.getOwnPropertyDescriptor,De={f:Te&&!Ie.call({1:2},1)?function(e){var t=Te(this,e);return!!t&&t.enumerable}:Ie},Oe=Object.getOwnPropertyDescriptor,ze={f:v?Oe:function(e,t){if(e=g(e),t=S(t,!0),y)try{return Oe(e,t)}catch(e){}if(N(e,t))return A(!De.f.call(e,t),e[t])}},He=i((function(e){var t=Me.get,i=Me.enforce,n=String(String).split(\"String\");(e.exports=function(e,t,a,r){var o=!!r&&!!r.unsafe,l=!!r&&!!r.enumerable,d=!!r&&!!r.noTargetGet;\"function\"==typeof a&&(\"string\"!=typeof t||N(a,\"name\")||k(a,\"name\",t),i(a).source=n.join(\"string\"==typeof t?t:\"\")),e!==s?(o?!d&&e[t]&&(l=!0):delete e[t],l?e[t]=a:k(e,t,a)):l?e[t]=a:L(t,a)})(Function.prototype,\"toString\",(function(){return\"function\"==typeof this&&t(this).source||ye(this)}))})),Be=Q.concat(\"length\",\"prototype\"),Ue={f:Object.getOwnPropertyNames||function(e){return J(e,Be)}},je={f:Object.getOwnPropertySymbols},Fe=ne(\"Reflect\",\"ownKeys\")||function(e){var t=Ue.f(w(e)),i=je.f;return i?t.concat(i(e)):t},qe=function(e,t){for(var i=Fe(t),n=R.f,a=ze.f,s=0;s<i.length;s++){var r=i[s];N(e,r)||n(e,r,a(t,r))}},We=/#|\\.prototype\\./,_e=function(e,t){var i=Ke[Ve(e)];return i==$e||i!=Xe&&(\"function\"==typeof t?o(t):!!t)},Ve=_e.normalize=function(e){return String(e).replace(We,\".\").toLowerCase()},Ke=_e.data={},Xe=_e.NATIVE=\"N\",$e=_e.POLYFILL=\"P\",Ye=_e,Ge=ze.f,Je=function(e,t){var i,n,a,r,o,l=e.target,d=e.global,c=e.stat;if(i=d?s:c?s[l]||L(l,{}):(s[l]||{}).prototype)for(n in t){if(r=t[n],a=e.noTargetGet?(o=Ge(i,n))&&o.value:i[n],!Ye(d?n:l+(c?\".\":\"#\")+n,e.forced)&&void 0!==a){if(typeof r==typeof a)continue;qe(r,a)}(e.sham||a&&a.sham)&&k(r,\"sham\",!0),He(i,n,r,e)}},Qe=function(e){return Object(h(e))},Ze=!o((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})),et=re(\"IE_PROTO\"),tt=Object.prototype,it=Ze?Object.getPrototypeOf:function(e){return e=Qe(e),N(e,et)?e[et]:\"function\"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?tt:null},nt=U(\"iterator\"),at=!1;[].keys&&(\"next\"in(Ne=[].keys())?(Pe=it(it(Ne)))!==Object.prototype&&(Ce=Pe):at=!0),null==Ce&&(Ce={}),N(Ce,nt)||k(Ce,nt,(function(){return this}));var st={IteratorPrototype:Ce,BUGGY_SAFARI_ITERATORS:at},rt=R.f,ot=U(\"toStringTag\"),lt=function(e,t,i){e&&!N(e=i?e:e.prototype,ot)&&rt(e,ot,{configurable:!0,value:t})},dt=st.IteratorPrototype,ct=Object.setPrototypeOf||(\"__proto__\"in{}?function(){var e,t=!1,i={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,\"__proto__\").set).call(i,[]),t=i instanceof Array}catch(e){}return function(i,n){return w(i),function(e){if(!p(e)&&null!==e)throw TypeError(\"Can't set \"+String(e)+\" as a prototype\")}(n),t?e.call(i,n):i.__proto__=n,i}}():void 0),ut=st.IteratorPrototype,ht=st.BUGGY_SAFARI_ITERATORS,gt=U(\"iterator\"),vt=function(){return this},pt=Me.set,ft=Me.getterFor(\"Array Iterator\"),mt=function(e,t,i,n,a,s,r){!function(e,t,i){var n=t+\" Iterator\";e.prototype=ue(dt,{next:A(1,i)}),lt(e,n,!1)}(i,t,n);var o,l,d,c=function(e){if(e===a&&p)return p;if(!ht&&e in g)return g[e];switch(e){case\"keys\":case\"values\":case\"entries\":return function(){return new i(this,e)}}return function(){return new i(this)}},u=t+\" Iterator\",h=!1,g=e.prototype,v=g[gt]||g[\"@@iterator\"]||a&&g[a],p=!ht&&v||c(a),f=\"Array\"==t&&g.entries||v;if(f&&(o=it(f.call(new e)),ut!==Object.prototype&&o.next&&(it(o)!==ut&&(ct?ct(o,ut):\"function\"!=typeof o[gt]&&k(o,gt,vt)),lt(o,u,!0))),\"values\"==a&&v&&\"values\"!==v.name&&(h=!0,p=function(){return v.call(this)}),g[gt]!==p&&k(g,gt,p),a)if(l={values:c(\"values\"),keys:s?p:c(\"keys\"),entries:c(\"entries\")},r)for(d in l)(ht||h||!(d in g))&&He(g,d,l[d]);else Je({target:t,proto:!0,forced:ht||h},l);return l}(Array,\"Array\",(function(e,t){pt(this,{type:\"Array Iterator\",target:g(e),index:0,kind:t})}),(function(){var e=ft(this),t=e.target,i=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):\"keys\"==i?{value:n,done:!1}:\"values\"==i?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),\"values\");ve(\"keys\"),ve(\"values\"),ve(\"entries\");var bt=U(\"iterator\"),yt=U(\"toStringTag\"),wt=mt.values;for(var St in r){var Et=s[St],Rt=Et&&Et.prototype;if(Rt){if(Rt[bt]!==wt)try{k(Rt,bt,wt)}catch(e){Rt[bt]=wt}if(Rt[yt]||k(Rt,yt,St),r[St])for(var At in mt)if(Rt[At]!==mt[At])try{k(Rt,At,mt[At])}catch(e){Rt[At]=mt[At]}}}const kt=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener/,Lt=/fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;var xt=function(){var e=w(this),t=\"\";return e.global&&(t+=\"g\"),e.ignoreCase&&(t+=\"i\"),e.multiline&&(t+=\"m\"),e.dotAll&&(t+=\"s\"),e.unicode&&(t+=\"u\"),e.sticky&&(t+=\"y\"),t};function Ct(e,t){return RegExp(e,t)}var Pt,Nt,Mt={UNSUPPORTED_Y:o((function(){var e=Ct(\"a\",\"y\");return e.lastIndex=2,null!=e.exec(\"abcd\")})),BROKEN_CARET:o((function(){var e=Ct(\"^r\",\"gy\");return e.lastIndex=2,null!=e.exec(\"str\")}))},It=RegExp.prototype.exec,Tt=String.prototype.replace,Dt=It,Ot=(Pt=/a/,Nt=/b*/g,It.call(Pt,\"a\"),It.call(Nt,\"a\"),0!==Pt.lastIndex||0!==Nt.lastIndex),zt=Mt.UNSUPPORTED_Y||Mt.BROKEN_CARET,Ht=void 0!==/()??/.exec(\"\")[1];(Ot||Ht||zt)&&(Dt=function(e){var t,i,n,a,s=this,r=zt&&s.sticky,o=xt.call(s),l=s.source,d=0,c=e;return r&&(-1===(o=o.replace(\"y\",\"\")).indexOf(\"g\")&&(o+=\"g\"),c=String(e).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&\"\\n\"!==e[s.lastIndex-1])&&(l=\"(?: \"+l+\")\",c=\" \"+c,d++),i=new RegExp(\"^(?:\"+l+\")\",o)),Ht&&(i=new RegExp(\"^\"+l+\"$(?!\\\\s)\",o)),Ot&&(t=s.lastIndex),n=It.call(r?i:s,c),r?n?(n.input=n.input.slice(d),n[0]=n[0].slice(d),n.index=s.lastIndex,s.lastIndex+=n[0].length):s.lastIndex=0:Ot&&n&&(s.lastIndex=s.global?n.index+n[0].length:t),Ht&&n&&n.length>1&&Tt.call(n[0],i,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(n[a]=void 0)})),n});var Bt=Dt;Je({target:\"RegExp\",proto:!0,forced:/./.exec!==Bt},{exec:Bt});var Ut=U(\"species\"),jt=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:\"7\"},e},\"7\"!==\"\".replace(e,\"$<a>\")})),Ft=\"$0\"===\"a\".replace(/./,\"$0\"),qt=U(\"replace\"),Wt=!!/./[qt]&&\"\"===/./[qt](\"a\",\"$0\"),_t=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var i=\"ab\".split(e);return 2!==i.length||\"a\"!==i[0]||\"b\"!==i[1]})),Vt=function(e){return function(t,i){var n,a,s=String(h(t)),r=q(i),o=s.length;return r<0||r>=o?e?\"\":void 0:(n=s.charCodeAt(r))<55296||n>56319||r+1===o||(a=s.charCodeAt(r+1))<56320||a>57343?e?s.charAt(r):n:e?s.slice(r,r+2):a-56320+(n-55296<<10)+65536}},Kt={codeAt:Vt(!1),charAt:Vt(!0)}.charAt,Xt=function(e,t,i){return t+(i?Kt(e,t).length:1)},$t=function(e,t){var i=e.exec;if(\"function\"==typeof i){var n=i.call(e,t);if(\"object\"!=typeof n)throw TypeError(\"RegExp exec method returned something other than an Object or null\");return n}if(\"RegExp\"!==d(e))throw TypeError(\"RegExp#exec called on incompatible receiver\");return Bt.call(e,t)},Yt=Math.max,Gt=Math.min,Jt=Math.floor,Qt=/\\$([$&'`]|\\d\\d?|<[^>]*>)/g,Zt=/\\$([$&'`]|\\d\\d?)/g;!function(e,t,i,n){var a=U(e),s=!o((function(){var t={};return t[a]=function(){return 7},7!=\"\"[e](t)})),r=s&&!o((function(){var t=!1,i=/a/;return\"split\"===e&&((i={}).constructor={},i.constructor[Ut]=function(){return i},i.flags=\"\",i[a]=/./[a]),i.exec=function(){return t=!0,null},i[a](\"\"),!t}));if(!s||!r||\"replace\"===e&&(!jt||!Ft||Wt)||\"split\"===e&&!_t){var l=/./[a],d=i(a,\"\"[e],(function(e,t,i,n,a){return t.exec===Bt?s&&!a?{done:!0,value:l.call(t,i,n)}:{done:!0,value:e.call(i,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:Ft,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Wt}),c=d[0],u=d[1];He(String.prototype,e,c),He(RegExp.prototype,a,2==t?function(e,t){return u.call(e,this,t)}:function(e){return u.call(e,this)})}n&&k(RegExp.prototype[a],\"sham\",!0)}(\"replace\",2,(function(e,t,i,n){var a=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,s=n.REPLACE_KEEPS_$0,r=a?\"$\":\"$0\";return[function(i,n){var a=h(this),s=null==i?void 0:i[e];return void 0!==s?s.call(i,a,n):t.call(String(a),i,n)},function(e,n){if(!a&&s||\"string\"==typeof n&&-1===n.indexOf(r)){var l=i(t,e,this,n);if(l.done)return l.value}var d=w(e),c=String(this),u=\"function\"==typeof n;u||(n=String(n));var h=d.global;if(h){var g=d.unicode;d.lastIndex=0}for(var v=[];;){var p=$t(d,c);if(null===p)break;if(v.push(p),!h)break;\"\"===String(p[0])&&(d.lastIndex=Xt(c,_(d.lastIndex),g))}for(var f,m=\"\",b=0,y=0;y<v.length;y++){p=v[y];for(var S=String(p[0]),E=Yt(Gt(q(p.index),c.length),0),R=[],A=1;A<p.length;A++)R.push(void 0===(f=p[A])?f:String(f));var k=p.groups;if(u){var L=[S].concat(R,E,c);void 0!==k&&L.push(k);var x=String(n.apply(void 0,L))}else x=o(S,c,E,R,k,n);E>=b&&(m+=c.slice(b,E)+x,b=E+S.length)}return m+c.slice(b)}];function o(e,i,n,a,s,r){var o=n+e.length,l=a.length,d=Zt;return void 0!==s&&(s=Qe(s),d=Qt),t.call(r,d,(function(t,r){var d;switch(r.charAt(0)){case\"$\":return\"$\";case\"&\":return e;case\"`\":return i.slice(0,n);case\"'\":return i.slice(o);case\"<\":d=s[r.slice(1,-1)];break;default:var c=+r;if(0===c)return t;if(c>l){var u=Jt(c/10);return 0===u?t:u<=l?void 0===a[u-1]?r.charAt(1):a[u-1]+r.charAt(1):t}d=a[c-1]}return void 0===d?\"\":d}))}}));const ei=(e,t)=>{for(let i in t)e[i]=t[i];return e},ti=(e,t)=>Array.from(e.querySelectorAll(t)),ii=(e,t,i)=>{i?e.classList.add(t):e.classList.remove(t)},ni=e=>{if(\"string\"==typeof e){if(\"null\"===e)return null;if(\"true\"===e)return!0;if(\"false\"===e)return!1;if(e.match(/^-?[\\d\\.]+$/))return parseFloat(e)}return e},ai=(e,t)=>{e.style.transform=t},si=(e,t)=>{let i=e.matches||e.matchesSelector||e.msMatchesSelector;return!(!i||!i.call(e,t))},ri=(e,t)=>{if(\"function\"==typeof e.closest)return e.closest(t);for(;e;){if(si(e,t))return e;e=e.parentNode}return null},oi=(e,t,i,n=\"\")=>{let a=e.querySelectorAll(\".\"+i);for(let t=0;t<a.length;t++){let i=a[t];if(i.parentNode===e)return i}let s=document.createElement(t);return s.className=i,s.innerHTML=n,e.appendChild(s),s},li=e=>{let t=document.createElement(\"style\");return t.type=\"text/css\",e&&e.length>0&&(t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))),document.head.appendChild(t),t},di=()=>{let e={};location.search.replace(/[A-Z0-9]+?=([\\w\\.%-]*)/gi,t=>{e[t.split(\"=\").shift()]=t.split(\"=\").pop()});for(let t in e){let i=e[t];e[t]=ni(unescape(i))}return void 0!==e.dependencies&&delete e.dependencies,e},ci=(e,t=0)=>{if(e){let i,n=e.style.height;return e.style.height=\"0px\",e.parentNode.style.height=\"auto\",i=t-e.parentNode.offsetHeight,e.style.height=n+\"px\",e.parentNode.style.removeProperty(\"height\"),i}return t},ui=navigator.userAgent,hi=document.createElement(\"div\"),gi=/(iphone|ipod|ipad|android)/gi.test(ui)||\"MacIntel\"===navigator.platform&&navigator.maxTouchPoints>1,vi=/chrome/i.test(ui)&&!/edge/i.test(ui),pi=/android/gi.test(ui),fi=\"zoom\"in hi.style&&!gi&&(vi||/Version\\/[\\d\\.]+.*Safari/.test(ui));var mi=t(i((function(e,t){Object.defineProperty(t,\"__esModule\",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e){if(e){var t=function(e){return[].slice.call(e)},n=0,a=1,s=2,r=3,o=[],l=null,d=\"requestAnimationFrame\"in e?function(){e.cancelAnimationFrame(l),l=e.requestAnimationFrame((function(){return u(o.filter((function(e){return e.dirty&&e.active})))}))}:function(){},c=function(e){return function(){o.forEach((function(t){return t.dirty=e})),d()}},u=function(e){e.filter((function(e){return!e.styleComputed})).forEach((function(e){e.styleComputed=p(e)})),e.filter(f).forEach(m);var t=e.filter(v);t.forEach(g),t.forEach((function(e){m(e),h(e)})),t.forEach(b)},h=function(e){return e.dirty=n},g=function(e){e.availableWidth=e.element.parentNode.clientWidth,e.currentWidth=e.element.scrollWidth,e.previousFontSize=e.currentFontSize,e.currentFontSize=Math.min(Math.max(e.minSize,e.availableWidth/e.currentWidth*e.previousFontSize),e.maxSize),e.whiteSpace=e.multiLine&&e.currentFontSize===e.minSize?\"normal\":\"nowrap\"},v=function(e){return e.dirty!==s||e.dirty===s&&e.element.parentNode.clientWidth!==e.availableWidth},p=function(t){var i=e.getComputedStyle(t.element,null);t.currentFontSize=parseInt(i.getPropertyValue(\"font-size\"),10),t.display=i.getPropertyValue(\"display\"),t.whiteSpace=i.getPropertyValue(\"white-space\")},f=function(e){var t=!1;return!e.preStyleTestCompleted&&(/inline-/.test(e.display)||(t=!0,e.display=\"inline-block\"),\"nowrap\"!==e.whiteSpace&&(t=!0,e.whiteSpace=\"nowrap\"),e.preStyleTestCompleted=!0,t)},m=function(e){e.originalStyle||(e.originalStyle=e.element.getAttribute(\"style\")||\"\"),e.element.style.cssText=e.originalStyle+\";white-space:\"+e.whiteSpace+\";display:\"+e.display+\";font-size:\"+e.currentFontSize+\"px\"},b=function(e){e.element.dispatchEvent(new CustomEvent(\"fit\",{detail:{oldValue:e.previousFontSize,newValue:e.currentFontSize,scaleFactor:e.currentFontSize/e.previousFontSize}}))},y=function(e,t){return function(){e.dirty=t,e.active&&d()}},w=function(e){return function(){o=o.filter((function(t){return t.element!==e.element})),e.observeMutations&&e.observer.disconnect(),e.element.style.cssText=e.originalStyle}},S=function(e){return function(){e.active||(e.active=!0,d())}},E=function(e){return function(){return e.active=!1}},R=function(e){e.observeMutations&&(e.observer=new MutationObserver(y(e,a)),e.observer.observe(e.element,e.observeMutations))},A={minSize:16,maxSize:512,multiLine:!0,observeMutations:\"MutationObserver\"in e&&{subtree:!0,childList:!0,characterData:!0}},k=null,L=function(){e.clearTimeout(k),k=e.setTimeout(c(s),P.observeWindowDelay)},x=[\"resize\",\"orientationchange\"];return Object.defineProperty(P,\"observeWindow\",{set:function(t){var i=(t?\"add\":\"remove\")+\"EventListener\";x.forEach((function(t){e[i](t,L)}))}}),P.observeWindow=!0,P.observeWindowDelay=100,P.fitAll=c(r),P}function C(e,t){var n=i({},A,t),a=e.map((function(e){var t=i({},n,{element:e,active:!0});return function(e){R(e),e.newbie=!0,e.dirty=!0,o.push(e)}(t),{element:e,fit:y(t,r),unfreeze:S(t),freeze:E(t),unsubscribe:w(t)}}));return d(),a}function P(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return\"string\"==typeof e?C(t(document.querySelectorAll(e)),i):C([e],i)[0]}}(\"undefined\"==typeof window?null:window)})));class bi{constructor(e){this.Reveal=e,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(e){let t=this.Reveal.getConfig().preloadIframes;return\"boolean\"!=typeof t&&(t=e.hasAttribute(\"data-preload\")),t}load(e,t={}){e.style.display=this.Reveal.getConfig().display,ti(e,\"img[data-src], video[data-src], audio[data-src], iframe[data-src]\").forEach(e=>{(\"IFRAME\"!==e.tagName||this.shouldPreload(e))&&(e.setAttribute(\"src\",e.getAttribute(\"data-src\")),e.setAttribute(\"data-lazy-loaded\",\"\"),e.removeAttribute(\"data-src\"))}),ti(e,\"video, audio\").forEach(e=>{let t=0;ti(e,\"source[data-src]\").forEach(e=>{e.setAttribute(\"src\",e.getAttribute(\"data-src\")),e.removeAttribute(\"data-src\"),e.setAttribute(\"data-lazy-loaded\",\"\"),t+=1}),gi&&\"VIDEO\"===e.tagName&&e.setAttribute(\"playsinline\",\"\"),t>0&&e.load()});let i=e.slideBackgroundElement;if(i){i.style.display=\"block\";let n=e.slideBackgroundContentElement,a=e.getAttribute(\"data-background-iframe\");if(!1===i.hasAttribute(\"data-loaded\")){i.setAttribute(\"data-loaded\",\"true\");let s=e.getAttribute(\"data-background-image\"),r=e.getAttribute(\"data-background-video\"),o=e.hasAttribute(\"data-background-video-loop\"),l=e.hasAttribute(\"data-background-video-muted\");if(s)n.style.backgroundImage=\"url(\"+encodeURI(s)+\")\";else if(r&&!this.Reveal.isSpeakerNotes()){let e=document.createElement(\"video\");o&&e.setAttribute(\"loop\",\"\"),l&&(e.muted=!0),gi&&(e.muted=!0,e.setAttribute(\"playsinline\",\"\")),r.split(\",\").forEach(t=>{e.innerHTML+='<source src=\"'+t+'\">'}),n.appendChild(e)}else if(a&&!0!==t.excludeIframes){let e=document.createElement(\"iframe\");e.setAttribute(\"allowfullscreen\",\"\"),e.setAttribute(\"mozallowfullscreen\",\"\"),e.setAttribute(\"webkitallowfullscreen\",\"\"),e.setAttribute(\"allow\",\"autoplay\"),e.setAttribute(\"data-src\",a),e.style.width=\"100%\",e.style.height=\"100%\",e.style.maxHeight=\"100%\",e.style.maxWidth=\"100%\",n.appendChild(e)}}let s=n.querySelector(\"iframe[data-src]\");s&&this.shouldPreload(i)&&!/autoplay=(1|true|yes)/gi.test(a)&&s.getAttribute(\"src\")!==a&&s.setAttribute(\"src\",a)}Array.from(e.querySelectorAll(\".r-fit-text:not([data-fitted])\")).forEach(e=>{e.dataset.fitted=\"\",mi(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})})}unload(e){e.style.display=\"none\";let t=this.Reveal.getSlideBackground(e);t&&(t.style.display=\"none\",ti(t,\"iframe[src]\").forEach(e=>{e.removeAttribute(\"src\")})),ti(e,\"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]\").forEach(e=>{e.setAttribute(\"data-src\",e.getAttribute(\"src\")),e.removeAttribute(\"src\")}),ti(e,\"video[data-lazy-loaded] source[src], audio source[src]\").forEach(e=>{e.setAttribute(\"data-src\",e.getAttribute(\"src\")),e.removeAttribute(\"src\")})}formatEmbeddedContent(){let e=(e,t,i)=>{ti(this.Reveal.getSlidesElement(),\"iframe[\"+e+'*=\"'+t+'\"]').forEach(t=>{let n=t.getAttribute(e);n&&-1===n.indexOf(i)&&t.setAttribute(e,n+(/\\?/.test(n)?\"&\":\"?\")+i)})};e(\"src\",\"youtube.com/embed/\",\"enablejsapi=1\"),e(\"data-src\",\"youtube.com/embed/\",\"enablejsapi=1\"),e(\"src\",\"player.vimeo.com/\",\"api=1\"),e(\"data-src\",\"player.vimeo.com/\",\"api=1\")}startEmbeddedContent(e){e&&!this.Reveal.isSpeakerNotes()&&(ti(e,'img[src$=\".gif\"]').forEach(e=>{e.setAttribute(\"src\",e.getAttribute(\"src\"))}),ti(e,\"video, audio\").forEach(e=>{if(ri(e,\".fragment\")&&!ri(e,\".fragment.visible\"))return;let t=this.Reveal.getConfig().autoPlayMedia;if(\"boolean\"!=typeof t&&(t=e.hasAttribute(\"data-autoplay\")||!!ri(e,\".slide-background\")),t&&\"function\"==typeof e.play)if(e.readyState>1)this.startEmbeddedMedia({target:e});else if(gi){let t=e.play();t&&\"function\"==typeof t.catch&&!1===e.controls&&t.catch(()=>{e.controls=!0,e.addEventListener(\"play\",()=>{e.controls=!1})})}else e.removeEventListener(\"loadeddata\",this.startEmbeddedMedia),e.addEventListener(\"loadeddata\",this.startEmbeddedMedia)}),ti(e,\"iframe[src]\").forEach(e=>{ri(e,\".fragment\")&&!ri(e,\".fragment.visible\")||this.startEmbeddedIframe({target:e})}),ti(e,\"iframe[data-src]\").forEach(e=>{ri(e,\".fragment\")&&!ri(e,\".fragment.visible\")||e.getAttribute(\"src\")!==e.getAttribute(\"data-src\")&&(e.removeEventListener(\"load\",this.startEmbeddedIframe),e.addEventListener(\"load\",this.startEmbeddedIframe),e.setAttribute(\"src\",e.getAttribute(\"data-src\")))}))}startEmbeddedMedia(e){let t=!!ri(e.target,\"html\"),i=!!ri(e.target,\".present\");t&&i&&(e.target.currentTime=0,e.target.play()),e.target.removeEventListener(\"loadeddata\",this.startEmbeddedMedia)}startEmbeddedIframe(e){let t=e.target;if(t&&t.contentWindow){let i=!!ri(e.target,\"html\"),n=!!ri(e.target,\".present\");if(i&&n){let e=this.Reveal.getConfig().autoPlayMedia;\"boolean\"!=typeof e&&(e=t.hasAttribute(\"data-autoplay\")||!!ri(t,\".slide-background\")),/youtube\\.com\\/embed\\//.test(t.getAttribute(\"src\"))&&e?t.contentWindow.postMessage('{\"event\":\"command\",\"func\":\"playVideo\",\"args\":\"\"}',\"*\"):/player\\.vimeo\\.com\\//.test(t.getAttribute(\"src\"))&&e?t.contentWindow.postMessage('{\"method\":\"play\"}',\"*\"):t.contentWindow.postMessage(\"slide:start\",\"*\")}}}stopEmbeddedContent(e,t={}){t=ei({unloadIframes:!0},t),e&&e.parentNode&&(ti(e,\"video, audio\").forEach(e=>{e.hasAttribute(\"data-ignore\")||\"function\"!=typeof e.pause||(e.setAttribute(\"data-paused-by-reveal\",\"\"),e.pause())}),ti(e,\"iframe\").forEach(e=>{e.contentWindow&&e.contentWindow.postMessage(\"slide:stop\",\"*\"),e.removeEventListener(\"load\",this.startEmbeddedIframe)}),ti(e,'iframe[src*=\"youtube.com/embed/\"]').forEach(e=>{!e.hasAttribute(\"data-ignore\")&&e.contentWindow&&\"function\"==typeof e.contentWindow.postMessage&&e.contentWindow.postMessage('{\"event\":\"command\",\"func\":\"pauseVideo\",\"args\":\"\"}',\"*\")}),ti(e,'iframe[src*=\"player.vimeo.com/\"]').forEach(e=>{!e.hasAttribute(\"data-ignore\")&&e.contentWindow&&\"function\"==typeof e.contentWindow.postMessage&&e.contentWindow.postMessage('{\"method\":\"pause\"}',\"*\")}),!0===t.unloadIframes&&ti(e,\"iframe[data-src]\").forEach(e=>{e.setAttribute(\"src\",\"about:blank\"),e.removeAttribute(\"src\")}))}}class yi{constructor(e){this.Reveal=e}render(){this.element=document.createElement(\"div\"),this.element.className=\"slide-number\",this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){let i=\"none\";e.slideNumber&&!this.Reveal.isPrintingPDF()&&(\"all\"===e.showSlideNumber||\"speaker\"===e.showSlideNumber&&this.Reveal.isSpeakerNotes())&&(i=\"block\"),this.element.style.display=i}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(e=this.Reveal.getCurrentSlide()){let t,i=this.Reveal.getConfig(),n=\"h.v\";if(\"function\"==typeof i.slideNumber)t=i.slideNumber(e);else{\"string\"==typeof i.slideNumber&&(n=i.slideNumber),/c/.test(n)||1!==this.Reveal.getHorizontalSlides().length||(n=\"c\");let a=e&&\"uncounted\"===e.dataset.visibility?0:1;switch(t=[],n){case\"c\":t.push(this.Reveal.getSlidePastCount(e)+a);break;case\"c/t\":t.push(this.Reveal.getSlidePastCount(e)+a,\"/\",this.Reveal.getTotalSlides());break;default:let i=this.Reveal.getIndices(e);t.push(i.h+a);let s=\"h/v\"===n?\"/\":\".\";this.Reveal.isVerticalSlide(e)&&t.push(s,i.v+1)}}let a=\"#\"+this.Reveal.location.getHash(e);return this.formatNumber(t[0],t[1],t[2],a)}formatNumber(e,t,i,n=\"#\"+this.Reveal.location.getHash()){return\"number\"!=typeof i||isNaN(i)?'<a href=\"'.concat(n,'\">\\n\\t\\t\\t\\t\\t<span class=\"slide-number-a\">').concat(e,\"</span>\\n\\t\\t\\t\\t\\t</a>\"):'<a href=\"'.concat(n,'\">\\n\\t\\t\\t\\t\\t<span class=\"slide-number-a\">').concat(e,'</span>\\n\\t\\t\\t\\t\\t<span class=\"slide-number-delimiter\">').concat(t,'</span>\\n\\t\\t\\t\\t\\t<span class=\"slide-number-b\">').concat(i,\"</span>\\n\\t\\t\\t\\t\\t</a>\")}}const wi=e=>{let t=e.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let i=e.match(/^#([0-9a-f]{6})$/i);if(i&&i[1])return i=i[1],{r:parseInt(i.substr(0,2),16),g:parseInt(i.substr(2,2),16),b:parseInt(i.substr(4,2),16)};let n=e.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i);if(n)return{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)};let a=e.match(/^rgba\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\,\\s*([\\d]+|[\\d]*.[\\d]+)\\s*\\)$/i);return a?{r:parseInt(a[1],10),g:parseInt(a[2],10),b:parseInt(a[3],10),a:parseFloat(a[4])}:null};class Si{constructor(e){this.Reveal=e}render(){this.element=document.createElement(\"div\"),this.element.className=\"backgrounds\",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.Reveal.isPrintingPDF();this.element.innerHTML=\"\",this.element.classList.add(\"no-transition\"),this.Reveal.getHorizontalSlides().forEach(e=>{let t=this.createBackground(e,this.element);ti(e,\"section\").forEach(e=>{this.createBackground(e,t),t.classList.add(\"stack\")})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url(\"'+this.Reveal.getConfig().parallaxBackgroundImage+'\")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add(\"has-parallax-background\")},1)):(this.element.style.backgroundImage=\"\",this.Reveal.getRevealElement().classList.remove(\"has-parallax-background\"))}createBackground(e,t){let i=document.createElement(\"div\");i.className=\"slide-background \"+e.className.replace(/present|past|future/,\"\");let n=document.createElement(\"div\");return n.className=\"slide-background-content\",i.appendChild(n),t.appendChild(i),e.slideBackgroundElement=i,e.slideBackgroundContentElement=n,this.sync(e),i}sync(e){let t=e.slideBackgroundElement,i=e.slideBackgroundContentElement;e.classList.remove(\"has-dark-background\"),e.classList.remove(\"has-light-background\"),t.removeAttribute(\"data-loaded\"),t.removeAttribute(\"data-background-hash\"),t.removeAttribute(\"data-background-size\"),t.removeAttribute(\"data-background-transition\"),t.style.backgroundColor=\"\",i.style.backgroundSize=\"\",i.style.backgroundRepeat=\"\",i.style.backgroundPosition=\"\",i.style.backgroundImage=\"\",i.style.opacity=\"\",i.innerHTML=\"\";let n={background:e.getAttribute(\"data-background\"),backgroundSize:e.getAttribute(\"data-background-size\"),backgroundImage:e.getAttribute(\"data-background-image\"),backgroundVideo:e.getAttribute(\"data-background-video\"),backgroundIframe:e.getAttribute(\"data-background-iframe\"),backgroundColor:e.getAttribute(\"data-background-color\"),backgroundRepeat:e.getAttribute(\"data-background-repeat\"),backgroundPosition:e.getAttribute(\"data-background-position\"),backgroundTransition:e.getAttribute(\"data-background-transition\"),backgroundOpacity:e.getAttribute(\"data-background-opacity\")};n.background&&(/^(http|file|\\/\\/)/gi.test(n.background)||/\\.(svg|png|jpg|jpeg|gif|bmp)([?#\\s]|$)/gi.test(n.background)?e.setAttribute(\"data-background-image\",n.background):t.style.background=n.background),(n.background||n.backgroundColor||n.backgroundImage||n.backgroundVideo||n.backgroundIframe)&&t.setAttribute(\"data-background-hash\",n.background+n.backgroundSize+n.backgroundImage+n.backgroundVideo+n.backgroundIframe+n.backgroundColor+n.backgroundRepeat+n.backgroundPosition+n.backgroundTransition+n.backgroundOpacity),n.backgroundSize&&t.setAttribute(\"data-background-size\",n.backgroundSize),n.backgroundColor&&(t.style.backgroundColor=n.backgroundColor),n.backgroundTransition&&t.setAttribute(\"data-background-transition\",n.backgroundTransition),e.hasAttribute(\"data-preload\")&&t.setAttribute(\"data-preload\",\"\"),n.backgroundSize&&(i.style.backgroundSize=n.backgroundSize),n.backgroundRepeat&&(i.style.backgroundRepeat=n.backgroundRepeat),n.backgroundPosition&&(i.style.backgroundPosition=n.backgroundPosition),n.backgroundOpacity&&(i.style.opacity=n.backgroundOpacity);let a=n.backgroundColor;if(!a){let e=window.getComputedStyle(t);e&&e.backgroundColor&&(a=e.backgroundColor)}if(a){let t=wi(a);t&&0!==t.a&&(\"string\"==typeof(s=a)&&(s=wi(s)),(s?(299*s.r+587*s.g+114*s.b)/1e3:null)<128?e.classList.add(\"has-dark-background\"):e.classList.add(\"has-light-background\"))}var s}update(e=!1){let t=this.Reveal.getCurrentSlide(),i=this.Reveal.getIndices(),n=null,a=this.Reveal.getConfig().rtl?\"future\":\"past\",s=this.Reveal.getConfig().rtl?\"past\":\"future\";if(Array.from(this.element.childNodes).forEach((t,r)=>{t.classList.remove(\"past\",\"present\",\"future\"),r<i.h?t.classList.add(a):r>i.h?t.classList.add(s):(t.classList.add(\"present\"),n=t),(e||r===i.h)&&ti(t,\".slide-background\").forEach((e,t)=>{e.classList.remove(\"past\",\"present\",\"future\"),t<i.v?e.classList.add(\"past\"):t>i.v?e.classList.add(\"future\"):(e.classList.add(\"present\"),r===i.h&&(n=e))})}),this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),n){this.Reveal.slideContent.startEmbeddedContent(n);let e=n.querySelector(\".slide-background-content\");if(e){let t=e.style.backgroundImage||\"\";/\\.gif/i.test(t)&&(e.style.backgroundImage=\"\",window.getComputedStyle(e).opacity,e.style.backgroundImage=t)}let t=this.previousBackground?this.previousBackground.getAttribute(\"data-background-hash\"):null,i=n.getAttribute(\"data-background-hash\");i&&i===t&&n!==this.previousBackground&&this.element.classList.add(\"no-transition\"),this.previousBackground=n}t&&[\"has-light-background\",\"has-dark-background\"].forEach(e=>{t.classList.contains(e)?this.Reveal.getRevealElement().classList.add(e):this.Reveal.getRevealElement().classList.remove(e)},this),setTimeout(()=>{this.element.classList.remove(\"no-transition\")},1)}updateParallax(){let e=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let t,i,n=this.Reveal.getHorizontalSlides(),a=this.Reveal.getVerticalSlides(),s=this.element.style.backgroundSize.split(\" \");1===s.length?t=i=parseInt(s[0],10):(t=parseInt(s[0],10),i=parseInt(s[1],10));let r,o,l=this.element.offsetWidth,d=n.length;r=\"number\"==typeof this.Reveal.getConfig().parallaxBackgroundHorizontal?this.Reveal.getConfig().parallaxBackgroundHorizontal:d>1?(t-l)/(d-1):0,o=r*e.h*-1;let c,u,h=this.element.offsetHeight,g=a.length;c=\"number\"==typeof this.Reveal.getConfig().parallaxBackgroundVertical?this.Reveal.getConfig().parallaxBackgroundVertical:(i-h)/(g-1),u=g>0?c*e.v:0,this.element.style.backgroundPosition=o+\"px \"+-u+\"px\"}}}let Ei=0;class Ri{constructor(e){this.Reveal=e}run(e,t){if(this.reset(),e.hasAttribute(\"data-auto-animate\")&&t.hasAttribute(\"data-auto-animate\")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||li();let i=this.getAutoAnimateOptions(t);e.dataset.autoAnimate=\"pending\",t.dataset.autoAnimate=\"pending\";let n=this.Reveal.getSlides();i.slideDirection=n.indexOf(t)>n.indexOf(e)?\"forward\":\"backward\";let a=this.getAutoAnimatableElements(e,t).map(e=>this.autoAnimateElements(e.from,e.to,e.options||{},i,Ei++));if(\"false\"!==t.dataset.autoAnimateUnmatched&&!0===this.Reveal.getConfig().autoAnimateUnmatched){let e=.8*i.duration,n=.2*i.duration;this.getUnmatchedAutoAnimateElements(t).forEach(e=>{let t=this.getAutoAnimateOptions(e,i),n=\"unmatched\";t.duration===i.duration&&t.delay===i.delay||(n=\"unmatched-\"+Ei++,a.push('[data-auto-animate=\"running\"] [data-auto-animate-target=\"'.concat(n,'\"] { transition: opacity ').concat(t.duration,\"s ease \").concat(t.delay,\"s; }\"))),e.dataset.autoAnimateTarget=n},this),a.push('[data-auto-animate=\"running\"] [data-auto-animate-target=\"unmatched\"] { transition: opacity '.concat(e,\"s ease \").concat(n,\"s; }\"))}this.autoAnimateStyleSheet.innerHTML=a.join(\"\"),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,t.dataset.autoAnimate=\"running\")}),this.Reveal.dispatchEvent({type:\"autoanimate\",data:{fromSlide:e,toSlide:t,sheet:this.autoAnimateStyleSheet}})}}reset(){ti(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=\"\"])').forEach(e=>{e.dataset.autoAnimate=\"\"}),ti(this.Reveal.getRevealElement(),\"[data-auto-animate-target]\").forEach(e=>{delete e.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(e,t,i,n,a){e.dataset.autoAnimateTarget=\"\",t.dataset.autoAnimateTarget=a;let s=this.getAutoAnimateOptions(t,n);void 0!==i.delay&&(s.delay=i.delay),void 0!==i.duration&&(s.duration=i.duration),void 0!==i.easing&&(s.easing=i.easing);let r=this.getAutoAnimatableProperties(\"from\",e,i),o=this.getAutoAnimatableProperties(\"to\",t,i);if(t.classList.contains(\"fragment\")&&(delete o.styles.opacity,e.classList.contains(\"fragment\"))){(e.className.match(Lt)||[\"\"])[0]===(t.className.match(Lt)||[\"\"])[0]&&\"forward\"===n.slideDirection&&t.classList.add(\"visible\",\"disabled\")}if(!1!==i.translate||!1!==i.scale){let e=this.Reveal.getScale(),t={x:(r.x-o.x)/e,y:(r.y-o.y)/e,scaleX:r.width/o.width,scaleY:r.height/o.height};t.x=Math.round(1e3*t.x)/1e3,t.y=Math.round(1e3*t.y)/1e3,t.scaleX=Math.round(1e3*t.scaleX)/1e3,t.scaleX=Math.round(1e3*t.scaleX)/1e3;let n=!1!==i.translate&&(0!==t.x||0!==t.y),a=!1!==i.scale&&(0!==t.scaleX||0!==t.scaleY);if(n||a){let e=[];n&&e.push(\"translate(\".concat(t.x,\"px, \").concat(t.y,\"px)\")),a&&e.push(\"scale(\".concat(t.scaleX,\", \").concat(t.scaleY,\")\")),r.styles.transform=e.join(\" \"),r.styles[\"transform-origin\"]=\"top left\",o.styles.transform=\"none\"}}for(let e in o.styles){const t=o.styles[e],i=r.styles[e];t===i?delete o.styles[e]:(!0===t.explicitValue&&(o.styles[e]=t.value),!0===i.explicitValue&&(r.styles[e]=i.value))}let l=\"\",d=Object.keys(o.styles);if(d.length>0){r.styles.transition=\"none\",o.styles.transition=\"all \".concat(s.duration,\"s \").concat(s.easing,\" \").concat(s.delay,\"s\"),o.styles[\"transition-property\"]=d.join(\", \"),o.styles[\"will-change\"]=d.join(\", \"),l='[data-auto-animate-target=\"'+a+'\"] {'+Object.keys(r.styles).map(e=>e+\": \"+r.styles[e]+\" !important;\").join(\"\")+'}[data-auto-animate=\"running\"] [data-auto-animate-target=\"'+a+'\"] {'+Object.keys(o.styles).map(e=>e+\": \"+o.styles[e]+\" !important;\").join(\"\")+\"}\"}return l}getAutoAnimateOptions(e,t){let i={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(i=ei(i,t),e.parentNode){let t=ri(e.parentNode,\"[data-auto-animate-target]\");t&&(i=this.getAutoAnimateOptions(t,i))}return e.dataset.autoAnimateEasing&&(i.easing=e.dataset.autoAnimateEasing),e.dataset.autoAnimateDuration&&(i.duration=parseFloat(e.dataset.autoAnimateDuration)),e.dataset.autoAnimateDelay&&(i.delay=parseFloat(e.dataset.autoAnimateDelay)),i}getAutoAnimatableProperties(e,t,i){let n=this.Reveal.getConfig(),a={styles:[]};if(!1!==i.translate||!1!==i.scale){let e;if(\"function\"==typeof i.measure)e=i.measure(t);else if(n.center)e=t.getBoundingClientRect();else{let i=this.Reveal.getScale();e={x:t.offsetLeft*i,y:t.offsetTop*i,width:t.offsetWidth*i,height:t.offsetHeight*i}}a.x=e.x,a.y=e.y,a.width=e.width,a.height=e.height}const s=getComputedStyle(t);return(i.styles||n.autoAnimateStyles).forEach(t=>{let i;\"string\"==typeof t&&(t={property:t}),i=void 0!==t.from&&\"from\"===e?{value:t.from,explicitValue:!0}:void 0!==t.to&&\"to\"===e?{value:t.to,explicitValue:!0}:s[t.property],\"\"!==i&&(a.styles[t.property]=i)}),a}getAutoAnimatableElements(e,t){let i=(\"function\"==typeof this.Reveal.getConfig().autoAnimateMatcher?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,e,t),n=[];return i.filter((e,t)=>{if(-1===n.indexOf(e.to))return n.push(e.to),!0})}getAutoAnimatePairs(e,t){let i=[];const n=\"h1, h2, h3, h4, h5, h6, p, li\";return this.findAutoAnimateMatches(i,e,t,\"[data-id]\",e=>e.nodeName+\":::\"+e.getAttribute(\"data-id\")),this.findAutoAnimateMatches(i,e,t,n,e=>e.nodeName+\":::\"+e.innerText),this.findAutoAnimateMatches(i,e,t,\"img, video, iframe\",e=>e.nodeName+\":::\"+(e.getAttribute(\"src\")||e.getAttribute(\"data-src\"))),this.findAutoAnimateMatches(i,e,t,\"pre\",e=>e.nodeName+\":::\"+e.innerText),i.forEach(e=>{si(e.from,n)?e.options={scale:!1}:si(e.from,\"pre\")&&(e.options={scale:!1,styles:[\"width\",\"height\"]},this.findAutoAnimateMatches(i,e.from,e.to,\".hljs .hljs-ln-code\",e=>e.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(i,e.from,e.to,\".hljs .hljs-ln-line[data-line-number]\",e=>e.getAttribute(\"data-line-number\"),{scale:!1,styles:[\"width\"],measure:this.getLocalBoundingBox.bind(this)}))},this),i}getLocalBoundingBox(e){const t=this.Reveal.getScale();return{x:Math.round(e.offsetLeft*t*100)/100,y:Math.round(e.offsetTop*t*100)/100,width:Math.round(e.offsetWidth*t*100)/100,height:Math.round(e.offsetHeight*t*100)/100}}findAutoAnimateMatches(e,t,i,n,a,s){let r={},o={};[].slice.call(t.querySelectorAll(n)).forEach((e,t)=>{const i=a(e);\"string\"==typeof i&&i.length&&(r[i]=r[i]||[],r[i].push(e))}),[].slice.call(i.querySelectorAll(n)).forEach((t,i)=>{const n=a(t);let l;if(o[n]=o[n]||[],o[n].push(t),r[n]){const e=o[n].length-1,t=r[n].length-1;r[n][e]?(l=r[n][e],r[n][e]=null):r[n][t]&&(l=r[n][t],r[n][t]=null)}l&&e.push({from:l,to:t,options:s})})}getUnmatchedAutoAnimateElements(e){return[].slice.call(e.children).reduce((e,t)=>{const i=t.querySelector(\"[data-auto-animate-target]\");return t.hasAttribute(\"data-auto-animate-target\")||i||e.push(t),t.querySelector(\"[data-auto-animate-target]\")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(t))),e},[])}}class Ai{constructor(e){this.Reveal=e}configure(e,t){!1===e.fragments?this.disable():!1===t.fragments&&this.enable()}disable(){ti(this.Reveal.getSlidesElement(),\".fragment\").forEach(e=>{e.classList.add(\"visible\"),e.classList.remove(\"current-fragment\")})}enable(){ti(this.Reveal.getSlidesElement(),\".fragment\").forEach(e=>{e.classList.remove(\"visible\"),e.classList.remove(\"current-fragment\")})}availableRoutes(){let e=this.Reveal.getCurrentSlide();if(e&&this.Reveal.getConfig().fragments){let t=e.querySelectorAll(\".fragment:not(.disabled)\"),i=e.querySelectorAll(\".fragment:not(.disabled):not(.visible)\");return{prev:t.length-i.length>0,next:!!i.length}}return{prev:!1,next:!1}}sort(e,t=!1){e=Array.from(e);let i=[],n=[],a=[];e.forEach(e=>{if(e.hasAttribute(\"data-fragment-index\")){let t=parseInt(e.getAttribute(\"data-fragment-index\"),10);i[t]||(i[t]=[]),i[t].push(e)}else n.push([e])}),i=i.concat(n);let s=0;return i.forEach(e=>{e.forEach(e=>{a.push(e),e.setAttribute(\"data-fragment-index\",s)}),s++}),!0===t?i:a}sortAll(){this.Reveal.getHorizontalSlides().forEach(e=>{let t=ti(e,\"section\");t.forEach((e,t)=>{this.sort(e.querySelectorAll(\".fragment\"))},this),0===t.length&&this.sort(e.querySelectorAll(\".fragment\"))})}update(e,t){let i={shown:[],hidden:[]},n=this.Reveal.getCurrentSlide();if(n&&this.Reveal.getConfig().fragments&&(t=t||this.sort(n.querySelectorAll(\".fragment\"))).length){let a=0;if(\"number\"!=typeof e){let t=this.sort(n.querySelectorAll(\".fragment.visible\")).pop();t&&(e=parseInt(t.getAttribute(\"data-fragment-index\")||0,10))}Array.from(t).forEach((t,n)=>{if(t.hasAttribute(\"data-fragment-index\")&&(n=parseInt(t.getAttribute(\"data-fragment-index\"),10)),a=Math.max(a,n),n<=e){let a=t.classList.contains(\"visible\");t.classList.add(\"visible\"),t.classList.remove(\"current-fragment\"),n===e&&(this.Reveal.announceStatus(this.Reveal.getStatusText(t)),t.classList.add(\"current-fragment\"),this.Reveal.slideContent.startEmbeddedContent(t)),a||(i.shown.push(t),this.Reveal.dispatchEvent({target:t,type:\"visible\",bubbles:!1}))}else{let e=t.classList.contains(\"visible\");t.classList.remove(\"visible\"),t.classList.remove(\"current-fragment\"),e&&(i.hidden.push(t),this.Reveal.dispatchEvent({target:t,type:\"hidden\",bubbles:!1}))}}),e=\"number\"==typeof e?e:-1,e=Math.max(Math.min(e,a),-1),n.setAttribute(\"data-fragment\",e)}return i}sync(e=this.Reveal.getCurrentSlide()){return this.sort(e.querySelectorAll(\".fragment\"))}goto(e,t=0){let i=this.Reveal.getCurrentSlide();if(i&&this.Reveal.getConfig().fragments){let n=this.sort(i.querySelectorAll(\".fragment:not(.disabled)\"));if(n.length){if(\"number\"!=typeof e){let t=this.sort(i.querySelectorAll(\".fragment:not(.disabled).visible\")).pop();e=t?parseInt(t.getAttribute(\"data-fragment-index\")||0,10):-1}e+=t;let a=this.update(e,n);return a.hidden.length&&this.Reveal.dispatchEvent({type:\"fragmenthidden\",data:{fragment:a.hidden[0],fragments:a.hidden}}),a.shown.length&&this.Reveal.dispatchEvent({type:\"fragmentshown\",data:{fragment:a.shown[0],fragments:a.shown}}),this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!a.shown.length&&!a.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}}class ki{constructor(e){this.Reveal=e,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add(\"overview\"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),ti(this.Reveal.getRevealElement(),\".slides section\").forEach(e=>{e.classList.contains(\"stack\")||e.addEventListener(\"click\",this.onSlideClicked,!0)});const e=70,t=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=t.width+e,this.overviewSlideHeight=t.height+e,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const i=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:\"overviewshown\",data:{indexh:i.h,indexv:i.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((e,t)=>{e.setAttribute(\"data-index-h\",t),ai(e,\"translate3d(\"+t*this.overviewSlideWidth+\"px, 0, 0)\"),e.classList.contains(\"stack\")&&ti(e,\"section\").forEach((e,i)=>{e.setAttribute(\"data-index-h\",t),e.setAttribute(\"data-index-v\",i),ai(e,\"translate3d(0, \"+i*this.overviewSlideHeight+\"px, 0)\")})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e,t)=>{ai(e,\"translate3d(\"+t*this.overviewSlideWidth+\"px, 0, 0)\"),ti(e,\".slide-background\").forEach((e,t)=>{ai(e,\"translate3d(0, \"+t*this.overviewSlideHeight+\"px, 0)\")})})}update(){const e=Math.min(window.innerWidth,window.innerHeight),t=Math.max(e/5,150)/e,i=this.Reveal.getIndices();this.Reveal.transformSlides({overview:[\"scale(\"+t+\")\",\"translateX(\"+-i.h*this.overviewSlideWidth+\"px)\",\"translateY(\"+-i.v*this.overviewSlideHeight+\"px)\"].join(\" \")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove(\"overview\"),this.Reveal.getRevealElement().classList.add(\"overview-deactivating\"),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove(\"overview-deactivating\")},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),ti(this.Reveal.getRevealElement(),\".slides section\").forEach(e=>{ai(e,\"\"),e.removeEventListener(\"click\",this.onSlideClicked,!0)}),ti(this.Reveal.getBackgroundsElement(),\".slide-background\").forEach(e=>{ai(e,\"\")}),this.Reveal.transformSlides({overview:\"\"});const e=this.Reveal.getIndices();this.Reveal.slide(e.h,e.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:\"overviewhidden\",data:{indexh:e.h,indexv:e.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(e){\"boolean\"==typeof e?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(e){if(this.isActive()){e.preventDefault();let t=e.target;for(;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains(\"disabled\")&&(this.deactivate(),t.nodeName.match(/section/gi))){let e=parseInt(t.getAttribute(\"data-index-h\"),10),i=parseInt(t.getAttribute(\"data-index-v\"),10);this.Reveal.slide(e,i)}}}}class Li{constructor(e){this.Reveal=e,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.onDocumentKeyPress=this.onDocumentKeyPress.bind(this)}configure(e,t){\"linear\"===e.navigationMode?(this.shortcuts[\"&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J\"]=\"Next slide\",this.shortcuts[\"&#8592;  ,  &#8593;  ,  P  ,  H  ,  K\"]=\"Previous slide\"):(this.shortcuts[\"N  ,  SPACE\"]=\"Next slide\",this.shortcuts.P=\"Previous slide\",this.shortcuts[\"&#8592;  ,  H\"]=\"Navigate left\",this.shortcuts[\"&#8594;  ,  L\"]=\"Navigate right\",this.shortcuts[\"&#8593;  ,  K\"]=\"Navigate up\",this.shortcuts[\"&#8595;  ,  J\"]=\"Navigate down\"),this.shortcuts[\"Home  ,  Shift &#8592;\"]=\"First slide\",this.shortcuts[\"End  ,  Shift &#8594;\"]=\"Last slide\",this.shortcuts[\"B  ,  .\"]=\"Pause\",this.shortcuts.F=\"Fullscreen\",this.shortcuts[\"ESC, O\"]=\"Slide overview\"}bind(){document.addEventListener(\"keydown\",this.onDocumentKeyDown,!1),document.addEventListener(\"keypress\",this.onDocumentKeyPress,!1)}unbind(){document.removeEventListener(\"keydown\",this.onDocumentKeyDown,!1),document.removeEventListener(\"keypress\",this.onDocumentKeyPress,!1)}addKeyBinding(e,t){\"object\"==typeof e&&e.keyCode?this.bindings[e.keyCode]={callback:t,key:e.key,description:e.description}:this.bindings[e]={callback:t,key:null,description:null}}removeKeyBinding(e){delete this.bindings[e]}triggerKey(e){this.onDocumentKeyDown({keyCode:e})}registerKeyboardShortcut(e,t){this.shortcuts[e]=t}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyPress(e){e.shiftKey&&63===e.charCode&&this.Reveal.toggleHelp()}onDocumentKeyDown(e){let t=this.Reveal.getConfig();if(\"function\"==typeof t.keyboardCondition&&!1===t.keyboardCondition(e))return!0;if(\"focused\"===t.keyboardCondition&&!this.Reveal.isFocused())return!0;let i=e.keyCode,n=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(e);let a=document.activeElement&&!0===document.activeElement.isContentEditable,s=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),r=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),o=e.shiftKey&&32===e.keyCode,l=e.shiftKey&&37===i,d=e.shiftKey&&39===i,c=!o&&!l&&!d&&(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey);if(a||s||r||c)return;let u,h=[66,86,190,191];if(\"object\"==typeof t.keyboard)for(u in t.keyboard)\"togglePause\"===t.keyboard[u]&&h.push(parseInt(u,10));if(this.Reveal.isPaused()&&-1===h.indexOf(i))return!1;let g=\"linear\"===t.navigationMode||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),v=!1;if(\"object\"==typeof t.keyboard)for(u in t.keyboard)if(parseInt(u,10)===i){let i=t.keyboard[u];\"function\"==typeof i?i.apply(null,[e]):\"string\"==typeof i&&\"function\"==typeof this.Reveal[i]&&this.Reveal[i].call(),v=!0}if(!1===v)for(u in this.bindings)if(parseInt(u,10)===i){let t=this.bindings[u].callback;\"function\"==typeof t?t.apply(null,[e]):\"string\"==typeof t&&\"function\"==typeof this.Reveal[t]&&this.Reveal[t].call(),v=!0}!1===v&&(v=!0,80===i||33===i?this.Reveal.prev():78===i||34===i?this.Reveal.next():72===i||37===i?l?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&g?this.Reveal.prev():this.Reveal.left():76===i||39===i?d?this.Reveal.slide(Number.MAX_VALUE):!this.Reveal.overview.isActive()&&g?this.Reveal.next():this.Reveal.right():75===i||38===i?!this.Reveal.overview.isActive()&&g?this.Reveal.prev():this.Reveal.up():74===i||40===i?!this.Reveal.overview.isActive()&&g?this.Reveal.next():this.Reveal.down():36===i?this.Reveal.slide(0):35===i?this.Reveal.slide(Number.MAX_VALUE):32===i?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),e.shiftKey?this.Reveal.prev():this.Reveal.next()):58===i||59===i||66===i||86===i||190===i||191===i?this.Reveal.togglePause():70===i?(e=>{let t=(e=e||document.documentElement).requestFullscreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;t&&t.apply(e)})(t.embedded?this.Reveal.getViewportElement():document.documentElement):65===i?t.autoSlideStoppable&&this.Reveal.toggleAutoSlide(n):v=!1),v?e.preventDefault&&e.preventDefault():27!==i&&79!==i||(!1===this.Reveal.closeOverlay()&&this.Reveal.overview.toggle(),e.preventDefault&&e.preventDefault()),this.Reveal.cueAutoSlide()}}class xi{constructor(e){this.Reveal=e,this.writeURLTimeout=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener(\"hashchange\",this.onWindowHashChange,!1)}unbind(){window.removeEventListener(\"hashchange\",this.onWindowHashChange,!1)}readURL(){let e=this.Reveal.getConfig(),t=this.Reveal.getIndices(),i=this.Reveal.getCurrentSlide(),n=window.location.hash,a=n.slice(2).split(\"/\"),s=n.replace(/#\\/?/gi,\"\");if(!/^[0-9]*$/.test(a[0])&&s.length){let e,n;/\\/[-\\d]+$/g.test(s)&&(n=parseInt(s.split(\"/\").pop(),10),n=isNaN(n)?void 0:n,s=s.split(\"/\").shift());try{e=document.getElementById(decodeURIComponent(s))}catch(e){}let a=!!i&&i.getAttribute(\"id\")===s;if(e){if(!a||void 0!==n){let t=this.Reveal.getIndices(e);this.Reveal.slide(t.h,t.v,n)}}else this.Reveal.slide(t.h||0,t.v||0)}else{let i,n=e.hashOneBasedIndex?1:0,s=parseInt(a[0],10)-n||0,r=parseInt(a[1],10)-n||0;e.fragmentInURL&&(i=parseInt(a[2],10),isNaN(i)&&(i=void 0)),s===t.h&&r===t.v&&void 0===i||this.Reveal.slide(s,r,i)}}writeURL(e){let t=this.Reveal.getConfig(),i=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),\"number\"==typeof e)this.writeURLTimeout=setTimeout(this.writeURL,e);else if(i){let e=this.getHash();t.history?window.location.hash=e:t.hash&&(\"/\"===e?window.history.replaceState(null,null,window.location.pathname+window.location.search):window.history.replaceState(null,null,\"#\"+e))}}getHash(e){let t=\"/\",i=e||this.Reveal.getCurrentSlide(),n=i?i.getAttribute(\"id\"):null;n&&(n=encodeURIComponent(n));let a=this.Reveal.getIndices(e);if(this.Reveal.getConfig().fragmentInURL||(a.f=void 0),\"string\"==typeof n&&n.length)t=\"/\"+n,a.f>=0&&(t+=\"/\"+a.f);else{let e=this.Reveal.getConfig().hashOneBasedIndex?1:0;(a.h>0||a.v>0||a.f>=0)&&(t+=a.h+e),(a.v>0||a.f>=0)&&(t+=\"/\"+(a.v+e)),a.f>=0&&(t+=\"/\"+a.f)}return t}onWindowHashChange(e){this.readURL()}}class Ci{constructor(e){this.Reveal=e,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this)}render(){const e=this.Reveal.getConfig().rtl,t=this.Reveal.getRevealElement();this.element=document.createElement(\"aside\"),this.element.className=\"controls\",this.element.innerHTML='<button class=\"navigate-left\" aria-label=\"'.concat(e?\"next slide\":\"previous slide\",'\"><div class=\"controls-arrow\"></div></button>\\n\\t\\t\\t<button class=\"navigate-right\" aria-label=\"').concat(e?\"previous slide\":\"next slide\",'\"><div class=\"controls-arrow\"></div></button>\\n\\t\\t\\t<button class=\"navigate-up\" aria-label=\"above slide\"><div class=\"controls-arrow\"></div></button>\\n\\t\\t\\t<button class=\"navigate-down\" aria-label=\"below slide\"><div class=\"controls-arrow\"></div></button>'),this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=ti(t,\".navigate-left\"),this.controlsRight=ti(t,\".navigate-right\"),this.controlsUp=ti(t,\".navigate-up\"),this.controlsDown=ti(t,\".navigate-down\"),this.controlsPrev=ti(t,\".navigate-prev\"),this.controlsNext=ti(t,\".navigate-next\"),this.controlsRightArrow=this.element.querySelector(\".navigate-right\"),this.controlsLeftArrow=this.element.querySelector(\".navigate-left\"),this.controlsDownArrow=this.element.querySelector(\".navigate-down\")}configure(e,t){this.element.style.display=e.controls?\"block\":\"none\",this.element.setAttribute(\"data-controls-layout\",e.controlsLayout),this.element.setAttribute(\"data-controls-back-arrows\",e.controlsBackArrows)}bind(){let e=[\"touchstart\",\"click\"];pi&&(e=[\"touchstart\"]),e.forEach(e=>{this.controlsLeft.forEach(t=>t.addEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(t=>t.addEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(t=>t.addEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(t=>t.addEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(t=>t.addEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(t=>t.addEventListener(e,this.onNavigateNextClicked,!1))})}unbind(){[\"touchstart\",\"click\"].forEach(e=>{this.controlsLeft.forEach(t=>t.removeEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(t=>t.removeEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(t=>t.removeEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(t=>t.removeEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(t=>t.removeEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(t=>t.removeEventListener(e,this.onNavigateNextClicked,!1))})}update(){let e=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(e=>{e.classList.remove(\"enabled\",\"fragmented\"),e.setAttribute(\"disabled\",\"disabled\")}),e.left&&this.controlsLeft.forEach(e=>{e.classList.add(\"enabled\"),e.removeAttribute(\"disabled\")}),e.right&&this.controlsRight.forEach(e=>{e.classList.add(\"enabled\"),e.removeAttribute(\"disabled\")}),e.up&&this.controlsUp.forEach(e=>{e.classList.add(\"enabled\"),e.removeAttribute(\"disabled\")}),e.down&&this.controlsDown.forEach(e=>{e.classList.add(\"enabled\"),e.removeAttribute(\"disabled\")}),(e.left||e.up)&&this.controlsPrev.forEach(e=>{e.classList.add(\"enabled\"),e.removeAttribute(\"disabled\")}),(e.right||e.down)&&this.controlsNext.forEach(e=>{e.classList.add(\"enabled\"),e.removeAttribute(\"disabled\")});let t=this.Reveal.getCurrentSlide();if(t){let e=this.Reveal.fragments.availableRoutes();e.prev&&this.controlsPrev.forEach(e=>{e.classList.add(\"fragmented\",\"enabled\"),e.removeAttribute(\"disabled\")}),e.next&&this.controlsNext.forEach(e=>{e.classList.add(\"fragmented\",\"enabled\"),e.removeAttribute(\"disabled\")}),this.Reveal.isVerticalSlide(t)?(e.prev&&this.controlsUp.forEach(e=>{e.classList.add(\"fragmented\",\"enabled\"),e.removeAttribute(\"disabled\")}),e.next&&this.controlsDown.forEach(e=>{e.classList.add(\"fragmented\",\"enabled\"),e.removeAttribute(\"disabled\")})):(e.prev&&this.controlsLeft.forEach(e=>{e.classList.add(\"fragmented\",\"enabled\"),e.removeAttribute(\"disabled\")}),e.next&&this.controlsRight.forEach(e=>{e.classList.add(\"fragmented\",\"enabled\"),e.removeAttribute(\"disabled\")}))}if(this.Reveal.getConfig().controlsTutorial){let t=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&e.down?this.controlsDownArrow.classList.add(\"highlight\"):(this.controlsDownArrow.classList.remove(\"highlight\"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&e.left&&0===t.v?this.controlsLeftArrow.classList.add(\"highlight\"):this.controlsLeftArrow.classList.remove(\"highlight\"):!this.Reveal.hasNavigatedHorizontally()&&e.right&&0===t.v?this.controlsRightArrow.classList.add(\"highlight\"):this.controlsRightArrow.classList.remove(\"highlight\"))}}onNavigateLeftClicked(e){e.preventDefault(),this.Reveal.onUserInput(),\"linear\"===this.Reveal.getConfig().navigationMode?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(e){e.preventDefault(),this.Reveal.onUserInput(),\"linear\"===this.Reveal.getConfig().navigationMode?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}}class Pi{constructor(e){this.Reveal=e,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement(\"div\"),this.element.className=\"progress\",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement(\"span\"),this.element.appendChild(this.bar)}configure(e,t){this.element.style.display=e.progress?\"block\":\"none\"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener(\"click\",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener(\"click\",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let e=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(e=0),this.bar.style.transform=\"scaleX(\"+e+\")\"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(e){this.Reveal.onUserInput(e),e.preventDefault();let t=this.Reveal.getHorizontalSlides().length,i=Math.floor(e.clientX/this.getMaxWidth()*t);this.Reveal.getConfig().rtl&&(i=t-i),this.Reveal.slide(i)}}class Ni{constructor(e){this.Reveal=e,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(e,t){e.mouseWheel?(document.addEventListener(\"DOMMouseScroll\",this.onDocumentMouseScroll,!1),document.addEventListener(\"mousewheel\",this.onDocumentMouseScroll,!1)):(document.removeEventListener(\"DOMMouseScroll\",this.onDocumentMouseScroll,!1),document.removeEventListener(\"mousewheel\",this.onDocumentMouseScroll,!1)),e.hideInactiveCursor?(document.addEventListener(\"mousemove\",this.onDocumentCursorActive,!1),document.addEventListener(\"mousedown\",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener(\"mousemove\",this.onDocumentCursorActive,!1),document.removeEventListener(\"mousedown\",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor=\"\")}hideCursor(){!1===this.cursorHidden&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor=\"none\")}onDocumentCursorActive(e){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(e){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let t=e.detail||-e.wheelDelta;t>0?this.Reveal.next():t<0&&this.Reveal.prev()}}}const Mi=(e,t)=>{const i=document.createElement(\"script\");i.type=\"text/javascript\",i.async=!1,i.defer=!1,i.src=e,\"function\"==typeof t&&(i.onload=i.onreadystatechange=e=>{(\"load\"===e.type||/loaded|complete/.test(i.readyState))&&(i.onload=i.onreadystatechange=i.onerror=null,t())},i.onerror=e=>{i.onload=i.onreadystatechange=i.onerror=null,t(new Error(\"Failed loading script: \"+i.src+\"\\n\"+e))});const n=document.querySelector(\"head\");n.insertBefore(i,n.lastChild)};class Ii{constructor(e){this.Reveal=e,this.state=\"idle\",this.registeredPlugins={},this.asyncDependencies=[]}load(e,t){return this.state=\"loading\",e.forEach(this.registerPlugin.bind(this)),new Promise(e=>{let i=[],n=0;if(t.forEach(e=>{e.condition&&!e.condition()||(e.async?this.asyncDependencies.push(e):i.push(e))}),i.length){n=i.length;const t=t=>{t&&\"function\"==typeof t.callback&&t.callback(),0==--n&&this.initPlugins().then(e)};i.forEach(e=>{\"string\"==typeof e.id?(this.registerPlugin(e),t(e)):\"string\"==typeof e.src?Mi(e.src,()=>t(e)):(console.warn(\"Unrecognized plugin format\",e),t())})}else this.initPlugins().then(e)})}initPlugins(){return new Promise(e=>{let t=Object.values(this.registeredPlugins),i=t.length;if(0===i)this.loadAsync().then(e);else{let n,a=()=>{0==--i?this.loadAsync().then(e):n()},s=0;n=()=>{let e=t[s++];if(\"function\"==typeof e.init){let t=e.init(this.Reveal);t&&\"function\"==typeof t.then?t.then(a):a()}else a()},n()}})}loadAsync(){return this.state=\"loaded\",this.asyncDependencies.length&&this.asyncDependencies.forEach(e=>{Mi(e.src,e.callback)}),Promise.resolve()}registerPlugin(e){2===arguments.length&&\"string\"==typeof arguments[0]?(e=arguments[1]).id=arguments[0]:\"function\"==typeof e&&(e=e());let t=e.id;\"string\"!=typeof t?console.warn(\"Unrecognized plugin format; can't find plugin.id\",e):void 0===this.registeredPlugins[t]?(this.registeredPlugins[t]=e,\"loaded\"===this.state&&\"function\"==typeof e.init&&e.init(this.Reveal)):console.warn('reveal.js: \"'+t+'\" plugin has already been registered')}hasPlugin(e){return!!this.registeredPlugins[e]}getPlugin(e){return this.registeredPlugins[e]}getRegisteredPlugins(){return this.registeredPlugins}}class Ti{constructor(e){this.Reveal=e}setupPDF(){let e=this.Reveal.getConfig(),t=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),i=Math.floor(t.width*(1+e.margin)),n=Math.floor(t.height*(1+e.margin)),a=t.width,s=t.height;li(\"@page{size:\"+i+\"px \"+n+\"px; margin: 0px;}\"),li(\".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: \"+a+\"px; max-height:\"+s+\"px}\"),document.documentElement.classList.add(\"print-pdf\"),document.body.style.width=i+\"px\",document.body.style.height=n+\"px\",this.Reveal.layoutSlideContents(a,s);let r=e.slideNumber&&/all|print/i.test(e.showSlideNumber);ti(this.Reveal.getRevealElement(),\".slides section\").forEach((function(e){e.setAttribute(\"data-slide-number\",this.Reveal.slideNumber.getSlideNumber(e))}),this),ti(this.Reveal.getRevealElement(),\".slides section\").forEach((function(t){if(!1===t.classList.contains(\"stack\")){let o=(i-a)/2,l=(n-s)/2,d=t.scrollHeight,c=Math.max(Math.ceil(d/n),1);c=Math.min(c,e.pdfMaxPagesPerSlide),(1===c&&e.center||t.classList.contains(\"center\"))&&(l=Math.max((n-d)/2,0));let u=document.createElement(\"div\");if(u.className=\"pdf-page\",u.style.height=(n+e.pdfPageHeightOffset)*c+\"px\",t.parentNode.insertBefore(u,t),u.appendChild(t),t.style.left=o+\"px\",t.style.top=l+\"px\",t.style.width=a+\"px\",t.slideBackgroundElement&&u.insertBefore(t.slideBackgroundElement,t),e.showNotes){let n=this.Reveal.getSlideNotes(t);if(n){let t=8,a=\"string\"==typeof e.showNotes?e.showNotes:\"inline\",s=document.createElement(\"div\");s.classList.add(\"speaker-notes\"),s.classList.add(\"speaker-notes-pdf\"),s.setAttribute(\"data-layout\",a),s.innerHTML=n,\"separate-page\"===a?u.parentNode.insertBefore(s,u.nextSibling):(s.style.left=t+\"px\",s.style.bottom=t+\"px\",s.style.width=i-2*t+\"px\",u.appendChild(s))}}if(r){let e=document.createElement(\"div\");e.classList.add(\"slide-number\"),e.classList.add(\"slide-number-pdf\"),e.innerHTML=t.getAttribute(\"data-slide-number\"),u.appendChild(e)}if(e.pdfSeparateFragments){let e,t,i=this.Reveal.fragments.sort(u.querySelectorAll(\".fragment\"),!0);i.forEach((function(i){e&&e.forEach((function(e){e.classList.remove(\"current-fragment\")})),i.forEach((function(e){e.classList.add(\"visible\",\"current-fragment\")}),this);let n=u.cloneNode(!0);u.parentNode.insertBefore(n,(t||u).nextSibling),e=i,t=n}),this),i.forEach((function(e){e.forEach((function(e){e.classList.remove(\"visible\",\"current-fragment\")}))}))}else ti(u,\".fragment:not(.fade-out)\").forEach((function(e){e.classList.add(\"visible\")}))}}),this),this.Reveal.dispatchEvent({type:\"pdf-ready\"})}isPrintingPDF(){return/print-pdf/gi.test(window.location.search)}}class Di{constructor(e){this.Reveal=e,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let e=this.Reveal.getRevealElement();\"onpointerdown\"in window?(e.addEventListener(\"pointerdown\",this.onPointerDown,!1),e.addEventListener(\"pointermove\",this.onPointerMove,!1),e.addEventListener(\"pointerup\",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(e.addEventListener(\"MSPointerDown\",this.onPointerDown,!1),e.addEventListener(\"MSPointerMove\",this.onPointerMove,!1),e.addEventListener(\"MSPointerUp\",this.onPointerUp,!1)):(e.addEventListener(\"touchstart\",this.onTouchStart,!1),e.addEventListener(\"touchmove\",this.onTouchMove,!1),e.addEventListener(\"touchend\",this.onTouchEnd,!1))}unbind(){let e=this.Reveal.getRevealElement();e.removeEventListener(\"pointerdown\",this.onPointerDown,!1),e.removeEventListener(\"pointermove\",this.onPointerMove,!1),e.removeEventListener(\"pointerup\",this.onPointerUp,!1),e.removeEventListener(\"MSPointerDown\",this.onPointerDown,!1),e.removeEventListener(\"MSPointerMove\",this.onPointerMove,!1),e.removeEventListener(\"MSPointerUp\",this.onPointerUp,!1),e.removeEventListener(\"touchstart\",this.onTouchStart,!1),e.removeEventListener(\"touchmove\",this.onTouchMove,!1),e.removeEventListener(\"touchend\",this.onTouchEnd,!1)}isSwipePrevented(e){for(;e&&\"function\"==typeof e.hasAttribute;){if(e.hasAttribute(\"data-prevent-swipe\"))return!0;e=e.parentNode}return!1}onTouchStart(e){if(this.isSwipePrevented(e.target))return!0;this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.touchStartCount=e.touches.length}onTouchMove(e){if(this.isSwipePrevented(e.target))return!0;let t=this.Reveal.getConfig();if(this.touchCaptured)pi&&e.preventDefault();else{this.Reveal.onUserInput(e);let i=e.touches[0].clientX,n=e.touches[0].clientY;if(1===e.touches.length&&2!==this.touchStartCount){let a=this.Reveal.availableRoutes({includeFragments:!0}),s=i-this.touchStartX,r=n-this.touchStartY;s>40&&Math.abs(s)>Math.abs(r)?(this.touchCaptured=!0,\"linear\"===t.navigationMode?t.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):s<-40&&Math.abs(s)>Math.abs(r)?(this.touchCaptured=!0,\"linear\"===t.navigationMode?t.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):r>40&&a.up?(this.touchCaptured=!0,\"linear\"===t.navigationMode?this.Reveal.prev():this.Reveal.up()):r<-40&&a.down&&(this.touchCaptured=!0,\"linear\"===t.navigationMode?this.Reveal.next():this.Reveal.down()),t.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&e.preventDefault():e.preventDefault()}}}onTouchEnd(e){this.touchCaptured=!1}onPointerDown(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&\"touch\"!==e.pointerType||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchStart(e))}onPointerMove(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&\"touch\"!==e.pointerType||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchMove(e))}onPointerUp(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&\"touch\"!==e.pointerType||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchEnd(e))}}class Oi{constructor(e){this.Reveal=e,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(e,t){e.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener(\"pointerdown\",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener(\"pointerdown\",this.onRevealPointerDown,!1),document.removeEventListener(\"pointerdown\",this.onDocumentPointerDown,!1)}focus(){\"focus\"!==this.state&&(this.Reveal.getRevealElement().classList.add(\"focused\"),document.addEventListener(\"pointerdown\",this.onDocumentPointerDown,!1)),this.state=\"focus\"}blur(){\"blur\"!==this.state&&(this.Reveal.getRevealElement().classList.remove(\"focused\"),document.removeEventListener(\"pointerdown\",this.onDocumentPointerDown,!1)),this.state=\"blur\"}isFocused(){return\"focus\"===this.state}onRevealPointerDown(e){this.focus()}onDocumentPointerDown(e){let t=ri(e.target,\".reveal\");t&&t===this.Reveal.getRevealElement()||this.blur()}}class zi{constructor(e){this.Reveal=e}render(){this.element=document.createElement(\"div\"),this.element.className=\"speaker-notes\",this.element.setAttribute(\"data-prevent-swipe\",\"\"),this.element.setAttribute(\"tabindex\",\"0\"),this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){e.showNotes&&this.element.setAttribute(\"data-layout\",\"string\"==typeof e.showNotes?e.showNotes:\"inline\")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.print.isPrintingPDF()&&(this.element.innerHTML=this.getSlideNotes()||'<span class=\"notes-placeholder\">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.print.isPrintingPDF()?this.Reveal.getRevealElement().classList.add(\"show-notes\"):this.Reveal.getRevealElement().classList.remove(\"show-notes\")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll(\"[data-notes], aside.notes\").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(e=this.Reveal.getCurrentSlide()){if(e.hasAttribute(\"data-notes\"))return e.getAttribute(\"data-notes\");let t=e.querySelector(\"aside.notes\");return t?t.innerHTML:null}}class Hi{constructor(e,t){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=e,this.progressCheck=t,this.canvas=document.createElement(\"canvas\"),this.canvas.className=\"playback\",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+\"px\",this.canvas.style.height=this.diameter2+\"px\",this.context=this.canvas.getContext(\"2d\"),this.container.appendChild(this.canvas),this.render()}setPlaying(e){const t=this.playing;this.playing=e,!t&&this.playing?this.animate():this.render()}animate(){const e=this.progress;this.progress=this.progressCheck(),e>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let e=this.playing?this.progress:0,t=this.diameter2-this.thickness,i=this.diameter2,n=this.diameter2,a=28;this.progressOffset+=.1*(1-this.progressOffset);const s=-Math.PI/2+e*(2*Math.PI),r=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(i,n,t+4,0,2*Math.PI,!1),this.context.fillStyle=\"rgba( 0, 0, 0, 0.4 )\",this.context.fill(),this.context.beginPath(),this.context.arc(i,n,t,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle=\"rgba( 255, 255, 255, 0.2 )\",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(i,n,t,r,s,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle=\"#fff\",this.context.stroke()),this.context.translate(i-14,n-14),this.playing?(this.context.fillStyle=\"#fff\",this.context.fillRect(0,0,10,a),this.context.fillRect(18,0,10,a)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,a),this.context.fillStyle=\"#fff\",this.context.fill()),this.context.restore()}on(e,t){this.canvas.addEventListener(e,t,!1)}off(e,t){this.canvas.removeEventListener(e,t,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var Bi={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:\"bottom-right\",controlsBackArrows:\"faded\",progress:!0,slideNumber:!1,showSlideNumber:\"all\",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:\"default\",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:\"ease\",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:[\"opacity\",\"color\",\"background-color\",\"padding\",\"font-size\",\"line-height\",\"letter-spacing\",\"border-width\",\"border-color\",\"border-radius\",\"outline\",\"outline-offset\"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:\"slide\",transitionSpeed:\"default\",backgroundTransition:\"fade\",parallaxBackgroundImage:\"\",parallaxBackgroundSize:\"\",parallaxBackgroundRepeat:\"\",parallaxBackgroundPosition:\"\",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:\"block\",hideInactiveCursor:!0,hideCursorTime:5e3,dependencies:[],plugins:[]};function Ui(e,t){arguments.length<2&&(t=arguments[0],e=document.querySelector(\".reveal\"));const i={};let n,a,s,r,o,l={},d=!1,c={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},u=[],h=1,g={layout:\"\",overview:\"\"},v={},p=\"idle\",f=0,m=0,b=-1,y=!1,w=new bi(i),S=new yi(i),E=new Ri(i),R=new Si(i),A=new Ai(i),k=new ki(i),L=new Li(i),x=new xi(i),C=new Ci(i),P=new Pi(i),N=new Ni(i),M=new Ii(i),I=new Ti(i),T=new Oi(i),D=new Di(i),O=new zi(i);function z(n){return v.wrapper=e,v.slides=e.querySelector(\".slides\"),l={...Bi,...l,...t,...n,...di()},H(),window.addEventListener(\"load\",re,!1),M.load(l.plugins,l.dependencies).then(B),new Promise(e=>i.on(\"ready\",e))}function H(){!0===l.embedded?v.viewport=ri(e,\".reveal-viewport\")||e:(v.viewport=document.body,document.documentElement.classList.add(\"reveal-full-page\")),v.viewport.classList.add(\"reveal-viewport\")}function B(){d=!0,U(),j(),V(),_(),Ae(),K(),x.readURL(),R.update(!0),setTimeout(()=>{v.slides.classList.remove(\"no-transition\"),v.wrapper.classList.add(\"ready\"),Q({type:\"ready\",data:{indexh:n,indexv:a,currentSlide:r}})},1),I.isPrintingPDF()&&($(),\"complete\"===document.readyState?I.setupPDF():window.addEventListener(\"load\",()=>{I.setupPDF()}))}function U(){l.showHiddenSlides||ti(v.wrapper,'section[data-visibility=\"hidden\"]').forEach(e=>{e.parentNode.removeChild(e)})}function j(){v.slides.classList.add(\"no-transition\"),gi?v.wrapper.classList.add(\"no-hover\"):v.wrapper.classList.remove(\"no-hover\"),R.render(),S.render(),C.render(),P.render(),O.render(),v.pauseOverlay=oi(v.wrapper,\"div\",\"pause-overlay\",l.controls?'<button class=\"resume-button\">Resume presentation</button>':null),v.statusElement=F(),v.wrapper.setAttribute(\"role\",\"application\")}function F(){let e=v.wrapper.querySelector(\".aria-status\");return e||(e=document.createElement(\"div\"),e.style.position=\"absolute\",e.style.height=\"1px\",e.style.width=\"1px\",e.style.overflow=\"hidden\",e.style.clip=\"rect( 1px, 1px, 1px, 1px )\",e.classList.add(\"aria-status\"),e.setAttribute(\"aria-live\",\"polite\"),e.setAttribute(\"aria-atomic\",\"true\"),v.wrapper.appendChild(e)),e}function q(e){v.statusElement.textContent=e}function W(e){let t=\"\";if(3===e.nodeType)t+=e.textContent;else if(1===e.nodeType){let i=e.getAttribute(\"aria-hidden\"),n=\"none\"===window.getComputedStyle(e).display;\"true\"===i||n||Array.from(e.childNodes).forEach(e=>{t+=W(e)})}return t=t.trim(),\"\"===t?\"\":t+\" \"}function _(){setInterval(()=>{0===v.wrapper.scrollTop&&0===v.wrapper.scrollLeft||(v.wrapper.scrollTop=0,v.wrapper.scrollLeft=0)},1e3)}function V(){l.postMessage&&window.addEventListener(\"message\",e=>{let t=e.data;if(\"string\"==typeof t&&\"{\"===t.charAt(0)&&\"}\"===t.charAt(t.length-1)&&(t=JSON.parse(t),t.method&&\"function\"==typeof i[t.method]))if(!1===kt.test(t.method)){const e=i[t.method].apply(i,t.args);Z(\"callback\",{method:t.method,result:e})}else console.warn('reveal.js: \"'+t.method+'\" is is blacklisted from the postMessage API')},!1)}function K(e){const t={...l};if(\"object\"==typeof e&&ei(l,e),!1===i.isReady())return;const n=v.wrapper.querySelectorAll(\".slides section\").length;v.wrapper.classList.remove(t.transition),v.wrapper.classList.add(l.transition),v.wrapper.setAttribute(\"data-transition-speed\",l.transitionSpeed),v.wrapper.setAttribute(\"data-background-transition\",l.backgroundTransition),v.viewport.style.setProperty(\"--slide-width\",l.width+\"px\"),v.viewport.style.setProperty(\"--slide-height\",l.height+\"px\"),l.shuffle&&ke(),ii(v.wrapper,\"embedded\",l.embedded),ii(v.wrapper,\"rtl\",l.rtl),ii(v.wrapper,\"center\",l.center),!1===l.pause&&fe(),l.previewLinks?(ee(),te(\"[data-preview-link=false]\")):(te(),ee(\"[data-preview-link]:not([data-preview-link=false])\")),E.reset(),o&&(o.destroy(),o=null),n>1&&l.autoSlide&&l.autoSlideStoppable&&(o=new Hi(v.wrapper,()=>Math.min(Math.max((Date.now()-b)/f,0),1)),o.on(\"click\",st),y=!1),\"default\"!==l.navigationMode?v.wrapper.setAttribute(\"data-navigation-mode\",l.navigationMode):v.wrapper.removeAttribute(\"data-navigation-mode\"),O.configure(l,t),T.configure(l,t),N.configure(l,t),C.configure(l,t),P.configure(l,t),L.configure(l,t),A.configure(l,t),S.configure(l,t),Ee()}function X(){window.addEventListener(\"resize\",it,!1),l.touch&&D.bind(),l.keyboard&&L.bind(),l.progress&&P.bind(),l.respondToHashChanges&&x.bind(),C.bind(),T.bind(),v.slides.addEventListener(\"transitionend\",tt,!1),v.pauseOverlay.addEventListener(\"click\",fe,!1),l.focusBodyOnPageVisibilityChange&&document.addEventListener(\"visibilitychange\",nt,!1)}function $(){D.unbind(),T.unbind(),L.unbind(),C.unbind(),P.unbind(),x.unbind(),window.removeEventListener(\"resize\",it,!1),v.slides.removeEventListener(\"transitionend\",tt,!1),v.pauseOverlay.removeEventListener(\"click\",fe,!1)}function Y(t,i,n){e.addEventListener(t,i,n)}function G(t,i,n){e.removeEventListener(t,i,n)}function J(e){\"string\"==typeof e.layout&&(g.layout=e.layout),\"string\"==typeof e.overview&&(g.overview=e.overview),g.layout?ai(v.slides,g.layout+\" \"+g.overview):ai(v.slides,g.overview)}function Q({target:e=v.wrapper,type:t,data:i,bubbles:n=!0}){let a=document.createEvent(\"HTMLEvents\",1,2);a.initEvent(t,n,!0),ei(a,i),e.dispatchEvent(a),e===v.wrapper&&Z(t)}function Z(e,t){if(l.postMessageEvents&&window.parent!==window.self){let i={namespace:\"reveal\",eventName:e,state:qe()};ei(i,t),window.parent.postMessage(JSON.stringify(i),\"*\")}}function ee(e=\"a\"){Array.from(v.wrapper.querySelectorAll(e)).forEach(e=>{/^(http|www)/gi.test(e.getAttribute(\"href\"))&&e.addEventListener(\"click\",at,!1)})}function te(e=\"a\"){Array.from(v.wrapper.querySelectorAll(e)).forEach(e=>{/^(http|www)/gi.test(e.getAttribute(\"href\"))&&e.removeEventListener(\"click\",at,!1)})}function ie(e){se(),v.overlay=document.createElement(\"div\"),v.overlay.classList.add(\"overlay\"),v.overlay.classList.add(\"overlay-preview\"),v.wrapper.appendChild(v.overlay),v.overlay.innerHTML='<header>\\n\\t\\t\\t\\t<a class=\"close\" href=\"#\"><span class=\"icon\"></span></a>\\n\\t\\t\\t\\t<a class=\"external\" href=\"'.concat(e,'\" target=\"_blank\"><span class=\"icon\"></span></a>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\"spinner\"></div>\\n\\t\\t\\t<div class=\"viewport\">\\n\\t\\t\\t\\t<iframe src=\"').concat(e,'\"></iframe>\\n\\t\\t\\t\\t<small class=\"viewport-inner\">\\n\\t\\t\\t\\t\\t<span class=\"x-frame-error\">Unable to load iframe. This is likely due to the site\\'s policy (x-frame-options).</span>\\n\\t\\t\\t\\t</small>\\n\\t\\t\\t</div>'),v.overlay.querySelector(\"iframe\").addEventListener(\"load\",e=>{v.overlay.classList.add(\"loaded\")},!1),v.overlay.querySelector(\".close\").addEventListener(\"click\",e=>{se(),e.preventDefault()},!1),v.overlay.querySelector(\".external\").addEventListener(\"click\",e=>{se()},!1)}function ne(e){\"boolean\"==typeof e?e?ae():se():v.overlay?se():ae()}function ae(){if(l.help){se(),v.overlay=document.createElement(\"div\"),v.overlay.classList.add(\"overlay\"),v.overlay.classList.add(\"overlay-help\"),v.wrapper.appendChild(v.overlay);let e='<p class=\"title\">Keyboard Shortcuts</p><br/>',t=L.getShortcuts(),i=L.getBindings();e+=\"<table><th>KEY</th><th>ACTION</th>\";for(let i in t)e+=\"<tr><td>\".concat(i,\"</td><td>\").concat(t[i],\"</td></tr>\");for(let t in i)i[t].key&&i[t].description&&(e+=\"<tr><td>\".concat(i[t].key,\"</td><td>\").concat(i[t].description,\"</td></tr>\"));e+=\"</table>\",v.overlay.innerHTML='\\n\\t\\t\\t\\t<header>\\n\\t\\t\\t\\t\\t<a class=\"close\" href=\"#\"><span class=\"icon\"></span></a>\\n\\t\\t\\t\\t</header>\\n\\t\\t\\t\\t<div class=\"viewport\">\\n\\t\\t\\t\\t\\t<div class=\"viewport-inner\">'.concat(e,\"</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\"),v.overlay.querySelector(\".close\").addEventListener(\"click\",e=>{se(),e.preventDefault()},!1)}}function se(){return!!v.overlay&&(v.overlay.parentNode.removeChild(v.overlay),v.overlay=null,!0)}function re(){if(v.wrapper&&!I.isPrintingPDF()){if(!l.disableLayout){gi&&!l.embedded&&document.documentElement.style.setProperty(\"--vh\",.01*window.innerHeight+\"px\");const e=le(),t=h;oe(l.width,l.height),v.slides.style.width=e.width+\"px\",v.slides.style.height=e.height+\"px\",h=Math.min(e.presentationWidth/e.width,e.presentationHeight/e.height),h=Math.max(h,l.minScale),h=Math.min(h,l.maxScale),1===h?(v.slides.style.zoom=\"\",v.slides.style.left=\"\",v.slides.style.top=\"\",v.slides.style.bottom=\"\",v.slides.style.right=\"\",J({layout:\"\"})):h>1&&fi&&window.devicePixelRatio<2?(v.slides.style.zoom=h,v.slides.style.left=\"\",v.slides.style.top=\"\",v.slides.style.bottom=\"\",v.slides.style.right=\"\",J({layout:\"\"})):(v.slides.style.zoom=\"\",v.slides.style.left=\"50%\",v.slides.style.top=\"50%\",v.slides.style.bottom=\"auto\",v.slides.style.right=\"auto\",J({layout:\"translate(-50%, -50%) scale(\"+h+\")\"}));const i=Array.from(v.wrapper.querySelectorAll(\".slides section\"));for(let t=0,n=i.length;t<n;t++){const n=i[t];\"none\"!==n.style.display&&(l.center||n.classList.contains(\"center\")?n.classList.contains(\"stack\")?n.style.top=0:n.style.top=Math.max((e.height-n.scrollHeight)/2,0)+\"px\":n.style.top=\"\")}t!==h&&Q({type:\"resize\",data:{oldScale:t,scale:h,size:e}})}P.update(),R.updateParallax(),k.isActive()&&k.update()}}function oe(e,t){ti(v.slides,\"section > .stretch, section > .r-stretch\").forEach(i=>{let n=ci(i,t);if(/(img|video)/gi.test(i.nodeName)){const t=i.naturalWidth||i.videoWidth,a=i.naturalHeight||i.videoHeight,s=Math.min(e/t,n/a);i.style.width=t*s+\"px\",i.style.height=a*s+\"px\"}else i.style.width=e+\"px\",i.style.height=n+\"px\"})}function le(e,t){const i={width:l.width,height:l.height,presentationWidth:e||v.wrapper.offsetWidth,presentationHeight:t||v.wrapper.offsetHeight};return i.presentationWidth-=i.presentationWidth*l.margin,i.presentationHeight-=i.presentationHeight*l.margin,\"string\"==typeof i.width&&/%$/.test(i.width)&&(i.width=parseInt(i.width,10)/100*i.presentationWidth),\"string\"==typeof i.height&&/%$/.test(i.height)&&(i.height=parseInt(i.height,10)/100*i.presentationHeight),i}function de(e,t){\"object\"==typeof e&&\"function\"==typeof e.setAttribute&&e.setAttribute(\"data-previous-indexv\",t||0)}function ce(e){if(\"object\"==typeof e&&\"function\"==typeof e.setAttribute&&e.classList.contains(\"stack\")){const t=e.hasAttribute(\"data-start-indexv\")?\"data-start-indexv\":\"data-previous-indexv\";return parseInt(e.getAttribute(t)||0,10)}return 0}function ue(e=r){return e&&e.parentNode&&!!e.parentNode.nodeName.match(/section/i)}function he(){return!(!r||!ue(r))&&!r.nextElementSibling}function ge(){return 0===n&&0===a}function ve(){return!!r&&(!r.nextElementSibling&&(!ue(r)||!r.parentNode.nextElementSibling))}function pe(){if(l.pause){const e=v.wrapper.classList.contains(\"paused\");Ve(),v.wrapper.classList.add(\"paused\"),!1===e&&Q({type:\"paused\"})}}function fe(){const e=v.wrapper.classList.contains(\"paused\");v.wrapper.classList.remove(\"paused\"),_e(),e&&Q({type:\"resumed\"})}function me(e){\"boolean\"==typeof e?e?pe():fe():be()?fe():pe()}function be(){return v.wrapper.classList.contains(\"paused\")}function ye(e){\"boolean\"==typeof e?e?Xe():Ke():y?Xe():Ke()}function we(){return!(!f||y)}function Se(e,t,i,o){s=r;const d=v.wrapper.querySelectorAll(\".slides>section\");if(0===d.length)return;void 0!==t||k.isActive()||(t=ce(d[e])),s&&s.parentNode&&s.parentNode.classList.contains(\"stack\")&&de(s.parentNode,a);const c=u.concat();u.length=0;let h=n||0,g=a||0;n=Le(\".slides>section\",void 0===e?n:e),a=Le(\".slides>section.present>section\",void 0===t?a:t);let f=n!==h||a!==g;f||(s=null);let m=d[n],b=m.querySelectorAll(\"section\");r=b[a]||m;let y=!1;f&&s&&r&&!k.isActive()&&(s.hasAttribute(\"data-auto-animate\")&&r.hasAttribute(\"data-auto-animate\")&&(y=!0,v.slides.classList.add(\"disable-slide-transitions\")),p=\"running\"),xe(),re(),k.isActive()&&k.update(),void 0!==i&&A.goto(i),s&&s!==r&&(s.classList.remove(\"present\"),s.setAttribute(\"aria-hidden\",\"true\"),ge()&&setTimeout(()=>{Oe().forEach(e=>{de(e,0)})},0));e:for(let e=0,t=u.length;e<t;e++){for(let t=0;t<c.length;t++)if(c[t]===u[e]){c.splice(t,1);continue e}v.viewport.classList.add(u[e]),Q({type:u[e]})}for(;c.length;)v.viewport.classList.remove(c.pop());f&&Q({type:\"slidechanged\",data:{indexh:n,indexv:a,previousSlide:s,currentSlide:r,origin:o}}),!f&&s||(w.stopEmbeddedContent(s),w.startEmbeddedContent(r)),q(W(r)),P.update(),C.update(),O.update(),R.update(),R.updateParallax(),S.update(),A.update(),x.writeURL(),_e(),y&&(setTimeout(()=>{v.slides.classList.remove(\"disable-slide-transitions\")},0),l.autoAnimate&&E.run(s,r))}function Ee(){$(),X(),re(),f=l.autoSlide,_e(),R.create(),x.writeURL(),A.sortAll(),C.update(),P.update(),xe(),O.update(),O.updateVisibility(),R.update(!0),S.update(),w.formatEmbeddedContent(),!1===l.autoPlayMedia?w.stopEmbeddedContent(r,{unloadIframes:!1}):w.startEmbeddedContent(r),k.isActive()&&k.layout()}function Re(e=r){R.sync(e),A.sync(e),w.load(e),R.update(),O.update()}function Ae(){Te().forEach(e=>{ti(e,\"section\").forEach((e,t)=>{t>0&&(e.classList.remove(\"present\"),e.classList.remove(\"past\"),e.classList.add(\"future\"),e.setAttribute(\"aria-hidden\",\"true\"))})})}function ke(e=Te()){e.forEach((t,i)=>{let n=e[Math.floor(Math.random()*e.length)];n.parentNode===t.parentNode&&t.parentNode.insertBefore(t,n);let a=t.querySelectorAll(\"section\");a.length&&ke(a)})}function Le(e,t){let i=ti(v.wrapper,e),n=i.length,a=I.isPrintingPDF();if(n){l.loop&&(t%=n)<0&&(t=n+t),t=Math.max(Math.min(t,n-1),0);for(let e=0;e<n;e++){let n=i[e],s=l.rtl&&!ue(n);n.classList.remove(\"past\"),n.classList.remove(\"present\"),n.classList.remove(\"future\"),n.setAttribute(\"hidden\",\"\"),n.setAttribute(\"aria-hidden\",\"true\"),n.querySelector(\"section\")&&n.classList.add(\"stack\"),a?n.classList.add(\"present\"):e<t?(n.classList.add(s?\"future\":\"past\"),l.fragments&&ti(n,\".fragment\").forEach(e=>{e.classList.add(\"visible\"),e.classList.remove(\"current-fragment\")})):e>t&&(n.classList.add(s?\"past\":\"future\"),l.fragments&&ti(n,\".fragment.visible\").forEach(e=>{e.classList.remove(\"visible\",\"current-fragment\")}))}let e=i[t],s=e.classList.contains(\"present\");e.classList.add(\"present\"),e.removeAttribute(\"hidden\"),e.removeAttribute(\"aria-hidden\"),s||Q({target:e,type:\"visible\",bubbles:!1});let r=e.getAttribute(\"data-state\");r&&(u=u.concat(r.split(\" \")))}else t=0;return t}function xe(){let e,t,i=Te(),s=i.length;if(s&&void 0!==n){let r=k.isActive()?10:l.viewDistance;gi&&(r=k.isActive()?6:l.mobileViewDistance),I.isPrintingPDF()&&(r=Number.MAX_VALUE);for(let o=0;o<s;o++){let d=i[o],c=ti(d,\"section\"),u=c.length;if(e=Math.abs((n||0)-o)||0,l.loop&&(e=Math.abs(((n||0)-o)%(s-r))||0),e<r?w.load(d):w.unload(d),u){let i=ce(d);for(let s=0;s<u;s++){let l=c[s];t=o===(n||0)?Math.abs((a||0)-s):Math.abs(s-i),e+t<r?w.load(l):w.unload(l)}}}He()?v.wrapper.classList.add(\"has-vertical-slides\"):v.wrapper.classList.remove(\"has-vertical-slides\"),ze()?v.wrapper.classList.add(\"has-horizontal-slides\"):v.wrapper.classList.remove(\"has-horizontal-slides\")}}function Ce({includeFragments:e=!1}={}){let t=v.wrapper.querySelectorAll(\".slides>section\"),i=v.wrapper.querySelectorAll(\".slides>section.present>section\"),s={left:n>0,right:n<t.length-1,up:a>0,down:a<i.length-1};if(l.loop&&(t.length>1&&(s.left=!0,s.right=!0),i.length>1&&(s.up=!0,s.down=!0)),t.length>1&&\"linear\"===l.navigationMode&&(s.right=s.right||s.down,s.left=s.left||s.up),!0===e){let e=A.availableRoutes();s.left=s.left||e.prev,s.up=s.up||e.prev,s.down=s.down||e.next,s.right=s.right||e.next}if(l.rtl){let e=s.left;s.left=s.right,s.right=e}return s}function Pe(e=r){let t=Te(),i=0;e:for(let n=0;n<t.length;n++){let a=t[n],s=a.querySelectorAll(\"section\");for(let t=0;t<s.length;t++){if(s[t]===e)break e;\"uncounted\"!==s[t].dataset.visibility&&i++}if(a===e)break;!1===a.classList.contains(\"stack\")&&\"uncounted\"!==a.dataset.visibility&&i++}return i}function Ne(){let e=Ue(),t=Pe();if(r){let e=r.querySelectorAll(\".fragment\");if(e.length>0){let i=.9;t+=r.querySelectorAll(\".fragment.visible\").length/e.length*i}}return Math.min(t/(e-1),1)}function Me(e){let t,i=n,s=a;if(e){let t=ue(e),n=t?e.parentNode:e,a=Te();i=Math.max(a.indexOf(n),0),s=void 0,t&&(s=Math.max(ti(e.parentNode,\"section\").indexOf(e),0))}if(!e&&r){if(r.querySelectorAll(\".fragment\").length>0){let e=r.querySelector(\".current-fragment\");t=e&&e.hasAttribute(\"data-fragment-index\")?parseInt(e.getAttribute(\"data-fragment-index\"),10):r.querySelectorAll(\".fragment.visible\").length-1}}return{h:i,v:s,f:t}}function Ie(){return ti(v.wrapper,'.slides section:not(.stack):not([data-visibility=\"uncounted\"])')}function Te(){return ti(v.wrapper,\".slides>section\")}function De(){return ti(v.wrapper,\".slides>section>section\")}function Oe(){return ti(v.wrapper,\".slides>section.stack\")}function ze(){return Te().length>1}function He(){return De().length>1}function Be(){return Ie().map(e=>{let t={};for(let i=0;i<e.attributes.length;i++){let n=e.attributes[i];t[n.name]=n.value}return t})}function Ue(){return Ie().length}function je(e,t){let i=Te()[e],n=i&&i.querySelectorAll(\"section\");return n&&n.length&&\"number\"==typeof t?n?n[t]:void 0:i}function Fe(e,t){let i=\"number\"==typeof e?je(e,t):e;if(i)return i.slideBackgroundElement}function qe(){let e=Me();return{indexh:e.h,indexv:e.v,indexf:e.f,paused:be(),overview:k.isActive()}}function We(e){if(\"object\"==typeof e){Se(ni(e.indexh),ni(e.indexv),ni(e.indexf));let t=ni(e.paused),i=ni(e.overview);\"boolean\"==typeof t&&t!==be()&&me(t),\"boolean\"==typeof i&&i!==k.isActive()&&k.toggle(i)}}function _e(){if(Ve(),r&&!1!==l.autoSlide){let e=r.querySelector(\".current-fragment\");e||(e=r.querySelector(\".fragment\"));let t=e?e.getAttribute(\"data-autoslide\"):null,i=r.parentNode?r.parentNode.getAttribute(\"data-autoslide\"):null,n=r.getAttribute(\"data-autoslide\");t?f=parseInt(t,10):n?f=parseInt(n,10):i?f=parseInt(i,10):(f=l.autoSlide,0===r.querySelectorAll(\".fragment\").length&&ti(r,\"video, audio\").forEach(e=>{e.hasAttribute(\"data-autoplay\")&&f&&1e3*e.duration/e.playbackRate>f&&(f=1e3*e.duration/e.playbackRate+1e3)})),!f||y||be()||k.isActive()||ve()&&!A.availableRoutes().next&&!0!==l.loop||(m=setTimeout(()=>{\"function\"==typeof l.autoSlideMethod?l.autoSlideMethod():Ze(),_e()},f),b=Date.now()),o&&o.setPlaying(-1!==m)}}function Ve(){clearTimeout(m),m=-1}function Ke(){f&&!y&&(y=!0,Q({type:\"autoslidepaused\"}),clearTimeout(m),o&&o.setPlaying(!1))}function Xe(){f&&y&&(y=!1,Q({type:\"autoslideresumed\"}),_e())}function $e(){c.hasNavigatedHorizontally=!0,l.rtl?(k.isActive()||!1===A.next())&&Ce().left&&Se(n+1,\"grid\"===l.navigationMode?a:void 0):(k.isActive()||!1===A.prev())&&Ce().left&&Se(n-1,\"grid\"===l.navigationMode?a:void 0)}function Ye(){c.hasNavigatedHorizontally=!0,l.rtl?(k.isActive()||!1===A.prev())&&Ce().right&&Se(n-1,\"grid\"===l.navigationMode?a:void 0):(k.isActive()||!1===A.next())&&Ce().right&&Se(n+1,\"grid\"===l.navigationMode?a:void 0)}function Ge(){(k.isActive()||!1===A.prev())&&Ce().up&&Se(n,a-1)}function Je(){c.hasNavigatedVertically=!0,(k.isActive()||!1===A.next())&&Ce().down&&Se(n,a+1)}function Qe(){if(!1===A.prev())if(Ce().up)Ge();else{let e;if(e=l.rtl?ti(v.wrapper,\".slides>section.future\").pop():ti(v.wrapper,\".slides>section.past\").pop(),e){let t=e.querySelectorAll(\"section\").length-1||void 0;Se(n-1,t)}}}function Ze(){if(c.hasNavigatedHorizontally=!0,c.hasNavigatedVertically=!0,!1===A.next()){let e=Ce();e.down&&e.right&&l.loop&&he()&&(e.down=!1),e.down?Je():l.rtl?$e():Ye()}}function et(e){l.autoSlideStoppable&&Ke()}function tt(e){\"running\"===p&&/section/gi.test(e.target.nodeName)&&(p=\"idle\",Q({type:\"slidetransitionend\",data:{indexh:n,indexv:a,previousSlide:s,currentSlide:r}}))}function it(e){re()}function nt(e){!1===document.hidden&&document.activeElement!==document.body&&(\"function\"==typeof document.activeElement.blur&&document.activeElement.blur(),document.body.focus())}function at(e){if(e.currentTarget&&e.currentTarget.hasAttribute(\"href\")){let t=e.currentTarget.getAttribute(\"href\");t&&(ie(t),e.preventDefault())}}function st(e){ve()&&!1===l.loop?(Se(0,0),Xe()):y?Xe():Ke()}const rt={VERSION:\"4.1.0\",initialize:z,configure:K,sync:Ee,syncSlide:Re,syncFragments:A.sync.bind(A),slide:Se,left:$e,right:Ye,up:Ge,down:Je,prev:Qe,next:Ze,navigateLeft:$e,navigateRight:Ye,navigateUp:Ge,navigateDown:Je,navigatePrev:Qe,navigateNext:Ze,navigateFragment:A.goto.bind(A),prevFragment:A.prev.bind(A),nextFragment:A.next.bind(A),on:Y,off:G,addEventListener:Y,removeEventListener:G,layout:re,shuffle:ke,availableRoutes:Ce,availableFragments:A.availableRoutes.bind(A),toggleHelp:ne,toggleOverview:k.toggle.bind(k),togglePause:me,toggleAutoSlide:ye,isFirstSlide:ge,isLastSlide:ve,isLastVerticalSlide:he,isVerticalSlide:ue,isPaused:be,isAutoSliding:we,isSpeakerNotes:O.isSpeakerNotesWindow.bind(O),isOverview:k.isActive.bind(k),isFocused:T.isFocused.bind(T),isPrintingPDF:I.isPrintingPDF.bind(I),isReady:()=>d,loadSlide:w.load.bind(w),unloadSlide:w.unload.bind(w),addEventListeners:X,removeEventListeners:$,dispatchEvent:Q,getState:qe,setState:We,getProgress:Ne,getIndices:Me,getSlidesAttributes:Be,getSlidePastCount:Pe,getTotalSlides:Ue,getSlide:je,getPreviousSlide:()=>s,getCurrentSlide:()=>r,getSlideBackground:Fe,getSlideNotes:O.getSlideNotes.bind(O),getSlides:Ie,getHorizontalSlides:Te,getVerticalSlides:De,hasHorizontalSlides:ze,hasVerticalSlides:He,hasNavigatedHorizontally:()=>c.hasNavigatedHorizontally,hasNavigatedVertically:()=>c.hasNavigatedVertically,addKeyBinding:L.addKeyBinding.bind(L),removeKeyBinding:L.removeKeyBinding.bind(L),triggerKey:L.triggerKey.bind(L),registerKeyboardShortcut:L.registerKeyboardShortcut.bind(L),getComputedSlideSize:le,getScale:()=>h,getConfig:()=>l,getQueryHash:di,getRevealElement:()=>e,getSlidesElement:()=>v.slides,getViewportElement:()=>v.viewport,getBackgroundsElement:()=>R.element,registerPlugin:M.registerPlugin.bind(M),hasPlugin:M.hasPlugin.bind(M),getPlugin:M.getPlugin.bind(M),getPlugins:M.getRegisteredPlugins.bind(M)};return ei(i,{...rt,announceStatus:q,getStatusText:W,print:I,focus:T,progress:P,controls:C,location:x,overview:k,fragments:A,slideContent:w,slideNumber:S,onUserInput:et,closeOverlay:se,updateSlidesVisibility:xe,layoutSlideContents:oe,transformSlides:J,cueAutoSlide:_e,cancelAutoSlide:Ve}),rt}let ji=Ui,Fi=[];ji.initialize=e=>(Object.assign(ji,new Ui(document.querySelector(\".reveal\"),e)),Fi.map(e=>e(ji)),ji.initialize()),[\"configure\",\"on\",\"off\",\"addEventListener\",\"removeEventListener\",\"registerPlugin\"].forEach(e=>{ji[e]=(...t)=>{Fi.push(i=>i[e].call(null,...t))}}),ji.isReady=()=>!1,ji.VERSION=\"4.1.0\";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ji);\n//# sourceMappingURL=reveal.esm.js.map\n\n\n//# sourceURL=webpack://presentation/./node_modules/reveal.js/dist/reveal.esm.js?");

/***/ }),

/***/ "./node_modules/reveal.js/plugin/markdown/markdown.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/reveal.js/plugin/markdown/markdown.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar e=\"undefined\"!=typeof globalThis?globalThis:\"undefined\"!=typeof window?window:\"undefined\"!=typeof __webpack_require__.g?__webpack_require__.g:\"undefined\"!=typeof self?self:{};function t(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error(\"Dynamic requires are not currently supported by @rollup/plugin-commonjs\")}(null==t&&n.path)}},n.exports),n.exports}var n=function(e){return e&&e.Math==Math&&e},r=n(\"object\"==typeof globalThis&&globalThis)||n(\"object\"==typeof window&&window)||n(\"object\"==typeof self&&self)||n(\"object\"==typeof e&&e)||Function(\"return this\")(),i=function(e){try{return!!e()}catch(e){return!0}},o=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!a.call({1:2},1)?function(e){var t=l(this,e);return!!t&&t.enumerable}:a},c=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},u={}.toString,f=function(e){return u.call(e).slice(8,-1)},h=\"\".split,p=i((function(){return!Object(\"z\").propertyIsEnumerable(0)}))?function(e){return\"String\"==f(e)?h.call(e,\"\"):Object(e)}:Object,g=function(e){if(null==e)throw TypeError(\"Can't call method on \"+e);return e},d=function(e){return p(g(e))},v=function(e){return\"object\"==typeof e?null!==e:\"function\"==typeof e},y=function(e,t){if(!v(e))return e;var n,r;if(t&&\"function\"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;if(\"function\"==typeof(n=e.valueOf)&&!v(r=n.call(e)))return r;if(!t&&\"function\"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;throw TypeError(\"Can't convert object to primitive value\")},b={}.hasOwnProperty,m=function(e,t){return b.call(e,t)},k=r.document,x=v(k)&&v(k.createElement),w=function(e){return x?k.createElement(e):{}},S=!o&&!i((function(){return 7!=Object.defineProperty(w(\"div\"),\"a\",{get:function(){return 7}}).a})),_=Object.getOwnPropertyDescriptor,E={f:o?_:function(e,t){if(e=d(e),t=y(t,!0),S)try{return _(e,t)}catch(e){}if(m(e,t))return c(!s.f.call(e,t),e[t])}},A=function(e){if(!v(e))throw TypeError(String(e)+\" is not an object\");return e},T=Object.defineProperty,O={f:o?T:function(e,t,n){if(A(e),t=y(t,!0),A(n),S)try{return T(e,t,n)}catch(e){}if(\"get\"in n||\"set\"in n)throw TypeError(\"Accessors not supported\");return\"value\"in n&&(e[t]=n.value),e}},R=o?function(e,t,n){return O.f(e,t,c(1,n))}:function(e,t,n){return e[t]=n,e},j=function(e,t){try{R(r,e,t)}catch(n){r[e]=t}return t},z=r[\"__core-js_shared__\"]||j(\"__core-js_shared__\",{}),$=Function.toString;\"function\"!=typeof z.inspectSource&&(z.inspectSource=function(e){return $.call(e)});var P,I,C,L=z.inspectSource,M=r.WeakMap,N=\"function\"==typeof M&&/native code/.test(L(M)),q=t((function(e){(e.exports=function(e,t){return z[e]||(z[e]=void 0!==t?t:{})})(\"versions\",[]).push({version:\"3.6.5\",mode:\"global\",copyright:\"© 2020 Denis Pushkarev (zloirock.ru)\"})})),D=0,U=Math.random(),Z=function(e){return\"Symbol(\"+String(void 0===e?\"\":e)+\")_\"+(++D+U).toString(36)},F=q(\"keys\"),G=function(e){return F[e]||(F[e]=Z(e))},H={},W=r.WeakMap;if(N){var B=new W,V=B.get,K=B.has,X=B.set;P=function(e,t){return X.call(B,e,t),t},I=function(e){return V.call(B,e)||{}},C=function(e){return K.call(B,e)}}else{var Y=G(\"state\");H[Y]=!0,P=function(e,t){return R(e,Y,t),t},I=function(e){return m(e,Y)?e[Y]:{}},C=function(e){return m(e,Y)}}var J,Q,ee={set:P,get:I,has:C,enforce:function(e){return C(e)?I(e):P(e,{})},getterFor:function(e){return function(t){var n;if(!v(t)||(n=I(t)).type!==e)throw TypeError(\"Incompatible receiver, \"+e+\" required\");return n}}},te=t((function(e){var t=ee.get,n=ee.enforce,i=String(String).split(\"String\");(e.exports=function(e,t,o,a){var l=!!a&&!!a.unsafe,s=!!a&&!!a.enumerable,c=!!a&&!!a.noTargetGet;\"function\"==typeof o&&(\"string\"!=typeof t||m(o,\"name\")||R(o,\"name\",t),n(o).source=i.join(\"string\"==typeof t?t:\"\")),e!==r?(l?!c&&e[t]&&(s=!0):delete e[t],s?e[t]=o:R(e,t,o)):s?e[t]=o:j(t,o)})(Function.prototype,\"toString\",(function(){return\"function\"==typeof this&&t(this).source||L(this)}))})),ne=r,re=function(e){return\"function\"==typeof e?e:void 0},ie=function(e,t){return arguments.length<2?re(ne[e])||re(r[e]):ne[e]&&ne[e][t]||r[e]&&r[e][t]},oe=Math.ceil,ae=Math.floor,le=function(e){return isNaN(e=+e)?0:(e>0?ae:oe)(e)},se=Math.min,ce=function(e){return e>0?se(le(e),9007199254740991):0},ue=Math.max,fe=Math.min,he=function(e,t){var n=le(e);return n<0?ue(n+t,0):fe(n,t)},pe=function(e){return function(t,n,r){var i,o=d(t),a=ce(o.length),l=he(r,a);if(e&&n!=n){for(;a>l;)if((i=o[l++])!=i)return!0}else for(;a>l;l++)if((e||l in o)&&o[l]===n)return e||l||0;return!e&&-1}},ge={includes:pe(!0),indexOf:pe(!1)},de=ge.indexOf,ve=function(e,t){var n,r=d(e),i=0,o=[];for(n in r)!m(H,n)&&m(r,n)&&o.push(n);for(;t.length>i;)m(r,n=t[i++])&&(~de(o,n)||o.push(n));return o},ye=[\"constructor\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"toLocaleString\",\"toString\",\"valueOf\"],be=ye.concat(\"length\",\"prototype\"),me={f:Object.getOwnPropertyNames||function(e){return ve(e,be)}},ke={f:Object.getOwnPropertySymbols},xe=ie(\"Reflect\",\"ownKeys\")||function(e){var t=me.f(A(e)),n=ke.f;return n?t.concat(n(e)):t},we=function(e,t){for(var n=xe(t),r=O.f,i=E.f,o=0;o<n.length;o++){var a=n[o];m(e,a)||r(e,a,i(t,a))}},Se=/#|\\.prototype\\./,_e=function(e,t){var n=Ae[Ee(e)];return n==Oe||n!=Te&&(\"function\"==typeof t?i(t):!!t)},Ee=_e.normalize=function(e){return String(e).replace(Se,\".\").toLowerCase()},Ae=_e.data={},Te=_e.NATIVE=\"N\",Oe=_e.POLYFILL=\"P\",Re=_e,je=E.f,ze=function(e,t){var n,i,o,a,l,s=e.target,c=e.global,u=e.stat;if(n=c?r:u?r[s]||j(s,{}):(r[s]||{}).prototype)for(i in t){if(a=t[i],o=e.noTargetGet?(l=je(n,i))&&l.value:n[i],!Re(c?i:s+(u?\".\":\"#\")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;we(a,o)}(e.sham||o&&o.sham)&&R(a,\"sham\",!0),te(n,i,a,e)}},$e=Array.isArray||function(e){return\"Array\"==f(e)},Pe=function(e){return Object(g(e))},Ie=function(e,t,n){var r=y(t);r in e?O.f(e,r,c(0,n)):e[r]=n},Ce=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),Le=Ce&&!Symbol.sham&&\"symbol\"==typeof Symbol.iterator,Me=q(\"wks\"),Ne=r.Symbol,qe=Le?Ne:Ne&&Ne.withoutSetter||Z,De=function(e){return m(Me,e)||(Ce&&m(Ne,e)?Me[e]=Ne[e]:Me[e]=qe(\"Symbol.\"+e)),Me[e]},Ue=De(\"species\"),Ze=function(e,t){var n;return $e(e)&&(\"function\"!=typeof(n=e.constructor)||n!==Array&&!$e(n.prototype)?v(n)&&null===(n=n[Ue])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)},Fe=ie(\"navigator\",\"userAgent\")||\"\",Ge=r.process,He=Ge&&Ge.versions,We=He&&He.v8;We?Q=(J=We.split(\".\"))[0]+J[1]:Fe&&(!(J=Fe.match(/Edge\\/(\\d+)/))||J[1]>=74)&&(J=Fe.match(/Chrome\\/(\\d+)/))&&(Q=J[1]);var Be=Q&&+Q,Ve=De(\"species\"),Ke=function(e){return Be>=51||!i((function(){var t=[];return(t.constructor={})[Ve]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},Xe=De(\"isConcatSpreadable\"),Ye=Be>=51||!i((function(){var e=[];return e[Xe]=!1,e.concat()[0]!==e})),Je=Ke(\"concat\"),Qe=function(e){if(!v(e))return!1;var t=e[Xe];return void 0!==t?!!t:$e(e)};ze({target:\"Array\",proto:!0,forced:!Ye||!Je},{concat:function(e){var t,n,r,i,o,a=Pe(this),l=Ze(a,0),s=0;for(t=-1,r=arguments.length;t<r;t++)if(Qe(o=-1===t?a:arguments[t])){if(s+(i=ce(o.length))>9007199254740991)throw TypeError(\"Maximum allowed index exceeded\");for(n=0;n<i;n++,s++)n in o&&Ie(l,s,o[n])}else{if(s>=9007199254740991)throw TypeError(\"Maximum allowed index exceeded\");Ie(l,s++,o)}return l.length=s,l}});var et=function(e){if(\"function\"!=typeof e)throw TypeError(String(e)+\" is not a function\");return e},tt=function(e,t,n){if(et(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}},nt=[].push,rt=function(e){var t=1==e,n=2==e,r=3==e,i=4==e,o=6==e,a=5==e||o;return function(l,s,c,u){for(var f,h,g=Pe(l),d=p(g),v=tt(s,c,3),y=ce(d.length),b=0,m=u||Ze,k=t?m(l,y):n?m(l,0):void 0;y>b;b++)if((a||b in d)&&(h=v(f=d[b],b,g),e))if(t)k[b]=h;else if(h)switch(e){case 3:return!0;case 5:return f;case 6:return b;case 2:nt.call(k,f)}else if(i)return!1;return o?-1:r||i?i:k}},it={forEach:rt(0),map:rt(1),filter:rt(2),some:rt(3),every:rt(4),find:rt(5),findIndex:rt(6)},ot=function(e,t){var n=[][e];return!!n&&i((function(){n.call(null,t||function(){throw 1},1)}))},at=Object.defineProperty,lt={},st=function(e){throw e},ct=function(e,t){if(m(lt,e))return lt[e];t||(t={});var n=[][e],r=!!m(t,\"ACCESSORS\")&&t.ACCESSORS,a=m(t,0)?t[0]:st,l=m(t,1)?t[1]:void 0;return lt[e]=!!n&&!i((function(){if(r&&!o)return!0;var e={length:-1};r?at(e,1,{enumerable:!0,get:st}):e[1]=1,n.call(e,a,l)}))},ut=it.forEach,ft=ot(\"forEach\"),ht=ct(\"forEach\"),pt=ft&&ht?[].forEach:function(e){return ut(this,e,arguments.length>1?arguments[1]:void 0)};ze({target:\"Array\",proto:!0,forced:[].forEach!=pt},{forEach:pt});var gt,dt=Object.keys||function(e){return ve(e,ye)},vt=o?Object.defineProperties:function(e,t){A(e);for(var n,r=dt(t),i=r.length,o=0;i>o;)O.f(e,n=r[o++],t[n]);return e},yt=ie(\"document\",\"documentElement\"),bt=G(\"IE_PROTO\"),mt=function(){},kt=function(e){return\"<script>\"+e+\"<\\/script>\"},xt=function(){try{gt=document.domain&&new ActiveXObject(\"htmlfile\")}catch(e){}var e,t;xt=gt?function(e){e.write(kt(\"\")),e.close();var t=e.parentWindow.Object;return e=null,t}(gt):((t=w(\"iframe\")).style.display=\"none\",yt.appendChild(t),t.src=String(\"javascript:\"),(e=t.contentWindow.document).open(),e.write(kt(\"document.F=Object\")),e.close(),e.F);for(var n=ye.length;n--;)delete xt.prototype[ye[n]];return xt()};H[bt]=!0;var wt=Object.create||function(e,t){var n;return null!==e?(mt.prototype=A(e),n=new mt,mt.prototype=null,n[bt]=e):n=xt(),void 0===t?n:vt(n,t)},St=De(\"unscopables\"),_t=Array.prototype;null==_t[St]&&O.f(_t,St,{configurable:!0,value:wt(null)});var Et,At,Tt,Ot=function(e){_t[St][e]=!0},Rt={},jt=!i((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})),zt=G(\"IE_PROTO\"),$t=Object.prototype,Pt=jt?Object.getPrototypeOf:function(e){return e=Pe(e),m(e,zt)?e[zt]:\"function\"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?$t:null},It=De(\"iterator\"),Ct=!1;[].keys&&(\"next\"in(Tt=[].keys())?(At=Pt(Pt(Tt)))!==Object.prototype&&(Et=At):Ct=!0),null==Et&&(Et={}),m(Et,It)||R(Et,It,(function(){return this}));var Lt={IteratorPrototype:Et,BUGGY_SAFARI_ITERATORS:Ct},Mt=O.f,Nt=De(\"toStringTag\"),qt=function(e,t,n){e&&!m(e=n?e:e.prototype,Nt)&&Mt(e,Nt,{configurable:!0,value:t})},Dt=Lt.IteratorPrototype,Ut=function(){return this},Zt=Object.setPrototypeOf||(\"__proto__\"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,\"__proto__\").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,r){return A(n),function(e){if(!v(e)&&null!==e)throw TypeError(\"Can't set \"+String(e)+\" as a prototype\")}(r),t?e.call(n,r):n.__proto__=r,n}}():void 0),Ft=Lt.IteratorPrototype,Gt=Lt.BUGGY_SAFARI_ITERATORS,Ht=De(\"iterator\"),Wt=function(){return this},Bt=function(e,t,n,r,i,o,a){!function(e,t,n){var r=t+\" Iterator\";e.prototype=wt(Dt,{next:c(1,n)}),qt(e,r,!1),Rt[r]=Ut}(n,t,r);var l,s,u,f=function(e){if(e===i&&v)return v;if(!Gt&&e in g)return g[e];switch(e){case\"keys\":case\"values\":case\"entries\":return function(){return new n(this,e)}}return function(){return new n(this)}},h=t+\" Iterator\",p=!1,g=e.prototype,d=g[Ht]||g[\"@@iterator\"]||i&&g[i],v=!Gt&&d||f(i),y=\"Array\"==t&&g.entries||d;if(y&&(l=Pt(y.call(new e)),Ft!==Object.prototype&&l.next&&(Pt(l)!==Ft&&(Zt?Zt(l,Ft):\"function\"!=typeof l[Ht]&&R(l,Ht,Wt)),qt(l,h,!0))),\"values\"==i&&d&&\"values\"!==d.name&&(p=!0,v=function(){return d.call(this)}),g[Ht]!==v&&R(g,Ht,v),Rt[t]=v,i)if(s={values:f(\"values\"),keys:o?v:f(\"keys\"),entries:f(\"entries\")},a)for(u in s)(Gt||p||!(u in g))&&te(g,u,s[u]);else ze({target:t,proto:!0,forced:Gt||p},s);return s},Vt=ee.set,Kt=ee.getterFor(\"Array Iterator\"),Xt=Bt(Array,\"Array\",(function(e,t){Vt(this,{type:\"Array Iterator\",target:d(e),index:0,kind:t})}),(function(){var e=Kt(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):\"keys\"==n?{value:r,done:!1}:\"values\"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),\"values\");Rt.Arguments=Rt.Array,Ot(\"keys\"),Ot(\"values\"),Ot(\"entries\");var Yt=[].join,Jt=p!=Object,Qt=ot(\"join\",\",\");ze({target:\"Array\",proto:!0,forced:Jt||!Qt},{join:function(e){return Yt.call(d(this),void 0===e?\",\":e)}});var en=Ke(\"slice\"),tn=ct(\"slice\",{ACCESSORS:!0,0:0,1:2}),nn=De(\"species\"),rn=[].slice,on=Math.max;ze({target:\"Array\",proto:!0,forced:!en||!tn},{slice:function(e,t){var n,r,i,o=d(this),a=ce(o.length),l=he(e,a),s=he(void 0===t?a:t,a);if($e(o)&&(\"function\"!=typeof(n=o.constructor)||n!==Array&&!$e(n.prototype)?v(n)&&null===(n=n[nn])&&(n=void 0):n=void 0,n===Array||void 0===n))return rn.call(o,l,s);for(r=new(void 0===n?Array:n)(on(s-l,0)),i=0;l<s;l++,i++)l in o&&Ie(r,i,o[l]);return r.length=i,r}});var an=O.f,ln=Function.prototype,sn=ln.toString,cn=/^\\s*function ([^ (]*)/;o&&!(\"name\"in ln)&&an(ln,\"name\",{configurable:!0,get:function(){try{return sn.call(this).match(cn)[1]}catch(e){return\"\"}}});var un={};un[De(\"toStringTag\")]=\"z\";var fn=\"[object z]\"===String(un),hn=De(\"toStringTag\"),pn=\"Arguments\"==f(function(){return arguments}()),gn=fn?f:function(e){var t,n,r;return void 0===e?\"Undefined\":null===e?\"Null\":\"string\"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),hn))?n:pn?f(t):\"Object\"==(r=f(t))&&\"function\"==typeof t.callee?\"Arguments\":r},dn=fn?{}.toString:function(){return\"[object \"+gn(this)+\"]\"};fn||te(Object.prototype,\"toString\",dn,{unsafe:!0});var vn=r.Promise,yn=De(\"species\"),bn=function(e){var t=ie(e),n=O.f;o&&t&&!t[yn]&&n(t,yn,{configurable:!0,get:function(){return this}})},mn=De(\"iterator\"),kn=Array.prototype,xn=De(\"iterator\"),wn=function(e,t,n,r){try{return r?t(A(n)[0],n[1]):t(n)}catch(t){var i=e.return;throw void 0!==i&&A(i.call(e)),t}},Sn=t((function(e){var t=function(e,t){this.stopped=e,this.result=t};(e.exports=function(e,n,r,i,o){var a,l,s,c,u,f,h,p,g=tt(n,r,i?2:1);if(o)a=e;else{if(\"function\"!=typeof(l=function(e){if(null!=e)return e[xn]||e[\"@@iterator\"]||Rt[gn(e)]}(e)))throw TypeError(\"Target is not iterable\");if(void 0!==(p=l)&&(Rt.Array===p||kn[mn]===p)){for(s=0,c=ce(e.length);c>s;s++)if((u=i?g(A(h=e[s])[0],h[1]):g(e[s]))&&u instanceof t)return u;return new t(!1)}a=l.call(e)}for(f=a.next;!(h=f.call(a)).done;)if(\"object\"==typeof(u=wn(a,g,h.value,i))&&u&&u instanceof t)return u;return new t(!1)}).stop=function(e){return new t(!0,e)}})),_n=De(\"iterator\"),En=!1;try{var An=0,Tn={next:function(){return{done:!!An++}},return:function(){En=!0}};Tn[_n]=function(){return this},Array.from(Tn,(function(){throw 2}))}catch(e){}var On,Rn,jn,zn=De(\"species\"),$n=function(e,t){var n,r=A(e).constructor;return void 0===r||null==(n=A(r)[zn])?t:et(n)},Pn=/(iphone|ipod|ipad).*applewebkit/i.test(Fe),In=r.location,Cn=r.setImmediate,Ln=r.clearImmediate,Mn=r.process,Nn=r.MessageChannel,qn=r.Dispatch,Dn=0,Un={},Zn=function(e){if(Un.hasOwnProperty(e)){var t=Un[e];delete Un[e],t()}},Fn=function(e){return function(){Zn(e)}},Gn=function(e){Zn(e.data)},Hn=function(e){r.postMessage(e+\"\",In.protocol+\"//\"+In.host)};Cn&&Ln||(Cn=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return Un[++Dn]=function(){(\"function\"==typeof e?e:Function(e)).apply(void 0,t)},On(Dn),Dn},Ln=function(e){delete Un[e]},\"process\"==f(Mn)?On=function(e){Mn.nextTick(Fn(e))}:qn&&qn.now?On=function(e){qn.now(Fn(e))}:Nn&&!Pn?(jn=(Rn=new Nn).port2,Rn.port1.onmessage=Gn,On=tt(jn.postMessage,jn,1)):!r.addEventListener||\"function\"!=typeof postMessage||r.importScripts||i(Hn)||\"file:\"===In.protocol?On=\"onreadystatechange\"in w(\"script\")?function(e){yt.appendChild(w(\"script\")).onreadystatechange=function(){yt.removeChild(this),Zn(e)}}:function(e){setTimeout(Fn(e),0)}:(On=Hn,r.addEventListener(\"message\",Gn,!1)));var Wn,Bn,Vn,Kn,Xn,Yn,Jn,Qn,er={set:Cn,clear:Ln},tr=E.f,nr=er.set,rr=r.MutationObserver||r.WebKitMutationObserver,ir=r.process,or=r.Promise,ar=\"process\"==f(ir),lr=tr(r,\"queueMicrotask\"),sr=lr&&lr.value;sr||(Wn=function(){var e,t;for(ar&&(e=ir.domain)&&e.exit();Bn;){t=Bn.fn,Bn=Bn.next;try{t()}catch(e){throw Bn?Kn():Vn=void 0,e}}Vn=void 0,e&&e.enter()},ar?Kn=function(){ir.nextTick(Wn)}:rr&&!Pn?(Xn=!0,Yn=document.createTextNode(\"\"),new rr(Wn).observe(Yn,{characterData:!0}),Kn=function(){Yn.data=Xn=!Xn}):or&&or.resolve?(Jn=or.resolve(void 0),Qn=Jn.then,Kn=function(){Qn.call(Jn,Wn)}):Kn=function(){nr.call(r,Wn)});var cr,ur,fr,hr,pr=sr||function(e){var t={fn:e,next:void 0};Vn&&(Vn.next=t),Bn||(Bn=t,Kn()),Vn=t},gr=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError(\"Bad Promise constructor\");t=e,n=r})),this.resolve=et(t),this.reject=et(n)},dr={f:function(e){return new gr(e)}},vr=function(e,t){if(A(e),v(t)&&t.constructor===e)return t;var n=dr.f(e);return(0,n.resolve)(t),n.promise},yr=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},br=er.set,mr=De(\"species\"),kr=\"Promise\",xr=ee.get,wr=ee.set,Sr=ee.getterFor(kr),_r=vn,Er=r.TypeError,Ar=r.document,Tr=r.process,Or=ie(\"fetch\"),Rr=dr.f,jr=Rr,zr=\"process\"==f(Tr),$r=!!(Ar&&Ar.createEvent&&r.dispatchEvent),Pr=Re(kr,(function(){if(!(L(_r)!==String(_r))){if(66===Be)return!0;if(!zr&&\"function\"!=typeof PromiseRejectionEvent)return!0}if(Be>=51&&/native code/.test(_r))return!1;var e=_r.resolve(1),t=function(e){e((function(){}),(function(){}))};return(e.constructor={})[mr]=t,!(e.then((function(){}))instanceof t)})),Ir=Pr||!function(e,t){if(!t&&!En)return!1;var n=!1;try{var r={};r[_n]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(e){}return n}((function(e){_r.all(e).catch((function(){}))})),Cr=function(e){var t;return!(!v(e)||\"function\"!=typeof(t=e.then))&&t},Lr=function(e,t,n){if(!t.notified){t.notified=!0;var r=t.reactions;pr((function(){for(var i=t.value,o=1==t.state,a=0;r.length>a;){var l,s,c,u=r[a++],f=o?u.ok:u.fail,h=u.resolve,p=u.reject,g=u.domain;try{f?(o||(2===t.rejection&&Dr(e,t),t.rejection=1),!0===f?l=i:(g&&g.enter(),l=f(i),g&&(g.exit(),c=!0)),l===u.promise?p(Er(\"Promise-chain cycle\")):(s=Cr(l))?s.call(l,h,p):h(l)):p(i)}catch(e){g&&!c&&g.exit(),p(e)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&Nr(e,t)}))}},Mr=function(e,t,n){var i,o;$r?((i=Ar.createEvent(\"Event\")).promise=t,i.reason=n,i.initEvent(e,!1,!0),r.dispatchEvent(i)):i={promise:t,reason:n},(o=r[\"on\"+e])?o(i):\"unhandledrejection\"===e&&function(e,t){var n=r.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}(\"Unhandled promise rejection\",n)},Nr=function(e,t){br.call(r,(function(){var n,r=t.value;if(qr(t)&&(n=yr((function(){zr?Tr.emit(\"unhandledRejection\",r,e):Mr(\"unhandledrejection\",e,r)})),t.rejection=zr||qr(t)?2:1,n.error))throw n.value}))},qr=function(e){return 1!==e.rejection&&!e.parent},Dr=function(e,t){br.call(r,(function(){zr?Tr.emit(\"rejectionHandled\",e):Mr(\"rejectionhandled\",e,t.value)}))},Ur=function(e,t,n,r){return function(i){e(t,n,i,r)}},Zr=function(e,t,n,r){t.done||(t.done=!0,r&&(t=r),t.value=n,t.state=2,Lr(e,t,!0))},Fr=function(e,t,n,r){if(!t.done){t.done=!0,r&&(t=r);try{if(e===n)throw Er(\"Promise can't be resolved itself\");var i=Cr(n);i?pr((function(){var r={done:!1};try{i.call(n,Ur(Fr,e,r,t),Ur(Zr,e,r,t))}catch(n){Zr(e,r,n,t)}})):(t.value=n,t.state=1,Lr(e,t,!1))}catch(n){Zr(e,{done:!1},n,t)}}};Pr&&(_r=function(e){!function(e,t,n){if(!(e instanceof t))throw TypeError(\"Incorrect \"+(n?n+\" \":\"\")+\"invocation\")}(this,_r,kr),et(e),cr.call(this);var t=xr(this);try{e(Ur(Fr,this,t),Ur(Zr,this,t))}catch(e){Zr(this,t,e)}},(cr=function(e){wr(this,{type:kr,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(e,t,n){for(var r in t)te(e,r,t[r],n);return e}(_r.prototype,{then:function(e,t){var n=Sr(this),r=Rr($n(this,_r));return r.ok=\"function\"!=typeof e||e,r.fail=\"function\"==typeof t&&t,r.domain=zr?Tr.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&Lr(this,n,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),ur=function(){var e=new cr,t=xr(e);this.promise=e,this.resolve=Ur(Fr,e,t),this.reject=Ur(Zr,e,t)},dr.f=Rr=function(e){return e===_r||e===fr?new ur(e):jr(e)},\"function\"==typeof vn&&(hr=vn.prototype.then,te(vn.prototype,\"then\",(function(e,t){var n=this;return new _r((function(e,t){hr.call(n,e,t)})).then(e,t)}),{unsafe:!0}),\"function\"==typeof Or&&ze({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return vr(_r,Or.apply(r,arguments))}}))),ze({global:!0,wrap:!0,forced:Pr},{Promise:_r}),qt(_r,kr,!1),bn(kr),fr=ie(kr),ze({target:kr,stat:!0,forced:Pr},{reject:function(e){var t=Rr(this);return t.reject.call(void 0,e),t.promise}}),ze({target:kr,stat:!0,forced:Pr},{resolve:function(e){return vr(this,e)}}),ze({target:kr,stat:!0,forced:Ir},{all:function(e){var t=this,n=Rr(t),r=n.resolve,i=n.reject,o=yr((function(){var n=et(t.resolve),o=[],a=0,l=1;Sn(e,(function(e){var s=a++,c=!1;o.push(void 0),l++,n.call(t,e).then((function(e){c||(c=!0,o[s]=e,--l||r(o))}),i)})),--l||r(o)}));return o.error&&i(o.value),n.promise},race:function(e){var t=this,n=Rr(t),r=n.reject,i=yr((function(){var i=et(t.resolve);Sn(e,(function(e){i.call(t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}});var Gr=De(\"match\"),Hr=function(e){var t;return v(e)&&(void 0!==(t=e[Gr])?!!t:\"RegExp\"==f(e))},Wr=function(){var e=A(this),t=\"\";return e.global&&(t+=\"g\"),e.ignoreCase&&(t+=\"i\"),e.multiline&&(t+=\"m\"),e.dotAll&&(t+=\"s\"),e.unicode&&(t+=\"u\"),e.sticky&&(t+=\"y\"),t};function Br(e,t){return RegExp(e,t)}var Vr={UNSUPPORTED_Y:i((function(){var e=Br(\"a\",\"y\");return e.lastIndex=2,null!=e.exec(\"abcd\")})),BROKEN_CARET:i((function(){var e=Br(\"^r\",\"gy\");return e.lastIndex=2,null!=e.exec(\"str\")}))},Kr=O.f,Xr=me.f,Yr=ee.set,Jr=De(\"match\"),Qr=r.RegExp,ei=Qr.prototype,ti=/a/g,ni=/a/g,ri=new Qr(ti)!==ti,ii=Vr.UNSUPPORTED_Y;if(o&&Re(\"RegExp\",!ri||ii||i((function(){return ni[Jr]=!1,Qr(ti)!=ti||Qr(ni)==ni||\"/a/i\"!=Qr(ti,\"i\")})))){for(var oi=function(e,t){var n,r=this instanceof oi,i=Hr(e),o=void 0===t;if(!r&&i&&e.constructor===oi&&o)return e;ri?i&&!o&&(e=e.source):e instanceof oi&&(o&&(t=Wr.call(e)),e=e.source),ii&&(n=!!t&&t.indexOf(\"y\")>-1)&&(t=t.replace(/y/g,\"\"));var a,l,s,c,u,f=(a=ri?new Qr(e,t):Qr(e,t),l=r?this:ei,s=oi,Zt&&\"function\"==typeof(c=l.constructor)&&c!==s&&v(u=c.prototype)&&u!==s.prototype&&Zt(a,u),a);return ii&&n&&Yr(f,{sticky:n}),f},ai=function(e){e in oi||Kr(oi,e,{configurable:!0,get:function(){return Qr[e]},set:function(t){Qr[e]=t}})},li=Xr(Qr),si=0;li.length>si;)ai(li[si++]);ei.constructor=oi,oi.prototype=ei,te(r,\"RegExp\",oi)}bn(\"RegExp\");var ci=RegExp.prototype.exec,ui=String.prototype.replace,fi=ci,hi=function(){var e=/a/,t=/b*/g;return ci.call(e,\"a\"),ci.call(t,\"a\"),0!==e.lastIndex||0!==t.lastIndex}(),pi=Vr.UNSUPPORTED_Y||Vr.BROKEN_CARET,gi=void 0!==/()??/.exec(\"\")[1];(hi||gi||pi)&&(fi=function(e){var t,n,r,i,o=this,a=pi&&o.sticky,l=Wr.call(o),s=o.source,c=0,u=e;return a&&(-1===(l=l.replace(\"y\",\"\")).indexOf(\"g\")&&(l+=\"g\"),u=String(e).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&\"\\n\"!==e[o.lastIndex-1])&&(s=\"(?: \"+s+\")\",u=\" \"+u,c++),n=new RegExp(\"^(?:\"+s+\")\",l)),gi&&(n=new RegExp(\"^\"+s+\"$(?!\\\\s)\",l)),hi&&(t=o.lastIndex),r=ci.call(a?n:o,u),a?r?(r.input=r.input.slice(c),r[0]=r[0].slice(c),r.index=o.lastIndex,o.lastIndex+=r[0].length):o.lastIndex=0:hi&&r&&(o.lastIndex=o.global?r.index+r[0].length:t),gi&&r&&r.length>1&&ui.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r});var di=fi;ze({target:\"RegExp\",proto:!0,forced:/./.exec!==di},{exec:di});var vi=RegExp.prototype,yi=vi.toString,bi=i((function(){return\"/a/b\"!=yi.call({source:\"a\",flags:\"b\"})})),mi=\"toString\"!=yi.name;(bi||mi)&&te(RegExp.prototype,\"toString\",(function(){var e=A(this),t=String(e.source),n=e.flags;return\"/\"+t+\"/\"+String(void 0===n&&e instanceof RegExp&&!(\"flags\"in vi)?Wr.call(e):n)}),{unsafe:!0});var ki=function(e){return function(t,n){var r,i,o=String(g(t)),a=le(n),l=o.length;return a<0||a>=l?e?\"\":void 0:(r=o.charCodeAt(a))<55296||r>56319||a+1===l||(i=o.charCodeAt(a+1))<56320||i>57343?e?o.charAt(a):r:e?o.slice(a,a+2):i-56320+(r-55296<<10)+65536}},xi={codeAt:ki(!1),charAt:ki(!0)},wi=xi.charAt,Si=ee.set,_i=ee.getterFor(\"String Iterator\");Bt(String,\"String\",(function(e){Si(this,{type:\"String Iterator\",string:String(e),index:0})}),(function(){var e,t=_i(this),n=t.string,r=t.index;return r>=n.length?{value:void 0,done:!0}:(e=wi(n,r),t.index+=e.length,{value:e,done:!1})}));var Ei=De(\"species\"),Ai=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:\"7\"},e},\"7\"!==\"\".replace(e,\"$<a>\")})),Ti=\"$0\"===\"a\".replace(/./,\"$0\"),Oi=De(\"replace\"),Ri=!!/./[Oi]&&\"\"===/./[Oi](\"a\",\"$0\"),ji=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n=\"ab\".split(e);return 2!==n.length||\"a\"!==n[0]||\"b\"!==n[1]})),zi=function(e,t,n,r){var o=De(e),a=!i((function(){var t={};return t[o]=function(){return 7},7!=\"\"[e](t)})),l=a&&!i((function(){var t=!1,n=/a/;return\"split\"===e&&((n={}).constructor={},n.constructor[Ei]=function(){return n},n.flags=\"\",n[o]=/./[o]),n.exec=function(){return t=!0,null},n[o](\"\"),!t}));if(!a||!l||\"replace\"===e&&(!Ai||!Ti||Ri)||\"split\"===e&&!ji){var s=/./[o],c=n(o,\"\"[e],(function(e,t,n,r,i){return t.exec===di?a&&!i?{done:!0,value:s.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:Ti,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Ri}),u=c[0],f=c[1];te(String.prototype,e,u),te(RegExp.prototype,o,2==t?function(e,t){return f.call(e,this,t)}:function(e){return f.call(e,this)})}r&&R(RegExp.prototype[o],\"sham\",!0)},$i=xi.charAt,Pi=function(e,t,n){return t+(n?$i(e,t).length:1)},Ii=function(e,t){var n=e.exec;if(\"function\"==typeof n){var r=n.call(e,t);if(\"object\"!=typeof r)throw TypeError(\"RegExp exec method returned something other than an Object or null\");return r}if(\"RegExp\"!==f(e))throw TypeError(\"RegExp#exec called on incompatible receiver\");return di.call(e,t)};zi(\"match\",1,(function(e,t,n){return[function(t){var n=g(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var i=A(e),o=String(this);if(!i.global)return Ii(i,o);var a=i.unicode;i.lastIndex=0;for(var l,s=[],c=0;null!==(l=Ii(i,o));){var u=String(l[0]);s[c]=u,\"\"===u&&(i.lastIndex=Pi(o,ce(i.lastIndex),a)),c++}return 0===c?null:s}]}));var Ci=Math.max,Li=Math.min,Mi=Math.floor,Ni=/\\$([$&'`]|\\d\\d?|<[^>]*>)/g,qi=/\\$([$&'`]|\\d\\d?)/g;zi(\"replace\",2,(function(e,t,n,r){var i=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,o=r.REPLACE_KEEPS_$0,a=i?\"$\":\"$0\";return[function(n,r){var i=g(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):t.call(String(i),n,r)},function(e,r){if(!i&&o||\"string\"==typeof r&&-1===r.indexOf(a)){var s=n(t,e,this,r);if(s.done)return s.value}var c=A(e),u=String(this),f=\"function\"==typeof r;f||(r=String(r));var h=c.global;if(h){var p=c.unicode;c.lastIndex=0}for(var g=[];;){var d=Ii(c,u);if(null===d)break;if(g.push(d),!h)break;\"\"===String(d[0])&&(c.lastIndex=Pi(u,ce(c.lastIndex),p))}for(var v,y=\"\",b=0,m=0;m<g.length;m++){d=g[m];for(var k=String(d[0]),x=Ci(Li(le(d.index),u.length),0),w=[],S=1;S<d.length;S++)w.push(void 0===(v=d[S])?v:String(v));var _=d.groups;if(f){var E=[k].concat(w,x,u);void 0!==_&&E.push(_);var T=String(r.apply(void 0,E))}else T=l(k,u,x,w,_,r);x>=b&&(y+=u.slice(b,x)+T,b=x+k.length)}return y+u.slice(b)}];function l(e,n,r,i,o,a){var l=r+e.length,s=i.length,c=qi;return void 0!==o&&(o=Pe(o),c=Ni),t.call(a,c,(function(t,a){var c;switch(a.charAt(0)){case\"$\":return\"$\";case\"&\":return e;case\"`\":return n.slice(0,r);case\"'\":return n.slice(l);case\"<\":c=o[a.slice(1,-1)];break;default:var u=+a;if(0===u)return t;if(u>s){var f=Mi(u/10);return 0===f?t:f<=s?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):t}c=i[u-1]}return void 0===c?\"\":c}))}}));var Di=[].push,Ui=Math.min,Zi=!i((function(){return!RegExp(4294967295,\"y\")}));zi(\"split\",2,(function(e,t,n){var r;return r=\"c\"==\"abbc\".split(/(b)*/)[1]||4!=\"test\".split(/(?:)/,-1).length||2!=\"ab\".split(/(?:ab)*/).length||4!=\".\".split(/(.?)(.?)/).length||\".\".split(/()()/).length>1||\"\".split(/.?/).length?function(e,n){var r=String(g(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!Hr(e))return t.call(r,e,i);for(var o,a,l,s=[],c=(e.ignoreCase?\"i\":\"\")+(e.multiline?\"m\":\"\")+(e.unicode?\"u\":\"\")+(e.sticky?\"y\":\"\"),u=0,f=new RegExp(e.source,c+\"g\");(o=di.call(f,r))&&!((a=f.lastIndex)>u&&(s.push(r.slice(u,o.index)),o.length>1&&o.index<r.length&&Di.apply(s,o.slice(1)),l=o[0].length,u=a,s.length>=i));)f.lastIndex===o.index&&f.lastIndex++;return u===r.length?!l&&f.test(\"\")||s.push(\"\"):s.push(r.slice(u)),s.length>i?s.slice(0,i):s}:\"0\".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=g(this),o=null==t?void 0:t[e];return void 0!==o?o.call(t,i,n):r.call(String(i),t,n)},function(e,i){var o=n(r,e,this,i,r!==t);if(o.done)return o.value;var a=A(e),l=String(this),s=$n(a,RegExp),c=a.unicode,u=(a.ignoreCase?\"i\":\"\")+(a.multiline?\"m\":\"\")+(a.unicode?\"u\":\"\")+(Zi?\"y\":\"g\"),f=new s(Zi?a:\"^(?:\"+a.source+\")\",u),h=void 0===i?4294967295:i>>>0;if(0===h)return[];if(0===l.length)return null===Ii(f,l)?[l]:[];for(var p=0,g=0,d=[];g<l.length;){f.lastIndex=Zi?g:0;var v,y=Ii(f,Zi?l:l.slice(g));if(null===y||(v=Ui(ce(f.lastIndex+(Zi?0:g)),l.length))===p)g=Pi(l,g,c);else{if(d.push(l.slice(p,g)),d.length===h)return d;for(var b=1;b<=y.length-1;b++)if(d.push(y[b]),d.length===h)return d;g=p=v}}return d.push(l.slice(p)),d}]}),!Zi);var Fi=\"\\t\\n\\v\\f\\r                　\\u2028\\u2029\\ufeff\",Gi=\"[\"+Fi+\"]\",Hi=RegExp(\"^\"+Gi+Gi+\"*\"),Wi=RegExp(Gi+Gi+\"*$\"),Bi=function(e){return function(t){var n=String(g(t));return 1&e&&(n=n.replace(Hi,\"\")),2&e&&(n=n.replace(Wi,\"\")),n}},Vi={start:Bi(1),end:Bi(2),trim:Bi(3)},Ki=function(e){return i((function(){return!!Fi[e]()||\"​᠎\"!=\"​᠎\"[e]()||Fi[e].name!==e}))},Xi=Vi.trim;ze({target:\"String\",proto:!0,forced:Ki(\"trim\")},{trim:function(){return Xi(this)}});var Yi={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};for(var Ji in Yi){var Qi=r[Ji],eo=Qi&&Qi.prototype;if(eo&&eo.forEach!==pt)try{R(eo,\"forEach\",pt)}catch(e){eo.forEach=pt}}var to=De(\"iterator\"),no=De(\"toStringTag\"),ro=Xt.values;for(var io in Yi){var oo=r[io],ao=oo&&oo.prototype;if(ao){if(ao[to]!==ro)try{R(ao,to,ro)}catch(e){ao[to]=ro}if(ao[no]||R(ao,no,io),Yi[io])for(var lo in Xt)if(ao[lo]!==Xt[lo])try{R(ao,lo,Xt[lo])}catch(e){ao[lo]=Xt[lo]}}}function so(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function co(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function uo(e,t,n){return t&&co(e.prototype,t),n&&co(e,n),e}function fo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ho(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function po(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(\"undefined\"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(e,t)||go(e,t)||function(){throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}()}function go(e,t){if(e){if(\"string\"==typeof e)return vo(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return\"Object\"===n&&e.constructor&&(n=e.constructor.name),\"Map\"===n||\"Set\"===n?Array.from(e):\"Arguments\"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?vo(e,t):void 0}}function vo(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yo(e){if(\"undefined\"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=go(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}var r,i,o=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(a)throw i}}}}var bo=/\"/g;ze({target:\"String\",proto:!0,forced:function(e){return i((function(){var t=\"\"[e]('\"');return t!==t.toLowerCase()||t.split('\"').length>3}))}(\"link\")},{link:function(e){return t=\"a\",n=\"href\",r=e,i=String(g(this)),o=\"<\"+t,\"\"!==n&&(o+=\" \"+n+'=\"'+String(r).replace(bo,\"&quot;\")+'\"'),o+\">\"+i+\"</\"+t+\">\";var t,n,r,i,o}});var mo=ge.indexOf,ko=[].indexOf,xo=!!ko&&1/[1].indexOf(1,-0)<0,wo=ot(\"indexOf\"),So=ct(\"indexOf\",{ACCESSORS:!0,1:0});ze({target:\"Array\",proto:!0,forced:xo||!wo||!So},{indexOf:function(e){return xo?ko.apply(this,arguments)||0:mo(this,e,arguments.length>1?arguments[1]:void 0)}});var _o=it.map,Eo=Ke(\"map\"),Ao=ct(\"map\");ze({target:\"Array\",proto:!0,forced:!Eo||!Ao},{map:function(e){return _o(this,e,arguments.length>1?arguments[1]:void 0)}});var To,Oo=function(e){if(Hr(e))throw TypeError(\"The method doesn't accept regular expressions\");return e},Ro=De(\"match\"),jo=function(e){var t=/./;try{\"/./\"[e](t)}catch(n){try{return t[Ro]=!1,\"/./\"[e](t)}catch(e){}}return!1},zo=E.f,$o=\"\".endsWith,Po=Math.min,Io=jo(\"endsWith\"),Co=!(Io||(To=zo(String.prototype,\"endsWith\"),!To||To.writable));ze({target:\"String\",proto:!0,forced:!Co&&!Io},{endsWith:function(e){var t=String(g(this));Oo(e);var n=arguments.length>1?arguments[1]:void 0,r=ce(t.length),i=void 0===n?r:Po(ce(n),r),o=String(e);return $o?$o.call(t,o,i):t.slice(i-o.length,i)===o}});var Lo=E.f,Mo=\"\".startsWith,No=Math.min,qo=jo(\"startsWith\"),Do=!qo&&!!function(){var e=Lo(String.prototype,\"startsWith\");return e&&!e.writable}();ze({target:\"String\",proto:!0,forced:!Do&&!qo},{startsWith:function(e){var t=String(g(this));Oo(e);var n=ce(No(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return Mo?Mo.call(t,r,n):t.slice(n,n+r.length)===r}});var Uo=Vi.end,Zo=Ki(\"trimEnd\"),Fo=Zo?function(){return Uo(this)}:\"\".trimEnd;ze({target:\"String\",proto:!0,forced:Zo},{trimEnd:Fo,trimRight:Fo});var Go=t((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:\"\",highlight:null,langPrefix:\"language-\",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:\"\",highlight:null,langPrefix:\"language-\",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}})),Ho=Ke(\"splice\"),Wo=ct(\"splice\",{ACCESSORS:!0,0:0,1:2}),Bo=Math.max,Vo=Math.min;ze({target:\"Array\",proto:!0,forced:!Ho||!Wo},{splice:function(e,t){var n,r,i,o,a,l,s=Pe(this),c=ce(s.length),u=he(e,c),f=arguments.length;if(0===f?n=r=0:1===f?(n=0,r=c-u):(n=f-2,r=Vo(Bo(le(t),0),c-u)),c+n-r>9007199254740991)throw TypeError(\"Maximum allowed length exceeded\");for(i=Ze(s,r),o=0;o<r;o++)(a=u+o)in s&&Ie(i,o,s[a]);if(i.length=r,n<r){for(o=u;o<c-r;o++)l=o+n,(a=o+r)in s?s[l]=s[a]:delete s[l];for(o=c;o>c-r+n;o--)delete s[o-1]}else if(n>r)for(o=c-r;o>u;o--)l=o+n-1,(a=o+r-1)in s?s[l]=s[a]:delete s[l];for(o=0;o<n;o++)s[o+u]=arguments[o+2];return s.length=c-r+n,i}});var Ko=/[&<>\"']/,Xo=/[&<>\"']/g,Yo=/[<>\"']|&(?!#?\\w+;)/,Jo=/[<>\"']|&(?!#?\\w+;)/g,Qo={\"&\":\"&amp;\",\"<\":\"&lt;\",\">\":\"&gt;\",'\"':\"&quot;\",\"'\":\"&#39;\"},ea=function(e){return Qo[e]};var ta=/&(#(?:\\d+)|(?:#x[0-9A-Fa-f]+)|(?:\\w+));?/gi;function na(e){return e.replace(ta,(function(e,t){return\"colon\"===(t=t.toLowerCase())?\":\":\"#\"===t.charAt(0)?\"x\"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):\"\"}))}var ra=/(^|[^\\[])\\^/g;var ia=/[^\\w:]/g,oa=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;var aa={},la=/^[^:]+:\\/*[^/]*$/,sa=/^([^:]+:)[\\s\\S]*$/,ca=/^([^:]+:\\/*[^/]*)[\\s\\S]*$/;function ua(e,t){aa[\" \"+e]||(la.test(e)?aa[\" \"+e]=e+\"/\":aa[\" \"+e]=fa(e,\"/\",!0));var n=-1===(e=aa[\" \"+e]).indexOf(\":\");return\"//\"===t.substring(0,2)?n?t:e.replace(sa,\"$1\")+t:\"/\"===t.charAt(0)?n?t:e.replace(ca,\"$1\")+t:e+t}function fa(e,t,n){var r=e.length;if(0===r)return\"\";for(var i=0;i<r;){var o=e.charAt(r-i-1);if(o!==t||n){if(o===t||!n)break;i++}else i++}return e.substr(0,r-i)}var ha=function(e,t){if(t){if(Ko.test(e))return e.replace(Xo,ea)}else if(Yo.test(e))return e.replace(Jo,ea);return e},pa=na,ga=function(e,t){e=e.source||e,t=t||\"\";var n={replace:function(t,r){return r=(r=r.source||r).replace(ra,\"$1\"),e=e.replace(t,r),n},getRegex:function(){return new RegExp(e,t)}};return n},da=function(e,t,n){if(e){var r;try{r=decodeURIComponent(na(n)).replace(ia,\"\").toLowerCase()}catch(e){return null}if(0===r.indexOf(\"javascript:\")||0===r.indexOf(\"vbscript:\")||0===r.indexOf(\"data:\"))return null}t&&!oa.test(n)&&(n=ua(t,n));try{n=encodeURI(n).replace(/%25/g,\"%\")}catch(e){return null}return n},va={exec:function(){}},ya=function(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},ba=function(e,t){var n=e.replace(/\\|/g,(function(e,t,n){for(var r=!1,i=t;--i>=0&&\"\\\\\"===n[i];)r=!r;return r?\"|\":\" |\"})).split(/ \\|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(\"\");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\\\\|/g,\"|\");return n},ma=fa,ka=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,r=0,i=0;i<n;i++)if(\"\\\\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&--r<0)return i;return-1},xa=function(e){e&&e.sanitize&&!e.silent&&console.warn(\"marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options\")},wa=Go.defaults,Sa=ma,_a=ba,Ea=ha,Aa=ka;function Ta(e,t,n){var r=t.href,i=t.title?Ea(t.title):null;return\"!\"!==e[0].charAt(0)?{type:\"link\",raw:n,href:r,title:i,text:e[1]}:{type:\"image\",raw:n,text:Ea(e[1]),href:r,title:i}}var Oa=function(){function e(t){so(this,e),this.options=t||wa}return uo(e,[{key:\"space\",value:function(e){var t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:\"space\",raw:t[0]}:{raw:\"\\n\"}}},{key:\"code\",value:function(e,t){var n=this.rules.block.code.exec(e);if(n){var r=t[t.length-1];if(r&&\"paragraph\"===r.type)return{raw:n[0],text:n[0].trimRight()};var i=n[0].replace(/^ {4}/gm,\"\");return{type:\"code\",raw:n[0],codeBlockStyle:\"indented\",text:this.options.pedantic?i:Sa(i,\"\\n\")}}}},{key:\"fences\",value:function(e){var t=this.rules.block.fences.exec(e);if(t){var n=t[0],r=function(e,t){var n=e.match(/^(\\s+)(?:```)/);if(null===n)return t;var r=n[1];return t.split(\"\\n\").map((function(e){var t=e.match(/^\\s+/);return null===t?e:po(t,1)[0].length>=r.length?e.slice(r.length):e})).join(\"\\n\")}(n,t[3]||\"\");return{type:\"code\",raw:n,lang:t[2]?t[2].trim():t[2],text:r}}}},{key:\"heading\",value:function(e){var t=this.rules.block.heading.exec(e);if(t)return{type:\"heading\",raw:t[0],depth:t[1].length,text:t[2]}}},{key:\"nptable\",value:function(e){var t=this.rules.block.nptable.exec(e);if(t){var n={type:\"table\",header:_a(t[1].replace(/^ *| *\\| *$/g,\"\")),align:t[2].replace(/^ *|\\| *$/g,\"\").split(/ *\\| */),cells:t[3]?t[3].replace(/\\n$/,\"\").split(\"\\n\"):[],raw:t[0]};if(n.header.length===n.align.length){var r,i=n.align.length;for(r=0;r<i;r++)/^ *-+: *$/.test(n.align[r])?n.align[r]=\"right\":/^ *:-+: *$/.test(n.align[r])?n.align[r]=\"center\":/^ *:-+ *$/.test(n.align[r])?n.align[r]=\"left\":n.align[r]=null;for(i=n.cells.length,r=0;r<i;r++)n.cells[r]=_a(n.cells[r],n.header.length);return n}}}},{key:\"hr\",value:function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:\"hr\",raw:t[0]}}},{key:\"blockquote\",value:function(e){var t=this.rules.block.blockquote.exec(e);if(t){var n=t[0].replace(/^ *> ?/gm,\"\");return{type:\"blockquote\",raw:t[0],text:n}}}},{key:\"list\",value:function(e){var t=this.rules.block.list.exec(e);if(t){for(var n,r,i,o,a,l,s,c=t[0],u=t[2],f=u.length>1,h={type:\"list\",raw:c,ordered:f,start:f?+u:\"\",loose:!1,items:[]},p=t[0].match(this.rules.block.item),g=!1,d=p.length,v=0;v<d;v++)c=n=p[v],r=n.length,~(n=n.replace(/^ *([*+-]|\\d+\\.) */,\"\")).indexOf(\"\\n \")&&(r-=n.length,n=this.options.pedantic?n.replace(/^ {1,4}/gm,\"\"):n.replace(new RegExp(\"^ {1,\"+r+\"}\",\"gm\"),\"\")),v!==d-1&&(i=this.rules.block.bullet.exec(p[v+1])[0],(u.length>1?1===i.length:i.length>1||this.options.smartLists&&i!==u)&&(o=p.slice(v+1).join(\"\\n\"),h.raw=h.raw.substring(0,h.raw.length-o.length),v=d-1)),a=g||/\\n\\n(?!\\s*$)/.test(n),v!==d-1&&(g=\"\\n\"===n.charAt(n.length-1),a||(a=g)),a&&(h.loose=!0),s=void 0,(l=/^\\[[ xX]\\] /.test(n))&&(s=\" \"!==n[1],n=n.replace(/^\\[[ xX]\\] +/,\"\")),h.items.push({type:\"list_item\",raw:c,task:l,checked:s,loose:a,text:n});return h}}},{key:\"html\",value:function(e){var t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?\"paragraph\":\"html\",raw:t[0],pre:!this.options.sanitizer&&(\"pre\"===t[1]||\"script\"===t[1]||\"style\"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):Ea(t[0]):t[0]}}},{key:\"def\",value:function(e){var t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{tag:t[1].toLowerCase().replace(/\\s+/g,\" \"),raw:t[0],href:t[2],title:t[3]}}},{key:\"table\",value:function(e){var t=this.rules.block.table.exec(e);if(t){var n={type:\"table\",header:_a(t[1].replace(/^ *| *\\| *$/g,\"\")),align:t[2].replace(/^ *|\\| *$/g,\"\").split(/ *\\| */),cells:t[3]?t[3].replace(/\\n$/,\"\").split(\"\\n\"):[]};if(n.header.length===n.align.length){n.raw=t[0];var r,i=n.align.length;for(r=0;r<i;r++)/^ *-+: *$/.test(n.align[r])?n.align[r]=\"right\":/^ *:-+: *$/.test(n.align[r])?n.align[r]=\"center\":/^ *:-+ *$/.test(n.align[r])?n.align[r]=\"left\":n.align[r]=null;for(i=n.cells.length,r=0;r<i;r++)n.cells[r]=_a(n.cells[r].replace(/^ *\\| *| *\\| *$/g,\"\"),n.header.length);return n}}}},{key:\"lheading\",value:function(e){var t=this.rules.block.lheading.exec(e);if(t)return{type:\"heading\",raw:t[0],depth:\"=\"===t[2].charAt(0)?1:2,text:t[1]}}},{key:\"paragraph\",value:function(e){var t=this.rules.block.paragraph.exec(e);if(t)return{type:\"paragraph\",raw:t[0],text:\"\\n\"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}}},{key:\"text\",value:function(e,t){var n=this.rules.block.text.exec(e);if(n){var r=t[t.length-1];return r&&\"text\"===r.type?{raw:n[0],text:n[0]}:{type:\"text\",raw:n[0],text:n[0]}}}},{key:\"escape\",value:function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:\"escape\",raw:t[0],text:Ea(t[1])}}},{key:\"tag\",value:function(e,t,n){var r=this.rules.inline.tag.exec(e);if(r)return!t&&/^<a /i.test(r[0])?t=!0:t&&/^<\\/a>/i.test(r[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\\s|>)/i.test(r[0])?n=!0:n&&/^<\\/(pre|code|kbd|script)(\\s|>)/i.test(r[0])&&(n=!1),{type:this.options.sanitize?\"text\":\"html\",raw:r[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):Ea(r[0]):r[0]}}},{key:\"link\",value:function(e){var t=this.rules.inline.link.exec(e);if(t){var n=Aa(t[2],\"()\");if(n>-1){var r=(0===t[0].indexOf(\"!\")?5:4)+t[1].length+n;t[2]=t[2].substring(0,n),t[0]=t[0].substring(0,r).trim(),t[3]=\"\"}var i=t[2],o=\"\";if(this.options.pedantic){var a=/^([^'\"]*[^\\s])\\s+(['\"])(.*)\\2/.exec(i);a?(i=a[1],o=a[3]):o=\"\"}else o=t[3]?t[3].slice(1,-1):\"\";return Ta(t,{href:(i=i.trim().replace(/^<([\\s\\S]*)>$/,\"$1\"))?i.replace(this.rules.inline._escapes,\"$1\"):i,title:o?o.replace(this.rules.inline._escapes,\"$1\"):o},t[0])}}},{key:\"reflink\",value:function(e,t){var n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){var r=(n[2]||n[1]).replace(/\\s+/g,\" \");if(!(r=t[r.toLowerCase()])||!r.href){var i=n[0].charAt(0);return{type:\"text\",raw:i,text:i}}return Ta(n,r,n[0])}}},{key:\"strong\",value:function(e){var t=this.rules.inline.strong.exec(e);if(t)return{type:\"strong\",raw:t[0],text:t[4]||t[3]||t[2]||t[1]}}},{key:\"em\",value:function(e){var t=this.rules.inline.em.exec(e);if(t)return{type:\"em\",raw:t[0],text:t[6]||t[5]||t[4]||t[3]||t[2]||t[1]}}},{key:\"codespan\",value:function(e){var t=this.rules.inline.code.exec(e);if(t){var n=t[2].replace(/\\n/g,\" \"),r=/[^ ]/.test(n),i=n.startsWith(\" \")&&n.endsWith(\" \");return r&&i&&(n=n.substring(1,n.length-1)),n=Ea(n,!0),{type:\"codespan\",raw:t[0],text:n}}}},{key:\"br\",value:function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:\"br\",raw:t[0]}}},{key:\"del\",value:function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:\"del\",raw:t[0],text:t[1]}}},{key:\"autolink\",value:function(e,t){var n,r,i=this.rules.inline.autolink.exec(e);if(i)return r=\"@\"===i[2]?\"mailto:\"+(n=Ea(this.options.mangle?t(i[1]):i[1])):n=Ea(i[1]),{type:\"link\",raw:i[0],text:n,href:r,tokens:[{type:\"text\",raw:n,text:n}]}}},{key:\"url\",value:function(e,t){var n;if(n=this.rules.inline.url.exec(e)){var r,i;if(\"@\"===n[2])i=\"mailto:\"+(r=Ea(this.options.mangle?t(n[0]):n[0]));else{var o;do{o=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(o!==n[0]);r=Ea(n[0]),i=\"www.\"===n[1]?\"http://\"+r:r}return{type:\"link\",raw:n[0],text:r,href:i,tokens:[{type:\"text\",raw:r,text:r}]}}}},{key:\"inlineText\",value:function(e,t,n){var r,i=this.rules.inline.text.exec(e);if(i)return r=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):Ea(i[0]):i[0]:Ea(this.options.smartypants?n(i[0]):i[0]),{type:\"text\",raw:i[0],text:r}}}]),e}(),Ra=va,ja=ga,za=ya,$a={newline:/^\\n+/,code:/^( {4}[^\\n]+\\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\\n]*\\n)|~{3,})([^\\n]*)\\n(?:|([\\s\\S]*?)\\n)(?: {0,3}\\1[~`]* *(?:\\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\\n]*?)(?: +#+)? *(?:\\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\\n]*)(?:\\n|$))+/,list:/^( {0,3})(bull) [\\s\\S]+?(?:hr|def|\\n{2,}(?! )(?!\\1bull )\\n*|\\s*$)/,html:\"^ {0,3}(?:<(script|pre|style)[\\\\s>][\\\\s\\\\S]*?(?:</\\\\1>[^\\\\n]*\\\\n+|$)|comment[^\\\\n]*(\\\\n+|$)|<\\\\?[\\\\s\\\\S]*?\\\\?>\\\\n*|<![A-Z][\\\\s\\\\S]*?>\\\\n*|<!\\\\[CDATA\\\\[[\\\\s\\\\S]*?\\\\]\\\\]>\\\\n*|</?(tag)(?: +|\\\\n|/?>)[\\\\s\\\\S]*?(?:\\\\n{2,}|$)|<(?!script|pre|style)([a-z][\\\\w-]*)(?:attribute)*? */?>(?=[ \\\\t]*(?:\\\\n|$))[\\\\s\\\\S]*?(?:\\\\n{2,}|$)|</(?!script|pre|style)[a-z][\\\\w-]*\\\\s*>(?=[ \\\\t]*(?:\\\\n|$))[\\\\s\\\\S]*?(?:\\\\n{2,}|$))\",def:/^ {0,3}\\[(label)\\]: *\\n? *<?([^\\s>]+)>?(?:(?: +\\n? *| *\\n *)(title))? *(?:\\n+|$)/,nptable:Ra,table:Ra,lheading:/^([^\\n]+)\\n {0,3}(=+|-+) *(?:\\n+|$)/,_paragraph:/^([^\\n]+(?:\\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\\n]+)*)/,text:/^[^\\n]+/,_label:/(?!\\s*\\])(?:\\\\[\\[\\]]|[^\\[\\]])+/,_title:/(?:\"(?:\\\\\"?|[^\"\\\\])*\"|'[^'\\n]*(?:\\n[^'\\n]+)*\\n?'|\\([^()]*\\))/};$a.def=ja($a.def).replace(\"label\",$a._label).replace(\"title\",$a._title).getRegex(),$a.bullet=/(?:[*+-]|\\d{1,9}\\.)/,$a.item=/^( *)(bull) ?[^\\n]*(?:\\n(?!\\1bull ?)[^\\n]*)*/,$a.item=ja($a.item,\"gm\").replace(/bull/g,$a.bullet).getRegex(),$a.list=ja($a.list).replace(/bull/g,$a.bullet).replace(\"hr\",\"\\\\n+(?=\\\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\\\* *){3,})(?:\\\\n+|$))\").replace(\"def\",\"\\\\n+(?=\"+$a.def.source+\")\").getRegex(),$a._tag=\"address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul\",$a._comment=/<!--(?!-?>)[\\s\\S]*?-->/,$a.html=ja($a.html,\"i\").replace(\"comment\",$a._comment).replace(\"tag\",$a._tag).replace(\"attribute\",/ +[a-zA-Z:_][\\w.:-]*(?: *= *\"[^\"\\n]*\"| *= *'[^'\\n]*'| *= *[^\\s\"'=<>`]+)?/).getRegex(),$a.paragraph=ja($a._paragraph).replace(\"hr\",$a.hr).replace(\"heading\",\" {0,3}#{1,6} \").replace(\"|lheading\",\"\").replace(\"blockquote\",\" {0,3}>\").replace(\"fences\",\" {0,3}(?:`{3,}(?=[^`\\\\n]*\\\\n)|~{3,})[^\\\\n]*\\\\n\").replace(\"list\",\" {0,3}(?:[*+-]|1[.)]) \").replace(\"html\",\"</?(?:tag)(?: +|\\\\n|/?>)|<(?:script|pre|style|!--)\").replace(\"tag\",$a._tag).getRegex(),$a.blockquote=ja($a.blockquote).replace(\"paragraph\",$a.paragraph).getRegex(),$a.normal=za({},$a),$a.gfm=za({},$a.normal,{nptable:\"^ *([^|\\\\n ].*\\\\|.*)\\\\n *([-:]+ *\\\\|[-| :]*)(?:\\\\n((?:(?!\\\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\\\n|$))*)\\\\n*|$)\",table:\"^ *\\\\|(.+)\\\\n *\\\\|?( *[-:]+[-| :]*)(?:\\\\n *((?:(?!\\\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\\\n|$))*)\\\\n*|$)\"}),$a.gfm.nptable=ja($a.gfm.nptable).replace(\"hr\",$a.hr).replace(\"heading\",\" {0,3}#{1,6} \").replace(\"blockquote\",\" {0,3}>\").replace(\"code\",\" {4}[^\\\\n]\").replace(\"fences\",\" {0,3}(?:`{3,}(?=[^`\\\\n]*\\\\n)|~{3,})[^\\\\n]*\\\\n\").replace(\"list\",\" {0,3}(?:[*+-]|1[.)]) \").replace(\"html\",\"</?(?:tag)(?: +|\\\\n|/?>)|<(?:script|pre|style|!--)\").replace(\"tag\",$a._tag).getRegex(),$a.gfm.table=ja($a.gfm.table).replace(\"hr\",$a.hr).replace(\"heading\",\" {0,3}#{1,6} \").replace(\"blockquote\",\" {0,3}>\").replace(\"code\",\" {4}[^\\\\n]\").replace(\"fences\",\" {0,3}(?:`{3,}(?=[^`\\\\n]*\\\\n)|~{3,})[^\\\\n]*\\\\n\").replace(\"list\",\" {0,3}(?:[*+-]|1[.)]) \").replace(\"html\",\"</?(?:tag)(?: +|\\\\n|/?>)|<(?:script|pre|style|!--)\").replace(\"tag\",$a._tag).getRegex(),$a.pedantic=za({},$a.normal,{html:ja(\"^ *(?:comment *(?:\\\\n|\\\\s*$)|<(tag)[\\\\s\\\\S]+?</\\\\1> *(?:\\\\n{2,}|\\\\s*$)|<tag(?:\\\"[^\\\"]*\\\"|'[^']*'|\\\\s[^'\\\"/>\\\\s]*)*?/?> *(?:\\\\n{2,}|\\\\s*$))\").replace(\"comment\",$a._comment).replace(/tag/g,\"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\\\b)\\\\w+(?!:|[^\\\\w\\\\s@]*@)\\\\b\").getRegex(),def:/^ *\\[([^\\]]+)\\]: *<?([^\\s>]+)>?(?: +([\"(][^\\n]+[\")]))? *(?:\\n+|$)/,heading:/^ *(#{1,6}) *([^\\n]+?) *(?:#+ *)?(?:\\n+|$)/,fences:Ra,paragraph:ja($a.normal._paragraph).replace(\"hr\",$a.hr).replace(\"heading\",\" *#{1,6} *[^\\n]\").replace(\"lheading\",$a.lheading).replace(\"blockquote\",\" {0,3}>\").replace(\"|fences\",\"\").replace(\"|list\",\"\").replace(\"|html\",\"\").getRegex()});var Pa={escape:/^\\\\([!\"#$%&'()*+,\\-./:;<=>?@\\[\\]\\\\^_`{|}~])/,autolink:/^<(scheme:[^\\s\\x00-\\x1f<>]*|email)>/,url:Ra,tag:\"^comment|^</[a-zA-Z][\\\\w:-]*\\\\s*>|^<[a-zA-Z][\\\\w-]*(?:attribute)*?\\\\s*/?>|^<\\\\?[\\\\s\\\\S]*?\\\\?>|^<![a-zA-Z]+\\\\s[\\\\s\\\\S]*?>|^<!\\\\[CDATA\\\\[[\\\\s\\\\S]*?\\\\]\\\\]>\",link:/^!?\\[(label)\\]\\(\\s*(href)(?:\\s+(title))?\\s*\\)/,reflink:/^!?\\[(label)\\]\\[(?!\\s*\\])((?:\\\\[\\[\\]]?|[^\\[\\]\\\\])+)\\]/,nolink:/^!?\\[(?!\\s*\\])((?:\\[[^\\[\\]]*\\]|\\\\[\\[\\]]|[^\\[\\]])*)\\](?:\\[\\])?/,strong:/^__([^\\s_])__(?!_)|^\\*\\*([^\\s*])\\*\\*(?!\\*)|^__([^\\s][\\s\\S]*?[^\\s])__(?!_)|^\\*\\*([^\\s][\\s\\S]*?[^\\s])\\*\\*(?!\\*)/,em:/^_([^\\s_])_(?!_)|^_([^\\s_<][\\s\\S]*?[^\\s_])_(?!_|[^\\s,punctuation])|^_([^\\s_<][\\s\\S]*?[^\\s])_(?!_|[^\\s,punctuation])|^\\*([^\\s*<\\[])\\*(?!\\*)|^\\*([^\\s<\"][\\s\\S]*?[^\\s\\[\\*])\\*(?![\\]`punctuation])|^\\*([^\\s*\"<\\[][\\s\\S]*[^\\s])\\*(?!\\*)/,code:/^(`+)([^`]|[^`][\\s\\S]*?[^`])\\1(?!`)/,br:/^( {2,}|\\\\)\\n(?!\\s*$)/,del:Ra,text:/^(`+|[^`])(?:[\\s\\S]*?(?:(?=[\\\\<!\\[`*]|\\b_|$)|[^ ](?= {2,}\\n))|(?= {2,}\\n))/,_punctuation:\"!\\\"#$%&'()*+\\\\-./:;<=>?@\\\\[^_{|}~\"};Pa.em=ja(Pa.em).replace(/punctuation/g,Pa._punctuation).getRegex(),Pa._escapes=/\\\\([!\"#$%&'()*+,\\-./:;<=>?@\\[\\]\\\\^_`{|}~])/g,Pa._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Pa._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Pa.autolink=ja(Pa.autolink).replace(\"scheme\",Pa._scheme).replace(\"email\",Pa._email).getRegex(),Pa._attribute=/\\s+[a-zA-Z:_][\\w.:-]*(?:\\s*=\\s*\"[^\"]*\"|\\s*=\\s*'[^']*'|\\s*=\\s*[^\\s\"'=<>`]+)?/,Pa.tag=ja(Pa.tag).replace(\"comment\",$a._comment).replace(\"attribute\",Pa._attribute).getRegex(),Pa._label=/(?:\\[[^\\[\\]]*\\]|\\\\.|`[^`]*`|[^\\[\\]\\\\`])*?/,Pa._href=/<(?:\\\\[<>]?|[^\\s<>\\\\])*>|[^\\s\\x00-\\x1f]*/,Pa._title=/\"(?:\\\\\"?|[^\"\\\\])*\"|'(?:\\\\'?|[^'\\\\])*'|\\((?:\\\\\\)?|[^)\\\\])*\\)/,Pa.link=ja(Pa.link).replace(\"label\",Pa._label).replace(\"href\",Pa._href).replace(\"title\",Pa._title).getRegex(),Pa.reflink=ja(Pa.reflink).replace(\"label\",Pa._label).getRegex(),Pa.normal=za({},Pa),Pa.pedantic=za({},Pa.normal,{strong:/^__(?=\\S)([\\s\\S]*?\\S)__(?!_)|^\\*\\*(?=\\S)([\\s\\S]*?\\S)\\*\\*(?!\\*)/,em:/^_(?=\\S)([\\s\\S]*?\\S)_(?!_)|^\\*(?=\\S)([\\s\\S]*?\\S)\\*(?!\\*)/,link:ja(/^!?\\[(label)\\]\\((.*?)\\)/).replace(\"label\",Pa._label).getRegex(),reflink:ja(/^!?\\[(label)\\]\\s*\\[([^\\]]*)\\]/).replace(\"label\",Pa._label).getRegex()}),Pa.gfm=za({},Pa.normal,{escape:ja(Pa.escape).replace(\"])\",\"~|])\").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\\/\\/|www\\.)(?:[a-zA-Z0-9\\-]+\\.?)+[^\\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\\([^)]*\\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\\S)([\\s\\S]*?\\S)~+/,text:/^(`+|[^`])(?:[\\s\\S]*?(?:(?=[\\\\<!\\[`*~]|\\b_|https?:\\/\\/|ftp:\\/\\/|www\\.|$)|[^ ](?= {2,}\\n)|[^a-zA-Z0-9.!#$%&'*+\\/=?_`{\\|}~-](?=[a-zA-Z0-9.!#$%&'*+\\/=?_`{\\|}~-]+@))|(?= {2,}\\n|[a-zA-Z0-9.!#$%&'*+\\/=?_`{\\|}~-]+@))/}),Pa.gfm.url=ja(Pa.gfm.url,\"i\").replace(\"email\",Pa.gfm._extended_email).getRegex(),Pa.breaks=za({},Pa.gfm,{br:ja(Pa.br).replace(\"{2,}\",\"*\").getRegex(),text:ja(Pa.gfm.text).replace(\"\\\\b_\",\"\\\\b_| {2,}\\\\n\").replace(/\\{2,\\}/g,\"*\").getRegex()});var Ia={block:$a,inline:Pa},Ca=Go.defaults,La=Ia.block,Ma=Ia.inline;function Na(e){return e.replace(/---/g,\"—\").replace(/--/g,\"–\").replace(/(^|[-\\u2014/(\\[{\"\\s])'/g,\"$1‘\").replace(/'/g,\"’\").replace(/(^|[-\\u2014/(\\[{\\u2018\\s])\"/g,\"$1“\").replace(/\"/g,\"”\").replace(/\\.{3}/g,\"…\")}function qa(e){var t,n,r=\"\",i=e.length;for(t=0;t<i;t++)n=e.charCodeAt(t),Math.random()>.5&&(n=\"x\"+n.toString(16)),r+=\"&#\"+n+\";\";return r}var Da=function(){function e(t){so(this,e),this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ca,this.options.tokenizer=this.options.tokenizer||new Oa,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var n={block:La.normal,inline:Ma.normal};this.options.pedantic?(n.block=La.pedantic,n.inline=Ma.pedantic):this.options.gfm&&(n.block=La.gfm,this.options.breaks?n.inline=Ma.breaks:n.inline=Ma.gfm),this.tokenizer.rules=n}return uo(e,[{key:\"lex\",value:function(e){return e=e.replace(/\\r\\n|\\r/g,\"\\n\").replace(/\\t/g,\"    \"),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens}},{key:\"blockTokens\",value:function(e){var t,n,r,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];for(e=e.replace(/^ +$/gm,\"\");e;)if(t=this.tokenizer.space(e))e=e.substring(t.raw.length),t.type&&o.push(t);else if(t=this.tokenizer.code(e,o))e=e.substring(t.raw.length),t.type?o.push(t):((i=o[o.length-1]).raw+=\"\\n\"+t.raw,i.text+=\"\\n\"+t.text);else if(t=this.tokenizer.fences(e))e=e.substring(t.raw.length),o.push(t);else if(t=this.tokenizer.heading(e))e=e.substring(t.raw.length),o.push(t);else if(t=this.tokenizer.nptable(e))e=e.substring(t.raw.length),o.push(t);else if(t=this.tokenizer.hr(e))e=e.substring(t.raw.length),o.push(t);else if(t=this.tokenizer.blockquote(e))e=e.substring(t.raw.length),t.tokens=this.blockTokens(t.text,[],a),o.push(t);else if(t=this.tokenizer.list(e)){for(e=e.substring(t.raw.length),r=t.items.length,n=0;n<r;n++)t.items[n].tokens=this.blockTokens(t.items[n].text,[],!1);o.push(t)}else if(t=this.tokenizer.html(e))e=e.substring(t.raw.length),o.push(t);else if(a&&(t=this.tokenizer.def(e)))e=e.substring(t.raw.length),this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});else if(t=this.tokenizer.table(e))e=e.substring(t.raw.length),o.push(t);else if(t=this.tokenizer.lheading(e))e=e.substring(t.raw.length),o.push(t);else if(a&&(t=this.tokenizer.paragraph(e)))e=e.substring(t.raw.length),o.push(t);else if(t=this.tokenizer.text(e,o))e=e.substring(t.raw.length),t.type?o.push(t):((i=o[o.length-1]).raw+=\"\\n\"+t.raw,i.text+=\"\\n\"+t.text);else if(e){var l=\"Infinite loop on byte: \"+e.charCodeAt(0);if(this.options.silent){console.error(l);break}throw new Error(l)}return o}},{key:\"inline\",value:function(e){var t,n,r,i,o,a,l=e.length;for(t=0;t<l;t++)switch((a=e[t]).type){case\"paragraph\":case\"text\":case\"heading\":a.tokens=[],this.inlineTokens(a.text,a.tokens);break;case\"table\":for(a.tokens={header:[],cells:[]},i=a.header.length,n=0;n<i;n++)a.tokens.header[n]=[],this.inlineTokens(a.header[n],a.tokens.header[n]);for(i=a.cells.length,n=0;n<i;n++)for(o=a.cells[n],a.tokens.cells[n]=[],r=0;r<o.length;r++)a.tokens.cells[n][r]=[],this.inlineTokens(o[r],a.tokens.cells[n][r]);break;case\"blockquote\":this.inline(a.tokens);break;case\"list\":for(i=a.items.length,n=0;n<i;n++)this.inline(a.items[n].tokens)}return e}},{key:\"inlineTokens\",value:function(e){for(var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e;)if(t=this.tokenizer.escape(e))e=e.substring(t.raw.length),n.push(t);else if(t=this.tokenizer.tag(e,r,i))e=e.substring(t.raw.length),r=t.inLink,i=t.inRawBlock,n.push(t);else if(t=this.tokenizer.link(e))e=e.substring(t.raw.length),\"link\"===t.type&&(t.tokens=this.inlineTokens(t.text,[],!0,i)),n.push(t);else if(t=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(t.raw.length),\"link\"===t.type&&(t.tokens=this.inlineTokens(t.text,[],!0,i)),n.push(t);else if(t=this.tokenizer.strong(e))e=e.substring(t.raw.length),t.tokens=this.inlineTokens(t.text,[],r,i),n.push(t);else if(t=this.tokenizer.em(e))e=e.substring(t.raw.length),t.tokens=this.inlineTokens(t.text,[],r,i),n.push(t);else if(t=this.tokenizer.codespan(e))e=e.substring(t.raw.length),n.push(t);else if(t=this.tokenizer.br(e))e=e.substring(t.raw.length),n.push(t);else if(t=this.tokenizer.del(e))e=e.substring(t.raw.length),t.tokens=this.inlineTokens(t.text,[],r,i),n.push(t);else if(t=this.tokenizer.autolink(e,qa))e=e.substring(t.raw.length),n.push(t);else if(r||!(t=this.tokenizer.url(e,qa))){if(t=this.tokenizer.inlineText(e,i,Na))e=e.substring(t.raw.length),n.push(t);else if(e){var o=\"Infinite loop on byte: \"+e.charCodeAt(0);if(this.options.silent){console.error(o);break}throw new Error(o)}}else e=e.substring(t.raw.length),n.push(t);return n}}],[{key:\"lex\",value:function(t,n){return new e(n).lex(t)}},{key:\"rules\",get:function(){return{block:La,inline:Ma}}}]),e}(),Ua=Go.defaults,Za=da,Fa=ha,Ga=function(){function e(t){so(this,e),this.options=t||Ua}return uo(e,[{key:\"code\",value:function(e,t,n){var r=(t||\"\").match(/\\S*/)[0];if(this.options.highlight){var i=this.options.highlight(e,r);null!=i&&i!==e&&(n=!0,e=i)}return r?'<pre><code class=\"'+this.options.langPrefix+Fa(r,!0)+'\">'+(n?e:Fa(e,!0))+\"</code></pre>\\n\":\"<pre><code>\"+(n?e:Fa(e,!0))+\"</code></pre>\\n\"}},{key:\"blockquote\",value:function(e){return\"<blockquote>\\n\"+e+\"</blockquote>\\n\"}},{key:\"html\",value:function(e){return e}},{key:\"heading\",value:function(e,t,n,r){return this.options.headerIds?\"<h\"+t+' id=\"'+this.options.headerPrefix+r.slug(n)+'\">'+e+\"</h\"+t+\">\\n\":\"<h\"+t+\">\"+e+\"</h\"+t+\">\\n\"}},{key:\"hr\",value:function(){return this.options.xhtml?\"<hr/>\\n\":\"<hr>\\n\"}},{key:\"list\",value:function(e,t,n){var r=t?\"ol\":\"ul\";return\"<\"+r+(t&&1!==n?' start=\"'+n+'\"':\"\")+\">\\n\"+e+\"</\"+r+\">\\n\"}},{key:\"listitem\",value:function(e){return\"<li>\"+e+\"</li>\\n\"}},{key:\"checkbox\",value:function(e){return\"<input \"+(e?'checked=\"\" ':\"\")+'disabled=\"\" type=\"checkbox\"'+(this.options.xhtml?\" /\":\"\")+\"> \"}},{key:\"paragraph\",value:function(e){return\"<p>\"+e+\"</p>\\n\"}},{key:\"table\",value:function(e,t){return t&&(t=\"<tbody>\"+t+\"</tbody>\"),\"<table>\\n<thead>\\n\"+e+\"</thead>\\n\"+t+\"</table>\\n\"}},{key:\"tablerow\",value:function(e){return\"<tr>\\n\"+e+\"</tr>\\n\"}},{key:\"tablecell\",value:function(e,t){var n=t.header?\"th\":\"td\";return(t.align?\"<\"+n+' align=\"'+t.align+'\">':\"<\"+n+\">\")+e+\"</\"+n+\">\\n\"}},{key:\"strong\",value:function(e){return\"<strong>\"+e+\"</strong>\"}},{key:\"em\",value:function(e){return\"<em>\"+e+\"</em>\"}},{key:\"codespan\",value:function(e){return\"<code>\"+e+\"</code>\"}},{key:\"br\",value:function(){return this.options.xhtml?\"<br/>\":\"<br>\"}},{key:\"del\",value:function(e){return\"<del>\"+e+\"</del>\"}},{key:\"link\",value:function(e,t,n){if(null===(e=Za(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<a href=\"'+Fa(e)+'\"';return t&&(r+=' title=\"'+t+'\"'),r+=\">\"+n+\"</a>\"}},{key:\"image\",value:function(e,t,n){if(null===(e=Za(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<img src=\"'+e+'\" alt=\"'+n+'\"';return t&&(r+=' title=\"'+t+'\"'),r+=this.options.xhtml?\"/>\":\">\"}},{key:\"text\",value:function(e){return e}}]),e}(),Ha=function(){function e(){so(this,e)}return uo(e,[{key:\"strong\",value:function(e){return e}},{key:\"em\",value:function(e){return e}},{key:\"codespan\",value:function(e){return e}},{key:\"del\",value:function(e){return e}},{key:\"html\",value:function(e){return e}},{key:\"text\",value:function(e){return e}},{key:\"link\",value:function(e,t,n){return\"\"+n}},{key:\"image\",value:function(e,t,n){return\"\"+n}},{key:\"br\",value:function(){return\"\"}}]),e}(),Wa=function(){function e(){so(this,e),this.seen={}}return uo(e,[{key:\"slug\",value:function(e){var t=e.toLowerCase().trim().replace(/<[!\\/a-z].*?>/gi,\"\").replace(/[\\u2000-\\u206F\\u2E00-\\u2E7F\\\\'!\"#$%&()*+,./:;<=>?@[\\]^`{|}~]/g,\"\").replace(/\\s/g,\"-\");if(this.seen.hasOwnProperty(t)){var n=t;do{this.seen[n]++,t=n+\"-\"+this.seen[n]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}}]),e}(),Ba=Go.defaults,Va=pa,Ka=function(){function e(t){so(this,e),this.options=t||Ba,this.options.renderer=this.options.renderer||new Ga,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ha,this.slugger=new Wa}return uo(e,[{key:\"parse\",value:function(e){var t,n,r,i,o,a,l,s,c,u,f,h,p,g,d,v,y,b,m=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],k=\"\",x=e.length;for(t=0;t<x;t++)switch((u=e[t]).type){case\"space\":continue;case\"hr\":k+=this.renderer.hr();continue;case\"heading\":k+=this.renderer.heading(this.parseInline(u.tokens),u.depth,Va(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case\"code\":k+=this.renderer.code(u.text,u.lang,u.escaped);continue;case\"table\":for(s=\"\",l=\"\",i=u.header.length,n=0;n<i;n++)l+=this.renderer.tablecell(this.parseInline(u.tokens.header[n]),{header:!0,align:u.align[n]});for(s+=this.renderer.tablerow(l),c=\"\",i=u.cells.length,n=0;n<i;n++){for(l=\"\",o=(a=u.tokens.cells[n]).length,r=0;r<o;r++)l+=this.renderer.tablecell(this.parseInline(a[r]),{header:!1,align:u.align[r]});c+=this.renderer.tablerow(l)}k+=this.renderer.table(s,c);continue;case\"blockquote\":c=this.parse(u.tokens),k+=this.renderer.blockquote(c);continue;case\"list\":for(f=u.ordered,h=u.start,p=u.loose,i=u.items.length,c=\"\",n=0;n<i;n++)v=(d=u.items[n]).checked,y=d.task,g=\"\",d.task&&(b=this.renderer.checkbox(v),p?d.tokens.length>0&&\"text\"===d.tokens[0].type?(d.tokens[0].text=b+\" \"+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&\"text\"===d.tokens[0].tokens[0].type&&(d.tokens[0].tokens[0].text=b+\" \"+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:\"text\",text:b}):g+=b),g+=this.parse(d.tokens,p),c+=this.renderer.listitem(g,y,v);k+=this.renderer.list(c,f,h);continue;case\"html\":k+=this.renderer.html(u.text);continue;case\"paragraph\":k+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case\"text\":for(c=u.tokens?this.parseInline(u.tokens):u.text;t+1<x&&\"text\"===e[t+1].type;)c+=\"\\n\"+((u=e[++t]).tokens?this.parseInline(u.tokens):u.text);k+=m?this.renderer.paragraph(c):c;continue;default:var w='Token with \"'+u.type+'\" type was not found.';if(this.options.silent)return void console.error(w);throw new Error(w)}return k}},{key:\"parseInline\",value:function(e,t){t=t||this.renderer;var n,r,i=\"\",o=e.length;for(n=0;n<o;n++)switch((r=e[n]).type){case\"escape\":i+=t.text(r.text);break;case\"html\":i+=t.html(r.text);break;case\"link\":i+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case\"image\":i+=t.image(r.href,r.title,r.text);break;case\"strong\":i+=t.strong(this.parseInline(r.tokens,t));break;case\"em\":i+=t.em(this.parseInline(r.tokens,t));break;case\"codespan\":i+=t.codespan(r.text);break;case\"br\":i+=t.br();break;case\"del\":i+=t.del(this.parseInline(r.tokens,t));break;case\"text\":i+=t.text(r.text);break;default:var a='Token with \"'+r.type+'\" type was not found.';if(this.options.silent)return void console.error(a);throw new Error(a)}return i}}],[{key:\"parse\",value:function(t,n){return new e(n).parse(t)}}]),e}(),Xa=ya,Ya=xa,Ja=ha,Qa=Go.getDefaults,el=Go.changeDefaults,tl=Go.defaults;function nl(e,t,n){if(null==e)throw new Error(\"marked(): input parameter is undefined or null\");if(\"string\"!=typeof e)throw new Error(\"marked(): input parameter is of type \"+Object.prototype.toString.call(e)+\", string expected\");if(\"function\"==typeof t&&(n=t,t=null),t=Xa({},nl.defaults,t||{}),Ya(t),n){var r,i=t.highlight;try{r=Da.lex(e,t)}catch(e){return n(e)}var o=function(e){var o;if(!e)try{o=Ka.parse(r,t)}catch(t){e=t}return t.highlight=i,e?n(e):n(null,o)};if(!i||i.length<3)return o();if(delete t.highlight,!r.length)return o();var a=0;return nl.walkTokens(r,(function(e){\"code\"===e.type&&(a++,i(e.text,e.lang,(function(t,n){if(t)return o(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),0===--a&&o()})))})),void(0===a&&o())}try{var l=Da.lex(e,t);return t.walkTokens&&nl.walkTokens(l,t.walkTokens),Ka.parse(l,t)}catch(e){if(e.message+=\"\\nPlease report this to https://github.com/markedjs/marked.\",t.silent)return\"<p>An error occurred:</p><pre>\"+Ja(e.message+\"\",!0)+\"</pre>\";throw e}}nl.options=nl.setOptions=function(e){return Xa(nl.defaults,e),el(nl.defaults),nl},nl.getDefaults=Qa,nl.defaults=tl,nl.use=function(e){var t=Xa({},e);if(e.renderer&&function(){var n=nl.defaults.renderer||new Ga,r=function(t){var r=n[t];n[t]=function(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];var l=e.renderer[t].apply(n,o);return!1===l&&(l=r.apply(n,o)),l}};for(var i in e.renderer)r(i);t.renderer=n}(),e.tokenizer&&function(){var n=nl.defaults.tokenizer||new Oa,r=function(t){var r=n[t];n[t]=function(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];var l=e.tokenizer[t].apply(n,o);return!1===l&&(l=r.apply(n,o)),l}};for(var i in e.tokenizer)r(i);t.tokenizer=n}(),e.walkTokens){var n=nl.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens(t),n&&n(t)}}nl.setOptions(t)},nl.walkTokens=function(e,t){var n,r=yo(e);try{for(r.s();!(n=r.n()).done;){var i=n.value;switch(t(i),i.type){case\"table\":var o,a=yo(i.tokens.header);try{for(a.s();!(o=a.n()).done;){var l=o.value;nl.walkTokens(l,t)}}catch(e){a.e(e)}finally{a.f()}var s,c=yo(i.tokens.cells);try{for(c.s();!(s=c.n()).done;){var u,f=yo(s.value);try{for(f.s();!(u=f.n()).done;){var h=u.value;nl.walkTokens(h,t)}}catch(e){f.e(e)}finally{f.f()}}}catch(e){c.e(e)}finally{c.f()}break;case\"list\":nl.walkTokens(i.items,t);break;default:i.tokens&&nl.walkTokens(i.tokens,t)}}}catch(e){r.e(e)}finally{r.f()}},nl.Parser=Ka,nl.parser=Ka.parse,nl.Renderer=Ga,nl.TextRenderer=Ha,nl.Lexer=Da,nl.lexer=Da.lex,nl.Tokenizer=Oa,nl.Slugger=Wa,nl.parse=nl;var rl=nl,il=/\\[([\\s\\d,|-]*)\\]/,ol={\"&\":\"&amp;\",\"<\":\"&lt;\",\">\":\"&gt;\",'\"':\"&quot;\",\"'\":\"&#39;\"};/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {var e;function t(e){var t=(e.querySelector(\"[data-template]\")||e.querySelector(\"script\")||e).textContent,n=(t=t.replace(new RegExp(\"__SCRIPT_END__\",\"g\"),\"<\\/script>\")).match(/^\\n?(\\s*)/)[1].length,r=t.match(/^\\n?(\\t*)/)[1].length;return r>0?t=t.replace(new RegExp(\"\\\\n?\\\\t{\"+r+\"}\",\"g\"),\"\\n\"):n>1&&(t=t.replace(new RegExp(\"\\\\n? {\"+n+\"}\",\"g\"),\"\\n\")),t}function n(e){for(var t=e.attributes,n=[],r=0,i=t.length;r<i;r++){var o=t[r].name,a=t[r].value;/data\\-(markdown|separator|vertical|notes)/gi.test(o)||(a?n.push(o+'=\"'+a+'\"'):n.push(o))}return n.join(\" \")}function r(e){return(e=e||{}).separator=e.separator||\"^\\r?\\n---\\r?\\n$\",e.notesSeparator=e.notesSeparator||\"notes?:\",e.attributes=e.attributes||\"\",e}function i(e,t){t=r(t);var n=e.split(new RegExp(t.notesSeparator,\"mgi\"));return 2===n.length&&(e=n[0]+'<aside class=\"notes\">'+rl(n[1].trim())+\"</aside>\"),'<script type=\"text/template\">'+(e=e.replace(/<\\/script>/g,\"__SCRIPT_END__\"))+\"<\\/script>\"}function o(e,t){t=r(t);for(var n,o,a,l=new RegExp(t.separator+(t.verticalSeparator?\"|\"+t.verticalSeparator:\"\"),\"mg\"),s=new RegExp(t.separator),c=0,u=!0,f=[];n=l.exec(e);)!(o=s.test(n[0]))&&u&&f.push([]),a=e.substring(c,n.index),o&&u?f.push(a):f[f.length-1].push(a),c=l.lastIndex,u=o;(u?f:f[f.length-1]).push(e.substring(c));for(var h=\"\",p=0,g=f.length;p<g;p++)f[p]instanceof Array?(h+=\"<section \"+t.attributes+\">\",f[p].forEach((function(e){h+=\"<section data-markdown>\"+i(e,t)+\"</section>\"})),h+=\"</section>\"):h+=\"<section \"+t.attributes+\" data-markdown>\"+i(f[p],t)+\"</section>\";return h}function a(e){return new Promise((function(r){var a=[];[].slice.call(e.querySelectorAll(\"[data-markdown]:not([data-markdown-parsed])\")).forEach((function(e,r){e.getAttribute(\"data-markdown\").length?a.push(function(e){return new Promise((function(t,n){var r=new XMLHttpRequest,i=e.getAttribute(\"data-markdown\"),o=e.getAttribute(\"data-charset\");null!=o&&\"\"!=o&&r.overrideMimeType(\"text/html; charset=\"+o),r.onreadystatechange=function(e,r){4===r.readyState&&(r.status>=200&&r.status<300||0===r.status?t(r,i):n(r,i))}.bind(this,e,r),r.open(\"GET\",i,!0);try{r.send()}catch(e){console.warn(\"Failed to get the Markdown file \"+i+\". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. \"+e),t(r,i)}}))}(e).then((function(t,r){e.outerHTML=o(t.responseText,{separator:e.getAttribute(\"data-separator\"),verticalSeparator:e.getAttribute(\"data-separator-vertical\"),notesSeparator:e.getAttribute(\"data-separator-notes\"),attributes:n(e)})}),(function(t,n){e.outerHTML='<section data-state=\"alert\">ERROR: The attempt to fetch '+n+\" failed with HTTP status \"+t.status+\".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>\"}))):e.getAttribute(\"data-separator\")||e.getAttribute(\"data-separator-vertical\")||e.getAttribute(\"data-separator-notes\")?e.outerHTML=o(t(e),{separator:e.getAttribute(\"data-separator\"),verticalSeparator:e.getAttribute(\"data-separator-vertical\"),notesSeparator:e.getAttribute(\"data-separator-notes\"),attributes:n(e)}):e.innerHTML=i(t(e))})),Promise.all(a).then(r)}))}function l(e,t,n){var r,i,o=new RegExp(n,\"mg\"),a=new RegExp('([^\"= ]+?)=\"([^\"]+?)\"|(data-[^\"= ]+?)(?=[\" ])',\"mg\"),l=e.nodeValue;if(r=o.exec(l)){var s=r[1];for(l=l.substring(0,r.index)+l.substring(o.lastIndex),e.nodeValue=l;i=a.exec(s);)i[2]?t.setAttribute(i[1],i[2]):t.setAttribute(i[3],\"\");return!0}return!1}function s(){var n=e.getRevealElement().querySelectorAll(\"[data-markdown]:not([data-markdown-parsed])\");return[].slice.call(n).forEach((function(e){e.setAttribute(\"data-markdown-parsed\",!0);var n=e.querySelector(\"aside.notes\"),r=t(e);e.innerHTML=rl(r),function e(t,n,r,i,o){if(null!=n&&null!=n.childNodes&&n.childNodes.length>0)for(var a=n,s=0;s<n.childNodes.length;s++){var c=n.childNodes[s];if(s>0)for(var u=s-1;u>=0;){var f=n.childNodes[u];if(\"function\"==typeof f.setAttribute&&\"BR\"!=f.tagName){a=f;break}u-=1}var h=t;\"section\"==c.nodeName&&(h=c,a=c),\"function\"!=typeof c.setAttribute&&c.nodeType!=Node.COMMENT_NODE||e(h,c,a,i,o)}n.nodeType==Node.COMMENT_NODE&&0==l(n,r,i)&&l(n,t,o)}(e,e,null,e.getAttribute(\"data-element-attributes\")||e.parentNode.getAttribute(\"data-element-attributes\")||\"\\\\.element\\\\s*?(.+?)$\",e.getAttribute(\"data-attributes\")||e.parentNode.getAttribute(\"data-attributes\")||\"\\\\.slide:\\\\s*?(\\\\S.+?)$\"),n&&e.appendChild(n)})),Promise.resolve()}return{id:\"markdown\",init:function(t){e=t;var n=new rl.Renderer;return n.code=function(e,t){var n=\"\";return il.test(t)&&(n=t.match(il)[1].trim(),n='data-line-numbers=\"'.concat(n,'\"'),t=t.replace(il,\"\").trim()),e=e.replace(/([&<>'\"])/g,(function(e){return ol[e]})),\"<pre><code \".concat(n,' class=\"').concat(t,'\">').concat(e,\"</code></pre>\")},rl.setOptions(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ho(Object(n),!0).forEach((function(t){fo(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ho(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({renderer:n},e.getConfig().markdown)),a(e.getRevealElement()).then(s)},processSlides:a,convertSlides:s,slidify:o,marked:rl}}\n\n\n//# sourceURL=webpack://presentation/./node_modules/reveal.js/plugin/markdown/markdown.esm.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://presentation/./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://presentation/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./node_modules/@babel/polyfill/lib/index.js");
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;