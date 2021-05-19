function  showDiv(str)
{
	if(str == '1')
	{
		document.getElementById("part1Div").style.display = 'block';
		document.getElementById("part2Div").style.display = 'none';
		document.getElementById("part3Div").style.display = 'none';
		document.getElementById("help2").style.display = 'none';
		document.getElementById("part4Div").style.display = 'none';
		document.getElementById("help3").style.display = 'none';
		document.getElementById("help1").style.display = 'block';
	}
	else if(str == '2')
	{
		document.getElementById("part2Div").style.display = 'block';
		document.getElementById("part1Div").style.display = 'none';
		document.getElementById("part3Div").style.display = 'none';
		document.getElementById("part4Div").style.display = 'none';
		document.getElementById("help1").style.display = 'none';
		document.getElementById("help2").style.display = 'block';
		document.getElementById("help3").style.display = 'none';
		
	}
	else if(str == '3')
	{
		document.getElementById("part2Div").style.display = 'none';
		document.getElementById("part1Div").style.display = 'none';
		document.getElementById("part3Div").style.display = 'block';
		document.getElementById("part4Div").style.display = 'none';
		document.getElementById("help1").style.display = 'none';
		document.getElementById("help2").style.display = 'none';
		document.getElementById("help3").style.display = 'block';
		
	}
	else if(str=='4')
	{
		document.getElementById("part2Div").style.display = 'none';
		document.getElementById("part1Div").style.display = 'none';
		document.getElementById("part3Div").style.display = 'none';
		document.getElementById("part4Div").style.display = 'block';
		document.getElementById("help1").style.display = 'none';
		document.getElementById("help2").style.display = 'block';
		document.getElementById("help3").style.display = 'none';
		
	}
	
	else
	{
		
	    document.getElementById("part3Div").style.display = 'none';
		document.getElementById("part1Div").style.display = 'none';
		document.getElementById("part2Div").style.display = 'none';
		document.getElementById("help1").style.display = 'none';
		document.getElementById("help2").style.display = 'none';
		document.getElementById("help3").style.display = 'block';
			
		
	}
	
}
