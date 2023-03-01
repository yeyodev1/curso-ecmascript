const fnAsync = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => resolve("Async"), 2000)
			: reject(new Error("Error!!"));
	});
};

const anotherFn = () => {
	const something = fnAsync();
	console.log(something);
	console.log("Holaaa");
};

console.log("Before");
anotherFn();
console.log("After");
