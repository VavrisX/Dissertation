var system;  // system = localStorage.getItem('system');
var start;
var end;
var finalT;
var database = firebase.database();
var TimeX;
var DeviceX;

document.addEventListener("deviceready", onDeviceReady, false);

window.onload = function() {
 authenticate();     
}
function onDeviceReady() { 

    
    
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
   authenticate();
   writeStartData();
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
     //  navigator.app.exitApp(); 
      //  window.close();

    writeStartData();
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
  var postData = {
    SystemUser: DeviceX,
    TimeFinal: TimeX,   
  };
  var newUpdateKey = firebase.database().ref().child('Device').push().key;  
    
    var updates = {};
    updates['Device/' + firebase.auth().currentUser.uid + newUpdateKey] = postData;
   return firebase.database().ref().update(updates);   
}


function writeStartData(uid, deviceReal, deviceVersion, timeStart) {
    var deviceReal = device.platform;
    var deviceVersion = device.version;
    var d = new Date();
    var timeStart = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    
    console.log(timeStart);
    console.log(deviceReal);
    console.log(deviceVersion);
    
  firebase.database().ref('Device/' + firebase.auth().currentUser.uid ).set({
    SystemReal: deviceReal,
    SystemVersion: deviceVersion,
    timeODStart: timeStart,
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