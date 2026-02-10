var gunActive = false;
var spotActive = false;
var secActive = false;
var logiActive = false;


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

function showroleinfo(roleSec, driveNavSec) {
  var a = document.getElementById(roleSec);
  var b = document.getElementById("drive-sec");
  var c = document.getElementById("nav-sec");
  var x = document.getElementById("whale-sec");
  var y = document.getElementById("sail-sec");
  
  if (roleSec === "spot-sec" || roleSec === "gun-sec") {
    y.style.display = "none";
    x.style.display = "block";
  } else {
    y.style.display = "block";
    x.style.display = "none";
  }
  if (driveNavSec === "nav-sec") {
    b.style.display = "none";
    c.style.display = "block";
  } else if (driveNavSec === "drive-sec") {
    b.style.display = "block";
    c.style.display = "none";
  } else {
    b.style.display = "none";
    c.style.display = "none";
  }
  if (a.style.display === "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }
}

function showall() {
  var x = document.getElementById("nav-sec");
  var y = document.getElementById("drive-sec");
  var z = document.getElementById("spot-sec");
  var a = document.getElementById("gun-sec");
  var b = document.getElementById("sec-sec");
  var c = document.getElementById("logi-sec");
  var d = document.getElementById("sail-sec");
  var e = document.getElementById("whale-sec");
  if (y.style.display === "block") {
    y.style.display = "none";
    x.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
  } else {
    y.style.display = "block";
    x.style.display = "block";
    z.style.display = "block";
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    d.style.display = "block";
    e.style.display = "block";
  }
}

function showquiz() {
  var x = document.getElementById("quiz-sec");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }  
}

function quizFunction(choice, other) {
  const x = document.getElementById(choice);
  const y = document.getElementById(other);
  x.style.display = "block";
  y.style.display = "none";
   
}

function resetquiz() {
  document.querySelectorAll("[id$='c']").forEach(el => {
    el.style.display = "block";
  });
  const ids = [
    "spot", "gun", "dlogi", "logi", "dsecu", "secu", 
    "dexp", "dq", "sda", "gq", "hmch", "sob", 
    "boom", "secuq", "logiq"
  ];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = "none";
    }
  });

}

