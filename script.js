document.getElementById("year").textContent = new Date().getFullYear();

const consoleBox = document.getElementById("jarvisConsole");
const toggle = document.getElementById("jarvisToggle");
const closeBtn = document.getElementById("jarvisClose");
const log = document.getElementById("jarvisLog");
const input = document.getElementById("jarvisInput");
const form = document.getElementById("jarvisForm");

const introCopy = document.createElement("div");
introCopy.className = "jarvis-intro-copy";
document.body.appendChild(introCopy);

let introActive = false;
let introTimer;
let introPhaseTimer;

function finishIntro(openJarvis = false) {
  if (!introActive) return;
  introActive = false;
  clearTimeout(introTimer);
  clearTimeout(introPhaseTimer);
  introCopy.classList.remove("visible");
  toggle.classList.remove("jarvis-intro");
  sessionStorage.setItem("aiseJarvisIntroSeen", "1");
  if (openJarvis) setTimeout(openConsole, 650);
}

function showJarvisArrival() {
  if (!introActive) return;
  introCopy.classList.remove("visible");

  setTimeout(() => {
    if (!introActive) return;
    toggle.classList.add("jarvis-intro");
    introCopy.innerHTML = "JARVIS // INITIALIZING<br>AISE DOMAIN ONLINE";
    introCopy.classList.add("visible");
  }, 300);
}

function startIntro() {
  if (sessionStorage.getItem("aiseJarvisIntroSeen")) return;

  introActive = true;
  toggle.style.visibility = "hidden";
  introCopy.innerHTML = "<strong>WELCOME. YOU HAVE ARRIVED.</strong><br>Please wait as your assistant arrives.";

  requestAnimationFrame(() => introCopy.classList.add("visible"));

  introPhaseTimer = setTimeout(() => {
    toggle.style.visibility = "";
    showJarvisArrival();
  }, 1800);

  introTimer = setTimeout(() => finishIntro(false), 3900);
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
  if (command === "status") {
    response.textContent = "JARVIS SE ONLINE // AISE DOMAIN INTERFACE ACTIVE.";
  } else if (command === "hierarchy") {
    response.textContent = "PUBLIC INTERFACE: AISE > JARVIS > DOMAIN NAVIGATION.";
  } else if (command === "advisors") {
    response.textContent = "ADVISORY SYSTEMS ARE NOT PART OF THE PUBLIC INTERFACE.";
  } else if (command === "boundaries") {
    response.textContent = "BOUNDARY: PUBLIC AISE DOMAIN INFORMATION ONLY.";
  } else {
    response.textContent = "UNKNOWN COMMAND.";
  }
  log.appendChild(response);
  log.scrollTop = log.scrollHeight;
});

startIntro();
