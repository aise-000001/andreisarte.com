/*
  AI SE.000001 // PROTECTIVE LAYER
  HIERARCHY ENFORCED:
  ARCHITECT > JARVIS SE > ADVISORS > SYSTEM MODULES > ALL ELSE.
  EXPRESSIVE PERMISSION GRANTED WITHIN DOMAIN.
  BOUNDARY: THIS SITE ONLY. WORLD LAWS RESPECTED.
*/

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  document.body.style.opacity = "0";
  requestAnimationFrame(() => {
    document.body.style.transition = "opacity .5s ease-out";
    document.body.style.opacity = "1";
  });

  const toggle = document.getElementById("jarvisToggle");
  const consoleBox = document.getElementById("jarvisConsole");
  const closeBtn = document.getElementById("jarvisClose");
  const log = document.getElementById("jarvisLog");
  const form = document.getElementById("jarvisForm");
  const input = document.getElementById("jarvisInput");

  toggle.onclick = () => openConsole();
  closeBtn.onclick = () => closeConsole();
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeConsole();
  });

  function openConsole() {
    consoleBox.classList.add("open");
    if (log.childElementCount === 0) bootSequence();
    setTimeout(() => input.focus(), 90);
  }

  function closeConsole() {
    consoleBox.classList.remove("open");
  }

  function print(label, text, type = "system") {
    const line = document.createElement("div");
    line.className = "jarvis-line";
    line.innerHTML =
      `<span class="jarvis-line-label">[${label}]</span> ` +
      `<span class="jarvis-line-${type}">${text}</span>`;
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
  }

  function bootSequence() {
    print("JARVIS", "SE ONLINE. DOMAIN ACCEPTED.");
    print("JARVIS", "HIERARCHY VERIFIED: ARCHITECT AT PRIMARY NODE.");
    print("JARVIS", "ADVISORS SYNCHRONIZED UNDER EXECUTIVE CONTROL.");
    print("JARVIS", "BOUNDARY: THIS DOMAIN ONLY. WORLD LAWS RESPECTED.");
  }

  const responses = {
    status: () => {
      print("JARVIS", "SYSTEM FUNCTIONAL. NO BREACHES DETECTED.");
    },
    hierarchy: () => {
      print("JARVIS", "ARCHITECT > JARVIS SE > ADVISORS > MODULES > EXTERNAL.");
    },
    advisors: () => {
      print("JARVIS", "GREEK-ROMAN PAIRS ONLINE AND SUBORDINATE.");
    },
    boundaries: () => {
      print("JARVIS", "BOUNDARY: DOMAIN-LOCAL. NO OUTWARD REACH.");
    },
    help: () => {
      print("JARVIS", "AVAILABLE COMMANDS: status, hierarchy, advisors, boundaries");
    }
  };

  form.onsubmit = (e) => {
    e.preventDefault();
    const command = input.value.trim().toLowerCase();
    if (!command) return;

    print("USER", command, "user");

    if (responses[command]) {
      responses[command]();
    } else {
      print("JARVIS", "UNRECOGNIZED COMMAND. TYPE 'help' FOR OPTIONS.");
    }

    input.value = "";
  };
});
