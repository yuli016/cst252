// advanced.js
// Learning about more advanced javascript
// Author: Yulitsa Pantoja <ypantoja@csumb.edu>
// Created: April 2021
// License: Public Domain

  // Add a click event to each button
  $("#challenge-button1").click(function(){
  	$("#challenge-button1").toggleClass("button1")
    $("#border1").toggleClass("peach")

  })

  $("#challenge-button2").click(function(){
    $("#challenge-button2").toggleClass("button2")
    $("#border2").toggleClass("lavender")
  })

  $("#challenge-button3").click(function(){
    $("#challenge-button3").toggleClass("button3")
    $("#border3").toggleClass("golden")
  })
