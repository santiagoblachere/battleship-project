import Ship from "./ship";

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
		} else if (cell instanceof Ship) {
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
				if (cell instanceof Ship && !cell.sunk) {
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
