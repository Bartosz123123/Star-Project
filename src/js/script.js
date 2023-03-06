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

const formBox = document.querySelector('form-box');
const input = document.getElementById('input');
const inputBox = document.querySelector('.input-box');
const pseudoPlaceholder = document.querySelector('.pseudo-placeholder');
const errorBox = document.querySelector('.error-box');
const form = document.querySelector('.form-box');
const errorX = document.querySelector('.error-x');

// const activePlaceholder = (e) => {
// 	if (e.target == inputBox || e.target == input) {
// 		pseudoPlaceholder.classList.add('active-placeholder');
// 		inputBox.classList.add('input-box-active');
// 	} else if (e.target !== inputBox || e.target !== input) {
// 		pseudoPlaceholder.classList.remove('active-placeholder');
// 		inputBox.classList.remove('input-box-active');
// 		removeClass();
// 	}
// };

// const removeClass = () => {
// 	if () {
// 		pseudoPlaceholder.classList.add('close-placeholder');
// 		setTimeout(() => {
// 			pseudoPlaceholder.classList.remove('close-placeholder');
// 		}, 250);
// 	}
// };

// const closePlaceholder = (e) => {
// 	if (e.target !== inputBox || e.target !== input) {
// 		pseudoPlaceholder.classList.remove('active-placeholder');
// 		inputBox.classList.remove('input-box-active');
// 	}
// };

// e.target !== inputBox || e.target !== input

const activePlaceholder = (e) => {
	if (e.target == inputBox || e.target == input) {
		pseudoPlaceholder.classList.add('active-placeholder');
		inputBox.classList.add('input-box-active');
	} else if (input.value !== '') {
		removeError();
		return;
	} else if (e.target !== inputBox || e.target !== input) {
		if (pseudoPlaceholder.classList.contains('active-placeholder')) {
			pseudoPlaceholder.classList.remove('active-placeholder');
			inputBox.classList.remove('input-box-active');
			errorBox.classList.add('show-error');
			inputBox.classList.add('error-placeholder');
			pseudoPlaceholder.classList.add('error-pseudo-placeholder');
			pseudoPlaceholder.classList.add('close-placeholder');
			errorX.classList.add('active-x');

			setTimeout(() => {
				pseudoPlaceholder.classList.remove('close-placeholder');
			}, 250);
		}
	}
	// console.log(errorBox.classList.contains('show-error'));
};

const removeError = () => {
	if (input.value === '') {
		errorBox.classList.add('show-error');
		pseudoPlaceholder.classList.add('error-pseudo-placeholder');
		errorBox.classList.remove('hide-error');
		errorX.classList.add('active-x');
	} else if (input.value !== '') {
		errorBox.classList.remove('show-error');
		inputBox.classList.remove('error-placeholder');
		pseudoPlaceholder.classList.remove('error-pseudo-placeholder');
		errorX.classList.remove('active-x');
		errorBox.classList.add('hide-error');
	}
};

// const removeError = () => {
// 	if (input.value !== '') {
// 		errorBox.classList.remove('show-error');
// 		inputBox.classList.remove('error-placeholder');
// 		pseudoPlaceholder.classList.remove('error-pseudo-placeholder');
// 		errorX.classList.remove('active-x');
// 		errorBox.classList.add('hide-error');
// 		setInterval(() => {
// 			errorBox.classList.remove('hide-error');
// 		}, 250);
// 		return;
// 	} else {
// 		errorBox.classList.add('show-error');
// 		inputBox.classList.add('error-placeholder');
// 		pseudoPlaceholder.classList.add('error-pseudo-placeholder');
// 		errorX.classList.add('active-x');
// 	}
// };

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

input.addEventListener('keyup', removeError);
window.addEventListener('click', activePlaceholder);
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
