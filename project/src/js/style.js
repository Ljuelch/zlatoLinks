$(document).ready(function (){

	$(".go-to").click(function() {
		$('html, body').animate({
			scrollTop: $("#page-content").offset().top
		}, 2000);
	});
	
	AOS.init({
		duration: 1500 // global
	});

});