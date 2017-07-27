(function(){
  'use strict';

var clock = document.getElementById('clock');

function workingClock(){
  var currentTime = new Date();
  var currentHour = currentTime.getHours();            //grabs the hours from the current time, minutes and seconds
  var currentMinute = currentTime.getMinutes();
  var currentSecond = currentTime.getSeconds();

  var time = ('0' + currentHour).slice(-2) + ':' + ('0' + currentMinute).slice(-2) + ':' + ('0' + currentSecond).slice(-2);  //creates a variable, adds 0, and removes it if 3 integers

  clock.textContent = time;                   //assigns the time to the content of clock in our HTML

  var hexCode = toHex(currentHour, currentMinute, currentSecond);   //assigns the value from the toHex function to a var with prior vars as arguments
  console.log(hexCode);                                             //testing in console

  document.getElementById("body").style.backgroundColor = hexCode; //assigns the hex code as the background color of our element

}

function toHex(hour, minute, second){
  return '#' + ('0' + hour.toString(16)).slice(-2) + ('0' + minute.toString(16)).slice(-2) + ('0' + second.toString(16)).slice(-2); //generates hex (and #) from time, then adds a 0 in front, then slices 2 from the right
}

window.setInterval(workingClock, 500);

  }());
