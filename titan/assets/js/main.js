$(document).ready(function() {

	var owlMain = $('.sliderMain'),
	owlSub = $('.sliderSub'),
	prev = $('#left-slide'),
	next = $('#right-slide'),
	buttonNavbar = $('#navbar-button');
	
	owlMain.owlCarousel({
		items: 1,
		margin: 0,
		mouseDrag: true,
		autoplay: false,
		autoplayTimeout: false,
		rewind: true,
		loop: true
	});

	owlSub.owlCarousel({
		items: 6,
		margin: 50,
		nav: true,
		navText: ['<i class="next ion-chevron-left ion"></i>','<i class="prev ion-chevron-right ion"></i>'],
		mouseDrag: true,
		autoplay: false,
		autoplayTimeout: false,
		rewind: true,
		responsiveClass:true,
		loop: true,
		dots: false,
		responsive:{
			100:{
				items:2
			},
			600:{
				items:4
			},
			992:{
				items:7
			}
		}
	});

	buttonNavbar.on('click', function() {
		$('.head-navig').toggleClass('hide-navigation');
	});

	$(".send-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".send-form").trigger("reset");
		});
		return false;
	});

});
