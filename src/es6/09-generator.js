function* iterate(array) {
	for (let value of array) {
		yield value;
	}
}

const it = iterate(["Diego", "Esteban", "Fiorella", "David"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
