$(function() {
	
	var valuev = $('#valuev'),
			obsession = $('#obsession'),
			tr8 = $('#8tr'),
			tr12 = $('#12tr'),
			btnInfo = $('#btn-info'),
			sheglov = $('#sheglov-info'),
			navLink = $('.navbar-nav a')
			btnHome = $('#btn-home'),
			trener = $('#img-trener'),
			team = $('#team');

	valuev.addClass('choise_active');
	$(obsession).on('click', function() {
		obsession.addClass('choise_active');
		valuev.removeClass();
		tr8.html('<span>0</span>' + ' Рублей');
		tr12.html('<span>7 000</span>' + ' Рублей');
	});

	$(valuev).on('click', function() {
		valuev.addClass('choise_active');
		obsession.removeClass();
		tr8.html('<span>6 000</span>' + ' Рублей');
		tr12.html('<span>8 000</span>' + ' Рублей');
	});

	btnInfo.on('click', function() {
		sheglov.fadeToggle(1000);
	});

	// navLink.on('click', function(event) {
	// 	event.preventDefault();
	// 	var target = $(this).attr('href');
	// 	var top = $(target).offset().top;
	// 	$('html,body').animate({scrollTop: top}, 500)
	// });

	btnHome.on('click', function(event) {
		event.preventDefault();
		var target = $(this).attr('href');
		var top = $(target).offset().top;
		$('html,body').animate({scrollTop: top}, 500)
	});

	trener.hide();

	$(window).scroll(function(){
		var top = $(team).offset().top;
		console.log(top);
		if($(window).scrollTop()> top - 300){
			trener.fadeIn(1500)
		}
	});

});