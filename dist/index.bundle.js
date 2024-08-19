/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #1b3b6f;
    color: #f0f8ff;
    font-family: 'Arial', sans-serif;
}

.boardContainer {
    display: flex;
    gap: 30px;
    padding: 20px;
    background-color: #224e79;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    border: 3px solid #98c1d9;
}

.cell, .shipCell, .computerCell, .clicked {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
}

.cell {
    background: linear-gradient(145deg, #224e79, #1b3b6f);
    border: 2px solid #98c1d9;
    transition: background 0.3s, transform 0.3s;
}

.cell:hover {
    background-color: #61a5c2;
    transform: scale(1.1);
    cursor: pointer;
}

.gameboardContainer, .computerGameboardContainer {
    display: grid;
    grid-template-columns: repeat(10, 50px);
    grid-template-rows: repeat(10, 50px);
    gap: 5px;
}

.computerCell {
    background: linear-gradient(145deg, #3a5a93, #2a4c7a);
    border: 2px solid #adcbe3;
}

.shipCell {
    background: linear-gradient(145deg, #1c4966, #327ba8);
    border: 2px solid #74a9cf;
    box-shadow: 0 0 10px rgba(116, 169, 207, 0.7);
}

.clicked {
    background: linear-gradient(145deg, #f0f8ff, #6b8ea3);
    border: 2px solid #adcbe3;
    color: #1b3b6f;
    transform: scale(1.05);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
}

button {
    background-color: #327ba8;
    color: #f0f8ff;
    font-size: 16px;
    padding: 10px 20px;
    border: 2px solid #adcbe3;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

button:hover {
    background-color: #61a5c2;
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

button:active {
    background-color: #1c4966;
    transform: scale(0.95);
    box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.5);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;IACzB,cAAc;IACd,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,0CAA0C;IAC1C,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,qDAAqD;IACrD,yBAAyB;IACzB,2CAA2C;AAC/C;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,QAAQ;AACZ;;AAEA;IACI,qDAAqD;IACrD,yBAAyB;AAC7B;;AAEA;IACI,qDAAqD;IACrD,yBAAyB;IACzB,6CAA6C;AACjD;;AAEA;IACI,qDAAqD;IACrD,yBAAyB;IACzB,cAAc;IACd,sBAAsB;IACtB,6CAA6C;AACjD;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,kEAAkE;AACtE;;AAEA;IACI,yBAAyB;IACzB,sBAAsB;IACtB,yCAAyC;AAC7C;;AAEA;IACI,yBAAyB;IACzB,sBAAsB;IACtB,+CAA+C;AACnD","sourcesContent":["body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    background-color: #1b3b6f;\n    color: #f0f8ff;\n    font-family: 'Arial', sans-serif;\n}\n\n.boardContainer {\n    display: flex;\n    gap: 30px;\n    padding: 20px;\n    background-color: #224e79;\n    border-radius: 15px;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);\n    border: 3px solid #98c1d9;\n}\n\n.cell, .shipCell, .computerCell, .clicked {\n    width: 50px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    font-weight: bold;\n    font-size: 18px;\n}\n\n.cell {\n    background: linear-gradient(145deg, #224e79, #1b3b6f);\n    border: 2px solid #98c1d9;\n    transition: background 0.3s, transform 0.3s;\n}\n\n.cell:hover {\n    background-color: #61a5c2;\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.gameboardContainer, .computerGameboardContainer {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    gap: 5px;\n}\n\n.computerCell {\n    background: linear-gradient(145deg, #3a5a93, #2a4c7a);\n    border: 2px solid #adcbe3;\n}\n\n.shipCell {\n    background: linear-gradient(145deg, #1c4966, #327ba8);\n    border: 2px solid #74a9cf;\n    box-shadow: 0 0 10px rgba(116, 169, 207, 0.7);\n}\n\n.clicked {\n    background: linear-gradient(145deg, #f0f8ff, #6b8ea3);\n    border: 2px solid #adcbe3;\n    color: #1b3b6f;\n    transform: scale(1.05);\n    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);\n}\n\nbutton {\n    background-color: #327ba8;\n    color: #f0f8ff;\n    font-size: 16px;\n    padding: 10px 20px;\n    border: 2px solid #adcbe3;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;\n}\n\nbutton:hover {\n    background-color: #61a5c2;\n    transform: scale(1.05);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n\nbutton:active {\n    background-color: #1c4966;\n    transform: scale(0.95);\n    box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.5);\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


class Gameboard {
	constructor(user, computer) {
		this.user = user;
		this.computer = computer;
		this.playerA = user.gameboard;
		this.playerB = computer.gameboard;
		this.attacksMissedPlayerA = 0;
		this.attacksMissedPlayerB = 0;
		this.playerALost = false;
		this.playerBLost = false;
	}

	place(ship, player, start, direction) {
		let grid = player === "user" ? this.playerA : this.playerB;
		let y = start[0];
		let x = start[1];
		for (let index = 0; index < ship.length; index++) {
			if (
				y < 0 ||
				y >= grid.length ||
				x < 0 ||
				x >= grid[0].length ||
				grid[y][x] !== 0
			) {
				return "CANT PLACE THERE";
			}

			if (direction === "left") x--;
			if (direction === "right") x++;
			if (direction === "up") y--;
			if (direction === "down") y++;
		}
		y = start[0];
		x = start[1];
		for (let index = 0; index < ship.length; index++) {
			grid[y][x] = ship;
			if (direction === "left") x--;
			if (direction === "right") x++;
			if (direction === "up") y--;
			if (direction === "down") y++;
		}

		return "PLACED";
	}
	receiveAttack(coords, player) {
		let y = coords[0];
		let x = coords[1];
		let grid = player === "user" ? this.playerA : this.playerB;
		let cell = grid[y][x];
		if (cell === 0) {
			grid[y][x] = -1;
			player === "user"
				? this.attacksMissedPlayerA++
				: this.attacksMissedPlayerB++;
			return false;
		} else if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
			cell.hit(1);
			grid[y][x] = -1;
			return true;
		}
	}
	checkGameStatus(player) {
		let grid = player === "user" ? this.playerA : this.playerB;
		let hpCounter = 0;
		
		for (let row of grid) {
			for (let cell of row) {
				if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"] && !cell.sunk) {
					hpCounter++;
				}
			}
		}
		console.log(hpCounter)
		if (hpCounter === 0) {
			if (player === "user") this.playerALost = true;
			if (player === "computer") this.playerBLost = true;
		}
	}
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player {
	constructor(name) {
		this.name = name;
		this.gameboard = Array.from({ length: 10 }, () => Array(10).fill(0));
	}
}


/***/ }),

/***/ "./src/renderGameboards.js":
/*!*********************************!*\
  !*** ./src/renderGameboards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


function createBoard(game) {
	const root = document.querySelector(".root");
	const createShips = () => {
		return [			
			{ first: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("carrier", 5) },
			{
				first: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("battleship", 4),
				second: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("battleship", 4),
			},
			{
				first: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("cruiser", 3),
				second: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("cruiser", 3),
				third: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("cruiser", 3),
			},
			{
				first: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("submarine", 2),
				second: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("submarine", 2),  
				third: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("submarine", 2),
				fourth: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("submarine", 2),
			},
			{
				first: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("destroyer", 1),
				second: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("destroyer", 1),
				third: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("destroyer", 1),
				fourth: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("destroyer", 1),
				fifth: new _ship__WEBPACK_IMPORTED_MODULE_0__["default"]("destroyer", 1),
			},
		];
	};
	const resetGameboard = (board) => {
		board.forEach((row, rowIndex) => {
			board[rowIndex] = row.map(() => 0);
		});
	};

	const placeShips = (ships, player) => {		
		const getRandomCoords = (max) => Math.floor(Math.random() * max);
		const getRandomDirection = () =>
			["left", "up", "right", "down"][Math.floor(Math.random() * 4)];
		
		ships.forEach((shipModel) => {
			Object.values(shipModel).forEach((ship) => {
				
				let unplaced = true;
				while (unplaced) {
					const y = getRandomCoords(10);
					const x = getRandomCoords(10);
					const dir = getRandomDirection();
					const placementResult = game.place(ship, player, [y, x], dir);
					if (placementResult !== "CANT PLACE THERE") unplaced = false;
				}
			});
		})
		
	};

	const createGameBoard = (board, container, player) => {
		container.innerHTML = "";
		board.forEach((row, rowIndex) => {
			row.forEach((cellValue, colIndex) => {
				const cell = document.createElement("div");
				cell.dataset.row = rowIndex;
				cell.dataset.col = colIndex;
				if (player === "computer") {
					cell.classList.add(
						board[rowIndex][colIndex] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"]
							? "shipCell"
							: "computerCell"
					);
				} else {
					cell.classList.add("cell");
				}

				if (player === "user") {
					cell.addEventListener("click", () => {
						if (playerTurn) {
							const root = document.querySelector(".root");
							const button = document.querySelector(".randomizeButton")
							if (button) {
								root.removeChild(button) 
								const resetBoard = document.createElement('button');
								resetBoard.textContent = "RESET GAME"
								resetBoard.addEventListener("click", () => {
								resetGameboard(gameboardPlayer);
								resetGameboard(gameboardComputer);
								const playerShips = createShips();
								const computerShips = createShips();
								placeShips(playerShips, "computer");
								placeShips(computerShips, "user");
								createGameBoard(gameboardPlayer, playerGameBoard, "user");
								createGameBoard(gameboardComputer, computerGameBoard, "computer");
								root.removeChild(resetBoard);
								createButton()
								})
							root.appendChild(resetBoard)
							}
							
							
							
							const hit = game.receiveAttack([rowIndex, colIndex], "user");
							playerTurn = false;
							cell.classList.add(hit ? "clicked" : "sunk");
							cell.style.pointerEvents = "none";
							cell.textContent = hit ? "X" : "-1";
							game.checkGameStatus(player);
							if(game.playerBLost === true) alert("YOU'VE LOST!") // should also reset gameboard!!!
							setTimeout(() => {
								computerTurn(game.computer);
								game.checkGameStatus(game.playerA);
								if(game.playerALost === true) alert("YOU'VE WON!") // should also reset gameboard!!!
							}, 500);
						}
					});
				}

				container.appendChild(cell);
			});
		});
	};

	const computerTurn = (opponent) => {
		console.log(`Turn: ${playerTurn ? 'Player' : 'Computer'} at ${new Date().toLocaleTimeString()}`);
		let y, x;
		const grid = opponent.gameboard;
		do {
			y = Math.floor(Math.random() * 10);
			x = Math.floor(Math.random() * 10);
		} while (grid[y][x] === -1 || typeof grid[y][x] === "undefined");
		let hit = game.receiveAttack([y, x], "computer");	
		const playerBoardCells =
			computerGameBoard.querySelectorAll(".computerCell, .shipCell");
		playerBoardCells.forEach((cell) => {	
			if (cell.dataset.row == y && cell.dataset.col == x) {
				if(hit) {
					cell.textContent = "X"
					cell.classList = "clicked"
				} else {
					cell.textContent = "-1"
				}	
			}
		});

		playerTurn = true;
	};

	const playerShips = createShips();
	const computerShips = createShips();
	placeShips(playerShips, "computer");
	placeShips(computerShips, "user");
	const gameboardPlayer = game.playerA;
	const gameboardComputer = game.playerB;
	let playerTurn = true;
	const playerGameBoard = document.createElement("div");
	playerGameBoard.classList.add("gameboardContainer");
	const computerGameBoard = document.createElement("div");
	computerGameBoard.classList.add("computerGameboardContainer");

	createGameBoard(gameboardPlayer, playerGameBoard, "user");
	createGameBoard(gameboardComputer, computerGameBoard, "computer");

	const boards = document.createElement("div");
	boards.classList.add("boardContainer");
	boards.appendChild(computerGameBoard);
	boards.appendChild(playerGameBoard);

	root.appendChild(boards);
	function createButton() {
		const previousButton = document.querySelector(".randomizeButton");
		if (!previousButton) {
		const randomizeBoardButton = document.createElement("button");
		randomizeBoardButton.classList.add("randomizeButton");
		randomizeBoardButton.textContent = "RANDOMIZE SHIP PLACEMENT";
		randomizeBoardButton.addEventListener("click", () => {
			resetGameboard(gameboardComputer);
			placeShips(playerShips, "computer");
			createGameBoard(gameboardComputer, computerGameBoard, "computer");
		});
		root.appendChild(randomizeBoardButton);
	}
	}
	createButton()
	
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
	constructor(name, length) {
		this.name = name;
		this.length = length;
		this.hits = 0;
		this.sunk = false;
	}
	hit(amount) {
		this.hits += amount;
		if (this.hits >= this.length) this.sunk = true;
	}
}


/***/ }),

/***/ "./src/cruise.png":
/*!************************!*\
  !*** ./src/cruise.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "037b182407bb24090402.png";

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _renderGameboards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderGameboards */ "./src/renderGameboards.js");
/* harmony import */ var _cruise_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cruise.png */ "./src/cruise.png");






