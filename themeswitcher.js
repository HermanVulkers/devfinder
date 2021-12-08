const btn = document.querySelector(".themeswitcher-btn");
console.log(btn);

const currentTheme = localStorage.getItem("currentTheme");
if (currentTheme == "dark") {
	document.body.classList.add("dark");
} else {
	document.body.classList.remove("dark");
}

function change() {
	const dark = document.body.classList.contains("dark");
	console.log(dark);

	if (document.body.classList.contains("dark")) {
		document.body.classList.remove("dark");
		localStorage.setItem("currentTheme", "light");
		console.log(localStorage);
	} else {
		document.body.classList.add("dark");
		localStorage.setItem("currentTheme", "dark");
		console.log(localStorage);
	}
}

btn.addEventListener("click", change);
