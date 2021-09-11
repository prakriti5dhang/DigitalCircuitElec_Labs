/*Lab:exp_8_Part3_Flip Flop D flipflop
File name: ledonoff_exp8p3.js
Author:Prakriti Dhang*/


    
    var vcc1, vcc2, gnd1, gnd2;
    
    function ledchng(){



       
        var D= document.getElementById('b1'); /* R */
         var vcc1 = document.getElementById('b2'); /* VCC1 */
        var vcc2 = document.getElementById('b3');/* VCC2 */
        var gnd1 = document.getElementById('b4');  /* GND1 */
       var gnd2 = document.getElementById('b5'); /* GND2 */

    
            
        

            
           


        /* VCC connection */
        
         
        if((vcc.src.match("red"))  ){
            document.getElementById('showalt').style.visibility='visible';
            document.getElementById('v').style.visibility='visible';
            document.getElementById('gnd').style.visibility='hidden';
        
            
        
            document.getElementById("lon1").style.visibility="hidden";
            document.getElementById("lon2").style.visibility="hidden";
            document.getElementById("lon3").style.visibility="hidden";
            document.getElementById("lon4").style.visibility="hidden";
            document.getElementById("lon5").style.visibility="hidden";
            document.getElementById("lon6").style.visibility="hidden";
            document.getElementById("lon7").style.visibility="hidden";
            document.getElementById("lon8").style.visibility="hidden";
        
            document.getElementById("loff1").style.visibility="visible";
            document.getElementById("loff2").style.visibility="visible";
            document.getElementById("loff3").style.visibility="visible";
            document.getElementById("loff4").style.visibility="visible";
            document.getElementById("loff5").style.visibility="visible";
            document.getElementById("loff6").style.visibility="visible";
            document.getElementById("loff7").style.visibility="visible";
            document.getElementById("loff8").style.visibility="visible";
        
        }
        
        else{
            document.getElementById('showalt').style.visibility='hidden';
            document.getElementById('v').style.visibility='hidden';
            document.getElementById('gnd').style.visibility='hidden';
        }
        /* check GND connection and VCC */
          if(vcc.src.match("red") && gnd.src.match("green")){
            document.getElementById('gnd').style.visibility='visible';
            document.getElementById('showalt').style.visibility='visible';
            document.getElementById('v').style.visibility='visible';
            
        }
        else if (vcc.src.match("green") && gnd.src.match("red")){
            document.getElementById('gnd').style.visibility='hidden';
            document.getElementById('showalt').style.visibility='hidden';
            document.getElementById('v').style.visibility='hidden';
        
        }
        
        else if(vcc.src.match("red") && gnd.src.match("red")){
            document.getElementById('gnd').style.visibility='hidden';
            document.getElementById('showalt').style.visibility='visible';
            document.getElementById('v').style.visibility='visible';
            
        }
        else if(vcc.src.match("green") && gnd.src.match("green")){
            document.getElementById('gnd').style.visibility='visible';
            document.getElementById('showalt').style.visibility='visible';
            document.getElementById('v').style.visibility='hidden';
            
        }
        else{
            document.getElementById('gnd').style.visibility='hidden';
            document.getElementById('showalt').style.visibility='hidden';
            document.getElementById('v').style.visibility='hidden';
        }
        
        
        
        /* check GND connection */
         if(gnd.src.match("green")){
            document.getElementById('gnd').style.visibility='visible';
            document.getElementById('showalt').style.visibility='visible';
            document.getElementById("lon1").style.visibility="hidden";
            document.getElementById("lon2").style.visibility="hidden";
            document.getElementById("lon3").style.visibility="hidden";
            document.getElementById("lon4").style.visibility="hidden";
            document.getElementById("lon5").style.visibility="hidden";
            document.getElementById("lon6").style.visibility="hidden";
            document.getElementById("lon7").style.visibility="hidden";
            document.getElementById("lon8").style.visibility="hidden";
        
            document.getElementById("loff1").style.visibility="visible";
            document.getElementById("loff2").style.visibility="visible";
            document.getElementById("loff3").style.visibility="visible";
            document.getElementById("loff4").style.visibility="visible";
            document.getElementById("loff5").style.visibility="visible";
            document.getElementById("loff6").style.visibility="visible";
            document.getElementById("loff7").style.visibility="visible";
            document.getElementById("loff8").style.visibility="visible";
        
              
        }
        else {
            document.getElementById('gnd').style.visibility='hidden';
         
        }
        
        
        }


        function a1() {
            var image = document.getElementById('b1');	
        
            if (image.src.match("red")) 
        {
            image.src = "green.JPG";
            document.getElementById('b1r').style.display="none";
            document.getElementById('b1g').style.display="block";
         B0 =1;
            
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b1r').style.display="block";
            document.getElementById('b1g').style.display="none";
             B0=0;
            }
        ledchng();
        
        }
        function a2() {
            var image = document.getElementById('b2');		
            if (image.src.match("red")) 
        {
            image.src = "green.JPG";
            document.getElementById('b2r').style.display="none";
            document.getElementById('b2g').style.display="block";
             A0=1	;	
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b2r').style.display="block";
            document.getElementById('b2g').style.display="none";
             A0=0;
            }
            ledchng();
        }
        function a3() {
            var image = document.getElementById('b3');		
            if (image.src.match("red")) 
        {
            image.src = "green.JPG";
            document.getElementById('b3r').style.display="none";
            document.getElementById('b3g').style.display="block";
             S3=1	;
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b3r').style.display="block";
            document.getElementById('b3g').style.display="none";
             S3=0	;
            }
            ledchng();
        }
        function a4() {
            var image = document.getElementById('b4');		
            if (image.src.match("red")) 
        {
            image.src = "green.JPG";
            document.getElementById('b4r').style.display="none";
            document.getElementById('b4g').style.display="block";
             S2=1	;	
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b4r').style.display="block";
            document.getElementById('b4g').style.display="none";
             S2=0	;
            }
            ledchng();
        }
        
        function a5() {
            var image = document.getElementById('b5');		
            if (image.src.match("red")) 
        {
            image.src = "green.JPG";
            document.getElementById('b5r').style.display="none";
            document.getElementById('b5g').style.display="block";
             S1=1	;
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b5r').style.display="block";
            document.getElementById('b5g').style.display="none";
             S1=0	;
            }
            ledchng();
            
        }
        function clockstrt() {
            var image = document.getElementById('clk');		
            if (image.value.match("Clock Start") )
            
        {
           
            document.getElementById('red').style.display="none";
            document.getElementById('green').style.display="block";
            document.getElementById('clk').value="Clock Stop";
            S0="1"	;	
            } 
        else
        {
            
            document.getElementById('red').style.display="block";
            document.getElementById('green').style.display="none";
            document.getElementById('clk').value="Clock Start";
             S0="0";
            }
            ledchng();
        }
        
        