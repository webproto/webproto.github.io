$(document).ready(function() {

	var owl = $('.owl-carousel'),
	prev = $('#left-slide'),
	next = $('#right-slide');
	
	owl.owlCarousel({
		center: true,
		items: 3,
		margin: 0,
		mouseDrag: true,
		autoplay: false,
		autoplayTimeout: false,
		rewind: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			992: {
				items: 2
			},
			1365: {
				items: 3
			}
		}
	});

	next.on('click', function() {
		owl.trigger("next.owl.carousel");
	});
	prev.on('click', function() {
		owl.trigger("prev.owl.carousel");
	});

	$(function(){

		$("img, a").on("dragstart", function(event) { event.preventDefault(); });

		$(".phone").mask("+7(999) 999-99-99");


	});

	
});