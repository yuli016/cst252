// event-form.js
// Learning about HTML events & creating HTML form fields in javascript
// Author: Yulitsa Pantoja <ypantoja@csumb.edu>
// Source Credit: Wes Modes <wmodes@ucsc.edu>
// Created: March 2021
// License: Public Domain


  //vars for button and results when changing name in the input name to show output name
  var buttonEl = document.getElementById("my-button");
  console.log("This is the button element:", buttonEl);

  var inputEl = document.getElementById("user-name");
  console.log("This is the input element:", inputEl);

  var outputEl = document.getElementById("change-name");
  console.log("This is the output element:", outputEl);



  //The Button Function effects when pushed
  buttonEl.addEventListener("click", function(){
    // get value from name element
    var userName = inputEl.value;

    //shuffle
    var newName = reorderUserName(userName);

    //output location
    outputEl.innerHTML = "<span id=change-name>" + newName + "</span>";
  });


  // Borrow the sort() function from Lab 7.
  //This is the Shuffing Effect
  // shuffleArray - take an array and shuffle the contents
  // Thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffleArray(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
      }
      return array;
  }

  // sortUserName - function that takes user input and sorts the letters of their name
  function reorderUserName(inputEl) {
      var wordArray = inputEl.split('');
      var newArray = shuffleArray(wordArray);
      return newArray.join('');
  }
