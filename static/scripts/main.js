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

if (window.innerWidth < 840) {
  alert('This website is not properly formatted for mobile devices. If possible, visit from a Desktop.');
}