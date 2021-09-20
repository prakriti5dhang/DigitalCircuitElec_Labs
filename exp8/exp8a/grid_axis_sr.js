/*Lab:exp_8_Part1_Flip Flop S-R flipflop
	File name: grid_axis_sr.js
    Author:Prakriti Dhang*/


    var canvas;
    var ctxc;
    var cwidth, cheight;
    var ctxq;
    var ctxqb;
    var ctxr;

    function drawGridclk(){


        /*   Draw Grid for Clock Pulse */
    canvas = document.getElementById("myCanvasclk");
     ctxc = canvas.getContext("2d");
   cwidth=  ctxc.canvas.width;
   cheight= ctxc.canvas.height;
   
   
    ctxc.beginPath();
    for (x=0;x<=cwidth;x+=55) {
        ctxc.moveTo(x, 0);
        ctxc.lineTo(x, cheight);
        //ctx.fillText("x", 1, 50);
    }
        for (y=0;y<=cheight;y+=10) {
            ctxc.moveTo(0, y);
            ctxc.lineTo(cwidth, y);
           
        }
        canvas.style.background = "black"; 
        ctxc.strokeStyle = "Gainsboro";  
        ctxc.lineWidth = 0.3;
        //ctx.fillText("x", 1, 50);
       
        ctxc.stroke();
        
        
    }


    function clockpulse(){
    
        drawGridclk(ctxc);
        var tempx=0; // starting postion of the wave
        var tempy=60; // starting position of the wave in x axis
        var vpss=2; // y axis position
        var phsw=0;  // position of the wave in x axis
        var posts=0; //position of the wave in y axis
        var  fos=20; //width of the  each pulse in square wave
        var dtyc=2; // space between pulses
        ctxc.lineWidth=1.5;
        ctxc.beginPath();
        for(var z=0; z<cwidth; z++){
            
          for(var x=0; x<=parseInt(fos); x++){
            tempx+=1;
           
            ctxc.lineTo(tempx-parseInt(phsw),parseInt(vpss)*tempy-50+parseInt(posts));
            
    
        }
        if(z%parseInt(dtyc)===0)
        {
            tempy=30;
        }
        else
        {
            tempy=60;
        }
    }
    ctxc.strokeStyle = "Green"; 
        
    ctxc.stroke();
      
    }


    

/*   Draw Grid for S */
function drawGrids(){
       canvas = document.getElementById("myCanvass");
     ctxs = canvas.getContext("2d");
   cwidth=  ctxs.canvas.width;
   cheight= ctxs.canvas.height;
   
    ctxs.beginPath();
    for (x=0;x<=cwidth;x+=55) {
        ctxs.moveTo(x, 0);
        ctxs.lineTo(x, cheight);
    }
        for (y=0;y<=cheight;y+=10) {
            ctxs.moveTo(0, y);
            ctxs.lineTo(cwidth, y);
           
        }
        canvas.style.background = "black"; 
        ctxs.strokeStyle = "Gainsboro";  
        ctxs.lineWidth = 0.3;
        ctxs.stroke();

    }


    function clockpulses(){

        drawGrids(ctxs);
        var tempx=0; // starting postion of the wave
        var tempy=60; // starting position of the wave in x axis
        var vpss=2; // y axis position
        var phsw=0;  // position of the wave in x axis
        var posts=0; //position of the wave in y axis
        var  fos=40; //width of the  each pulse in square wave
        var dtyc=2; // space between pulses
        ctxs.lineWidth=2;
        ctxs.beginPath();
        for(var z=0; z<cwidth; z++){
            
          for(var x=0; x<=parseInt(fos); x++){
            tempx+=1;
           
            ctxs.lineTo(tempx-parseInt(phsw),parseInt(vpss)*tempy-50+parseInt(posts));
           
    
        }
        if(z%parseInt(dtyc)===0)
        {
            tempy=30;
        }
        else
        {
            tempy=60;
        }
    }
        ctxs.strokeStyle = "Green"; 
        
        ctxs.stroke();
      

    }
    
        /*   Draw Grid for R */

        function drawGridr(){
      canvas = document.getElementById("myCanvasr");
         ctxr = canvas.getContext("2d");
       cwidth=  ctxr.canvas.width;
       cheight= ctxr.canvas.height;
       
        ctxr.beginPath();
        for (x=0;x<=cwidth;x+=55) {
            ctxr.moveTo(x, 0);
            ctxr.lineTo(x, cheight);
        }
            for (y=0;y<=cheight;y+=10) {
                ctxr.moveTo(0, y);
                ctxr.lineTo(cwidth, y);
               
            }
            canvas.style.background = "black"; 
            ctxr.strokeStyle = "Gainsboro";  
            ctxr.lineWidth = 0.3;
            ctxr.stroke();
        }


        function clockpulser(){

            drawGridr(ctxr);
            var tempx=0; // starting postion of the wave
            var tempy=60; // starting position of the wave in x axis
            var vpss=2; // y axis position
            var phsw=0;  // position of the wave in x axis
            var posts=0; //position of the wave in y axis
            var  fos=80; //width of the  each pulse in square wave
            var dtyc=2; // space between pulses
            ctxr.lineWidth=2;
            ctxr.beginPath();
            for(var z=0; z<cwidth; z++){
                
              for(var x=0; x<=parseInt(fos); x++){
                tempx+=1;
               
                ctxr.lineTo(tempx-parseInt(phsw),parseInt(vpss)*tempy-50+parseInt(posts));
               
        
            }
            if(z%parseInt(dtyc)===0)
            {
                tempy=30;
            }
            else
            {
                tempy=60;
            }
        }
            ctxr.strokeStyle = "Green"; 
            
            ctxr.stroke();
          

        }
