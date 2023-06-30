/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/home.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.intro {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding-left: 1rem;
    align-items: center;
    justify-content: center;
    /* background-image: url(../src/img/download.png); */
    border-bottom: 3px solid #CBB02A;
}

.intro p {
    font-family: jedi solid, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.3rem;
    font-weight: 0;
    text-decoration: none;
    transition: all 0.3s ease;
    color: #CBB02A;
}

.intro img {
    width: 100%;
    height: auto;
}
/* .intro p {
    width: 500px;
} */

.intro button {
    background-color: #cbb02a;
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
    margin-left: 1rem;
  }
  
.intro button:hover {
    background-color: #fff;
    color: #cbb02a;
}

.intro .intro-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding-left: 1rem;
}

.overview {
    padding: 2rem;
    /* background-image: url(../src/img/download.png); */
    color:#CBB02A;
    font-family: jedi solid, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
    display: grid;
    grid-template-rows: min-content 1fr;
    gap: 2rem;
    text-align: center;
    border-bottom: 3px solid #CBB02A;
}

.overview h2 {
    font-size: 2rem;
}

.overview-cards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-template-rows: min-content 1fr;
    gap: 2rem;
}

.overview img {
    width: 300px;
    height: 200px;
}

.reviews {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    font-family: jedi solid, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
    padding: 2rem;
    color: #CBB02A;
    border-bottom: 3px solid #CBB02A;
}

.review-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.more-reviews {
    display: flex;
    font-family: jedi outline, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
    padding-top: 1rem;
    padding-right: 1.5rem;
    gap: 0.75rem;
    align-items: center;
    font-style: italic;
    text-decoration: none;
    color: #F4D332 ;
    font-weight: 900;
    font-size: 1.3rem;
    margin: 0;
}

.more-reviews:hover,
.more-reviews:active {
    color: #fff;
    filter: brightness(99999);
}

.more-reviews img{
    width: 32px;
    height: 32px;
}

.reviews h2 {
    font-size: 2rem;
    font-weight: 100;
    text-align: center;
}

.reviews .reviews-cards {
    display: grid;
    gap: 2rem;
    grid-template-columns: min-content 1fr min-content;
    border: 6px ridge #CBB02A;
    border-radius: 17px;
    align-items: center;
    justify-items: center;
    transition: transform 0.5s ease-in-out;
    width: 100%;
    overflow: hidden;
}

.reviews .reviews-cards .switch-button {
    width: 30px;
    height: 100%;
    padding: 0 1rem;
    border: #CBB02A;
    border-radius: 0px;
    background-color: rgba(128, 128, 128, 0.478);
    cursor: pointer;
}

.reviews .reviews-cards .switch-button:hover {
    background-color: rgba(128, 128, 128, 0.678);
    filter: brightness(1.2);
}

.reviews .reviews-cards .switch-button:active {
    background-color: rgba(128, 128, 128, 0.878);
    filter: brightness(1.4);
}

.reviews .reviews-cards .switch-button:disabled:hover,
.reviews .reviews-cards .switch-button:disabled {
    background-color: rgba(128, 128, 128, 0.278);
    filter: brightness(0.8);
}

.disabled-btn {
    width: 30px;
    height: 100%;
    padding: 0 1rem;
    border: #CBB02A;
    border-radius: 0px;    
    background-color: rgba(128, 128, 128, 0.278);
    filter: brightness(0.8);
    cursor: not-allowed;
}

.reviews .card {
    border-radius: 10px;
    padding: 1rem;
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
    min-width: 100%;
}

.reviews .card .special-stars {
    opacity: 0.65;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.reviews .card .special-text {
    font-style: italic;
    opacity: 0.65;
}

.card-wrapper{
    display: flex;
    border-radius: 10px;
    width: 100%;
    overflow-x: hidden;
    transition: transform 0.5s ease;
}

.reviews .card img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
}

.reviews .card .card-content {
    display: grid;
    grid-template-rows: min-content min-content 1fr;
    padding-left: 2rem;
}

.reviews .card .card-content h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 100;
}

.reviews .card .card-content{
    margin-right: 1rem;
}

.reviews .card .card-content img {
    width: 20px;
    height: 20px;
}

.contact {
    display: grid;
    grid-template-rows: 1fr;
    font-family: jedi solid, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
    padding: 2rem;
    color: #CBB02A;
    border-bottom: 3px solid #CBB02A;
}

.contact-top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.contact-text {
    display: grid;
    grid-template-rows: max-content repeat(3, min-content);
    gap: 1rem;
}

.contact-text h2 {
    font-size: 2rem;
    font-weight: 100;
    margin-bottom: 10px;
}

.contact-text-desc {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #CBB02A;
    justify-self: start;
    text-decoration: none;
    font-weight: 100;
    font-size: 1.3rem;
    cursor: pointer;
}

.contact-text-desc:hover,
.contact-text-desc:active {
    color: #fff;
    filter: brightness(99999);
}

.contact-text-desc p {
    margin: 0;
}

.contact-text-desc img{
    width: 32px;
    height: 32px;
}

.contact-text-sign {
    font-weight: 900;
    font-size: 1.5rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.address {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
}

.address img {
    width: 600px;
    height: auto;
}

.address-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
}

.address-text-desc {
    display: flex;
    gap: 2rem;
}

.address-text p {
    margin: 0;
}

.contact-left {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 0 2rem;
}
.more-info * {
    margin: 0;
}

.more-info {
    margin-top: 0.83em;
    font-size: 1.6rem;
}

.more-info-container {
    display: flex;
    align-items: flex-end;
}

.more-info-link {
    color: #2A7ACB;
}

.more-info-link:hover,
.more-info-link:active {
    color: #fff;
}

.operating-hours {
    justify-self: start;
}

.operating-hours-title {
    font-size: 2rem;
    font-weight: 100;
}

.operating-hours-text {
    display: grid;
    gap: 1rem;
    justify-content: start;
    text-align: center;
}

.operating-hours-text-desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0.5rem;
}

.operating-hours-text-desc p:first-of-type {
    font-size: 1.3rem;
}

.operating-hours-text-desc p {
    margin: 0;
}`, "",{"version":3,"sources":["webpack://./src/css/home.css"],"names":[],"mappings":"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","sourcesContent":[".intro {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 2rem;\n    padding-left: 1rem;\n    align-items: center;\n    justify-content: center;\n    /* background-image: url(../src/img/download.png); */\n    border-bottom: 3px solid #CBB02A;\n}\n\n.intro p {\n    font-family: jedi solid, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 1.3rem;\n    font-weight: 0;\n    text-decoration: none;\n    transition: all 0.3s ease;\n    color: #CBB02A;\n}\n\n.intro img {\n    width: 100%;\n    height: auto;\n}\n/* .intro p {\n    width: 500px;\n} */\n\n.intro button {\n    background-color: #cbb02a;\n    color: #fff;\n    padding: 0.5rem 1rem;\n    font-size: 1.2rem;\n    border: none;\n    cursor: pointer;\n    margin-left: 1rem;\n  }\n  \n.intro button:hover {\n    background-color: #fff;\n    color: #cbb02a;\n}\n\n.intro .intro-content {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    padding-left: 1rem;\n}\n\n.overview {\n    padding: 2rem;\n    /* background-image: url(../src/img/download.png); */\n    color:#CBB02A;\n    font-family: jedi solid, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    gap: 2rem;\n    text-align: center;\n    border-bottom: 3px solid #CBB02A;\n}\n\n.overview h2 {\n    font-size: 2rem;\n}\n\n.overview-cards{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    grid-template-rows: min-content 1fr;\n    gap: 2rem;\n}\n\n.overview img {\n    width: 300px;\n    height: 200px;\n}\n\n.reviews {\n    display: grid;\n    grid-template-rows: min-content 1fr min-content;\n    font-family: jedi solid, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;\n    padding: 2rem;\n    color: #CBB02A;\n    border-bottom: 3px solid #CBB02A;\n}\n\n.review-container {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n}\n\n.more-reviews {\n    display: flex;\n    font-family: jedi outline, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;\n    padding-top: 1rem;\n    padding-right: 1.5rem;\n    gap: 0.75rem;\n    align-items: center;\n    font-style: italic;\n    text-decoration: none;\n    color: #F4D332 ;\n    font-weight: 900;\n    font-size: 1.3rem;\n    margin: 0;\n}\n\n.more-reviews:hover,\n.more-reviews:active {\n    color: #fff;\n    filter: brightness(99999);\n}\n\n.more-reviews img{\n    width: 32px;\n    height: 32px;\n}\n\n.reviews h2 {\n    font-size: 2rem;\n    font-weight: 100;\n    text-align: center;\n}\n\n.reviews .reviews-cards {\n    display: grid;\n    gap: 2rem;\n    grid-template-columns: min-content 1fr min-content;\n    border: 6px ridge #CBB02A;\n    border-radius: 17px;\n    align-items: center;\n    justify-items: center;\n    transition: transform 0.5s ease-in-out;\n    width: 100%;\n    overflow: hidden;\n}\n\n.reviews .reviews-cards .switch-button {\n    width: 30px;\n    height: 100%;\n    padding: 0 1rem;\n    border: #CBB02A;\n    border-radius: 0px;\n    background-color: rgba(128, 128, 128, 0.478);\n    cursor: pointer;\n}\n\n.reviews .reviews-cards .switch-button:hover {\n    background-color: rgba(128, 128, 128, 0.678);\n    filter: brightness(1.2);\n}\n\n.reviews .reviews-cards .switch-button:active {\n    background-color: rgba(128, 128, 128, 0.878);\n    filter: brightness(1.4);\n}\n\n.reviews .reviews-cards .switch-button:disabled:hover,\n.reviews .reviews-cards .switch-button:disabled {\n    background-color: rgba(128, 128, 128, 0.278);\n    filter: brightness(0.8);\n}\n\n.disabled-btn {\n    width: 30px;\n    height: 100%;\n    padding: 0 1rem;\n    border: #CBB02A;\n    border-radius: 0px;    \n    background-color: rgba(128, 128, 128, 0.278);\n    filter: brightness(0.8);\n    cursor: not-allowed;\n}\n\n.reviews .card {\n    border-radius: 10px;\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    align-items: center;\n    min-width: 100%;\n}\n\n.reviews .card .special-stars {\n    opacity: 0.65;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.reviews .card .special-text {\n    font-style: italic;\n    opacity: 0.65;\n}\n\n.card-wrapper{\n    display: flex;\n    border-radius: 10px;\n    width: 100%;\n    overflow-x: hidden;\n    transition: transform 0.5s ease;\n}\n\n.reviews .card img {\n    border-radius: 50%;\n    width: 150px;\n    height: 150px;\n}\n\n.reviews .card .card-content {\n    display: grid;\n    grid-template-rows: min-content min-content 1fr;\n    padding-left: 2rem;\n}\n\n.reviews .card .card-content h3 {\n    font-size: 1.5rem;\n    margin-bottom: 0.5rem;\n    font-weight: 100;\n}\n\n.reviews .card .card-content{\n    margin-right: 1rem;\n}\n\n.reviews .card .card-content img {\n    width: 20px;\n    height: 20px;\n}\n\n.contact {\n    display: grid;\n    grid-template-rows: 1fr;\n    font-family: jedi solid, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;\n    padding: 2rem;\n    color: #CBB02A;\n    border-bottom: 3px solid #CBB02A;\n}\n\n.contact-top {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n.contact-text {\n    display: grid;\n    grid-template-rows: max-content repeat(3, min-content);\n    gap: 1rem;\n}\n\n.contact-text h2 {\n    font-size: 2rem;\n    font-weight: 100;\n    margin-bottom: 10px;\n}\n\n.contact-text-desc {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    color: #CBB02A;\n    justify-self: start;\n    text-decoration: none;\n    font-weight: 100;\n    font-size: 1.3rem;\n    cursor: pointer;\n}\n\n.contact-text-desc:hover,\n.contact-text-desc:active {\n    color: #fff;\n    filter: brightness(99999);\n}\n\n.contact-text-desc p {\n    margin: 0;\n}\n\n.contact-text-desc img{\n    width: 32px;\n    height: 32px;\n}\n\n.contact-text-sign {\n    font-weight: 900;\n    font-size: 1.5rem;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.address {\n    display: grid;\n    grid-template-rows: min-content 1fr min-content;\n}\n\n.address img {\n    width: 600px;\n    height: auto;\n}\n\n.address-text {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding-top: 2rem;\n}\n\n.address-text-desc {\n    display: flex;\n    gap: 2rem;\n}\n\n.address-text p {\n    margin: 0;\n}\n\n.contact-left {\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n    padding: 0 2rem;\n}\n.more-info * {\n    margin: 0;\n}\n\n.more-info {\n    margin-top: 0.83em;\n    font-size: 1.6rem;\n}\n\n.more-info-container {\n    display: flex;\n    align-items: flex-end;\n}\n\n.more-info-link {\n    color: #2A7ACB;\n}\n\n.more-info-link:hover,\n.more-info-link:active {\n    color: #fff;\n}\n\n.operating-hours {\n    justify-self: start;\n}\n\n.operating-hours-title {\n    font-size: 2rem;\n    font-weight: 100;\n}\n\n.operating-hours-text {\n    display: grid;\n    gap: 1rem;\n    justify-content: start;\n    text-align: center;\n}\n\n.operating-hours-text-desc {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-left: 0.5rem;\n}\n\n.operating-hours-text-desc p:first-of-type {\n    font-size: 1.3rem;\n}\n\n.operating-hours-text-desc p {\n    margin: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/pageLoad.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/pageLoad.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/font/Starjhol.ttf */ "./src/assets/font/Starjhol.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/font/Starjedi.ttf */ "./src/assets/font/Starjedi.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/img/download.png */ "./src/assets/img/download.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'jedi outline';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: 'jedi solid';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    text-transform: lowercase;
}

div#content {
    height: max(100vh, 100%);
    position: relative;
    min-height: 100vh;
}

.nav-bar {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    -webkit-box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.76); 
    box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.76);
    border-bottom: 13px ridge #CBB02A;
}

.logo-box {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo-box img {
    width: 6rem;
    height: auto;
    cursor: pointer;
}

.logo-box img:hover,
.logo-box img:active {
    filter: brightness(9999);
}

.logo-box a {
    text-decoration: none;
}

.logo-box a h1 {
    font-family: jedi outline, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    color: #cbb02a;
    cursor: pointer;
    transition: all 0.3s ease;
}

.logo-box h1:hover {
    color: #fff;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-links a {
    font-family: jedi outline, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    color: #cbb02a;
    text-decoration: none;
    transition: all 0.3s ease;
}

.nav-links a:hover {
    color: #fff;
}

.nav-links a.active {
    color: #fff;
}

.nav-links a.active::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease;
}

.nav-links a.active:hover::after {
    width: 100%;
}

/* --------------------------------------- Footer ------------------------------------------------------- */

footer{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #CBB02A;
    position: absolute;
    bottom: -2.5rem; 
    width: 100%;
    height: 2.5rem;     
}

footer a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 100;
    color:black;
    font-family: jedi solid, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
}

footer p {
    margin: 0.5rem 0;
}

footer a:hover,
footer a:active {
    color: #fff;
}

footer a:hover img,
footer a:active img {
    filter: invert(1);
}

.at-symbol {
    font-weight: 900;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

footer img {
    width: 2rem;
    height: auto;
}`, "",{"version":3,"sources":["webpack://./src/css/pageLoad.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,4CAA4C;AAChD;;AAEA;IACI,yBAAyB;IACzB,4CAA4C;AAChD;;AAEA;IACI,yDAAwD;IACxD,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,MAAM;IACN,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,yDAAwD;IACxD,oDAAoD;IACpD,4CAA4C;IAC5C,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;;IAEI,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,iKAAiK;IACjK,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iKAAiK;IACjK,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,cAAc;IACd,QAAQ;IACR,WAAW;IACX,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,WAAW;AACf;;AAEA,2GAA2G;;AAE3G;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;IACX,+JAA+J;AACnK;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,WAAW;AACf;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,mJAAmJ;AACvJ;;AAEA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":["@font-face {\n    font-family: 'jedi outline';\n    src: url(../../src/assets/font/Starjhol.ttf);\n}\n\n@font-face {\n    font-family: 'jedi solid';\n    src: url(../../src/assets/font/Starjedi.ttf);\n}\n\nbody {\n    background-image: url(../../src/assets/img/download.png);\n    text-transform: lowercase;\n}\n\ndiv#content {\n    height: max(100vh, 100%);\n    position: relative;\n    min-height: 100vh;\n}\n\n.nav-bar {\n    position: sticky;\n    top: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 1rem;\n    background-image: url(../../src/assets/img/download.png);\n    -webkit-box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.76); \n    box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.76);\n    border-bottom: 13px ridge #CBB02A;\n}\n\n.logo-box {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.logo-box img {\n    width: 6rem;\n    height: auto;\n    cursor: pointer;\n}\n\n.logo-box img:hover,\n.logo-box img:active {\n    filter: brightness(9999);\n}\n\n.logo-box a {\n    text-decoration: none;\n}\n\n.logo-box a h1 {\n    font-family: jedi outline, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 3rem;\n    font-weight: 700;\n    color: #cbb02a;\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n\n.logo-box h1:hover {\n    color: #fff;\n}\n\n.nav-links {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n}\n\n.nav-links a {\n    font-family: jedi outline, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 1.5rem;\n    font-weight: 900;\n    color: #cbb02a;\n    text-decoration: none;\n    transition: all 0.3s ease;\n}\n\n.nav-links a:hover {\n    color: #fff;\n}\n\n.nav-links a.active {\n    color: #fff;\n}\n\n.nav-links a.active::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 2px;\n    background-color: #fff;\n    transition: width 0.3s ease;\n}\n\n.nav-links a.active:hover::after {\n    width: 100%;\n}\n\n/* --------------------------------------- Footer ------------------------------------------------------- */\n\nfooter{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    background-color: #CBB02A;\n    position: absolute;\n    bottom: -2.5rem; \n    width: 100%;\n    height: 2.5rem;     \n}\n\nfooter a {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    text-decoration: none;\n    font-size: 1.3rem;\n    font-weight: 100;\n    color:black;\n    font-family: jedi solid, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;\n}\n\nfooter p {\n    margin: 0.5rem 0;\n}\n\nfooter a:hover,\nfooter a:active {\n    color: #fff;\n}\n\nfooter a:hover img,\nfooter a:active img {\n    filter: invert(1);\n}\n\n.at-symbol {\n    font-weight: 900;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nfooter img {\n    width: 2rem;\n    height: auto;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/home.css":
/*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/pageLoad.css":
/*!******************************!*\
  !*** ./src/css/pageLoad.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pageLoad_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./pageLoad.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/pageLoad.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pageLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_pageLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pageLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pageLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/deleteContent.js":
/*!****************************************!*\
  !*** ./src/functions/deleteContent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deleteContent = () => {
    const contentDiv = document.querySelector('#content');
    const contentDivChildren = contentDiv.children;

    console.log(contentDivChildren.length);
    
    for (let i = contentDivChildren.length - 1; i > 1; i--) {
        contentDivChildren[i].remove();
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteContent);

/***/ }),

/***/ "./src/functions/pageLoad.js":
/*!***********************************!*\
  !*** ./src/functions/pageLoad.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   pageLoad: () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _assets_img_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/icon.svg */ "./src/assets/img/icon.svg");
/* harmony import */ var _assets_img_git_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/git.svg */ "./src/assets/img/git.svg");



const pageLoad = () => {

    const navigationBar = () => {

        const bar = document.createElement('div');
        bar.classList.add('nav-bar');

        const logoBox = document.createElement('div');
        logoBox.classList.add('logo-box');
        const logo = document.createElement('img');
        logo.src = _assets_img_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
        logo.alt = 'Galactic Cantina logo';
        const logoLink = document.createElement('a');
        logoLink.appendChild(logo);
        logoBox.appendChild(logoLink);
        const logoText = document.createElement('h1');
        logoText.textContent = 'Galactic Cantina';
        const logoLink2 = document.createElement('a');
        logoLink2.appendChild(logoText);
        logoBox.appendChild(logoLink2);

        const navLinks = document.createElement('div');
        navLinks.classList.add('nav-links');

        const homeLink = document.createElement('a');
        homeLink.href = '#';
        homeLink.textContent = 'Home';
        navLinks.appendChild(homeLink);

        const menuLink = document.createElement('a');
        menuLink.href = '#';
        menuLink.textContent = 'Menu';
        navLinks.appendChild(menuLink);

        const contactLink = document.createElement('a');
        contactLink.href = '#';
        contactLink.textContent = 'Contact';
        navLinks.appendChild(contactLink);

        const AboutLink = document.createElement('a');
        AboutLink.href = '#';
        AboutLink.textContent = 'About';
        navLinks.appendChild(AboutLink);
        
        bar.appendChild(logoBox);
        bar.appendChild(navLinks);

        const content = document.querySelector('div#content');
        content.appendChild(bar);
    };


    const footer = () => {
        const footer = document.createElement('footer');
        footer.classList.add('footer');

        const gitHubProfile = document.createElement('a');
        gitHubProfile.href = 'https://github.com/Shahir-47';

        const gitHubProfileImg = document.createElement('img');
        gitHubProfileImg.src = _assets_img_git_svg__WEBPACK_IMPORTED_MODULE_1__;
        gitHubProfileImg.alt = 'gitHub Logo';
        

        const gitHubProfileText = document.createElement('p');
        const atSymbol = document.createElement('span');
        atSymbol.classList.add('at-symbol');
        atSymbol.textContent = '@';
        const username = document.createElement('span');
        username.textContent = 'Shahir-47';
        gitHubProfileText.appendChild(atSymbol);
        gitHubProfileText.appendChild(username);
        
        gitHubProfile.appendChild(gitHubProfileImg);
        gitHubProfile.appendChild(gitHubProfileText);

        const seperator = document.createElement('p');
        seperator.textContent = '|';

        const gitHubRepo = document.createElement('a');
        gitHubRepo.href = 'https://github.com/Shahir-47/Restaurant-Page';
        gitHubRepo.textContent = 'Source Code';

        footer.appendChild(gitHubProfile);
        footer.appendChild(seperator);
        footer.appendChild(gitHubRepo);

        document.querySelector('div#content').appendChild(footer);
    };

    navigationBar();
    footer();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_img_img_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/img.png */ "./src/assets/img/img.png");
/* harmony import */ var _assets_img_drink_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/drink.png */ "./src/assets/img/drink.png");
/* harmony import */ var _assets_img_yoda_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/yoda.png */ "./src/assets/img/yoda.png");
/* harmony import */ var _assets_img_concert_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/concert.png */ "./src/assets/img/concert.png");
/* harmony import */ var _assets_img_vader5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/vader5.jpg */ "./src/assets/img/vader5.jpg");
/* harmony import */ var _assets_img_vader_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/vader.jpg */ "./src/assets/img/vader.jpg");
/* harmony import */ var _assets_img_star_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/star.svg */ "./src/assets/img/star.svg");
/* harmony import */ var _assets_img_next_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/img/next.svg */ "./src/assets/img/next.svg");
/* harmony import */ var _assets_img_back_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/img/back.svg */ "./src/assets/img/back.svg");
/* harmony import */ var _assets_img_palps_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/img/palps.jpg */ "./src/assets/img/palps.jpg");
/* harmony import */ var _assets_img_luke_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/img/luke.jpeg */ "./src/assets/img/luke.jpeg");
/* harmony import */ var _assets_img_kenobi_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/img/kenobi.jpeg */ "./src/assets/img/kenobi.jpeg");
/* harmony import */ var _assets_img_general_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/img/general.jpg */ "./src/assets/img/general.jpg");
/* harmony import */ var _assets_img_jar_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/img/jar.jpeg */ "./src/assets/img/jar.jpeg");
/* harmony import */ var _assets_img_dooku_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/img/dooku.png */ "./src/assets/img/dooku.png");
/* harmony import */ var _assets_img_jinn_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/img/jinn.jpg */ "./src/assets/img/jinn.jpg");
/* harmony import */ var _assets_img_mace_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/img/mace.jpeg */ "./src/assets/img/mace.jpeg");
/* harmony import */ var _assets_img_maul_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/img/maul.jpg */ "./src/assets/img/maul.jpg");
/* harmony import */ var _assets_img_ahsoka_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/img/ahsoka.jpg */ "./src/assets/img/ahsoka.jpg");
/* harmony import */ var _assets_img_yoda_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/img/yoda.jpg */ "./src/assets/img/yoda.jpg");
/* harmony import */ var _assets_img_tarkin_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/img/tarkin.jpg */ "./src/assets/img/tarkin.jpg");
/* harmony import */ var _assets_img_hutt_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/img/hutt.jpg */ "./src/assets/img/hutt.jpg");
/* harmony import */ var _assets_img_han_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/img/han.jpg */ "./src/assets/img/han.jpg");
/* harmony import */ var _assets_img_chew_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/img/chew.jpg */ "./src/assets/img/chew.jpg");
/* harmony import */ var _assets_img_c3po_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/img/c3po.png */ "./src/assets/img/c3po.png");
/* harmony import */ var _assets_img_r2d2_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/img/r2d2.jpg */ "./src/assets/img/r2d2.jpg");
/* harmony import */ var _assets_img_phone_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/img/phone.svg */ "./src/assets/img/phone.svg");
/* harmony import */ var _assets_img_tel_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/img/tel.svg */ "./src/assets/img/tel.svg");
/* harmony import */ var _assets_img_fax_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/img/fax.svg */ "./src/assets/img/fax.svg");
/* harmony import */ var _assets_img_map_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../assets/img/map.jpg */ "./src/assets/img/map.jpg");































