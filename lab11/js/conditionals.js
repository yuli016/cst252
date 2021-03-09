// conditionals.js
// Learning about how to create a function that depends on conditionals in javascript
// Author: Yulitsa Pantoja <ypantoja@csumb.edu>
// Source Credit: Wes Modes <wmodes@ucsc.edu>
// Created: March 2021
// License: Public Domain


  // Create a function sortingHat()
  // that takes a string as an argument: function sortingHat(name)
  function sortingHat (name) {
    // counts the letters in str and assigns it to a variable len
    var len = name.length;
    console.log("length:", len);

    // uses modulus (% operator) to get the remainder with 4: mod = len % 4;
    var mod = len % 4;
    console.log("mod:", mod);

    // mod will now be a value between 0 and 3
    // create a conditional that will return Gryffindor, Ravenclaw, Slytherin,
    // and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
    if (mod == 0) {
      outputElement.style.color = "#d92744"
      return "Black Eagles"
    } else if (mod == 1) {
        outputElement.style.color = "#3145a5"
        return "Blue Lions"
    } else if (mod === 2) {
        outputElement.style.color = "#c6a32c"
        return "Golden Deer"
    } else if (mod == 3) {
        outputElement.style.color = "#aba5cb"
        return "Ashen Wolves"
    }
  }

    var buttonElement = document.getElementById("my-button");
    console.log(buttonElement);

    var inputElement = document.getElementById("input");
    console.log(inputElement);

    var outputElement = document.getElementById("house-assigned");
    console.log(outputElement);

  // Create an event listener attached to #button
    buttonElement.addEventListener("click", function() {
      // that gets the value of #input and assigns it to a variable name
      // get value from input field
        var name = document.getElementById("input").value;
      // use name to get house from SortingHat function
        var house = sortingHat(name);
      // output to output div (adding some text and HTML around the results)
        var newText = "<div>This is the house you will be joining " + house +"</div>";
        document.getElementById("house-assigned").innerHTML = newText;
    })
