const btn = document.querySelector(".themeswitcher-btn");
console.log(btn);

function change() {
	if (document.body.classList.contains("dark")) {
		document.body.classList.remove("dark");
	} else {
		document.body.classList.add("dark");
	}
}

btn.addEventListener("click", change);
