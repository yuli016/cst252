// jquery.js
// Learning about how to use jQuery to style, add, to give functions to elements
// Author: Yulitsa Pantoja <ypantoja@csumb.edu>
// Source Credit: Wes Modes <wmodes@ucsc.edu>
// Created: April 2021
// License: Public Domain

  // Using jQuery, do the following:
  // Create a <button> element (in jQuery, NOT In your HTML).
  // Give it a text label
  // Add it to your output div
  $("#output").append("<button id='my-button'>Press This Button</button>")

  // Add a click event to it that will bring up an alert
  $("#my-button").click(function(){
    alert("This is an alert message.");
  })

  // Restyle the button with jQuery so it is a pleasant green.
  $("#my-button").css({
    "color": "mintcream",
    "background-color": "#043927",
    "padding": "20px",
    "font-size": "20px",
    "border": "dashed #98fb98 5px",
    "border-radius": "10px"
  })
