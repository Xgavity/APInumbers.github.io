$(document).ready(function(){
    $("input").keypress(function(){
      var cocktail;
var number = document.getElementById("number").value;
var text = document.getElementById("math");
var call = "http://numbersapi.com/"+ number +"/math?json"
var head = document.getElementById("header")
head.innerHTML = call;
fetch(`http://numbersapi.com/${number}/math?json`)
  .then((response) => response.json())
  .then((data) => {
    text.innerHTML = data.text
  })
    });
  });
