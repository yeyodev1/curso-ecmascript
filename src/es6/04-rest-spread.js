//arrays destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

//Object destructuring

let user = { username: "Diego", age: 17 };
let { username, age } = user;
console.log(username, age);

// Spread operator
let person = { name: "oscar", age: 28 };
let country = "Ecuador";
let data = { ...person, country };
console.log(data);

// rest
function sum(num, ...values) {
	console.log(values);
	console.log(num + values[0]);
	return num + values[0];
}

sum(1, 1, 2, 3);