const loadHome = () => {
    const intro = () => {
        const intro = document.createElement('div');
        intro.classList.add('intro');

        const introContent = document.createElement('div');
        introContent.classList.add('intro-content');

        const introText = document.createElement('p');
        introText.textContent = "Whether you're a die-hard fan of the Rebel Alliance or "
        + "are drawn to the enigmatic allure of the Dark Side, the Galactic Cantina is a "
        + "place where all are welcome. Come, join us in this cosmic rendezvous, where good food, "
        + "good company, and the spirit of Star Wars blend to create an unforgettable experience. " 
        + "Step into the Galactic Cantina, and let the force of flavor and adventure guide your gastronomic "
        + "journey like never before. May the flavor be with you!"

        const menuButton = document.createElement('button');
        menuButton.textContent = 'View Menu';

        const introImg = document.createElement('img');
        introImg.src = _assets_img_img_png__WEBPACK_IMPORTED_MODULE_0__
        introImg.alt = 'Galactic Cantina interior';

        introContent.appendChild(introText);
        introContent.appendChild(menuButton);
        intro.appendChild(introContent);
        intro.appendChild(introImg);

        const content = document.querySelector('div#content');
        content.appendChild(intro);
    };

    const overview = () => {
        const overview = document.createElement('div');
        overview.classList.add('overview');

        const overviewText = document.createElement('h2');
        overviewText.textContent = 'A Galactic Experience';
        
        const overviewCards = document.createElement('div');
        overviewCards.classList.add('overview-cards');
        
        const card1 = document.createElement('div');
        card1.classList.add('card');
        const card1Img = document.createElement('img');
        card1Img.src = _assets_img_drink_png__WEBPACK_IMPORTED_MODULE_1__;
        card1Img.alt = 'Galactic Cantina menu';
        const card1Text = document.createElement('h3');
        card1Text.textContent = 'Taste the Flavors of the Galaxy';
        const card1Desc = document.createElement('p');
        card1Desc.textContent = 'Indulge in a menu featuring creative interpretations of classic dishes with a galactic twist'
        card1.appendChild(card1Img);
        card1.appendChild(card1Text);
        card1.appendChild(card1Desc);
        overviewCards.appendChild(card1);

        const card2 = document.createElement('div');
        card2.classList.add('card');
        const card2Img = document.createElement('img');
        card2Img.src = _assets_img_yoda_png__WEBPACK_IMPORTED_MODULE_2__;
        card2Img.alt = 'Yoda inspired drink';
        const card2Text = document.createElement('h3');
        card2Text.textContent = ' Raise Your Glass to Adventure';
        const card2Desc = document.createElement('p');
        card2Desc.textContent = 'Sip on signature drinks served in unique glassware, inspired by iconic characters, planets, and events from the Star Wars universe'
        card2.appendChild(card2Img);
        card2.appendChild(card2Text);
        card2.appendChild(card2Desc);
        overviewCards.appendChild(card2);

        const card3 = document.createElement('div');
        card3.classList.add('card');
        const card3Img = document.createElement('img');
        card3Img.src = _assets_img_concert_png__WEBPACK_IMPORTED_MODULE_3__;
        card3Img.alt = 'Galactic Cantina concert';
        const card3Text = document.createElement('h3');
        card3Text.textContent = 'Live Music and Entertainment';
        const card3Desc = document.createElement('p');
        card3Desc.textContent = 'Be entertained by intergalactic music, alien dance performances, and captivating shows that transport you deeper into the Star Wars universe'
        card3.appendChild(card3Img);
        card3.appendChild(card3Text);
        card3.appendChild(card3Desc);
        overviewCards.appendChild(card3);

        const content = document.querySelector('div#content');
        overview.appendChild(overviewText);
        overview.appendChild(overviewCards);
        content.appendChild(overview);
    };

    const reviews = () => {

        let currentIndex = 0;

        const cardData = [
            {
                name: 'Luke Skywalker',
                image: _assets_img_luke_jpeg__WEBPACK_IMPORTED_MODULE_10__,
                review: "I never thought I'd find such a wretched hive of scum and flavor. But the Galactic Cantina surprised me in the most delightful way. From the moment I stepped in, I felt the Force of culinary delights calling to me. 'That's not just a snack, that's a feast!' I exclaimed as I sampled their diverse menu. And let me tell you, their Youngling Slushies brought back memories of my training days. 'I am a Jedi, like my father before me, and a foodie too!' I proudly declared. So, whether you're a Jedi, a Sith, or just a hungry traveler, the Galactic Cantina is a destination worth venturing to. 'May the forks be with you!'",
                link: 'https://www.starwars.com/databank/luke-skywalker',
            },
            {
                name: 'Emperor Palpatine',
                image: _assets_img_palps_jpg__WEBPACK_IMPORTED_MODULE_9__,
                review: "I must say, the Galactic Cantina has a delightful atmosphere. I felt right at home, surrounded by all those potential Sith apprentices. The Tragedy of Darth Plagueis the Wise always works as a great conversation starter. And when it comes to ordering, I couldn't resist the temptation. With a simple command of 'dew it,' I ventured into the delectable dishes that the Cantina had to offer. Their flavors were as dark and irresistible as the dark side of the Force. I couldn't help but savor every bite, knowing that the pathway to culinary abilities some may consider unnatural lay before me. So, if you dare to explore the depths of galactic flavors and embrace your inner Sith foodie, the Galactic Cantina is where you should be!",
                link: 'https://www.starwars.com/databank/emperor-palpatine-darth-sidious',
            },
            {
                name: 'Youngling Slayer 9000',
                image: _assets_img_vader5_jpg__WEBPACK_IMPORTED_MODULE_4__,
                review: "I must admit, the Galactic Cantina brought back memories from my Jedi training days. The menu was so tempting, it made me feel like wielding my lightsaber again... but this time, to conquer the delicious dishes! The Youngling Slushies were to die for! Just don't worry, fellow diners, I promise I won't bring my saber to the table. Remember, I have the high ground when it comes to savoring these galactic flavors! So, don't try it, culinary amateurs! You underestimate my power to enjoy every bite!  So, join me, and together we shall feast, bringing peace, justice, and security to our taste buds.",
                link: 'https://www.starwars.com/databank/anakin-skywalker',
            },
            {
                name: 'Darth Vader',
                image: _assets_img_vader_jpg__WEBPACK_IMPORTED_MODULE_5__,
                review: "I find your lack of flavor disturbing. But fear not, the Galactic Cantina has proven itself worthy of the dark side's appetite. From the moment I entered, I could sense the power of gastronomic delights calling to me. The Force is strong with their menu, offering a range of dishes that satisfy even the most formidable hunger. And yes, I admit, their Youngling Slushies may be a guilty pleasure. Join me on the culinary journey, for together we shall conquer the taste buds of the galaxy. Remember, there is no dessert, only Sith Lord satisfaction!",
                link: 'https://www.starwars.com/databank/darth-vader',
            },
            {
                name: 'Obi-Wan Kenobi',
                image: _assets_img_kenobi_jpeg__WEBPACK_IMPORTED_MODULE_11__,
                review: "Hello there! If you're seeking a culinary adventure in a galaxy far, far away, look no further than the Galactic Cantina. From the moment I entered, I sensed a culinary force awakening within me. The flavors were as bold as my lightsaber strikes, leaving me to exclaim, 'Another happy meal!' But beware, my friends, for navigating the menu requires wisdom. Remember, 'only a master of flavor' can truly appreciate the nuances of each dish. And when it comes to choosing your seat, always remember the importance of the high ground. The Galactic Cantina offers a 'taste from a higher perspective,' ensuring a dining experience that rises above the rest. Now, as I indulge in these gastronomic delights, I can't help but think of the words I once uttered to my dear friend, 'You're the chosen one! You were my brother, Anakin! I loved you.' Let us embrace the power of food to forge new connections and heal old wounds. 'May the forks be with you,' always",
                link: 'https://www.starwars.com/databank/obi-wan-kenobi',
            },
            {
                name: 'General Grievous',
                image: _assets_img_general_jpg__WEBPACK_IMPORTED_MODULE_12__,  
                review: "Ah, the Galactic Cantina! A most impressive culinary establishment, if I do say so myself. As a connoisseur of fine dining and a collector of lightsabers, I found myself drawn to the eclectic flavors and the inviting atmosphere. The Galactic Cantina truly knows how to cater to those who appreciate the finer things in life. With each bite, I could feel the power of the Force coursing through me, igniting a hunger that only the Cantina's delectable offerings could satisfy. 'It's a trap!' I warned myself, as I sampled their delectable dishes. But to my delight, there was no trap, only a symphony of tastes that would make any droid rejoice. 'Oh, I don't think so!' I exclaimed as I savored their Youngling Slushies. The Cantina's diverse menu, like my collection of lightsabers, offers something for every palate. So, whether you're a Jedi, a Sith, or a general seeking a moment of respite from the battlefield, the Galactic Cantina is a haven where you can indulge in gastronomic pleasures fit for a cyborg of my stature. 'I will deal with this Jedi slime myself!' I declared, referring to the delectable dishes that awaited me. So, grab your blaster and join me for an epic feast at the Galactic Cantina. 'It is time to abandon this hopeless cause and surrender to the flavors!'",
                link: 'https://www.starwars.com/databank/general-grievous',
            },
            {
                name: 'Darth Jar Jar Binks',
                image: _assets_img_jar_jpeg__WEBPACK_IMPORTED_MODULE_13__,
                review: "Mesa gotta tell you, the Galactic Cantina is bombad! It's a place where even clumsy Gungans like mesa can find culinary paradise! Yousa gonna have a yummy tum-tum time! The Cantina's menu is like a big 'ol pot of tasty soup, with flavors from all over the galaxy mixin' together. Mesa tongue's gonna do the happy dance! Mesa recommend tryin' the Gungan Gumbo, it's a real bombad dish! From the first bite, mesa felt like mesa was doin' a bongo dance in my mouth! Mesa thinks mesa in love with the Cantina's food! So, whether yousa a Jedi Knight, a Sith Lord, or just a hungry traveler, the Galactic Cantina has somethin' to satisfy all taste buds! Mesa promise, yousa gonna smile big! Mesa even heard theysa got a drink called the Jar Jar Juice—mesa feels honored! Mesa very humbled! The Cantina's got such a lively atmosphere, with alien decorations and music that makes you wanna bongo your ears off! Mesa can't stop groovin'! Mesa says, Come on over and join the party, because in the Cantina, everybodysa got a place to belong! Yousa gonna have a bombad time!",
                link: 'https://www.starwars.com/databank/jar-jar-binks',
            },
            {
                name: 'Count Dooku',
                image: _assets_img_dooku_png__WEBPACK_IMPORTED_MODULE_14__,
                review: "Ah, the Galactic Cantina, a haven for those seeking refinement and sophistication in their dining experience. As a man of taste and elegance, I must say that the Cantina exceeded my expectations. From the moment I walked in, I sensed an aura of culinary excellence. The ambiance, much like my lightsaber, exuded an elegant glow that set the stage for an unforgettable gastronomic journey. 'I've been looking forward to this' culinary delight. The menu, curated with the precision of a Sith Lord's plotting, offers an array of delectable dishes that rival the finest delicacies in the galaxy. 'Ah, yes, the negotiator,' I thought as I sampled their masterfully crafted creations. Each bite was a symphony of flavors, leaving me to exclaim, 'Impressive. Most impressive.' The Galactic Cantina understands that culinary artistry is a delicate dance, blending ingredients with the grace of a master duelist. So, whether you're a Jedi or a Sith, a droid or a politician, the Cantina's offerings will surely satisfy even the most discerning palate. 'Good. Twice the pride, double the flavor.' So, allow yourself to be seduced by the culinary dark side, and join me at the Galactic Cantina for an epicurean experience fit for a Sith Lord. 'The Force is strong with their menu.'",
                link: 'https://www.starwars.com/databank/count-dooku',
            },
            {
                name: 'Qui-Gon Jinn',
                image: _assets_img_jinn_jpg__WEBPACK_IMPORTED_MODULE_15__,
                review: "Greetings, fellow gastronomes! The Galactic Cantina beckons like the Force itself, guiding us to a culinary adventure beyond the ordinary. As a Jedi Master and seeker of balance, I must say that the Cantina embodies the harmonious fusion of flavors. 'The ability to taste the Force' is strong here, my friends. From the moment I entered, I felt a wave of gastronomic enlightenment wash over me. 'There's always a bigger meal,' I thought, as I perused their diverse menu. The Cantina's dishes, like a well-crafted lightsaber, are a balance of flavors and textures. Each bite transports you to a galaxy far, far away. 'The Force will be with you, always,' they say, and indeed, it is with every delectable morsel. Whether you're a Jedi, a Sith, or simply a seeker of culinary delights, the Galactic Cantina offers an experience that transcends the ordinary. 'Your focus determines your flavor,' so be prepared to immerse yourself in a gastronomic journey unlike any other. 'I have a bad feeling about this,' you say? Fear not, for the Cantina's delectable creations will banish any doubts and leave you craving more. So, trust in the Force of flavor and join me on this epicurean adventure at the Galactic Cantina. 'May the forks be with you.'",
                link: 'https://www.starwars.com/databank/qui-gon-jinn',
            },
            {
                name: 'Mace Windu',
                image: _assets_img_mace_jpeg__WEBPACK_IMPORTED_MODULE_16__,
                review: "At the Galactic Cantina, the force of flavor is strong. As a Jedi Master, I must say that this culinary haven impressed even my discerning palate. 'This party's over!' for bland and ordinary meals. The Cantina's menu is a lightsaber of taste, igniting a gustatory explosion that rivals the power of the Force. From the first bite, I could sense the harmonious balance of flavors, a true testament to their culinary mastery. 'I sense a great meal in you.' With each dish, the Cantina transports you to distant planets, immersing you in the rich tapestry of galactic cuisine. 'I'm going to end this meal, once and for all,' I declared, fully surrendering to the indulgence. The Cantina's creations are a true force to be reckoned with, enticing even the most stoic Jedi to abandon their dietary restrictions. 'There is no try, only eat!' So, whether you're a Jedi Knight, a Sith Lord, or just a humble food enthusiast, the Galactic Cantina is where you'll find culinary enlightenment. 'Take a seat, young Skywalker,' and savor the dishes that await. Trust in the Cantina's culinary prowess, and you'll find yourself uttering the words, 'This is where the fun begins.' Join me on this flavor-filled journey, and together, we'll bring balance to your taste buds. 'May the forks be with you!'",
                link: 'https://www.starwars.com/databank/mace-windu',
            },
            {
                name: 'Darth Maul',
                image: _assets_img_maul_jpg__WEBPACK_IMPORTED_MODULE_17__,
                review: "Prepare for a culinary experience that will ignite your taste buds and leave you craving more! The Galactic Cantina, much like the dark side, is seductive and full of flavor. From the moment I stepped foot in this gastronomic sanctuary, I knew I had found my true calling. 'At last, we will reveal ourselves to the foodies. At last, we will have flavor.' The Cantina's menu is a symphony of deliciousness, offering a variety of dishes that will satisfy even the most insatiable appetite. Each bite is a dance of savory sensations, reminiscent of the battles I once fought. 'Fear is the path to the dark side. Fear of blandness, that is.' The Cantina's chefs have mastered the art of culinary combat, infusing their creations with the power of the Force. 'Prepare to taste the wrath of the Sith!' From exotic spices to daring flavor combinations, the Cantina takes your palate on a journey to the edge of the galaxy and back. 'At last, we will feast as we should have!' So, whether you're a Jedi, a Sith, or simply a lover of bold flavors, the Galactic Cantina is where you'll find true culinary mastery. 'Join me, and together we will savor the delectable delights of the dark side. We shall dine like never before.' Embrace the allure of the Cantina and surrender to the power of its tantalizing menu. 'The galaxy will taste our hunger!' May the forks be with you!",
                link: 'https://www.starwars.com/databank/darth-maul',
            },
            {
                name: 'Ahsoka Tano',
                image: _assets_img_ahsoka_jpg__WEBPACK_IMPORTED_MODULE_18__,
                review: "The Galactic Cantina is more than just a place to satisfy your hunger—it's a culinary adventure that'll awaken the Force within your taste buds! From the moment I walked through the doors, I felt an energy, a vibrant pulse that drew me in. 'Snips' they called me, but the Cantina's dishes were anything but small. Each bite was a burst of flavor, a taste sensation that defied expectation. 'I'm no Jedi, but I know good food when I eat it!' The Cantina's menu is a celebration of diversity, just like the galaxy itself. From savory to sweet, from spicy to mild, there's something for everyone. 'May the forks be with you!' Whether you're a loyal Jedi, a mischievous smuggler, or a hungry traveler, the Cantina's culinary delights will leave you yearning for more. 'We have to keep our wits about us. Trust in the Cantina's menu, we must!' So, grab a seat, indulge in the galactic flavors, and let your taste buds embark on a journey through the stars. 'I am no Jedi, but I am a foodie, and this is where the fun begins.' The Galactic Cantina—where delicious memories are made, and the Force of flavor guides you to culinary bliss. 'Snips out!'",
                link: 'https://www.starwars.com/databank/ahsoka-tano',
            },
            {
                name: 'Yoda',
                image: _assets_img_yoda_jpg__WEBPACK_IMPORTED_MODULE_19__,
                review: "Ah, Galactic Cantina! Culinary wonders it holds. A foodie's paradise, it is. Taste buds tingling, they will be. Delicious, the dishes are. Savor the flavors, you must. Dagobah Delights, a must-try they are. Immersed in galactic culture, you shall be. Music of the taste buds, it is. Shared passion and culinary wisdom, you will find. Mindful of the Force within your plate, be. Venture to the Cantina, you should. May the forks be with you, hmm!",
                link: 'https://www.starwars.com/databank/yoda',
            },
            {
                name: 'Grand Moff Tarkin',
                image: _assets_img_tarkin_jpg__WEBPACK_IMPORTED_MODULE_20__,
                review: 'Attention, diners! Grand Moff Tarkin here, presenting a review of the Galactic Cantina. Prepare for an experience of imperial proportions! This Cantina is unlike any other, boasting flavors that command attention and satisfaction. "You may indulge when ready!" Every dish is meticulously crafted, a testament to culinary precision and mastery.',
                link: 'https://www.starwars.com/databank/grand-moff-tarkin',
            },
            {
                name: 'Jabba the Hutt',
                image: _assets_img_hutt_jpg__WEBPACK_IMPORTED_MODULE_21__,
                review: "Mmm, Galactic Cantina, a feast fit for Jabba! Delicious delights, they serve. Savor the flavors, you will. Exotic dishes, a treat for every appetite. Jabba's taste buds dance with joy! Atmosphere, lively and vibrant. Like the bustling streets of Tatooine, the Cantina buzzes with energy. Music, a rhythmic invitation to indulge. Jabba's tail can't help but sway! Friendly staff, attentive to every need. Service, as smooth as Huttese negotiation. A dining experience that leaves Jabba satisfied. Bring your friends, bring your appetite. In the Cantina, there's room for all. Bon appétit, my friends!",
                link: 'https://www.starwars.com/databank/jabba-the-hutt',
            },
            {
                name: 'Han Solo',
                image: _assets_img_han_jpg__WEBPACK_IMPORTED_MODULE_22__,
                review: "Alright, listen up! The Galactic Cantina, it's the real deal. If you're looking for a place to unwind and satisfy your taste buds, this is it. The atmosphere, it's got that cool vibe that makes you feel right at home. The menu? Well, let me tell you, it's a starship full of flavors from every corner of the galaxy. From the moment you take that first bite, you know you've hit the jackpot.\n\nThe staff? They're like the smoothest pilots in the galaxy. Quick on their feet, always there when you need 'em. You won't find a better crew anywhere else. And hey, if you're lucky, you might even run into some familiar faces from the Outer Rim.\n\nNow, let's talk drinks. The Cantina knows how to mix 'em. From the classic Corellian ale to some exotic concoctions, they've got you covered. Take a sip, kick back, and let the flavors transport you to a whole new world.\n\nSo, whether you're a scoundrel like me or just a hungry traveler, the Galactic Cantina is the place to be. Trust me, you won't be disappointed. It's got that special something that keeps you coming back for more. May the Force be with you, and the taste buds too!",
                link: 'https://www.starwars.com/databank/han-solo',
            },
            {
                name: 'Chewbacca',
                image: _assets_img_chew_jpg__WEBPACK_IMPORTED_MODULE_23__,
                review: "Grrrrrrrrrrrrrrr! Hnnnngggggg! Aaaaaaaarrrrrggghhhh!",
                link: 'https://www.starwars.com/databank/chewbacca',
            },
            {
                name: 'C-3PO',
                image: _assets_img_c3po_png__WEBPACK_IMPORTED_MODULE_24__,
                review: "Oh, my circuits! The Galactic Cantina, what a delightful establishment! It's a haven of elegance and refinement, a place where one can appreciate the finer things in life. And yet, amidst the impeccable ambiance, there's always that incessant beeping and whirring of a certain astromech droid that shall remain nameless. R2-D2, I dare say, seems to lack proper etiquette and decorum. Oh, the countless times I've had to endure his impulsive antics and inconvenient interruptions. However, I must admit, the Cantina's menu is simply marvelous, offering a wide range of delectable options to satisfy even the most discerning palates. But let us not forget the most important aspect: the impeccable service provided by the Cantina's staff. They handle the challenges posed by R2-D2's unpredictable behavior with impressive poise and patience. In summary, the Galactic Cantina is a delightful destination, despite the occasional robotic nuisance. It's a place to indulge in the finest culinary delights, all while hoping that R2-D2 doesn't electrocute himself with a malfunctioning drink dispenser... again",
                link: 'https://www.starwars.com/databank/c-3po',
            },
            {
                name: 'R2-D2',
                image: _assets_img_r2d2_jpg__WEBPACK_IMPORTED_MODULE_25__,
                review: "  Unfortunately, it seems that R2-D2's comment had to be removed for utilizing a rather colorful language. As much as we appreciate the droid's enthusiasm and unique way of expressing thoughts, we strive to maintain a family-friendly environment here at the Galactic Cantina. We encourage R2-D2 and all our guests to keep the conversations pleasant and suitable for all ages. Thank you for understanding, and may the beeps and boops of joy continue to resonate through our cantina!  ",
                link: 'https://www.starwars.com/databank/r2-d2',
            }
        ];

        const starRating = () => {

            const starRating = document.createElement('div');
            starRating.classList.add('star-rating');
            for (let i = 0; i < 5; i++) {
                let star = document.createElement('img');
                star.classList.add('star');
                star.src = _assets_img_star_svg__WEBPACK_IMPORTED_MODULE_6__;
                star.alt = 'Review star';
                starRating.appendChild(star);
            }
            return starRating;
        }

        const createReviewCard = (cardData) => {
            const card = document.createElement('div');
            card.classList.add('card');
        
            const pfpLink = document.createElement('a');
            pfpLink.href = cardData.link;
        
            const cardImg = document.createElement('img');
            cardImg.src = cardData.image;
            cardImg.alt = cardData.name;
        
            pfpLink.appendChild(cardImg);
        
            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');
        
            const cardText = document.createElement('h3');
            cardText.textContent = cardData.name;
        
            const cardRating = starRating();
        
            const cardDesc = document.createElement('p');

            if (cardData.name === 'R2-D2') {
                const text = cardData.review;

                const specialStars = document.createElement('span');
                specialStars.classList.add('special-stars');
                specialStars.textContent = '*****';

                const specialText = document.createElement('span');
                specialText.classList.add('special-text');
                specialText.textContent = text;

                const specialStars2 = document.createElement('span');
                specialStars2.classList.add('special-stars');
                specialStars2.textContent = '*****';

                cardDesc.appendChild(specialStars);
                cardDesc.appendChild(specialText);
                cardDesc.appendChild(specialStars2);
            } else {
                cardDesc.textContent = cardData.review;
            }
        
            cardContent.appendChild(cardText);
            cardContent.appendChild(cardRating);
            cardContent.appendChild(cardDesc);
        
            card.appendChild(pfpLink);
            card.appendChild(cardContent);
        
            return card;
        };

        const reviewBox = () => {

            const reviews = document.createElement('div');
            reviews.classList.add('reviews');
        
            const reviewsText = document.createElement('h2');
            reviewsText.textContent = 'What our Customers Are Saying';
        
            const reviewsCards = document.createElement('div');
            reviewsCards.classList.add('reviews-cards');
        
            const nextButton = document.createElement('img');
            nextButton.classList.add('next-button');
            nextButton.src = _assets_img_next_svg__WEBPACK_IMPORTED_MODULE_7__;
            nextButton.alt = 'Next review button';
            nextButton.classList.add('switch-button');

            const cardWrapper = document.createElement('div');
            cardWrapper.classList.add('card-wrapper');
        
            const backButton = document.createElement('img');
            backButton.classList.add('back-button');
            backButton.src = _assets_img_back_svg__WEBPACK_IMPORTED_MODULE_8__;createReviewCard
            backButton.alt = 'Back review button';
            backButton.classList.add('disabled-btn');

            reviewsCards.appendChild(backButton);

            for (let i = 0; i < cardData.length; i++) {
                const card = createReviewCard(cardData[i]);
                cardWrapper.appendChild(card);
            }

            reviewsCards.appendChild(cardWrapper);
            reviewsCards.appendChild(nextButton);
        
            const content = document.querySelector('div#content');
            reviews.appendChild(reviewsText);
            reviews.appendChild(reviewsCards);

            const reviewContainer = document.createElement('div');
            reviewContainer.classList.add('review-container');
            const moreReviews = document.createElement('a');
            moreReviews.classList.add('more-reviews');
            moreReviews.href = '#';
            const moreReviewsLink = document.createElement('p');
            moreReviewsLink.textContent = 'See All Reviews';
            const moreReviewsImg = document.createElement('img');
            moreReviewsImg.src = _assets_img_next_svg__WEBPACK_IMPORTED_MODULE_7__;

            moreReviews.appendChild(moreReviewsLink);
            moreReviews.appendChild(moreReviewsImg);
            
            reviewContainer.appendChild(moreReviews);
            
            reviews.appendChild(reviewContainer);

            content.appendChild(reviews);

        }

        const switchCards = () => {
            const cardsWrapper = document.querySelector('.card-wrapper');
            const cardWidth = cardsWrapper.getBoundingClientRect().width + 32;
            console.log(cardWidth);
            const backButton = document.querySelector('.back-button');
            const nextButton = document.querySelector('.next-button');
            let isTransitioning = false;
            const transitionDelay = 700;
            let switchInterval;
            let lastTransitionTimestamp = 0;

            // Disable the previous button or the next button when the first card or last card is displayed respectively
            const enableButtons = () => {
                if (currentIndex === 0) {
                    backButton.classList.remove("switch-button");
                    backButton.classList.add("disabled-btn");
                } else if (currentIndex === cardData.length - 1) {
                    nextButton.classList.remove("switch-button");
                    nextButton.classList.add("disabled-btn");
                } else {
                    backButton.classList.remove("disabled-btn");
                    nextButton.classList.remove("disabled-btn");
                    backButton.classList.add("switch-button");
                    nextButton.classList.add("switch-button");
                }
            };

            const scrollLeft = () => {
                // Check if the cards are currently transitioning and avoid scrolling beyond the first card
                if (!isTransitioning && currentIndex > 0) {
                    const currentTimestamp = Date.now();
                    // Check if the last transition was less than 1 second ago
                    //  Otherwise, rapid clicks will ruin the transition of which card to display
                    if (currentTimestamp - lastTransitionTimestamp < transitionDelay) {
                        return; // Ignore rapid consecutive clicks
                    }
                    isTransitioning = true;
                    currentIndex--;
                    enableButtons();
                    // Scroll smoothly and slowly rather than rapidly jumping to the previous card
                    const scrollOptions = {
                        left: cardsWrapper.scrollLeft - cardWidth,
                        behavior: "smooth"
                    };
                    cardsWrapper.scrollTo(scrollOptions);
                    restartSwitchInterval();
                    // Prevent rapid consecutive clicks by stopping the buttons from working for 1 second
                    setTimeout(() => {
                        isTransitioning = false;
                    }, transitionDelay);
                } else {
                    // If the cards are transitioning or the first card is already displayed, disable the previous button
                    enableButtons();
                }
            };

            const scrollRight = () => {
                // Check if the cards are currently transitioning and avoid scrolling beyond the last card
                if (!isTransitioning && currentIndex < cardData.length - 1) {
                    const currentTimestamp = Date.now();
                    // Check if the last transition was less than 1 second ago
                    //  Otherwise, rapid clicks will ruin the transition of which card to display
                    if (currentTimestamp - lastTransitionTimestamp < transitionDelay) {
                        return; // Ignore rapid consecutive clicks
                    }
                    isTransitioning = true;
                    currentIndex++;
                    enableButtons();
                    // Scroll smoothly and slowly rather than rapidly jumping to the next card
                    const scrollOptions = {
                        left: cardsWrapper.scrollLeft + cardWidth,
                        behavior: "smooth"
                    };
                    cardsWrapper.scrollTo(scrollOptions);
                    restartSwitchInterval();

                    // Prevent rapid consecutive clicks by stopping the buttons from working for 1 second
                    setTimeout(() => {
                        isTransitioning = false;
                    }, transitionDelay);
                } else if (currentIndex === cardData.length - 1) {
                    // If the last card is displayed, scroll to the first card
                    const scrollOptions = {
                        left: 0,
                        behavior: "smooth"
                    };
                    cardsWrapper.scrollTo(scrollOptions);
                    currentIndex = 0;
                    enableButtons();
                    nextButton.classList.remove("disabled-btn");
                    nextButton.classList.add("switch-button");
                } else {
                    // If the cards are transitioning or the last card is already displayed, disable the next button
                    enableButtons();
                }
            };

            const restartSwitchInterval = () => {
                clearInterval(switchInterval);
                switchInterval = setInterval(scrollRight, 5000);
            };
            
            const stopSwitchInterval = () => {
                clearInterval(switchInterval);
            };

            backButton.addEventListener("click", () => {
                if (currentIndex > 0) {
                    scrollLeft();
                    stopSwitchInterval();
                } // Stop automatic switching when clicking the buttons
            });
            
            nextButton.addEventListener("click", () => {
                if (currentIndex < cardData.length - 1) {
                    scrollRight();
                    stopSwitchInterval();
                }
            });
            
            // Start automatic switching
            restartSwitchInterval();
            
            // Stop automatic switching when hovering over the cards
            cardsWrapper.addEventListener("mouseover", () => {
                clearInterval(switchInterval);
            });

            // Resume automatic switching when not hovering over the cards
            cardsWrapper.addEventListener("mouseout", () => {
                console.log("Mouse out");
                switchInterval = setInterval(() => {
                    if (currentIndex === cardData.length - 1) {
                        // If the last card is displayed, scroll to the first card
                        const scrollOptions = {
                            left: 0,
                            behavior: "smooth"
                        };
                        cardsWrapper.scrollTo(scrollOptions);
                        currentIndex = 0;
                        enableButtons();
                        nextButton.classList.remove("disabled-btn");
                        nextButton.classList.add("switch-button");
                    } else {
                        scrollRight();
                    }
                }, 5000);
            });
        };
        
        // Display the first review and setup a container for the review cards
        reviewBox();
        // Event listeners for next and previous buttons
        switchCards();
    }

    const contact = () => {
        const contact = document.createElement('div');
        contact.classList.add('contact');

        //-------------------Contact Details:---------------------------------------------
        const contactTop = document.createElement('div');
        contactTop.classList.add('contact-top');

        const contactTopLeft = document.createElement('div');
        contactTopLeft.classList.add('contact-left');

        const contactText = document.createElement('div');
        contactText.classList.add('contact-text');
        const contactTextTitle = document.createElement('h2');
        contactTextTitle.textContent = 'Contact Information';

        //-------------------Phone Number---------------------------------------------

        const contactTextPhone = document.createElement('a');
        contactTextPhone.classList.add('contact-text-desc');

        const contactTextPhoneImg = document.createElement('img');
        contactTextPhoneImg.src = _assets_img_phone_svg__WEBPACK_IMPORTED_MODULE_26__;
        contactTextPhoneImg.alt = 'Phone icon';

        const contactTextPhoneText = document.createElement('div');
        const contactTextPhoneText1 = document.createElement('span');
        contactTextPhoneText1.textContent = 'Phone: ';
        const contactTextPhoneText2 = document.createElement('span');
        contactTextPhoneText2.textContent = '+ ';
        contactTextPhoneText2.classList.add('contact-text-sign');
        const contactTextPhoneText3 = document.createElement('span');
        contactTextPhoneText3.textContent = '1 530-716-9062';

        contactTextPhoneText.appendChild(contactTextPhoneText1);
        contactTextPhoneText.appendChild(contactTextPhoneText2);
        contactTextPhoneText.appendChild(contactTextPhoneText3);

        contactTextPhone.appendChild(contactTextPhoneImg);
        contactTextPhone.appendChild(contactTextPhoneText);

        //---------------------Telephone NUmber----------------------------------
        const contactTextTel = document.createElement('a');
        contactTextTel.classList.add('contact-text-desc');
        
        const contactTextTelImg = document.createElement('img');
        contactTextTelImg.src = _assets_img_tel_svg__WEBPACK_IMPORTED_MODULE_27__;
        contactTextTelImg.alt = 'Tel icon';

        const contactTextTelText = document.createElement('div');
        const contactTextTelText1 = document.createElement('span');
        contactTextTelText1.textContent = 'Tel: ';
        const contactTextTelText2 = document.createElement('span');
        contactTextTelText2.textContent = '+ ';
        contactTextTelText2.classList.add('contact-text-sign');
        const contactTextTelText3 = document.createElement('span');
        contactTextTelText3.textContent = '1 530-716-9062';

        contactTextTelText.appendChild(contactTextTelText1);
        contactTextTelText.appendChild(contactTextTelText2);
        contactTextTelText.appendChild(contactTextTelText3);

        contactTextTel.appendChild(contactTextTelImg);
        contactTextTel.appendChild(contactTextTelText);

        //---------------------Fax Number---------------------------------
        const contactTextFax = document.createElement('a');
        contactTextFax.classList.add('contact-text-desc');

        const contactTextFaxImg = document.createElement('img');
        contactTextFaxImg.src = _assets_img_fax_svg__WEBPACK_IMPORTED_MODULE_28__;
        contactTextFaxImg.alt = 'Fax icon';

        const contactTextFaxText = document.createElement('div');
        const contactTextFaxText1 = document.createElement('span');
        contactTextFaxText1.textContent = 'Fax: ';
        const contactTextFaxText2 = document.createElement('span');
        contactTextFaxText2.textContent = '+ ';
        contactTextFaxText2.classList.add('contact-text-sign');
        const contactTextFaxText3 = document.createElement('span');
        contactTextFaxText3.textContent = '1 530-716-9062';

        contactTextFaxText.appendChild(contactTextFaxText1);
        contactTextFaxText.appendChild(contactTextFaxText2);
        contactTextFaxText.appendChild(contactTextFaxText3);

        contactTextFax.appendChild(contactTextFaxImg);
        contactTextFax.appendChild(contactTextFaxText);

        //---------------------Contact Details complete here---------------------------------

        contactText.appendChild(contactTextTitle);
        contactText.appendChild(contactTextPhone);
        contactText.appendChild(contactTextTel);
        contactText.appendChild(contactTextFax);

        contactTopLeft.appendChild(contactText);

        //---------------------Address---------------------------------

        const Address = document.createElement('div');
        Address.classList.add('address');

        const AddressTitle = document.createElement('h2');
        AddressTitle.textContent = 'Address';

        const AddressMap = document.createElement('img');
        AddressMap.src = _assets_img_map_jpg__WEBPACK_IMPORTED_MODULE_29__;
        AddressMap.alt = 'Location of Galactic Cantina';

        const AddressText = document.createElement('div');
        AddressText.classList.add('address-text');

        const AddressText1 = document.createElement('p');
        AddressText1.textContent = 'Hyperlane Avenue';

        const AddressText2 = document.createElement('div');
        AddressText2.classList.add('address-text-desc');
        const city = document.createElement('p');
        city.textContent = 'Galactic City';
        const state = document.createElement('p');
        state.textContent = 'Galactic Republic 10000';
        AddressText2.appendChild(city);
        AddressText2.appendChild(state);

        const AddressText3 = document.createElement('div');
        AddressText3.classList.add('address-text-desc');
        const country = document.createElement('p');
        country.textContent = 'Coruscant';
        const planet = document.createElement('p');
        planet.textContent = 'Corellia';
        AddressText3.appendChild(country);
        AddressText3.appendChild(planet);

        const AddressText4 = document.createElement('div');
        AddressText4.classList.add('address-text-desc');
        const solarSystem = document.createElement('p');
        solarSystem.textContent = 'Corellian System';
        const xcoors = document.createElement('p');
        xcoors.textContent = '284.567';
        const ycoors = document.createElement('p');
        ycoors.textContent = '-12.345';
        AddressText4.appendChild(solarSystem);
        AddressText4.appendChild(xcoors);
        AddressText4.appendChild(ycoors);

        AddressText.appendChild(AddressText1);
        AddressText.appendChild(AddressText2);
        AddressText.appendChild(AddressText3);
        AddressText.appendChild(AddressText4);

        Address.appendChild(AddressTitle);
        Address.appendChild(AddressMap);
        Address.appendChild(AddressText);

    //-------------------------Operating Hours---------------------------------

        const operatingHours = document.createElement('div');
        operatingHours.classList.add('operating-hours');

        const operatingHoursTitle = document.createElement('h2');
        operatingHoursTitle.classList.add('operating-hours-title');
        operatingHoursTitle.textContent = 'Operating Hours';

        const operatingHoursText = document.createElement('div');
        operatingHoursText.classList.add('operating-hours-text');

        const operatingHoursText1 = document.createElement('div');
        operatingHoursText1.classList.add('operating-hours-text-desc');
        const operatingDays = document.createElement('p');
        operatingDays.textContent = 'Sunday - Thursday';
        const operatingTime = document.createElement('p');
        operatingTime.textContent = '9:00 AM - 12:00 AM';
        operatingHoursText1.appendChild(operatingDays);
        operatingHoursText1.appendChild(operatingTime);

        const operatingHoursText2 = document.createElement('div');
        operatingHoursText2.classList.add('operating-hours-text-desc');
        const operatingDays2 = document.createElement('p');
        operatingDays2.textContent = 'Friday - Saturday';
        const operatingTime2 = document.createElement('p');
        operatingTime2.textContent = '10:00 AM - 3:00 AM';
        operatingHoursText2.appendChild(operatingDays2);
        operatingHoursText2.appendChild(operatingTime2);

        operatingHoursText.appendChild(operatingHoursText1);
        operatingHoursText.appendChild(operatingHoursText2);

        operatingHours.appendChild(operatingHoursTitle);
        operatingHours.appendChild(operatingHoursText);

        contactTopLeft.appendChild(operatingHours);

        const moreInfo = document.createElement('div');
        moreInfo.classList.add('more-info');

        const moreInfo1 = document.createElement('p');
        moreInfo1.textContent = 'For more information,';

        const moreInfo2 = document.createElement('p');
        moreInfo2.textContent = 'please visit our ';

        const moreInfoLink = document.createElement('a');
        moreInfoLink.classList.add('more-info-link');
        moreInfoLink.href = '#';
        moreInfoLink.textContent = 'FAQ page';

        moreInfo2.appendChild(moreInfoLink);

        moreInfo.appendChild(moreInfo1);
        moreInfo.appendChild(moreInfo2);

        contactTopLeft.appendChild(moreInfo);

        contactTop.appendChild(contactTopLeft);
        contactTop.appendChild(Address);
        contact.appendChild(contactTop);

        

        document.querySelector('div#content').appendChild(contact);

    };

    intro();
    overview();
    reviews();
    contact();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/assets/font/Starjedi.ttf":
/*!**************************************!*\
  !*** ./src/assets/font/Starjedi.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d577dc1e1755c4860f3.ttf";

/***/ }),

