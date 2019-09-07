/* alert('a'); */
jQuery(document).ready(function(){
	$('.item1').show();
	$('.item2').hide();
	$('.button1').css('background','orange');
	$('.button2').css('background','black');
	
	$('.button2').click(function() {
		$('.item2').show();
		$('.item1').hide();
		$('.button2').css('background','orange');
		$('.button1').css('background','black');
	});

	
	$('.button1').click(function() {
		$('.item1').show();
		$('.item2').hide();
		$('.button1').css('background','orange');
		$('.button2').css('background','black');
	});	
	
	
});


