$(document).ready(function(){
	var searchbox=$('#searchbox');
	var searchButton=$('#searchButton');

	$(searchbox).on('focus',function(){
		$(searchbox).animate({
			width:'90%'
		},400,'linear');
		
	});
});