$(document).ready(function() {

	$(".form-1").submit(function() {
		$.ajax({
			type: "POST",
			url: "../libs/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".header-form").trigger("reset");
		});
		return false;
	});

	$('#agree').on('change', function(){
		if($('#agree').prop('checked')){
			$('#submit').attr('disabled', false);
		}else{
			$('#submit').attr('disabled', true);
		}
	});


	
});