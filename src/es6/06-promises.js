const anotherFunction = () => {
	return new Promise((resolve, reject) => {
		if (false) {
			resolve("Bastaaa!!");
		} else {
			reject("Intentalo de nuevo!");
		}
	});
};

anotherFunction()
	.then((response) => console.log(response))
	.catch((err) => console.log(err));
