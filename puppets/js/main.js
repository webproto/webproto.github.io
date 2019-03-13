$(document).ready(function() {

	// var $container = $(".masonry-container");
	// $container.imagesLoaded(function () {
	// 	$container.masonry({
	// 		columnWidth: ".item",
	// 		itemSelector: ".item"
	// 	});
	// });

	var owl = $('.owl-carousel'),
		prev = $('#left-slide'),
		next = $('#right-slide');
	
	owl.owlCarousel({
		items: 1,
		margin: 150,
		mouseDrag: true,
		autoplay: false,
		autoplayTimeout: false,
		rewind: true,
		loop: true
	});

	next.on('click', function() {
		owl.trigger("next.owl.carousel");
	});
	prev.on('click', function() {
		 owl.trigger("prev.owl.carousel");
	});

	// var owl2 = $('.owl-carousel-2'),
		prev2 = $('#left-slide-2'),
		next2 = $('#right-slide-2');
	
	// owl2.owlCarousel({
	// 	items: 1,
	// 	margin: 150,
	// 	mouseDrag: false,
	// 	autoplay: false,
	// 	autoplayTimeout: false,
	// 	rewind: true,
	// 	loop: true
	// });

	next2.on('click', function() {
		owl.trigger("next.owl.carousel");
	});
	prev2.on('click', function() {
		 owl.trigger("prev.owl.carousel");
	});

	$(function(){

		$("img, a").on("dragstart", function(event) { event.preventDefault(); });

		$(".phone").mask("+7(999) 999-99-99");


	});
	
});