// lab.js
// Learning about HTML DOM and how to add new element in Js
// Author: Yulitsa Pantoja <ypantoja@csumb.edu>
// Source Credit: Wes Modes <wmodes@ucsc.edu>
// Created: March 2021
// License: Public Domain


  window.onload = function () {

  // Use getElementById() to find your output <div> and assign it to a variable outputEl
    var outputElement = document.getElementById("output")
    console.log("outputElement: ", outputElement);


  // Create a new element with document.createElement("p") and assign it to a variable new1El
    var newElement1 = document.createElement("p");


  // Change the html attribute of new1El to say something new.
    newElement1.innerHTML = "This is the New Element 1.";
    newElement1.id = "New-Element-1";


  // Create another new element and assign it to a variable new2El
    var newElement2 = document.createElement("p");
    newElement1.id = "New-Element-2";


  // Change the html attribute of new2El to say something else.
    newElement2.innerHTML = "This is the New Element 2.";


  // Append both new elements one at a time using appendChild()
    outputElement.appendChild(newElement1);
    outputElement.appendChild(newElement2);


  // Change the css attributes of at least two elements of your page
    newElement1.style.color = "#7ce6ff"
    newElement1.style.fontSize = "40px"
    newElement2.style.color = "#c4c0fc"
    newElement2.style.textAlign = "center"
    outputElement.style.border = "dotted 10px #9fff96"
  }
