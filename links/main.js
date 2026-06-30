
function toggleapx() {
  var x = document.getElementById("appx-sec"); 

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {  
    x.style.display = "block";
  }
}


function showpdf() {
  var x = document.getElementById("pdf-sec"); 
  var y = document.getElementById("web-text");
  var z = document.getElementById("web-but");
  var w = document.getElementById("pdf-but");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
    w.style.display = "block";
  } else {  
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "block";
    w.style.display = "none";
  }
}

function showToT(buttonEl) {
  var x = document.getElementById("ToT-sec");
  var element = buttonEl;
  if (x.style.display === "block") {
    x.style.display = "none";
    element.style.opacity = "0.5"; 
  } else {
    x.style.display = "block";
    element.style.opacity = "1";
  }}

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

function simptoggleSection(sectionId, buttonEl) {
  const section = document.getElementById(sectionId);
  const element = document.getElementById(buttonEl);
  if (section.style.display === "block") {
  section.style.display = "none";
  element.style.opacity = "0.5";
  } else {
    section.style.display = "block";
    element.style.opacity = "1";
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
  "whale-sec",
];

// Toggle a single section
function toggleSection(sectionId, buttonEl) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  // Toggle visibility
  const isVisible = window.getComputedStyle(section).display !== "none";
  section.style.display = isVisible ? "none" : "block";

  // Invert button color: now op-toggle when hidden
  if (buttonEl) buttonEl.classList.toggle("op-toggle", isVisible);

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
    if (whaleBtn) whaleBtn.classList.toggle("op-toggle", !showWhale); // inverted
  }

  // Sail: visible if any of logi, sec, drive, nav are visible
  const sail = document.getElementById("sail-sec");
  const sailBtn = document.querySelector("p[data-section='sail-sec']");
  const dependents = ["logi-sec", "sec-sec", "drive-sec", "nav-sec"].map(id => document.getElementById(id));
  if (sail) {
    const showSail = dependents.some(el => el && window.getComputedStyle(el).display !== "none");
    sail.style.display = showSail ? "block" : "none";
    if (sailBtn) sailBtn.classList.toggle("op-toggle", !showSail); // inverted
  }
}

// Show all sections
function showAll() {
  roleIds.forEach(id => {
    const section = document.getElementById(id);
    if (section) section.style.display = "block";

    const container = document.querySelector(`[data-section='${id}']`)?.parentElement;
    if (container) container.classList.remove("op-toggle"); // remove from parent div
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

    const container = document.querySelector(`[data-section='${id}']`)?.parentElement;
    if (container) container.classList.add("op-toggle"); // add to parent div
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
  document.querySelectorAll("[id$='x']").forEach(el => {
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

