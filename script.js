document.getElementById("year").textContent = new Date().getFullYear();

const consoleBox = document.getElementById("jarvisConsole");
const toggle = document.getElementById("jarvisToggle");
const closeBtn = document.getElementById("jarvisClose");
const log = document.getElementById("jarvisLog");
const input = document.getElementById("jarvisInput");
const form = document.getElementById("jarvisForm");

toggle.onclick = () => { consoleBox.style.display = "flex"; };
closeBtn.onclick = () => { consoleBox.style.display = "none"; };

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;

  log.innerHTML += `<div>> ${value}</div>`;
  input.value = "";

  if (value === "status") {
    log.innerHTML += "<div>JARVIS SE ONLINE // EXECUTIVE SYSTEM ACTIVE.</div>";
  } else if (value === "hierarchy") {
    log.innerHTML += "<div>ARCHITECT > JARVIS SE > ADVISORS > SYSTEMS.</div>";
  } else if (value === "advisors") {
    log.innerHTML += "<div>ADVISORY GRID ACTIVE // RESPONSES CONCEPTUAL ONLY.</div>";
  } else if (value === "boundaries") {
    log.innerHTML += "<div>BOUNDARY: THIS DOMAIN ONLY. ALL ELSE DENIED.</div>";
  } else {
    log.innerHTML += "<div>UNKNOWN COMMAND.</div>";
  }

  log.scrollTop = log.scrollHeight;
});