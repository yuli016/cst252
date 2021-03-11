// loops.js
// Learning about how to about for and while loops in javascript
// Author: Yulitsa Pantoja <ypantoja@csumb.edu>
// Source Credit: Wes Modes <wmodes@ucsc.edu>
// Created: March 2021
// License: Public Domain

  // Create a "FizzBuzz" function similar to how we did in class.
  // Loop through numbers 1 to 200, listing them as you go
  for ( var i=1; i<= 200; i++) {

    //Another way: For each number, create a new DOM element, change the innerHTML
    //to the text you want, and appendChild() to the end of your output div.
    var outputEl = document.getElementById("output");
    var printForNumber = document.createElement("p");
    printForNumber.style.color = "#3b3170"

    //If the number is a multiples of 3, 5 and 7 , print “FizzBuzzBoom” instead of the number.
    if (i%105 ==0) {
        printForNumber.innerHTML = i + " FizzBuzzBoom";
        outputEl.appendChild(printForNumber);
        console.log("FizzBuzzBoom");

    //If the number is a multiples of 7 and 5, print “BoomBuzz” instead of the number.
    } else if (i%35 == 0) {
      printForNumber.innerHTML = i + " BoomBuzz";
      outputEl.appendChild(printForNumber);
        console.log("BoomBuzz");

    //If the number is a multiples of 3 and 7, print “FizzBuzz” instead of the number.
    } else if (i%21 == 0) {
      printForNumber.innerHTML = i + " FizzBoom";
      outputEl.appendChild(printForNumber);
        console.log("FizzBoom");

    //If the number is a multiples of 3 and 5, print “FizzBuzz” instead of the number.
    } else if (i%15 == 0) {
      printForNumber.innerHTML = i + " FizzBuzz";
      outputEl.appendChild(printForNumber);
        console.log("FizzBuzz");

    //If the number is a multiple of 3, print “Fizz” instead of the number.
    } else if (i%3 == 0) {
      printForNumber.innerHTML = i + " Fizz";
      outputEl.appendChild(printForNumber);
      console.log("Fizz");

    //If the number is a multiple of 5, print “Buzz” instead of the number.
    } else if (i%5 == 0) {
      printForNumber.innerHTML = i + " Buzz";
      outputEl.appendChild(printForNumber);
      console.log("Buzz");

    //If the number is a multiple of 7, print “Boom” instead of the number.
    } else if (i%7 == 0) {
      printForNumber.innerHTML = i + " Boom";
      outputEl.appendChild(printForNumber);
      console.log("Boom");

    } else {
        console.log(i);
    }
  }
