import Ship from "./ship";
import Player from "./player";
export default class Gameboard {
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
		} else if (cell instanceof Ship) {
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
				if (cell instanceof Ship) {
					hpCounter++;
				}
			}
		}
		if (hpCounter == 0 && player === "playerA") this.playerALost = true;
		else if (hpCounter == 0 && player === "playerB") this.playerBLost = true;
	}
}
