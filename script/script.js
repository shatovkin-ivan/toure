// window.addEventListener('DOMContentLoaded', () => {
// 	var menuItem = document.querySelectorAll('.menu a');
// 	console.log(menuItem);
// 	for(let i = 0; i < menuItem.length; i++) {
// 		menuItem[i].addEventListener('click', () => {
// 			if (menuItem.classList.contains('list-active'))  {
// 				menuItem.classList.remove('list-active');
// 				menuItem[i].classList.add('list-active');
// 			}
// 		})
// 	}
// })
$(document).ready(function () {
	$('[data-modal=modal]').on('click', function () {
		$('.overlay, #modal').fadeIn();
	})
	$('.modal__close').on('click', function () {
		$('.overlay, #modal').fadeOut()
	});

	// Слайдер

	$('.testimonials__slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.testimonials__main-slider',
		prevArrow: '<button type="button" class="slick-prev"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></button>',
	});

	$('.testimonials__main-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.testimonials__slider',
	});
})