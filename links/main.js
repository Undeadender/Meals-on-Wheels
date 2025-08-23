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

