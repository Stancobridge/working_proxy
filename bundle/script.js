/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _learn_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./learn/counter */ \"./src/learn/counter.js\");\n/* harmony import */ var _learn_counter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_learn_counter__WEBPACK_IMPORTED_MODULE_0__);\n\n\n_learn_counter__WEBPACK_IMPORTED_MODULE_0__[\"increase\"].addEventListener(\"click\", _learn_counter__WEBPACK_IMPORTED_MODULE_0__[\"increaseHandler\"]);\n_learn_counter__WEBPACK_IMPORTED_MODULE_0__[\"decrease\"].addEventListener(\"click\", _learn_counter__WEBPACK_IMPORTED_MODULE_0__[\"decreaseHandler\"]);\n_learn_counter__WEBPACK_IMPORTED_MODULE_0__[\"anotherincrease\"].addEventListener(\"click\", _learn_counter__WEBPACK_IMPORTED_MODULE_0__[\"anotherIncHandler\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbm90aGVySW5jSGFuZGxlcixcbiAgZGVjcmVhc2UsXG4gIGRlY3JlYXNlSGFuZGxlcixcbiAgaW5jcmVhc2UsXG4gIGluY3JlYXNlSGFuZGxlcixcbiAgYW5vdGhlcmluY3JlYXNlXG59IGZyb20gXCIuL2xlYXJuL2NvdW50ZXJcIjtcblxuaW5jcmVhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluY3JlYXNlSGFuZGxlcik7XG5kZWNyZWFzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVjcmVhc2VIYW5kbGVyKTtcbmFub3RoZXJpbmNyZWFzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYW5vdGhlckluY0hhbmRsZXIpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/learn/counter.js":
/*!******************************!*\
  !*** ./src/learn/counter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval(" let count = document.querySelector(\".count\"); let increase = document.querySelector(\".increase\"); let anotherincrease = document.querySelector(\".anotherincrease\"); let decrease = document.querySelector(\".decrease\");\n\n\nlet state = {\n  count: 0,\n};\n\nconst countHandlers = {\n  set: function (tgt, prop, value) {\n\n    let allCountsElement = document.querySelectorAll(`.${prop}`);\n    allCountsElement.forEach((el) => {\n      el.textContent = value;\n      \n    });\n    tgt[prop] = value\n    return value\n  },\n};\n let countProxy = new Proxy(state, countHandlers);\n\n let increaseHandler = () => {\n  countProxy.count = countProxy.count + 1;\n}; let decreaseHandler = () => {\n  countProxy.count = countProxy.count - 1 \n};\n let anotherIncHandler = () => {\n\n  countProxy.count = countProxy.count + 2\n};\n\ncountProxy.count = 43652467532874\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGVhcm4vY291bnRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sZWFybi9jb3VudGVyLmpzP2I2MmIiXSwic291cmNlc0NvbnRlbnQiOlsiIGxldCBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRcIik7IGxldCBpbmNyZWFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5jcmVhc2VcIik7IGxldCBhbm90aGVyaW5jcmVhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFub3RoZXJpbmNyZWFzZVwiKTsgbGV0IGRlY3JlYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWNyZWFzZVwiKTtcblxuXG5sZXQgc3RhdGUgPSB7XG4gIGNvdW50OiAwLFxufTtcblxuY29uc3QgY291bnRIYW5kbGVycyA9IHtcbiAgc2V0OiBmdW5jdGlvbiAodGd0LCBwcm9wLCB2YWx1ZSkge1xuXG4gICAgbGV0IGFsbENvdW50c0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtwcm9wfWApO1xuICAgIGFsbENvdW50c0VsZW1lbnQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICBcbiAgICB9KTtcbiAgICB0Z3RbcHJvcF0gPSB2YWx1ZVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxufTtcbiBsZXQgY291bnRQcm94eSA9IG5ldyBQcm94eShzdGF0ZSwgY291bnRIYW5kbGVycyk7XG5cbiBsZXQgaW5jcmVhc2VIYW5kbGVyID0gKCkgPT4ge1xuICBjb3VudFByb3h5LmNvdW50ID0gY291bnRQcm94eS5jb3VudCArIDE7XG59OyBsZXQgZGVjcmVhc2VIYW5kbGVyID0gKCkgPT4ge1xuICBjb3VudFByb3h5LmNvdW50ID0gY291bnRQcm94eS5jb3VudCAtIDEgXG59O1xuIGxldCBhbm90aGVySW5jSGFuZGxlciA9ICgpID0+IHtcblxuICBjb3VudFByb3h5LmNvdW50ID0gY291bnRQcm94eS5jb3VudCArIDJcbn07XG5cbmNvdW50UHJveHkuY291bnQgPSA0MzY1MjQ2NzUzMjg3NFxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/learn/counter.js\n");

/***/ })

/******/ });