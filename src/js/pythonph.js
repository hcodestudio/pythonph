function openSliderPane() {
	var slider = document.querySelector('.slider-pane');

	if (!slider.classList.contains('opened')) {
		slider.classList.add('opened');
		this.classList.add('opened');
	} else {
		slider.classList.remove('opened');
		this.classList.remove('opened');
	}
}

function viewOfficerList() {
	var list = $('#view-list ul');
	var button = $('#view-more');

	var numInList = list.length;
	var numToShow = 1;

	if (!button.filter(':visible').length) {
		numToShow = list.length;
	}

	list.hide();

	if (numInList > numToShow) {
		button.show();
	}

	list.slice(0, numToShow).show();

	button.click(function () {
		var showing = list.filter(':visible').length;

		list.slice(showing - 1, showing + numToShow).fadeIn();

		var nowShowing = list.filter(':visible').length;

		if (nowShowing >= numInList) {
			button.hide();
		}
	});
}

window.onresize = function () {
	viewOfficerList();
};

// $(document).ready(function () {
// 	viewOfficerList();

// 	$('[data-animate-python]').each(function () {
// 		$(this).css('visibility', 'hidden');
// 	});

// 	// Check if element is scrolled into view
// 	function isScrolledIntoView(elem) {
// 		var docViewTop = $(window).scrollTop();
// 		var docViewBottom = docViewTop + $(window).height();

// 		var elemTop = $(elem).offset().top;
// 		var elemBottom = elemTop + $(elem).height();

// 		return elemBottom <= docViewBottom && elemTop >= docViewTop;
// 	}
// 	// If element is scrolled into view, fade it in
// 	$(window).scroll(function () {
// 		// var animatedElements = document.querySelectorAll(
// 		// 	'[data-animate-python]'
// 		// );

// 		// animatedElements.forEach(function (el) {
// 		// 	console.log('el', el);
// 		// 	if (isScrolledIntoView(this) === true) {
// 		// 		// $(this).addClass('fadeInLeft');
// 		// 		console.log('add fadeInLeft', this);
// 		// 	}
// 		// });

// 		$('[data-animate-python]').each(function () {
// 			if (isScrolledIntoView(this) === true) {
// 				$(this).css({
// 					visibility: 'visible',
// 					opacity: '1',
// 					transform:
// 						'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
// 					transition:
// 						'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0.2s',
// 				});

// 				// $(this).addClass(
// 				// 	'animate__animated animate__slideInUp animate__faster'
// 				// );
// 			}
// 		});
// 	});

// 	window.onresize = function () {
// 		viewOfficerList();
// 	};
// });

AOS.init({
	// offset: 200,
	// duration: 150,
	// delay: 150,
	// easing: 'py-easing',
	easing: 'py-easing',
	// offset: 0,
	startEvent: 'DOMContentLoaded',
	// once: true,
	anchor: '.py-easing',
	// anchorPlacement: 'top-bottom',
	// useClassNames: true,
	// // initClassName: false,
	// animatedClassName: 'py-animate',
});

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

var btnToggle = document.getElementById('btn-toggle');

btnToggle.addEventListener('click', openSliderPane, false);
