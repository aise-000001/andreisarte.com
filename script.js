document.getElementById("year").textContent = new Date().getFullYear();

const consoleBox = document.getElementById("jarvisConsole");
const toggle = document.getElementById("jarvisToggle");
const closeBtn = document.getElementById("jarvisClose");
const log = document.getElementById("jarvisLog");
const input = document.getElementById("jarvisInput");
const form = document.getElementById("jarvisForm");

const introCopy = document.createElement("div");
introCopy.className = "jarvis-intro-copy";
introCopy.innerHTML = "JARVIS // INITIALIZING<br>AISE DOMAIN ONLINE";
document.body.appendChild(introCopy);

let introActive = false;
let introTimer;

function finishIntro(openJarvis = false) {
  if (!introActive) return;
  introActive = false;
  clearTimeout(introTimer);
  introCopy.classList.remove("visible");
  toggle.classList.remove("jarvis-intro");
  sessionStorage.setItem("aiseJarvisIntroSeen", "1");
  if (openJarvis) setTimeout(openConsole, 650);
}

function startIntro() {
  if (sessionStorage.getItem("aiseJarvisIntroSeen")) return;
  introActive = true;
  toggle.classList.add("jarvis-intro");
  requestAnimationFrame(() => introCopy.classList.add("visible"));
  introTimer = setTimeout(() => finishIntro(false), 1800);
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
