export default class Player {
	constructor(name) {
		this.name = name;
		this.gameboard = Array.from({ length: 10 }, () => Array(10).fill(0));
	}
}
