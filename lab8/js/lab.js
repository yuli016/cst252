// lab.js
// Learning Anon Functions and Callbacks
// Author: Yulitsa Pantoja <ypantoja@csumb.edu>
// Source Credit: Wes Modes <wmodes@ucsc.edu>
// Created: February 2021
// License: Public Domain

  var outputEl = document.getElementById("output");

  function isEven(x){
     return (x % 2 == 0);
  }

  // test function
  console.log("Is 1 even? ", isEven(1));
  console.log("Is 2 even? ", isEven(2));



//Create an array of numbers and assign it to a variable.
  numberArray = [3.14, 55, 77, 2, 34, 23, 10, 123, 66]
  console.log("My numberArray", numberArray);
  // add array to document
  var newEl = document.createElement("p");
  newEl.innerHTML = "Original Array:" + JSON.stringify(numberArray);
  outputEl.appendChild(newEl);



//Create an array of numbers Even True or False
  var result = numberArray.map(isEven);
  // should return [true, false, true, true, true, true, true]
  console.log("Test of evenness of array:", result);
  // add array to document
  var newEl = document.createElement("p");
  newEl.innerHTML = "Evenness of the Array:" + JSON.stringify(result);
  outputEl.appendChild(newEl);



//Create an array of numbers Squared Root
  var result = numberArray.map(function(x){
     return x**2;
  })
  console.log("Squareroot of array:", result);
  // add array to document
  var newEl = document.createElement("p");
  newEl.innerHTML = "Squareroots of the Array:" + JSON.stringify(result);
  outputEl.appendChild(newEl);
