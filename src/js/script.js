const burgerBtn = document.querySelector('.hamburger');
const menu1 = document.querySelector('.first-menu');
const menu2 = document.querySelector('.second-menu');
const shadow = document.querySelector('.shadow');
const body = document.querySelector('.body');
const menuBtn = document.querySelector('.menu');
const backMenuBtn = document.querySelector('.menu-back');
const rightNav = document.querySelector('.right-nav');

const activeMenu = () => {
	burgerBtn.classList.toggle('is-active');
	shadow.classList.toggle('active-shadow');
	body.classList.toggle('body-active');
	menu1.classList.toggle('active-first-menu');
	menu2.classList.remove('active-second-menu');
	rightNav.classList.toggle('active-right-nav');
};

const active2Menu = () => {
	menu2.classList.add('active-second-menu');
};

const backToFristMenu = () => {
	menu2.classList.remove('active-second-menu');
};

const closeMenu = () => {
	burgerBtn.classList.remove('is-active');
	shadow.classList.remove('active-shadow');
	body.classList.remove('body-active');
	menu1.classList.remove('active-first-menu');
	menu2.classList.remove('active-second-menu');
	rightNav.classList.remove('active-right-nav');
};

burgerBtn.addEventListener('click', activeMenu);
menuBtn.addEventListener('click', active2Menu);
backMenuBtn.addEventListener('click', backToFristMenu);
window.addEventListener('click', (e) =>
	e.target === shadow ? closeMenu() : false
);
