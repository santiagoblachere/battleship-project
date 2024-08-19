/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ1hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5QkFBeUIsNkNBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2Q0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2dhbWVib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcblx0Y29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmxlbmd0aCA9IGxlbmd0aDtcblx0XHR0aGlzLmhpdHMgPSAwO1xuXHRcdHRoaXMuc3VuayA9IGZhbHNlO1xuXHR9XG5cdGhpdChhbW91bnQpIHtcblx0XHR0aGlzLmhpdHMgKz0gYW1vdW50O1xuXHRcdGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpIHRoaXMuc3VuayA9IHRydWU7XG5cdH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuXHRjb25zdHJ1Y3Rvcih1c2VyLCBjb21wdXRlcikge1xuXHRcdHRoaXMudXNlciA9IHVzZXI7XG5cdFx0dGhpcy5jb21wdXRlciA9IGNvbXB1dGVyO1xuXHRcdHRoaXMucGxheWVyQSA9IHVzZXIuZ2FtZWJvYXJkO1xuXHRcdHRoaXMucGxheWVyQiA9IGNvbXB1dGVyLmdhbWVib2FyZDtcblx0XHR0aGlzLmF0dGFja3NNaXNzZWRQbGF5ZXJBID0gMDtcblx0XHR0aGlzLmF0dGFja3NNaXNzZWRQbGF5ZXJCID0gMDtcblx0XHR0aGlzLnBsYXllckFMb3N0ID0gZmFsc2U7XG5cdFx0dGhpcy5wbGF5ZXJCTG9zdCA9IGZhbHNlO1xuXHR9XG5cblx0cGxhY2Uoc2hpcCwgcGxheWVyLCBzdGFydCwgZGlyZWN0aW9uKSB7XG5cdFx0bGV0IGdyaWQgPSBwbGF5ZXIgPT09IFwidXNlclwiID8gdGhpcy5wbGF5ZXJBIDogdGhpcy5wbGF5ZXJCO1xuXHRcdGxldCB5ID0gc3RhcnRbMF07XG5cdFx0bGV0IHggPSBzdGFydFsxXTtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcC5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGlmIChcblx0XHRcdFx0eSA8IDAgfHxcblx0XHRcdFx0eSA+PSBncmlkLmxlbmd0aCB8fFxuXHRcdFx0XHR4IDwgMCB8fFxuXHRcdFx0XHR4ID49IGdyaWRbMF0ubGVuZ3RoIHx8XG5cdFx0XHRcdGdyaWRbeV1beF0gIT09IDBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gXCJDQU5UIFBMQUNFIFRIRVJFXCI7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB4LS07XG5cdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHgrKztcblx0XHRcdGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikgeS0tO1xuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHkrKztcblx0XHR9XG5cdFx0eSA9IHN0YXJ0WzBdO1xuXHRcdHggPSBzdGFydFsxXTtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcC5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGdyaWRbeV1beF0gPSBzaGlwO1xuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHgtLTtcblx0XHRcdGlmIChkaXJlY3Rpb24gPT09IFwicmlnaHRcIikgeCsrO1xuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB5LS07XG5cdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikgeSsrO1xuXHRcdH1cblxuXHRcdHJldHVybiBcIlBMQUNFRFwiO1xuXHR9XG5cdHJlY2VpdmVBdHRhY2soY29vcmRzLCBwbGF5ZXIpIHtcblx0XHRsZXQgeSA9IGNvb3Jkc1swXTtcblx0XHRsZXQgeCA9IGNvb3Jkc1sxXTtcblx0XHRsZXQgZ3JpZCA9IHBsYXllciA9PT0gXCJ1c2VyXCIgPyB0aGlzLnBsYXllckEgOiB0aGlzLnBsYXllckI7XG5cdFx0bGV0IGNlbGwgPSBncmlkW3ldW3hdO1xuXHRcdGlmIChjZWxsID09PSAwKSB7XG5cdFx0XHRncmlkW3ldW3hdID0gLTE7XG5cdFx0XHRwbGF5ZXIgPT09IFwidXNlclwiXG5cdFx0XHRcdD8gdGhpcy5hdHRhY2tzTWlzc2VkUGxheWVyQSsrXG5cdFx0XHRcdDogdGhpcy5hdHRhY2tzTWlzc2VkUGxheWVyQisrO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gZWxzZSBpZiAoY2VsbCBpbnN0YW5jZW9mIFNoaXApIHtcblx0XHRcdGNlbGwuaGl0KDEpO1xuXHRcdFx0Z3JpZFt5XVt4XSA9IC0xO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdGNoZWNrR2FtZVN0YXR1cyhwbGF5ZXIpIHtcblx0XHRsZXQgZ3JpZCA9IHBsYXllciA9PT0gXCJ1c2VyXCIgPyB0aGlzLnBsYXllckEgOiB0aGlzLnBsYXllckI7XG5cdFx0bGV0IGhwQ291bnRlciA9IDA7XG5cdFx0XG5cdFx0Zm9yIChsZXQgcm93IG9mIGdyaWQpIHtcblx0XHRcdGZvciAobGV0IGNlbGwgb2Ygcm93KSB7XG5cdFx0XHRcdGlmIChjZWxsIGluc3RhbmNlb2YgU2hpcCAmJiAhY2VsbC5zdW5rKSB7XG5cdFx0XHRcdFx0aHBDb3VudGVyKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc29sZS5sb2coaHBDb3VudGVyKVxuXHRcdGlmIChocENvdW50ZXIgPT09IDApIHtcblx0XHRcdGlmIChwbGF5ZXIgPT09IFwidXNlclwiKSB0aGlzLnBsYXllckFMb3N0ID0gdHJ1ZTtcblx0XHRcdGlmIChwbGF5ZXIgPT09IFwiY29tcHV0ZXJcIikgdGhpcy5wbGF5ZXJCTG9zdCA9IHRydWU7XG5cdFx0fVxuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=