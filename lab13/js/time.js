// time.js
// Learning about how to debug codes
// Author: Yulitsa Pantoja <ypantoja@csumb.edu>
// Source Credit:  http://jsfiddle.net/Ankit47/6wm3eky9/
// Created: March 2021
// License: Public Domain

  var timeLeft = 30;
  var timeElement = document.getElementById("safe-timer-display");
  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        endDisplayMessage();
      } else {
          timeElement.innerHTML = '00:'+timeLeft;
          timeLeft--;
      }
  }

  function endDisplayMessage() {
    alert("30 seconds have passed");
  }
