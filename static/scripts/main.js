// Kindly borrowed by W3Schools (modified)

// Get the button:
let topbutton = document.getElementById("scroll-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunc()};

function scrollFunc() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.cursor = "pointer";
    topbutton.style.opacity = "1";
  } else {
    topbutton.style.cursor = "default";
    topbutton.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunc() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var start = new Date("Mar 17, 2024 13:00:00").getTime();
  var end = new Date("Apr 13, 2024 20:28:28").getTime();
  // Update countdown every 1 second
  var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();
      // Find distance between now and countdown date
      var distance = end - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Output result in element id="cntdn"
      document.getElementById("cntdn").innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";
      // If countdown over, write text
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("cntdn").innerHTML = "TIMER EXPIRED, PLEASE WAIT...";
      }
  }, 1000);
