"use strict";

import { retrieveCards, renderer } from "./function.js";

function getCountryName(name) {
	const apiURL = `https://restcountries.com/v3.1/name/${name}`;
	fetch(apiURL)
		.then((response) => response.json())
		.then((data) => {
			renderer(main, data, retrieveCards);
			console.log(data);
		});
}

const main = document.querySelector("#main");

document.querySelector(".nav__search-btn").addEventListener("click", () => {
	const searchInput = document.querySelector(".nav__search");
	[...main.children].length && [...main.children].forEach((child) => child.remove());
	searchInput.value && getCountryName(searchInput.value);
});
