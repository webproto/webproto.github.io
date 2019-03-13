$(document).ready(function() {

	var owl = $('.owl-carousel'),
		prev = $('#left-slide'),
		next = $('#right-slide');
	
	owl.owlCarousel({
		items: 1,
		margin: 50,
		autoplay: false,
		autoplayTimeout: false,
		rewind: true,
		loop: true,
		responsive: {
			0: {
				mouseDrag: true,
			},
			768: {
				mouseDrag: false,
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

		$(".maskphone").mask("+7(999) 999-99-99");

	});
	
});