
var searchField = document.getElementById("search");

searchField.onfocus = function () {
	if (searchField.value == "City & State or ZIP Code") {
		searchField.value = "";
	}
};

searchField.onblur = function () {
	if (searchField.value == "") {
		searchField.value = "City & State or ZIP Code";
	}
};