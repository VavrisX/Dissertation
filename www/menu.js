var system;  // system = localStorage.getItem('system');
var start;
var end;
var finalT;
var database = firebase.database();
var TimeX;
var DeviceX;

window.onload = function() {
 authenticate();     
}

function authenticate(){
firebase.auth().signInAnonymously().catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      
    var isAnonymous = user.isAnonymous;
   var uid = user.uid;
     if (firebase.auth().currentUser !== null){
        console.log("user id: " + firebase.auth().currentUser.uid);   }
  } 
});
}

function getTimeStart(){
   start = new Date().getTime();
   localStorage.setItem('startTime', start);
}

function getTimeEnd(){
   end = new Date().getTime();
   localStorage.setItem('endTime', end);
}

function calculate(){
start = localStorage.getItem('startTime'); 
end = localStorage.getItem('endTime');
    
finalT = (end - start) / 1000; 
localStorage.setItem('finalTime', finalT);   
}

function getiOS(){
    system ="iOS";
    localStorage.setItem('system', 'iOS');
    window.location.href="task2.html";
    
}

function getAndroid(){
    system ="Android";
    localStorage.setItem('system', 'Android');
    window.location.href="task2.html";
   
}


function exitApp(){
       // navigator.app.exitApp(); 
       // window.close();
    start = localStorage.getItem('startTime');
    console.log(start);
    }

function showResults(){
  var a = localStorage.getItem('startTime');
  var b = localStorage.getItem('endTime');
  var c = localStorage.getItem('finalTime');
  var d = localStorage.getItem('system');
        
 var content = "<h3>The following data was recorded:</h3>";   
    
 content += "Time: " + c + "<br/>";
    
 content += "System: " + d + "<br/>";   
 
 document.getElementById("display").innerHTML = content;
}

function writeUserData(uid, DeviceX, TimeX) {
    TimeX = localStorage.getItem('finalTime');
    DeviceX = localStorage.getItem('system');
  firebase.database().ref('Device/' + firebase.auth().currentUser.uid ).set({
    System: DeviceX,
    Time: TimeX,
  }); 
}



////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//Code for task 4
function submitText() {
  var x = document.forms["myForm"]["textHappy"].value;

  if(x == "Happy" || x == "happy") {
         swal({   //Sweet alert JS library
  title: "Correct, well done!",
  type: "info",
  showCancelButton: false,
  confirmButtonColor: "#006600",
  confirmButtonText: "Continue",
  closeOnConfirm: true
},
function(isConfirm){
getTimeEnd();
calculate();
writeUserData();
window.location.href="finished.html";  
});
        
    }
       
    
else if (x !== "happy" || x !== "Happy") {
      
     swal({   //Sweet alert JS library
  title: "Incorrect, try again!",
  type: "info",
  showCancelButton: false,
  confirmButtonColor: "#006600",
  confirmButtonText: "ok",
  closeOnConfirm: true
},
function(isConfirm){
});
  }
}