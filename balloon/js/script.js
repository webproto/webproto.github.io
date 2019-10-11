$(function(){

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$("#phone").mask("+7(999) 999-99-99");

	function hidetoggleprice() {
		$("#pricetoggle").css('display', 'block');
	}

	$('#pricetoggle').click(function() {
		$("#toggleblockprice").slideToggle("slow");
	 	$(".blocker").animate({height: 'auto'}, 500);	
	 	$("#pricetoggle").css('display', 'none');		
	});

	$('#togglechevron').click(function() {
		$("#toggleblockprice").slideToggle("slow");
	 	$(".blocker").animate({height: 'auto'}, 500); 		
	 	setTimeout(hidetoggleprice, 600);	
	});

	
	// $(".whyicon-text").not(":first").hide();
	$(".whyicons-wrap .col-sm-five").click(function() {
		$(".whyicons-wrap .col-sm-five").removeClass("active").eq($(this).index()).addClass("active");
		$(".whyicon-text").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	SmoothScroll({ stepSize: 65 });

	var owl = $('.owl-carousel'),
		prev = $('#left-slide'),
		next = $('#right-slide');
	
	owl.owlCarousel({
		items: 1,
		margin: 50,
		mouseDrag: true,
		autoplay: true,
		autoplayTimeout: 4000,
		rewind: true,
		loop: true,
		nav: true,
		navText: ['', '']
	});

	next.on('click', function() {
		owl.trigger("next.owl.carousel");
	});
	prev.on('click', function() {
		 owl.trigger("prev.owl.carousel");
	});

});