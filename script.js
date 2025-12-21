// List of questions for each week with correct answers
const weeklyQuestions = [
  {
    startDate: "2025-12-21",
    question:
      "Chrissy has the following 4 options in front of her. Stella will be shown the same options and Chrissy must choose which one she thinks Stella will start eating first. Which one does she bet on?",
    options: {
      A: "Spaghetti",
      B: "Chicken Noodle Soup",
      C: "Bean Burrito",
      D: "Cheetos",
    },
    correct: "D",
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
    options: { A: "Taylor Swift", B: "Frank Sinatra", C: "The Beach Boys", D: "Joni Mitchell" },
    correct: "C",
  },
  {
    startDate: "2026-01-19",
    question:
      "There’s too many holidays. One of them has to go. Chrissy must decide which holiday to CANCEL! What holiday does she pull the plug on?",
    options: { A: "MLK Day", B: "Halloween", C: "Valentines Day", D: "The 4th of July" },
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
  const day = today.getDay(); // 0 (Sunday) to 6 (Saturday)
  const diff = today.getDate() - day + (day === 0 ? -6 : 1); // Adjust when Sunday
  const monday = new Date(today.setDate(diff));
  monday.setHours(0, 0, 0, 0);
  return monday.toISOString().split("T")[0];
}

function getCurrentQuestion() {
  const currentMonday = getCurrentMonday();
  return weeklyQuestions.find((q) => q.startDate === currentMonday);
}

// ----------------- Per-week State -----------------
// Tracks: tries, disabled choices, solved status for THIS week only
function getStateKey() {
  return `smithle_state_${getCurrentMonday()}`;
}

function loadState() {
  try {
    const raw = localStorage.getItem(getStateKey());
    if (!raw) return { tries: 0, disabled: [], solved: false };
    const parsed = JSON.parse(raw);
    return {
      tries: Number.isFinite(parsed.tries) ? parsed.tries : 0,
      disabled: Array.isArray(parsed.disabled) ? parsed.disabled : [],
      solved: !!parsed.solved,
    };
  } catch {
    return { tries: 0, disabled: [], solved: false };
  }
}

function saveState(state) {
  localStorage.setItem(getStateKey(), JSON.stringify(state));
}

// ----------------- UI Helpers -----------------
function disableOption(letter) {
  const radio = document.querySelector(`input[name="option"][value="${letter}"]`);
  // Your updated HTML uses labels with for="optionA" etc.
  const label = document.querySelector(`label[for="option${letter}"]`);

  if (radio) {
    radio.disabled = true;
    radio.checked = false;
  }
  if (label) {
    label.style.opacity = "0.55";
    label.style.cursor = "not-allowed";
  }
}

function enableAllOptions() {
  ["A", "B", "C", "D"].forEach((letter) => {
    const radio = document.querySelector(`input[name="option"][value="${letter}"]`);
    const label = document.querySelector(`label[for="option${letter}"]`);
    if (radio) radio.disabled = false;
    if (label) {
      label.style.opacity = "1";
      label.style.cursor = "pointer";
    }
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
    // hide options nicely (no need for an #options wrapper)
    document.getElementById("quiz-form").style.display = "none";
    return;
  }

  document.getElementById("quiz-form").style.display = "block";
  document.getElementById("question").innerText = current.question;

  document.getElementById("optionA").innerText = current.options.A ?? "";
  document.getElementById("optionB").innerText = current.options.B ?? "";
  document.getElementById("optionC").innerText = current.options.C ?? "";
  document.getElementById("optionD").innerText = current.options.D ?? "";

  // Reset then re-apply disabled answers from past wrong guesses
  enableAllOptions();
  clearSelection();
  state.disabled.forEach(disableOption);

  // If already solved (refresh, or they came back), show results again
  if (state.solved) {
    showResultsOverlay(current, state.tries);
  }
}

// ----------------- Results Overlay -----------------
function buildShareText(current, tries) {
  const monday = getCurrentMonday();
  // Example: "SMITHLE (2026-01-05) — got it in 3 tries!"
  return `SMITHLE (${monday}) — I got it in ${tries} ${tries === 1 ? "try" : "tries"}!`;
}

function showResultsOverlay(current, tries) {
  const overlay = document.getElementById("resultsOverlay");
  const resultsText = document.getElementById("resultsText");
  const copyBtn = document.getElementById("copyBtn");
  const closeBtn = document.getElementById("closeBtn");

  if (!overlay || !resultsText || !copyBtn || !closeBtn) return;

  resultsText.value = buildShareText(current, tries);
  overlay.style.display = "flex";

  // Copy button
  copyBtn.onclick = async () => {
    try {
      await navigator.clipboard.writeText(resultsText.value);
      copyBtn.innerText = "Copied!";
      setTimeout(() => (copyBtn.innerText = "Copy"), 1200);
    } catch {
      // Fallback if clipboard is blocked
      resultsText.focus();
      resultsText.select();
      document.execCommand("copy");
      copyBtn.innerText = "Copied!";
      setTimeout(() => (copyBtn.innerText = "Copy"), 1200);
    }
  };

  // Close button
  closeBtn.onclick = () => {
    overlay.style.display = "none";
  };

  // Click outside to close
  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.style.display = "none";
  };
}

// ----------------- Submit Handling -----------------
document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const current = getCurrentQuestion();
  if (!current) return;

  const state = loadState();

  // If already solved, just show results
  if (state.solved) {
    showResultsOverlay(current, state.tries);
    return;
  }

  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an option.");
    return;
  }

  const answer = selected.value; // "A", "B", "C", "D"
  const notification = document.getElementById("notification");

  // Count tries on every submission (right or wrong)
  state.tries += 1;

  const correctAnswers = Array.isArray(current.correct) ? current.correct : [current.correct];

  if (correctAnswers.includes(answer)) {
    state.solved = true;
    saveState(state);

    if (notification) {
      notification.innerText = "Correct! You're just too good!";
      notification.className = "correct";
    }

    // Lock inputs after success (optional)
    ["A", "B", "C", "D"].forEach((l) => disableOption(l));

    // Show results overlay with copy text
    showResultsOverlay(current, state.tries);
  } else {
    // Disable the guessed option so they can't pick it again
    if (!state.disabled.includes(answer)) state.disabled.push(answer);
    saveState(state);

    disableOption(answer);

    if (notification) {
      notification.innerText = "Almost got it! Try a different answer!";
      notification.className = "incorrect";
    }
  }
});

// Load the question when the page loads
window.onload = loadQuestion;

