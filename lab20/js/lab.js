// lab.js
// JSONs & API
// Author: Yulitsa Pantoja <ypantoja@csumb.edu>
// Source Credit: Wes Modes <wmodes@csumb.edu>
// Created: April 2021
// License: Public Domain

// Read the docs at https://xkcd.com/json.html

// Try the API in the browser, e.g., https://xkcd.com/info.0.json

// Use $.ajax() method to retrieve the data in an variable called data

// Process the parts and add them to your webpage with the appropriate tags.
  // Give the section a title using the data.title key from the object
  // Create an image tag using the data.img key from the object
  // Give the image an alt attribute using the data.alt key from the object


  var URL = "https://xkcd.com/info.0.json";

  var URLpre = "https://xkcd.com/";
  var URLpost = "info.0.json";

  // Endpoint format: http://xkcd.com/614/info.0.json

  function getComic(num) {
    if (typeof num === 'undefined') {
      numStr = "";
    } else {
      numStr = num.toString() + "/";
    }
    var ourURL = URLpre + numStr + URLpost;
    // get data via ajax from numbersapi
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (ENDPOINT)
        url: ourURL,
        // Whether this is a POST or GET request
        type: "GET",
    })
    // If the request succeeds
    .done(function(data) {
        // console.log(data);
        var imageUrl = data.img;
        var title = data.title;
        var alt = data.alt;
        var comicNum = data.num;
        var html = `<div id="imageblock">
            <h2>${title}</h2>
            <img src="${imageUrl}" title="${alt}"><br>
            <button id="prev">Previous</button><button id="next">Next</button>
          </div>`
        console.log("My new html: ", html);
        $("#output").html(html);

        // add event listener to new prev button
        $("#prev").click(function(){
          getComic(comicNum - 1);
        });
        // add event listener to new next button
        $("#next").click(function(){
          getComic(comicNum + 1);
        });
    })
  }

  // start things off
  getComic();
