/*Lab:exp_4_Part1_Multiplexer
	File name: circuit_exp4p1.js
    Author:Prakriti Dhang */


function ledchng(){

    var image1 = document.getElementById('b1');
    var image2 = document.getElementById('b2');
    var image3 = document.getElementById('b3');
    var image4 = document.getElementById('b4');
    var image5 = document.getElementById('b5'); /* strobe 1 */
    var image6 = document.getElementById('b6'); /* A */
    var image7 = document.getElementById('b7'); /* B */
    var image8 = document.getElementById('b8'); /* GND */
    var image9 = document.getElementById('b9');  /* VCC */
    var image10 = document.getElementById('b10');  /* strobe 2 */
    var image11 = document.getElementById('b11');
    var image12 = document.getElementById('b12');
    var image13 = document.getElementById('b13');
    var image14 = document.getElementById('b14');

    if(image8.src.match("on") && image9.src.match("on")){
        document.getElementById("vg").style.visibility = 'visible';
        document.getElementById("showalt").style.visibility = 'visible';
        document.getElementById("vg").style.color = 'red';
        document.getElementById("showalt").style.color = 'red';
        document.getElementById("str").style.visibility = 'hidden';
    }
    
      else  if(image9.src.match("off") && image8.src.match("on") ){
            document.getElementById("vg").style.visibility = 'visible';
            document.getElementById("showalt").style.visibility = 'visible';
            document.getElementById("vg").style.color = 'red';
        document.getElementById("showalt").style.color = 'red';
            document.getElementById("str").style.visibility = 'hidden';
        }
        else if(image5.src.match("on") && image10.src.match("on")){
            document.getElementById("vg").style.visibility = 'hidden';
            document.getElementById("showalt").style.visibility = 'visible';
            document.getElementById("str").style.visibility = 'visible';
            document.getElementById("str").style.color = 'red';
        document.getElementById("showalt").style.color = 'red';
        }
        else if(image8.src.match("on") && image5.src.match("on") && image10.src.match("on")){
            document.getElementById("vg").style.visibility = 'visible';
            document.getElementById("showalt").style.visibility = 'visible';
            document.getElementById("str").style.visibility = 'visible';
            document.getElementById("vg").style.color = 'red';
        document.getElementById("showalt").style.color = 'red';
        document.getElementById("str").style.color = 'red';
        }
        else if(image9.src.match("off") && image5.src.match("on") && image10.src.match("on")){
            document.getElementById("vg").style.visibility = 'visible';
            document.getElementById("showalt").style.visibility = 'visible';
            document.getElementById("str").style.visibility = 'visible';
            document.getElementById("vg").style.color = 'red';
        document.getElementById("showalt").style.color = 'red';
        document.getElementById("str").style.color = 'red';
        }
        else if(image8.src.match("on") ){
            document.getElementById("vg").style.visibility = 'visible';
            document.getElementById("showalt").style.visibility = 'visible';
            document.getElementById("vg").style.color = 'red';
        document.getElementById("showalt").style.color = 'red';
            document.getElementById("str").style.visibility = 'hidden';
        }
        else if(image9.src.match("off") ){
            document.getElementById("vg").style.visibility = 'visible';
            document.getElementById("showalt").style.visibility = 'visible';
            document.getElementById("vg").style.color = 'red';
        document.getElementById("showalt").style.color = 'red';
            document.getElementById("str").style.visibility = 'hidden';
        }
        else{
            document.getElementById("vg").style.visibility = 'hidden';
            document.getElementById("showalt").style.visibility = 'hidden';
            document.getElementById("str").style.visibility = 'hidden';
    
            }
        

      
       /* if(image5.src.match("on") && image10.src.match("on")){
            document.getElementById("vg").style.visibility = 'hidden';
            document.getElementById("showalt").style.visibility = 'visible';
            document.getElementById("str").style.visibility = 'visible';
        }
        else{
            document.getElementById("vg").style.visibility = 'hidden';
            document.getElementById("showalt").style.visibility = 'hidden';
            document.getElementById("str").style.visibility = 'hidden';
    
            }*/

/* multiplex 2 will be active */

    if(image9.src.match("on"))
	{
		document.getElementById("lon1").src="lon.jpg";
		document.getElementById("lon1").style.visibility = 'hidden';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'hidden';
		
	}


  if(image5.src.match("on") && image9.src.match("on") ){
    document.getElementById("lon1").src="lon.jpg";
        document.getElementById("lon1").style.visibility = 'hidden';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'hidden'
    }

     if(image5.src.match("on") && image6.src.match("off") && image7.src.match("off") && image9.src.match("on") && image14.src.match("on") ){
        document.getElementById("lon1").src="lon.jpg";
        document.getElementById("lon1").style.visibility = 'visible';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'hidden';
    }
     
    if(image5.src.match("on") && image6.src.match("off") && image7.src.match("on") && image9.src.match("on") && image13.src.match("on")){
        document.getElementById("lon1").src="lon.jpg";
        document.getElementById("lon1").style.visibility = 'visible';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'hidden';
    }
    if(image5.src.match("on") && image6.src.match("on") && image7.src.match("off") && image9.src.match("on") && image12.src.match("on")){
        document.getElementById("lon1").src="lon.jpg";
        document.getElementById("lon1").style.visibility = 'visible';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'hidden';
    }
    if(image5.src.match("on") && image6.src.match("on") && image7.src.match("on") && image9.src.match("on") && image11.src.match("on")){
        document.getElementById("lon1").src="lon.jpg";
        document.getElementById("lon1").style.visibility = 'visible';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'hidden';
    }
    /*if(image5.src.match("on") && image6.src.match("on") && image7.src.match("on") && image9.src.match("on") && image12.src.match("on")){
        document.getElementById("lon1").src="lon.jpg";
        document.getElementById("lon1").style.visibility = 'hidden';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'hidden';
    }

    if(image5.src.match("on") && image6.src.match("off") && image7.src.match("on") && image9.src.match("on") && image14.src.match("on")){
        document.getElementById("lon1").src="lon.jpg";
        document.getElementById("lon1").style.visibility = 'hidden';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'hidden';
    }*/
    /*if(image5.src.match("on") && image7.src.match("on") && image9.src.match("on") && image13.src.match("on")&& image14.src.match("on") ){
        document.getElementById("lon1").src="lon.jpg";
        document.getElementById("lon1").style.visibility = 'visible';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'hidden';
    }
     if(image2.src.match("on") && image7.src.match("on") && image9.src.match("on") && image13.src.match("on")&& image14.src.match("on") ){
        document.getElementById("lon1").src="lon.jpg";
        document.getElementById("lon1").style.visibility = 'visible';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'visible';
    }*/




/* multiplexer 1 will be active */

if(image10.src.match("on") && image9.src.match("on") ){
    document.getElementById("lon1").src="lon.jpg";
        document.getElementById("lon1").style.visibility = 'hidden';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'hidden'
    }

     if(image10.src.match("on") && image6.src.match("off") && image7.src.match("off") && image9.src.match("on") && image1.src.match("on") ){
        document.getElementById("lon1").src="lon.jpg";
        document.getElementById("lon1").style.visibility = 'hidden';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'visible';
    }
     
    if(image10.src.match("on") && image6.src.match("off") && image7.src.match("on") && image9.src.match("on") && image2.src.match("on")){
        document.getElementById("lon1").src="lon.jpg";
        document.getElementById("lon1").style.visibility = 'hidden';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'visible';
    }
    if(image10.src.match("on") && image6.src.match("on") && image7.src.match("off") && image9.src.match("on") && image3.src.match("on")){
        document.getElementById("lon1").src="lon.jpg";
        document.getElementById("lon1").style.visibility = 'hidden';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'visible';
    }
    if(image10.src.match("on") && image6.src.match("on") && image7.src.match("on") && image9.src.match("on") && image4.src.match("on")){
        document.getElementById("lon1").src="lon.jpg";
        document.getElementById("lon1").style.visibility = 'hidden';
        document.getElementById("ron2").src="ron.jpg";
        document.getElementById("ron2").style.visibility = 'visible';
    }

    /* both multiplexer on */
    
    
         if(image5.src.match("off") && image10.src.match("off") && image6.src.match("off") && image7.src.match("off") && image9.src.match("on") && image1.src.match("on") && image14.src.match("on") ){
            document.getElementById("lon1").src="lon.jpg";
            document.getElementById("lon1").style.visibility = 'visible';
            document.getElementById("ron2").src="ron.jpg";
            document.getElementById("ron2").style.visibility = 'visible';
        }
        if(image5.src.match("off") && image10.src.match("off") && image6.src.match("off") && image7.src.match("on") && image9.src.match("on") && image2.src.match("on") && image13.src.match("on") ){
            document.getElementById("lon1").src="lon.jpg";
            document.getElementById("lon1").style.visibility = 'visible';
            document.getElementById("ron2").src="ron.jpg";
            document.getElementById("ron2").style.visibility = 'visible';
        }
         
        if(image5.src.match("off") && image10.src.match("off") && image6.src.match("on") && image7.src.match("off") && image9.src.match("on") && image3.src.match("on") && image12.src.match("on") ){
            document.getElementById("lon1").src="lon.jpg";
            document.getElementById("lon1").style.visibility = 'visible';
            document.getElementById("ron2").src="ron.jpg";
            document.getElementById("ron2").style.visibility = 'visible';
        }
        if(image5.src.match("off") && image10.src.match("off") && image6.src.match("on") && image7.src.match("on") && image9.src.match("on") && image4.src.match("on") && image11.src.match("on") ){
            document.getElementById("lon1").src="lon.jpg";
            document.getElementById("lon1").style.visibility = 'visible';
            document.getElementById("ron2").src="ron.jpg";
            document.getElementById("ron2").style.visibility = 'visible';
        }
        


   
}








