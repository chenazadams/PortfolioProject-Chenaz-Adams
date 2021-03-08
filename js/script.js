console.log("Hi, welcome to my UX Portfolio");
console.log('hi everyone, welcome to my portfolio site');
console.log("UX/UI Designer and Content Creator, based in Munich");

var text1 = "Hey there!";
var text2 = "UX/UI";

var escapedText1 = "They say\"absolutely!\"why not?";
var escapedText2 = "He said: that\'s great!";

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