/*   Draw Grid for Q  */

function drawGridq(){
           canvas = document.getElementById("myCanvasq");
            ctxq = canvas.getContext("2d");
           cwidth=  ctxq.canvas.width;
           cheight= ctxq.canvas.height;
           
            ctxq.beginPath();
            for (x=0;x<=cwidth;x+=55) {
                ctxq.moveTo(x, 0);
                ctxq.lineTo(x, cheight);
            }
                for (y=0;y<=cheight;y+=10) {
                    ctxq.moveTo(0, y);
                    ctxq.lineTo(cwidth, y);
                   
                }
                canvas.style.background = "black"; 
                ctxq.strokeStyle = "Gainsboro";  
                ctxq.lineWidth = 0.3;
                ctxq.stroke();


            }
                function clockpulseq(){
    
                    drawGridq(ctxq);
                    var tempx=0;
                    var tempy=60;
                    var vpss=2;
                    var phsw=0;
                    var posts=0;
                    var  fos=20;
                    var dtyc=2;
                    ctxq.lineWidth=2;
                    ctxq.beginPath();
                    for(var z=0; z<cwidth; z++){
                        
                      for(var x=0; x<=parseInt(fos); x++){
                        tempx+=1;
                       
                        ctxq.lineTo(tempx-parseInt(phsw),parseInt(vpss)*tempy-50+parseInt(posts));
                       
                
                    }
                    if(z%parseInt(dtyc)===0)
                    {
                        tempy=30;
                    }
                    else
                    {
                        tempy=60;
                    }
                }
                    ctxq.strokeStyle = "Green"; 
                    
                    ctxq.stroke();
                  
                }

/*   Draw Grid for Q bar */
function drawGridqbar(){
           canvas = document.getElementById("myCanvasqbar");
     ctxqb = canvas.getContext("2d");
   cwidth=  ctxqb.canvas.width;
   cheight= ctxqb.canvas.height;
   
    ctxqb.beginPath();
    for (x=0;x<=cwidth;x+=55) {
        ctxqb.moveTo(x, 0);
        ctxqb.lineTo(x, cheight);
    }
        for (y=0;y<=cheight;y+=10) {
            ctxqb.moveTo(0, y);
            ctxqb.lineTo(cwidth, y);
           
        }
        canvas.style.background = "black"; 
        ctxqb.strokeStyle = "Gainsboro";  
        ctxqb.lineWidth = 0.3;
        ctxqb.stroke();

}

function clockpulseqbar(){
    
    drawGridqbar(ctxqb);
    var tempx=0;
    var tempy=60;
    var vpss=2;
    var phsw=0;
    var posts=0;
    var  fos=20;
    var dtyc=2;
    ctxqb.lineWidth=2;
    ctxqb.beginPath();
    for(var z=0; z<cwidth; z++){
        
      for(var x=0; x<=parseInt(fos); x++){
        tempx+=1;
       
        ctxqb.lineTo(tempx-parseInt(phsw),parseInt(vpss)*tempy-50+parseInt(posts));
       

    }
    if(z%parseInt(dtyc)===0)
    {
        tempy=30;
    }
    else
    {
        tempy=60;
    }
}
    ctxqb.strokeStyle = "Green"; 
    
    ctxqb.stroke();
  
}


/*
initital values

var tempx=0;
        var tempy=60;
        var vpss=2;
        var phsw=0;
        var posts=0;
        var  fos=20;
        var dtyc=2;

        */