const getmenuBtn = document.querySelector(".menuBtn");
const getmenuNav = document.querySelector(".navbar-nav");
const getheader = document.querySelector("header");
const getcloseBtn = document.querySelector(".closeBtn");

let MenuDisplay;

getmenuBtn.addEventListener("click", function () {
	MenuDisplay = document.createElement("div");

	MenuDisplay.innerHTML = `
            	
					<ul class=" navbar-nav d-lg-none text-uppercase navResponsive">
					    <button type="button" class="closeBtn">x</button>
						<li class="navbar-item"><a href="#" class="navbar-link">Home</a></li>
						<li class="navbar-item"><a href="#" class="navbar-link">Our Menus</a></li>
						<li class="navbar-item"><a href="#" class="navbar-link">About us</a></li>
						<li class="navbar-item"><a href="#" class="navbar-link">reservation</a></li>
					</ul>`;

	getheader.appendChild(MenuDisplay);
});
