const weeklyQuestions = [
  {
  startDate: "2025-12-15",
  question: "TEST — does the site show a question this week?",
  options: { A: "Yes", B: "No", C: "Maybe", D: "It’s broken" },
  correct: "A",
},
  {
    startDate: "2025-12-29",
    question:
      "Chrissy has the following 4 options in front of her. Stella will be shown the same options and Chrissy must choose which one she thinks Stella will start eating first. Which one does she bet on?",
    options: {
      A: "Spaghetti",
      B: "Chicken Noodle Soup",
      C: "Bean Burrito",
      D: "Cheetos",
    },
    correct: "D",
  },
  {
    startDate: "2026-01-05",
    question:
      "Chrissy has been cursed by the ghost of desserts. She can only have one dessert for the rest of her life. What dessert does she choose?",
    options: {
      A: "Pumpkin Spice Cake Balls",
      B: "Chocolate Covered Strawberries",
      C: "Coffee Cheesecake Tiramisu",
      D: "Banana Bread",
    },
    correct: "A",
  },
  {
    startDate: "2026-01-12",
    question:
      "Chrissy has been gifted the opportunity to see any band live in concert. She (and whoever she brings) will be the only people in the venue. Whose concert does she choose?",
    options: {
      A: "Taylor Swift",
      B: "Frank Sinatra",
      C: "The Beach Boys",
      D: "Joni Mitchell",
    },
    correct: "C",
  },
  {
    startDate: "2026-01-19",
    question:
      "There’s too many holidays. One of them has to go. Chrissy must decide which holiday to CANCEL! What holiday does she pull the plug on?",
    options: {
      A: "MLK Day",
      B: "Halloween",
      C: "Valentines Day",
      D: "The 4th of July",
    },
    correct: "D",
  },
  {
    startDate: "2026-01-26",
    question:
      "Chrissy lost a bet. Now she has to wear one of the following hairstyles for one whole year. Which one does she choose?",
    options: {
      A: "Dreads",
      B: "Length down to waist",
      C: "Short haired undercut",
      D: "Bald",
    },
    correct: "B",
  },
  {
    startDate: "2026-02-02",
    question:
      "Chrissy can no longer sit in a chair normally. What position does she choose as her default from now on?",
    options: {
      A: "Camp Counselor (backwards chair)",
      B: "Criss Cross Apple Sauce",
      C: "Standing up on the seat of the chair",
      D: "The Bird (Feet perched on seat, knees to chest)",
    },
    correct: "B",
  },
];

