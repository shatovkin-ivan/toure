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
	})
})