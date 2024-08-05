import Gameboard from "./gameboard";
import Ship from "./ship";
import Player from "./player";

function main() {
	const root = document.createElement("div");
	const createPlayersButton = document.createElement("button");
	createPlayersButton.textContent = "CREATE PLAYERS";
	const game = new Gameboard("playerA");
	const carrier = new Ship("carrier", 5);
	const player = new Player();
	console.log(game, carrier, player);
	root.appendChild(createPlayersButton);

	return root;
}
document.body.appendChild(main());
