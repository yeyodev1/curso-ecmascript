const user = { username: "yeyodev", age: 23, country: "EC" };
const { username, ...values } = user;
console.log(username);
console.log(values);