function main() {
	let player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]("user");
	let computer = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]("computer");

	const root = document.createElement("div");
	root.classList.add("root");

	const createPlayersButton = document.createElement("button");
	createPlayersButton.textContent = "CREATE PLAYERS";
	createPlayersButton.addEventListener("click", () => {
		const game = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](player, computer);
		(0,_renderGameboards__WEBPACK_IMPORTED_MODULE_3__["default"])(game);
		root.removeChild(createPlayersButton);
	});

	root.appendChild(createPlayersButton);
	return root;
}

document.body.appendChild(main());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3JlbmRlckdhbWVib2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjNiNmY7XG4gICAgY29sb3I6ICNmMGY4ZmY7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XG59XG5cbi5ib2FyZENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDMwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI0ZTc5O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICM5OGMxZDk7XG59XG5cbi5jZWxsLCAuc2hpcENlbGwsIC5jb21wdXRlckNlbGwsIC5jbGlja2VkIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjMjI0ZTc5LCAjMWIzYjZmKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOThjMWQ5O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcywgdHJhbnNmb3JtIDAuM3M7XG59XG5cbi5jZWxsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFhNWMyO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5nYW1lYm9hcmRDb250YWluZXIsIC5jb21wdXRlckdhbWVib2FyZENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xuICAgIGdhcDogNXB4O1xufVxuXG4uY29tcHV0ZXJDZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjM2E1YTkzLCAjMmE0YzdhKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYWRjYmUzO1xufVxuXG4uc2hpcENlbGwge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMxYzQ5NjYsICMzMjdiYTgpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3NGE5Y2Y7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgxMTYsIDE2OSwgMjA3LCAwLjcpO1xufVxuXG4uY2xpY2tlZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2YwZjhmZiwgIzZiOGVhMyk7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2FkY2JlMztcbiAgICBjb2xvcjogIzFiM2I2ZjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3YmE4O1xuICAgIGNvbG9yOiAjZjBmOGZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2FkY2JlMztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFhNWMyO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzQ5NjY7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFEQUFxRDtJQUNyRCx5QkFBeUI7SUFDekIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsUUFBUTtBQUNaOztBQUVBO0lBQ0kscURBQXFEO0lBQ3JELHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFEQUFxRDtJQUNyRCx5QkFBeUI7SUFDekIsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0kscURBQXFEO0lBQ3JELHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrRUFBa0U7QUFDdEU7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsK0NBQStDO0FBQ25EXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjNiNmY7XFxuICAgIGNvbG9yOiAjZjBmOGZmO1xcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmJvYXJkQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI0ZTc5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM5OGMxZDk7XFxufVxcblxcbi5jZWxsLCAuc2hpcENlbGwsIC5jb21wdXRlckNlbGwsIC5jbGlja2VkIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjMjI0ZTc5LCAjMWIzYjZmKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzk4YzFkOTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzLCB0cmFuc2Zvcm0gMC4zcztcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFhNWMyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZENvbnRhaW5lciwgLmNvbXB1dGVyR2FtZWJvYXJkQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY29tcHV0ZXJDZWxsIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzNhNWE5MywgIzJhNGM3YSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNhZGNiZTM7XFxufVxcblxcbi5zaGlwQ2VsbCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMxYzQ5NjYsICMzMjdiYTgpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzRhOWNmO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDExNiwgMTY5LCAyMDcsIDAuNyk7XFxufVxcblxcbi5jbGlja2VkIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2YwZjhmZiwgIzZiOGVhMyk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNhZGNiZTM7XFxuICAgIGNvbG9yOiAjMWIzYjZmO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjdiYTg7XFxuICAgIGNvbG9yOiAjZjBmOGZmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2FkY2JlMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxYTVjMjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM0OTY2O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG5cdGNvbnN0cnVjdG9yKHVzZXIsIGNvbXB1dGVyKSB7XG5cdFx0dGhpcy51c2VyID0gdXNlcjtcblx0XHR0aGlzLmNvbXB1dGVyID0gY29tcHV0ZXI7XG5cdFx0dGhpcy5wbGF5ZXJBID0gdXNlci5nYW1lYm9hcmQ7XG5cdFx0dGhpcy5wbGF5ZXJCID0gY29tcHV0ZXIuZ2FtZWJvYXJkO1xuXHRcdHRoaXMuYXR0YWNrc01pc3NlZFBsYXllckEgPSAwO1xuXHRcdHRoaXMuYXR0YWNrc01pc3NlZFBsYXllckIgPSAwO1xuXHRcdHRoaXMucGxheWVyQUxvc3QgPSBmYWxzZTtcblx0XHR0aGlzLnBsYXllckJMb3N0ID0gZmFsc2U7XG5cdH1cblxuXHRwbGFjZShzaGlwLCBwbGF5ZXIsIHN0YXJ0LCBkaXJlY3Rpb24pIHtcblx0XHRsZXQgZ3JpZCA9IHBsYXllciA9PT0gXCJ1c2VyXCIgPyB0aGlzLnBsYXllckEgOiB0aGlzLnBsYXllckI7XG5cdFx0bGV0IHkgPSBzdGFydFswXTtcblx0XHRsZXQgeCA9IHN0YXJ0WzFdO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR5IDwgMCB8fFxuXHRcdFx0XHR5ID49IGdyaWQubGVuZ3RoIHx8XG5cdFx0XHRcdHggPCAwIHx8XG5cdFx0XHRcdHggPj0gZ3JpZFswXS5sZW5ndGggfHxcblx0XHRcdFx0Z3JpZFt5XVt4XSAhPT0gMFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybiBcIkNBTlQgUExBQ0UgVEhFUkVcIjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHgtLTtcblx0XHRcdGlmIChkaXJlY3Rpb24gPT09IFwicmlnaHRcIikgeCsrO1xuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB5LS07XG5cdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikgeSsrO1xuXHRcdH1cblx0XHR5ID0gc3RhcnRbMF07XG5cdFx0eCA9IHN0YXJ0WzFdO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0Z3JpZFt5XVt4XSA9IHNoaXA7XG5cdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikgeC0tO1xuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB4Kys7XG5cdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHktLTtcblx0XHRcdGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB5Kys7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFwiUExBQ0VEXCI7XG5cdH1cblx0cmVjZWl2ZUF0dGFjayhjb29yZHMsIHBsYXllcikge1xuXHRcdGxldCB5ID0gY29vcmRzWzBdO1xuXHRcdGxldCB4ID0gY29vcmRzWzFdO1xuXHRcdGxldCBncmlkID0gcGxheWVyID09PSBcInVzZXJcIiA/IHRoaXMucGxheWVyQSA6IHRoaXMucGxheWVyQjtcblx0XHRsZXQgY2VsbCA9IGdyaWRbeV1beF07XG5cdFx0aWYgKGNlbGwgPT09IDApIHtcblx0XHRcdGdyaWRbeV1beF0gPSAtMTtcblx0XHRcdHBsYXllciA9PT0gXCJ1c2VyXCJcblx0XHRcdFx0PyB0aGlzLmF0dGFja3NNaXNzZWRQbGF5ZXJBKytcblx0XHRcdFx0OiB0aGlzLmF0dGFja3NNaXNzZWRQbGF5ZXJCKys7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIGlmIChjZWxsIGluc3RhbmNlb2YgU2hpcCkge1xuXHRcdFx0Y2VsbC5oaXQoMSk7XG5cdFx0XHRncmlkW3ldW3hdID0gLTE7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0Y2hlY2tHYW1lU3RhdHVzKHBsYXllcikge1xuXHRcdGxldCBncmlkID0gcGxheWVyID09PSBcInVzZXJcIiA/IHRoaXMucGxheWVyQSA6IHRoaXMucGxheWVyQjtcblx0XHRsZXQgaHBDb3VudGVyID0gMDtcblx0XHRcblx0XHRmb3IgKGxldCByb3cgb2YgZ3JpZCkge1xuXHRcdFx0Zm9yIChsZXQgY2VsbCBvZiByb3cpIHtcblx0XHRcdFx0aWYgKGNlbGwgaW5zdGFuY2VvZiBTaGlwICYmICFjZWxsLnN1bmspIHtcblx0XHRcdFx0XHRocENvdW50ZXIrKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhocENvdW50ZXIpXG5cdFx0aWYgKGhwQ291bnRlciA9PT0gMCkge1xuXHRcdFx0aWYgKHBsYXllciA9PT0gXCJ1c2VyXCIpIHRoaXMucGxheWVyQUxvc3QgPSB0cnVlO1xuXHRcdFx0aWYgKHBsYXllciA9PT0gXCJjb21wdXRlclwiKSB0aGlzLnBsYXllckJMb3N0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG5cdGNvbnN0cnVjdG9yKG5hbWUpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZ2FtZWJvYXJkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKCkgPT4gQXJyYXkoMTApLmZpbGwoMCkpO1xuXHR9XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKGdhbWUpIHtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm9vdFwiKTtcblx0Y29uc3QgY3JlYXRlU2hpcHMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIFtcdFx0XHRcblx0XHRcdHsgZmlyc3Q6IG5ldyBTaGlwKFwiY2FycmllclwiLCA1KSB9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaXJzdDogbmV3IFNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpLFxuXHRcdFx0XHRzZWNvbmQ6IG5ldyBTaGlwKFwiYmF0dGxlc2hpcFwiLCA0KSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpcnN0OiBuZXcgU2hpcChcImNydWlzZXJcIiwgMyksXG5cdFx0XHRcdHNlY29uZDogbmV3IFNoaXAoXCJjcnVpc2VyXCIsIDMpLFxuXHRcdFx0XHR0aGlyZDogbmV3IFNoaXAoXCJjcnVpc2VyXCIsIDMpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Zmlyc3Q6IG5ldyBTaGlwKFwic3VibWFyaW5lXCIsIDIpLFxuXHRcdFx0XHRzZWNvbmQ6IG5ldyBTaGlwKFwic3VibWFyaW5lXCIsIDIpLCAgXG5cdFx0XHRcdHRoaXJkOiBuZXcgU2hpcChcInN1Ym1hcmluZVwiLCAyKSxcblx0XHRcdFx0Zm91cnRoOiBuZXcgU2hpcChcInN1Ym1hcmluZVwiLCAyKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpcnN0OiBuZXcgU2hpcChcImRlc3Ryb3llclwiLCAxKSxcblx0XHRcdFx0c2Vjb25kOiBuZXcgU2hpcChcImRlc3Ryb3llclwiLCAxKSxcblx0XHRcdFx0dGhpcmQ6IG5ldyBTaGlwKFwiZGVzdHJveWVyXCIsIDEpLFxuXHRcdFx0XHRmb3VydGg6IG5ldyBTaGlwKFwiZGVzdHJveWVyXCIsIDEpLFxuXHRcdFx0XHRmaWZ0aDogbmV3IFNoaXAoXCJkZXN0cm95ZXJcIiwgMSksXG5cdFx0XHR9LFxuXHRcdF07XG5cdH07XG5cdGNvbnN0IHJlc2V0R2FtZWJvYXJkID0gKGJvYXJkKSA9PiB7XG5cdFx0Ym9hcmQuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuXHRcdFx0Ym9hcmRbcm93SW5kZXhdID0gcm93Lm1hcCgoKSA9PiAwKTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBwbGFjZVNoaXBzID0gKHNoaXBzLCBwbGF5ZXIpID0+IHtcdFx0XG5cdFx0Y29uc3QgZ2V0UmFuZG9tQ29vcmRzID0gKG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcblx0XHRjb25zdCBnZXRSYW5kb21EaXJlY3Rpb24gPSAoKSA9PlxuXHRcdFx0W1wibGVmdFwiLCBcInVwXCIsIFwicmlnaHRcIiwgXCJkb3duXCJdW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXTtcblx0XHRcblx0XHRzaGlwcy5mb3JFYWNoKChzaGlwTW9kZWwpID0+IHtcblx0XHRcdE9iamVjdC52YWx1ZXMoc2hpcE1vZGVsKS5mb3JFYWNoKChzaGlwKSA9PiB7XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgdW5wbGFjZWQgPSB0cnVlO1xuXHRcdFx0XHR3aGlsZSAodW5wbGFjZWQpIHtcblx0XHRcdFx0XHRjb25zdCB5ID0gZ2V0UmFuZG9tQ29vcmRzKDEwKTtcblx0XHRcdFx0XHRjb25zdCB4ID0gZ2V0UmFuZG9tQ29vcmRzKDEwKTtcblx0XHRcdFx0XHRjb25zdCBkaXIgPSBnZXRSYW5kb21EaXJlY3Rpb24oKTtcblx0XHRcdFx0XHRjb25zdCBwbGFjZW1lbnRSZXN1bHQgPSBnYW1lLnBsYWNlKHNoaXAsIHBsYXllciwgW3ksIHhdLCBkaXIpO1xuXHRcdFx0XHRcdGlmIChwbGFjZW1lbnRSZXN1bHQgIT09IFwiQ0FOVCBQTEFDRSBUSEVSRVwiKSB1bnBsYWNlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KVxuXHRcdFxuXHR9O1xuXG5cdGNvbnN0IGNyZWF0ZUdhbWVCb2FyZCA9IChib2FyZCwgY29udGFpbmVyLCBwbGF5ZXIpID0+IHtcblx0XHRjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRib2FyZC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG5cdFx0XHRyb3cuZm9yRWFjaCgoY2VsbFZhbHVlLCBjb2xJbmRleCkgPT4ge1xuXHRcdFx0XHRjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0Y2VsbC5kYXRhc2V0LnJvdyA9IHJvd0luZGV4O1xuXHRcdFx0XHRjZWxsLmRhdGFzZXQuY29sID0gY29sSW5kZXg7XG5cdFx0XHRcdGlmIChwbGF5ZXIgPT09IFwiY29tcHV0ZXJcIikge1xuXHRcdFx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XHRcdGJvYXJkW3Jvd0luZGV4XVtjb2xJbmRleF0gaW5zdGFuY2VvZiBTaGlwXG5cdFx0XHRcdFx0XHRcdD8gXCJzaGlwQ2VsbFwiXG5cdFx0XHRcdFx0XHRcdDogXCJjb21wdXRlckNlbGxcIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChwbGF5ZXIgPT09IFwidXNlclwiKSB7XG5cdFx0XHRcdFx0Y2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHBsYXllclR1cm4pIHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm9vdFwiKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb21pemVCdXR0b25cIilcblx0XHRcdFx0XHRcdFx0aWYgKGJ1dHRvbikge1xuXHRcdFx0XHRcdFx0XHRcdHJvb3QucmVtb3ZlQ2hpbGQoYnV0dG9uKSBcblx0XHRcdFx0XHRcdFx0XHRjb25zdCByZXNldEJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRcdFx0XHRcdFx0cmVzZXRCb2FyZC50ZXh0Q29udGVudCA9IFwiUkVTRVQgR0FNRVwiXG5cdFx0XHRcdFx0XHRcdFx0cmVzZXRCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJlc2V0R2FtZWJvYXJkKGdhbWVib2FyZFBsYXllcik7XG5cdFx0XHRcdFx0XHRcdFx0cmVzZXRHYW1lYm9hcmQoZ2FtZWJvYXJkQ29tcHV0ZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHBsYXllclNoaXBzID0gY3JlYXRlU2hpcHMoKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBjb21wdXRlclNoaXBzID0gY3JlYXRlU2hpcHMoKTtcblx0XHRcdFx0XHRcdFx0XHRwbGFjZVNoaXBzKHBsYXllclNoaXBzLCBcImNvbXB1dGVyXCIpO1xuXHRcdFx0XHRcdFx0XHRcdHBsYWNlU2hpcHMoY29tcHV0ZXJTaGlwcywgXCJ1c2VyXCIpO1xuXHRcdFx0XHRcdFx0XHRcdGNyZWF0ZUdhbWVCb2FyZChnYW1lYm9hcmRQbGF5ZXIsIHBsYXllckdhbWVCb2FyZCwgXCJ1c2VyXCIpO1xuXHRcdFx0XHRcdFx0XHRcdGNyZWF0ZUdhbWVCb2FyZChnYW1lYm9hcmRDb21wdXRlciwgY29tcHV0ZXJHYW1lQm9hcmQsIFwiY29tcHV0ZXJcIik7XG5cdFx0XHRcdFx0XHRcdFx0cm9vdC5yZW1vdmVDaGlsZChyZXNldEJvYXJkKTtcblx0XHRcdFx0XHRcdFx0XHRjcmVhdGVCdXR0b24oKVxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdHJvb3QuYXBwZW5kQ2hpbGQocmVzZXRCb2FyZClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRjb25zdCBoaXQgPSBnYW1lLnJlY2VpdmVBdHRhY2soW3Jvd0luZGV4LCBjb2xJbmRleF0sIFwidXNlclwiKTtcblx0XHRcdFx0XHRcdFx0cGxheWVyVHVybiA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoaGl0ID8gXCJjbGlja2VkXCIgOiBcInN1bmtcIik7XG5cdFx0XHRcdFx0XHRcdGNlbGwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRcdFx0XHRcdFx0XHRjZWxsLnRleHRDb250ZW50ID0gaGl0ID8gXCJYXCIgOiBcIi0xXCI7XG5cdFx0XHRcdFx0XHRcdGdhbWUuY2hlY2tHYW1lU3RhdHVzKHBsYXllcik7XG5cdFx0XHRcdFx0XHRcdGlmKGdhbWUucGxheWVyQkxvc3QgPT09IHRydWUpIGFsZXJ0KFwiWU9VJ1ZFIExPU1QhXCIpIC8vIHNob3VsZCBhbHNvIHJlc2V0IGdhbWVib2FyZCEhIVxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb21wdXRlclR1cm4oZ2FtZS5jb21wdXRlcik7XG5cdFx0XHRcdFx0XHRcdFx0Z2FtZS5jaGVja0dhbWVTdGF0dXMoZ2FtZS5wbGF5ZXJBKTtcblx0XHRcdFx0XHRcdFx0XHRpZihnYW1lLnBsYXllckFMb3N0ID09PSB0cnVlKSBhbGVydChcIllPVSdWRSBXT04hXCIpIC8vIHNob3VsZCBhbHNvIHJlc2V0IGdhbWVib2FyZCEhIVxuXHRcdFx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgY29tcHV0ZXJUdXJuID0gKG9wcG9uZW50KSA9PiB7XG5cdFx0Y29uc29sZS5sb2coYFR1cm46ICR7cGxheWVyVHVybiA/ICdQbGF5ZXInIDogJ0NvbXB1dGVyJ30gYXQgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfWApO1xuXHRcdGxldCB5LCB4O1xuXHRcdGNvbnN0IGdyaWQgPSBvcHBvbmVudC5nYW1lYm9hcmQ7XG5cdFx0ZG8ge1xuXHRcdFx0eSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblx0XHRcdHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cdFx0fSB3aGlsZSAoZ3JpZFt5XVt4XSA9PT0gLTEgfHwgdHlwZW9mIGdyaWRbeV1beF0gPT09IFwidW5kZWZpbmVkXCIpO1xuXHRcdGxldCBoaXQgPSBnYW1lLnJlY2VpdmVBdHRhY2soW3ksIHhdLCBcImNvbXB1dGVyXCIpO1x0XG5cdFx0Y29uc3QgcGxheWVyQm9hcmRDZWxscyA9XG5cdFx0XHRjb21wdXRlckdhbWVCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyQ2VsbCwgLnNoaXBDZWxsXCIpO1xuXHRcdHBsYXllckJvYXJkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1x0XG5cdFx0XHRpZiAoY2VsbC5kYXRhc2V0LnJvdyA9PSB5ICYmIGNlbGwuZGF0YXNldC5jb2wgPT0geCkge1xuXHRcdFx0XHRpZihoaXQpIHtcblx0XHRcdFx0XHRjZWxsLnRleHRDb250ZW50ID0gXCJYXCJcblx0XHRcdFx0XHRjZWxsLmNsYXNzTGlzdCA9IFwiY2xpY2tlZFwiXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2VsbC50ZXh0Q29udGVudCA9IFwiLTFcIlxuXHRcdFx0XHR9XHRcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHBsYXllclR1cm4gPSB0cnVlO1xuXHR9O1xuXG5cdGNvbnN0IHBsYXllclNoaXBzID0gY3JlYXRlU2hpcHMoKTtcblx0Y29uc3QgY29tcHV0ZXJTaGlwcyA9IGNyZWF0ZVNoaXBzKCk7XG5cdHBsYWNlU2hpcHMocGxheWVyU2hpcHMsIFwiY29tcHV0ZXJcIik7XG5cdHBsYWNlU2hpcHMoY29tcHV0ZXJTaGlwcywgXCJ1c2VyXCIpO1xuXHRjb25zdCBnYW1lYm9hcmRQbGF5ZXIgPSBnYW1lLnBsYXllckE7XG5cdGNvbnN0IGdhbWVib2FyZENvbXB1dGVyID0gZ2FtZS5wbGF5ZXJCO1xuXHRsZXQgcGxheWVyVHVybiA9IHRydWU7XG5cdGNvbnN0IHBsYXllckdhbWVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHBsYXllckdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkQ29udGFpbmVyXCIpO1xuXHRjb25zdCBjb21wdXRlckdhbWVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbXB1dGVyR2FtZUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlckdhbWVib2FyZENvbnRhaW5lclwiKTtcblxuXHRjcmVhdGVHYW1lQm9hcmQoZ2FtZWJvYXJkUGxheWVyLCBwbGF5ZXJHYW1lQm9hcmQsIFwidXNlclwiKTtcblx0Y3JlYXRlR2FtZUJvYXJkKGdhbWVib2FyZENvbXB1dGVyLCBjb21wdXRlckdhbWVCb2FyZCwgXCJjb21wdXRlclwiKTtcblxuXHRjb25zdCBib2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRib2FyZHMuY2xhc3NMaXN0LmFkZChcImJvYXJkQ29udGFpbmVyXCIpO1xuXHRib2FyZHMuYXBwZW5kQ2hpbGQoY29tcHV0ZXJHYW1lQm9hcmQpO1xuXHRib2FyZHMuYXBwZW5kQ2hpbGQocGxheWVyR2FtZUJvYXJkKTtcblxuXHRyb290LmFwcGVuZENoaWxkKGJvYXJkcyk7XG5cdGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbigpIHtcblx0XHRjb25zdCBwcmV2aW91c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZG9taXplQnV0dG9uXCIpO1xuXHRcdGlmICghcHJldmlvdXNCdXR0b24pIHtcblx0XHRjb25zdCByYW5kb21pemVCb2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0cmFuZG9taXplQm9hcmRCdXR0b24uY2xhc3NMaXN0LmFkZChcInJhbmRvbWl6ZUJ1dHRvblwiKTtcblx0XHRyYW5kb21pemVCb2FyZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUkFORE9NSVpFIFNISVAgUExBQ0VNRU5UXCI7XG5cdFx0cmFuZG9taXplQm9hcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdHJlc2V0R2FtZWJvYXJkKGdhbWVib2FyZENvbXB1dGVyKTtcblx0XHRcdHBsYWNlU2hpcHMocGxheWVyU2hpcHMsIFwiY29tcHV0ZXJcIik7XG5cdFx0XHRjcmVhdGVHYW1lQm9hcmQoZ2FtZWJvYXJkQ29tcHV0ZXIsIGNvbXB1dGVyR2FtZUJvYXJkLCBcImNvbXB1dGVyXCIpO1xuXHRcdH0pO1xuXHRcdHJvb3QuYXBwZW5kQ2hpbGQocmFuZG9taXplQm9hcmRCdXR0b24pO1xuXHR9XG5cdH1cblx0Y3JlYXRlQnV0dG9uKClcblx0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcblx0Y29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmxlbmd0aCA9IGxlbmd0aDtcblx0XHR0aGlzLmhpdHMgPSAwO1xuXHRcdHRoaXMuc3VuayA9IGZhbHNlO1xuXHR9XG5cdGhpdChhbW91bnQpIHtcblx0XHR0aGlzLmhpdHMgKz0gYW1vdW50O1xuXHRcdGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpIHRoaXMuc3VuayA9IHRydWU7XG5cdH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY3JlYXRlQm9hcmQgZnJvbSBcIi4vcmVuZGVyR2FtZWJvYXJkc1wiO1xuaW1wb3J0IEljb24gZnJvbSAnLi9jcnVpc2UucG5nJ1xuXG5mdW5jdGlvbiBtYWluKCkge1xuXHRsZXQgcGxheWVyID0gbmV3IFBsYXllcihcInVzZXJcIik7XG5cdGxldCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoXCJjb21wdXRlclwiKTtcblxuXHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cm9vdC5jbGFzc0xpc3QuYWRkKFwicm9vdFwiKTtcblxuXHRjb25zdCBjcmVhdGVQbGF5ZXJzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Y3JlYXRlUGxheWVyc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ1JFQVRFIFBMQVlFUlNcIjtcblx0Y3JlYXRlUGxheWVyc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IGdhbWUgPSBuZXcgR2FtZWJvYXJkKHBsYXllciwgY29tcHV0ZXIpO1xuXHRcdGNyZWF0ZUJvYXJkKGdhbWUpO1xuXHRcdHJvb3QucmVtb3ZlQ2hpbGQoY3JlYXRlUGxheWVyc0J1dHRvbik7XG5cdH0pO1xuXG5cdHJvb3QuYXBwZW5kQ2hpbGQoY3JlYXRlUGxheWVyc0J1dHRvbik7XG5cdHJldHVybiByb290O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4oKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=