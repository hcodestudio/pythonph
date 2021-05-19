var swiper = new Swiper('.carousel-swiper', {
	pagination: {
		el: '.carousel-pagination',
	},

	loop: true,
	grabCursor: true,
});

var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});

function openSliderPane() {
	var slider = document.querySelector('.slider-pane');
	var body = document.body;

	if (!slider.classList.contains('opened')) {
		slider.classList.add('opened');
		body.classList.add('overflow-hidden');
	} else {
		slider.classList.remove('opened');
		body.classList.remove('overflow-hidden');
	}
}

AOS.init({
	duration: 600,
	offset: 200,
	startEvent: 'DOMContentLoaded',
	once: true,
	// anchorPlacement: "top-center"
	// useClassNames: true,
	// initClassName: false,
	// animatedClassName: 'slide-up',
});

// $('#accordionExample').collapse();

document.addEventListener('DOMContentLoaded', function () {
	var collapse = document.getElementById('accordionExample');
	// Array.prototype.forEach.call(cars, function (car) {
	// 	setTimeout(function () {car.classList.add("visible")}, 700 * i)
	// 	i++;
	// })
	// bootstrap.Collapse('#accordionExample');
});

// window.onload = function () {
// 	var cars = document.querySelectorAll("#people img"), i = 1;
// 	Array.prototype.forEach.call(cars, function (car) {
// 		setTimeout(function () {car.classList.add("visible")}, 700 * i)
// 		i++;
// 	})
// };
