(function(){
  'use strict';

var clock = document.getElementById('clock');
var displayHex = false;

function workingClock(){
  var currentTime = new Date();
  var currentHour = currentTime.getHours();            //grabs the hours from the current time, minutes and seconds
  var currentMinute = currentTime.getMinutes();
  var currentSecond = currentTime.getSeconds();
  var hexCode = toHex(currentHour, currentMinute, currentSecond);   //assigns the value from the toHex function to a var with prior vars as arguments

  var time = ('0' + currentHour).slice(-2) + ':' + ('0' + currentMinute).slice(-2) + ':' + ('0' + currentSecond).slice(-2);  //creates a variable, adds 0, and removes it if 3 integers

  if (displayHex === false){
    clock.textContent = time;                   //assigns the time to the content of clock in our HTML
  }else{
    clock.textContent = hexCode;
  }
  // clock.textContent = time;                   //assigns the time to the content of clock in our HTML

  document.getElementById("body").style.backgroundColor = hexCode; //assigns the hex code as the background color of our element

  console.log(time);
  console.log(hexCode);                                             //testing in console

  setTimeout(workingClock, 100);

}

function toHex(hour, minute, second){
  return '#' + ('0' + hour.toString(16)).slice(-2) + ('0' + minute.toString(16)).slice(-2) + ('0' + second.toString(16)).slice(-2); //generates hex (and #) from time, then adds a 0 in front, then slices 2 from the right
}


clock.addEventListener("mouseover", function(){displayHex = true});
clock.addEventListener("mouseleave", function(){displayHex = false});

workingClock()

// window.setInterval(workingClock, 500);

  }());
