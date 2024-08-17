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
		console.log("Player A Board:", this.playerA);
		console.log("Player B Board:", this.playerB);
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
			console.log(cell.hits);
			grid[y][x] = -1;
			return true;
		}
	}
	checkGameStatus(player) {
		console.log(player);
		let grid = player === "user" ? this.playerA : this.playerB;
		let hpCounter = 0;

		for (let row of grid) {
			for (let cell of row) {
				if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"] && !cell.sunk) {
					hpCounter++;
				}
			}
		}

		console.log(hpCounter);

		if (hpCounter === 0) {
			if (player === "user") this.playerALost = true;
			if (player === "computer") this.playerBLost = true;
		}
	}
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ1hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlCQUF5Qiw2Q0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDZDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9nYW1lYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5sZW5ndGggPSBsZW5ndGg7XG5cdFx0dGhpcy5oaXRzID0gMDtcblx0XHR0aGlzLnN1bmsgPSBmYWxzZTtcblx0fVxuXHRoaXQoYW1vdW50KSB7XG5cdFx0dGhpcy5oaXRzICs9IGFtb3VudDtcblx0XHRpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSB0aGlzLnN1bmsgPSB0cnVlO1xuXHR9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcblx0Y29uc3RydWN0b3IodXNlciwgY29tcHV0ZXIpIHtcblx0XHR0aGlzLnVzZXIgPSB1c2VyO1xuXHRcdHRoaXMuY29tcHV0ZXIgPSBjb21wdXRlcjtcblx0XHR0aGlzLnBsYXllckEgPSB1c2VyLmdhbWVib2FyZDtcblx0XHR0aGlzLnBsYXllckIgPSBjb21wdXRlci5nYW1lYm9hcmQ7XG5cdFx0dGhpcy5hdHRhY2tzTWlzc2VkUGxheWVyQSA9IDA7XG5cdFx0dGhpcy5hdHRhY2tzTWlzc2VkUGxheWVyQiA9IDA7XG5cdFx0dGhpcy5wbGF5ZXJBTG9zdCA9IGZhbHNlO1xuXHRcdHRoaXMucGxheWVyQkxvc3QgPSBmYWxzZTtcblx0fVxuXG5cdHBsYWNlKHNoaXAsIHBsYXllciwgc3RhcnQsIGRpcmVjdGlvbikge1xuXHRcdGxldCBncmlkID0gcGxheWVyID09PSBcInVzZXJcIiA/IHRoaXMucGxheWVyQSA6IHRoaXMucGxheWVyQjtcblx0XHRjb25zb2xlLmxvZyhcIlBsYXllciBBIEJvYXJkOlwiLCB0aGlzLnBsYXllckEpO1xuXHRcdGNvbnNvbGUubG9nKFwiUGxheWVyIEIgQm9hcmQ6XCIsIHRoaXMucGxheWVyQik7XG5cdFx0bGV0IHkgPSBzdGFydFswXTtcblx0XHRsZXQgeCA9IHN0YXJ0WzFdO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR5IDwgMCB8fFxuXHRcdFx0XHR5ID49IGdyaWQubGVuZ3RoIHx8XG5cdFx0XHRcdHggPCAwIHx8XG5cdFx0XHRcdHggPj0gZ3JpZFswXS5sZW5ndGggfHxcblx0XHRcdFx0Z3JpZFt5XVt4XSAhPT0gMFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybiBcIkNBTlQgUExBQ0UgVEhFUkVcIjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHgtLTtcblx0XHRcdGlmIChkaXJlY3Rpb24gPT09IFwicmlnaHRcIikgeCsrO1xuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB5LS07XG5cdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikgeSsrO1xuXHRcdH1cblx0XHR5ID0gc3RhcnRbMF07XG5cdFx0eCA9IHN0YXJ0WzFdO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0Z3JpZFt5XVt4XSA9IHNoaXA7XG5cdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikgeC0tO1xuXHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB4Kys7XG5cdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHktLTtcblx0XHRcdGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB5Kys7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFwiUExBQ0VEXCI7XG5cdH1cblx0cmVjZWl2ZUF0dGFjayhjb29yZHMsIHBsYXllcikge1xuXHRcdGxldCB5ID0gY29vcmRzWzBdO1xuXHRcdGxldCB4ID0gY29vcmRzWzFdO1xuXHRcdGxldCBncmlkID0gcGxheWVyID09PSBcInVzZXJcIiA/IHRoaXMucGxheWVyQSA6IHRoaXMucGxheWVyQjtcblx0XHRsZXQgY2VsbCA9IGdyaWRbeV1beF07XG5cblx0XHRpZiAoY2VsbCA9PT0gMCkge1xuXHRcdFx0Z3JpZFt5XVt4XSA9IC0xO1xuXHRcdFx0cGxheWVyID09PSBcInVzZXJcIlxuXHRcdFx0XHQ/IHRoaXMuYXR0YWNrc01pc3NlZFBsYXllckErK1xuXHRcdFx0XHQ6IHRoaXMuYXR0YWNrc01pc3NlZFBsYXllckIrKztcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2UgaWYgKGNlbGwgaW5zdGFuY2VvZiBTaGlwKSB7XG5cdFx0XHRjZWxsLmhpdCgxKTtcblx0XHRcdGNvbnNvbGUubG9nKGNlbGwuaGl0cyk7XG5cdFx0XHRncmlkW3ldW3hdID0gLTE7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0Y2hlY2tHYW1lU3RhdHVzKHBsYXllcikge1xuXHRcdGNvbnNvbGUubG9nKHBsYXllcik7XG5cdFx0bGV0IGdyaWQgPSBwbGF5ZXIgPT09IFwidXNlclwiID8gdGhpcy5wbGF5ZXJBIDogdGhpcy5wbGF5ZXJCO1xuXHRcdGxldCBocENvdW50ZXIgPSAwO1xuXG5cdFx0Zm9yIChsZXQgcm93IG9mIGdyaWQpIHtcblx0XHRcdGZvciAobGV0IGNlbGwgb2Ygcm93KSB7XG5cdFx0XHRcdGlmIChjZWxsIGluc3RhbmNlb2YgU2hpcCAmJiAhY2VsbC5zdW5rKSB7XG5cdFx0XHRcdFx0aHBDb3VudGVyKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyhocENvdW50ZXIpO1xuXG5cdFx0aWYgKGhwQ291bnRlciA9PT0gMCkge1xuXHRcdFx0aWYgKHBsYXllciA9PT0gXCJ1c2VyXCIpIHRoaXMucGxheWVyQUxvc3QgPSB0cnVlO1xuXHRcdFx0aWYgKHBsYXllciA9PT0gXCJjb21wdXRlclwiKSB0aGlzLnBsYXllckJMb3N0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==