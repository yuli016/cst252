// source: https://codepen.io/k4u4u4u/pen/BJPYJP

  var divs = ["yoga", "lift", "pushup", "situp"];
  var visibleDivId = null;

  function toggleVisibility(divId) {
    if(visibleDivId === divId) {
      //visibleDivId = null;
    } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
  }

  function hideNonVisibleDivs() {
    var i, divId, div;
    for(i = 0; i < divs.length; i++) {
      divId = divs[i];
      div = document.getElementById(divId);

      if(visibleDivId === divId) {
        div.style.display = "block";
          AOS.init({
          duration: 1200,
        })
      } else {
        div.style.display = "none";
      }
    }
  }