function a1() {
    var image = document.getElementById('b1');	

    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b1r').style.display="none";
    document.getElementById('b1g').style.display="block";

    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b1r').style.display="block";
    document.getElementById('b1g').style.display="none";
    //var i1='0';
    }
ledchng();
}
function a2() {
    var image = document.getElementById('b2');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b2r').style.display="none";
    document.getElementById('b2g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b2r').style.display="block";
    document.getElementById('b2g').style.display="none";
    //var i1='0';
    }
    ledchng();
}
function a3() {
    var image = document.getElementById('b3');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b3r').style.display="none";
    document.getElementById('b3g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b3r').style.display="block";
    document.getElementById('b3g').style.display="none";
    //var i1='0';
    }
    ledchng();
}
function a4() {
    var image = document.getElementById('b4');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b4r').style.display="none";
    document.getElementById('b4g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b4r').style.display="block";
    document.getElementById('b4g').style.display="none";
    //var i1='0';
    }
    ledchng();
}

function a5() {
    var image = document.getElementById('b5');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b5r').style.display="none";
    document.getElementById('b5g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b5r').style.display="block";
    document.getElementById('b5g').style.display="none";
    //var i1='0';
    }
    ledchng();
}
function a6() {
    var image = document.getElementById('b6');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b6r').style.display="none";
    document.getElementById('b6g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b6r').style.display="block";
    document.getElementById('b6g').style.display="none";
    //var i1='0';
    }
    ledchng();
}
function a7() {
    var image = document.getElementById('b7');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b7r').style.display="none";
    document.getElementById('b7g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b7r').style.display="block";
    document.getElementById('b7g').style.display="none";
    //var i1='0';
    }
    ledchng();
}
function a8() {
    var image = document.getElementById('b8');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b8r').style.display="none";
    document.getElementById('b8g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b8r').style.display="block";
    document.getElementById('b8g').style.display="none";
    //var i1='0';
    }
    ledchng();
}
function a9() {
    var image = document.getElementById('b9');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b9r').style.display="none";
    document.getElementById('b9g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b9r').style.display="block";
    document.getElementById('b9g').style.display="none";
    //var i1='0';
    }
    ledchng();
}
function a10() {
    var image = document.getElementById('b10');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b10r').style.display="none";
    document.getElementById('b10g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b10r').style.display="block";
    document.getElementById('b10g').style.display="none";
    //var i1='0';
    }
    ledchng();
}
function a11() {
    var image = document.getElementById('b11');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b11r').style.display="none";
    document.getElementById('b11g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b11r').style.display="block";
    document.getElementById('b11g').style.display="none";
    //var i1='0';
    }
    ledchng();
}
function a12() {
    var image = document.getElementById('b12');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b12r').style.display="none";
    document.getElementById('b12g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b12r').style.display="block";
    document.getElementById('b12g').style.display="none";
    //var i1='0';
    }
    ledchng();
}

function a13() {
    var image = document.getElementById('b13');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b13r').style.display="none";
    document.getElementById('b13g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b13r').style.display="block";
    document.getElementById('b13g').style.display="none";
    //var i1='0';
    }
    ledchng();
}
function a14() {
    var image = document.getElementById('b14');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b14r').style.display="none";
    document.getElementById('b14g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b14r').style.display="block";
    document.getElementById('b14g').style.display="none";
    //var i1='0';
    }
    ledchng();
}

/*function l1() {
    var image = document.getElementById('lon1');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    //var i1='0';
    }
    ledchng();
}
function r2() {
    var image = document.getElementById('ron2');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    //var i1='0';
    }
    ledchng();
}*/