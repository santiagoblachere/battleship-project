import Gameboard from "./gameboard";
import Ship from "./ship";
test("placing ship works", () => {
	const game = new Gameboard("playerA");
	const carrier = new Ship(5);
	game.place(carrier, "playerA", [3, 4], "right");
	expect(game.playerA[3][4]).toBe(1);
	expect(game.playerA[3][5]).toBe(1);
	expect(game.playerA[3][6]).toBe(1);
	expect(game.playerA[3][7]).toBe(1);
	expect(game.playerA[3][8]).toBe(1);
});
test("placing ship outside of work shouldnt be allowed", () => {
	const game = new Gameboard("playerA");
	const carrier = new Ship(5);

	expect(game.place(carrier, "playerA", [3, 300], "right")).toBe(
		"CANT PLACE THERE"
	);
});
test("placing ship on top of eachother shouldnt be allowed", () => {
	const game = new Gameboard("playerA");
	const carrier = new Ship(5);
	const carrierTwo = new Ship(5);
	game.place(carrier, "playerA", [3, 4], "right");
	expect(game.place(carrierTwo, "playerA", [3, 4], "right")).toBe(
		"CANT PLACE THERE"
	);
});
