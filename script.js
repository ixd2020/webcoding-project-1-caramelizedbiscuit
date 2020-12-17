/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function mobilemenu() {
  var x = document.getElementById("navbar");

  if (x.className === "navbar") {
    x.className = "navbar responsive";
  } else {
    x.className = "navbar";
  }
}

function loadingfinished() {
  setTimeout(showpage, 2000);
}

function showpage() {
  document.getElementById("preloader").style.display = "none";
}

(function() {
  "use strict";
  $("i").click(function() {
    $(this)
      .next()
      .animate({
        width: "250px"
      });
  });
});
