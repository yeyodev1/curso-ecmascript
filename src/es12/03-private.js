class user {
	//constructor
	constructor() {
		console.log("Holaa personita nueva!");
	}
	greeting() {
		return "Hello!!";
	}
}
const diego = new user();

//this
class user {
	constructor(name) {
		this.name = name;
	}
	//metodos
	speak() {
		return "Heyy!!";
	}
	greeting() {
		return `${this.speak()} ${this.name}`;
	}
}

const diego2 = new user("diegooo");
console.log(diego2.greeting());

// setters getters
class user {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	//metodos
	#speak() {
		return "Hello";
	}
	greeting() {
		return `${this.speak()} ${this.name}`;
	}
	get #uAge() {
		return this.age;
	}
	set #uAge(n) {
		this.age = n;
	}
}

const bebeloper1 = new user("Diego", 15);
console.log(bebeloper1.uAge);
console.log((bebeloper1.uAge = 20));
