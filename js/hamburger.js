const menu = document.querySelector('#menu'); // hamburger
const drawer = document.querySelector('#drawer');
const main = document.querySelector('main');
const logo = document.querySelector('.logo');
let navLinks = document.querySelectorAll('nav.open ul li');

// click on the hamburger menu to open and close nav drawer
menu.addEventListener('click', e => {
	drawer.classList.toggle('open');
	menu.classList.toggle('open');
	logo.classList.toggle('txt-red'); // change logo color to red

	// re-assign navLinks variable or will return an empty Node list
	navLinks = document.querySelectorAll('nav ul li a');

	navLinks.forEach(link => {
		link.classList.toggle('txt-black'); // change nav link color to black
	});
});

// click on main content area to close nav drawer
main.addEventListener('click', () => {
	drawer.classList.remove('open');
	menu.classList.remove('open');
	logo.classList.remove('txt-red'); // change logo color to white
	navLinks.forEach(link => {
		link.classList.toggle('txt-black'); // change nav link color to black
	});
});
