

 var cn;
 var m;

 function ledchngcall(){


    var b0 = document.getElementById('b1'); /* B0 */
    var a0 = document.getElementById('b2'); /* A0 */
 var  s3 = document.getElementById('b3'); /* S3 */
 var s2 = document.getElementById('b4'); /* S2 */
  var s1 = document.getElementById('b5'); /* S1 */
   var s0 = document.getElementById('b6'); /* S0 */
  var  a1 = document.getElementById('b9');  /* A1 */
  var b1 = document.getElementById('b10'); /* B1 */
   var a2 = document.getElementById('b11'); /* A2 */
  var b2 = document.getElementById('b12');/* B2 */
  var  a3 = document.getElementById('b13'); /* A3 */
  var b3 = document.getElementById('b14'); /* B3 */
   vcc = document.getElementById('b15');  /* VCC */
  gnd = document.getElementById('b16'); /* GND */
  
    cn = document.getElementById('b7'); /* Cn */
    m = document.getElementById('b8'); /* M */


     
      if ((m.src.match("green")) && (cn.src.match("red")) ){
          alert("logic");
         //ledchng();
         calllogic();
         ///loadLib("circuit_exp10p1");
      
        
        //<script type="text/javascript" src="circuit_exp10p1.js"></script>
     }
     
     if ((cn.src.match("green")) && (m.src.match("red"))){

        //ledchngarth();
        alert("arithmetic");
        callarithmetic();
       // loadLib("arithmeticnote2_exp10p1");
       // <script type="text/javascript" src="arithmeticnote2_exp10p1.js"></script>
   

     }

     

 }


 function a7() {
    var image = document.getElementById('b7');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b7r').style.display="none";
    document.getElementById('b7g').style.display="block";
    //  cn="1"	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b7r').style.display="block";
    document.getElementById('b7g').style.display="none";
    // cn="0";
    }
    ledchngcall();
}


function a8() {
    var image = document.getElementById('b8');		
    if (image.src.match("red")) 
{
    image.src = "green.JPG";
    document.getElementById('b8r').style.display="none";
    document.getElementById('b8g').style.display="block";
    // m="1"	;	
    } 
else
{
    image.src = "red.JPG";
    document.getElementById('b8r').style.display="block";
    document.getElementById('b8g').style.display="none";
    // m="0";
    }
    ledchngcall();
}



function calllogic(){
    var imported = document.createElement('script');
imported.src = 'circuit_exp10p1.js';
document.head.appendChild(imported);
   // document.writeln('<script type="text/javascript" src="circuit_exp10p1.js" ></script>');

}

function callarithmetic(){

    var imported = document.createElement('script');
imported.src = 'arithmeticnote2_exp10p1.js';
document.head.appendChild(imported);
   // document.writeln('<script type="text/javascript" src="arithmeticnote_exp10p1.js" ></script>');

}