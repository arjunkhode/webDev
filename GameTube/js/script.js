$(document).ready(function(){
	var searchbox=$('#searchbox');
	var searchButton=$('#searchButton');

	$(searchbox).on('focus',function(){
		$(searchbox).animate({
			width:'500px'
		},800,'linear');
		
	});
});