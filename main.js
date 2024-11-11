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

.button {
    margin: 0 5px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,oCAAoC;IACpC,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,gBAAgB;IAChB,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mBAAmB;IACnB,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;IAC/B,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');\n\np, div, span, label, input, button {\n    font-family: \"Kodchasan\", sans-serif;\n    font-weight: 400;\n}\n\nform {\n    margin-bottom: 15px;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-auto-rows: minmax(50px, auto);\n    column-gap: 10px;\n    row-gap: 10px;\n    margin-top: 10px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n@media (max-width: 992px) {\n    #content {\n        width: 95%;\n    }\n}\n\n@media (min-width: 992px) {  \n    #content {\n        width: 1000px;\n    }\n}\n\n.button {\n    margin: 0 5px;\n}\n\n.box {\n    background-color: snow;\n    border: thick double slateblue;\n    border-radius: 10px;\n    padding: 0 10px;\n    text-align: center;\n}\n\n#box0 {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n#box1 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n#box2 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n#box3 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 3;\n    grid-row-end: 4;\n}\n\n#box4 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 3;\n    grid-row-end: 4;\n}\n\n.gameboard {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    aspect-ratio: 1 / 1;\n    column-gap: 1px;\n    row-gap: 1px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.square {\n    background-color: paleturquoise;\n    padding: 0 0px;\n    text-align: center;\n}\n\n.hoverable:hover {\n    filter: brightness(80%);\n}\n\n.five-square-ship {\n    background-color: navy;\n}\n\n.four-square-ship {\n    background-color: saddlebrown;\n}\n\n.three-square-ship-1 {\n    background-color: seagreen;\n}\n\n.three-square-ship-2 {\n    background-color: darkkhaki;\n}\n\n.two-square-ship {\n    background-color: purple;\n}\n\n.miss {\n    background-color: gainsboro;\n}\n\n.hit {\n    background-color: red;\n}"],"sourceRoot":""}]);
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
/* harmony export */   comBoard: () => (/* binding */ comBoard),
/* harmony export */   getPlayerShipPositions: () => (/* binding */ getPlayerShipPositions),
/* harmony export */   humBoard: () => (/* binding */ humBoard),
/* harmony export */   humPlayer: () => (/* binding */ humPlayer)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _create_board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-board.js */ "./src/create-board.js");




let humPlayer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.player)('com');

const topBoxDiv = document.querySelector('#box0');
const topBox = document.querySelector('#box0-text1');
const humBoard = document.querySelector('#human-board');
const comBoard = document.querySelector('#computer-board');

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

    topBox.innerHTML = `Ship ${counter + 1}: size ${shipSize}`; // Display the current ship number and size. Also remove the two buttons in the initial function call.

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
                (0,_create_board_js__WEBPACK_IMPORTED_MODULE_2__.createBoard)(comBoard, 'com'); // Create the gameboard for the computer player.
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




const topBox = document.querySelector('#box0-text1');

const placeShips = document.querySelector('#place-ships');
placeShips.addEventListener('click', _human_player_init_js__WEBPACK_IMPORTED_MODULE_1__.getPlayerShipPositions);

const randomize = document.querySelector('#randomize');
randomize.addEventListener('click', randomizeBothBoards);

