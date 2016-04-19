function getCheckedValue( groupName ) 
{
    var radios = document.getElementsByName( groupName );
    for( i = 0; i < radios.length; i++ ) 
    {
        if( radios[i].checked ) 
        {
            return radios[i].value;
        }
    }
    return null;
}

function submitAnswers()
{
	var total=5, score=0;

	/*Get user input
	var q1=document.querySelector('input[name="q1"]:checked').value || null;
	*/

	//Validation
	var q1=(getCheckedValue("q1"));
	var q2=(getCheckedValue("q2"));
	var q3=(getCheckedValue("q3"));
	var q4=(getCheckedValue("q4"));
	var q5=(getCheckedValue("q5"));
	
	for(i=1;i<=total;i++)
	{
		if(eval('q'+i)===null)
		{
			alert("You missed question "+i);
			return false;
		}
	}

	//Set answers
	var answers=["a","b","a","d","c"];

	//Check answers
	for(i=0;i<total;i++)
	{
		if(eval('q'+(i+1))===answers[i])
			score++;
	}

	//Display results
	var res=document.getElementById("results");
	res.innerHTML="<h3>You scored <span>"+score+"</span> out of <span>"+total+"</span></h3>";
	alert("You scored "+score+" out of "+total);

	return false;
}