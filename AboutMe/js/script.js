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
		var img1=$(this).children('img');
		//Remove 'rotate' class for all except active. 
		//So every image 'img' but not this current image img1
		$('img').not(img1).removeClass('rotate');
		//Toggle rotate class
		img1.toggleClass('rotate');
	});
});