function newUser(name, age, country) {
	var name = name || "Diego";
	var age = age || 20;
	var country = country || "Ecuador";
	console.log(name, age, country);
}

newUser();
newUser("Paulo", 21, "Polonia");

//It works to forms
function newAdmin(name = "Oscar", age = "23", country = "US") {
	console.log(name, age, country);
}

newAdmin();
newAdmin("Fiorella", 18, "Ecuador");
