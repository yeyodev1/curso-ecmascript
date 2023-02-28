//enhaced object literals

function newUser(user, age, country, uId) {
	return {
		user,
		age,
		country,
		uId,
	};
}

console.log(newUser("yeyodev", 17, "ec", 1));