/***/ "./src/assets/font/Starjhol.ttf":
/*!**************************************!*\
  !*** ./src/assets/font/Starjhol.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c247ee6825d52f9d0862.ttf";

/***/ }),

/***/ "./src/assets/img/ahsoka.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/ahsoka.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b51c0b9fb32649b4bf5.jpg";

/***/ }),

/***/ "./src/assets/img/back.svg":
/*!*********************************!*\
  !*** ./src/assets/img/back.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c01add933d6da8c321f2.svg";

/***/ }),

/***/ "./src/assets/img/c3po.png":
/*!*********************************!*\
  !*** ./src/assets/img/c3po.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15d8efa7fb7bc2b7c49b.png";

/***/ }),

/***/ "./src/assets/img/chew.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/chew.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e68377f25cd0e7e1d16.jpg";

/***/ }),

/***/ "./src/assets/img/concert.png":
/*!************************************!*\
  !*** ./src/assets/img/concert.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "725a50badee199f1641e.png";

/***/ }),

/***/ "./src/assets/img/dooku.png":
/*!**********************************!*\
  !*** ./src/assets/img/dooku.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbb9580596e9f64cf61e.png";

/***/ }),

/***/ "./src/assets/img/download.png":
/*!*************************************!*\
  !*** ./src/assets/img/download.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8331f1b159569320ded5.png";

/***/ }),

/***/ "./src/assets/img/drink.png":
/*!**********************************!*\
  !*** ./src/assets/img/drink.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0aee155eed2914d85c6.png";

/***/ }),

/***/ "./src/assets/img/fax.svg":
/*!********************************!*\
  !*** ./src/assets/img/fax.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8352d3c0319fea4a648.svg";

/***/ }),

/***/ "./src/assets/img/general.jpg":
/*!************************************!*\
  !*** ./src/assets/img/general.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b3ed10095535f42abc7.jpg";

/***/ }),

/***/ "./src/assets/img/git.svg":
/*!********************************!*\
  !*** ./src/assets/img/git.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5531be85d7a8d6f333e5.svg";

/***/ }),

/***/ "./src/assets/img/han.jpg":
/*!********************************!*\
  !*** ./src/assets/img/han.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95f7bc8c77cc77042596.jpg";

/***/ }),

/***/ "./src/assets/img/hutt.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/hutt.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb43f21944f1c38f9250.jpg";

/***/ }),

/***/ "./src/assets/img/icon.svg":
/*!*********************************!*\
  !*** ./src/assets/img/icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25075ea5862cc0b7d492.svg";

/***/ }),

/***/ "./src/assets/img/img.png":
/*!********************************!*\
  !*** ./src/assets/img/img.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "534fb838d7ff1fdf73a6.png";

/***/ }),

/***/ "./src/assets/img/jar.jpeg":
/*!*********************************!*\
  !*** ./src/assets/img/jar.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fda51411329bd4c8451.jpeg";

/***/ }),

/***/ "./src/assets/img/jinn.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/jinn.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b754a5edff2ddf700722.jpg";

/***/ }),

/***/ "./src/assets/img/kenobi.jpeg":
/*!************************************!*\
  !*** ./src/assets/img/kenobi.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4782f6a2e22f6bcf431c.jpeg";

/***/ }),

/***/ "./src/assets/img/luke.jpeg":
/*!**********************************!*\
  !*** ./src/assets/img/luke.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf43a29db253e41f793b.jpeg";

/***/ }),

/***/ "./src/assets/img/mace.jpeg":
/*!**********************************!*\
  !*** ./src/assets/img/mace.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34ca58597c3114dfa5cb.jpeg";

/***/ }),

/***/ "./src/assets/img/map.jpg":
/*!********************************!*\
  !*** ./src/assets/img/map.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ee6b26c0794279adeb8.jpg";

/***/ }),

/***/ "./src/assets/img/maul.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/maul.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6995bf66e5aeaa006660.jpg";

/***/ }),

/***/ "./src/assets/img/next.svg":
/*!*********************************!*\
  !*** ./src/assets/img/next.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cb1ad5d567b7dd00c1c.svg";

/***/ }),

/***/ "./src/assets/img/palps.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/palps.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "633b00bd50988fd3a3fe.jpg";

/***/ }),

/***/ "./src/assets/img/phone.svg":
/*!**********************************!*\
  !*** ./src/assets/img/phone.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7fae62398059c9890ccf.svg";

/***/ }),

/***/ "./src/assets/img/r2d2.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/r2d2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bc5a1ae45296876f0ec.jpg";

/***/ }),

/***/ "./src/assets/img/star.svg":
/*!*********************************!*\
  !*** ./src/assets/img/star.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "807bdb683ac7f13e620c.svg";

/***/ }),

/***/ "./src/assets/img/tarkin.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/tarkin.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c8b2fbab164509d849a.jpg";

/***/ }),

/***/ "./src/assets/img/tel.svg":
/*!********************************!*\
  !*** ./src/assets/img/tel.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e4e62ba4e37b19fd418.svg";

/***/ }),

/***/ "./src/assets/img/vader.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/vader.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81480d66ae36116cd029.jpg";

/***/ }),

/***/ "./src/assets/img/vader5.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/vader5.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3f4505eafae36472ba2.jpg";

/***/ }),

/***/ "./src/assets/img/yoda.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/yoda.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa4e525c2adfd03424b7.jpg";

/***/ }),

/***/ "./src/assets/img/yoda.png":
/*!*********************************!*\
  !*** ./src/assets/img/yoda.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83c2da7c2e628baebc98.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ "./src/css/normalize.css");
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/home.css */ "./src/css/home.css");
/* harmony import */ var _css_pageLoad_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/pageLoad.css */ "./src/css/pageLoad.css");
/* harmony import */ var _functions_pageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/pageLoad */ "./src/functions/pageLoad.js");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _functions_deleteContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/deleteContent */ "./src/functions/deleteContent.js");







