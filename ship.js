export default class Ship {
	constructor(name, length) {
		this.name = name;
		this.length = length;
		this.hits = 0;
		this.sunk = false;
	}
	hit(amount) {
		this.hits += amount;
		if (this.hits >= this.length) this.sunk = true;
	}
}
