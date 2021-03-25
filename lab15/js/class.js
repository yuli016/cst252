// class.js
// Learning about how use classes instead of prototypes in javascript
// Author: Yulitsa Pantoja <ypantoja@csumb.edu>
// Source Credit: Wes Modes <wmodes@ucsc.edu>
// Created: March 2021
// License: Public Domain


  //Modify your JavaScript code to use classes instead of prototypes.
    class Vehicle {
      constructor(make, model, year, color, extras) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.extras = extras;
      }
      info() {
        return this.color + " " + this.year + " " + this.make + " " +
        this.model + " with " +  this.extras;
      }
    }

  // Instantiate objects with your constructor for every vehicle you've ever owned:
  var vehicles = [];

  vehicles.push(new Vehicle("Honda", "Civic", 2017, "Black", "Stickers"));
  vehicles.push(new Vehicle("Honda", "Pilot", 2011, "Silver", "some detents"));
  vehicles.push(new Vehicle("Schwinn", "Kempo Hybrid Bike", 2019, "Green", "basket"));

  var outputEl = document.getElementById("output");

  for (var i = 0; i<vehicles.length; i++) {
    var newEl = document.createElement("li");
    newEl.innerText = vehicles[i].info();
    outputEl.appendChild(newEl);
  }
