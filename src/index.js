import Gameboard from "./gameboard";
import Player from "./player";
import "./style.css";
import createBoard from "./renderGameboards";

function main() {
	let player = new Player("user");
	let computer = new Player("computer");

	const root = document.createElement("div");
	root.classList.add("root");

	const createPlayersButton = document.createElement("button");
	createPlayersButton.textContent = "CREATE PLAYERS";
	createPlayersButton.addEventListener("click", () => {
		const game = new Gameboard(player, computer);
		createBoard(player, computer, game);
		root.removeChild(createPlayersButton);
	});

	root.appendChild(createPlayersButton);
	return root;
}

document.body.appendChild(main());
