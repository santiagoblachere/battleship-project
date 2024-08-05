/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");


class Gameboard {
	constructor() {
		this.playerA = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]().gamboard;
		this.playerB = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]().gamboard;
		this.attacksMissedPlayerA = 0;
		this.attacksMissedPlayerB = 0;
		this.playerALost = false;
		this.playerBLost = false;
	}
	place(ship, player, start, direction) {
		// start = [3,4]
		let grid;
		if (player === "playerA") {
			grid = this.playerA;
		} else if (player === "playerB") {
			grid = this.playerB;
		}
		let slotsAvailable = true;

		let y = start[0];
		let x = start[1];
		for (let index = 0; index < ship.length; index++) {
			if (grid[y][x] === undefined || grid[y][x] !== 0) slotsAvailable = false;
			if (direction == "left") {
				x = x - 1;
			}
			if (direction == "right") {
				x = x + 1;
			}
			if (direction == "up") {
				y = y - 1;
			}
			if (direction == "down") {
				y = y + 1;
			}
		}

		if (slotsAvailable == true) {
			let y = start[0];
			let x = start[1];
			for (let index = 0; index < ship.length; index++) {
				grid[y][x] = ship;
				if (direction == "left") {
					x = x - 1;
				}
				if (direction == "right") {
					x = x + 1;
				}
				if (direction == "up") {
					y = y - 1;
				}
				if (direction == "down") {
					y = y + 1;
				}
			}
		} else {
			return "CANT PLACE THERE";
		}
	}
	receiveAttack(coords, player) {
		let y = coords[0];
		let x = coords[1];
		let grid;
		if (player === "playerA") {
			grid = this.playerA;
		} else if (player === "playerB") {
			grid = this.playerB;
		}
		let cell = grid[y][x];
		if (cell === 0) {
			grid[y][x] = -1;
			player === "playerA"
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
		let grid;
		if (player === "playerA") {
			grid = this.playerA;
		} else if (player === "playerB") {
			grid = this.playerB;
		}
		let hpCounter = 0;
		for (let row of grid) {
			for (let cell of row) {
				if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
					hpCounter++;
				}
			}
		}
		if (hpCounter == 0 && player === "playerA") this.playerALost = true;
		else if (hpCounter == 0 && player === "playerB") this.playerBLost = true;
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
// There will be two types of players in the game, ‘real’ players and ‘computer’ players.
// Each player object should contain its own gameboard.

class Player {
	constructor() {
		this.gamboard = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		];
	}
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");




function main() {
	const root = document.createElement("div");
	const createPlayersButton = document.createElement("button");
	createPlayersButton.textContent = "CREATE PLAYERS";
	const game = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]("playerA");
	const carrier = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("carrier", 5);
	const player = new _player__WEBPACK_IMPORTED_MODULE_2__["default"]();
	console.log(game, carrier, player);
	root.appendChild(createPlayersButton);

	return root;
}
document.body.appendChild(main());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDSTtBQUNmO0FBQ2Y7QUFDQSxxQkFBcUIsK0NBQU07QUFDM0IscUJBQXFCLCtDQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5QkFBeUIsNkNBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckdBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ1Y7QUFDSTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0RBQVM7QUFDM0IscUJBQXFCLDZDQUFJO0FBQ3pCLG9CQUFvQiwrQ0FBTTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucGxheWVyQSA9IG5ldyBQbGF5ZXIoKS5nYW1ib2FyZDtcblx0XHR0aGlzLnBsYXllckIgPSBuZXcgUGxheWVyKCkuZ2FtYm9hcmQ7XG5cdFx0dGhpcy5hdHRhY2tzTWlzc2VkUGxheWVyQSA9IDA7XG5cdFx0dGhpcy5hdHRhY2tzTWlzc2VkUGxheWVyQiA9IDA7XG5cdFx0dGhpcy5wbGF5ZXJBTG9zdCA9IGZhbHNlO1xuXHRcdHRoaXMucGxheWVyQkxvc3QgPSBmYWxzZTtcblx0fVxuXHRwbGFjZShzaGlwLCBwbGF5ZXIsIHN0YXJ0LCBkaXJlY3Rpb24pIHtcblx0XHQvLyBzdGFydCA9IFszLDRdXG5cdFx0bGV0IGdyaWQ7XG5cdFx0aWYgKHBsYXllciA9PT0gXCJwbGF5ZXJBXCIpIHtcblx0XHRcdGdyaWQgPSB0aGlzLnBsYXllckE7XG5cdFx0fSBlbHNlIGlmIChwbGF5ZXIgPT09IFwicGxheWVyQlwiKSB7XG5cdFx0XHRncmlkID0gdGhpcy5wbGF5ZXJCO1xuXHRcdH1cblx0XHRsZXQgc2xvdHNBdmFpbGFibGUgPSB0cnVlO1xuXG5cdFx0bGV0IHkgPSBzdGFydFswXTtcblx0XHRsZXQgeCA9IHN0YXJ0WzFdO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0aWYgKGdyaWRbeV1beF0gPT09IHVuZGVmaW5lZCB8fCBncmlkW3ldW3hdICE9PSAwKSBzbG90c0F2YWlsYWJsZSA9IGZhbHNlO1xuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PSBcImxlZnRcIikge1xuXHRcdFx0XHR4ID0geCAtIDE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyZWN0aW9uID09IFwicmlnaHRcIikge1xuXHRcdFx0XHR4ID0geCArIDE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyZWN0aW9uID09IFwidXBcIikge1xuXHRcdFx0XHR5ID0geSAtIDE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyZWN0aW9uID09IFwiZG93blwiKSB7XG5cdFx0XHRcdHkgPSB5ICsgMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoc2xvdHNBdmFpbGFibGUgPT0gdHJ1ZSkge1xuXHRcdFx0bGV0IHkgPSBzdGFydFswXTtcblx0XHRcdGxldCB4ID0gc3RhcnRbMV07XG5cdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcC5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0Z3JpZFt5XVt4XSA9IHNoaXA7XG5cdFx0XHRcdGlmIChkaXJlY3Rpb24gPT0gXCJsZWZ0XCIpIHtcblx0XHRcdFx0XHR4ID0geCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PSBcInJpZ2h0XCIpIHtcblx0XHRcdFx0XHR4ID0geCArIDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PSBcInVwXCIpIHtcblx0XHRcdFx0XHR5ID0geSAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PSBcImRvd25cIikge1xuXHRcdFx0XHRcdHkgPSB5ICsgMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gXCJDQU5UIFBMQUNFIFRIRVJFXCI7XG5cdFx0fVxuXHR9XG5cdHJlY2VpdmVBdHRhY2soY29vcmRzLCBwbGF5ZXIpIHtcblx0XHRsZXQgeSA9IGNvb3Jkc1swXTtcblx0XHRsZXQgeCA9IGNvb3Jkc1sxXTtcblx0XHRsZXQgZ3JpZDtcblx0XHRpZiAocGxheWVyID09PSBcInBsYXllckFcIikge1xuXHRcdFx0Z3JpZCA9IHRoaXMucGxheWVyQTtcblx0XHR9IGVsc2UgaWYgKHBsYXllciA9PT0gXCJwbGF5ZXJCXCIpIHtcblx0XHRcdGdyaWQgPSB0aGlzLnBsYXllckI7XG5cdFx0fVxuXHRcdGxldCBjZWxsID0gZ3JpZFt5XVt4XTtcblx0XHRpZiAoY2VsbCA9PT0gMCkge1xuXHRcdFx0Z3JpZFt5XVt4XSA9IC0xO1xuXHRcdFx0cGxheWVyID09PSBcInBsYXllckFcIlxuXHRcdFx0XHQ/IHRoaXMuYXR0YWNrc01pc3NlZFBsYXllckErK1xuXHRcdFx0XHQ6IHRoaXMuYXR0YWNrc01pc3NlZFBsYXllckIrKztcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2UgaWYgKGNlbGwgaW5zdGFuY2VvZiBTaGlwKSB7XG5cdFx0XHRjZWxsLmhpdCgxKTtcblx0XHRcdGdyaWRbeV1beF0gPSAtMTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRjaGVja0dhbWVTdGF0dXMocGxheWVyKSB7XG5cdFx0bGV0IGdyaWQ7XG5cdFx0aWYgKHBsYXllciA9PT0gXCJwbGF5ZXJBXCIpIHtcblx0XHRcdGdyaWQgPSB0aGlzLnBsYXllckE7XG5cdFx0fSBlbHNlIGlmIChwbGF5ZXIgPT09IFwicGxheWVyQlwiKSB7XG5cdFx0XHRncmlkID0gdGhpcy5wbGF5ZXJCO1xuXHRcdH1cblx0XHRsZXQgaHBDb3VudGVyID0gMDtcblx0XHRmb3IgKGxldCByb3cgb2YgZ3JpZCkge1xuXHRcdFx0Zm9yIChsZXQgY2VsbCBvZiByb3cpIHtcblx0XHRcdFx0aWYgKGNlbGwgaW5zdGFuY2VvZiBTaGlwKSB7XG5cdFx0XHRcdFx0aHBDb3VudGVyKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGhwQ291bnRlciA9PSAwICYmIHBsYXllciA9PT0gXCJwbGF5ZXJBXCIpIHRoaXMucGxheWVyQUxvc3QgPSB0cnVlO1xuXHRcdGVsc2UgaWYgKGhwQ291bnRlciA9PSAwICYmIHBsYXllciA9PT0gXCJwbGF5ZXJCXCIpIHRoaXMucGxheWVyQkxvc3QgPSB0cnVlO1xuXHR9XG59XG4iLCIvLyBUaGVyZSB3aWxsIGJlIHR3byB0eXBlcyBvZiBwbGF5ZXJzIGluIHRoZSBnYW1lLCDigJhyZWFs4oCZIHBsYXllcnMgYW5kIOKAmGNvbXB1dGVy4oCZIHBsYXllcnMuXG4vLyBFYWNoIHBsYXllciBvYmplY3Qgc2hvdWxkIGNvbnRhaW4gaXRzIG93biBnYW1lYm9hcmQuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuZ2FtYm9hcmQgPSBbXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5sZW5ndGggPSBsZW5ndGg7XG5cdFx0dGhpcy5oaXRzID0gMDtcblx0XHR0aGlzLnN1bmsgPSBmYWxzZTtcblx0fVxuXHRoaXQoYW1vdW50KSB7XG5cdFx0dGhpcy5oaXRzICs9IGFtb3VudDtcblx0XHRpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSB0aGlzLnN1bmsgPSB0cnVlO1xuXHR9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5mdW5jdGlvbiBtYWluKCkge1xuXHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgY3JlYXRlUGxheWVyc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNyZWF0ZVBsYXllcnNCdXR0b24udGV4dENvbnRlbnQgPSBcIkNSRUFURSBQTEFZRVJTXCI7XG5cdGNvbnN0IGdhbWUgPSBuZXcgR2FtZWJvYXJkKFwicGxheWVyQVwiKTtcblx0Y29uc3QgY2FycmllciA9IG5ldyBTaGlwKFwiY2FycmllclwiLCA1KTtcblx0Y29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuXHRjb25zb2xlLmxvZyhnYW1lLCBjYXJyaWVyLCBwbGF5ZXIpO1xuXHRyb290LmFwcGVuZENoaWxkKGNyZWF0ZVBsYXllcnNCdXR0b24pO1xuXG5cdHJldHVybiByb290O1xufVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9