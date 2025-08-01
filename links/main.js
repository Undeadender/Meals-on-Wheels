function navFunction() {
  var x = document.getElementById("nav-sec");
  var y = document.getElementById("drive-sec");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}
function driveFunction() {
  var x = document.getElementById("nav-sec");
  var y = document.getElementById("drive-sec");
  if (y.style.display === "block") {
    y.style.display = "none";
    x.style.display = "none";
  } else {
    y.style.display = "block";
    x.style.display = "none";
  }
}