// ----------------- Date Helpers -----------------
function getCurrentMonday() {
  const today = new Date();
  const day = today.getDay(); // 0=Sun ... 6=Sat
  const diff = today.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(today.getFullYear(), today.getMonth(), diff);

  const y = monday.getFullYear();
  const m = String(monday.getMonth() + 1).padStart(2, "0");
  const d = String(monday.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}


function getCurrentQuestion() {
  const currentMonday = getCurrentMonday();

  const eligible = weeklyQuestions
    .filter(q => q.startDate <= currentMonday)
    .sort((a, b) => (a.startDate > b.startDate ? -1 : 1));

  return eligible[0] || null;
}

function formatMondayPretty(isoDate) {
  const [y, m, d] = isoDate.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// ----------------- Per-week State -----------------
function getStateKey() {
  return `smithle_state_${getCurrentMonday()}`;
}

function loadState() {
  try {
    const raw = localStorage.getItem(getStateKey());
    if (!raw) return { tries: 0, disabled: [], solved: false, history: [] };

    const parsed = JSON.parse(raw);
    return {
      tries: Number.isFinite(parsed.tries) ? parsed.tries : 0,
      disabled: Array.isArray(parsed.disabled) ? parsed.disabled : [],
      solved: !!parsed.solved,
      history: Array.isArray(parsed.history) ? parsed.history : [],
    };
  } catch {
    return { tries: 0, disabled: [], solved: false, history: [] };
  }
}

function saveState(state) {
  localStorage.setItem(getStateKey(), JSON.stringify(state));
}

// ----------------- UI Helpers -----------------
function disableOption(letter) {
  const radio = document.querySelector(`input[name="option"][value="${letter}"]`);
  const label = document.querySelector(`label[for="option${letter}"]`);

  if (radio) {
    radio.disabled = true;
    radio.checked = false;
  }
  if (label) {
    label.classList.add("disabled"); // <-- uses your CSS to make it gray
  }
}

function enableAllOptions() {
  ["A", "B", "C", "D"].forEach((letter) => {
    const radio = document.querySelector(`input[name="option"][value="${letter}"]`);
    const label = document.querySelector(`label[for="option${letter}"]`);

    if (radio) radio.disabled = false;
    if (label) label.classList.remove("disabled");
  });
}

function clearSelection() {
  document.querySelectorAll('input[name="option"]').forEach((r) => (r.checked = false));
}

// ----------------- Load Question -----------------
function loadQuestion() {
  const current = getCurrentQuestion();
  const state = loadState();

  const notification = document.getElementById("notification");
  if (notification) {
    notification.innerText = "";
    notification.className = "";
  }

  if (!current) {
    document.getElementById("question").innerText = "No question available this week.";
    document.getElementById("quiz-form").style.display = "none";
    return;
  }

  document.getElementById("quiz-form").style.display = "block";
  document.getElementById("question").innerText = current.question;

  document.getElementById("optionA").innerText = current.options.A ?? "";
  document.getElementById("optionB").innerText = current.options.B ?? "";
  document.getElementById("optionC").innerText = current.options.C ?? "";
  document.getElementById("optionD").innerText = current.options.D ?? "";

  enableAllOptions();
  clearSelection();

  // Re-disable already-guessed wrong answers
  state.disabled.forEach(disableOption);

  // If already solved, show results again
  if (state.solved) {
    showResultsOverlay(state);
  }
}

// ----------------- Results Overlay -----------------
function buildShareText(state) {
  const mondayISO = getCurrentMonday();
  const mondayPretty = formatMondayPretty(mondayISO);

  const squares = state.history
    .map((h) => (h === "correct" ? "🟩" : "🟥"))
    .join("");

  return `SMITHLE · ${mondayPretty}\n${squares}\n${state.tries} ${state.tries === 1 ? "try" : "tries"}`;
}

function showResultsOverlay(state) {
  const overlay = document.getElementById("resultsOverlay");
  const resultsText = document.getElementById("resultsText");
  const copyBtn = document.getElementById("copyBtn");
  const closeBtn = document.getElementById("closeBtn");

  if (!overlay || !resultsText || !copyBtn || !closeBtn) return;

  resultsText.value = buildShareText(state);
  overlay.style.display = "flex";

  copyBtn.onclick = async () => {
    try {
      await navigator.clipboard.writeText(resultsText.value);
      copyBtn.innerText = "Copied!";
      setTimeout(() => (copyBtn.innerText = "Copy"), 1200);
    } catch {
      resultsText.focus();
      resultsText.select();
      document.execCommand("copy");
      copyBtn.innerText = "Copied!";
      setTimeout(() => (copyBtn.innerText = "Copy"), 1200);
    }
  };

  closeBtn.onclick = () => {
    overlay.style.display = "none";
  };

  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.style.display = "none";
  };
}

function getWrongMessage(wrongCount) {
  if (wrongCount === 1) return "No worries! This one is tricky!";
  if (wrongCount === 2) return "Hey it could be worse... try again!";
  if (wrongCount === 3) return "Ah! It was a coin flip that didn't go your way. Finish it off!";
  return "Keep going!";
}

function getCorrectMessage(tries) {
  if (tries === 1) return "BOOM! FIRST TRY! THIS IS YOUR WEEK!";
  if (tries === 2) return "OKAY! Not too shabby. Just needed a warm up guess.";
  if (tries === 3) return "Well, at least the 50/50 went your way.";
  if (tries === 4) return "At this point, I bet you were pretty confident about that answer.";
  return "Correct!";
}


// ----------------- Submit Handling -----------------
document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const current = getCurrentQuestion();
  if (!current) return;

  const state = loadState();

  // If already solved, just show results
  if (state.solved) {
    showResultsOverlay(state);
    return;
  }

  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an option.");
    return;
  }

  const answer = selected.value; // "A", "B", "C", "D"
  const notification = document.getElementById("notification");

  state.tries += 1;

  const correctAnswers = Array.isArray(current.correct) ? current.correct : [current.correct];

  if (correctAnswers.includes(answer)) {
    state.history.push("correct");
    state.solved = true;
    saveState(state);

    if (notification) {
      notification.innerText = getCorrectMessage(state.tries);
      notification.className = "correct";
    }

    // Lock inputs after success
    ["A", "B", "C", "D"].forEach(disableOption);

    showResultsOverlay(state);
  } else {
    state.history.push("wrong");

    // Disable the guessed option so they can't pick it again
    if (!state.disabled.includes(answer)) state.disabled.push(answer);
    saveState(state);

    disableOption(answer);

    if (notification) {
      const wrongCount = state.history.filter(h => h === "wrong").length;
notification.innerText = getWrongMessage(wrongCount);
      notification.className = "incorrect";
    }
  }
});

// Load the question when the page loads
window.onload = loadQuestion;

