var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Hello, I am " + myName + " I would like to recieve updates";

}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName + '. When do you want to schedule?';
  }

  var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/pixel-beach.png') {
      myImage.setAttribute ('src','img/pixel-beach2.png');
    } else {
      myImage.setAttribute ('src','img/pixel-beach.png');
    }
}
/*var myHeading = document.querySelector('h3');
myHeading.textContent = 'Hello world!'; 
*/
//these are examples of hello world
/*var myVariable;
myVariable = 'Rodger';
var myVariable2 = 'Rick';
var myArray= ['Leading customer service!', 'Quality and durability!', 'Call today! 424-243-2414']
*/
//practicing declaring variables and generating objects
/*
var iceCream = 'va';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}
//ice cream t/f example
*/
/*
function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
    
   
  }
alert(multiply(20, 20));
//example of function
*/
/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/
//or
/* 
var myHTML = document.querySelector('html');
myHTML.onclick = function() {};
*/
//example of events
