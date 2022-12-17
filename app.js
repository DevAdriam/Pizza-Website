let gethamburgetBtn = document.querySelector(".hamburgerBtn");
let getmenu = document.querySelector(".nav_menu");
let getlines = document.querySelectorAll(".lines");

gethamburgetBtn.addEventListener("click", function () {
	for (let i = 0; i < getlines.length; i++) {
		getlines[i].classList.toggle("active");
	}
	getmenu.classList.toggle("active");
});
