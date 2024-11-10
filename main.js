/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `p, div, span, label, input, button {
    font-family: "Kodchasan", sans-serif;
    font-weight: 400;
}

form {
    margin-bottom: 15px;
}

#content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(50px, auto);
    column-gap: 10px;
    row-gap: 10px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
}

@media (max-width: 992px) {
    #content {
        width: 95%;
    }
}

@media (min-width: 992px) {  
    #content {
        width: 1000px;
    }
}

.box {
    background-color: snow;
    border: thick double slateblue;
    border-radius: 10px;
    padding: 0 10px;
    text-align: center;
}

#box0 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
}

#box1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
}

#box2 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
}

#box3 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
}

#box4 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
}

.gameboard {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    aspect-ratio: 1 / 1;
    column-gap: 1px;
    row-gap: 1px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
}

.square {
    background-color: paleturquoise;
    padding: 0 0px;
    text-align: center;
}

.hoverable:hover {
    filter: brightness(80%);
}

.five-square-ship {
    background-color: navy;
}

.four-square-ship {
    background-color: saddlebrown;
}

.three-square-ship-1 {
    background-color: seagreen;
}

.three-square-ship-2 {
    background-color: darkkhaki;
}

.two-square-ship {
    background-color: purple;
}

.miss {
    background-color: gainsboro;
}

.hit {
    background-color: red;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,oCAAoC;IACpC,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,gBAAgB;IAChB,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;AACJ;;AAEA;IACI,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mBAAmB;IACnB,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;IAC/B,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');\n\np, div, span, label, input, button {\n    font-family: \"Kodchasan\", sans-serif;\n    font-weight: 400;\n}\n\nform {\n    margin-bottom: 15px;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-rows: minmax(50px, auto);\n    column-gap: 10px;\n    row-gap: 10px;\n    margin-top: 10px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n@media (max-width: 992px) {\n    #content {\n        width: 95%;\n    }\n}\n\n@media (min-width: 992px) {  \n    #content {\n        width: 1000px;\n    }\n}\n\n.box {\n    background-color: snow;\n    border: thick double slateblue;\n    border-radius: 10px;\n    padding: 0 10px;\n    text-align: center;\n}\n\n#box0 {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n#box1 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n#box2 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n#box3 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 3;\n    grid-row-end: 4;\n}\n\n#box4 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 3;\n    grid-row-end: 4;\n}\n\n.gameboard {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    aspect-ratio: 1 / 1;\n    column-gap: 1px;\n    row-gap: 1px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.square {\n    background-color: paleturquoise;\n    padding: 0 0px;\n    text-align: center;\n}\n\n.hoverable:hover {\n    filter: brightness(80%);\n}\n\n.five-square-ship {\n    background-color: navy;\n}\n\n.four-square-ship {\n    background-color: saddlebrown;\n}\n\n.three-square-ship-1 {\n    background-color: seagreen;\n}\n\n.three-square-ship-2 {\n    background-color: darkkhaki;\n}\n\n.two-square-ship {\n    background-color: purple;\n}\n\n.miss {\n    background-color: gainsboro;\n}\n\n.hit {\n    background-color: red;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/attack-actions.js":
/*!*******************************!*\
  !*** ./src/attack-actions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playerClickSquare: () => (/* binding */ playerClickSquare)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _human_player_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./human-player-init.js */ "./src/human-player-init.js");



const comPlayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.player)('com');

const topBox = document.querySelector('#box0-text1');

const box3Text1 = document.querySelector('#box3-text1');
const box3Text2 = document.querySelector('#box3-text2');

const box4Text1 = document.querySelector('#box4-text1');
const box4Text2 = document.querySelector('#box4-text2');

let currTurn = 'hum';
let won = false;

function playerClickSquare(x, y) {
    if (!won) {
        box4Text1.innerHTML = `(${y}, ${x}) selected.`; // Show the message under the computer player's board.
        box4Text2.innerHTML = comPlayer.checkHit(y, x);
        currTurn = 'com';

        modifySquareAndTexts(x, y, 'com');

        let comX, comY;

        [comX, comY, box3Text2.innerHTML] = computerClickSquare();
        box3Text1.innerHTML = `(${comY}, ${comX}) selected.`; // Show the message under the human player's board.
        currTurn = 'hum';

        modifySquareAndTexts(comX, comY, 'hum');
    }
}

function computerClickSquare() {
    let x = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.getRanInt)(10);
    let y = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.getRanInt)(10);
    let checkHitResult;
    let i = 0;

    while (i < 1) { // This is to prevent the computer player from selecting a square that has already been checked.
        checkHitResult = _human_player_init_js__WEBPACK_IMPORTED_MODULE_1__.humPlayer.checkHit(y, x);

        if (checkHitResult == 'The square has already been selected - hit.' || checkHitResult == 'The square has already been selected - miss.') {
            x = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.getRanInt)(10);
            y = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.getRanInt)(10);
        } else { // Once the computer player selects an unchecked square,
            i++; // Exit the loop.
        }
    }

    return [x, y, checkHitResult];
}

function modifySquareAndTexts(x, y, type) {
    const currSquare = document.getElementById(`${type}-square-${y}-${x}`);

    let currBox;

    if (type == 'hum') { // Select the correct box the display the message.
        currBox = box3Text2;
    } else {
        currBox = box4Text2;
    }

    // Color currSquare appropriately.
    if (currBox.innerHTML == 'Miss!') {
        currSquare.setAttribute('class', 'square miss');
    } else if (currBox.innerHTML == 'Hit!' || currBox.innerHTML == 'Hit - ship sunk!' || currBox.innerHTML == 'Hit - all ships sunk!') {
        currSquare.setAttribute('class', 'square hit');
    }

    // Check whether the game has ended.
    if (currBox.innerHTML == 'Hit - all ships sunk!' && currTurn == 'com') {
        won = true;
        topBox.innerHTML = 'You won!';
    } else if (currBox.innerHTML == 'Hit - all ships sunk!' && currTurn == 'hum') {
        won = true;
        topBox.innerHTML = 'The computer won!';
    }
}



/***/ }),

/***/ "./src/create-board.js":
/*!*****************************!*\
  !*** ./src/create-board.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBoard: () => (/* binding */ createBoard)
/* harmony export */ });
/* harmony import */ var _human_player_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./human-player-init.js */ "./src/human-player-init.js");
/* harmony import */ var _attack_actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attack-actions.js */ "./src/attack-actions.js");



function createBoard(board, type) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const square = document.createElement('div');

            square.setAttribute('id', `${type}-square-${j}-${i}`);
            square.setAttribute('class', 'square');
            
            square.style['grid-column-start'] = j + 1;
            square.style['grid-column-end'] = j + 2;
            square.style['grid-row-start'] = i + 1;
            square.style['grid-row-end'] = i + 2;
        
            if (type == 'hum') { // Only reveal ship positions for the human player's board.
                if (_human_player_init_js__WEBPACK_IMPORTED_MODULE_0__.humPlayer.getGameboard()[i][j] == 1) {
                    square.classList.add('five-square-ship');
                } else if (_human_player_init_js__WEBPACK_IMPORTED_MODULE_0__.humPlayer.getGameboard()[i][j] == 2) {
                    square.classList.add('four-square-ship');
                } else if (_human_player_init_js__WEBPACK_IMPORTED_MODULE_0__.humPlayer.getGameboard()[i][j] == 3) {
                    square.classList.add('three-square-ship-1');
                } else if (_human_player_init_js__WEBPACK_IMPORTED_MODULE_0__.humPlayer.getGameboard()[i][j] == 4) {
                    square.classList.add('three-square-ship-2');
                } else if (_human_player_init_js__WEBPACK_IMPORTED_MODULE_0__.humPlayer.getGameboard()[i][j] == 5) {
                    square.classList.add('two-square-ship');
                }
            }

            // The human player will be interacting on the computer player's board.
            if (type == 'com') { // For each square on the computer player's board,
                square.addEventListener('click', _attack_actions_js__WEBPACK_IMPORTED_MODULE_1__.playerClickSquare.bind(this, i, j)); // Add an event listener.
                square.classList.add('hoverable'); // Add the hover effect.
            }
            
            board.appendChild(square);
        }
    }
}



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameboard: () => (/* binding */ gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");


function gameboard() {
    const board = new Array(10).fill(0).map(() => new Array(10).fill(0)); // Create a 10 x 10 array for the gameboard.
    // First, create an array with 10 elements and fill each element with 0.
    // Second, map each element with a new array filled with 0s.
    // If new Array(10).fill(new Array(10).fill(0)); is used, each element will have the same array,
    // so when something is changed in one, it will affect all elements.
    
    const ships = [];
    let hitCount = 0;
    let missedCount = 0;
    let allSunk = false;

    const getBoard = () => board;
    const getShips = () => ships;
    const getHitCount = () => hitCount;
    const getMissedCount = () => missedCount;
    const checkAllSunk = () => {
        if (ships.every(ship => ship.isSunk())) {
            return allSunk = true;
        } else {
            return allSunk = false;
        }
    };

    const placeShip = (shipLength, startingX, startingY, direction) => {
        if (ships.length >= 5) {
            return 'The maximum number of ships (5) has been reached.';
        }

        if (shipLength < 1 || shipLength > 5) {
            return 'The ship length must be from 0 to 5.';
        }
        
        if ((startingX < 0 || startingX > 9) && (startingY < 0 || startingY > 9)) {
            return 'The x and y coordinates must be from 0 to 9.';
        }

        if (startingX < 0 || startingX > 9) {
            return 'The x coordinate must be from 0 to 9.';
        }

        if (startingY < 0 || startingY > 9) {
            return 'The y coordinate must be from 0 to 9.';
        }

        if (direction < 0 || direction > 1) {
            return 'The direction must be 0 (horizontal) or 1 (vertical).';
        }

        const shipNumber = ships.length + 1; // An empty square is 0, so + 1 so that shipNumber starts at 1.

        if (direction == 0) { // 0 means horizontal.
            if (startingX + shipLength > 10) {
                return 'Invalid position - the ship will fall outside the gameboard.';
            }

            for (let i = 0; i < shipLength; i++) { // The first loop checks if there is any invalid square.
                if (board[startingY][startingX + i] > 0) { // Number more than 0 means there is a ship in the square.
                    return 'Invalid position - at least one square is occupied.'; // return to prevent the second loop from running.
                }
            }

            for (let i = 0; i < shipLength; i++) { // The second loop places the ship.
                board[startingY][startingX + i] = shipNumber; // Mark the square with shipNumber.
            }
        } else if (direction == 1) { // 1 means vertical.
            if (startingY + shipLength > 10) {
                return 'Invalid position - the ship will fall outside the gameboard.';
            }

            for (let i = 0; i < shipLength; i++) { // The first loop checks if there is any invalid square.
                if (board[startingY + i][startingX] > 0) { // Number more than 0 means there is a ship in the square.
                    return 'Invalid position - at least one square is occupied.'; // return to prevent the second loop from running.
                }
            }

            for (let i = 0; i < shipLength; i++) { // The second loop places the ship.
                board[startingY + i][startingX] = shipNumber; // Mark the square with shipNumber.
            }
        }

        ships.push((0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(shipLength));

        return board;
    }

    const receiveAttack = (x, y) => {
        if (board[y][x] == 'X') {
            return 'The square has already been selected - hit.';
        }

        if (board[y][x] == '-') {
            return 'The square has already been selected - miss.';
        }

        if (board[y][x] > 0) {
            const pos = board[y][x]; // Get the ship number (1-5).
            ships[pos - 1].hit(); // Damage the ship. -1 because arrays start at index 0.
            board[y][x] = 'X'; // Mark the square with an 'X'.
            hitCount += 1;

            if (checkAllSunk()) {
                return 'Hit - all ships sunk!';
            }

            if (ships[pos - 1].isSunk()) {
                return 'Hit - ship sunk!';
            }

            return 'Hit!';
        } else {
            board[y][x] = '-'; // Mark the square with a '-'.
            missedCount += 1;

            return 'Miss!';
        }
    }

    return { getBoard, getShips, getHitCount, getMissedCount, checkAllSunk, placeShip, receiveAttack };
}



/***/ }),

/***/ "./src/human-player-init.js":
/*!**********************************!*\
  !*** ./src/human-player-init.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPlayerShipPositions: () => (/* binding */ getPlayerShipPositions),
/* harmony export */   humPlayer: () => (/* binding */ humPlayer)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _create_board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-board.js */ "./src/create-board.js");




let humPlayer;

const topBoxDiv = document.querySelector('#box0');
const topBox = document.querySelector('#box0-text1');
const humBoard = document.querySelector('#human-board');

const testGameboard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameboard)(); // This is so that placeShip() can be used to test all ship placements.
const playerships = [];

let counter = 0;
let shipSize = 0;

function getPlayerShipPositions() {
    if (counter == 0) {
        shipSize = 5;
    } else if (counter == 1) {
        shipSize = 4;
    } else if (counter == 2 || counter == 3) {
        shipSize = 3;
    } else if (counter == 4) {
        shipSize = 2;
    }

    topBox.innerHTML = `Ship ${counter + 1}: size ${shipSize}`; // Display the current ship number and size.

    const shipInputForm = document.createElement('form');
    shipInputForm.addEventListener('submit', submitShipInputForm);
    
    function submitShipInputForm(event) {
        const submittedStartingX = document.querySelector('#x-axis');
        const submittedStartingY = document.querySelector('#y-axis');
        const submittedDirection = document.querySelector('input[name=ship-direction]:checked');

        const returnFromTestGameboard = testGameboard.placeShip(shipSize, Number(submittedStartingX.value), Number(submittedStartingY.value), Number(submittedDirection.value));

        if (typeof returnFromTestGameboard != 'string') { // Only push the values into playerships if returnFromTestGameboard is valid.
            playerships.push([submittedStartingX.value, submittedStartingY.value, submittedDirection.value]);
            counter++;

            if (counter < 5) { // Repeat until there are five ships.
                shipInputForm.innerHTML = ''; // Remove the previous form.
                
                getPlayerShipPositions();
            }

            if (counter >= 5) { // Once there are five ships,
                humPlayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.player)('hum', playerships); // Create the human player, passing in playerships.
                topBox.innerHTML = `Click on a square on the computer's board to attack.`; // Change the text at the top of the page.
                shipInputForm.innerHTML = ''; // Remove the previous form.
                
                (0,_create_board_js__WEBPACK_IMPORTED_MODULE_2__.createBoard)(humBoard, 'hum'); // Create the gameboard for the human player.
            }
        } else {
            topBox.innerHTML = `Ship ${counter + 1}: size ${shipSize}<p>${returnFromTestGameboard}</p>`; // Display the message explaining why the values are invalid.
        }

        event.preventDefault();
    }

    const startingXInputText = document.createElement('p');
    startingXInputText.setAttribute('for', 'x-axis');
    startingXInputText.innerHTML = 'Starting x-axis: ';
    
    const startingXInputBox = document.createElement('input');
    startingXInputBox.setAttribute('id', 'x-axis');
    startingXInputBox.setAttribute('type', 'number');
    startingXInputBox.setAttribute('name', 'x-axis');
    startingXInputBox.setAttribute('size', 1);
    startingXInputBox.setAttribute('min', 0);
    startingXInputBox.setAttribute('max', 9);
    startingXInputBox.setAttribute('required', '');
    
    const startingYInputText = document.createElement('p');
    startingYInputText.setAttribute('for', 'y-axis');
    startingYInputText.innerHTML = 'Starting y-axis: ';
    
    const startingYInputBox = document.createElement('input');
    startingYInputBox.setAttribute('id', 'y-axis');
    startingYInputBox.setAttribute('type', 'number');
    startingYInputBox.setAttribute('name', 'y-axis');
    startingYInputBox.setAttribute('size', 1);
    startingYInputBox.setAttribute('min', 0);
    startingYInputBox.setAttribute('max', 9);
    startingYInputBox.setAttribute('required', '');

    const directionInputText = document.createElement('p');
    directionInputText.setAttribute('for', 'ship-direction');
    directionInputText.innerHTML = 'Direction:';
    
    const directionInputBoxHorizontal = document.createElement('input');
    directionInputBoxHorizontal.setAttribute('id', 'horizontal');
    directionInputBoxHorizontal.setAttribute('type', 'radio');
    directionInputBoxHorizontal.setAttribute('name', 'ship-direction');
    directionInputBoxHorizontal.setAttribute('required', '');
    directionInputBoxHorizontal.setAttribute('value', 0);

    const directionInputBoxHorizontalLabel = document.createElement('label');
    directionInputBoxHorizontalLabel.setAttribute('for', 'horizontal');
    directionInputBoxHorizontalLabel.innerHTML = 'Horizontal';

    const directionInputBoxVertical = document.createElement('input');
    directionInputBoxVertical.setAttribute('id', 'vertical');
    directionInputBoxVertical.setAttribute('type', 'radio');
    directionInputBoxVertical.setAttribute('name', 'ship-direction');
    directionInputBoxVertical.setAttribute('required', '');
    directionInputBoxVertical.setAttribute('value', 1);

    const directionInputBoxVerticalLabel = document.createElement('label');
    directionInputBoxVerticalLabel.setAttribute('for', 'vertical');
    directionInputBoxVerticalLabel.innerHTML = 'Vertical';

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerHTML = 'Submit';
    
    startingXInputText.appendChild(startingXInputBox);
    startingYInputText.appendChild(startingYInputBox);
    directionInputText.appendChild(directionInputBoxHorizontal);
    directionInputText.appendChild(directionInputBoxHorizontalLabel);
    directionInputText.appendChild(directionInputBoxVertical);
    directionInputText.appendChild(directionInputBoxVerticalLabel);

    shipInputForm.appendChild(startingXInputText);
    shipInputForm.appendChild(startingYInputText);
    shipInputForm.appendChild(directionInputText);
    shipInputForm.appendChild(submitButton);

    topBoxDiv.appendChild(shipInputForm); 
}



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRanInt: () => (/* binding */ getRanInt),
/* harmony export */   player: () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");

