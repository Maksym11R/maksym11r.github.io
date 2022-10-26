$(document).ready(function () {
	$('.main__slider').slick(
		{
			speed: 1400,
			autoplay: true,
			autoplaySpeed: 3500,
			dots: true,


		});
});

$(document).ready(function () {
	$('.prengi__slider').slick(
		{
			speed: 1400,
			autoplay: true,
			autoplaySpeed: 3500,
			dots: true,
			variableWidth: true


		});
});

window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.main__menu'),
		menuItem = document.querySelectorAll('.main__menu-item'),
		hamburger = document.querySelector('.burger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('burger_active');
		menu.classList.toggle('main__menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('burger_active');
			menu.classList.toggle('main__menu_active');
		});
	});
});