var action="click";
var speed="500";

$(document).ready(function(){
	$('li.q').on(action,function(){
		//Get next element
		$(this).next()
			.slideToggle(speed)
			//select all other answers
			.siblings('li.a')
			.slideUp();
		//Get image for active question
		var img=$(this).children('img');
		//Remove 'rotate' class for all except active
		$('img').not(img).removeClass('rotate');
		//Toggle rotate class
		img.toggleClass('rotate');
	});
});