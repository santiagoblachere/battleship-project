import Ship from "./ship";
test("dummy test", () => {
	const ship = new Ship(5);
	expect(ship.length).toBe(5);
});
test("ship getting hit test", () => {
	const ship = new Ship(5);
	ship.hit(6);
	expect(ship.hits).toBe(6);
});
test("ship should be sunk if hp(length) is at 0 (or less)", () => {
	const ship = new Ship(5);
	ship.hit(7);
	expect(ship.sunk).toBe(true);
});
