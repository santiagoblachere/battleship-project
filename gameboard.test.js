import Gameboard from "./gameboard";
import Ship from "./ship";
test("placing ship works", () => {
	const game = new Gameboard("playerA");
	const carrier = new Ship("carrier", 5);
	game.place(carrier, "playerA", [3, 4], "right");
	expect(game.playerA[3][4]).toBe(carrier);
	expect(game.playerA[3][5]).toBe(carrier);
	expect(game.playerA[3][6]).toBe(carrier);
	expect(game.playerA[3][7]).toBe(carrier);
	expect(game.playerA[3][8]).toBe(carrier);
});
test("placing ship outside of work shouldnt be allowed", () => {
	const game = new Gameboard("playerA");
	const carrier = new Ship("carrier", 5);

	expect(game.place(carrier, "playerA", [3, 300], "right")).toBe(
		"CANT PLACE THERE"
	);
});
test("placing ship on top of eachother shouldnt be allowed", () => {
	const game = new Gameboard();
	const carrier = new Ship("carrier", 5);
	const carrierTwo = new Ship("carrier", 5);
	game.place(carrier, "playerA", [3, 4], "right");
	expect(game.place(carrierTwo, "playerA", [3, 4], "right")).toBe(
		"CANT PLACE THERE"
	);
});
test("when placing fails, board slots used should be reset to 0", () => {
	const game = new Gameboard();
	const carrier = new Ship("carrier", 5);
	const carrierTwo = new Ship("carrier", 5);
	game.place(carrier, "playerB", [3, 4], "right");
	game.place(carrierTwo, "playerB", [3, 4], "right");
	expect(game.playerB[2][4]).toBe(0);
});

// RECIEVE ATTACK TESTS

test("when recieiving an attack, determine if it misses a ship and count it", () => {
	const game = new Gameboard();

	expect(game.receiveAttack([3, 4], "playerB")).toBe(false);
	expect(game.attacksMissedPlayerB).toBe(1);
	expect(game.receiveAttack([3, 4], "playerA")).toBe(false);
	expect(game.attacksMissedPlayerA).toBe(1);
});
test("when recieiving an attack, determine if it hits a ship", () => {
	const game = new Gameboard();
	const carrier = new Ship("carrier", 5);
	game.place(carrier, "playerB", [3, 4], "right");
	expect(game.receiveAttack([3, 4], "playerB")).toBe(true);
});
test("when it DOES hit a ship, damage it!", () => {
	const game = new Gameboard();
	const carrier = new Ship("carrier", 5);
	game.place(carrier, "playerB", [3, 4], "right");
	expect(game.receiveAttack([3, 4], "playerB")).toBe(true);
	expect(game.playerB[3][4]).toBe(-1);
	expect(carrier.hits).toBe(1);
});
test("at 0 ships left, playerA should lose", () => {
	const game = new Gameboard();
	game.receiveAttack([3, 4], "playerA");
	game.checkGameStatus("playerA");
	expect(game.playerALost).toBe(true);
});
