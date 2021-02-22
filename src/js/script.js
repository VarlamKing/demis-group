$(document).ready(function () {
	$('.slider__items').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 670,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 468,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});

