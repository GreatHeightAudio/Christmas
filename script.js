// List of questions for each week with correct answers
  const weeklyQuestions = [
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
    options: { A: "Pumpkin Spice Cake Balls", B: "Chocolate Covered Strawberries", C: "Coffee Cheesecake Tiramisu", D: "Banana Bread" },
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
    "
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

// Get the current week's Monday
function getCurrentMonday() {
  const today = new Date();
  const day = today.getDay(); // 0 (Sunday) to 6 (Saturday)
  const diff = today.getDate() - day + (day === 0 ? -6 : 1); // Adjust when Sunday
  const monday = new Date(today.setDate(diff));
  monday.setHours(0, 0, 0, 0);
  return monday.toISOString().split("T")[0];
}

// Get the current week's question
function getCurrentQuestion() {
  const currentMonday = getCurrentMonday();
  return weeklyQuestions.find(q => q.startDate === currentMonday);
}

// Populate the question and options
function loadQuestion() {
  const current = getCurrentQuestion();
  if (current) {
    document.getElementById("question").innerText = current.question;
    document.getElementById("optionA").innerText = current.options.A;
    document.getElementById("optionB").innerText = current.options.B;
    document.getElementById("optionC").innerText = current.options.C;
    document.getElementById("optionD").innerText = current.options.D;
  } else {
    document.getElementById("question").innerText = "No question available this week.";
    document.getElementById("options").style.display = "none";
  }
}

// Handle form submission
document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const current = getCurrentQuestion();
  const selected = document.querySelector('input[name="option"]:checked');

  if (!selected) {
    alert("Please select an option.");
    return;
  }

  const answer = selected.value; // e.g., "A", "B", "C", "D"
  const notification = document.getElementById("notification");

  // Support both a single string or an array of strings
  const correctAnswers = Array.isArray(current.correct)
    ? current.correct
    : [current.correct];

  if (correctAnswers.includes(answer)) {
    notification.innerText = "Correct! You're just too good!";
    notification.className = "correct";
  } else {
    notification.innerText = "Almost got it! Try a different answer!";
    notification.className = "incorrect";
  }
});

// Load the question when the page loads
window.onload = loadQuestion; // Ensure it loads after DOM is ready

