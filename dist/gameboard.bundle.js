/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDSTtBQUNmO0FBQ2Y7QUFDQSxxQkFBcUIsK0NBQU07QUFDM0IscUJBQXFCLCtDQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5QkFBeUIsNkNBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2dhbWVib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGVyZSB3aWxsIGJlIHR3byB0eXBlcyBvZiBwbGF5ZXJzIGluIHRoZSBnYW1lLCDigJhyZWFs4oCZIHBsYXllcnMgYW5kIOKAmGNvbXB1dGVy4oCZIHBsYXllcnMuXG4vLyBFYWNoIHBsYXllciBvYmplY3Qgc2hvdWxkIGNvbnRhaW4gaXRzIG93biBnYW1lYm9hcmQuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuZ2FtYm9hcmQgPSBbXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5sZW5ndGggPSBsZW5ndGg7XG5cdFx0dGhpcy5oaXRzID0gMDtcblx0XHR0aGlzLnN1bmsgPSBmYWxzZTtcblx0fVxuXHRoaXQoYW1vdW50KSB7XG5cdFx0dGhpcy5oaXRzICs9IGFtb3VudDtcblx0XHRpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSB0aGlzLnN1bmsgPSB0cnVlO1xuXHR9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnBsYXllckEgPSBuZXcgUGxheWVyKCkuZ2FtYm9hcmQ7XG5cdFx0dGhpcy5wbGF5ZXJCID0gbmV3IFBsYXllcigpLmdhbWJvYXJkO1xuXHRcdHRoaXMuYXR0YWNrc01pc3NlZFBsYXllckEgPSAwO1xuXHRcdHRoaXMuYXR0YWNrc01pc3NlZFBsYXllckIgPSAwO1xuXHRcdHRoaXMucGxheWVyQUxvc3QgPSBmYWxzZTtcblx0XHR0aGlzLnBsYXllckJMb3N0ID0gZmFsc2U7XG5cdH1cblx0cGxhY2Uoc2hpcCwgcGxheWVyLCBzdGFydCwgZGlyZWN0aW9uKSB7XG5cdFx0Ly8gc3RhcnQgPSBbMyw0XVxuXHRcdGxldCBncmlkO1xuXHRcdGlmIChwbGF5ZXIgPT09IFwicGxheWVyQVwiKSB7XG5cdFx0XHRncmlkID0gdGhpcy5wbGF5ZXJBO1xuXHRcdH0gZWxzZSBpZiAocGxheWVyID09PSBcInBsYXllckJcIikge1xuXHRcdFx0Z3JpZCA9IHRoaXMucGxheWVyQjtcblx0XHR9XG5cdFx0bGV0IHNsb3RzQXZhaWxhYmxlID0gdHJ1ZTtcblxuXHRcdGxldCB5ID0gc3RhcnRbMF07XG5cdFx0bGV0IHggPSBzdGFydFsxXTtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcC5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGlmIChncmlkW3ldW3hdID09PSB1bmRlZmluZWQgfHwgZ3JpZFt5XVt4XSAhPT0gMCkgc2xvdHNBdmFpbGFibGUgPSBmYWxzZTtcblx0XHRcdGlmIChkaXJlY3Rpb24gPT0gXCJsZWZ0XCIpIHtcblx0XHRcdFx0eCA9IHggLSAxO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PSBcInJpZ2h0XCIpIHtcblx0XHRcdFx0eCA9IHggKyAxO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PSBcInVwXCIpIHtcblx0XHRcdFx0eSA9IHkgLSAxO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PSBcImRvd25cIikge1xuXHRcdFx0XHR5ID0geSArIDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHNsb3RzQXZhaWxhYmxlID09IHRydWUpIHtcblx0XHRcdGxldCB5ID0gc3RhcnRbMF07XG5cdFx0XHRsZXQgeCA9IHN0YXJ0WzFdO1xuXHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNoaXAubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRcdGdyaWRbeV1beF0gPSBzaGlwO1xuXHRcdFx0XHRpZiAoZGlyZWN0aW9uID09IFwibGVmdFwiKSB7XG5cdFx0XHRcdFx0eCA9IHggLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiKSB7XG5cdFx0XHRcdFx0eCA9IHggKyAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkaXJlY3Rpb24gPT0gXCJ1cFwiKSB7XG5cdFx0XHRcdFx0eSA9IHkgLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkaXJlY3Rpb24gPT0gXCJkb3duXCIpIHtcblx0XHRcdFx0XHR5ID0geSArIDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFwiQ0FOVCBQTEFDRSBUSEVSRVwiO1xuXHRcdH1cblx0fVxuXHRyZWNlaXZlQXR0YWNrKGNvb3JkcywgcGxheWVyKSB7XG5cdFx0bGV0IHkgPSBjb29yZHNbMF07XG5cdFx0bGV0IHggPSBjb29yZHNbMV07XG5cdFx0bGV0IGdyaWQ7XG5cdFx0aWYgKHBsYXllciA9PT0gXCJwbGF5ZXJBXCIpIHtcblx0XHRcdGdyaWQgPSB0aGlzLnBsYXllckE7XG5cdFx0fSBlbHNlIGlmIChwbGF5ZXIgPT09IFwicGxheWVyQlwiKSB7XG5cdFx0XHRncmlkID0gdGhpcy5wbGF5ZXJCO1xuXHRcdH1cblx0XHRsZXQgY2VsbCA9IGdyaWRbeV1beF07XG5cdFx0aWYgKGNlbGwgPT09IDApIHtcblx0XHRcdGdyaWRbeV1beF0gPSAtMTtcblx0XHRcdHBsYXllciA9PT0gXCJwbGF5ZXJBXCJcblx0XHRcdFx0PyB0aGlzLmF0dGFja3NNaXNzZWRQbGF5ZXJBKytcblx0XHRcdFx0OiB0aGlzLmF0dGFja3NNaXNzZWRQbGF5ZXJCKys7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIGlmIChjZWxsIGluc3RhbmNlb2YgU2hpcCkge1xuXHRcdFx0Y2VsbC5oaXQoMSk7XG5cdFx0XHRncmlkW3ldW3hdID0gLTE7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0Y2hlY2tHYW1lU3RhdHVzKHBsYXllcikge1xuXHRcdGxldCBncmlkO1xuXHRcdGlmIChwbGF5ZXIgPT09IFwicGxheWVyQVwiKSB7XG5cdFx0XHRncmlkID0gdGhpcy5wbGF5ZXJBO1xuXHRcdH0gZWxzZSBpZiAocGxheWVyID09PSBcInBsYXllckJcIikge1xuXHRcdFx0Z3JpZCA9IHRoaXMucGxheWVyQjtcblx0XHR9XG5cdFx0bGV0IGhwQ291bnRlciA9IDA7XG5cdFx0Zm9yIChsZXQgcm93IG9mIGdyaWQpIHtcblx0XHRcdGZvciAobGV0IGNlbGwgb2Ygcm93KSB7XG5cdFx0XHRcdGlmIChjZWxsIGluc3RhbmNlb2YgU2hpcCkge1xuXHRcdFx0XHRcdGhwQ291bnRlcisrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChocENvdW50ZXIgPT0gMCAmJiBwbGF5ZXIgPT09IFwicGxheWVyQVwiKSB0aGlzLnBsYXllckFMb3N0ID0gdHJ1ZTtcblx0XHRlbHNlIGlmIChocENvdW50ZXIgPT0gMCAmJiBwbGF5ZXIgPT09IFwicGxheWVyQlwiKSB0aGlzLnBsYXllckJMb3N0ID0gdHJ1ZTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9