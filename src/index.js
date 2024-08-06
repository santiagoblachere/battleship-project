import Gameboard from "./gameboard";
import Player from "./player";
import "./style.css";
function main() {
	const root = document.createElement("div");
	root.classList.add("root");
	const createPlayersButton = document.createElement("button");
	createPlayersButton.textContent = "CREATE PLAYERS";
	const playerGameBoard = document.createElement("div");
	playerGameBoard.textContent = "";
	playerGameBoard.classList.add("gameboardContainer");
	const computerGameBoard = document.createElement("div");
	computerGameBoard.classList.add("computerGameboardContainer");
	computerGameBoard.textContent = "";
	createPlayersButton.addEventListener("click", () => {
		let player = new Player("user");
		let computer = new Player("computer");
		const game = new Gameboard(player, computer);

		createBoard(player);
		createBoard(computer);
	});
	function createBoard(player) {
		let gameboard = player.gameboard;
		gameboard.forEach((row) => {
			row.forEach(() => {
				let cell = document.createElement("div");
				cell.classList.add("cell");
				player.name === "user"
					? playerGameBoard.appendChild(cell)
					: computerGameBoard.appendChild(cell);
			});
		});
	}
	root.appendChild(createPlayersButton);
	root.appendChild(playerGameBoard);
	root.appendChild(computerGameBoard);
	return root;
}
document.body.appendChild(main());
