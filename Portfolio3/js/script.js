//problems
//height and width of background are vh and vw. Scrolling beyond makes direct background visible
//Header and footer on vertical resize move into the section part (because they are placed by position:absolute)


$(document).ready(function(){

	$('.content').hide();
	$('.content').first().addClass('active');
	$('.active').show();
	
	$('#uparrow').click(function(){
		$('.active').addClass('oldActive');
		$('.active').removeClass('active');

		if($('.oldActive').is(':first-child'))
			{
				$('.content').last().addClass('active');
			}
			else
			{
				$('.oldActive').prev().addClass('active');
			}
			
		$('.content').removeClass('oldActive');
		$('.content').hide();
		$('.active').show();

	});


	$('#downarrow').click(function(){
		$('.active').addClass('oldActive');
		$('.active').removeClass('active');

		if($('.oldActive').is(':last-child'))
			{
				$('.content').first().addClass('active');
			}
			else
			{
				$('.oldActive').next().addClass('active');
			}
			
		$('.content').removeClass('oldActive');
		$('.content').hide();
		$('.active').show();

	});


});