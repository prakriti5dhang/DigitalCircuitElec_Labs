/*Lab:exp_8_Part1_Flip Flop S-R flipflop
	File name: ledonoff_exp8p1.js
    Author:Prakriti Dhang*/

    
    var vcc1, vcc2, gnd1, gnd2;
    var S, R, clkp;

    
    
    function ledchng(){



       
        var  s = document.getElementById('b1');  /* S */
        var r= document.getElementById('b2'); /* R */
         var vcc1 = document.getElementById('b3'); /* VCC1 */
        var vcc2 = document.getElementById('b4');/* VCC2 */
        var gnd1 = document.getElementById('b5');  /* GND1 */
       var gnd2 = document.getElementById('b6'); /* GND2 */
    

    
            
        

            
           


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
         S =1;
            
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b1r').style.display="block";
            document.getElementById('b1g').style.display="none";
             S=0;
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
             R=1	;	
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b2r').style.display="block";
            document.getElementById('b2g').style.display="none";
             R=0;
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
           
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b3r').style.display="block";
            document.getElementById('b3g').style.display="none";
             
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
            
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b4r').style.display="block";
            document.getElementById('b4g').style.display="none";
             
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
             
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b5r').style.display="block";
            document.getElementById('b5g').style.display="none";
             
            }
            ledchng();
            
        }
        function a6() {
            var image = document.getElementById('b6');		
            if (image.src.match("red")) 
        {
            image.src = "green.JPG";
            document.getElementById('b5r').style.display="none";
            document.getElementById('b5g').style.display="block";
             
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('b5r').style.display="block";
            document.getElementById('b5g').style.display="none";
             
            }
            ledchng();
            
        }
        function clockstrt() {
            var image = document.getElementById('clk');		
            if (image.value.match("Clock Start")) 
        {
            image.src = "green.JPG";
            document.getElementById('red').style.display="none";
            document.getElementById('green').style.display="block";
            document.getElementById('clk').value="Clock Stop";
            document.getElementById('clk').style.background="red";
            document.getElementById('graphshow').style.display="block";
            clkp="1"	;	
            } 
        else
        {
            image.src = "red.JPG";
            document.getElementById('red').style.display="block";
            document.getElementById('green').style.display="none";
            document.getElementById('clk').value="Clock Start";
            document.getElementById('clk').style.background="#d9e2f0";
           // document.getElementById('graphshow').style.display="none";

             clkp="0";
            }
            
        }
        
        function graphclose(){
            document.getElementById('graphshow').style.display="none";
        }
        