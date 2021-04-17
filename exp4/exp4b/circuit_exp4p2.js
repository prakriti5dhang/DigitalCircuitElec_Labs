/*Lab:exp_4_Part2_Multiplexer
	File name: circuit_exp4p2.js
    Author:Prakriti Dhang*/


    function ledchng(){

        var image1 = document.getElementById('b1'); /* B2 PIN 6*/
        var image2 = document.getElementById('b2'); /* A2 PIN 5*/
        var image3 = document.getElementById('b3'); /* B1  PIN 3*/
        var image4 = document.getElementById('b4'); /* A1  PIN 2*/
        var image5 = document.getElementById('b5'); /* SELECT  PIN 1*/
        var image6 = document.getElementById('b6'); /* VCC  PIN 16*/
        var image7 = document.getElementById('b7'); /* STROBE PIN 15*/
        var image8 = document.getElementById('b8'); /* A4 PIN 14*/
        var image9 = document.getElementById('b9');  /* B4 PIN 13*/
        var image10 = document.getElementById('b10');  /* A3 PIN 11*/
        var image11 = document.getElementById('b11'); /* B3 PIN 10*/
        var image12 = document.getElementById('b12'); /* GND PIN 8*/



        if(image12.src.match("on")){
            document.getElementById("g").style.visibility = 'visible';
            document.getElementById("showalt").style.visibility = 'visible';
           
        }
       else {
            document.getElementById("g").style.visibility = 'hidden';
            document.getElementById("showalt").style.visibility = 'hidden';

        }
if (image6.src.match("off")){
            document.getElementById("v").style.visibility = 'visible';
            document.getElementById("showalt").style.visibility = 'visible';

        }
        else{
            document.getElementById("v").style.visibility = 'hidden';
           


        }
/* truth table 1 */
        if ((image6.src.match("on") )&& (image7.src.match("on") )) {
            document.getElementById('lon1').style.visibility="hidden";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&& (image4.src.match("off"))&&(image5.src.match("off"))) {
            document.getElementById('lon1').style.visibility="hidden";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&& (image4.src.match("on"))&&(image5.src.match("off"))) {
            document.getElementById('lon1').style.visibility="visible";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&& (image3.src.match("off"))&&(image5.src.match("on"))) {
            document.getElementById('lon1').style.visibility="hidden";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&&  (image3.src.match("on"))&&(image5.src.match("on"))) {
            document.getElementById('lon1').style.visibility="visible";
        }


        /* truth table 2 */
        if ((image6.src.match("on") )&& (image7.src.match("on") )) {
            document.getElementById('lon2').style.visibility="hidden";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&& (image2.src.match("off"))&&(image5.src.match("off"))) {
            document.getElementById('lon2').style.visibility="hidden";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&& (image2.src.match("on"))&&(image5.src.match("off"))) {
            document.getElementById('lon2').style.visibility="visible";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&& (image1.src.match("off"))&&(image5.src.match("on"))) {
            document.getElementById('lon2').style.visibility="hidden";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&&  (image1.src.match("on"))&&(image5.src.match("on"))) {
            document.getElementById('lon2').style.visibility="visible";
        }
        /* truth table 3 */
        if ((image6.src.match("on") )&& (image7.src.match("on") )) {
            document.getElementById('ron2').style.visibility="hidden";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&& (image10.src.match("off"))&&(image5.src.match("off"))) {
            document.getElementById('ron2').style.visibility="hidden";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&& (image10.src.match("on"))&&(image5.src.match("off"))) {
            document.getElementById('ron2').style.visibility="visible";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&& (image11.src.match("off"))&&(image5.src.match("on"))) {
            document.getElementById('ron2').style.visibility="hidden";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&&  (image11.src.match("on"))&&(image5.src.match("on"))) {
            document.getElementById('ron2').style.visibility="visible";
        }
        /* truth table 4 */
        if ((image6.src.match("on") )&& (image7.src.match("on") )) {
            document.getElementById('ron1').style.visibility="hidden";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&& (image8.src.match("off"))&&(image5.src.match("off"))) {
            document.getElementById('ron1').style.visibility="hidden";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&& (image8.src.match("on"))&&(image5.src.match("off"))) {
            document.getElementById('ron1').style.visibility="visible";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&& (image9.src.match("off"))&&(image5.src.match("on"))) {
            document.getElementById('ron1').style.visibility="hidden";
        }
        if ((image6.src.match("on") )&& (image7.src.match("off") )&&  (image9.src.match("on"))&&(image5.src.match("on"))) {
            document.getElementById('ron1').style.visibility="visible";
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

    /* truth table display */

   function dist1(){
    document.getElementById('mytable1').style.display="block";
    document.getElementById('mytable1').style.display="block";
    

    document.getElementById('mytable2').style.display="none";
    document.getElementById('mytable3').style.display="none";
    document.getElementById('mytable4').style.display="none";

   }
   function dist2(){
    document.getElementById('mytable1').style.display="none";
    document.getElementById('mytable2').style.display="block";
    document.getElementById('mytable3').style.display="none";
    document.getElementById('mytable4').style.display="none";
   }
   function dist3(){
    document.getElementById('mytable1').style.display="none";
    document.getElementById('mytable2').style.display="none";
    document.getElementById('mytable3').style.display="block";
    document.getElementById('mytable4').style.display="none";
   }
   function dist4(){
    document.getElementById('mytable1').style.display="none";
    document.getElementById('mytable2').style.display="none";
    document.getElementById('mytable3').style.display="none";
    document.getElementById('mytable4').style.display="block";
   
   }