//import promptSync from 'prompt-sync'; // This is so that we can use prompt() in node (for testing).

//const prompt = promptSync();

function getRanInt(num) { // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * num);
}

function player(type, arr = []) { // arr is only entered when type = 'hum'.
    const newGameboard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameboard)();

    const getGameboard = () => newGameboard.getBoard();
    const checkHit = (x, y) => newGameboard.receiveAttack(x, y);

    let returnFromGameboard;
    let i = 0;
    let shipSize = 0;

    while (i < 5) {
        if (i == 0) {
            shipSize = 5;
        } else if (i == 1) {
            shipSize = 4;
        } else if (i == 2 || i == 3) {
            shipSize = 3;
        } else if (i == 4) {
            shipSize = 2;
        }

        if (type == 'hum') {            
            returnFromGameboard = newGameboard.placeShip(shipSize, Number(arr[i][0]), Number(arr[i][1]), Number(arr[i][2])); // Place each ship based on the user's inputs until there are five ships.
        } else if (type == 'com') {
            returnFromGameboard = newGameboard.placeShip(shipSize, getRanInt(10), getRanInt(10), getRanInt(2)); // Randomly place each ship until there are five ships.
        }

        if (typeof returnFromGameboard != 'string') {
            i++;
        }
    }

    return { getGameboard, checkHit };
}



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ship: () => (/* binding */ ship)
/* harmony export */ });
function ship(length) {
    let timesHit = 0;
    let sunk = false;

    const getShipLength = () => length;
    const hit = () => timesHit += 1;
    const isSunk = () => {
        if (length - timesHit <= 0) {
            return sunk = true;
        } else {
            return sunk = false;
        }
    }

    return { getShipLength, hit, isSunk };
}



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _human_player_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./human-player-init.js */ "./src/human-player-init.js");
/* harmony import */ var _create_board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-board.js */ "./src/create-board.js");




