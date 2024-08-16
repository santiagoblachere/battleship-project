import Ship from "./ship";

export default function createBoard(player, computer, game) {
	const root = document.querySelector(".root");
	const createShips = () => {
		return [
			{ first: new Ship("carrier", 5) },
			{
				first: new Ship("battleship", 4),
				second: new Ship("battleship", 4),
			},
			{
				first: new Ship("cruiser", 3),
				second: new Ship("cruiser", 3),
				third: new Ship("cruiser", 3),
			},
			{
				first: new Ship("submarine", 2),
				second: new Ship("submarine", 2),
				third: new Ship("submarine", 2),
				fourth: new Ship("submarine", 2),
			},
			{
				first: new Ship("destroyer", 1),
				second: new Ship("destroyer", 1),
				third: new Ship("destroyer", 1),
				fourth: new Ship("destroyer", 1),
				fifth: new Ship("destroyer", 1),
			},
		];
	};
	const resetGameboard = (board) => {
		board.forEach((row, rowIndex) => {
			board[rowIndex] = row.map(() => 0);
		});
	};

	const placeShips = (ships, player) => {
		const getRandomCoords = (max) => Math.floor(Math.random() * max);
		const getRandomDirection = () =>
			["left", "up", "right", "down"][Math.floor(Math.random() * 4)];

		ships.forEach((shipModel) => {
			Object.values(shipModel).forEach((ship) => {
				let unplaced = true;
				while (unplaced) {
					const y = getRandomCoords(10);
					const x = getRandomCoords(10);
					const dir = getRandomDirection();
					const placementResult = game.place(ship, player, [y, x], dir);
					if (placementResult !== "CANT PLACE THERE") unplaced = false;
				}
			});
		});
	};

	const createGameBoard = (board, container, player) => {
		container.innerHTML = "";
		console.log(board);
		board.forEach((row, rowIndex) => {
			row.forEach((cellValue, colIndex) => {
				const cell = document.createElement("div");
				cell.dataset.row = rowIndex;
				cell.dataset.col = colIndex;
				if (player === "computer") {
					cell.classList.add(
						board[rowIndex][colIndex] instanceof Ship
							? "shipCell"
							: "computerCell"
					);
				} else {
					cell.classList.add("cell");
				}

				if (player === "user") {
					cell.addEventListener("click", () => {
						if (playerTurn) {
							const hit = game.receiveAttack([rowIndex, colIndex], "computer");
							playerTurn = false;
							cell.classList.add(hit ? "clicked" : "sunk");
							cell.style.pointerEvents = "none";
							cell.textContent = hit ? "X" : "-1";

							game.checkGameStatus(player);
							if (game.playerBLost) alert("PERDIO ALGUIEN");

							setTimeout(() => {
								computerTurn(game.user);
								game.checkGameStatus(game.playerA);
								if (game.playerALost) alert("PERDIO ALGUIEN");
							}, 500);
						}
					});
				}

				container.appendChild(cell);
			});
		});
	};

	const computerTurn = (opponent) => {
		let y, x;
		console.log(opponent);
		const grid = opponent.gameboard;

		do {
			y = Math.floor(Math.random() * 10);
			x = Math.floor(Math.random() * 10);
		} while (grid[y][x] === -1 || typeof grid[y][x] === "object");

		game.receiveAttack([y, x], "user");

		const playerBoardCells =
			computerGameBoard.querySelectorAll(".cell, .shipCell");
		playerBoardCells.forEach((cell) => {
			if (Number(cell.dataset.row) === y && Number(cell.dataset.col) === x) {
				cell.textContent = "-1";
				cell.classList.add("clicked");
			}
		});

		playerTurn = true;
	};

	const playerShips = createShips();
	const computerShips = createShips();
	placeShips(playerShips, "computer");
	placeShips(computerShips, "user");
	const gameboardPlayer = game.playerA;
	const gameboardComputer = game.playerB;
	let playerTurn = true;
	const playerGameBoard = document.createElement("div");
	playerGameBoard.classList.add("gameboardContainer");
	const computerGameBoard = document.createElement("div");
	computerGameBoard.classList.add("computerGameboardContainer");

	createGameBoard(gameboardPlayer, playerGameBoard, "user");
	createGameBoard(gameboardComputer, computerGameBoard, "computer");

	const boards = document.createElement("div");
	boards.classList.add("boardContainer");
	boards.appendChild(computerGameBoard);
	boards.appendChild(playerGameBoard);

	root.appendChild(boards);

	const previousButton = document.querySelector(".randomizeButton");
	if (!previousButton) {
		const randomizeBoardButton = document.createElement("button");
		randomizeBoardButton.classList.add("randomizeButton");
		randomizeBoardButton.textContent = "RANDOMIZE SHIP PLACEMENT";
		randomizeBoardButton.addEventListener("click", () => {
			// Reset the gameboard before placing new ships
			resetGameboard(gameboardComputer);
			placeShips(playerShips, "computer");
			createGameBoard(gameboardComputer, computerGameBoard, "computer");
		});
		root.appendChild(randomizeBoardButton);
	}
}
