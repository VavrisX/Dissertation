var black = 1;

window.onload = function() {
 // load canvas and graphic content
 canvas = document.getElementById("myCanvas");
 gc = canvas.getContext("2d");
    
//Event listeners
 document.addEventListener("click",mouseClickHandler,false);  
 window.setInterval(render,35);
console.log("event..");
    
 //Loading images
 backgroundB = document.getElementById("backgroundB");    
 backgroundY = document.getElementById("backgroundY"); 
   
 swal({   //Sweet alert JS library
  title: "Tap on the screen when you see colour YELLOW",
  type: "info",
  showCancelButton: false,
  confirmButtonColor: "#006600",
  confirmButtonText: "I understand",
  closeOnConfirm: true
},
function(isConfirm){
window.setTimeout(yellow, 5000);
});    
 }
 
   function mouseClickHandler(event){  // on touch, move mouse
  if(black == 2){
      black = 0;
  swal({   //Sweet alert JS library
  title: "Task Finished!",
  type: "info",
  showCancelButton: false,
  confirmButtonColor: "#006600",
  confirmButtonText: "Continue",
  closeOnConfirm: true
},
function(isConfirm){
         
console.log("done..");         
window.location.href="task4.html";        
});  
  }  
  }

function render() {
  if(black == 1){
 gc.drawImage(backgroundB,0,0);  // draw backgroundB
}
}

function yellow(){
black = 2;    
gc.drawImage(backgroundY,0,0);  // draw backgroundY   
}