var iOS;
var android;


function insert(){
  var iOSValue = document.getElementById("ios").value;
  var androidValue = document.getElementById("android").value;   
   
    //we could also use .push()
  iOS = iOSValue;  
  android = androidValue; 
 console.log("1");
    console.log(iOS);
    console.log(android);
}

function show(){
    var content = "<h1>You have the following bookings</h1>";
    
    content += "<h3>Customer Names</h3>";
    for(var i=0; i < customer.length; i++){
        content += "Booking ref: " + (i+1) + ">" + iOS[i] + "<br/>";
    }
    
    content += "<h3>Film Titles</h3>";
    for(var i=0; i < film.length; i++){
        content += "Booking ref: " + (i+1) + ">" + android[i] + "<br/>";
    }
    
    document.getElementById("display").innerHTML = content;
}


    function saveAndShow(){
        insert();
        show();
    }
