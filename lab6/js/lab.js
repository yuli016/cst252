// lab.js
// Learning how to use Javascript and playing with variables
// Author: Yulitsa Pantoja <ypantoja@ucsc.edu>
// Source Credit: Wes Modes <wmodes@ucsc.edu>
// Created: February 2021
// License: Public Domain


// Define Variables
myTransport = ["Honda Civic", "car rides from friends", "bus", "bike"];


// Declare all the variables you created in Task 1 in this JavaScript file
myMainRide = {
    make: "Honda",
    model : "Civic",
    color : "White",
    year : 2016,
    age : function() {
        return 2021 - this.year;
    }
}


// Use document.writeln() to neatly output myTransport, example, document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("The age of my ", myMainRide.model, " is ", myMainRide.age(), " years.");