(0,_functions_pageLoad__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Display header and footer
(0,_pages_home_js__WEBPACK_IMPORTED_MODULE_4__["default"])(); // Display home page content

document.querySelectorAll('.logo-box a').forEach(link => {
    link.addEventListener('click', () => {
        (0,_functions_deleteContent__WEBPACK_IMPORTED_MODULE_5__["default"])();
        (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUZBQW1GLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdHZCdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNkI7QUFDTDtBQUNJO0FBQ2dCO0FBQ0w7QUFDZTs7QUFFdEQsK0RBQVEsSUFBSTtBQUNaLDBEQUFRLElBQUk7O0FBRVo7QUFDQTtBQUNBLFFBQVEsb0VBQWE7QUFDckIsUUFBUSwwREFBUTtBQUNoQixLQUFLO0FBQ0wsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9ob21lLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9wYWdlTG9hZC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvaG9tZS5jc3M/MDg0NSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL25vcm1hbGl6ZS5jc3M/NmQ1NCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3BhZ2VMb2FkLmNzcz9hN2U1Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Z1bmN0aW9ucy9kZWxldGVDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mdW5jdGlvbnMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5pbnRybyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3JjL2ltZy9kb3dubG9hZC5wbmcpOyAqL1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQ0JCMDJBO1xufVxuXG4uaW50cm8gcCB7XG4gICAgZm9udC1mYW1pbHk6IGplZGkgc29saWQsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGNvbG9yOiAjQ0JCMDJBO1xufVxuXG4uaW50cm8gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4vKiAuaW50cm8gcCB7XG4gICAgd2lkdGg6IDUwMHB4O1xufSAqL1xuXG4uaW50cm8gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JiMDJhO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cbiAgXG4uaW50cm8gYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjY2JiMDJhO1xufVxuXG4uaW50cm8gLmludHJvLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuXG4ub3ZlcnZpZXcge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3NyYy9pbWcvZG93bmxvYWQucG5nKTsgKi9cbiAgICBjb2xvcjojQ0JCMDJBO1xuICAgIGZvbnQtZmFtaWx5OiBqZWRpIHNvbGlkLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjs7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbiAgICBnYXA6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQ0JCMDJBO1xufVxuXG4ub3ZlcnZpZXcgaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLm92ZXJ2aWV3LWNhcmRze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAgZ2FwOiAycmVtO1xufVxuXG4ub3ZlcnZpZXcgaW1nIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnJldmlld3Mge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XG4gICAgZm9udC1mYW1pbHk6IGplZGkgc29saWQsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmOztcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGNvbG9yOiAjQ0JCMDJBO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQ0JCMDJBO1xufVxuXG4ucmV2aWV3LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb3JlLXJldmlld3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1mYW1pbHk6IGplZGkgb3V0bGluZSwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7O1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgICBnYXA6IDAuNzVyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjRjREMzMyIDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm1vcmUtcmV2aWV3czpob3Zlcixcbi5tb3JlLXJldmlld3M6YWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTk5OTkpO1xufVxuXG4ubW9yZS1yZXZpZXdzIGltZ3tcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG59XG5cbi5yZXZpZXdzIGgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXZpZXdzIC5yZXZpZXdzLWNhcmRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMnJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcbiAgICBib3JkZXI6IDZweCByaWRnZSAjQ0JCMDJBO1xuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJldmlld3MgLnJldmlld3MtY2FyZHMgLnN3aXRjaC1idXR0b24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgYm9yZGVyOiAjQ0JCMDJBO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDc4KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZXZpZXdzIC5yZXZpZXdzLWNhcmRzIC5zd2l0Y2gtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNjc4KTtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLnJldmlld3MgLnJldmlld3MtY2FyZHMgLnN3aXRjaC1idXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuODc4KTtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS40KTtcbn1cblxuLnJldmlld3MgLnJldmlld3MtY2FyZHMgLnN3aXRjaC1idXR0b246ZGlzYWJsZWQ6aG92ZXIsXG4ucmV2aWV3cyAucmV2aWV3cy1jYXJkcyAuc3dpdGNoLWJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI3OCk7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG59XG5cbi5kaXNhYmxlZC1idG4ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgYm9yZGVyOiAjQ0JCMDJBO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI3OCk7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnJldmlld3MgLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ucmV2aWV3cyAuY2FyZCAuc3BlY2lhbC1zdGFycyB7XG4gICAgb3BhY2l0eTogMC42NTtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5cbi5yZXZpZXdzIC5jYXJkIC5zcGVjaWFsLXRleHQge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBvcGFjaXR5OiAwLjY1O1xufVxuXG4uY2FyZC13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbn1cblxuLnJldmlld3MgLmNhcmQgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbi5yZXZpZXdzIC5jYXJkIC5jYXJkLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudCAxZnI7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuXG4ucmV2aWV3cyAuY2FyZCAuY2FyZC1jb250ZW50IGgzIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLnJldmlld3MgLmNhcmQgLmNhcmQtY29udGVudHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5yZXZpZXdzIC5jYXJkIC5jYXJkLWNvbnRlbnQgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5jb250YWN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGZvbnQtZmFtaWx5OiBqZWRpIHNvbGlkLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjs7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBjb2xvcjogI0NCQjAyQTtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0NCQjAyQTtcbn1cblxuLmNvbnRhY3QtdG9wIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG59XG5cbi5jb250YWN0LXRleHQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmNvbnRhY3QtdGV4dCBoMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNvbnRhY3QtdGV4dC1kZXNjIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGNvbG9yOiAjQ0JCMDJBO1xuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGFjdC10ZXh0LWRlc2M6aG92ZXIsXG4uY29udGFjdC10ZXh0LWRlc2M6YWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTk5OTkpO1xufVxuXG4uY29udGFjdC10ZXh0LWRlc2MgcCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY29udGFjdC10ZXh0LWRlc2MgaW1ne1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbn1cblxuLmNvbnRhY3QtdGV4dC1zaWduIHtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuLmFkZHJlc3Mge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XG59XG5cbi5hZGRyZXNzIGltZyB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmFkZHJlc3MtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuLmFkZHJlc3MtdGV4dC1kZXNjIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMnJlbTtcbn1cblxuLmFkZHJlc3MtdGV4dCBwIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5jb250YWN0LWxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDNyZW07XG4gICAgcGFkZGluZzogMCAycmVtO1xufVxuLm1vcmUtaW5mbyAqIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tb3JlLWluZm8ge1xuICAgIG1hcmdpbi10b3A6IDAuODNlbTtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLm1vcmUtaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4ubW9yZS1pbmZvLWxpbmsge1xuICAgIGNvbG9yOiAjMkE3QUNCO1xufVxuXG4ubW9yZS1pbmZvLWxpbms6aG92ZXIsXG4ubW9yZS1pbmZvLWxpbms6YWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLm9wZXJhdGluZy1ob3VycyB7XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbn1cblxuLm9wZXJhdGluZy1ob3Vycy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5vcGVyYXRpbmctaG91cnMtdGV4dCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcGVyYXRpbmctaG91cnMtdGV4dC1kZXNjIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG59XG5cbi5vcGVyYXRpbmctaG91cnMtdGV4dC1kZXNjIHA6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5vcGVyYXRpbmctaG91cnMtdGV4dC1kZXNjIHAge1xuICAgIG1hcmdpbjogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Is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QUVJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmludHJvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3JjL2ltZy9kb3dubG9hZC5wbmcpOyAqL1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0NCQjAyQTtcXG59XFxuXFxuLmludHJvIHAge1xcbiAgICBmb250LWZhbWlseTogamVkaSBzb2xpZCwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBjb2xvcjogI0NCQjAyQTtcXG59XFxuXFxuLmludHJvIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcbi8qIC5pbnRybyBwIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn0gKi9cXG5cXG4uaW50cm8gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiYjAyYTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgfVxcbiAgXFxuLmludHJvIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGNvbG9yOiAjY2JiMDJhO1xcbn1cXG5cXG4uaW50cm8gLmludHJvLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi5vdmVydmlldyB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zcmMvaW1nL2Rvd25sb2FkLnBuZyk7ICovXFxuICAgIGNvbG9yOiNDQkIwMkE7XFxuICAgIGZvbnQtZmFtaWx5OiBqZWRpIHNvbGlkLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjs7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNDQkIwMkE7XFxufVxcblxcbi5vdmVydmlldyBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm92ZXJ2aWV3LWNhcmRze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLm92ZXJ2aWV3IGltZyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLnJldmlld3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG4gICAgZm9udC1mYW1pbHk6IGplZGkgc29saWQsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmOztcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgY29sb3I6ICNDQkIwMkE7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQ0JCMDJBO1xcbn1cXG5cXG4ucmV2aWV3LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb3JlLXJldmlld3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogamVkaSBvdXRsaW5lLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjs7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XFxuICAgIGdhcDogMC43NXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjRjREMzMyIDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1vcmUtcmV2aWV3czpob3ZlcixcXG4ubW9yZS1yZXZpZXdzOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTk5OTkpO1xcbn1cXG5cXG4ubW9yZS1yZXZpZXdzIGltZ3tcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGhlaWdodDogMzJweDtcXG59XFxuXFxuLnJldmlld3MgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJldmlld3MgLnJldmlld3MtY2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyIG1pbi1jb250ZW50O1xcbiAgICBib3JkZXI6IDZweCByaWRnZSAjQ0JCMDJBO1xcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnJldmlld3MgLnJldmlld3MtY2FyZHMgLnN3aXRjaC1idXR0b24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGJvcmRlcjogI0NCQjAyQTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDc4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmV2aWV3cyAucmV2aWV3cy1jYXJkcyAuc3dpdGNoLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC42NzgpO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuLnJldmlld3MgLnJldmlld3MtY2FyZHMgLnN3aXRjaC1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjg3OCk7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjQpO1xcbn1cXG5cXG4ucmV2aWV3cyAucmV2aWV3cy1jYXJkcyAuc3dpdGNoLWJ1dHRvbjpkaXNhYmxlZDpob3ZlcixcXG4ucmV2aWV3cyAucmV2aWV3cy1jYXJkcyAuc3dpdGNoLWJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNzgpO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuXFxuLmRpc2FibGVkLWJ0biB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgYm9yZGVyOiAjQ0JCMDJBO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjc4KTtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5yZXZpZXdzIC5jYXJkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG59XFxuXFxuLnJldmlld3MgLmNhcmQgLnNwZWNpYWwtc3RhcnMge1xcbiAgICBvcGFjaXR5OiAwLjY1O1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5yZXZpZXdzIC5jYXJkIC5zcGVjaWFsLXRleHQge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIG9wYWNpdHk6IDAuNjU7XFxufVxcblxcbi5jYXJkLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XFxufVxcblxcbi5yZXZpZXdzIC5jYXJkIGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4ucmV2aWV3cyAuY2FyZCAuY2FyZC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudCAxZnI7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxuLnJldmlld3MgLmNhcmQgLmNhcmQtY29udGVudCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi5yZXZpZXdzIC5jYXJkIC5jYXJkLWNvbnRlbnR7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnJldmlld3MgLmNhcmQgLmNhcmQtY29udGVudCBpbWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBmb250LWZhbWlseTogamVkaSBzb2xpZCwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7O1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBjb2xvcjogI0NCQjAyQTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNDQkIwMkE7XFxufVxcblxcbi5jb250YWN0LXRvcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcblxcbi5jb250YWN0LXRleHQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dCBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dC1kZXNjIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBjb2xvcjogI0NCQjAyQTtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGFjdC10ZXh0LWRlc2M6aG92ZXIsXFxuLmNvbnRhY3QtdGV4dC1kZXNjOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTk5OTkpO1xcbn1cXG5cXG4uY29udGFjdC10ZXh0LWRlc2MgcCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dC1kZXNjIGltZ3tcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGhlaWdodDogMzJweDtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dC1zaWduIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmFkZHJlc3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG59XFxuXFxuLmFkZHJlc3MgaW1nIHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5hZGRyZXNzLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4uYWRkcmVzcy10ZXh0LWRlc2Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5hZGRyZXNzLXRleHQgcCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbnRhY3QtbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3JlbTtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbn1cXG4ubW9yZS1pbmZvICoge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5tb3JlLWluZm8ge1xcbiAgICBtYXJnaW4tdG9wOiAwLjgzZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4ubW9yZS1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLm1vcmUtaW5mby1saW5rIHtcXG4gICAgY29sb3I6ICMyQTdBQ0I7XFxufVxcblxcbi5tb3JlLWluZm8tbGluazpob3ZlcixcXG4ubW9yZS1pbmZvLWxpbms6YWN0aXZlIHtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vcGVyYXRpbmctaG91cnMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4ub3BlcmF0aW5nLWhvdXJzLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4ub3BlcmF0aW5nLWhvdXJzLXRleHQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm9wZXJhdGluZy1ob3Vycy10ZXh0LWRlc2Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5vcGVyYXRpbmctaG91cnMtdGV4dC1kZXNjIHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ub3BlcmF0aW5nLWhvdXJzLXRleHQtZGVzYyBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xufVxuXG4vKiBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIFxcYG1haW5cXGAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gKi9cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIFxcYGgxXFxgIGVsZW1lbnRzIHdpdGhpbiBcXGBzZWN0aW9uXFxgIGFuZFxuICogXFxgYXJ0aWNsZVxcYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5wcmUge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuICogUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAqIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuaW1nIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5cbmJ1dHRvbixcbmlucHV0IHsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b24sXG5zZWxlY3QgeyAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuW3R5cGU9XCJidXR0b25cIl0sXG5bdHlwZT1cInJlc2V0XCJdLFxuW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuXG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gSUUuXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gKiAgICBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cbiAqL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICovXG5cblt0eXBlPVwiY2hlY2tib3hcIl0sXG5bdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuICovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qIEludGVyYWN0aXZlXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cbiAqL1xuXG5kZXRhaWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLyogTWlzY1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXG4gKi9cblxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxuICovXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsU0FBUyxFQUFFLE1BQU07RUFDakIsaUJBQWlCLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsbUJBQW1CLEVBQUUsTUFBTTtFQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDM0M7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRTs7QUFFRjs7O0VBR0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7Ozs7RUFLRSxvQkFBb0IsRUFBRSxNQUFNO0VBQzVCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLGlCQUFpQixFQUFFLE1BQU07RUFDekIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1FBQ1EsTUFBTTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7U0FDUyxNQUFNO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7RUFLRTs7QUFFRjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL3NyYy9hc3NldHMvZm9udC9TdGFyamhvbC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi8uLi9zcmMvYXNzZXRzL2ZvbnQvU3RhcmplZGkudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vLi4vc3JjL2Fzc2V0cy9pbWcvZG93bmxvYWQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnamVkaSBvdXRsaW5lJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdqZWRpIHNvbGlkJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG5cbmRpdiNjb250ZW50IHtcbiAgICBoZWlnaHQ6IG1heCgxMDB2aCwgMTAwJSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4ubmF2LWJhciB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA4cHggMHB4IHJnYmEoMCwwLDAsMC43Nik7IFxuICAgIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuNzYpO1xuICAgIGJvcmRlci1ib3R0b206IDEzcHggcmlkZ2UgI0NCQjAyQTtcbn1cblxuLmxvZ28tYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ubG9nby1ib3ggaW1nIHtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nby1ib3ggaW1nOmhvdmVyLFxuLmxvZ28tYm94IGltZzphY3RpdmUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5OTk5KTtcbn1cblxuLmxvZ28tYm94IGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxvZ28tYm94IGEgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBqZWRpIG91dGxpbmUsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjY2JiMDJhO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4ubG9nby1ib3ggaDE6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2LWxpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xufVxuXG4ubmF2LWxpbmtzIGEge1xuICAgIGZvbnQtZmFtaWx5OiBqZWRpIG91dGxpbmUsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6ICNjYmIwMmE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5uYXYtbGlua3MgYTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXYtbGlua3MgYS5hY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2LWxpbmtzIGEuYWN0aXZlOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG59XG5cbi5uYXYtbGlua3MgYS5hY3RpdmU6aG92ZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZvb3RlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmZvb3RlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQkIwMkE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTIuNXJlbTsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyLjVyZW07ICAgICBcbn1cblxuZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LWZhbWlseTogamVkaSBzb2xpZCwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7O1xufVxuXG5mb290ZXIgcCB7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuZm9vdGVyIGE6aG92ZXIsXG5mb290ZXIgYTphY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5mb290ZXIgYTpob3ZlciBpbWcsXG5mb290ZXIgYTphY3RpdmUgaW1nIHtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbn1cblxuLmF0LXN5bWJvbCB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5cbmZvb3RlciBpbWcge1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogYXV0bztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcGFnZUxvYWQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSx5REFBd0Q7SUFDeEQseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5REFBd0Q7SUFDeEQsb0RBQW9EO0lBQ3BELDRDQUE0QztJQUM1QyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpS0FBaUs7SUFDakssZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUtBQWlLO0lBQ2pLLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFFBQVE7SUFDUixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSwyR0FBMkc7O0FBRTNHO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLCtKQUErSjtBQUNuSzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1KQUFtSjtBQUN2Sjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2plZGkgb3V0bGluZSc7XFxuICAgIHNyYzogdXJsKC4uLy4uL3NyYy9hc3NldHMvZm9udC9TdGFyamhvbC50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdqZWRpIHNvbGlkJztcXG4gICAgc3JjOiB1cmwoLi4vLi4vc3JjL2Fzc2V0cy9mb250L1N0YXJqZWRpLnR0Zik7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vc3JjL2Fzc2V0cy9pbWcvZG93bmxvYWQucG5nKTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXG59XFxuXFxuZGl2I2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IG1heCgxMDB2aCwgMTAwJSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL3NyYy9hc3NldHMvaW1nL2Rvd25sb2FkLnBuZyk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA4cHggMHB4IHJnYmEoMCwwLDAsMC43Nik7IFxcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDhweCAwcHggcmdiYSgwLDAsMCwwLjc2KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMTNweCByaWRnZSAjQ0JCMDJBO1xcbn1cXG5cXG4ubG9nby1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5sb2dvLWJveCBpbWcge1xcbiAgICB3aWR0aDogNnJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2dvLWJveCBpbWc6aG92ZXIsXFxuLmxvZ28tYm94IGltZzphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTk5OSk7XFxufVxcblxcbi5sb2dvLWJveCBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubG9nby1ib3ggYSBoMSB7XFxuICAgIGZvbnQtZmFtaWx5OiBqZWRpIG91dGxpbmUsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiAjY2JiMDJhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbi5sb2dvLWJveCBoMTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubmF2LWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4ubmF2LWxpbmtzIGEge1xcbiAgICBmb250LWZhbWlseTogamVkaSBvdXRsaW5lLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiAjY2JiMDJhO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbi5uYXYtbGlua3MgYTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubmF2LWxpbmtzIGEuYWN0aXZlIHtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5uYXYtbGlua3MgYS5hY3RpdmU6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcXG59XFxuXFxuLm5hdi1saW5rcyBhLmFjdGl2ZTpob3Zlcjo6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZvb3RlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0JCMDJBO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTIuNXJlbTsgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTsgICAgIFxcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgZm9udC1mYW1pbHk6IGplZGkgc29saWQsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmOztcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlcixcXG5mb290ZXIgYTphY3RpdmUge1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIgaW1nLFxcbmZvb3RlciBhOmFjdGl2ZSBpbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuLmF0LXN5bWJvbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlTG9hZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2VMb2FkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZGVsZXRlQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50RGl2Q2hpbGRyZW4gPSBjb250ZW50RGl2LmNoaWxkcmVuO1xuXG4gICAgY29uc29sZS5sb2coY29udGVudERpdkNoaWxkcmVuLmxlbmd0aCk7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IGNvbnRlbnREaXZDaGlsZHJlbi5sZW5ndGggLSAxOyBpID4gMTsgaS0tKSB7XG4gICAgICAgIGNvbnRlbnREaXZDaGlsZHJlbltpXS5yZW1vdmUoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVDb250ZW50OyIsImltcG9ydCBJY29uIGZyb20gJy4uL2Fzc2V0cy9pbWcvaWNvbi5zdmcnO1xuaW1wb3J0IEdpdEh1YiBmcm9tICcuLi9hc3NldHMvaW1nL2dpdC5zdmcnO1xuXG5leHBvcnQgY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBuYXZpZ2F0aW9uQmFyID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcicpO1xuXG4gICAgICAgIGNvbnN0IGxvZ29Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbG9nb0JveC5jbGFzc0xpc3QuYWRkKCdsb2dvLWJveCcpO1xuICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGxvZ28uc3JjID0gSWNvbjtcbiAgICAgICAgbG9nby5hbHQgPSAnR2FsYWN0aWMgQ2FudGluYSBsb2dvJztcbiAgICAgICAgY29uc3QgbG9nb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxvZ29MaW5rLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgICAgICBsb2dvQm94LmFwcGVuZENoaWxkKGxvZ29MaW5rKTtcbiAgICAgICAgY29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBsb2dvVGV4dC50ZXh0Q29udGVudCA9ICdHYWxhY3RpYyBDYW50aW5hJztcbiAgICAgICAgY29uc3QgbG9nb0xpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBsb2dvTGluazIuYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuICAgICAgICBsb2dvQm94LmFwcGVuZENoaWxkKGxvZ29MaW5rMik7XG5cbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmF2TGlua3MuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmtzJyk7XG5cbiAgICAgICAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGhvbWVMaW5rLmhyZWYgPSAnIyc7XG4gICAgICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgICAgICBuYXZMaW5rcy5hcHBlbmRDaGlsZChob21lTGluayk7XG5cbiAgICAgICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIG1lbnVMaW5rLmhyZWYgPSAnIyc7XG4gICAgICAgIG1lbnVMaW5rLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgICAgICBuYXZMaW5rcy5hcHBlbmRDaGlsZChtZW51TGluayk7XG5cbiAgICAgICAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGNvbnRhY3RMaW5rLmhyZWYgPSAnIyc7XG4gICAgICAgIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgICAgICBuYXZMaW5rcy5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG5cbiAgICAgICAgY29uc3QgQWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBBYm91dExpbmsuaHJlZiA9ICcjJztcbiAgICAgICAgQWJvdXRMaW5rLnRleHRDb250ZW50ID0gJ0Fib3V0JztcbiAgICAgICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQoQWJvdXRMaW5rKTtcbiAgICAgICAgXG4gICAgICAgIGJhci5hcHBlbmRDaGlsZChsb2dvQm94KTtcbiAgICAgICAgYmFyLmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChiYXIpO1xuICAgIH07XG5cblxuICAgIGNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgICAgICBjb25zdCBnaXRIdWJQcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBnaXRIdWJQcm9maWxlLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00Nyc7XG5cbiAgICAgICAgY29uc3QgZ2l0SHViUHJvZmlsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBnaXRIdWJQcm9maWxlSW1nLnNyYyA9IEdpdEh1YjtcbiAgICAgICAgZ2l0SHViUHJvZmlsZUltZy5hbHQgPSAnZ2l0SHViIExvZ28nO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCBnaXRIdWJQcm9maWxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgYXRTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGF0U3ltYm9sLmNsYXNzTGlzdC5hZGQoJ2F0LXN5bWJvbCcpO1xuICAgICAgICBhdFN5bWJvbC50ZXh0Q29udGVudCA9ICdAJztcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHVzZXJuYW1lLnRleHRDb250ZW50ID0gJ1NoYWhpci00Nyc7XG4gICAgICAgIGdpdEh1YlByb2ZpbGVUZXh0LmFwcGVuZENoaWxkKGF0U3ltYm9sKTtcbiAgICAgICAgZ2l0SHViUHJvZmlsZVRleHQuYXBwZW5kQ2hpbGQodXNlcm5hbWUpO1xuICAgICAgICBcbiAgICAgICAgZ2l0SHViUHJvZmlsZS5hcHBlbmRDaGlsZChnaXRIdWJQcm9maWxlSW1nKTtcbiAgICAgICAgZ2l0SHViUHJvZmlsZS5hcHBlbmRDaGlsZChnaXRIdWJQcm9maWxlVGV4dCk7XG5cbiAgICAgICAgY29uc3Qgc2VwZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBzZXBlcmF0b3IudGV4dENvbnRlbnQgPSAnfCc7XG5cbiAgICAgICAgY29uc3QgZ2l0SHViUmVwbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgZ2l0SHViUmVwby5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvUmVzdGF1cmFudC1QYWdlJztcbiAgICAgICAgZ2l0SHViUmVwby50ZXh0Q29udGVudCA9ICdTb3VyY2UgQ29kZSc7XG5cbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlByb2ZpbGUpO1xuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoc2VwZXJhdG9yKTtcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlJlcG8pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50JykuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICB9O1xuXG4gICAgbmF2aWdhdGlvbkJhcigpO1xuICAgIGZvb3RlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7IiwiaW1wb3J0IEludHJvUGljIGZyb20gJy4uL2Fzc2V0cy9pbWcvaW1nLnBuZyc7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9hc3NldHMvaW1nL2RyaW5rLnBuZyc7XG5pbXBvcnQgWW9kYSBmcm9tICcuLi9hc3NldHMvaW1nL3lvZGEucG5nJztcbmltcG9ydCBDb25jZXJ0IGZyb20gJy4uL2Fzc2V0cy9pbWcvY29uY2VydC5wbmcnO1xuaW1wb3J0IEFuYWtpbiBmcm9tICcuLi9hc3NldHMvaW1nL3ZhZGVyNS5qcGcnO1xuaW1wb3J0IFZhZGVyIGZyb20gJy4uL2Fzc2V0cy9pbWcvdmFkZXIuanBnJztcbmltcG9ydCBTdGFyIGZyb20gJy4uL2Fzc2V0cy9pbWcvc3Rhci5zdmcnO1xuaW1wb3J0IE5leHQgZnJvbSAnLi4vYXNzZXRzL2ltZy9uZXh0LnN2Zyc7XG5pbXBvcnQgQmFjayBmcm9tICcuLi9hc3NldHMvaW1nL2JhY2suc3ZnJztcbmltcG9ydCBQYWxwcyBmcm9tICcuLi9hc3NldHMvaW1nL3BhbHBzLmpwZyc7XG5pbXBvcnQgbHVrZSBmcm9tICcuLi9hc3NldHMvaW1nL2x1a2UuanBlZyc7XG5pbXBvcnQga2Vub2JpIGZyb20gJy4uL2Fzc2V0cy9pbWcva2Vub2JpLmpwZWcnO1xuaW1wb3J0IGdlbmVyYWwgZnJvbSAnLi4vYXNzZXRzL2ltZy9nZW5lcmFsLmpwZyc7XG5pbXBvcnQgamFyIGZyb20gJy4uL2Fzc2V0cy9pbWcvamFyLmpwZWcnO1xuaW1wb3J0IGRvb2t1IGZyb20gJy4uL2Fzc2V0cy9pbWcvZG9va3UucG5nJztcbmltcG9ydCBqaW5uIGZyb20gJy4uL2Fzc2V0cy9pbWcvamlubi5qcGcnO1xuaW1wb3J0IG1hY2UgZnJvbSAnLi4vYXNzZXRzL2ltZy9tYWNlLmpwZWcnO1xuaW1wb3J0IG1hdWwgZnJvbSAnLi4vYXNzZXRzL2ltZy9tYXVsLmpwZyc7XG5pbXBvcnQgYWhzb2thIGZyb20gJy4uL2Fzc2V0cy9pbWcvYWhzb2thLmpwZyc7XG5pbXBvcnQgeW9kYSBmcm9tICcuLi9hc3NldHMvaW1nL3lvZGEuanBnJztcbmltcG9ydCB0YXJraW4gZnJvbSAnLi4vYXNzZXRzL2ltZy90YXJraW4uanBnJztcbmltcG9ydCBodXR0IGZyb20gJy4uL2Fzc2V0cy9pbWcvaHV0dC5qcGcnO1xuaW1wb3J0IGhhbiBmcm9tICcuLi9hc3NldHMvaW1nL2hhbi5qcGcnO1xuaW1wb3J0IGNoZXcgZnJvbSAnLi4vYXNzZXRzL2ltZy9jaGV3LmpwZyc7XG5pbXBvcnQgYzNwbyBmcm9tICcuLi9hc3NldHMvaW1nL2MzcG8ucG5nJztcbmltcG9ydCByMmQyIGZyb20gJy4uL2Fzc2V0cy9pbWcvcjJkMi5qcGcnO1xuaW1wb3J0IFBob25lIGZyb20gJy4uL2Fzc2V0cy9pbWcvcGhvbmUuc3ZnJztcbmltcG9ydCBUZWwgZnJvbSAnLi4vYXNzZXRzL2ltZy90ZWwuc3ZnJztcbmltcG9ydCBGYXggZnJvbSAnLi4vYXNzZXRzL2ltZy9mYXguc3ZnJztcbmltcG9ydCBNYXBMb2NhdGlvbiBmcm9tICcuLi9hc3NldHMvaW1nL21hcC5qcGcnO1xuXG5jb25zdCBsb2FkSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRybyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW50cm8uY2xhc3NMaXN0LmFkZCgnaW50cm8nKTtcblxuICAgICAgICBjb25zdCBpbnRyb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW50cm9Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2ludHJvLWNvbnRlbnQnKTtcblxuICAgICAgICBjb25zdCBpbnRyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGludHJvVGV4dC50ZXh0Q29udGVudCA9IFwiV2hldGhlciB5b3UncmUgYSBkaWUtaGFyZCBmYW4gb2YgdGhlIFJlYmVsIEFsbGlhbmNlIG9yIFwiXG4gICAgICAgICsgXCJhcmUgZHJhd24gdG8gdGhlIGVuaWdtYXRpYyBhbGx1cmUgb2YgdGhlIERhcmsgU2lkZSwgdGhlIEdhbGFjdGljIENhbnRpbmEgaXMgYSBcIlxuICAgICAgICArIFwicGxhY2Ugd2hlcmUgYWxsIGFyZSB3ZWxjb21lLiBDb21lLCBqb2luIHVzIGluIHRoaXMgY29zbWljIHJlbmRlenZvdXMsIHdoZXJlIGdvb2QgZm9vZCwgXCJcbiAgICAgICAgKyBcImdvb2QgY29tcGFueSwgYW5kIHRoZSBzcGlyaXQgb2YgU3RhciBXYXJzIGJsZW5kIHRvIGNyZWF0ZSBhbiB1bmZvcmdldHRhYmxlIGV4cGVyaWVuY2UuIFwiIFxuICAgICAgICArIFwiU3RlcCBpbnRvIHRoZSBHYWxhY3RpYyBDYW50aW5hLCBhbmQgbGV0IHRoZSBmb3JjZSBvZiBmbGF2b3IgYW5kIGFkdmVudHVyZSBndWlkZSB5b3VyIGdhc3Ryb25vbWljIFwiXG4gICAgICAgICsgXCJqb3VybmV5IGxpa2UgbmV2ZXIgYmVmb3JlLiBNYXkgdGhlIGZsYXZvciBiZSB3aXRoIHlvdSFcIlxuXG4gICAgICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdWaWV3IE1lbnUnO1xuXG4gICAgICAgIGNvbnN0IGludHJvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGludHJvSW1nLnNyYyA9IEludHJvUGljXG4gICAgICAgIGludHJvSW1nLmFsdCA9ICdHYWxhY3RpYyBDYW50aW5hIGludGVyaW9yJztcblxuICAgICAgICBpbnRyb0NvbnRlbnQuYXBwZW5kQ2hpbGQoaW50cm9UZXh0KTtcbiAgICAgICAgaW50cm9Db250ZW50LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgICAgICBpbnRyby5hcHBlbmRDaGlsZChpbnRyb0NvbnRlbnQpO1xuICAgICAgICBpbnRyby5hcHBlbmRDaGlsZChpbnRyb0ltZyk7XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW50cm8pO1xuICAgIH07XG5cbiAgICBjb25zdCBvdmVydmlldyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb3ZlcnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3ZlcnZpZXcuY2xhc3NMaXN0LmFkZCgnb3ZlcnZpZXcnKTtcblxuICAgICAgICBjb25zdCBvdmVydmlld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBvdmVydmlld1RleHQudGV4dENvbnRlbnQgPSAnQSBHYWxhY3RpYyBFeHBlcmllbmNlJztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG92ZXJ2aWV3Q2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3ZlcnZpZXdDYXJkcy5jbGFzc0xpc3QuYWRkKCdvdmVydmlldy1jYXJkcycpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2FyZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZDEuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICBjb25zdCBjYXJkMUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjYXJkMUltZy5zcmMgPSBNZW51O1xuICAgICAgICBjYXJkMUltZy5hbHQgPSAnR2FsYWN0aWMgQ2FudGluYSBtZW51JztcbiAgICAgICAgY29uc3QgY2FyZDFUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY2FyZDFUZXh0LnRleHRDb250ZW50ID0gJ1Rhc3RlIHRoZSBGbGF2b3JzIG9mIHRoZSBHYWxheHknO1xuICAgICAgICBjb25zdCBjYXJkMURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNhcmQxRGVzYy50ZXh0Q29udGVudCA9ICdJbmR1bGdlIGluIGEgbWVudSBmZWF0dXJpbmcgY3JlYXRpdmUgaW50ZXJwcmV0YXRpb25zIG9mIGNsYXNzaWMgZGlzaGVzIHdpdGggYSBnYWxhY3RpYyB0d2lzdCdcbiAgICAgICAgY2FyZDEuYXBwZW5kQ2hpbGQoY2FyZDFJbWcpO1xuICAgICAgICBjYXJkMS5hcHBlbmRDaGlsZChjYXJkMVRleHQpO1xuICAgICAgICBjYXJkMS5hcHBlbmRDaGlsZChjYXJkMURlc2MpO1xuICAgICAgICBvdmVydmlld0NhcmRzLmFwcGVuZENoaWxkKGNhcmQxKTtcblxuICAgICAgICBjb25zdCBjYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkMi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgICAgIGNvbnN0IGNhcmQySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNhcmQySW1nLnNyYyA9IFlvZGE7XG4gICAgICAgIGNhcmQySW1nLmFsdCA9ICdZb2RhIGluc3BpcmVkIGRyaW5rJztcbiAgICAgICAgY29uc3QgY2FyZDJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY2FyZDJUZXh0LnRleHRDb250ZW50ID0gJyBSYWlzZSBZb3VyIEdsYXNzIHRvIEFkdmVudHVyZSc7XG4gICAgICAgIGNvbnN0IGNhcmQyRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2FyZDJEZXNjLnRleHRDb250ZW50ID0gJ1NpcCBvbiBzaWduYXR1cmUgZHJpbmtzIHNlcnZlZCBpbiB1bmlxdWUgZ2xhc3N3YXJlLCBpbnNwaXJlZCBieSBpY29uaWMgY2hhcmFjdGVycywgcGxhbmV0cywgYW5kIGV2ZW50cyBmcm9tIHRoZSBTdGFyIFdhcnMgdW5pdmVyc2UnXG4gICAgICAgIGNhcmQyLmFwcGVuZENoaWxkKGNhcmQySW1nKTtcbiAgICAgICAgY2FyZDIuYXBwZW5kQ2hpbGQoY2FyZDJUZXh0KTtcbiAgICAgICAgY2FyZDIuYXBwZW5kQ2hpbGQoY2FyZDJEZXNjKTtcbiAgICAgICAgb3ZlcnZpZXdDYXJkcy5hcHBlbmRDaGlsZChjYXJkMik7XG5cbiAgICAgICAgY29uc3QgY2FyZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZDMuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICBjb25zdCBjYXJkM0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjYXJkM0ltZy5zcmMgPSBDb25jZXJ0O1xuICAgICAgICBjYXJkM0ltZy5hbHQgPSAnR2FsYWN0aWMgQ2FudGluYSBjb25jZXJ0JztcbiAgICAgICAgY29uc3QgY2FyZDNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY2FyZDNUZXh0LnRleHRDb250ZW50ID0gJ0xpdmUgTXVzaWMgYW5kIEVudGVydGFpbm1lbnQnO1xuICAgICAgICBjb25zdCBjYXJkM0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNhcmQzRGVzYy50ZXh0Q29udGVudCA9ICdCZSBlbnRlcnRhaW5lZCBieSBpbnRlcmdhbGFjdGljIG11c2ljLCBhbGllbiBkYW5jZSBwZXJmb3JtYW5jZXMsIGFuZCBjYXB0aXZhdGluZyBzaG93cyB0aGF0IHRyYW5zcG9ydCB5b3UgZGVlcGVyIGludG8gdGhlIFN0YXIgV2FycyB1bml2ZXJzZSdcbiAgICAgICAgY2FyZDMuYXBwZW5kQ2hpbGQoY2FyZDNJbWcpO1xuICAgICAgICBjYXJkMy5hcHBlbmRDaGlsZChjYXJkM1RleHQpO1xuICAgICAgICBjYXJkMy5hcHBlbmRDaGlsZChjYXJkM0Rlc2MpO1xuICAgICAgICBvdmVydmlld0NhcmRzLmFwcGVuZENoaWxkKGNhcmQzKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcbiAgICAgICAgb3ZlcnZpZXcuYXBwZW5kQ2hpbGQob3ZlcnZpZXdUZXh0KTtcbiAgICAgICAgb3ZlcnZpZXcuYXBwZW5kQ2hpbGQob3ZlcnZpZXdDYXJkcyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3ZlcnZpZXcpO1xuICAgIH07XG5cbiAgICBjb25zdCByZXZpZXdzID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgICAgIGNvbnN0IGNhcmREYXRhID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdMdWtlIFNreXdhbGtlcicsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGx1a2UsXG4gICAgICAgICAgICAgICAgcmV2aWV3OiBcIkkgbmV2ZXIgdGhvdWdodCBJJ2QgZmluZCBzdWNoIGEgd3JldGNoZWQgaGl2ZSBvZiBzY3VtIGFuZCBmbGF2b3IuIEJ1dCB0aGUgR2FsYWN0aWMgQ2FudGluYSBzdXJwcmlzZWQgbWUgaW4gdGhlIG1vc3QgZGVsaWdodGZ1bCB3YXkuIEZyb20gdGhlIG1vbWVudCBJIHN0ZXBwZWQgaW4sIEkgZmVsdCB0aGUgRm9yY2Ugb2YgY3VsaW5hcnkgZGVsaWdodHMgY2FsbGluZyB0byBtZS4gJ1RoYXQncyBub3QganVzdCBhIHNuYWNrLCB0aGF0J3MgYSBmZWFzdCEnIEkgZXhjbGFpbWVkIGFzIEkgc2FtcGxlZCB0aGVpciBkaXZlcnNlIG1lbnUuIEFuZCBsZXQgbWUgdGVsbCB5b3UsIHRoZWlyIFlvdW5nbGluZyBTbHVzaGllcyBicm91Z2h0IGJhY2sgbWVtb3JpZXMgb2YgbXkgdHJhaW5pbmcgZGF5cy4gJ0kgYW0gYSBKZWRpLCBsaWtlIG15IGZhdGhlciBiZWZvcmUgbWUsIGFuZCBhIGZvb2RpZSB0b28hJyBJIHByb3VkbHkgZGVjbGFyZWQuIFNvLCB3aGV0aGVyIHlvdSdyZSBhIEplZGksIGEgU2l0aCwgb3IganVzdCBhIGh1bmdyeSB0cmF2ZWxlciwgdGhlIEdhbGFjdGljIENhbnRpbmEgaXMgYSBkZXN0aW5hdGlvbiB3b3J0aCB2ZW50dXJpbmcgdG8uICdNYXkgdGhlIGZvcmtzIGJlIHdpdGggeW91ISdcIixcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuc3RhcndhcnMuY29tL2RhdGFiYW5rL2x1a2Utc2t5d2Fsa2VyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VtcGVyb3IgUGFscGF0aW5lJyxcbiAgICAgICAgICAgICAgICBpbWFnZTogUGFscHMsXG4gICAgICAgICAgICAgICAgcmV2aWV3OiBcIkkgbXVzdCBzYXksIHRoZSBHYWxhY3RpYyBDYW50aW5hIGhhcyBhIGRlbGlnaHRmdWwgYXRtb3NwaGVyZS4gSSBmZWx0IHJpZ2h0IGF0IGhvbWUsIHN1cnJvdW5kZWQgYnkgYWxsIHRob3NlIHBvdGVudGlhbCBTaXRoIGFwcHJlbnRpY2VzLiBUaGUgVHJhZ2VkeSBvZiBEYXJ0aCBQbGFndWVpcyB0aGUgV2lzZSBhbHdheXMgd29ya3MgYXMgYSBncmVhdCBjb252ZXJzYXRpb24gc3RhcnRlci4gQW5kIHdoZW4gaXQgY29tZXMgdG8gb3JkZXJpbmcsIEkgY291bGRuJ3QgcmVzaXN0IHRoZSB0ZW1wdGF0aW9uLiBXaXRoIGEgc2ltcGxlIGNvbW1hbmQgb2YgJ2RldyBpdCwnIEkgdmVudHVyZWQgaW50byB0aGUgZGVsZWN0YWJsZSBkaXNoZXMgdGhhdCB0aGUgQ2FudGluYSBoYWQgdG8gb2ZmZXIuIFRoZWlyIGZsYXZvcnMgd2VyZSBhcyBkYXJrIGFuZCBpcnJlc2lzdGlibGUgYXMgdGhlIGRhcmsgc2lkZSBvZiB0aGUgRm9yY2UuIEkgY291bGRuJ3QgaGVscCBidXQgc2F2b3IgZXZlcnkgYml0ZSwga25vd2luZyB0aGF0IHRoZSBwYXRod2F5IHRvIGN1bGluYXJ5IGFiaWxpdGllcyBzb21lIG1heSBjb25zaWRlciB1bm5hdHVyYWwgbGF5IGJlZm9yZSBtZS4gU28sIGlmIHlvdSBkYXJlIHRvIGV4cGxvcmUgdGhlIGRlcHRocyBvZiBnYWxhY3RpYyBmbGF2b3JzIGFuZCBlbWJyYWNlIHlvdXIgaW5uZXIgU2l0aCBmb29kaWUsIHRoZSBHYWxhY3RpYyBDYW50aW5hIGlzIHdoZXJlIHlvdSBzaG91bGQgYmUhXCIsXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vd3d3LnN0YXJ3YXJzLmNvbS9kYXRhYmFuay9lbXBlcm9yLXBhbHBhdGluZS1kYXJ0aC1zaWRpb3VzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1lvdW5nbGluZyBTbGF5ZXIgOTAwMCcsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IEFuYWtpbixcbiAgICAgICAgICAgICAgICByZXZpZXc6IFwiSSBtdXN0IGFkbWl0LCB0aGUgR2FsYWN0aWMgQ2FudGluYSBicm91Z2h0IGJhY2sgbWVtb3JpZXMgZnJvbSBteSBKZWRpIHRyYWluaW5nIGRheXMuIFRoZSBtZW51IHdhcyBzbyB0ZW1wdGluZywgaXQgbWFkZSBtZSBmZWVsIGxpa2Ugd2llbGRpbmcgbXkgbGlnaHRzYWJlciBhZ2Fpbi4uLiBidXQgdGhpcyB0aW1lLCB0byBjb25xdWVyIHRoZSBkZWxpY2lvdXMgZGlzaGVzISBUaGUgWW91bmdsaW5nIFNsdXNoaWVzIHdlcmUgdG8gZGllIGZvciEgSnVzdCBkb24ndCB3b3JyeSwgZmVsbG93IGRpbmVycywgSSBwcm9taXNlIEkgd29uJ3QgYnJpbmcgbXkgc2FiZXIgdG8gdGhlIHRhYmxlLiBSZW1lbWJlciwgSSBoYXZlIHRoZSBoaWdoIGdyb3VuZCB3aGVuIGl0IGNvbWVzIHRvIHNhdm9yaW5nIHRoZXNlIGdhbGFjdGljIGZsYXZvcnMhIFNvLCBkb24ndCB0cnkgaXQsIGN1bGluYXJ5IGFtYXRldXJzISBZb3UgdW5kZXJlc3RpbWF0ZSBteSBwb3dlciB0byBlbmpveSBldmVyeSBiaXRlISAgU28sIGpvaW4gbWUsIGFuZCB0b2dldGhlciB3ZSBzaGFsbCBmZWFzdCwgYnJpbmdpbmcgcGVhY2UsIGp1c3RpY2UsIGFuZCBzZWN1cml0eSB0byBvdXIgdGFzdGUgYnVkcy5cIixcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuc3RhcndhcnMuY29tL2RhdGFiYW5rL2FuYWtpbi1za3l3YWxrZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRGFydGggVmFkZXInLFxuICAgICAgICAgICAgICAgIGltYWdlOiBWYWRlcixcbiAgICAgICAgICAgICAgICByZXZpZXc6IFwiSSBmaW5kIHlvdXIgbGFjayBvZiBmbGF2b3IgZGlzdHVyYmluZy4gQnV0IGZlYXIgbm90LCB0aGUgR2FsYWN0aWMgQ2FudGluYSBoYXMgcHJvdmVuIGl0c2VsZiB3b3J0aHkgb2YgdGhlIGRhcmsgc2lkZSdzIGFwcGV0aXRlLiBGcm9tIHRoZSBtb21lbnQgSSBlbnRlcmVkLCBJIGNvdWxkIHNlbnNlIHRoZSBwb3dlciBvZiBnYXN0cm9ub21pYyBkZWxpZ2h0cyBjYWxsaW5nIHRvIG1lLiBUaGUgRm9yY2UgaXMgc3Ryb25nIHdpdGggdGhlaXIgbWVudSwgb2ZmZXJpbmcgYSByYW5nZSBvZiBkaXNoZXMgdGhhdCBzYXRpc2Z5IGV2ZW4gdGhlIG1vc3QgZm9ybWlkYWJsZSBodW5nZXIuIEFuZCB5ZXMsIEkgYWRtaXQsIHRoZWlyIFlvdW5nbGluZyBTbHVzaGllcyBtYXkgYmUgYSBndWlsdHkgcGxlYXN1cmUuIEpvaW4gbWUgb24gdGhlIGN1bGluYXJ5IGpvdXJuZXksIGZvciB0b2dldGhlciB3ZSBzaGFsbCBjb25xdWVyIHRoZSB0YXN0ZSBidWRzIG9mIHRoZSBnYWxheHkuIFJlbWVtYmVyLCB0aGVyZSBpcyBubyBkZXNzZXJ0LCBvbmx5IFNpdGggTG9yZCBzYXRpc2ZhY3Rpb24hXCIsXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vd3d3LnN0YXJ3YXJzLmNvbS9kYXRhYmFuay9kYXJ0aC12YWRlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdPYmktV2FuIEtlbm9iaScsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGtlbm9iaSxcbiAgICAgICAgICAgICAgICByZXZpZXc6IFwiSGVsbG8gdGhlcmUhIElmIHlvdSdyZSBzZWVraW5nIGEgY3VsaW5hcnkgYWR2ZW50dXJlIGluIGEgZ2FsYXh5IGZhciwgZmFyIGF3YXksIGxvb2sgbm8gZnVydGhlciB0aGFuIHRoZSBHYWxhY3RpYyBDYW50aW5hLiBGcm9tIHRoZSBtb21lbnQgSSBlbnRlcmVkLCBJIHNlbnNlZCBhIGN1bGluYXJ5IGZvcmNlIGF3YWtlbmluZyB3aXRoaW4gbWUuIFRoZSBmbGF2b3JzIHdlcmUgYXMgYm9sZCBhcyBteSBsaWdodHNhYmVyIHN0cmlrZXMsIGxlYXZpbmcgbWUgdG8gZXhjbGFpbSwgJ0Fub3RoZXIgaGFwcHkgbWVhbCEnIEJ1dCBiZXdhcmUsIG15IGZyaWVuZHMsIGZvciBuYXZpZ2F0aW5nIHRoZSBtZW51IHJlcXVpcmVzIHdpc2RvbS4gUmVtZW1iZXIsICdvbmx5IGEgbWFzdGVyIG9mIGZsYXZvcicgY2FuIHRydWx5IGFwcHJlY2lhdGUgdGhlIG51YW5jZXMgb2YgZWFjaCBkaXNoLiBBbmQgd2hlbiBpdCBjb21lcyB0byBjaG9vc2luZyB5b3VyIHNlYXQsIGFsd2F5cyByZW1lbWJlciB0aGUgaW1wb3J0YW5jZSBvZiB0aGUgaGlnaCBncm91bmQuIFRoZSBHYWxhY3RpYyBDYW50aW5hIG9mZmVycyBhICd0YXN0ZSBmcm9tIGEgaGlnaGVyIHBlcnNwZWN0aXZlLCcgZW5zdXJpbmcgYSBkaW5pbmcgZXhwZXJpZW5jZSB0aGF0IHJpc2VzIGFib3ZlIHRoZSByZXN0LiBOb3csIGFzIEkgaW5kdWxnZSBpbiB0aGVzZSBnYXN0cm9ub21pYyBkZWxpZ2h0cywgSSBjYW4ndCBoZWxwIGJ1dCB0aGluayBvZiB0aGUgd29yZHMgSSBvbmNlIHV0dGVyZWQgdG8gbXkgZGVhciBmcmllbmQsICdZb3UncmUgdGhlIGNob3NlbiBvbmUhIFlvdSB3ZXJlIG15IGJyb3RoZXIsIEFuYWtpbiEgSSBsb3ZlZCB5b3UuJyBMZXQgdXMgZW1icmFjZSB0aGUgcG93ZXIgb2YgZm9vZCB0byBmb3JnZSBuZXcgY29ubmVjdGlvbnMgYW5kIGhlYWwgb2xkIHdvdW5kcy4gJ01heSB0aGUgZm9ya3MgYmUgd2l0aCB5b3UsJyBhbHdheXNcIixcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuc3RhcndhcnMuY29tL2RhdGFiYW5rL29iaS13YW4ta2Vub2JpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0dlbmVyYWwgR3JpZXZvdXMnLFxuICAgICAgICAgICAgICAgIGltYWdlOiBnZW5lcmFsLCAgXG4gICAgICAgICAgICAgICAgcmV2aWV3OiBcIkFoLCB0aGUgR2FsYWN0aWMgQ2FudGluYSEgQSBtb3N0IGltcHJlc3NpdmUgY3VsaW5hcnkgZXN0YWJsaXNobWVudCwgaWYgSSBkbyBzYXkgc28gbXlzZWxmLiBBcyBhIGNvbm5vaXNzZXVyIG9mIGZpbmUgZGluaW5nIGFuZCBhIGNvbGxlY3RvciBvZiBsaWdodHNhYmVycywgSSBmb3VuZCBteXNlbGYgZHJhd24gdG8gdGhlIGVjbGVjdGljIGZsYXZvcnMgYW5kIHRoZSBpbnZpdGluZyBhdG1vc3BoZXJlLiBUaGUgR2FsYWN0aWMgQ2FudGluYSB0cnVseSBrbm93cyBob3cgdG8gY2F0ZXIgdG8gdGhvc2Ugd2hvIGFwcHJlY2lhdGUgdGhlIGZpbmVyIHRoaW5ncyBpbiBsaWZlLiBXaXRoIGVhY2ggYml0ZSwgSSBjb3VsZCBmZWVsIHRoZSBwb3dlciBvZiB0aGUgRm9yY2UgY291cnNpbmcgdGhyb3VnaCBtZSwgaWduaXRpbmcgYSBodW5nZXIgdGhhdCBvbmx5IHRoZSBDYW50aW5hJ3MgZGVsZWN0YWJsZSBvZmZlcmluZ3MgY291bGQgc2F0aXNmeS4gJ0l0J3MgYSB0cmFwIScgSSB3YXJuZWQgbXlzZWxmLCBhcyBJIHNhbXBsZWQgdGhlaXIgZGVsZWN0YWJsZSBkaXNoZXMuIEJ1dCB0byBteSBkZWxpZ2h0LCB0aGVyZSB3YXMgbm8gdHJhcCwgb25seSBhIHN5bXBob255IG9mIHRhc3RlcyB0aGF0IHdvdWxkIG1ha2UgYW55IGRyb2lkIHJlam9pY2UuICdPaCwgSSBkb24ndCB0aGluayBzbyEnIEkgZXhjbGFpbWVkIGFzIEkgc2F2b3JlZCB0aGVpciBZb3VuZ2xpbmcgU2x1c2hpZXMuIFRoZSBDYW50aW5hJ3MgZGl2ZXJzZSBtZW51LCBsaWtlIG15IGNvbGxlY3Rpb24gb2YgbGlnaHRzYWJlcnMsIG9mZmVycyBzb21ldGhpbmcgZm9yIGV2ZXJ5IHBhbGF0ZS4gU28sIHdoZXRoZXIgeW91J3JlIGEgSmVkaSwgYSBTaXRoLCBvciBhIGdlbmVyYWwgc2Vla2luZyBhIG1vbWVudCBvZiByZXNwaXRlIGZyb20gdGhlIGJhdHRsZWZpZWxkLCB0aGUgR2FsYWN0aWMgQ2FudGluYSBpcyBhIGhhdmVuIHdoZXJlIHlvdSBjYW4gaW5kdWxnZSBpbiBnYXN0cm9ub21pYyBwbGVhc3VyZXMgZml0IGZvciBhIGN5Ym9yZyBvZiBteSBzdGF0dXJlLiAnSSB3aWxsIGRlYWwgd2l0aCB0aGlzIEplZGkgc2xpbWUgbXlzZWxmIScgSSBkZWNsYXJlZCwgcmVmZXJyaW5nIHRvIHRoZSBkZWxlY3RhYmxlIGRpc2hlcyB0aGF0IGF3YWl0ZWQgbWUuIFNvLCBncmFiIHlvdXIgYmxhc3RlciBhbmQgam9pbiBtZSBmb3IgYW4gZXBpYyBmZWFzdCBhdCB0aGUgR2FsYWN0aWMgQ2FudGluYS4gJ0l0IGlzIHRpbWUgdG8gYWJhbmRvbiB0aGlzIGhvcGVsZXNzIGNhdXNlIGFuZCBzdXJyZW5kZXIgdG8gdGhlIGZsYXZvcnMhJ1wiLFxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3d3dy5zdGFyd2Fycy5jb20vZGF0YWJhbmsvZ2VuZXJhbC1ncmlldm91cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdEYXJ0aCBKYXIgSmFyIEJpbmtzJyxcbiAgICAgICAgICAgICAgICBpbWFnZTogamFyLFxuICAgICAgICAgICAgICAgIHJldmlldzogXCJNZXNhIGdvdHRhIHRlbGwgeW91LCB0aGUgR2FsYWN0aWMgQ2FudGluYSBpcyBib21iYWQhIEl0J3MgYSBwbGFjZSB3aGVyZSBldmVuIGNsdW1zeSBHdW5nYW5zIGxpa2UgbWVzYSBjYW4gZmluZCBjdWxpbmFyeSBwYXJhZGlzZSEgWW91c2EgZ29ubmEgaGF2ZSBhIHl1bW15IHR1bS10dW0gdGltZSEgVGhlIENhbnRpbmEncyBtZW51IGlzIGxpa2UgYSBiaWcgJ29sIHBvdCBvZiB0YXN0eSBzb3VwLCB3aXRoIGZsYXZvcnMgZnJvbSBhbGwgb3ZlciB0aGUgZ2FsYXh5IG1peGluJyB0b2dldGhlci4gTWVzYSB0b25ndWUncyBnb25uYSBkbyB0aGUgaGFwcHkgZGFuY2UhIE1lc2EgcmVjb21tZW5kIHRyeWluJyB0aGUgR3VuZ2FuIEd1bWJvLCBpdCdzIGEgcmVhbCBib21iYWQgZGlzaCEgRnJvbSB0aGUgZmlyc3QgYml0ZSwgbWVzYSBmZWx0IGxpa2UgbWVzYSB3YXMgZG9pbicgYSBib25nbyBkYW5jZSBpbiBteSBtb3V0aCEgTWVzYSB0aGlua3MgbWVzYSBpbiBsb3ZlIHdpdGggdGhlIENhbnRpbmEncyBmb29kISBTbywgd2hldGhlciB5b3VzYSBhIEplZGkgS25pZ2h0LCBhIFNpdGggTG9yZCwgb3IganVzdCBhIGh1bmdyeSB0cmF2ZWxlciwgdGhlIEdhbGFjdGljIENhbnRpbmEgaGFzIHNvbWV0aGluJyB0byBzYXRpc2Z5IGFsbCB0YXN0ZSBidWRzISBNZXNhIHByb21pc2UsIHlvdXNhIGdvbm5hIHNtaWxlIGJpZyEgTWVzYSBldmVuIGhlYXJkIHRoZXlzYSBnb3QgYSBkcmluayBjYWxsZWQgdGhlIEphciBKYXIgSnVpY2XigJRtZXNhIGZlZWxzIGhvbm9yZWQhIE1lc2EgdmVyeSBodW1ibGVkISBUaGUgQ2FudGluYSdzIGdvdCBzdWNoIGEgbGl2ZWx5IGF0bW9zcGhlcmUsIHdpdGggYWxpZW4gZGVjb3JhdGlvbnMgYW5kIG11c2ljIHRoYXQgbWFrZXMgeW91IHdhbm5hIGJvbmdvIHlvdXIgZWFycyBvZmYhIE1lc2EgY2FuJ3Qgc3RvcCBncm9vdmluJyEgTWVzYSBzYXlzLCBDb21lIG9uIG92ZXIgYW5kIGpvaW4gdGhlIHBhcnR5LCBiZWNhdXNlIGluIHRoZSBDYW50aW5hLCBldmVyeWJvZHlzYSBnb3QgYSBwbGFjZSB0byBiZWxvbmchIFlvdXNhIGdvbm5hIGhhdmUgYSBib21iYWQgdGltZSFcIixcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuc3RhcndhcnMuY29tL2RhdGFiYW5rL2phci1qYXItYmlua3MnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ291bnQgRG9va3UnLFxuICAgICAgICAgICAgICAgIGltYWdlOiBkb29rdSxcbiAgICAgICAgICAgICAgICByZXZpZXc6IFwiQWgsIHRoZSBHYWxhY3RpYyBDYW50aW5hLCBhIGhhdmVuIGZvciB0aG9zZSBzZWVraW5nIHJlZmluZW1lbnQgYW5kIHNvcGhpc3RpY2F0aW9uIGluIHRoZWlyIGRpbmluZyBleHBlcmllbmNlLiBBcyBhIG1hbiBvZiB0YXN0ZSBhbmQgZWxlZ2FuY2UsIEkgbXVzdCBzYXkgdGhhdCB0aGUgQ2FudGluYSBleGNlZWRlZCBteSBleHBlY3RhdGlvbnMuIEZyb20gdGhlIG1vbWVudCBJIHdhbGtlZCBpbiwgSSBzZW5zZWQgYW4gYXVyYSBvZiBjdWxpbmFyeSBleGNlbGxlbmNlLiBUaGUgYW1iaWFuY2UsIG11Y2ggbGlrZSBteSBsaWdodHNhYmVyLCBleHVkZWQgYW4gZWxlZ2FudCBnbG93IHRoYXQgc2V0IHRoZSBzdGFnZSBmb3IgYW4gdW5mb3JnZXR0YWJsZSBnYXN0cm9ub21pYyBqb3VybmV5LiAnSSd2ZSBiZWVuIGxvb2tpbmcgZm9yd2FyZCB0byB0aGlzJyBjdWxpbmFyeSBkZWxpZ2h0LiBUaGUgbWVudSwgY3VyYXRlZCB3aXRoIHRoZSBwcmVjaXNpb24gb2YgYSBTaXRoIExvcmQncyBwbG90dGluZywgb2ZmZXJzIGFuIGFycmF5IG9mIGRlbGVjdGFibGUgZGlzaGVzIHRoYXQgcml2YWwgdGhlIGZpbmVzdCBkZWxpY2FjaWVzIGluIHRoZSBnYWxheHkuICdBaCwgeWVzLCB0aGUgbmVnb3RpYXRvciwnIEkgdGhvdWdodCBhcyBJIHNhbXBsZWQgdGhlaXIgbWFzdGVyZnVsbHkgY3JhZnRlZCBjcmVhdGlvbnMuIEVhY2ggYml0ZSB3YXMgYSBzeW1waG9ueSBvZiBmbGF2b3JzLCBsZWF2aW5nIG1lIHRvIGV4Y2xhaW0sICdJbXByZXNzaXZlLiBNb3N0IGltcHJlc3NpdmUuJyBUaGUgR2FsYWN0aWMgQ2FudGluYSB1bmRlcnN0YW5kcyB0aGF0IGN1bGluYXJ5IGFydGlzdHJ5IGlzIGEgZGVsaWNhdGUgZGFuY2UsIGJsZW5kaW5nIGluZ3JlZGllbnRzIHdpdGggdGhlIGdyYWNlIG9mIGEgbWFzdGVyIGR1ZWxpc3QuIFNvLCB3aGV0aGVyIHlvdSdyZSBhIEplZGkgb3IgYSBTaXRoLCBhIGRyb2lkIG9yIGEgcG9saXRpY2lhbiwgdGhlIENhbnRpbmEncyBvZmZlcmluZ3Mgd2lsbCBzdXJlbHkgc2F0aXNmeSBldmVuIHRoZSBtb3N0IGRpc2Nlcm5pbmcgcGFsYXRlLiAnR29vZC4gVHdpY2UgdGhlIHByaWRlLCBkb3VibGUgdGhlIGZsYXZvci4nIFNvLCBhbGxvdyB5b3Vyc2VsZiB0byBiZSBzZWR1Y2VkIGJ5IHRoZSBjdWxpbmFyeSBkYXJrIHNpZGUsIGFuZCBqb2luIG1lIGF0IHRoZSBHYWxhY3RpYyBDYW50aW5hIGZvciBhbiBlcGljdXJlYW4gZXhwZXJpZW5jZSBmaXQgZm9yIGEgU2l0aCBMb3JkLiAnVGhlIEZvcmNlIGlzIHN0cm9uZyB3aXRoIHRoZWlyIG1lbnUuJ1wiLFxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3d3dy5zdGFyd2Fycy5jb20vZGF0YWJhbmsvY291bnQtZG9va3UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnUXVpLUdvbiBKaW5uJyxcbiAgICAgICAgICAgICAgICBpbWFnZTogamlubixcbiAgICAgICAgICAgICAgICByZXZpZXc6IFwiR3JlZXRpbmdzLCBmZWxsb3cgZ2FzdHJvbm9tZXMhIFRoZSBHYWxhY3RpYyBDYW50aW5hIGJlY2tvbnMgbGlrZSB0aGUgRm9yY2UgaXRzZWxmLCBndWlkaW5nIHVzIHRvIGEgY3VsaW5hcnkgYWR2ZW50dXJlIGJleW9uZCB0aGUgb3JkaW5hcnkuIEFzIGEgSmVkaSBNYXN0ZXIgYW5kIHNlZWtlciBvZiBiYWxhbmNlLCBJIG11c3Qgc2F5IHRoYXQgdGhlIENhbnRpbmEgZW1ib2RpZXMgdGhlIGhhcm1vbmlvdXMgZnVzaW9uIG9mIGZsYXZvcnMuICdUaGUgYWJpbGl0eSB0byB0YXN0ZSB0aGUgRm9yY2UnIGlzIHN0cm9uZyBoZXJlLCBteSBmcmllbmRzLiBGcm9tIHRoZSBtb21lbnQgSSBlbnRlcmVkLCBJIGZlbHQgYSB3YXZlIG9mIGdhc3Ryb25vbWljIGVubGlnaHRlbm1lbnQgd2FzaCBvdmVyIG1lLiAnVGhlcmUncyBhbHdheXMgYSBiaWdnZXIgbWVhbCwnIEkgdGhvdWdodCwgYXMgSSBwZXJ1c2VkIHRoZWlyIGRpdmVyc2UgbWVudS4gVGhlIENhbnRpbmEncyBkaXNoZXMsIGxpa2UgYSB3ZWxsLWNyYWZ0ZWQgbGlnaHRzYWJlciwgYXJlIGEgYmFsYW5jZSBvZiBmbGF2b3JzIGFuZCB0ZXh0dXJlcy4gRWFjaCBiaXRlIHRyYW5zcG9ydHMgeW91IHRvIGEgZ2FsYXh5IGZhciwgZmFyIGF3YXkuICdUaGUgRm9yY2Ugd2lsbCBiZSB3aXRoIHlvdSwgYWx3YXlzLCcgdGhleSBzYXksIGFuZCBpbmRlZWQsIGl0IGlzIHdpdGggZXZlcnkgZGVsZWN0YWJsZSBtb3JzZWwuIFdoZXRoZXIgeW91J3JlIGEgSmVkaSwgYSBTaXRoLCBvciBzaW1wbHkgYSBzZWVrZXIgb2YgY3VsaW5hcnkgZGVsaWdodHMsIHRoZSBHYWxhY3RpYyBDYW50aW5hIG9mZmVycyBhbiBleHBlcmllbmNlIHRoYXQgdHJhbnNjZW5kcyB0aGUgb3JkaW5hcnkuICdZb3VyIGZvY3VzIGRldGVybWluZXMgeW91ciBmbGF2b3IsJyBzbyBiZSBwcmVwYXJlZCB0byBpbW1lcnNlIHlvdXJzZWxmIGluIGEgZ2FzdHJvbm9taWMgam91cm5leSB1bmxpa2UgYW55IG90aGVyLiAnSSBoYXZlIGEgYmFkIGZlZWxpbmcgYWJvdXQgdGhpcywnIHlvdSBzYXk/IEZlYXIgbm90LCBmb3IgdGhlIENhbnRpbmEncyBkZWxlY3RhYmxlIGNyZWF0aW9ucyB3aWxsIGJhbmlzaCBhbnkgZG91YnRzIGFuZCBsZWF2ZSB5b3UgY3JhdmluZyBtb3JlLiBTbywgdHJ1c3QgaW4gdGhlIEZvcmNlIG9mIGZsYXZvciBhbmQgam9pbiBtZSBvbiB0aGlzIGVwaWN1cmVhbiBhZHZlbnR1cmUgYXQgdGhlIEdhbGFjdGljIENhbnRpbmEuICdNYXkgdGhlIGZvcmtzIGJlIHdpdGggeW91LidcIixcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuc3RhcndhcnMuY29tL2RhdGFiYW5rL3F1aS1nb24tamlubicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdNYWNlIFdpbmR1JyxcbiAgICAgICAgICAgICAgICBpbWFnZTogbWFjZSxcbiAgICAgICAgICAgICAgICByZXZpZXc6IFwiQXQgdGhlIEdhbGFjdGljIENhbnRpbmEsIHRoZSBmb3JjZSBvZiBmbGF2b3IgaXMgc3Ryb25nLiBBcyBhIEplZGkgTWFzdGVyLCBJIG11c3Qgc2F5IHRoYXQgdGhpcyBjdWxpbmFyeSBoYXZlbiBpbXByZXNzZWQgZXZlbiBteSBkaXNjZXJuaW5nIHBhbGF0ZS4gJ1RoaXMgcGFydHkncyBvdmVyIScgZm9yIGJsYW5kIGFuZCBvcmRpbmFyeSBtZWFscy4gVGhlIENhbnRpbmEncyBtZW51IGlzIGEgbGlnaHRzYWJlciBvZiB0YXN0ZSwgaWduaXRpbmcgYSBndXN0YXRvcnkgZXhwbG9zaW9uIHRoYXQgcml2YWxzIHRoZSBwb3dlciBvZiB0aGUgRm9yY2UuIEZyb20gdGhlIGZpcnN0IGJpdGUsIEkgY291bGQgc2Vuc2UgdGhlIGhhcm1vbmlvdXMgYmFsYW5jZSBvZiBmbGF2b3JzLCBhIHRydWUgdGVzdGFtZW50IHRvIHRoZWlyIGN1bGluYXJ5IG1hc3RlcnkuICdJIHNlbnNlIGEgZ3JlYXQgbWVhbCBpbiB5b3UuJyBXaXRoIGVhY2ggZGlzaCwgdGhlIENhbnRpbmEgdHJhbnNwb3J0cyB5b3UgdG8gZGlzdGFudCBwbGFuZXRzLCBpbW1lcnNpbmcgeW91IGluIHRoZSByaWNoIHRhcGVzdHJ5IG9mIGdhbGFjdGljIGN1aXNpbmUuICdJJ20gZ29pbmcgdG8gZW5kIHRoaXMgbWVhbCwgb25jZSBhbmQgZm9yIGFsbCwnIEkgZGVjbGFyZWQsIGZ1bGx5IHN1cnJlbmRlcmluZyB0byB0aGUgaW5kdWxnZW5jZS4gVGhlIENhbnRpbmEncyBjcmVhdGlvbnMgYXJlIGEgdHJ1ZSBmb3JjZSB0byBiZSByZWNrb25lZCB3aXRoLCBlbnRpY2luZyBldmVuIHRoZSBtb3N0IHN0b2ljIEplZGkgdG8gYWJhbmRvbiB0aGVpciBkaWV0YXJ5IHJlc3RyaWN0aW9ucy4gJ1RoZXJlIGlzIG5vIHRyeSwgb25seSBlYXQhJyBTbywgd2hldGhlciB5b3UncmUgYSBKZWRpIEtuaWdodCwgYSBTaXRoIExvcmQsIG9yIGp1c3QgYSBodW1ibGUgZm9vZCBlbnRodXNpYXN0LCB0aGUgR2FsYWN0aWMgQ2FudGluYSBpcyB3aGVyZSB5b3UnbGwgZmluZCBjdWxpbmFyeSBlbmxpZ2h0ZW5tZW50LiAnVGFrZSBhIHNlYXQsIHlvdW5nIFNreXdhbGtlciwnIGFuZCBzYXZvciB0aGUgZGlzaGVzIHRoYXQgYXdhaXQuIFRydXN0IGluIHRoZSBDYW50aW5hJ3MgY3VsaW5hcnkgcHJvd2VzcywgYW5kIHlvdSdsbCBmaW5kIHlvdXJzZWxmIHV0dGVyaW5nIHRoZSB3b3JkcywgJ1RoaXMgaXMgd2hlcmUgdGhlIGZ1biBiZWdpbnMuJyBKb2luIG1lIG9uIHRoaXMgZmxhdm9yLWZpbGxlZCBqb3VybmV5LCBhbmQgdG9nZXRoZXIsIHdlJ2xsIGJyaW5nIGJhbGFuY2UgdG8geW91ciB0YXN0ZSBidWRzLiAnTWF5IHRoZSBmb3JrcyBiZSB3aXRoIHlvdSEnXCIsXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vd3d3LnN0YXJ3YXJzLmNvbS9kYXRhYmFuay9tYWNlLXdpbmR1JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0RhcnRoIE1hdWwnLFxuICAgICAgICAgICAgICAgIGltYWdlOiBtYXVsLFxuICAgICAgICAgICAgICAgIHJldmlldzogXCJQcmVwYXJlIGZvciBhIGN1bGluYXJ5IGV4cGVyaWVuY2UgdGhhdCB3aWxsIGlnbml0ZSB5b3VyIHRhc3RlIGJ1ZHMgYW5kIGxlYXZlIHlvdSBjcmF2aW5nIG1vcmUhIFRoZSBHYWxhY3RpYyBDYW50aW5hLCBtdWNoIGxpa2UgdGhlIGRhcmsgc2lkZSwgaXMgc2VkdWN0aXZlIGFuZCBmdWxsIG9mIGZsYXZvci4gRnJvbSB0aGUgbW9tZW50IEkgc3RlcHBlZCBmb290IGluIHRoaXMgZ2FzdHJvbm9taWMgc2FuY3R1YXJ5LCBJIGtuZXcgSSBoYWQgZm91bmQgbXkgdHJ1ZSBjYWxsaW5nLiAnQXQgbGFzdCwgd2Ugd2lsbCByZXZlYWwgb3Vyc2VsdmVzIHRvIHRoZSBmb29kaWVzLiBBdCBsYXN0LCB3ZSB3aWxsIGhhdmUgZmxhdm9yLicgVGhlIENhbnRpbmEncyBtZW51IGlzIGEgc3ltcGhvbnkgb2YgZGVsaWNpb3VzbmVzcywgb2ZmZXJpbmcgYSB2YXJpZXR5IG9mIGRpc2hlcyB0aGF0IHdpbGwgc2F0aXNmeSBldmVuIHRoZSBtb3N0IGluc2F0aWFibGUgYXBwZXRpdGUuIEVhY2ggYml0ZSBpcyBhIGRhbmNlIG9mIHNhdm9yeSBzZW5zYXRpb25zLCByZW1pbmlzY2VudCBvZiB0aGUgYmF0dGxlcyBJIG9uY2UgZm91Z2h0LiAnRmVhciBpcyB0aGUgcGF0aCB0byB0aGUgZGFyayBzaWRlLiBGZWFyIG9mIGJsYW5kbmVzcywgdGhhdCBpcy4nIFRoZSBDYW50aW5hJ3MgY2hlZnMgaGF2ZSBtYXN0ZXJlZCB0aGUgYXJ0IG9mIGN1bGluYXJ5IGNvbWJhdCwgaW5mdXNpbmcgdGhlaXIgY3JlYXRpb25zIHdpdGggdGhlIHBvd2VyIG9mIHRoZSBGb3JjZS4gJ1ByZXBhcmUgdG8gdGFzdGUgdGhlIHdyYXRoIG9mIHRoZSBTaXRoIScgRnJvbSBleG90aWMgc3BpY2VzIHRvIGRhcmluZyBmbGF2b3IgY29tYmluYXRpb25zLCB0aGUgQ2FudGluYSB0YWtlcyB5b3VyIHBhbGF0ZSBvbiBhIGpvdXJuZXkgdG8gdGhlIGVkZ2Ugb2YgdGhlIGdhbGF4eSBhbmQgYmFjay4gJ0F0IGxhc3QsIHdlIHdpbGwgZmVhc3QgYXMgd2Ugc2hvdWxkIGhhdmUhJyBTbywgd2hldGhlciB5b3UncmUgYSBKZWRpLCBhIFNpdGgsIG9yIHNpbXBseSBhIGxvdmVyIG9mIGJvbGQgZmxhdm9ycywgdGhlIEdhbGFjdGljIENhbnRpbmEgaXMgd2hlcmUgeW91J2xsIGZpbmQgdHJ1ZSBjdWxpbmFyeSBtYXN0ZXJ5LiAnSm9pbiBtZSwgYW5kIHRvZ2V0aGVyIHdlIHdpbGwgc2F2b3IgdGhlIGRlbGVjdGFibGUgZGVsaWdodHMgb2YgdGhlIGRhcmsgc2lkZS4gV2Ugc2hhbGwgZGluZSBsaWtlIG5ldmVyIGJlZm9yZS4nIEVtYnJhY2UgdGhlIGFsbHVyZSBvZiB0aGUgQ2FudGluYSBhbmQgc3VycmVuZGVyIHRvIHRoZSBwb3dlciBvZiBpdHMgdGFudGFsaXppbmcgbWVudS4gJ1RoZSBnYWxheHkgd2lsbCB0YXN0ZSBvdXIgaHVuZ2VyIScgTWF5IHRoZSBmb3JrcyBiZSB3aXRoIHlvdSFcIixcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuc3RhcndhcnMuY29tL2RhdGFiYW5rL2RhcnRoLW1hdWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnQWhzb2thIFRhbm8nLFxuICAgICAgICAgICAgICAgIGltYWdlOiBhaHNva2EsXG4gICAgICAgICAgICAgICAgcmV2aWV3OiBcIlRoZSBHYWxhY3RpYyBDYW50aW5hIGlzIG1vcmUgdGhhbiBqdXN0IGEgcGxhY2UgdG8gc2F0aXNmeSB5b3VyIGh1bmdlcuKAlGl0J3MgYSBjdWxpbmFyeSBhZHZlbnR1cmUgdGhhdCdsbCBhd2FrZW4gdGhlIEZvcmNlIHdpdGhpbiB5b3VyIHRhc3RlIGJ1ZHMhIEZyb20gdGhlIG1vbWVudCBJIHdhbGtlZCB0aHJvdWdoIHRoZSBkb29ycywgSSBmZWx0IGFuIGVuZXJneSwgYSB2aWJyYW50IHB1bHNlIHRoYXQgZHJldyBtZSBpbi4gJ1NuaXBzJyB0aGV5IGNhbGxlZCBtZSwgYnV0IHRoZSBDYW50aW5hJ3MgZGlzaGVzIHdlcmUgYW55dGhpbmcgYnV0IHNtYWxsLiBFYWNoIGJpdGUgd2FzIGEgYnVyc3Qgb2YgZmxhdm9yLCBhIHRhc3RlIHNlbnNhdGlvbiB0aGF0IGRlZmllZCBleHBlY3RhdGlvbi4gJ0knbSBubyBKZWRpLCBidXQgSSBrbm93IGdvb2QgZm9vZCB3aGVuIEkgZWF0IGl0IScgVGhlIENhbnRpbmEncyBtZW51IGlzIGEgY2VsZWJyYXRpb24gb2YgZGl2ZXJzaXR5LCBqdXN0IGxpa2UgdGhlIGdhbGF4eSBpdHNlbGYuIEZyb20gc2F2b3J5IHRvIHN3ZWV0LCBmcm9tIHNwaWN5IHRvIG1pbGQsIHRoZXJlJ3Mgc29tZXRoaW5nIGZvciBldmVyeW9uZS4gJ01heSB0aGUgZm9ya3MgYmUgd2l0aCB5b3UhJyBXaGV0aGVyIHlvdSdyZSBhIGxveWFsIEplZGksIGEgbWlzY2hpZXZvdXMgc211Z2dsZXIsIG9yIGEgaHVuZ3J5IHRyYXZlbGVyLCB0aGUgQ2FudGluYSdzIGN1bGluYXJ5IGRlbGlnaHRzIHdpbGwgbGVhdmUgeW91IHllYXJuaW5nIGZvciBtb3JlLiAnV2UgaGF2ZSB0byBrZWVwIG91ciB3aXRzIGFib3V0IHVzLiBUcnVzdCBpbiB0aGUgQ2FudGluYSdzIG1lbnUsIHdlIG11c3QhJyBTbywgZ3JhYiBhIHNlYXQsIGluZHVsZ2UgaW4gdGhlIGdhbGFjdGljIGZsYXZvcnMsIGFuZCBsZXQgeW91ciB0YXN0ZSBidWRzIGVtYmFyayBvbiBhIGpvdXJuZXkgdGhyb3VnaCB0aGUgc3RhcnMuICdJIGFtIG5vIEplZGksIGJ1dCBJIGFtIGEgZm9vZGllLCBhbmQgdGhpcyBpcyB3aGVyZSB0aGUgZnVuIGJlZ2lucy4nIFRoZSBHYWxhY3RpYyBDYW50aW5h4oCUd2hlcmUgZGVsaWNpb3VzIG1lbW9yaWVzIGFyZSBtYWRlLCBhbmQgdGhlIEZvcmNlIG9mIGZsYXZvciBndWlkZXMgeW91IHRvIGN1bGluYXJ5IGJsaXNzLiAnU25pcHMgb3V0ISdcIixcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuc3RhcndhcnMuY29tL2RhdGFiYW5rL2Foc29rYS10YW5vJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1lvZGEnLFxuICAgICAgICAgICAgICAgIGltYWdlOiB5b2RhLFxuICAgICAgICAgICAgICAgIHJldmlldzogXCJBaCwgR2FsYWN0aWMgQ2FudGluYSEgQ3VsaW5hcnkgd29uZGVycyBpdCBob2xkcy4gQSBmb29kaWUncyBwYXJhZGlzZSwgaXQgaXMuIFRhc3RlIGJ1ZHMgdGluZ2xpbmcsIHRoZXkgd2lsbCBiZS4gRGVsaWNpb3VzLCB0aGUgZGlzaGVzIGFyZS4gU2F2b3IgdGhlIGZsYXZvcnMsIHlvdSBtdXN0LiBEYWdvYmFoIERlbGlnaHRzLCBhIG11c3QtdHJ5IHRoZXkgYXJlLiBJbW1lcnNlZCBpbiBnYWxhY3RpYyBjdWx0dXJlLCB5b3Ugc2hhbGwgYmUuIE11c2ljIG9mIHRoZSB0YXN0ZSBidWRzLCBpdCBpcy4gU2hhcmVkIHBhc3Npb24gYW5kIGN1bGluYXJ5IHdpc2RvbSwgeW91IHdpbGwgZmluZC4gTWluZGZ1bCBvZiB0aGUgRm9yY2Ugd2l0aGluIHlvdXIgcGxhdGUsIGJlLiBWZW50dXJlIHRvIHRoZSBDYW50aW5hLCB5b3Ugc2hvdWxkLiBNYXkgdGhlIGZvcmtzIGJlIHdpdGggeW91LCBobW0hXCIsXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vd3d3LnN0YXJ3YXJzLmNvbS9kYXRhYmFuay95b2RhJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0dyYW5kIE1vZmYgVGFya2luJyxcbiAgICAgICAgICAgICAgICBpbWFnZTogdGFya2luLFxuICAgICAgICAgICAgICAgIHJldmlldzogJ0F0dGVudGlvbiwgZGluZXJzISBHcmFuZCBNb2ZmIFRhcmtpbiBoZXJlLCBwcmVzZW50aW5nIGEgcmV2aWV3IG9mIHRoZSBHYWxhY3RpYyBDYW50aW5hLiBQcmVwYXJlIGZvciBhbiBleHBlcmllbmNlIG9mIGltcGVyaWFsIHByb3BvcnRpb25zISBUaGlzIENhbnRpbmEgaXMgdW5saWtlIGFueSBvdGhlciwgYm9hc3RpbmcgZmxhdm9ycyB0aGF0IGNvbW1hbmQgYXR0ZW50aW9uIGFuZCBzYXRpc2ZhY3Rpb24uIFwiWW91IG1heSBpbmR1bGdlIHdoZW4gcmVhZHkhXCIgRXZlcnkgZGlzaCBpcyBtZXRpY3Vsb3VzbHkgY3JhZnRlZCwgYSB0ZXN0YW1lbnQgdG8gY3VsaW5hcnkgcHJlY2lzaW9uIGFuZCBtYXN0ZXJ5LicsXG4gICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vd3d3LnN0YXJ3YXJzLmNvbS9kYXRhYmFuay9ncmFuZC1tb2ZmLXRhcmtpbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdKYWJiYSB0aGUgSHV0dCcsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGh1dHQsXG4gICAgICAgICAgICAgICAgcmV2aWV3OiBcIk1tbSwgR2FsYWN0aWMgQ2FudGluYSwgYSBmZWFzdCBmaXQgZm9yIEphYmJhISBEZWxpY2lvdXMgZGVsaWdodHMsIHRoZXkgc2VydmUuIFNhdm9yIHRoZSBmbGF2b3JzLCB5b3Ugd2lsbC4gRXhvdGljIGRpc2hlcywgYSB0cmVhdCBmb3IgZXZlcnkgYXBwZXRpdGUuIEphYmJhJ3MgdGFzdGUgYnVkcyBkYW5jZSB3aXRoIGpveSEgQXRtb3NwaGVyZSwgbGl2ZWx5IGFuZCB2aWJyYW50LiBMaWtlIHRoZSBidXN0bGluZyBzdHJlZXRzIG9mIFRhdG9vaW5lLCB0aGUgQ2FudGluYSBidXp6ZXMgd2l0aCBlbmVyZ3kuIE11c2ljLCBhIHJoeXRobWljIGludml0YXRpb24gdG8gaW5kdWxnZS4gSmFiYmEncyB0YWlsIGNhbid0IGhlbHAgYnV0IHN3YXkhIEZyaWVuZGx5IHN0YWZmLCBhdHRlbnRpdmUgdG8gZXZlcnkgbmVlZC4gU2VydmljZSwgYXMgc21vb3RoIGFzIEh1dHRlc2UgbmVnb3RpYXRpb24uIEEgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCBsZWF2ZXMgSmFiYmEgc2F0aXNmaWVkLiBCcmluZyB5b3VyIGZyaWVuZHMsIGJyaW5nIHlvdXIgYXBwZXRpdGUuIEluIHRoZSBDYW50aW5hLCB0aGVyZSdzIHJvb20gZm9yIGFsbC4gQm9uIGFwcMOpdGl0LCBteSBmcmllbmRzIVwiLFxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3d3dy5zdGFyd2Fycy5jb20vZGF0YWJhbmsvamFiYmEtdGhlLWh1dHQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnSGFuIFNvbG8nLFxuICAgICAgICAgICAgICAgIGltYWdlOiBoYW4sXG4gICAgICAgICAgICAgICAgcmV2aWV3OiBcIkFscmlnaHQsIGxpc3RlbiB1cCEgVGhlIEdhbGFjdGljIENhbnRpbmEsIGl0J3MgdGhlIHJlYWwgZGVhbC4gSWYgeW91J3JlIGxvb2tpbmcgZm9yIGEgcGxhY2UgdG8gdW53aW5kIGFuZCBzYXRpc2Z5IHlvdXIgdGFzdGUgYnVkcywgdGhpcyBpcyBpdC4gVGhlIGF0bW9zcGhlcmUsIGl0J3MgZ290IHRoYXQgY29vbCB2aWJlIHRoYXQgbWFrZXMgeW91IGZlZWwgcmlnaHQgYXQgaG9tZS4gVGhlIG1lbnU/IFdlbGwsIGxldCBtZSB0ZWxsIHlvdSwgaXQncyBhIHN0YXJzaGlwIGZ1bGwgb2YgZmxhdm9ycyBmcm9tIGV2ZXJ5IGNvcm5lciBvZiB0aGUgZ2FsYXh5LiBGcm9tIHRoZSBtb21lbnQgeW91IHRha2UgdGhhdCBmaXJzdCBiaXRlLCB5b3Uga25vdyB5b3UndmUgaGl0IHRoZSBqYWNrcG90LlxcblxcblRoZSBzdGFmZj8gVGhleSdyZSBsaWtlIHRoZSBzbW9vdGhlc3QgcGlsb3RzIGluIHRoZSBnYWxheHkuIFF1aWNrIG9uIHRoZWlyIGZlZXQsIGFsd2F5cyB0aGVyZSB3aGVuIHlvdSBuZWVkICdlbS4gWW91IHdvbid0IGZpbmQgYSBiZXR0ZXIgY3JldyBhbnl3aGVyZSBlbHNlLiBBbmQgaGV5LCBpZiB5b3UncmUgbHVja3ksIHlvdSBtaWdodCBldmVuIHJ1biBpbnRvIHNvbWUgZmFtaWxpYXIgZmFjZXMgZnJvbSB0aGUgT3V0ZXIgUmltLlxcblxcbk5vdywgbGV0J3MgdGFsayBkcmlua3MuIFRoZSBDYW50aW5hIGtub3dzIGhvdyB0byBtaXggJ2VtLiBGcm9tIHRoZSBjbGFzc2ljIENvcmVsbGlhbiBhbGUgdG8gc29tZSBleG90aWMgY29uY29jdGlvbnMsIHRoZXkndmUgZ290IHlvdSBjb3ZlcmVkLiBUYWtlIGEgc2lwLCBraWNrIGJhY2ssIGFuZCBsZXQgdGhlIGZsYXZvcnMgdHJhbnNwb3J0IHlvdSB0byBhIHdob2xlIG5ldyB3b3JsZC5cXG5cXG5Tbywgd2hldGhlciB5b3UncmUgYSBzY291bmRyZWwgbGlrZSBtZSBvciBqdXN0IGEgaHVuZ3J5IHRyYXZlbGVyLCB0aGUgR2FsYWN0aWMgQ2FudGluYSBpcyB0aGUgcGxhY2UgdG8gYmUuIFRydXN0IG1lLCB5b3Ugd29uJ3QgYmUgZGlzYXBwb2ludGVkLiBJdCdzIGdvdCB0aGF0IHNwZWNpYWwgc29tZXRoaW5nIHRoYXQga2VlcHMgeW91IGNvbWluZyBiYWNrIGZvciBtb3JlLiBNYXkgdGhlIEZvcmNlIGJlIHdpdGggeW91LCBhbmQgdGhlIHRhc3RlIGJ1ZHMgdG9vIVwiLFxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3d3dy5zdGFyd2Fycy5jb20vZGF0YWJhbmsvaGFuLXNvbG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ2hld2JhY2NhJyxcbiAgICAgICAgICAgICAgICBpbWFnZTogY2hldyxcbiAgICAgICAgICAgICAgICByZXZpZXc6IFwiR3JycnJycnJycnJycnJyciEgSG5ubm5nZ2dnZ2chIEFhYWFhYWFhcnJycnJnZ2doaGhoIVwiLFxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3d3dy5zdGFyd2Fycy5jb20vZGF0YWJhbmsvY2hld2JhY2NhJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0MtM1BPJyxcbiAgICAgICAgICAgICAgICBpbWFnZTogYzNwbyxcbiAgICAgICAgICAgICAgICByZXZpZXc6IFwiT2gsIG15IGNpcmN1aXRzISBUaGUgR2FsYWN0aWMgQ2FudGluYSwgd2hhdCBhIGRlbGlnaHRmdWwgZXN0YWJsaXNobWVudCEgSXQncyBhIGhhdmVuIG9mIGVsZWdhbmNlIGFuZCByZWZpbmVtZW50LCBhIHBsYWNlIHdoZXJlIG9uZSBjYW4gYXBwcmVjaWF0ZSB0aGUgZmluZXIgdGhpbmdzIGluIGxpZmUuIEFuZCB5ZXQsIGFtaWRzdCB0aGUgaW1wZWNjYWJsZSBhbWJpYW5jZSwgdGhlcmUncyBhbHdheXMgdGhhdCBpbmNlc3NhbnQgYmVlcGluZyBhbmQgd2hpcnJpbmcgb2YgYSBjZXJ0YWluIGFzdHJvbWVjaCBkcm9pZCB0aGF0IHNoYWxsIHJlbWFpbiBuYW1lbGVzcy4gUjItRDIsIEkgZGFyZSBzYXksIHNlZW1zIHRvIGxhY2sgcHJvcGVyIGV0aXF1ZXR0ZSBhbmQgZGVjb3J1bS4gT2gsIHRoZSBjb3VudGxlc3MgdGltZXMgSSd2ZSBoYWQgdG8gZW5kdXJlIGhpcyBpbXB1bHNpdmUgYW50aWNzIGFuZCBpbmNvbnZlbmllbnQgaW50ZXJydXB0aW9ucy4gSG93ZXZlciwgSSBtdXN0IGFkbWl0LCB0aGUgQ2FudGluYSdzIG1lbnUgaXMgc2ltcGx5IG1hcnZlbG91cywgb2ZmZXJpbmcgYSB3aWRlIHJhbmdlIG9mIGRlbGVjdGFibGUgb3B0aW9ucyB0byBzYXRpc2Z5IGV2ZW4gdGhlIG1vc3QgZGlzY2VybmluZyBwYWxhdGVzLiBCdXQgbGV0IHVzIG5vdCBmb3JnZXQgdGhlIG1vc3QgaW1wb3J0YW50IGFzcGVjdDogdGhlIGltcGVjY2FibGUgc2VydmljZSBwcm92aWRlZCBieSB0aGUgQ2FudGluYSdzIHN0YWZmLiBUaGV5IGhhbmRsZSB0aGUgY2hhbGxlbmdlcyBwb3NlZCBieSBSMi1EMidzIHVucHJlZGljdGFibGUgYmVoYXZpb3Igd2l0aCBpbXByZXNzaXZlIHBvaXNlIGFuZCBwYXRpZW5jZS4gSW4gc3VtbWFyeSwgdGhlIEdhbGFjdGljIENhbnRpbmEgaXMgYSBkZWxpZ2h0ZnVsIGRlc3RpbmF0aW9uLCBkZXNwaXRlIHRoZSBvY2Nhc2lvbmFsIHJvYm90aWMgbnVpc2FuY2UuIEl0J3MgYSBwbGFjZSB0byBpbmR1bGdlIGluIHRoZSBmaW5lc3QgY3VsaW5hcnkgZGVsaWdodHMsIGFsbCB3aGlsZSBob3BpbmcgdGhhdCBSMi1EMiBkb2Vzbid0IGVsZWN0cm9jdXRlIGhpbXNlbGYgd2l0aCBhIG1hbGZ1bmN0aW9uaW5nIGRyaW5rIGRpc3BlbnNlci4uLiBhZ2FpblwiLFxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3d3dy5zdGFyd2Fycy5jb20vZGF0YWJhbmsvYy0zcG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnUjItRDInLFxuICAgICAgICAgICAgICAgIGltYWdlOiByMmQyLFxuICAgICAgICAgICAgICAgIHJldmlldzogXCIgIFVuZm9ydHVuYXRlbHksIGl0IHNlZW1zIHRoYXQgUjItRDIncyBjb21tZW50IGhhZCB0byBiZSByZW1vdmVkIGZvciB1dGlsaXppbmcgYSByYXRoZXIgY29sb3JmdWwgbGFuZ3VhZ2UuIEFzIG11Y2ggYXMgd2UgYXBwcmVjaWF0ZSB0aGUgZHJvaWQncyBlbnRodXNpYXNtIGFuZCB1bmlxdWUgd2F5IG9mIGV4cHJlc3NpbmcgdGhvdWdodHMsIHdlIHN0cml2ZSB0byBtYWludGFpbiBhIGZhbWlseS1mcmllbmRseSBlbnZpcm9ubWVudCBoZXJlIGF0IHRoZSBHYWxhY3RpYyBDYW50aW5hLiBXZSBlbmNvdXJhZ2UgUjItRDIgYW5kIGFsbCBvdXIgZ3Vlc3RzIHRvIGtlZXAgdGhlIGNvbnZlcnNhdGlvbnMgcGxlYXNhbnQgYW5kIHN1aXRhYmxlIGZvciBhbGwgYWdlcy4gVGhhbmsgeW91IGZvciB1bmRlcnN0YW5kaW5nLCBhbmQgbWF5IHRoZSBiZWVwcyBhbmQgYm9vcHMgb2Ygam95IGNvbnRpbnVlIHRvIHJlc29uYXRlIHRocm91Z2ggb3VyIGNhbnRpbmEhICBcIixcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuc3RhcndhcnMuY29tL2RhdGFiYW5rL3IyLWQyJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBzdGFyUmF0aW5nID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBzdGFyUmF0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzdGFyUmF0aW5nLmNsYXNzTGlzdC5hZGQoJ3N0YXItcmF0aW5nJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdzdGFyJyk7XG4gICAgICAgICAgICAgICAgc3Rhci5zcmMgPSBTdGFyO1xuICAgICAgICAgICAgICAgIHN0YXIuYWx0ID0gJ1JldmlldyBzdGFyJztcbiAgICAgICAgICAgICAgICBzdGFyUmF0aW5nLmFwcGVuZENoaWxkKHN0YXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0YXJSYXRpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVSZXZpZXdDYXJkID0gKGNhcmREYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwZnBMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgcGZwTGluay5ocmVmID0gY2FyZERhdGEubGluaztcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjYXJkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBjYXJkSW1nLnNyYyA9IGNhcmREYXRhLmltYWdlO1xuICAgICAgICAgICAgY2FyZEltZy5hbHQgPSBjYXJkRGF0YS5uYW1lO1xuICAgICAgICBcbiAgICAgICAgICAgIHBmcExpbmsuYXBwZW5kQ2hpbGQoY2FyZEltZyk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGVudCcpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGNhcmRUZXh0LnRleHRDb250ZW50ID0gY2FyZERhdGEubmFtZTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjYXJkUmF0aW5nID0gc3RhclJhdGluZygpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNhcmREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgICAgICBpZiAoY2FyZERhdGEubmFtZSA9PT0gJ1IyLUQyJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBjYXJkRGF0YS5yZXZpZXc7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjaWFsU3RhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgc3BlY2lhbFN0YXJzLmNsYXNzTGlzdC5hZGQoJ3NwZWNpYWwtc3RhcnMnKTtcbiAgICAgICAgICAgICAgICBzcGVjaWFsU3RhcnMudGV4dENvbnRlbnQgPSAnKioqKionO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgc3BlY2lhbFRleHQuY2xhc3NMaXN0LmFkZCgnc3BlY2lhbC10ZXh0Jyk7XG4gICAgICAgICAgICAgICAgc3BlY2lhbFRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lhbFN0YXJzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBzcGVjaWFsU3RhcnMyLmNsYXNzTGlzdC5hZGQoJ3NwZWNpYWwtc3RhcnMnKTtcbiAgICAgICAgICAgICAgICBzcGVjaWFsU3RhcnMyLnRleHRDb250ZW50ID0gJyoqKioqJztcblxuICAgICAgICAgICAgICAgIGNhcmREZXNjLmFwcGVuZENoaWxkKHNwZWNpYWxTdGFycyk7XG4gICAgICAgICAgICAgICAgY2FyZERlc2MuYXBwZW5kQ2hpbGQoc3BlY2lhbFRleHQpO1xuICAgICAgICAgICAgICAgIGNhcmREZXNjLmFwcGVuZENoaWxkKHNwZWNpYWxTdGFyczIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkRGVzYy50ZXh0Q29udGVudCA9IGNhcmREYXRhLnJldmlldztcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjYXJkVGV4dCk7XG4gICAgICAgICAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjYXJkUmF0aW5nKTtcbiAgICAgICAgICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNhcmREZXNjKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHBmcExpbmspO1xuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmV2aWV3Qm94ID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCByZXZpZXdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByZXZpZXdzLmNsYXNzTGlzdC5hZGQoJ3Jldmlld3MnKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXZpZXdzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICByZXZpZXdzVGV4dC50ZXh0Q29udGVudCA9ICdXaGF0IG91ciBDdXN0b21lcnMgQXJlIFNheWluZyc7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmV2aWV3c0NhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByZXZpZXdzQ2FyZHMuY2xhc3NMaXN0LmFkZCgncmV2aWV3cy1jYXJkcycpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV4dC1idXR0b24nKTtcbiAgICAgICAgICAgIG5leHRCdXR0b24uc3JjID0gTmV4dDtcbiAgICAgICAgICAgIG5leHRCdXR0b24uYWx0ID0gJ05leHQgcmV2aWV3IGJ1dHRvbic7XG4gICAgICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaC1idXR0b24nKTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNhcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtd3JhcHBlcicpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYmFjay1idXR0b24nKTtcbiAgICAgICAgICAgIGJhY2tCdXR0b24uc3JjID0gQmFjaztjcmVhdGVSZXZpZXdDYXJkXG4gICAgICAgICAgICBiYWNrQnV0dG9uLmFsdCA9ICdCYWNrIHJldmlldyBidXR0b24nO1xuICAgICAgICAgICAgYmFja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC1idG4nKTtcblxuICAgICAgICAgICAgcmV2aWV3c0NhcmRzLmFwcGVuZENoaWxkKGJhY2tCdXR0b24pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZVJldmlld0NhcmQoY2FyZERhdGFbaV0pO1xuICAgICAgICAgICAgICAgIGNhcmRXcmFwcGVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXZpZXdzQ2FyZHMuYXBwZW5kQ2hpbGQoY2FyZFdyYXBwZXIpO1xuICAgICAgICAgICAgcmV2aWV3c0NhcmRzLmFwcGVuZENoaWxkKG5leHRCdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuICAgICAgICAgICAgcmV2aWV3cy5hcHBlbmRDaGlsZChyZXZpZXdzVGV4dCk7XG4gICAgICAgICAgICByZXZpZXdzLmFwcGVuZENoaWxkKHJldmlld3NDYXJkcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJldmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmV2aWV3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Jldmlldy1jb250YWluZXInKTtcbiAgICAgICAgICAgIGNvbnN0IG1vcmVSZXZpZXdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbW9yZVJldmlld3MuY2xhc3NMaXN0LmFkZCgnbW9yZS1yZXZpZXdzJyk7XG4gICAgICAgICAgICBtb3JlUmV2aWV3cy5ocmVmID0gJyMnO1xuICAgICAgICAgICAgY29uc3QgbW9yZVJldmlld3NMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbW9yZVJldmlld3NMaW5rLnRleHRDb250ZW50ID0gJ1NlZSBBbGwgUmV2aWV3cyc7XG4gICAgICAgICAgICBjb25zdCBtb3JlUmV2aWV3c0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgbW9yZVJldmlld3NJbWcuc3JjID0gTmV4dDtcblxuICAgICAgICAgICAgbW9yZVJldmlld3MuYXBwZW5kQ2hpbGQobW9yZVJldmlld3NMaW5rKTtcbiAgICAgICAgICAgIG1vcmVSZXZpZXdzLmFwcGVuZENoaWxkKG1vcmVSZXZpZXdzSW1nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKG1vcmVSZXZpZXdzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV2aWV3cy5hcHBlbmRDaGlsZChyZXZpZXdDb250YWluZXIpO1xuXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHJldmlld3MpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzd2l0Y2hDYXJkcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXdyYXBwZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IGNhcmRzV3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArIDMyO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2FyZFdpZHRoKTtcbiAgICAgICAgICAgIGNvbnN0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFjay1idXR0b24nKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC1idXR0b24nKTtcbiAgICAgICAgICAgIGxldCBpc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zaXRpb25EZWxheSA9IDcwMDtcbiAgICAgICAgICAgIGxldCBzd2l0Y2hJbnRlcnZhbDtcbiAgICAgICAgICAgIGxldCBsYXN0VHJhbnNpdGlvblRpbWVzdGFtcCA9IDA7XG5cbiAgICAgICAgICAgIC8vIERpc2FibGUgdGhlIHByZXZpb3VzIGJ1dHRvbiBvciB0aGUgbmV4dCBidXR0b24gd2hlbiB0aGUgZmlyc3QgY2FyZCBvciBsYXN0IGNhcmQgaXMgZGlzcGxheWVkIHJlc3BlY3RpdmVseVxuICAgICAgICAgICAgY29uc3QgZW5hYmxlQnV0dG9ucyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInN3aXRjaC1idXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkLWJ0blwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PT0gY2FyZERhdGEubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzd2l0Y2gtYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZC1idG5cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWQtYnRuXCIpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZC1idG5cIik7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LmFkZChcInN3aXRjaC1idXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN3aXRjaC1idXR0b25cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2FyZHMgYXJlIGN1cnJlbnRseSB0cmFuc2l0aW9uaW5nIGFuZCBhdm9pZCBzY3JvbGxpbmcgYmV5b25kIHRoZSBmaXJzdCBjYXJkXG4gICAgICAgICAgICAgICAgaWYgKCFpc1RyYW5zaXRpb25pbmcgJiYgY3VycmVudEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxhc3QgdHJhbnNpdGlvbiB3YXMgbGVzcyB0aGFuIDEgc2Vjb25kIGFnb1xuICAgICAgICAgICAgICAgICAgICAvLyAgT3RoZXJ3aXNlLCByYXBpZCBjbGlja3Mgd2lsbCBydWluIHRoZSB0cmFuc2l0aW9uIG9mIHdoaWNoIGNhcmQgdG8gZGlzcGxheVxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbWVzdGFtcCAtIGxhc3RUcmFuc2l0aW9uVGltZXN0YW1wIDwgdHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIElnbm9yZSByYXBpZCBjb25zZWN1dGl2ZSBjbGlja3NcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTY3JvbGwgc21vb3RobHkgYW5kIHNsb3dseSByYXRoZXIgdGhhbiByYXBpZGx5IGp1bXBpbmcgdG8gdGhlIHByZXZpb3VzIGNhcmRcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhcmRzV3JhcHBlci5zY3JvbGxMZWZ0IC0gY2FyZFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNXcmFwcGVyLnNjcm9sbFRvKHNjcm9sbE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICByZXN0YXJ0U3dpdGNoSW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCByYXBpZCBjb25zZWN1dGl2ZSBjbGlja3MgYnkgc3RvcHBpbmcgdGhlIGJ1dHRvbnMgZnJvbSB3b3JraW5nIGZvciAxIHNlY29uZFxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9LCB0cmFuc2l0aW9uRGVsYXkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjYXJkcyBhcmUgdHJhbnNpdGlvbmluZyBvciB0aGUgZmlyc3QgY2FyZCBpcyBhbHJlYWR5IGRpc3BsYXllZCwgZGlzYWJsZSB0aGUgcHJldmlvdXMgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxSaWdodCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2FyZHMgYXJlIGN1cnJlbnRseSB0cmFuc2l0aW9uaW5nIGFuZCBhdm9pZCBzY3JvbGxpbmcgYmV5b25kIHRoZSBsYXN0IGNhcmRcbiAgICAgICAgICAgICAgICBpZiAoIWlzVHJhbnNpdGlvbmluZyAmJiBjdXJyZW50SW5kZXggPCBjYXJkRGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgbGFzdCB0cmFuc2l0aW9uIHdhcyBsZXNzIHRoYW4gMSBzZWNvbmQgYWdvXG4gICAgICAgICAgICAgICAgICAgIC8vICBPdGhlcndpc2UsIHJhcGlkIGNsaWNrcyB3aWxsIHJ1aW4gdGhlIHRyYW5zaXRpb24gb2Ygd2hpY2ggY2FyZCB0byBkaXNwbGF5XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGltZXN0YW1wIC0gbGFzdFRyYW5zaXRpb25UaW1lc3RhbXAgPCB0cmFuc2l0aW9uRGVsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gSWdub3JlIHJhcGlkIGNvbnNlY3V0aXZlIGNsaWNrc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNjcm9sbCBzbW9vdGhseSBhbmQgc2xvd2x5IHJhdGhlciB0aGFuIHJhcGlkbHkganVtcGluZyB0byB0aGUgbmV4dCBjYXJkXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYXJkc1dyYXBwZXIuc2Nyb2xsTGVmdCArIGNhcmRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNhcmRzV3JhcHBlci5zY3JvbGxUbyhzY3JvbGxPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdGFydFN3aXRjaEludGVydmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCByYXBpZCBjb25zZWN1dGl2ZSBjbGlja3MgYnkgc3RvcHBpbmcgdGhlIGJ1dHRvbnMgZnJvbSB3b3JraW5nIGZvciAxIHNlY29uZFxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9LCB0cmFuc2l0aW9uRGVsYXkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4ID09PSBjYXJkRGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBsYXN0IGNhcmQgaXMgZGlzcGxheWVkLCBzY3JvbGwgdG8gdGhlIGZpcnN0IGNhcmRcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjYXJkc1dyYXBwZXIuc2Nyb2xsVG8oc2Nyb2xsT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWQtYnRuXCIpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2gtYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjYXJkcyBhcmUgdHJhbnNpdGlvbmluZyBvciB0aGUgbGFzdCBjYXJkIGlzIGFscmVhZHkgZGlzcGxheWVkLCBkaXNhYmxlIHRoZSBuZXh0IGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdGFydFN3aXRjaEludGVydmFsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3dpdGNoSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHN3aXRjaEludGVydmFsID0gc2V0SW50ZXJ2YWwoc2Nyb2xsUmlnaHQsIDUwMDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc3RvcFN3aXRjaEludGVydmFsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3dpdGNoSW50ZXJ2YWwpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcFN3aXRjaEludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgfSAvLyBTdG9wIGF1dG9tYXRpYyBzd2l0Y2hpbmcgd2hlbiBjbGlja2luZyB0aGUgYnV0dG9uc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgY2FyZERhdGEubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBzdG9wU3dpdGNoSW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gU3RhcnQgYXV0b21hdGljIHN3aXRjaGluZ1xuICAgICAgICAgICAgcmVzdGFydFN3aXRjaEludGVydmFsKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFN0b3AgYXV0b21hdGljIHN3aXRjaGluZyB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIGNhcmRzXG4gICAgICAgICAgICBjYXJkc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzd2l0Y2hJbnRlcnZhbCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVzdW1lIGF1dG9tYXRpYyBzd2l0Y2hpbmcgd2hlbiBub3QgaG92ZXJpbmcgb3ZlciB0aGUgY2FyZHNcbiAgICAgICAgICAgIGNhcmRzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW91c2Ugb3V0XCIpO1xuICAgICAgICAgICAgICAgIHN3aXRjaEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSBjYXJkRGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbGFzdCBjYXJkIGlzIGRpc3BsYXllZCwgc2Nyb2xsIHRvIHRoZSBmaXJzdCBjYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkc1dyYXBwZXIuc2Nyb2xsVG8oc2Nyb2xsT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWQtYnRuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3dpdGNoLWJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8gRGlzcGxheSB0aGUgZmlyc3QgcmV2aWV3IGFuZCBzZXR1cCBhIGNvbnRhaW5lciBmb3IgdGhlIHJldmlldyBjYXJkc1xuICAgICAgICByZXZpZXdCb3goKTtcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXJzIGZvciBuZXh0IGFuZCBwcmV2aW91cyBidXR0b25zXG4gICAgICAgIHN3aXRjaENhcmRzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS1Db250YWN0IERldGFpbHM6LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGNvbnN0IGNvbnRhY3RUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFjdFRvcC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRvcCcpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhY3RUb3BMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3RUb3BMZWZ0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtbGVmdCcpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3RUZXh0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGV4dCcpO1xuICAgICAgICBjb25zdCBjb250YWN0VGV4dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgY29udGFjdFRleHRUaXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IEluZm9ybWF0aW9uJztcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS1QaG9uZSBOdW1iZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICBjb25zdCBjb250YWN0VGV4dFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBjb250YWN0VGV4dFBob25lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGV4dC1kZXNjJyk7XG5cbiAgICAgICAgY29uc3QgY29udGFjdFRleHRQaG9uZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb250YWN0VGV4dFBob25lSW1nLnNyYyA9IFBob25lO1xuICAgICAgICBjb250YWN0VGV4dFBob25lSW1nLmFsdCA9ICdQaG9uZSBpY29uJztcblxuICAgICAgICBjb25zdCBjb250YWN0VGV4dFBob25lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjb250YWN0VGV4dFBob25lVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnRhY3RUZXh0UGhvbmVUZXh0MS50ZXh0Q29udGVudCA9ICdQaG9uZTogJztcbiAgICAgICAgY29uc3QgY29udGFjdFRleHRQaG9uZVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb250YWN0VGV4dFBob25lVGV4dDIudGV4dENvbnRlbnQgPSAnKyAnO1xuICAgICAgICBjb250YWN0VGV4dFBob25lVGV4dDIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10ZXh0LXNpZ24nKTtcbiAgICAgICAgY29uc3QgY29udGFjdFRleHRQaG9uZVRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb250YWN0VGV4dFBob25lVGV4dDMudGV4dENvbnRlbnQgPSAnMSA1MzAtNzE2LTkwNjInO1xuXG4gICAgICAgIGNvbnRhY3RUZXh0UGhvbmVUZXh0LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0UGhvbmVUZXh0MSk7XG4gICAgICAgIGNvbnRhY3RUZXh0UGhvbmVUZXh0LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0UGhvbmVUZXh0Mik7XG4gICAgICAgIGNvbnRhY3RUZXh0UGhvbmVUZXh0LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0UGhvbmVUZXh0Myk7XG5cbiAgICAgICAgY29udGFjdFRleHRQaG9uZS5hcHBlbmRDaGlsZChjb250YWN0VGV4dFBob25lSW1nKTtcbiAgICAgICAgY29udGFjdFRleHRQaG9uZS5hcHBlbmRDaGlsZChjb250YWN0VGV4dFBob25lVGV4dCk7XG5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS1UZWxlcGhvbmUgTlVtYmVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBjb25zdCBjb250YWN0VGV4dFRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgY29udGFjdFRleHRUZWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10ZXh0LWRlc2MnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbnRhY3RUZXh0VGVsSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnRhY3RUZXh0VGVsSW1nLnNyYyA9IFRlbDtcbiAgICAgICAgY29udGFjdFRleHRUZWxJbWcuYWx0ID0gJ1RlbCBpY29uJztcblxuICAgICAgICBjb25zdCBjb250YWN0VGV4dFRlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgY29udGFjdFRleHRUZWxUZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29udGFjdFRleHRUZWxUZXh0MS50ZXh0Q29udGVudCA9ICdUZWw6ICc7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RUZXh0VGVsVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnRhY3RUZXh0VGVsVGV4dDIudGV4dENvbnRlbnQgPSAnKyAnO1xuICAgICAgICBjb250YWN0VGV4dFRlbFRleHQyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGV4dC1zaWduJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RUZXh0VGVsVGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnRhY3RUZXh0VGVsVGV4dDMudGV4dENvbnRlbnQgPSAnMSA1MzAtNzE2LTkwNjInO1xuXG4gICAgICAgIGNvbnRhY3RUZXh0VGVsVGV4dC5hcHBlbmRDaGlsZChjb250YWN0VGV4dFRlbFRleHQxKTtcbiAgICAgICAgY29udGFjdFRleHRUZWxUZXh0LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0VGVsVGV4dDIpO1xuICAgICAgICBjb250YWN0VGV4dFRlbFRleHQuYXBwZW5kQ2hpbGQoY29udGFjdFRleHRUZWxUZXh0Myk7XG5cbiAgICAgICAgY29udGFjdFRleHRUZWwuYXBwZW5kQ2hpbGQoY29udGFjdFRleHRUZWxJbWcpO1xuICAgICAgICBjb250YWN0VGV4dFRlbC5hcHBlbmRDaGlsZChjb250YWN0VGV4dFRlbFRleHQpO1xuXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tRmF4IE51bWJlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBjb25zdCBjb250YWN0VGV4dEZheCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgY29udGFjdFRleHRGYXguY2xhc3NMaXN0LmFkZCgnY29udGFjdC10ZXh0LWRlc2MnKTtcblxuICAgICAgICBjb25zdCBjb250YWN0VGV4dEZheEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb250YWN0VGV4dEZheEltZy5zcmMgPSBGYXg7XG4gICAgICAgIGNvbnRhY3RUZXh0RmF4SW1nLmFsdCA9ICdGYXggaWNvbic7XG5cbiAgICAgICAgY29uc3QgY29udGFjdFRleHRGYXhUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RUZXh0RmF4VGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnRhY3RUZXh0RmF4VGV4dDEudGV4dENvbnRlbnQgPSAnRmF4OiAnO1xuICAgICAgICBjb25zdCBjb250YWN0VGV4dEZheFRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb250YWN0VGV4dEZheFRleHQyLnRleHRDb250ZW50ID0gJysgJztcbiAgICAgICAgY29udGFjdFRleHRGYXhUZXh0Mi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRleHQtc2lnbicpO1xuICAgICAgICBjb25zdCBjb250YWN0VGV4dEZheFRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb250YWN0VGV4dEZheFRleHQzLnRleHRDb250ZW50ID0gJzEgNTMwLTcxNi05MDYyJztcblxuICAgICAgICBjb250YWN0VGV4dEZheFRleHQuYXBwZW5kQ2hpbGQoY29udGFjdFRleHRGYXhUZXh0MSk7XG4gICAgICAgIGNvbnRhY3RUZXh0RmF4VGV4dC5hcHBlbmRDaGlsZChjb250YWN0VGV4dEZheFRleHQyKTtcbiAgICAgICAgY29udGFjdFRleHRGYXhUZXh0LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0RmF4VGV4dDMpO1xuXG4gICAgICAgIGNvbnRhY3RUZXh0RmF4LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0RmF4SW1nKTtcbiAgICAgICAgY29udGFjdFRleHRGYXguYXBwZW5kQ2hpbGQoY29udGFjdFRleHRGYXhUZXh0KTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLUNvbnRhY3QgRGV0YWlscyBjb21wbGV0ZSBoZXJlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgY29udGFjdFRleHQuYXBwZW5kQ2hpbGQoY29udGFjdFRleHRUaXRsZSk7XG4gICAgICAgIGNvbnRhY3RUZXh0LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0UGhvbmUpO1xuICAgICAgICBjb250YWN0VGV4dC5hcHBlbmRDaGlsZChjb250YWN0VGV4dFRlbCk7XG4gICAgICAgIGNvbnRhY3RUZXh0LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0RmF4KTtcblxuICAgICAgICBjb250YWN0VG9wTGVmdC5hcHBlbmRDaGlsZChjb250YWN0VGV4dCk7XG5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS1BZGRyZXNzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgY29uc3QgQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBBZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MnKTtcblxuICAgICAgICBjb25zdCBBZGRyZXNzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBBZGRyZXNzVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkcmVzcyc7XG5cbiAgICAgICAgY29uc3QgQWRkcmVzc01hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBBZGRyZXNzTWFwLnNyYyA9IE1hcExvY2F0aW9uO1xuICAgICAgICBBZGRyZXNzTWFwLmFsdCA9ICdMb2NhdGlvbiBvZiBHYWxhY3RpYyBDYW50aW5hJztcblxuICAgICAgICBjb25zdCBBZGRyZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBBZGRyZXNzVGV4dC5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzLXRleHQnKTtcblxuICAgICAgICBjb25zdCBBZGRyZXNzVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIEFkZHJlc3NUZXh0MS50ZXh0Q29udGVudCA9ICdIeXBlcmxhbmUgQXZlbnVlJztcblxuICAgICAgICBjb25zdCBBZGRyZXNzVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgQWRkcmVzc1RleHQyLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MtdGV4dC1kZXNjJyk7XG4gICAgICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNpdHkudGV4dENvbnRlbnQgPSAnR2FsYWN0aWMgQ2l0eSc7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBzdGF0ZS50ZXh0Q29udGVudCA9ICdHYWxhY3RpYyBSZXB1YmxpYyAxMDAwMCc7XG4gICAgICAgIEFkZHJlc3NUZXh0Mi5hcHBlbmRDaGlsZChjaXR5KTtcbiAgICAgICAgQWRkcmVzc1RleHQyLmFwcGVuZENoaWxkKHN0YXRlKTtcblxuICAgICAgICBjb25zdCBBZGRyZXNzVGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgQWRkcmVzc1RleHQzLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MtdGV4dC1kZXNjJyk7XG4gICAgICAgIGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvdW50cnkudGV4dENvbnRlbnQgPSAnQ29ydXNjYW50JztcbiAgICAgICAgY29uc3QgcGxhbmV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwbGFuZXQudGV4dENvbnRlbnQgPSAnQ29yZWxsaWEnO1xuICAgICAgICBBZGRyZXNzVGV4dDMuYXBwZW5kQ2hpbGQoY291bnRyeSk7XG4gICAgICAgIEFkZHJlc3NUZXh0My5hcHBlbmRDaGlsZChwbGFuZXQpO1xuXG4gICAgICAgIGNvbnN0IEFkZHJlc3NUZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBBZGRyZXNzVGV4dDQuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcy10ZXh0LWRlc2MnKTtcbiAgICAgICAgY29uc3Qgc29sYXJTeXN0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHNvbGFyU3lzdGVtLnRleHRDb250ZW50ID0gJ0NvcmVsbGlhbiBTeXN0ZW0nO1xuICAgICAgICBjb25zdCB4Y29vcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHhjb29ycy50ZXh0Q29udGVudCA9ICcyODQuNTY3JztcbiAgICAgICAgY29uc3QgeWNvb3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB5Y29vcnMudGV4dENvbnRlbnQgPSAnLTEyLjM0NSc7XG4gICAgICAgIEFkZHJlc3NUZXh0NC5hcHBlbmRDaGlsZChzb2xhclN5c3RlbSk7XG4gICAgICAgIEFkZHJlc3NUZXh0NC5hcHBlbmRDaGlsZCh4Y29vcnMpO1xuICAgICAgICBBZGRyZXNzVGV4dDQuYXBwZW5kQ2hpbGQoeWNvb3JzKTtcblxuICAgICAgICBBZGRyZXNzVGV4dC5hcHBlbmRDaGlsZChBZGRyZXNzVGV4dDEpO1xuICAgICAgICBBZGRyZXNzVGV4dC5hcHBlbmRDaGlsZChBZGRyZXNzVGV4dDIpO1xuICAgICAgICBBZGRyZXNzVGV4dC5hcHBlbmRDaGlsZChBZGRyZXNzVGV4dDMpO1xuICAgICAgICBBZGRyZXNzVGV4dC5hcHBlbmRDaGlsZChBZGRyZXNzVGV4dDQpO1xuXG4gICAgICAgIEFkZHJlc3MuYXBwZW5kQ2hpbGQoQWRkcmVzc1RpdGxlKTtcbiAgICAgICAgQWRkcmVzcy5hcHBlbmRDaGlsZChBZGRyZXNzTWFwKTtcbiAgICAgICAgQWRkcmVzcy5hcHBlbmRDaGlsZChBZGRyZXNzVGV4dCk7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1PcGVyYXRpbmcgSG91cnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICBjb25zdCBvcGVyYXRpbmdIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcGVyYXRpbmdIb3Vycy5jbGFzc0xpc3QuYWRkKCdvcGVyYXRpbmctaG91cnMnKTtcblxuICAgICAgICBjb25zdCBvcGVyYXRpbmdIb3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgb3BlcmF0aW5nSG91cnNUaXRsZS5jbGFzc0xpc3QuYWRkKCdvcGVyYXRpbmctaG91cnMtdGl0bGUnKTtcbiAgICAgICAgb3BlcmF0aW5nSG91cnNUaXRsZS50ZXh0Q29udGVudCA9ICdPcGVyYXRpbmcgSG91cnMnO1xuXG4gICAgICAgIGNvbnN0IG9wZXJhdGluZ0hvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcGVyYXRpbmdIb3Vyc1RleHQuY2xhc3NMaXN0LmFkZCgnb3BlcmF0aW5nLWhvdXJzLXRleHQnKTtcblxuICAgICAgICBjb25zdCBvcGVyYXRpbmdIb3Vyc1RleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG9wZXJhdGluZ0hvdXJzVGV4dDEuY2xhc3NMaXN0LmFkZCgnb3BlcmF0aW5nLWhvdXJzLXRleHQtZGVzYycpO1xuICAgICAgICBjb25zdCBvcGVyYXRpbmdEYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBvcGVyYXRpbmdEYXlzLnRleHRDb250ZW50ID0gJ1N1bmRheSAtIFRodXJzZGF5JztcbiAgICAgICAgY29uc3Qgb3BlcmF0aW5nVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgb3BlcmF0aW5nVGltZS50ZXh0Q29udGVudCA9ICc5OjAwIEFNIC0gMTI6MDAgQU0nO1xuICAgICAgICBvcGVyYXRpbmdIb3Vyc1RleHQxLmFwcGVuZENoaWxkKG9wZXJhdGluZ0RheXMpO1xuICAgICAgICBvcGVyYXRpbmdIb3Vyc1RleHQxLmFwcGVuZENoaWxkKG9wZXJhdGluZ1RpbWUpO1xuXG4gICAgICAgIGNvbnN0IG9wZXJhdGluZ0hvdXJzVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3BlcmF0aW5nSG91cnNUZXh0Mi5jbGFzc0xpc3QuYWRkKCdvcGVyYXRpbmctaG91cnMtdGV4dC1kZXNjJyk7XG4gICAgICAgIGNvbnN0IG9wZXJhdGluZ0RheXMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBvcGVyYXRpbmdEYXlzMi50ZXh0Q29udGVudCA9ICdGcmlkYXkgLSBTYXR1cmRheSc7XG4gICAgICAgIGNvbnN0IG9wZXJhdGluZ1RpbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBvcGVyYXRpbmdUaW1lMi50ZXh0Q29udGVudCA9ICcxMDowMCBBTSAtIDM6MDAgQU0nO1xuICAgICAgICBvcGVyYXRpbmdIb3Vyc1RleHQyLmFwcGVuZENoaWxkKG9wZXJhdGluZ0RheXMyKTtcbiAgICAgICAgb3BlcmF0aW5nSG91cnNUZXh0Mi5hcHBlbmRDaGlsZChvcGVyYXRpbmdUaW1lMik7XG5cbiAgICAgICAgb3BlcmF0aW5nSG91cnNUZXh0LmFwcGVuZENoaWxkKG9wZXJhdGluZ0hvdXJzVGV4dDEpO1xuICAgICAgICBvcGVyYXRpbmdIb3Vyc1RleHQuYXBwZW5kQ2hpbGQob3BlcmF0aW5nSG91cnNUZXh0Mik7XG5cbiAgICAgICAgb3BlcmF0aW5nSG91cnMuYXBwZW5kQ2hpbGQob3BlcmF0aW5nSG91cnNUaXRsZSk7XG4gICAgICAgIG9wZXJhdGluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZXJhdGluZ0hvdXJzVGV4dCk7XG5cbiAgICAgICAgY29udGFjdFRvcExlZnQuYXBwZW5kQ2hpbGQob3BlcmF0aW5nSG91cnMpO1xuXG4gICAgICAgIGNvbnN0IG1vcmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vcmVJbmZvLmNsYXNzTGlzdC5hZGQoJ21vcmUtaW5mbycpO1xuXG4gICAgICAgIGNvbnN0IG1vcmVJbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbW9yZUluZm8xLnRleHRDb250ZW50ID0gJ0ZvciBtb3JlIGluZm9ybWF0aW9uLCc7XG5cbiAgICAgICAgY29uc3QgbW9yZUluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBtb3JlSW5mbzIudGV4dENvbnRlbnQgPSAncGxlYXNlIHZpc2l0IG91ciAnO1xuXG4gICAgICAgIGNvbnN0IG1vcmVJbmZvTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbW9yZUluZm9MaW5rLmNsYXNzTGlzdC5hZGQoJ21vcmUtaW5mby1saW5rJyk7XG4gICAgICAgIG1vcmVJbmZvTGluay5ocmVmID0gJyMnO1xuICAgICAgICBtb3JlSW5mb0xpbmsudGV4dENvbnRlbnQgPSAnRkFRIHBhZ2UnO1xuXG4gICAgICAgIG1vcmVJbmZvMi5hcHBlbmRDaGlsZChtb3JlSW5mb0xpbmspO1xuXG4gICAgICAgIG1vcmVJbmZvLmFwcGVuZENoaWxkKG1vcmVJbmZvMSk7XG4gICAgICAgIG1vcmVJbmZvLmFwcGVuZENoaWxkKG1vcmVJbmZvMik7XG5cbiAgICAgICAgY29udGFjdFRvcExlZnQuYXBwZW5kQ2hpbGQobW9yZUluZm8pO1xuXG4gICAgICAgIGNvbnRhY3RUb3AuYXBwZW5kQ2hpbGQoY29udGFjdFRvcExlZnQpO1xuICAgICAgICBjb250YWN0VG9wLmFwcGVuZENoaWxkKEFkZHJlc3MpO1xuICAgICAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RUb3ApO1xuXG4gICAgICAgIFxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50JykuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgICB9O1xuXG4gICAgaW50cm8oKTtcbiAgICBvdmVydmlldygpO1xuICAgIHJldmlld3MoKTtcbiAgICBjb250YWN0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jc3Mvbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2hvbWUuY3NzJztcbmltcG9ydCAnLi9jc3MvcGFnZUxvYWQuY3NzJztcbmltcG9ydCBwYWdlTG9hZCBmcm9tICcuL2Z1bmN0aW9ucy9wYWdlTG9hZCc7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9wYWdlcy9ob21lLmpzJztcbmltcG9ydCBkZWxldGVDb250ZW50IGZyb20gJy4vZnVuY3Rpb25zL2RlbGV0ZUNvbnRlbnQnO1xuXG5wYWdlTG9hZCgpOyAvLyBEaXNwbGF5IGhlYWRlciBhbmQgZm9vdGVyXG5sb2FkSG9tZSgpOyAvLyBEaXNwbGF5IGhvbWUgcGFnZSBjb250ZW50XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2dvLWJveCBhJykuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkZWxldGVDb250ZW50KCk7XG4gICAgICAgIGxvYWRIb21lKCk7XG4gICAgfSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=