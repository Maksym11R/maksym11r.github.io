$(document).ready(function () {
	$('.request__carousel').slick(
		{
			speed: 1400,
			autoplay: false,
			autoplaySpeed: 2500,
			prevArrow: '<button type="button" class="slick-prev"><img src="icons/icons_slider/lefts.svg"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="icons/icons_slider/rights.svg"></button>',
		});
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 700) {
		$('.upchevrone').fadeIn();
	} else {
		$('.upchevrone').fadeOut();
	}
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
		})
	})
})