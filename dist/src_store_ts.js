"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkremote"] = self["webpackChunkremote"] || []).push([["src_store_ts"],{

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setCounter: () => (/* binding */ setCounter),\n/* harmony export */   useAppDispatch: () => (/* binding */ useAppDispatch),\n/* harmony export */   useAppSelector: () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n// Define initial state\r\nvar initialState = {\r\n    count: 1,\r\n};\r\n// Create a slice for user management\r\nvar countSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\r\n    name: \"counter\",\r\n    initialState: { count: 0 },\r\n    reducers: {\r\n        setCounter: function (state, action) {\r\n            state.count = action.payload;\r\n        },\r\n    },\r\n});\r\n// Export actions\r\nvar setCounter = countSlice.actions.setCounter;\r\n// Create Redux store\r\nvar store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\r\n    reducer: {\r\n        counter: countSlice.reducer,\r\n    },\r\n});\r\nvar useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch;\r\nvar useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\r\n\n\n//# sourceURL=webpack://remote/./src/store.ts?");

/***/ })

}]);