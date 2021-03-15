////////////////////////////////////////////////////////////////////////////////////////// Modal
var modal = document.getElementById("myModal");
var mcont = document.getElementById("mcontent");
var mthanks = document.getElementById("mthanks");
var cort = document.getElementById("acortina");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  document.getElementById("theform").reset();
  modal.style.display = "block";
  cort.style.opacity = 0.7;
}

function thankyou() {
  mcont.style.display = "none";
  mthanks.style.display = "block";
  // document.getElementById("theform").submit();
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal.style.display = "none";
  cort.style.opacity = 0;
}
span2.onclick = function() {
  modal.style.display = "none";
  mcont.style.display = "block";
  mthanks.style.display = "none";
  cort.style.opacity = 0;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    mcont.style.display = "block";
    mthanks.style.display = "none";
    cort.style.opacity = 0;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////
