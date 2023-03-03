const burgerBtn = document.querySelector('.hamburger');
const menu1 = document.querySelector('.first-menu');
const menu2 = document.querySelector('.second-menu');
const shadow = document.querySelector('.shadow');
const body = document.querySelector('.body');
const menuBtn = document.querySelector('.menu');
const backMenuBtn = document.querySelector('.menu-back');
const rightNav = document.querySelector('.right-nav');

const boxesValue = document.querySelectorAll('.boxes-value');

const boxesImg = document.querySelectorAll('.boxes-img');

const img1 = document.querySelector('.first-caffee');
const img2 = document.querySelector('.second-caffee');
const img3 = document.querySelector('.third-caffee');
const img4 = document.querySelector('.fourth-caffee');
const img5 = document.querySelector('.fiveth-caffee');

const borderDown = document.querySelectorAll('.border-box');
const firstBtn = document.querySelector('.first-btn');
const secondBtn = document.querySelector('.second-btn');
const thirdBtn = document.querySelector('.third-btn');
const fourthBtn = document.querySelector('.fourth-btn');
const fivethBtn = document.querySelector('.fiveth-btn');

const slider1 = document.querySelector('.slider-one');
const slider2 = document.querySelector('.slider-two');
const slider3 = document.querySelector('.slider-three');
const slider4 = document.querySelector('.slider-four');
const slider5 = document.querySelector('.slider-five');

const item = document.querySelectorAll('.item');
const marker = document.querySelector('.marker');

const activeMarker = (e) => {
	marker.style.left = e.offsetLeft + 'px';
	marker.style.width = e.offsetWidth + 'px';
};

const activeBorder5 = () => {
	borderRemover();
	// slider5.classList.add('slider-class');
	img5.classList.add('active-img');
};

const activeBorder4 = () => {
	borderRemover();
	// slider4.classList.add('slider-class');
	img4.classList.add('active-img');
};

const activeBorder3 = () => {
	borderRemover();
	// slider3.classList.add('slider-class');
	img3.classList.add('active-img');
};

const activeBorder2 = () => {
	borderRemover();
	// slider2.classList.add('slider-class');
	img2.classList.add('active-img');
};

const activeBorder1 = () => {
	borderRemover();
	// slider1.classList.add('slider-class');
	img1.classList.add('active-img');
};

const borderRemover = () => {
	// borderDown.forEach((el) => {
	// 	el.classList.remove('slider-class');
	// });

	boxesImg.forEach((img) => {
		img.classList.remove('active-img');
	});
};

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

item.forEach((link) => {
	link.addEventListener('click', (e) => {
		activeMarker(e.target.closest('button'));
	});
});
fivethBtn.addEventListener('click', activeBorder5);
fourthBtn.addEventListener('click', activeBorder4);
thirdBtn.addEventListener('click', activeBorder3);
secondBtn.addEventListener('click', activeBorder2);
firstBtn.addEventListener('click', activeBorder1);
burgerBtn.addEventListener('click', activeMenu);
menuBtn.addEventListener('click', active2Menu);
backMenuBtn.addEventListener('click', backToFristMenu);
window.addEventListener('click', (e) =>
	e.target === shadow ? closeMenu() : false
);
