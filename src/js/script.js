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
const containerInput = document.querySelector('.input-container');

const svg5 = document.querySelector('.svg-five');
const svg4 = document.querySelector('.svg-four');
const svg3 = document.querySelector('.svg-three');
const svg2 = document.querySelector('.svg-two');
const svg1 = document.querySelector('.svg-one');
const head5 = document.querySelector('.five');
const head4 = document.querySelector('.four');
const head3 = document.querySelector('.three');
const head2 = document.querySelector('.two');
const head1 = document.querySelector('.one');
const dropdown5 = document.querySelector('.order');
const dropdown4 = document.querySelector('.business');
const dropdown3 = document.querySelector('.social-impact');
const dropdown2 = document.querySelector('.careers');
const dropdown1 = document.querySelector('.about-us');

const footerYear = document.querySelector('.footer-year');

const rewardsScroll = document.querySelector('.header');
const sticky = rewardsScroll.offsetTop;
const desktopMain = document.querySelector('.desktop-main');
const mobileMain = document.querySelector('.main-container');

window.onscroll = function () {
	if (window.pageYOffset > sticky) {
		rewardsScroll.classList.add('sticky');
		desktopMain.classList.add('sticky-main');
		mobileMain.classList.add('sticky-main');
	} else {
		rewardsScroll.classList.remove('sticky');
		desktopMain.classList.remove('sticky-main');
		mobileMain.classList.remove('sticky-main');
	}
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();

	footerYear.innerText = year;
};

const activeFooterDropdown5 = () => {
	dropdown5.classList.toggle('dropdown-active-fiveth');
	svg5.classList.toggle('rotation');
};
const activeFooterDropdown4 = () => {
	dropdown4.classList.toggle('dropdown-active-fourth');
	svg4.classList.toggle('rotation');
};
const activeFooterDropdown3 = () => {
	dropdown3.classList.toggle('dropdown-active-third');
	svg3.classList.toggle('rotation');
};
const activeFooterDropdown2 = () => {
	dropdown2.classList.toggle('dropdown-active');
	svg2.classList.toggle('rotation');
};
const activeFooterDropdown1 = () => {
	dropdown1.classList.toggle('dropdown-active');
	svg1.classList.toggle('rotation');
};

const pulse = (e) => {
	const top = e.target.clientY;
	const left = e.clientX;

	const topPosition = e.target.offsetTop;
	const leftPosition = e.target.offsetLeft;

	const insideTopPosition = topPosition - top;
	const insideLeftPosition = left - leftPosition;

	const circle = document.createElement('span');
	circle.classList.add('circle');
	circle.style.top = insideTopPosition + 'px';
	circle.style.left = insideLeftPosition + 'px';

	e.target.append(circle);

	setTimeout(() => {
		circle.remove();
	}, 300);
};

const activePlaceholder = (e) => {
	if (e.target !== inputBox || e.target !== input) {
		removeAll();
	}
	if (e.target === inputBox || e.target === input) {
		pseudoPlaceholder.classList.add('active-placeholder');
		pseudoPlaceholder.classList.add('change-color');
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
};

const removeAll = () => {
	inputBox.classList.remove('input-box-active');
	pseudoPlaceholder.classList.remove('change-color');
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

head5.addEventListener('click', activeFooterDropdown5);
head4.addEventListener('click', activeFooterDropdown4);
head3.addEventListener('click', activeFooterDropdown3);
head2.addEventListener('click', activeFooterDropdown2);
head1.addEventListener('click', activeFooterDropdown1);
containerInput.addEventListener('click', pulse);
input.addEventListener('keyup', removeError);
document.addEventListener('click', activePlaceholder);
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
handleCurrentYear();
