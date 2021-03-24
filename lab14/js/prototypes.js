// prototypes.js
// Learning about how to create a object prototypes in javascript
// Author: Yulitsa Pantoja <ypantoja@csumb.edu>
// Source Credit: Wes Modes <wmodes@ucsc.edu>
// Created: March 2021
// License: Public Domain


// Create a constructor for vehicles called Vehicle, including make, model, year, color, and extras.
    function Vehicle(make, model, year, color, extras) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.extras = extras;
    // Add a method info() to your constructor that neatly returns a string with all that information
    this.info = function() {
      return this.color + " " + this.year + " " + this.make + " " +  this.model + " with " +  this.extras;
    }
  }

  // Instantiate objects with your constructor for every vehicle you've ever owned:
  var vehicles = [];

  vehicles.push(new Vehicle("Honda", "Civic", 2017, "Black", "Stickers"));
  vehicles.push(new Vehicle("Honda", "Pilot", 2011, "Silver", "some detents"));
  vehicles.push(new Vehicle("Schwinn", "Kempo Hybrid Bike", 2019, "Green", "basket"));

  outputEl = document.getElementById("output");
  for (var i = 0; i<vehicles.length; i++) {
    var newEl = document.createElement("li");
    newEl.innerText = vehicles[i].info();
    outputEl.appendChild(newEl);
  }
