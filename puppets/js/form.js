$(document).ready(function() {

	$(".modal-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "action.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".modal-form").trigger("reset");
		});
		return false;
	});

	$(".form-2").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".modal-form").trigger("reset");
		});
		return false;
	});

	

	$('#modal-agree').on('change', function(){
		if($('#modal-agree').prop('checked')){
			$('#submit-modal').attr('disabled', false);
		}else{
			$('#submit-modal').attr('disabled', true);
		}
	});

	$('#inp-agree').on('change', function(){
		if($('#inp-agree').prop('checked')){
			$('#submit-form').attr('disabled', false);
		}else{
			$('#submit-form').attr('disabled', true);
		}
	});


	
});