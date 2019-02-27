var mouseX = 10;






window.onload = function() {
 // load canvas and graphic content
 canvas = document.getElementById("myCanvas");
 gc = canvas.getContext("2d");
    
//Event listeners
 document.addEventListener("click",mouseClickHandler,false);  
 window.setInterval(render,35);
console.log("event..");
    
 //Loading images
 background=document.getElementById("background");    
 myMouse = document.getElementById("mouse");
 myCheese = document.getElementById("cheese");
       
 }
 
   function mouseClickHandler(event){  // on touch, move mouse
  mouseX += 100;    
  }

function render() {     
 gc.drawImage(background,0,0);  // draw background
 gc.drawImage(myCheese,1000,750); // draw cheese
 gc.drawImage(myMouse,mouseX,650); // draw mouse


if(mouseX >= 1000){
     swal({   //Sweet alert JS library
  title: "Thank you for your help!",
  type: "info",
  showCancelButton: false,
  confirmButtonColor: "#006600",
  confirmButtonText: "Continue",
  closeOnConfirm: true
},
function(isConfirm){
         
console.log("done..");         
window.location.href="task3.html";        
});  
}
}