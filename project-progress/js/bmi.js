// https://code-boxx.com/simple-javascript-bmi-calculator/#sec-basics
  function measureBMI () {
    // true = metric, false = imperial
    let unit = document.getElementById("bmi-metric").checked,
        weight = document.getElementById("bmi-weight"),
        weightu = document.getElementById("bmi-weight-unit"),
        height = document.getElementById("bmi-height"),
        heightu = document.getElementById("bmi-height-unit");

    if (unit) {
      weightu.innerHTML = "kg";
      weight.min = 1;
      weight.max = 635;
      heightu.innerHTML = "cm";
      height.min = 54;
      height.max = 272;
    } else {
      weightu.innerHTML = "lbs";
      weight.min = 2;
      weight.max = 1400;
      heightu.innerHTML = "in";
      height.min = 21;
      height.max = 107;
    }
  }

  function calcBMI () {
    // (A) Get elements
    let bmi = null,
        unit = document.getElementById("bmi-metric").checked, // true = metric, false = imperial
        weight = parseInt(document.getElementById("bmi-weight").value),
        height = parseInt(document.getElementById("bmi-height").value),
        results = document.getElementById("bmi-results");

    // (B) Calculate BMI
    // Metric BMI = Mass (kg) / Height (m) square
    if (unit) {
      height = height / 100;
      bmi = weight / (height * height);
    }
    // Imperial BMI = 703 X Mass (lbs) / Height (in) square
    else {
      bmi = 703 * (weight / (height * height));
    }
    // Round off
    bmi = Math.round(bmi * 100) / 100; // Round off 2 decimal places

    // (C) Show Results
    if (bmi < 18.5) {
      results.innerHTML = bmi + " - Underweight";
    } else if (bmi < 25) {
      results.innerHTML = bmi + " - Normal weight";
    } else if (bmi < 30) {
      results.innerHTML = bmi + " - over weight";
    } else if (bmi < 35) {
      results.innerHTML = bmi + " - Obesity class I";
    } else if (bmi < 40) {
      results.innerHTML = bmi + " - Obesity class II";
    } else {
      results.innerHTML = bmi + " - Obesity class III";
    }
    return false;
  }


// source: https://websitebeaver.com/how-to-make-an-interactive-and-responsive-svg-map-of-us-states-capitals
    $("path, circle").hover(function(e) {
    $('#info-box').css('display','block');
    $('#info-box').html($(this).data('info'));
  });

  $("path, circle").mouseleave(function(e) {
    $('#info-box').css('display','none');
  });

  $(document).mousemove(function(e) {
    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
    $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
  }).mouseover();

  var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(ios) {
    $('a').on('click touchend', function() {
      var link = $(this).attr('href');
      window.open(link,'_blank');
      return false;
    });
  }