const comBoard = document.querySelector('#computer-board');

(0,_human_player_init_js__WEBPACK_IMPORTED_MODULE_1__.getPlayerShipPositions)()
;(0,_create_board_js__WEBPACK_IMPORTED_MODULE_2__.createBoard)(comBoard, 'com');
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQzBDO0FBQ2hCOztBQUVoRDs7QUFFQSw2RUFBc0I7QUFDdEIsOERBQVcsa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9hdHRhY2stYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NyZWF0ZS1ib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2h1bWFuLXBsYXllci1pbml0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S29kY2hhc2FuOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYHAsIGRpdiwgc3BhbiwgbGFiZWwsIGlucHV0LCBidXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIktvZGNoYXNhblwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MHB4LCBhdXRvKTtcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xuICAgIHJvdy1nYXA6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICNjb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyAgXG4gICAgI2NvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwMHB4O1xuICAgIH1cbn1cblxuLmJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc25vdztcbiAgICBib3JkZXI6IHRoaWNrIGRvdWJsZSBzbGF0ZWJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYm94MCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogMjtcbn1cblxuI2JveDEge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLXJvdy1lbmQ6IDM7XG59XG5cbiNib3gyIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xufVxuXG4jYm94MyB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuICAgIGdyaWQtcm93LWVuZDogNDtcbn1cblxuI2JveDQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG59XG5cbi5nYW1lYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBjb2x1bW4tZ2FwOiAxcHg7XG4gICAgcm93LWdhcDogMXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5zcXVhcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XG4gICAgcGFkZGluZzogMCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaG92ZXJhYmxlOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcbn1cblxuLmZpdmUtc3F1YXJlLXNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG59XG5cbi5mb3VyLXNxdWFyZS1zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWRkbGVicm93bjtcbn1cblxuLnRocmVlLXNxdWFyZS1zaGlwLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNlYWdyZWVuO1xufVxuXG4udGhyZWUtc3F1YXJlLXNoaXAtMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2toYWtpO1xufVxuXG4udHdvLXNxdWFyZS1zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG59XG5cbi5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG59XG5cbi5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtvZGNoYXNhbjppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxucCwgZGl2LCBzcGFuLCBsYWJlbCwgaW5wdXQsIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiS29kY2hhc2FuXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuZm9ybSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MHB4LCBhdXRvKTtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgcm93LWdhcDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAgICNjb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7ICBcXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcXG4gICAgfVxcbn1cXG5cXG4uYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc25vdztcXG4gICAgYm9yZGVyOiB0aGljayBkb3VibGUgc2xhdGVibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2JveDAge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xcbn1cXG5cXG4jYm94MSB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDM7XFxufVxcblxcbiNib3gyIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG59XFxuXFxuI2JveDMge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbn1cXG5cXG4jYm94NCB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgY29sdW1uLWdhcDogMXB4O1xcbiAgICByb3ctZ2FwOiAxcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldHVycXVvaXNlO1xcbiAgICBwYWRkaW5nOiAwIDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG92ZXJhYmxlOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcblxcbi5maXZlLXNxdWFyZS1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG59XFxuXFxuLmZvdXItc3F1YXJlLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWRkbGVicm93bjtcXG59XFxuXFxuLnRocmVlLXNxdWFyZS1zaGlwLTEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzZWFncmVlbjtcXG59XFxuXFxuLnRocmVlLXNxdWFyZS1zaGlwLTIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJra2hha2k7XFxufVxcblxcbi50d28tc3F1YXJlLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0UmFuSW50LCBwbGF5ZXIgfSBmcm9tICcuL3BsYXllci5qcyc7XG5pbXBvcnQgeyBodW1QbGF5ZXIgfSBmcm9tICcuL2h1bWFuLXBsYXllci1pbml0LmpzJztcblxuY29uc3QgY29tUGxheWVyID0gcGxheWVyKCdjb20nKTtcblxuY29uc3QgdG9wQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JveDAtdGV4dDEnKTtcblxuY29uc3QgYm94M1RleHQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JveDMtdGV4dDEnKTtcbmNvbnN0IGJveDNUZXh0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3gzLXRleHQyJyk7XG5cbmNvbnN0IGJveDRUZXh0MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3g0LXRleHQxJyk7XG5jb25zdCBib3g0VGV4dDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm94NC10ZXh0MicpO1xuXG5sZXQgY3VyclR1cm4gPSAnaHVtJztcbmxldCB3b24gPSBmYWxzZTtcblxuZnVuY3Rpb24gcGxheWVyQ2xpY2tTcXVhcmUoeCwgeSkge1xuICAgIGlmICghd29uKSB7XG4gICAgICAgIGJveDRUZXh0MS5pbm5lckhUTUwgPSBgKCR7eX0sICR7eH0pIHNlbGVjdGVkLmA7IC8vIFNob3cgdGhlIG1lc3NhZ2UgdW5kZXIgdGhlIGNvbXB1dGVyIHBsYXllcidzIGJvYXJkLlxuICAgICAgICBib3g0VGV4dDIuaW5uZXJIVE1MID0gY29tUGxheWVyLmNoZWNrSGl0KHksIHgpO1xuICAgICAgICBjdXJyVHVybiA9ICdjb20nO1xuXG4gICAgICAgIG1vZGlmeVNxdWFyZUFuZFRleHRzKHgsIHksICdjb20nKTtcblxuICAgICAgICBsZXQgY29tWCwgY29tWTtcblxuICAgICAgICBbY29tWCwgY29tWSwgYm94M1RleHQyLmlubmVySFRNTF0gPSBjb21wdXRlckNsaWNrU3F1YXJlKCk7XG4gICAgICAgIGJveDNUZXh0MS5pbm5lckhUTUwgPSBgKCR7Y29tWX0sICR7Y29tWH0pIHNlbGVjdGVkLmA7IC8vIFNob3cgdGhlIG1lc3NhZ2UgdW5kZXIgdGhlIGh1bWFuIHBsYXllcidzIGJvYXJkLlxuICAgICAgICBjdXJyVHVybiA9ICdodW0nO1xuXG4gICAgICAgIG1vZGlmeVNxdWFyZUFuZFRleHRzKGNvbVgsIGNvbVksICdodW0nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyQ2xpY2tTcXVhcmUoKSB7XG4gICAgbGV0IHggPSBnZXRSYW5JbnQoMTApO1xuICAgIGxldCB5ID0gZ2V0UmFuSW50KDEwKTtcbiAgICBsZXQgY2hlY2tIaXRSZXN1bHQ7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgd2hpbGUgKGkgPCAxKSB7IC8vIFRoaXMgaXMgdG8gcHJldmVudCB0aGUgY29tcHV0ZXIgcGxheWVyIGZyb20gc2VsZWN0aW5nIGEgc3F1YXJlIHRoYXQgaGFzIGFscmVhZHkgYmVlbiBjaGVja2VkLlxuICAgICAgICBjaGVja0hpdFJlc3VsdCA9IGh1bVBsYXllci5jaGVja0hpdCh5LCB4KTtcblxuICAgICAgICBpZiAoY2hlY2tIaXRSZXN1bHQgPT0gJ1RoZSBzcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBzZWxlY3RlZCAtIGhpdC4nIHx8IGNoZWNrSGl0UmVzdWx0ID09ICdUaGUgc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQgLSBtaXNzLicpIHtcbiAgICAgICAgICAgIHggPSBnZXRSYW5JbnQoMTApO1xuICAgICAgICAgICAgeSA9IGdldFJhbkludCgxMCk7XG4gICAgICAgIH0gZWxzZSB7IC8vIE9uY2UgdGhlIGNvbXB1dGVyIHBsYXllciBzZWxlY3RzIGFuIHVuY2hlY2tlZCBzcXVhcmUsXG4gICAgICAgICAgICBpKys7IC8vIEV4aXQgdGhlIGxvb3AuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3gsIHksIGNoZWNrSGl0UmVzdWx0XTtcbn1cblxuZnVuY3Rpb24gbW9kaWZ5U3F1YXJlQW5kVGV4dHMoeCwgeSwgdHlwZSkge1xuICAgIGNvbnN0IGN1cnJTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0eXBlfS1zcXVhcmUtJHt5fS0ke3h9YCk7XG5cbiAgICBsZXQgY3VyckJveDtcblxuICAgIGlmICh0eXBlID09ICdodW0nKSB7IC8vIFNlbGVjdCB0aGUgY29ycmVjdCBib3ggdGhlIGRpc3BsYXkgdGhlIG1lc3NhZ2UuXG4gICAgICAgIGN1cnJCb3ggPSBib3gzVGV4dDI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VyckJveCA9IGJveDRUZXh0MjtcbiAgICB9XG5cbiAgICAvLyBDb2xvciBjdXJyU3F1YXJlIGFwcHJvcHJpYXRlbHkuXG4gICAgaWYgKGN1cnJCb3guaW5uZXJIVE1MID09ICdNaXNzIScpIHtcbiAgICAgICAgY3VyclNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NxdWFyZSBtaXNzJyk7XG4gICAgfSBlbHNlIGlmIChjdXJyQm94LmlubmVySFRNTCA9PSAnSGl0IScgfHwgY3VyckJveC5pbm5lckhUTUwgPT0gJ0hpdCAtIHNoaXAgc3VuayEnIHx8IGN1cnJCb3guaW5uZXJIVE1MID09ICdIaXQgLSBhbGwgc2hpcHMgc3VuayEnKSB7XG4gICAgICAgIGN1cnJTcXVhcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzcXVhcmUgaGl0Jyk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgZ2FtZSBoYXMgZW5kZWQuXG4gICAgaWYgKGN1cnJCb3guaW5uZXJIVE1MID09ICdIaXQgLSBhbGwgc2hpcHMgc3VuayEnICYmIGN1cnJUdXJuID09ICdjb20nKSB7XG4gICAgICAgIHdvbiA9IHRydWU7XG4gICAgICAgIHRvcEJveC5pbm5lckhUTUwgPSAnWW91IHdvbiEnO1xuICAgIH0gZWxzZSBpZiAoY3VyckJveC5pbm5lckhUTUwgPT0gJ0hpdCAtIGFsbCBzaGlwcyBzdW5rIScgJiYgY3VyclR1cm4gPT0gJ2h1bScpIHtcbiAgICAgICAgd29uID0gdHJ1ZTtcbiAgICAgICAgdG9wQm94LmlubmVySFRNTCA9ICdUaGUgY29tcHV0ZXIgd29uISc7XG4gICAgfVxufVxuXG5leHBvcnQgeyBwbGF5ZXJDbGlja1NxdWFyZSB9OyIsImltcG9ydCB7IGh1bVBsYXllciB9IGZyb20gJy4vaHVtYW4tcGxheWVyLWluaXQuanMnO1xuaW1wb3J0IHsgcGxheWVyQ2xpY2tTcXVhcmUgfSBmcm9tICcuL2F0dGFjay1hY3Rpb25zLmpzJztcblxuZnVuY3Rpb24gY3JlYXRlQm9hcmQoYm9hcmQsIHR5cGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0eXBlfS1zcXVhcmUtJHtqfS0ke2l9YCk7XG4gICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzcXVhcmUnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3F1YXJlLnN0eWxlWydncmlkLWNvbHVtbi1zdGFydCddID0gaiArIDE7XG4gICAgICAgICAgICBzcXVhcmUuc3R5bGVbJ2dyaWQtY29sdW1uLWVuZCddID0gaiArIDI7XG4gICAgICAgICAgICBzcXVhcmUuc3R5bGVbJ2dyaWQtcm93LXN0YXJ0J10gPSBpICsgMTtcbiAgICAgICAgICAgIHNxdWFyZS5zdHlsZVsnZ3JpZC1yb3ctZW5kJ10gPSBpICsgMjtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAnaHVtJykgeyAvLyBPbmx5IHJldmVhbCBzaGlwIHBvc2l0aW9ucyBmb3IgdGhlIGh1bWFuIHBsYXllcidzIGJvYXJkLlxuICAgICAgICAgICAgICAgIGlmIChodW1QbGF5ZXIuZ2V0R2FtZWJvYXJkKClbaV1bal0gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnZml2ZS1zcXVhcmUtc2hpcCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaHVtUGxheWVyLmdldEdhbWVib2FyZCgpW2ldW2pdID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2ZvdXItc3F1YXJlLXNoaXAnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGh1bVBsYXllci5nZXRHYW1lYm9hcmQoKVtpXVtqXSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCd0aHJlZS1zcXVhcmUtc2hpcC0xJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChodW1QbGF5ZXIuZ2V0R2FtZWJvYXJkKClbaV1bal0gPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgndGhyZWUtc3F1YXJlLXNoaXAtMicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaHVtUGxheWVyLmdldEdhbWVib2FyZCgpW2ldW2pdID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3R3by1zcXVhcmUtc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGhlIGh1bWFuIHBsYXllciB3aWxsIGJlIGludGVyYWN0aW5nIG9uIHRoZSBjb21wdXRlciBwbGF5ZXIncyBib2FyZC5cbiAgICAgICAgICAgIGlmICh0eXBlID09ICdjb20nKSB7IC8vIEZvciBlYWNoIHNxdWFyZSBvbiB0aGUgY29tcHV0ZXIgcGxheWVyJ3MgYm9hcmQsXG4gICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVyQ2xpY2tTcXVhcmUuYmluZCh0aGlzLCBpLCBqKSk7IC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lci5cbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaG92ZXJhYmxlJyk7IC8vIEFkZCB0aGUgaG92ZXIgZWZmZWN0LlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVCb2FyZCB9OyIsImltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAuanMnO1xuXG5mdW5jdGlvbiBnYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBuZXcgQXJyYXkoMTApLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheSgxMCkuZmlsbCgwKSk7IC8vIENyZWF0ZSBhIDEwIHggMTAgYXJyYXkgZm9yIHRoZSBnYW1lYm9hcmQuXG4gICAgLy8gRmlyc3QsIGNyZWF0ZSBhbiBhcnJheSB3aXRoIDEwIGVsZW1lbnRzIGFuZCBmaWxsIGVhY2ggZWxlbWVudCB3aXRoIDAuXG4gICAgLy8gU2Vjb25kLCBtYXAgZWFjaCBlbGVtZW50IHdpdGggYSBuZXcgYXJyYXkgZmlsbGVkIHdpdGggMHMuXG4gICAgLy8gSWYgbmV3IEFycmF5KDEwKS5maWxsKG5ldyBBcnJheSgxMCkuZmlsbCgwKSk7IGlzIHVzZWQsIGVhY2ggZWxlbWVudCB3aWxsIGhhdmUgdGhlIHNhbWUgYXJyYXksXG4gICAgLy8gc28gd2hlbiBzb21ldGhpbmcgaXMgY2hhbmdlZCBpbiBvbmUsIGl0IHdpbGwgYWZmZWN0IGFsbCBlbGVtZW50cy5cbiAgICBcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuICAgIGxldCBoaXRDb3VudCA9IDA7XG4gICAgbGV0IG1pc3NlZENvdW50ID0gMDtcbiAgICBsZXQgYWxsU3VuayA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcbiAgICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHNoaXBzO1xuICAgIGNvbnN0IGdldEhpdENvdW50ID0gKCkgPT4gaGl0Q291bnQ7XG4gICAgY29uc3QgZ2V0TWlzc2VkQ291bnQgPSAoKSA9PiBtaXNzZWRDb3VudDtcbiAgICBjb25zdCBjaGVja0FsbFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxsU3VuayA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWxsU3VuayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwTGVuZ3RoLCBzdGFydGluZ1gsIHN0YXJ0aW5nWSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChzaGlwcy5sZW5ndGggPj0gNSkge1xuICAgICAgICAgICAgcmV0dXJuICdUaGUgbWF4aW11bSBudW1iZXIgb2Ygc2hpcHMgKDUpIGhhcyBiZWVuIHJlYWNoZWQuJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlwTGVuZ3RoIDwgMSB8fCBzaGlwTGVuZ3RoID4gNSkge1xuICAgICAgICAgICAgcmV0dXJuICdUaGUgc2hpcCBsZW5ndGggbXVzdCBiZSBmcm9tIDAgdG8gNS4nO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoKHN0YXJ0aW5nWCA8IDAgfHwgc3RhcnRpbmdYID4gOSkgJiYgKHN0YXJ0aW5nWSA8IDAgfHwgc3RhcnRpbmdZID4gOSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnVGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgbXVzdCBiZSBmcm9tIDAgdG8gOS4nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0aW5nWCA8IDAgfHwgc3RhcnRpbmdYID4gOSkge1xuICAgICAgICAgICAgcmV0dXJuICdUaGUgeCBjb29yZGluYXRlIG11c3QgYmUgZnJvbSAwIHRvIDkuJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydGluZ1kgPCAwIHx8IHN0YXJ0aW5nWSA+IDkpIHtcbiAgICAgICAgICAgIHJldHVybiAnVGhlIHkgY29vcmRpbmF0ZSBtdXN0IGJlIGZyb20gMCB0byA5Lic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlyZWN0aW9uIDwgMCB8fCBkaXJlY3Rpb24gPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1RoZSBkaXJlY3Rpb24gbXVzdCBiZSAwIChob3Jpem9udGFsKSBvciAxICh2ZXJ0aWNhbCkuJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNoaXBOdW1iZXIgPSBzaGlwcy5sZW5ndGggKyAxOyAvLyBBbiBlbXB0eSBzcXVhcmUgaXMgMCwgc28gKyAxIHNvIHRoYXQgc2hpcE51bWJlciBzdGFydHMgYXQgMS5cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IDApIHsgLy8gMCBtZWFucyBob3Jpem9udGFsLlxuICAgICAgICAgICAgaWYgKHN0YXJ0aW5nWCArIHNoaXBMZW5ndGggPiAxMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnSW52YWxpZCBwb3NpdGlvbiAtIHRoZSBzaGlwIHdpbGwgZmFsbCBvdXRzaWRlIHRoZSBnYW1lYm9hcmQuJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHsgLy8gVGhlIGZpcnN0IGxvb3AgY2hlY2tzIGlmIHRoZXJlIGlzIGFueSBpbnZhbGlkIHNxdWFyZS5cbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbc3RhcnRpbmdZXVtzdGFydGluZ1ggKyBpXSA+IDApIHsgLy8gTnVtYmVyIG1vcmUgdGhhbiAwIG1lYW5zIHRoZXJlIGlzIGEgc2hpcCBpbiB0aGUgc3F1YXJlLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgcG9zaXRpb24gLSBhdCBsZWFzdCBvbmUgc3F1YXJlIGlzIG9jY3VwaWVkLic7IC8vIHJldHVybiB0byBwcmV2ZW50IHRoZSBzZWNvbmQgbG9vcCBmcm9tIHJ1bm5pbmcuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykgeyAvLyBUaGUgc2Vjb25kIGxvb3AgcGxhY2VzIHRoZSBzaGlwLlxuICAgICAgICAgICAgICAgIGJvYXJkW3N0YXJ0aW5nWV1bc3RhcnRpbmdYICsgaV0gPSBzaGlwTnVtYmVyOyAvLyBNYXJrIHRoZSBzcXVhcmUgd2l0aCBzaGlwTnVtYmVyLlxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAxKSB7IC8vIDEgbWVhbnMgdmVydGljYWwuXG4gICAgICAgICAgICBpZiAoc3RhcnRpbmdZICsgc2hpcExlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdJbnZhbGlkIHBvc2l0aW9uIC0gdGhlIHNoaXAgd2lsbCBmYWxsIG91dHNpZGUgdGhlIGdhbWVib2FyZC4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykgeyAvLyBUaGUgZmlyc3QgbG9vcCBjaGVja3MgaWYgdGhlcmUgaXMgYW55IGludmFsaWQgc3F1YXJlLlxuICAgICAgICAgICAgICAgIGlmIChib2FyZFtzdGFydGluZ1kgKyBpXVtzdGFydGluZ1hdID4gMCkgeyAvLyBOdW1iZXIgbW9yZSB0aGFuIDAgbWVhbnMgdGhlcmUgaXMgYSBzaGlwIGluIHRoZSBzcXVhcmUuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnSW52YWxpZCBwb3NpdGlvbiAtIGF0IGxlYXN0IG9uZSBzcXVhcmUgaXMgb2NjdXBpZWQuJzsgLy8gcmV0dXJuIHRvIHByZXZlbnQgdGhlIHNlY29uZCBsb29wIGZyb20gcnVubmluZy5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7IC8vIFRoZSBzZWNvbmQgbG9vcCBwbGFjZXMgdGhlIHNoaXAuXG4gICAgICAgICAgICAgICAgYm9hcmRbc3RhcnRpbmdZICsgaV1bc3RhcnRpbmdYXSA9IHNoaXBOdW1iZXI7IC8vIE1hcmsgdGhlIHNxdWFyZSB3aXRoIHNoaXBOdW1iZXIuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzaGlwcy5wdXNoKHNoaXAoc2hpcExlbmd0aCkpO1xuXG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGJvYXJkW3ldW3hdID09ICdYJykge1xuICAgICAgICAgICAgcmV0dXJuICdUaGUgc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQgLSBoaXQuJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2FyZFt5XVt4XSA9PSAnLScpIHtcbiAgICAgICAgICAgIHJldHVybiAnVGhlIHNxdWFyZSBoYXMgYWxyZWFkeSBiZWVuIHNlbGVjdGVkIC0gbWlzcy4nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvYXJkW3ldW3hdID4gMCkge1xuICAgICAgICAgICAgY29uc3QgcG9zID0gYm9hcmRbeV1beF07IC8vIEdldCB0aGUgc2hpcCBudW1iZXIgKDEtNSkuXG4gICAgICAgICAgICBzaGlwc1twb3MgLSAxXS5oaXQoKTsgLy8gRGFtYWdlIHRoZSBzaGlwLiAtMSBiZWNhdXNlIGFycmF5cyBzdGFydCBhdCBpbmRleCAwLlxuICAgICAgICAgICAgYm9hcmRbeV1beF0gPSAnWCc7IC8vIE1hcmsgdGhlIHNxdWFyZSB3aXRoIGFuICdYJy5cbiAgICAgICAgICAgIGhpdENvdW50ICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChjaGVja0FsbFN1bmsoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnSGl0IC0gYWxsIHNoaXBzIHN1bmshJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNoaXBzW3BvcyAtIDFdLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdIaXQgLSBzaGlwIHN1bmshJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICdIaXQhJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkW3ldW3hdID0gJy0nOyAvLyBNYXJrIHRoZSBzcXVhcmUgd2l0aCBhICctJy5cbiAgICAgICAgICAgIG1pc3NlZENvdW50ICs9IDE7XG5cbiAgICAgICAgICAgIHJldHVybiAnTWlzcyEnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0Qm9hcmQsIGdldFNoaXBzLCBnZXRIaXRDb3VudCwgZ2V0TWlzc2VkQ291bnQsIGNoZWNrQWxsU3VuaywgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrIH07XG59XG5cbmV4cG9ydCB7IGdhbWVib2FyZCB9OyIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCB7IHBsYXllciB9IGZyb20gJy4vcGxheWVyLmpzJztcbmltcG9ydCB7IGNyZWF0ZUJvYXJkIH0gZnJvbSAnLi9jcmVhdGUtYm9hcmQuanMnO1xuXG5sZXQgaHVtUGxheWVyO1xuXG5jb25zdCB0b3BCb3hEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm94MCcpO1xuY29uc3QgdG9wQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JveDAtdGV4dDEnKTtcbmNvbnN0IGh1bUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWFuLWJvYXJkJyk7XG5cbmNvbnN0IHRlc3RHYW1lYm9hcmQgPSBnYW1lYm9hcmQoKTsgLy8gVGhpcyBpcyBzbyB0aGF0IHBsYWNlU2hpcCgpIGNhbiBiZSB1c2VkIHRvIHRlc3QgYWxsIHNoaXAgcGxhY2VtZW50cy5cbmNvbnN0IHBsYXllcnNoaXBzID0gW107XG5cbmxldCBjb3VudGVyID0gMDtcbmxldCBzaGlwU2l6ZSA9IDA7XG5cbmZ1bmN0aW9uIGdldFBsYXllclNoaXBQb3NpdGlvbnMoKSB7XG4gICAgaWYgKGNvdW50ZXIgPT0gMCkge1xuICAgICAgICBzaGlwU2l6ZSA9IDU7XG4gICAgfSBlbHNlIGlmIChjb3VudGVyID09IDEpIHtcbiAgICAgICAgc2hpcFNpemUgPSA0O1xuICAgIH0gZWxzZSBpZiAoY291bnRlciA9PSAyIHx8IGNvdW50ZXIgPT0gMykge1xuICAgICAgICBzaGlwU2l6ZSA9IDM7XG4gICAgfSBlbHNlIGlmIChjb3VudGVyID09IDQpIHtcbiAgICAgICAgc2hpcFNpemUgPSAyO1xuICAgIH1cblxuICAgIHRvcEJveC5pbm5lckhUTUwgPSBgU2hpcCAke2NvdW50ZXIgKyAxfTogc2l6ZSAke3NoaXBTaXplfWA7IC8vIERpc3BsYXkgdGhlIGN1cnJlbnQgc2hpcCBudW1iZXIgYW5kIHNpemUuXG5cbiAgICBjb25zdCBzaGlwSW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHNoaXBJbnB1dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc3VibWl0U2hpcElucHV0Rm9ybSk7XG4gICAgXG4gICAgZnVuY3Rpb24gc3VibWl0U2hpcElucHV0Rm9ybShldmVudCkge1xuICAgICAgICBjb25zdCBzdWJtaXR0ZWRTdGFydGluZ1ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjeC1heGlzJyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdHRlZFN0YXJ0aW5nWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN5LWF4aXMnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0dGVkRGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1zaGlwLWRpcmVjdGlvbl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGNvbnN0IHJldHVybkZyb21UZXN0R2FtZWJvYXJkID0gdGVzdEdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcFNpemUsIE51bWJlcihzdWJtaXR0ZWRTdGFydGluZ1gudmFsdWUpLCBOdW1iZXIoc3VibWl0dGVkU3RhcnRpbmdZLnZhbHVlKSwgTnVtYmVyKHN1Ym1pdHRlZERpcmVjdGlvbi52YWx1ZSkpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmV0dXJuRnJvbVRlc3RHYW1lYm9hcmQgIT0gJ3N0cmluZycpIHsgLy8gT25seSBwdXNoIHRoZSB2YWx1ZXMgaW50byBwbGF5ZXJzaGlwcyBpZiByZXR1cm5Gcm9tVGVzdEdhbWVib2FyZCBpcyB2YWxpZC5cbiAgICAgICAgICAgIHBsYXllcnNoaXBzLnB1c2goW3N1Ym1pdHRlZFN0YXJ0aW5nWC52YWx1ZSwgc3VibWl0dGVkU3RhcnRpbmdZLnZhbHVlLCBzdWJtaXR0ZWREaXJlY3Rpb24udmFsdWVdKTtcbiAgICAgICAgICAgIGNvdW50ZXIrKztcblxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPCA1KSB7IC8vIFJlcGVhdCB1bnRpbCB0aGVyZSBhcmUgZml2ZSBzaGlwcy5cbiAgICAgICAgICAgICAgICBzaGlwSW5wdXRGb3JtLmlubmVySFRNTCA9ICcnOyAvLyBSZW1vdmUgdGhlIHByZXZpb3VzIGZvcm0uXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZ2V0UGxheWVyU2hpcFBvc2l0aW9ucygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY291bnRlciA+PSA1KSB7IC8vIE9uY2UgdGhlcmUgYXJlIGZpdmUgc2hpcHMsXG4gICAgICAgICAgICAgICAgaHVtUGxheWVyID0gcGxheWVyKCdodW0nLCBwbGF5ZXJzaGlwcyk7IC8vIENyZWF0ZSB0aGUgaHVtYW4gcGxheWVyLCBwYXNzaW5nIGluIHBsYXllcnNoaXBzLlxuICAgICAgICAgICAgICAgIHRvcEJveC5pbm5lckhUTUwgPSBgQ2xpY2sgb24gYSBzcXVhcmUgb24gdGhlIGNvbXB1dGVyJ3MgYm9hcmQgdG8gYXR0YWNrLmA7IC8vIENoYW5nZSB0aGUgdGV4dCBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLlxuICAgICAgICAgICAgICAgIHNoaXBJbnB1dEZvcm0uaW5uZXJIVE1MID0gJyc7IC8vIFJlbW92ZSB0aGUgcHJldmlvdXMgZm9ybS5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjcmVhdGVCb2FyZChodW1Cb2FyZCwgJ2h1bScpOyAvLyBDcmVhdGUgdGhlIGdhbWVib2FyZCBmb3IgdGhlIGh1bWFuIHBsYXllci5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvcEJveC5pbm5lckhUTUwgPSBgU2hpcCAke2NvdW50ZXIgKyAxfTogc2l6ZSAke3NoaXBTaXplfTxwPiR7cmV0dXJuRnJvbVRlc3RHYW1lYm9hcmR9PC9wPmA7IC8vIERpc3BsYXkgdGhlIG1lc3NhZ2UgZXhwbGFpbmluZyB3aHkgdGhlIHZhbHVlcyBhcmUgaW52YWxpZC5cbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRpbmdYSW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN0YXJ0aW5nWElucHV0VGV4dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd4LWF4aXMnKTtcbiAgICBzdGFydGluZ1hJbnB1dFRleHQuaW5uZXJIVE1MID0gJ1N0YXJ0aW5nIHgtYXhpczogJztcbiAgICBcbiAgICBjb25zdCBzdGFydGluZ1hJbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3RhcnRpbmdYSW5wdXRCb3guc2V0QXR0cmlidXRlKCdpZCcsICd4LWF4aXMnKTtcbiAgICBzdGFydGluZ1hJbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG4gICAgc3RhcnRpbmdYSW5wdXRCb3guc2V0QXR0cmlidXRlKCduYW1lJywgJ3gtYXhpcycpO1xuICAgIHN0YXJ0aW5nWElucHV0Qm94LnNldEF0dHJpYnV0ZSgnc2l6ZScsIDEpO1xuICAgIHN0YXJ0aW5nWElucHV0Qm94LnNldEF0dHJpYnV0ZSgnbWluJywgMCk7XG4gICAgc3RhcnRpbmdYSW5wdXRCb3guc2V0QXR0cmlidXRlKCdtYXgnLCA5KTtcbiAgICBzdGFydGluZ1hJbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIFxuICAgIGNvbnN0IHN0YXJ0aW5nWUlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdGFydGluZ1lJbnB1dFRleHQuc2V0QXR0cmlidXRlKCdmb3InLCAneS1heGlzJyk7XG4gICAgc3RhcnRpbmdZSW5wdXRUZXh0LmlubmVySFRNTCA9ICdTdGFydGluZyB5LWF4aXM6ICc7XG4gICAgXG4gICAgY29uc3Qgc3RhcnRpbmdZSW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN0YXJ0aW5nWUlucHV0Qm94LnNldEF0dHJpYnV0ZSgnaWQnLCAneS1heGlzJyk7XG4gICAgc3RhcnRpbmdZSW5wdXRCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgIHN0YXJ0aW5nWUlucHV0Qm94LnNldEF0dHJpYnV0ZSgnbmFtZScsICd5LWF4aXMnKTtcbiAgICBzdGFydGluZ1lJbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ3NpemUnLCAxKTtcbiAgICBzdGFydGluZ1lJbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ21pbicsIDApO1xuICAgIHN0YXJ0aW5nWUlucHV0Qm94LnNldEF0dHJpYnV0ZSgnbWF4JywgOSk7XG4gICAgc3RhcnRpbmdZSW5wdXRCb3guc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgIGNvbnN0IGRpcmVjdGlvbklucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkaXJlY3Rpb25JbnB1dFRleHQuc2V0QXR0cmlidXRlKCdmb3InLCAnc2hpcC1kaXJlY3Rpb24nKTtcbiAgICBkaXJlY3Rpb25JbnB1dFRleHQuaW5uZXJIVE1MID0gJ0RpcmVjdGlvbjonO1xuICAgIFxuICAgIGNvbnN0IGRpcmVjdGlvbklucHV0Qm94SG9yaXpvbnRhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGlyZWN0aW9uSW5wdXRCb3hIb3Jpem9udGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9yaXpvbnRhbCcpO1xuICAgIGRpcmVjdGlvbklucHV0Qm94SG9yaXpvbnRhbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICBkaXJlY3Rpb25JbnB1dEJveEhvcml6b250YWwuc2V0QXR0cmlidXRlKCduYW1lJywgJ3NoaXAtZGlyZWN0aW9uJyk7XG4gICAgZGlyZWN0aW9uSW5wdXRCb3hIb3Jpem9udGFsLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgZGlyZWN0aW9uSW5wdXRCb3hIb3Jpem9udGFsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAwKTtcblxuICAgIGNvbnN0IGRpcmVjdGlvbklucHV0Qm94SG9yaXpvbnRhbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkaXJlY3Rpb25JbnB1dEJveEhvcml6b250YWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdob3Jpem9udGFsJyk7XG4gICAgZGlyZWN0aW9uSW5wdXRCb3hIb3Jpem9udGFsTGFiZWwuaW5uZXJIVE1MID0gJ0hvcml6b250YWwnO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uSW5wdXRCb3hWZXJ0aWNhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGlyZWN0aW9uSW5wdXRCb3hWZXJ0aWNhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZlcnRpY2FsJyk7XG4gICAgZGlyZWN0aW9uSW5wdXRCb3hWZXJ0aWNhbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICBkaXJlY3Rpb25JbnB1dEJveFZlcnRpY2FsLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzaGlwLWRpcmVjdGlvbicpO1xuICAgIGRpcmVjdGlvbklucHV0Qm94VmVydGljYWwuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBkaXJlY3Rpb25JbnB1dEJveFZlcnRpY2FsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAxKTtcblxuICAgIGNvbnN0IGRpcmVjdGlvbklucHV0Qm94VmVydGljYWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGlyZWN0aW9uSW5wdXRCb3hWZXJ0aWNhbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ZlcnRpY2FsJyk7XG4gICAgZGlyZWN0aW9uSW5wdXRCb3hWZXJ0aWNhbExhYmVsLmlubmVySFRNTCA9ICdWZXJ0aWNhbCc7XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSAnU3VibWl0JztcbiAgICBcbiAgICBzdGFydGluZ1hJbnB1dFRleHQuYXBwZW5kQ2hpbGQoc3RhcnRpbmdYSW5wdXRCb3gpO1xuICAgIHN0YXJ0aW5nWUlucHV0VGV4dC5hcHBlbmRDaGlsZChzdGFydGluZ1lJbnB1dEJveCk7XG4gICAgZGlyZWN0aW9uSW5wdXRUZXh0LmFwcGVuZENoaWxkKGRpcmVjdGlvbklucHV0Qm94SG9yaXpvbnRhbCk7XG4gICAgZGlyZWN0aW9uSW5wdXRUZXh0LmFwcGVuZENoaWxkKGRpcmVjdGlvbklucHV0Qm94SG9yaXpvbnRhbExhYmVsKTtcbiAgICBkaXJlY3Rpb25JbnB1dFRleHQuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uSW5wdXRCb3hWZXJ0aWNhbCk7XG4gICAgZGlyZWN0aW9uSW5wdXRUZXh0LmFwcGVuZENoaWxkKGRpcmVjdGlvbklucHV0Qm94VmVydGljYWxMYWJlbCk7XG5cbiAgICBzaGlwSW5wdXRGb3JtLmFwcGVuZENoaWxkKHN0YXJ0aW5nWElucHV0VGV4dCk7XG4gICAgc2hpcElucHV0Rm9ybS5hcHBlbmRDaGlsZChzdGFydGluZ1lJbnB1dFRleHQpO1xuICAgIHNoaXBJbnB1dEZvcm0uYXBwZW5kQ2hpbGQoZGlyZWN0aW9uSW5wdXRUZXh0KTtcbiAgICBzaGlwSW5wdXRGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICB0b3BCb3hEaXYuYXBwZW5kQ2hpbGQoc2hpcElucHV0Rm9ybSk7IFxufVxuXG5leHBvcnQgeyBnZXRQbGF5ZXJTaGlwUG9zaXRpb25zLCBodW1QbGF5ZXIgfTsiLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG4vL2ltcG9ydCBwcm9tcHRTeW5jIGZyb20gJ3Byb21wdC1zeW5jJzsgLy8gVGhpcyBpcyBzbyB0aGF0IHdlIGNhbiB1c2UgcHJvbXB0KCkgaW4gbm9kZSAoZm9yIHRlc3RpbmcpLlxuXG4vL2NvbnN0IHByb21wdCA9IHByb21wdFN5bmMoKTtcblxuZnVuY3Rpb24gZ2V0UmFuSW50KG51bSkgeyAvLyBGcm9tIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvcmFuZG9tXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bSk7XG59XG5cbmZ1bmN0aW9uIHBsYXllcih0eXBlLCBhcnIgPSBbXSkgeyAvLyBhcnIgaXMgb25seSBlbnRlcmVkIHdoZW4gdHlwZSA9ICdodW0nLlxuICAgIGNvbnN0IG5ld0dhbWVib2FyZCA9IGdhbWVib2FyZCgpO1xuXG4gICAgY29uc3QgZ2V0R2FtZWJvYXJkID0gKCkgPT4gbmV3R2FtZWJvYXJkLmdldEJvYXJkKCk7XG4gICAgY29uc3QgY2hlY2tIaXQgPSAoeCwgeSkgPT4gbmV3R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG5cbiAgICBsZXQgcmV0dXJuRnJvbUdhbWVib2FyZDtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHNoaXBTaXplID0gMDtcblxuICAgIHdoaWxlIChpIDwgNSkge1xuICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICBzaGlwU2l6ZSA9IDU7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PSAxKSB7XG4gICAgICAgICAgICBzaGlwU2l6ZSA9IDQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PSAyIHx8IGkgPT0gMykge1xuICAgICAgICAgICAgc2hpcFNpemUgPSAzO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT0gNCkge1xuICAgICAgICAgICAgc2hpcFNpemUgPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gJ2h1bScpIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybkZyb21HYW1lYm9hcmQgPSBuZXdHYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBTaXplLCBOdW1iZXIoYXJyW2ldWzBdKSwgTnVtYmVyKGFycltpXVsxXSksIE51bWJlcihhcnJbaV1bMl0pKTsgLy8gUGxhY2UgZWFjaCBzaGlwIGJhc2VkIG9uIHRoZSB1c2VyJ3MgaW5wdXRzIHVudGlsIHRoZXJlIGFyZSBmaXZlIHNoaXBzLlxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ2NvbScpIHtcbiAgICAgICAgICAgIHJldHVybkZyb21HYW1lYm9hcmQgPSBuZXdHYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBTaXplLCBnZXRSYW5JbnQoMTApLCBnZXRSYW5JbnQoMTApLCBnZXRSYW5JbnQoMikpOyAvLyBSYW5kb21seSBwbGFjZSBlYWNoIHNoaXAgdW50aWwgdGhlcmUgYXJlIGZpdmUgc2hpcHMuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHJldHVybkZyb21HYW1lYm9hcmQgIT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGdldEdhbWVib2FyZCwgY2hlY2tIaXQgfTtcbn1cblxuZXhwb3J0IHsgZ2V0UmFuSW50LCBwbGF5ZXIgfTsiLCJmdW5jdGlvbiBzaGlwKGxlbmd0aCkge1xuICAgIGxldCB0aW1lc0hpdCA9IDA7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdldFNoaXBMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG4gICAgY29uc3QgaGl0ID0gKCkgPT4gdGltZXNIaXQgKz0gMTtcbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmIChsZW5ndGggLSB0aW1lc0hpdCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VuayA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3VuayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0U2hpcExlbmd0aCwgaGl0LCBpc1N1bmsgfTtcbn1cblxuZXhwb3J0IHsgc2hpcCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGdldFBsYXllclNoaXBQb3NpdGlvbnMgfSBmcm9tICcuL2h1bWFuLXBsYXllci1pbml0LmpzJztcbmltcG9ydCB7IGNyZWF0ZUJvYXJkIH0gZnJvbSAnLi9jcmVhdGUtYm9hcmQuanMnO1xuXG5jb25zdCBjb21Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wdXRlci1ib2FyZCcpO1xuXG5nZXRQbGF5ZXJTaGlwUG9zaXRpb25zKClcbmNyZWF0ZUJvYXJkKGNvbUJvYXJkLCAnY29tJyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9