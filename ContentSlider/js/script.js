$(document).ready(function(){
	var speed=500;				//Speed for transition like fade in and fade out
	var autoswitch=true;		//Flag that indicates automatic slideshow being on or off
	var autoswitch_speed=8000;	//Transition time for next slide to automatically come in

	$('#play').hide();										//Set the play and pause buttons to be invisible initially
	$('#pause').hide();
	$('#pause').addClass('activeButton');					//Pause button is activated by default
	
	showhide();
	//When mouse enters slide, show active button
	//When leaves, hide active button

	tx=setInterval(function(){
		if(autoswitch)
		{
			nextSlide();
		}
	},autoswitch_speed);

	//play pause needs to be fast, hence placing it in a faster setInterval
	setInterval(function(){
		playpause();
	},1);

//function to switch between play button and pause button on click
function playpause(){
		if($('#pause').hasClass('activeButton'))
		{
			$('#slider,#play,#pause').click(function(){
				$('#pause').removeClass('activeButton');
				$('#play').addClass('activeButton');
				$('#pause').hide();
				$('#play').show();
				autoswitch=false;
			});
		}	
		//When play is clicked, activate pause button
	else if($('#play').hasClass('activeButton'))
		{
			$('#slider,#play,#pause').click(function(){
				$('#play').removeClass('activeButton');
				$('#pause').addClass('activeButton');
				$('#play').hide();
				$('#pause').show();
				autoswitch=true;
			});
		}
}
	

	$('.slide').first().addClass('active');					//Set the first node in ".slide" class as active
	$('.slide').hide();										//hide anything that is there inside slide class
	$('.active').show();									//Show only the active class

	$('#next').click(nextSlide);							//Call to the function nextSlide when #next button is clicked


	$('#prev').click(prevSlide);							//nextSlide and prevSlide are defined within document.ready and not outside

	//Function to move to next slide
	function nextSlide()
	{
		$('.active').removeClass('active').addClass('oldActive'); //remove current node from active class and place it in oldActive class
			if($('.oldActive').is(':last-child')) 				//if the newly turned oldActive class is the last node in class ".slide"
			{													//set the new active class to first node in class ".slide"
				$('.slide').first().addClass('active');
			}
			else
			{													//else, set the next node to active
				$('.oldActive').next().addClass('active');
			}
			$('.oldActive').removeClass('oldActive');			//finally, forget the oldActive class node
			$('.slide').fadeOut(speed);							//fade out the current content of ".slide" class
			$('.active').fadeIn(speed);							//and fade in the newly assigned active node
	}

	//Function to move to prev slide. Same as nextSlide() with only first and last interchanged
	function prevSlide()
	{
		$('.active').removeClass('active').addClass('oldActive');
			if($('.oldActive').is(':first-child'))
			{
				$('.slide').last().addClass('active');
			}
			else
			{
				$('.oldActive').prev().addClass('active');
			}
			$('.oldActive').removeClass('oldActive');
			$('.slide').fadeOut(speed);
			$('.active').fadeIn(speed);
	}

	function showhide()
	{
		$('.slide,#play,#pause').mouseenter(function(){
			tt=setInterval(function(){
			$('.activeButton').show();	
			},1);
		}).mouseleave(function(){
			clearInterval(tt);
			$('.activeButton').hide();
		});
	}


});



