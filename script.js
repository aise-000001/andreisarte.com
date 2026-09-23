document.getElementById("year").textContent = new Date().getFullYear();

const consoleBox = document.getElementById("jarvisConsole");
const toggle = document.getElementById("jarvisToggle");
const closeBtn = document.getElementById("jarvisClose");
const log = document.getElementById("jarvisLog");
const input = document.getElementById("jarvisInput");
const form = document.getElementById("jarvisForm");

const introBackdrop = document.createElement("div");
introBackdrop.className = "jarvis-intro-backdrop";
document.body.appendChild(introBackdrop);

const introCopy = document.createElement("div");
introCopy.className = "jarvis-intro-copy";
document.body.appendChild(introCopy);

let introActive = false;
let introTimer;
let introPhaseTimer;
let standbyTimer;

function finishIntro(openJarvis = false) {
  if (!introActive) return;
  introActive = false;
  clearTimeout(introTimer);
  clearTimeout(introPhaseTimer);
  introCopy.classList.remove("visible");
  toggle.classList.remove("jarvis-intro");
  introBackdrop.classList.remove("active");
  setTimeout(() => introCopy.classList.remove("arrival"), 700);
  if (openJarvis) setTimeout(openConsole, 900);
  else setTimeout(introduceJarvis, 950);
}

function showJarvisArrival() {
  if (!introActive) return;
  introCopy.classList.remove("visible");

  setTimeout(() => {
    if (!introActive) return;
    toggle.style.visibility = "";
    toggle.classList.add("jarvis-intro");
    introCopy.classList.add("arrival");
    introCopy.innerHTML = "JARVIS // INITIALIZING<br>AISE DOMAIN ONLINE";
    requestAnimationFrame(() => introCopy.classList.add("visible"));
  }, 450);
}

function startIntro() {
  introActive = true;
  toggle.style.visibility = "hidden";
  introBackdrop.classList.add("active");
  introCopy.innerHTML = "<strong>WELCOME.<br>YOU HAVE ARRIVED.</strong>Please wait as your assistant arrives.";

  setTimeout(() => introCopy.classList.add("visible"), 250);

  introPhaseTimer = setTimeout(showJarvisArrival, 2400);
  introTimer = setTimeout(() => finishIntro(false), 5000);
}

function openConsole() {
  consoleBox.style.display = "flex";
  setTimeout(() => input.focus(), 0);
}

toggle.addEventListener("click", () => {
  if (introActive) {
    finishIntro(true);
    return;
  }
  openConsole();
});

closeBtn.addEventListener("click", () => { consoleBox.style.display = "none"; });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (introActive) finishIntro(false);
    else consoleBox.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  const command = value.toLowerCase();

  const userLine = document.createElement("div");
  userLine.textContent = "> " + value;
  log.appendChild(userLine);
  input.value = "";

  const response = document.createElement("div");
  if (command === "status") response.textContent = "JARVIS SE ONLINE // AISE DOMAIN INTERFACE ACTIVE.";
  else if (command === "hierarchy") response.textContent = "PUBLIC INTERFACE: AISE > JARVIS > DOMAIN NAVIGATION.";
  else if (command === "advisors") response.textContent = "ADVISORY SYSTEMS ARE NOT PART OF THE PUBLIC INTERFACE.";
  else if (command === "boundaries") response.textContent = "BOUNDARY: PUBLIC AISE DOMAIN INFORMATION ONLY.";
  else response.textContent = "UNKNOWN COMMAND.";

  log.appendChild(response);
  log.scrollTop = log.scrollHeight;
});

startIntro();
