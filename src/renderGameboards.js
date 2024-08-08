export default function createBoard(player, computer, game) {
	let playerTurn = true;
	const playerGameBoard = document.createElement("div");
	playerGameBoard.textContent = "";
	playerGameBoard.classList.add("gameboardContainer");
	const computerGameBoard = document.createElement("div");
	computerGameBoard.classList.add("computerGameboardContainer");
	computerGameBoard.textContent = "";
	let gameboardPlayer = player.gameboard;
	let gameboardComputer = computer.gameboard;
	function createGameBoard(board, container) {
		board.forEach((row, rowIndex) => {
			row.forEach((cellValue, colIndex) => {
				let cell = document.createElement("div");
				cell.classList.add("cell");
				cell.dataset.row = rowIndex;
				cell.dataset.col = colIndex;
				container.appendChild(cell);
				cell.addEventListener("click", () => {
					let row = Number(cell.dataset.row);
					let col = Number(cell.dataset.col);
					console.log(`Cell clicked at row: ${row}, col: ${col}`);
					if (playerTurn === true) {
						game.receiveAttack([row, col], computer);
						cell.textContent = "-1";
						playerTurn = !playerTurn;
						setTimeout(() => {
							computerTurn(player);
						}, 500);
					}
				});
			});
		});
	}
	function computerTurn(opponent) {
		let y, x;
		let grid = opponent.gameboard;
		do {
			y = Math.floor(Math.random() * 10);
			x = Math.floor(Math.random() * 10);
		} while (grid[y][x] === -1);
		console.log(y, x);
		console.log(`Computer attacks at row: ${y}, col: ${x}`);
		game.receiveAttack([y, x], player); // Adjust the player reference as needed

		const playerBoardCells = playerGameBoard.querySelectorAll(".cell");
		playerBoardCells.forEach((cell) => {
			if (Number(cell.dataset.row) === y && Number(cell.dataset.col) === x) {
				cell.textContent = "-1";
			}
		});

		playerTurn = true;
	}
	createGameBoard(gameboardPlayer, playerGameBoard);
	createGameBoard(gameboardComputer, computerGameBoard);
	const boards = document.createElement("div");
	boards.classList.add("boardContainer");
	boards.appendChild(computerGameBoard);
	boards.appendChild(playerGameBoard);
	const root = document.querySelector(".root");
	root.appendChild(boards);
}
