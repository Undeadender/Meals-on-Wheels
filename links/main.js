

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

const roleIds = [
  "nav-sec",
  "drive-sec",
  "spot-sec",
  "gun-sec",
  "sec-sec",
  "logi-sec",
  "sail-sec",
  "whale-sec"
];

// Toggle a single section
function toggleSection(sectionId, buttonEl) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  // Toggle visibility
  const isVisible = window.getComputedStyle(section).display !== "none";
  section.style.display = isVisible ? "none" : "block";

  // Toggle button color
  if (buttonEl) buttonEl.classList.toggle("red-toggle", !isVisible);

  // Automatically update Sail/Whale
  syncDependentSections();
}

// Show or hide Sail and Whale based on dependencies
function syncDependentSections() {
  // Whale: visible if Gunner or Spotter is visible
  const whale = document.getElementById("whale-sec");
  const gun = document.getElementById("gun-sec");
  const spot = document.getElementById("spot-sec");
  const whaleBtn = document.querySelector("p[data-section='whale-sec']");
  if (whale) {
    const showWhale = (gun && window.getComputedStyle(gun).display !== "none") ||
                       (spot && window.getComputedStyle(spot).display !== "none");
    whale.style.display = showWhale ? "block" : "none";
    if (whaleBtn) whaleBtn.classList.toggle("red-toggle", showWhale);
  }

  // Sail: visible if any of logi, sec, drive, nav are visible
  const sail = document.getElementById("sail-sec");
  const sailBtn = document.querySelector("p[data-section='sail-sec']");
  const dependents = ["logi-sec", "sec-sec", "drive-sec", "nav-sec"].map(id => document.getElementById(id));
  if (sail) {
    const showSail = dependents.some(el => el && window.getComputedStyle(el).display !== "none");
    sail.style.display = showSail ? "block" : "none";
    if (sailBtn) sailBtn.classList.toggle("red-toggle", showSail);
  }
}

// Show all sections
function showAll() {
  roleIds.forEach(id => {
    const section = document.getElementById(id);
    if (section) section.style.display = "block";

    const button = document.querySelector(`p[data-section='${id}']`);
    if (button) button.classList.add("red-toggle");
  });

  syncDependentSections();

  document.getElementById("show-button").style.display = "none";
  document.getElementById("hide-button").style.display = "inline-block";
}

// Hide all sections
function hideAll() {
  roleIds.forEach(id => {
    const section = document.getElementById(id);
    if (section) section.style.display = "none";

    const button = document.querySelector(`p[data-section='${id}']`);
    if (button) button.classList.remove("red-toggle");
  });

  syncDependentSections();

  document.getElementById("show-button").style.display = "inline-block";
  document.getElementById("hide-button").style.display = "none";
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
  hideAll();
}

