// using var
var lastName = "David";
lastName = "Oscarsito";
console.log(lastName);

// using let
let fruit = "Apple";
fruit = "Kiwi";
console.log(fruit);

// using const
const animal = "Dog";
animal = "Cat";
console.log(animal);

const fruits = () => {
	if (true) {
		var fruit1 = "fruit"; //function scope
		let fruit2 = "Kiwi"; // block scope
		const fruit3 = "Banana"; // block scope
	}
	console.log(fruit1);
	console.log(fruit2);
	console.log(fruit3);
};

fruits();
