$(document).ready(function(){
	var searchbox=$('#searchbox');
	var searchButton=$('#searchButton');
	//Select searchbox on load
	searchbox.focus();

	$(searchbox).on('input',function() {
    	$('#wrap').animate({
    	  paddingTop: "-=20px",
    	}, {
        speed: "100",
        step: function(paddingTop) {
            	console.log(paddingTop);
            	if(paddingTop<=20)
            		{
            			$(this).stop();
            		}
        		},
        easing: "swing"
        });
  	});

	$(searchbox).on('focus',function(){
		$(searchbox).animate({
			width:'90%'
		},400,'linear');
	});

	$(searchbox).on('blur', function() {
	    if((searchbox).val() == '')
	    {
	    	$(searchbox).animate({
    			width: '40%'
    		}, 400, 'linear');
    	}
	});

	$('#searchForm').submit(function(e){
		e.preventDefault();
	});
});

//The following function is called on mousedown event on searchButton

function search()
{
	//Clear the results
	$('#results').html('');
	$('#buttons').html('');

	//Get form input
	q=$('#searchbox').val();	

	//Run get request on api
	$.get("https://www.googleapis.com/youtube/v3/search",
		{part:'snippet,id', q:q, type:'video', key:'AIzaSyARJaiiUpn8_tHaVeD-3mXfWPcUScN4IJg'},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			console.log(data);
			$.each(data.items,function(i,item)
			{
				var op=getOutput(item);
				//console.log('hey its op:',op);
				//Display results
				$('#results').append(op);
			});

			var buttons = getButtons(prevPageToken,nextPageToken);
			//Display buttons
			$('#buttons').append(buttons);
		}
	);	
}

//Build the Output
function getOutput(item)
{
	var videoId=item.id.videoId;
	var title=item.snippet.title;
	var description = item.snippet.description;
	var thumb=item.snippet.thumbnails.high.url;
	var channelTitle=item.snippet.channelTitle;
	var videoDate=item.snippet.publishedAt;

	//Build output string
	var output=
	'<div class="clearFloat"></div>' +
	'<li>' +
	'<div class="list-left">' +
	'<img src="' +thumb+ '">' +
	'</div>' +
	'<div class="list-right">' +
	'<h4><a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+videoId+'">' + title+ '</h4>' +
	'By <span class="cTitle">'+channelTitle+'</span><br/>'+
	'<p>'+description+'</p>'+
	'</div>'+
	'</li>'+
	'<div class="clearFloat"></div>' +
	'';

	return output;
}

//Build the buttons
function getButtons(prevPageToken,nextPageToken)
{
	if(!prevPageToken)
	{
		var btnout='<div class="button-container">'+
		'<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"'+
		'onclick="nextpage();">Next Page</button></div>';
	}
	else
	{
		var btnout='<div class="button-container">'+
		'<button id="prev-button" class="paging-button" data-token="'+prevPageToken+'" data-query="'+q+'"'+
		'onclick="prevpage();">Prev Page</button>'+
		'<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"'+
		'onclick="nextpage();">Next Page</button></div>';
	}

	return btnout;
}

function nextpage()
{
	var token=$('#next-button').data('token');
	var q=$('#next-button').data('query');
		//Clear the results
	$('#results').html('');
	$('#buttons').html('');

	//Get form input
	q=$('#searchbox').val();	

	//Run get request on api
	$.get("https://www.googleapis.com/youtube/v3/search",
		{part:'snippet,id', q:q, pageToken:token, type:'video', key:'AIzaSyARJaiiUpn8_tHaVeD-3mXfWPcUScN4IJg'},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			console.log(data);
			$.each(data.items,function(i,item)
			{
				var op=getOutput(item);
				//console.log('hey its op:',op);
				//Display results
				$('#results').append(op);
			});

			var buttons = getButtons(prevPageToken,nextPageToken);
			//Display buttons
			$('#buttons').append(buttons);
		}
	);	
}

function prevpage()
{
	var token=$('#prev-button').data('token');
	var q=$('#prev-button').data('query');
		//Clear the results
	$('#results').html('');
	$('#buttons').html('');

	//Get form input
	q=$('#searchbox').val();	

	//Run get request on api
	$.get("https://www.googleapis.com/youtube/v3/search",
		{part:'snippet,id', q:q, pageToken:token, type:'video', key:'AIzaSyARJaiiUpn8_tHaVeD-3mXfWPcUScN4IJg'},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			console.log(data);
			$.each(data.items,function(i,item)
			{
				var op=getOutput(item);
				//console.log('hey its op:',op);
				//Display results
				$('#results').append(op);
			});

			var buttons = getButtons(prevPageToken,nextPageToken);
			//Display buttons
			$('#buttons').append(buttons);
		}
	);	
}