function randomizeBothBoards() {
    topBox.innerHTML = `Click on a square on the computer's board to attack.`; // Remove the two buttons and change the text at the top of the page.
    (0,_create_board_js__WEBPACK_IMPORTED_MODULE_2__.createBoard)(_human_player_init_js__WEBPACK_IMPORTED_MODULE_1__.humBoard, 'hum');
    (0,_create_board_js__WEBPACK_IMPORTED_MODULE_2__.createBoard)(_human_player_init_js__WEBPACK_IMPORTED_MODULE_1__.comBoard, 'com');
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBc0I7QUFDOEQ7QUFDcEM7O0FBRWhEOztBQUVBO0FBQ0EscUNBQXFDLHlFQUFzQjs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBLCtFQUErRTtBQUMvRSxJQUFJLDZEQUFXLENBQUMsMkRBQVE7QUFDeEIsSUFBSSw2REFBVyxDQUFDLDJEQUFRO0FBQ3hCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9hdHRhY2stYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NyZWF0ZS1ib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2h1bWFuLXBsYXllci1pbml0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S29kY2hhc2FuOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYHAsIGRpdiwgc3BhbiwgbGFiZWwsIGlucHV0LCBidXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIktvZGNoYXNhblwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MHB4LCBhdXRvKTtcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xuICAgIHJvdy1nYXA6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICNjb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyAgXG4gICAgI2NvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwMHB4O1xuICAgIH1cbn1cblxuLmJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc25vdztcbiAgICBib3JkZXI6IHRoaWNrIGRvdWJsZSBzbGF0ZWJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYm94MCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogMjtcbn1cblxuI2JveDEge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLXJvdy1lbmQ6IDM7XG59XG5cbiNib3gyIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xufVxuXG4jYm94MyB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuICAgIGdyaWQtcm93LWVuZDogNDtcbn1cblxuI2JveDQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG59XG5cbi5nYW1lYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBjb2x1bW4tZ2FwOiAxcHg7XG4gICAgcm93LWdhcDogMXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5zcXVhcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XG4gICAgcGFkZGluZzogMCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaG92ZXJhYmxlOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcbn1cblxuLmZpdmUtc3F1YXJlLXNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG59XG5cbi5mb3VyLXNxdWFyZS1zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWRkbGVicm93bjtcbn1cblxuLnRocmVlLXNxdWFyZS1zaGlwLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNlYWdyZWVuO1xufVxuXG4udGhyZWUtc3F1YXJlLXNoaXAtMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2toYWtpO1xufVxuXG4udHdvLXNxdWFyZS1zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG59XG5cbi5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG59XG5cbi5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Lb2RjaGFzYW46aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbnAsIGRpdiwgc3BhbiwgbGFiZWwsIGlucHV0LCBidXR0b24ge1xcbiAgICBmb250LWZhbWlseTogXFxcIktvZGNoYXNhblxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmZvcm0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoNTBweCwgYXV0byk7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgICAjY29udGVudCB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyAgXFxuICAgICNjb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIH1cXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxufVxcblxcbi5ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbm93O1xcbiAgICBib3JkZXI6IHRoaWNrIGRvdWJsZSBzbGF0ZWJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYm94MCB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDI7XFxufVxcblxcbiNib3gxIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogMztcXG59XFxuXFxuI2JveDIge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xcbn1cXG5cXG4jYm94MyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxufVxcblxcbiNib3g0IHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGdyaWQtcm93LWVuZDogNDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBjb2x1bW4tZ2FwOiAxcHg7XFxuICAgIHJvdy1nYXA6IDFweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XFxuICAgIHBhZGRpbmc6IDAgMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ob3ZlcmFibGU6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG59XFxuXFxuLmZpdmUtc3F1YXJlLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbn1cXG5cXG4uZm91ci1zcXVhcmUtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhZGRsZWJyb3duO1xcbn1cXG5cXG4udGhyZWUtc3F1YXJlLXNoaXAtMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNlYWdyZWVuO1xcbn1cXG5cXG4udGhyZWUtc3F1YXJlLXNoaXAtMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtraGFraTtcXG59XFxuXFxuLnR3by1zcXVhcmUtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnZXRSYW5JbnQsIHBsYXllciB9IGZyb20gJy4vcGxheWVyLmpzJztcbmltcG9ydCB7IGh1bVBsYXllciB9IGZyb20gJy4vaHVtYW4tcGxheWVyLWluaXQuanMnO1xuXG5jb25zdCBjb21QbGF5ZXIgPSBwbGF5ZXIoJ2NvbScpO1xuXG5jb25zdCB0b3BCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm94MC10ZXh0MScpO1xuXG5jb25zdCBib3gzVGV4dDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm94My10ZXh0MScpO1xuY29uc3QgYm94M1RleHQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JveDMtdGV4dDInKTtcblxuY29uc3QgYm94NFRleHQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JveDQtdGV4dDEnKTtcbmNvbnN0IGJveDRUZXh0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3g0LXRleHQyJyk7XG5cbmxldCBjdXJyVHVybiA9ICdodW0nO1xubGV0IHdvbiA9IGZhbHNlO1xuXG5mdW5jdGlvbiBwbGF5ZXJDbGlja1NxdWFyZSh4LCB5KSB7XG4gICAgaWYgKCF3b24pIHtcbiAgICAgICAgYm94NFRleHQxLmlubmVySFRNTCA9IGAoJHt5fSwgJHt4fSkgc2VsZWN0ZWQuYDsgLy8gU2hvdyB0aGUgbWVzc2FnZSB1bmRlciB0aGUgY29tcHV0ZXIgcGxheWVyJ3MgYm9hcmQuXG4gICAgICAgIGJveDRUZXh0Mi5pbm5lckhUTUwgPSBjb21QbGF5ZXIuY2hlY2tIaXQoeSwgeCk7XG4gICAgICAgIGN1cnJUdXJuID0gJ2NvbSc7XG5cbiAgICAgICAgbW9kaWZ5U3F1YXJlQW5kVGV4dHMoeCwgeSwgJ2NvbScpO1xuXG4gICAgICAgIGxldCBjb21YLCBjb21ZO1xuXG4gICAgICAgIFtjb21YLCBjb21ZLCBib3gzVGV4dDIuaW5uZXJIVE1MXSA9IGNvbXB1dGVyQ2xpY2tTcXVhcmUoKTtcbiAgICAgICAgYm94M1RleHQxLmlubmVySFRNTCA9IGAoJHtjb21ZfSwgJHtjb21YfSkgc2VsZWN0ZWQuYDsgLy8gU2hvdyB0aGUgbWVzc2FnZSB1bmRlciB0aGUgaHVtYW4gcGxheWVyJ3MgYm9hcmQuXG4gICAgICAgIGN1cnJUdXJuID0gJ2h1bSc7XG5cbiAgICAgICAgbW9kaWZ5U3F1YXJlQW5kVGV4dHMoY29tWCwgY29tWSwgJ2h1bScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZXJDbGlja1NxdWFyZSgpIHtcbiAgICBsZXQgeCA9IGdldFJhbkludCgxMCk7XG4gICAgbGV0IHkgPSBnZXRSYW5JbnQoMTApO1xuICAgIGxldCBjaGVja0hpdFJlc3VsdDtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICB3aGlsZSAoaSA8IDEpIHsgLy8gVGhpcyBpcyB0byBwcmV2ZW50IHRoZSBjb21wdXRlciBwbGF5ZXIgZnJvbSBzZWxlY3RpbmcgYSBzcXVhcmUgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGNoZWNrZWQuXG4gICAgICAgIGNoZWNrSGl0UmVzdWx0ID0gaHVtUGxheWVyLmNoZWNrSGl0KHksIHgpO1xuXG4gICAgICAgIGlmIChjaGVja0hpdFJlc3VsdCA9PSAnVGhlIHNxdWFyZSBoYXMgYWxyZWFkeSBiZWVuIHNlbGVjdGVkIC0gaGl0LicgfHwgY2hlY2tIaXRSZXN1bHQgPT0gJ1RoZSBzcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBzZWxlY3RlZCAtIG1pc3MuJykge1xuICAgICAgICAgICAgeCA9IGdldFJhbkludCgxMCk7XG4gICAgICAgICAgICB5ID0gZ2V0UmFuSW50KDEwKTtcbiAgICAgICAgfSBlbHNlIHsgLy8gT25jZSB0aGUgY29tcHV0ZXIgcGxheWVyIHNlbGVjdHMgYW4gdW5jaGVja2VkIHNxdWFyZSxcbiAgICAgICAgICAgIGkrKzsgLy8gRXhpdCB0aGUgbG9vcC5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbeCwgeSwgY2hlY2tIaXRSZXN1bHRdO1xufVxuXG5mdW5jdGlvbiBtb2RpZnlTcXVhcmVBbmRUZXh0cyh4LCB5LCB0eXBlKSB7XG4gICAgY29uc3QgY3VyclNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3R5cGV9LXNxdWFyZS0ke3l9LSR7eH1gKTtcblxuICAgIGxldCBjdXJyQm94O1xuXG4gICAgaWYgKHR5cGUgPT0gJ2h1bScpIHsgLy8gU2VsZWN0IHRoZSBjb3JyZWN0IGJveCB0aGUgZGlzcGxheSB0aGUgbWVzc2FnZS5cbiAgICAgICAgY3VyckJveCA9IGJveDNUZXh0MjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyQm94ID0gYm94NFRleHQyO1xuICAgIH1cblxuICAgIC8vIENvbG9yIGN1cnJTcXVhcmUgYXBwcm9wcmlhdGVseS5cbiAgICBpZiAoY3VyckJveC5pbm5lckhUTUwgPT0gJ01pc3MhJykge1xuICAgICAgICBjdXJyU3F1YXJlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3F1YXJlIG1pc3MnKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJCb3guaW5uZXJIVE1MID09ICdIaXQhJyB8fCBjdXJyQm94LmlubmVySFRNTCA9PSAnSGl0IC0gc2hpcCBzdW5rIScgfHwgY3VyckJveC5pbm5lckhUTUwgPT0gJ0hpdCAtIGFsbCBzaGlwcyBzdW5rIScpIHtcbiAgICAgICAgY3VyclNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NxdWFyZSBoaXQnKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayB3aGV0aGVyIHRoZSBnYW1lIGhhcyBlbmRlZC5cbiAgICBpZiAoY3VyckJveC5pbm5lckhUTUwgPT0gJ0hpdCAtIGFsbCBzaGlwcyBzdW5rIScgJiYgY3VyclR1cm4gPT0gJ2NvbScpIHtcbiAgICAgICAgd29uID0gdHJ1ZTtcbiAgICAgICAgdG9wQm94LmlubmVySFRNTCA9ICdZb3Ugd29uISc7XG4gICAgfSBlbHNlIGlmIChjdXJyQm94LmlubmVySFRNTCA9PSAnSGl0IC0gYWxsIHNoaXBzIHN1bmshJyAmJiBjdXJyVHVybiA9PSAnaHVtJykge1xuICAgICAgICB3b24gPSB0cnVlO1xuICAgICAgICB0b3BCb3guaW5uZXJIVE1MID0gJ1RoZSBjb21wdXRlciB3b24hJztcbiAgICB9XG59XG5cbmV4cG9ydCB7IHBsYXllckNsaWNrU3F1YXJlIH07IiwiaW1wb3J0IHsgaHVtUGxheWVyIH0gZnJvbSAnLi9odW1hbi1wbGF5ZXItaW5pdC5qcyc7XG5pbXBvcnQgeyBwbGF5ZXJDbGlja1NxdWFyZSB9IGZyb20gJy4vYXR0YWNrLWFjdGlvbnMuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZChib2FyZCwgdHlwZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdpZCcsIGAke3R5cGV9LXNxdWFyZS0ke2p9LSR7aX1gKTtcbiAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NxdWFyZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzcXVhcmUuc3R5bGVbJ2dyaWQtY29sdW1uLXN0YXJ0J10gPSBqICsgMTtcbiAgICAgICAgICAgIHNxdWFyZS5zdHlsZVsnZ3JpZC1jb2x1bW4tZW5kJ10gPSBqICsgMjtcbiAgICAgICAgICAgIHNxdWFyZS5zdHlsZVsnZ3JpZC1yb3ctc3RhcnQnXSA9IGkgKyAxO1xuICAgICAgICAgICAgc3F1YXJlLnN0eWxlWydncmlkLXJvdy1lbmQnXSA9IGkgKyAyO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdodW0nKSB7IC8vIE9ubHkgcmV2ZWFsIHNoaXAgcG9zaXRpb25zIGZvciB0aGUgaHVtYW4gcGxheWVyJ3MgYm9hcmQuXG4gICAgICAgICAgICAgICAgaWYgKGh1bVBsYXllci5nZXRHYW1lYm9hcmQoKVtpXVtqXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdmaXZlLXNxdWFyZS1zaGlwJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChodW1QbGF5ZXIuZ2V0R2FtZWJvYXJkKClbaV1bal0gPT0gMikge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnZm91ci1zcXVhcmUtc2hpcCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaHVtUGxheWVyLmdldEdhbWVib2FyZCgpW2ldW2pdID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3RocmVlLXNxdWFyZS1zaGlwLTEnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGh1bVBsYXllci5nZXRHYW1lYm9hcmQoKVtpXVtqXSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCd0aHJlZS1zcXVhcmUtc2hpcC0yJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChodW1QbGF5ZXIuZ2V0R2FtZWJvYXJkKClbaV1bal0gPT0gNSkge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgndHdvLXNxdWFyZS1zaGlwJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUaGUgaHVtYW4gcGxheWVyIHdpbGwgYmUgaW50ZXJhY3Rpbmcgb24gdGhlIGNvbXB1dGVyIHBsYXllcidzIGJvYXJkLlxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ2NvbScpIHsgLy8gRm9yIGVhY2ggc3F1YXJlIG9uIHRoZSBjb21wdXRlciBwbGF5ZXIncyBib2FyZCxcbiAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5ZXJDbGlja1NxdWFyZS5iaW5kKHRoaXMsIGksIGopKTsgLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdob3ZlcmFibGUnKTsgLy8gQWRkIHRoZSBob3ZlciBlZmZlY3QuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUJvYXJkIH07IiwiaW1wb3J0IHsgc2hpcCB9IGZyb20gJy4vc2hpcC5qcyc7XG5cbmZ1bmN0aW9uIGdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IG5ldyBBcnJheSgxMCkuZmlsbCgwKS5tYXAoKCkgPT4gbmV3IEFycmF5KDEwKS5maWxsKDApKTsgLy8gQ3JlYXRlIGEgMTAgeCAxMCBhcnJheSBmb3IgdGhlIGdhbWVib2FyZC5cbiAgICAvLyBGaXJzdCwgY3JlYXRlIGFuIGFycmF5IHdpdGggMTAgZWxlbWVudHMgYW5kIGZpbGwgZWFjaCBlbGVtZW50IHdpdGggMC5cbiAgICAvLyBTZWNvbmQsIG1hcCBlYWNoIGVsZW1lbnQgd2l0aCBhIG5ldyBhcnJheSBmaWxsZWQgd2l0aCAwcy5cbiAgICAvLyBJZiBuZXcgQXJyYXkoMTApLmZpbGwobmV3IEFycmF5KDEwKS5maWxsKDApKTsgaXMgdXNlZCwgZWFjaCBlbGVtZW50IHdpbGwgaGF2ZSB0aGUgc2FtZSBhcnJheSxcbiAgICAvLyBzbyB3aGVuIHNvbWV0aGluZyBpcyBjaGFuZ2VkIGluIG9uZSwgaXQgd2lsbCBhZmZlY3QgYWxsIGVsZW1lbnRzLlxuICAgIFxuICAgIGNvbnN0IHNoaXBzID0gW107XG4gICAgbGV0IGhpdENvdW50ID0gMDtcbiAgICBsZXQgbWlzc2VkQ291bnQgPSAwO1xuICAgIGxldCBhbGxTdW5rID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuICAgIGNvbnN0IGdldFNoaXBzID0gKCkgPT4gc2hpcHM7XG4gICAgY29uc3QgZ2V0SGl0Q291bnQgPSAoKSA9PiBoaXRDb3VudDtcbiAgICBjb25zdCBnZXRNaXNzZWRDb3VudCA9ICgpID0+IG1pc3NlZENvdW50O1xuICAgIGNvbnN0IGNoZWNrQWxsU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGxTdW5rID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhbGxTdW5rID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXBMZW5ndGgsIHN0YXJ0aW5nWCwgc3RhcnRpbmdZLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKHNoaXBzLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgICAgICByZXR1cm4gJ1RoZSBtYXhpbXVtIG51bWJlciBvZiBzaGlwcyAoNSkgaGFzIGJlZW4gcmVhY2hlZC4nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaXBMZW5ndGggPCAxIHx8IHNoaXBMZW5ndGggPiA1KSB7XG4gICAgICAgICAgICByZXR1cm4gJ1RoZSBzaGlwIGxlbmd0aCBtdXN0IGJlIGZyb20gMCB0byA1Lic7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICgoc3RhcnRpbmdYIDwgMCB8fCBzdGFydGluZ1ggPiA5KSAmJiAoc3RhcnRpbmdZIDwgMCB8fCBzdGFydGluZ1kgPiA5KSkge1xuICAgICAgICAgICAgcmV0dXJuICdUaGUgeCBhbmQgeSBjb29yZGluYXRlcyBtdXN0IGJlIGZyb20gMCB0byA5Lic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnRpbmdYIDwgMCB8fCBzdGFydGluZ1ggPiA5KSB7XG4gICAgICAgICAgICByZXR1cm4gJ1RoZSB4IGNvb3JkaW5hdGUgbXVzdCBiZSBmcm9tIDAgdG8gOS4nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0aW5nWSA8IDAgfHwgc3RhcnRpbmdZID4gOSkge1xuICAgICAgICAgICAgcmV0dXJuICdUaGUgeSBjb29yZGluYXRlIG11c3QgYmUgZnJvbSAwIHRvIDkuJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPCAwIHx8IGRpcmVjdGlvbiA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAnVGhlIGRpcmVjdGlvbiBtdXN0IGJlIDAgKGhvcml6b250YWwpIG9yIDEgKHZlcnRpY2FsKS4nO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hpcE51bWJlciA9IHNoaXBzLmxlbmd0aCArIDE7IC8vIEFuIGVtcHR5IHNxdWFyZSBpcyAwLCBzbyArIDEgc28gdGhhdCBzaGlwTnVtYmVyIHN0YXJ0cyBhdCAxLlxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gMCkgeyAvLyAwIG1lYW5zIGhvcml6b250YWwuXG4gICAgICAgICAgICBpZiAoc3RhcnRpbmdYICsgc2hpcExlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdJbnZhbGlkIHBvc2l0aW9uIC0gdGhlIHNoaXAgd2lsbCBmYWxsIG91dHNpZGUgdGhlIGdhbWVib2FyZC4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykgeyAvLyBUaGUgZmlyc3QgbG9vcCBjaGVja3MgaWYgdGhlcmUgaXMgYW55IGludmFsaWQgc3F1YXJlLlxuICAgICAgICAgICAgICAgIGlmIChib2FyZFtzdGFydGluZ1ldW3N0YXJ0aW5nWCArIGldID4gMCkgeyAvLyBOdW1iZXIgbW9yZSB0aGFuIDAgbWVhbnMgdGhlcmUgaXMgYSBzaGlwIGluIHRoZSBzcXVhcmUuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnSW52YWxpZCBwb3NpdGlvbiAtIGF0IGxlYXN0IG9uZSBzcXVhcmUgaXMgb2NjdXBpZWQuJzsgLy8gcmV0dXJuIHRvIHByZXZlbnQgdGhlIHNlY29uZCBsb29wIGZyb20gcnVubmluZy5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7IC8vIFRoZSBzZWNvbmQgbG9vcCBwbGFjZXMgdGhlIHNoaXAuXG4gICAgICAgICAgICAgICAgYm9hcmRbc3RhcnRpbmdZXVtzdGFydGluZ1ggKyBpXSA9IHNoaXBOdW1iZXI7IC8vIE1hcmsgdGhlIHNxdWFyZSB3aXRoIHNoaXBOdW1iZXIuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IDEpIHsgLy8gMSBtZWFucyB2ZXJ0aWNhbC5cbiAgICAgICAgICAgIGlmIChzdGFydGluZ1kgKyBzaGlwTGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgcG9zaXRpb24gLSB0aGUgc2hpcCB3aWxsIGZhbGwgb3V0c2lkZSB0aGUgZ2FtZWJvYXJkLic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7IC8vIFRoZSBmaXJzdCBsb29wIGNoZWNrcyBpZiB0aGVyZSBpcyBhbnkgaW52YWxpZCBzcXVhcmUuXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW3N0YXJ0aW5nWSArIGldW3N0YXJ0aW5nWF0gPiAwKSB7IC8vIE51bWJlciBtb3JlIHRoYW4gMCBtZWFucyB0aGVyZSBpcyBhIHNoaXAgaW4gdGhlIHNxdWFyZS5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdJbnZhbGlkIHBvc2l0aW9uIC0gYXQgbGVhc3Qgb25lIHNxdWFyZSBpcyBvY2N1cGllZC4nOyAvLyByZXR1cm4gdG8gcHJldmVudCB0aGUgc2Vjb25kIGxvb3AgZnJvbSBydW5uaW5nLlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHsgLy8gVGhlIHNlY29uZCBsb29wIHBsYWNlcyB0aGUgc2hpcC5cbiAgICAgICAgICAgICAgICBib2FyZFtzdGFydGluZ1kgKyBpXVtzdGFydGluZ1hdID0gc2hpcE51bWJlcjsgLy8gTWFyayB0aGUgc3F1YXJlIHdpdGggc2hpcE51bWJlci5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNoaXBzLnB1c2goc2hpcChzaGlwTGVuZ3RoKSk7XG5cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbeV1beF0gPT0gJ1gnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1RoZSBzcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBzZWxlY3RlZCAtIGhpdC4nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvYXJkW3ldW3hdID09ICctJykge1xuICAgICAgICAgICAgcmV0dXJuICdUaGUgc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQgLSBtaXNzLic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9hcmRbeV1beF0gPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSBib2FyZFt5XVt4XTsgLy8gR2V0IHRoZSBzaGlwIG51bWJlciAoMS01KS5cbiAgICAgICAgICAgIHNoaXBzW3BvcyAtIDFdLmhpdCgpOyAvLyBEYW1hZ2UgdGhlIHNoaXAuIC0xIGJlY2F1c2UgYXJyYXlzIHN0YXJ0IGF0IGluZGV4IDAuXG4gICAgICAgICAgICBib2FyZFt5XVt4XSA9ICdYJzsgLy8gTWFyayB0aGUgc3F1YXJlIHdpdGggYW4gJ1gnLlxuICAgICAgICAgICAgaGl0Q291bnQgKz0gMTtcblxuICAgICAgICAgICAgaWYgKGNoZWNrQWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdIaXQgLSBhbGwgc2hpcHMgc3VuayEnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hpcHNbcG9zIC0gMV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0hpdCAtIHNoaXAgc3VuayEnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gJ0hpdCEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9hcmRbeV1beF0gPSAnLSc7IC8vIE1hcmsgdGhlIHNxdWFyZSB3aXRoIGEgJy0nLlxuICAgICAgICAgICAgbWlzc2VkQ291bnQgKz0gMTtcblxuICAgICAgICAgICAgcmV0dXJuICdNaXNzISc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRCb2FyZCwgZ2V0U2hpcHMsIGdldEhpdENvdW50LCBnZXRNaXNzZWRDb3VudCwgY2hlY2tBbGxTdW5rLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2sgfTtcbn1cblxuZXhwb3J0IHsgZ2FtZWJvYXJkIH07IiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSAnLi9wbGF5ZXIuanMnO1xuaW1wb3J0IHsgY3JlYXRlQm9hcmQgfSBmcm9tICcuL2NyZWF0ZS1ib2FyZC5qcyc7XG5cbmxldCBodW1QbGF5ZXIgPSBwbGF5ZXIoJ2NvbScpO1xuXG5jb25zdCB0b3BCb3hEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm94MCcpO1xuY29uc3QgdG9wQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JveDAtdGV4dDEnKTtcbmNvbnN0IGh1bUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWFuLWJvYXJkJyk7XG5jb25zdCBjb21Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wdXRlci1ib2FyZCcpO1xuXG5jb25zdCB0ZXN0R2FtZWJvYXJkID0gZ2FtZWJvYXJkKCk7IC8vIFRoaXMgaXMgc28gdGhhdCBwbGFjZVNoaXAoKSBjYW4gYmUgdXNlZCB0byB0ZXN0IGFsbCBzaGlwIHBsYWNlbWVudHMuXG5jb25zdCBwbGF5ZXJzaGlwcyA9IFtdO1xuXG5sZXQgY291bnRlciA9IDA7XG5sZXQgc2hpcFNpemUgPSAwO1xuXG5mdW5jdGlvbiBnZXRQbGF5ZXJTaGlwUG9zaXRpb25zKCkge1xuICAgIGlmIChjb3VudGVyID09IDApIHtcbiAgICAgICAgc2hpcFNpemUgPSA1O1xuICAgIH0gZWxzZSBpZiAoY291bnRlciA9PSAxKSB7XG4gICAgICAgIHNoaXBTaXplID0gNDtcbiAgICB9IGVsc2UgaWYgKGNvdW50ZXIgPT0gMiB8fCBjb3VudGVyID09IDMpIHtcbiAgICAgICAgc2hpcFNpemUgPSAzO1xuICAgIH0gZWxzZSBpZiAoY291bnRlciA9PSA0KSB7XG4gICAgICAgIHNoaXBTaXplID0gMjtcbiAgICB9XG5cbiAgICB0b3BCb3guaW5uZXJIVE1MID0gYFNoaXAgJHtjb3VudGVyICsgMX06IHNpemUgJHtzaGlwU2l6ZX1gOyAvLyBEaXNwbGF5IHRoZSBjdXJyZW50IHNoaXAgbnVtYmVyIGFuZCBzaXplLiBBbHNvIHJlbW92ZSB0aGUgdHdvIGJ1dHRvbnMgaW4gdGhlIGluaXRpYWwgZnVuY3Rpb24gY2FsbC5cblxuICAgIGNvbnN0IHNoaXBJbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgc2hpcElucHV0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzdWJtaXRTaGlwSW5wdXRGb3JtKTtcbiAgICBcbiAgICBmdW5jdGlvbiBzdWJtaXRTaGlwSW5wdXRGb3JtKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHN1Ym1pdHRlZFN0YXJ0aW5nWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN4LWF4aXMnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0dGVkU3RhcnRpbmdZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ktYXhpcycpO1xuICAgICAgICBjb25zdCBzdWJtaXR0ZWREaXJlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXNoaXAtZGlyZWN0aW9uXTpjaGVja2VkJyk7XG5cbiAgICAgICAgY29uc3QgcmV0dXJuRnJvbVRlc3RHYW1lYm9hcmQgPSB0ZXN0R2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwU2l6ZSwgTnVtYmVyKHN1Ym1pdHRlZFN0YXJ0aW5nWC52YWx1ZSksIE51bWJlcihzdWJtaXR0ZWRTdGFydGluZ1kudmFsdWUpLCBOdW1iZXIoc3VibWl0dGVkRGlyZWN0aW9uLnZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXR1cm5Gcm9tVGVzdEdhbWVib2FyZCAhPSAnc3RyaW5nJykgeyAvLyBPbmx5IHB1c2ggdGhlIHZhbHVlcyBpbnRvIHBsYXllcnNoaXBzIGlmIHJldHVybkZyb21UZXN0R2FtZWJvYXJkIGlzIHZhbGlkLlxuICAgICAgICAgICAgcGxheWVyc2hpcHMucHVzaChbc3VibWl0dGVkU3RhcnRpbmdYLnZhbHVlLCBzdWJtaXR0ZWRTdGFydGluZ1kudmFsdWUsIHN1Ym1pdHRlZERpcmVjdGlvbi52YWx1ZV0pO1xuICAgICAgICAgICAgY291bnRlcisrO1xuXG4gICAgICAgICAgICBpZiAoY291bnRlciA8IDUpIHsgLy8gUmVwZWF0IHVudGlsIHRoZXJlIGFyZSBmaXZlIHNoaXBzLlxuICAgICAgICAgICAgICAgIHNoaXBJbnB1dEZvcm0uaW5uZXJIVE1MID0gJyc7IC8vIFJlbW92ZSB0aGUgcHJldmlvdXMgZm9ybS5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBnZXRQbGF5ZXJTaGlwUG9zaXRpb25zKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb3VudGVyID49IDUpIHsgLy8gT25jZSB0aGVyZSBhcmUgZml2ZSBzaGlwcyxcbiAgICAgICAgICAgICAgICBodW1QbGF5ZXIgPSBwbGF5ZXIoJ2h1bScsIHBsYXllcnNoaXBzKTsgLy8gQ3JlYXRlIHRoZSBodW1hbiBwbGF5ZXIsIHBhc3NpbmcgaW4gcGxheWVyc2hpcHMuXG4gICAgICAgICAgICAgICAgdG9wQm94LmlubmVySFRNTCA9IGBDbGljayBvbiBhIHNxdWFyZSBvbiB0aGUgY29tcHV0ZXIncyBib2FyZCB0byBhdHRhY2suYDsgLy8gQ2hhbmdlIHRoZSB0ZXh0IGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UuXG4gICAgICAgICAgICAgICAgc2hpcElucHV0Rm9ybS5pbm5lckhUTUwgPSAnJzsgLy8gUmVtb3ZlIHRoZSBwcmV2aW91cyBmb3JtLlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNyZWF0ZUJvYXJkKGh1bUJvYXJkLCAnaHVtJyk7IC8vIENyZWF0ZSB0aGUgZ2FtZWJvYXJkIGZvciB0aGUgaHVtYW4gcGxheWVyLlxuICAgICAgICAgICAgICAgIGNyZWF0ZUJvYXJkKGNvbUJvYXJkLCAnY29tJyk7IC8vIENyZWF0ZSB0aGUgZ2FtZWJvYXJkIGZvciB0aGUgY29tcHV0ZXIgcGxheWVyLlxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9wQm94LmlubmVySFRNTCA9IGBTaGlwICR7Y291bnRlciArIDF9OiBzaXplICR7c2hpcFNpemV9PHA+JHtyZXR1cm5Gcm9tVGVzdEdhbWVib2FyZH08L3A+YDsgLy8gRGlzcGxheSB0aGUgbWVzc2FnZSBleHBsYWluaW5nIHdoeSB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLlxuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydGluZ1hJbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3RhcnRpbmdYSW5wdXRUZXh0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3gtYXhpcycpO1xuICAgIHN0YXJ0aW5nWElucHV0VGV4dC5pbm5lckhUTUwgPSAnU3RhcnRpbmcgeC1heGlzOiAnO1xuICAgIFxuICAgIGNvbnN0IHN0YXJ0aW5nWElucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdGFydGluZ1hJbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3gtYXhpcycpO1xuICAgIHN0YXJ0aW5nWElucHV0Qm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcbiAgICBzdGFydGluZ1hJbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAneC1heGlzJyk7XG4gICAgc3RhcnRpbmdYSW5wdXRCb3guc2V0QXR0cmlidXRlKCdzaXplJywgMSk7XG4gICAgc3RhcnRpbmdYSW5wdXRCb3guc2V0QXR0cmlidXRlKCdtaW4nLCAwKTtcbiAgICBzdGFydGluZ1hJbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ21heCcsIDkpO1xuICAgIHN0YXJ0aW5nWElucHV0Qm94LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgXG4gICAgY29uc3Qgc3RhcnRpbmdZSW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN0YXJ0aW5nWUlucHV0VGV4dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd5LWF4aXMnKTtcbiAgICBzdGFydGluZ1lJbnB1dFRleHQuaW5uZXJIVE1MID0gJ1N0YXJ0aW5nIHktYXhpczogJztcbiAgICBcbiAgICBjb25zdCBzdGFydGluZ1lJbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3RhcnRpbmdZSW5wdXRCb3guc2V0QXR0cmlidXRlKCdpZCcsICd5LWF4aXMnKTtcbiAgICBzdGFydGluZ1lJbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG4gICAgc3RhcnRpbmdZSW5wdXRCb3guc2V0QXR0cmlidXRlKCduYW1lJywgJ3ktYXhpcycpO1xuICAgIHN0YXJ0aW5nWUlucHV0Qm94LnNldEF0dHJpYnV0ZSgnc2l6ZScsIDEpO1xuICAgIHN0YXJ0aW5nWUlucHV0Qm94LnNldEF0dHJpYnV0ZSgnbWluJywgMCk7XG4gICAgc3RhcnRpbmdZSW5wdXRCb3guc2V0QXR0cmlidXRlKCdtYXgnLCA5KTtcbiAgICBzdGFydGluZ1lJbnB1dEJveC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uSW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRpcmVjdGlvbklucHV0VGV4dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzaGlwLWRpcmVjdGlvbicpO1xuICAgIGRpcmVjdGlvbklucHV0VGV4dC5pbm5lckhUTUwgPSAnRGlyZWN0aW9uOic7XG4gICAgXG4gICAgY29uc3QgZGlyZWN0aW9uSW5wdXRCb3hIb3Jpem9udGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkaXJlY3Rpb25JbnB1dEJveEhvcml6b250YWwuc2V0QXR0cmlidXRlKCdpZCcsICdob3Jpem9udGFsJyk7XG4gICAgZGlyZWN0aW9uSW5wdXRCb3hIb3Jpem9udGFsLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgIGRpcmVjdGlvbklucHV0Qm94SG9yaXpvbnRhbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc2hpcC1kaXJlY3Rpb24nKTtcbiAgICBkaXJlY3Rpb25JbnB1dEJveEhvcml6b250YWwuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBkaXJlY3Rpb25JbnB1dEJveEhvcml6b250YWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIDApO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uSW5wdXRCb3hIb3Jpem9udGFsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRpcmVjdGlvbklucHV0Qm94SG9yaXpvbnRhbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2hvcml6b250YWwnKTtcbiAgICBkaXJlY3Rpb25JbnB1dEJveEhvcml6b250YWxMYWJlbC5pbm5lckhUTUwgPSAnSG9yaXpvbnRhbCc7XG5cbiAgICBjb25zdCBkaXJlY3Rpb25JbnB1dEJveFZlcnRpY2FsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkaXJlY3Rpb25JbnB1dEJveFZlcnRpY2FsLnNldEF0dHJpYnV0ZSgnaWQnLCAndmVydGljYWwnKTtcbiAgICBkaXJlY3Rpb25JbnB1dEJveFZlcnRpY2FsLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgIGRpcmVjdGlvbklucHV0Qm94VmVydGljYWwuc2V0QXR0cmlidXRlKCduYW1lJywgJ3NoaXAtZGlyZWN0aW9uJyk7XG4gICAgZGlyZWN0aW9uSW5wdXRCb3hWZXJ0aWNhbC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGRpcmVjdGlvbklucHV0Qm94VmVydGljYWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIDEpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uSW5wdXRCb3hWZXJ0aWNhbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkaXJlY3Rpb25JbnB1dEJveFZlcnRpY2FsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndmVydGljYWwnKTtcbiAgICBkaXJlY3Rpb25JbnB1dEJveFZlcnRpY2FsTGFiZWwuaW5uZXJIVE1MID0gJ1ZlcnRpY2FsJztcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgc3VibWl0QnV0dG9uLmlubmVySFRNTCA9ICdTdWJtaXQnO1xuICAgIFxuICAgIHN0YXJ0aW5nWElucHV0VGV4dC5hcHBlbmRDaGlsZChzdGFydGluZ1hJbnB1dEJveCk7XG4gICAgc3RhcnRpbmdZSW5wdXRUZXh0LmFwcGVuZENoaWxkKHN0YXJ0aW5nWUlucHV0Qm94KTtcbiAgICBkaXJlY3Rpb25JbnB1dFRleHQuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uSW5wdXRCb3hIb3Jpem9udGFsKTtcbiAgICBkaXJlY3Rpb25JbnB1dFRleHQuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uSW5wdXRCb3hIb3Jpem9udGFsTGFiZWwpO1xuICAgIGRpcmVjdGlvbklucHV0VGV4dC5hcHBlbmRDaGlsZChkaXJlY3Rpb25JbnB1dEJveFZlcnRpY2FsKTtcbiAgICBkaXJlY3Rpb25JbnB1dFRleHQuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uSW5wdXRCb3hWZXJ0aWNhbExhYmVsKTtcblxuICAgIHNoaXBJbnB1dEZvcm0uYXBwZW5kQ2hpbGQoc3RhcnRpbmdYSW5wdXRUZXh0KTtcbiAgICBzaGlwSW5wdXRGb3JtLmFwcGVuZENoaWxkKHN0YXJ0aW5nWUlucHV0VGV4dCk7XG4gICAgc2hpcElucHV0Rm9ybS5hcHBlbmRDaGlsZChkaXJlY3Rpb25JbnB1dFRleHQpO1xuICAgIHNoaXBJbnB1dEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIHRvcEJveERpdi5hcHBlbmRDaGlsZChzaGlwSW5wdXRGb3JtKTsgXG59XG5cbmV4cG9ydCB7IGdldFBsYXllclNoaXBQb3NpdGlvbnMsIGh1bVBsYXllciwgaHVtQm9hcmQsIGNvbUJvYXJkIH07IiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuLy9pbXBvcnQgcHJvbXB0U3luYyBmcm9tICdwcm9tcHQtc3luYyc7IC8vIFRoaXMgaXMgc28gdGhhdCB3ZSBjYW4gdXNlIHByb21wdCgpIGluIG5vZGUgKGZvciB0ZXN0aW5nKS5cblxuLy9jb25zdCBwcm9tcHQgPSBwcm9tcHRTeW5jKCk7XG5cbmZ1bmN0aW9uIGdldFJhbkludChudW0pIHsgLy8gRnJvbSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3JhbmRvbVxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW0pO1xufVxuXG5mdW5jdGlvbiBwbGF5ZXIodHlwZSwgYXJyID0gW10pIHsgLy8gYXJyIGlzIG9ubHkgZW50ZXJlZCB3aGVuIHR5cGUgPSAnaHVtJy5cbiAgICBjb25zdCBuZXdHYW1lYm9hcmQgPSBnYW1lYm9hcmQoKTtcblxuICAgIGNvbnN0IGdldEdhbWVib2FyZCA9ICgpID0+IG5ld0dhbWVib2FyZC5nZXRCb2FyZCgpO1xuICAgIGNvbnN0IGNoZWNrSGl0ID0gKHgsIHkpID0+IG5ld0dhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gICAgbGV0IHJldHVybkZyb21HYW1lYm9hcmQ7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBzaGlwU2l6ZSA9IDA7XG5cbiAgICB3aGlsZSAoaSA8IDUpIHtcbiAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgc2hpcFNpemUgPSA1O1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT0gMSkge1xuICAgICAgICAgICAgc2hpcFNpemUgPSA0O1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT0gMiB8fCBpID09IDMpIHtcbiAgICAgICAgICAgIHNoaXBTaXplID0gMztcbiAgICAgICAgfSBlbHNlIGlmIChpID09IDQpIHtcbiAgICAgICAgICAgIHNoaXBTaXplID0gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09ICdodW0nKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm5Gcm9tR2FtZWJvYXJkID0gbmV3R2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwU2l6ZSwgTnVtYmVyKGFycltpXVswXSksIE51bWJlcihhcnJbaV1bMV0pLCBOdW1iZXIoYXJyW2ldWzJdKSk7IC8vIFBsYWNlIGVhY2ggc2hpcCBiYXNlZCBvbiB0aGUgdXNlcidzIGlucHV0cyB1bnRpbCB0aGVyZSBhcmUgZml2ZSBzaGlwcy5cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICdjb20nKSB7XG4gICAgICAgICAgICByZXR1cm5Gcm9tR2FtZWJvYXJkID0gbmV3R2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwU2l6ZSwgZ2V0UmFuSW50KDEwKSwgZ2V0UmFuSW50KDEwKSwgZ2V0UmFuSW50KDIpKTsgLy8gUmFuZG9tbHkgcGxhY2UgZWFjaCBzaGlwIHVudGlsIHRoZXJlIGFyZSBmaXZlIHNoaXBzLlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXR1cm5Gcm9tR2FtZWJvYXJkICE9ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRHYW1lYm9hcmQsIGNoZWNrSGl0IH07XG59XG5cbmV4cG9ydCB7IGdldFJhbkludCwgcGxheWVyIH07IiwiZnVuY3Rpb24gc2hpcChsZW5ndGgpIHtcbiAgICBsZXQgdGltZXNIaXQgPSAwO1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZXRTaGlwTGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICAgIGNvbnN0IGhpdCA9ICgpID0+IHRpbWVzSGl0ICs9IDE7XG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICBpZiAobGVuZ3RoIC0gdGltZXNIaXQgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN1bmsgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN1bmsgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGdldFNoaXBMZW5ndGgsIGhpdCwgaXNTdW5rIH07XG59XG5cbmV4cG9ydCB7IHNoaXAgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBnZXRQbGF5ZXJTaGlwUG9zaXRpb25zLCBodW1Cb2FyZCwgY29tQm9hcmQgfSBmcm9tICcuL2h1bWFuLXBsYXllci1pbml0LmpzJztcbmltcG9ydCB7IGNyZWF0ZUJvYXJkIH0gZnJvbSAnLi9jcmVhdGUtYm9hcmQuanMnO1xuXG5jb25zdCB0b3BCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm94MC10ZXh0MScpO1xuXG5jb25zdCBwbGFjZVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLXNoaXBzJyk7XG5wbGFjZVNoaXBzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0UGxheWVyU2hpcFBvc2l0aW9ucyk7XG5cbmNvbnN0IHJhbmRvbWl6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5kb21pemUnKTtcbnJhbmRvbWl6ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJhbmRvbWl6ZUJvdGhCb2FyZHMpO1xuXG5mdW5jdGlvbiByYW5kb21pemVCb3RoQm9hcmRzKCkge1xuICAgIHRvcEJveC5pbm5lckhUTUwgPSBgQ2xpY2sgb24gYSBzcXVhcmUgb24gdGhlIGNvbXB1dGVyJ3MgYm9hcmQgdG8gYXR0YWNrLmA7IC8vIFJlbW92ZSB0aGUgdHdvIGJ1dHRvbnMgYW5kIGNoYW5nZSB0aGUgdGV4dCBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLlxuICAgIGNyZWF0ZUJvYXJkKGh1bUJvYXJkLCAnaHVtJyk7XG4gICAgY3JlYXRlQm9hcmQoY29tQm9hcmQsICdjb20nKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=