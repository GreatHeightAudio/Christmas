// List of questions for each week with correct answers
const weeklyQuestions = [
  {
    startDate: "2024-12-16",
    question: "What is 2 + 2?",
    options: { A: "3", B: "4", C: "5", D: "6" },
    correct: "B"
  },
  {
    startDate: "2024-12-23",
    question: "Which planet is closest to the sun?",
    options: { A: "Venus", B: "Earth", C: "Mercury", D: "Mars" },
    correct: "C"
  },
  // Add more questions here with startDate, question, options, and correct answer
];

// Find the current question based on the date
function getCurrentQuestion() {
  const today = new Date().toISOString().split("T")[0];
  return weeklyQuestions.find(q => today >= q.startDate) || weeklyQuestions[0];
}

// Populate the question and options
function loadQuestion() {
  const current = getCurrentQuestion();
  document.getElementById("question").innerText = current.question;
  document.getElementById("optionA").innerText = current.options.A;
  document.getElementById("optionB").innerText = current.options.B;
  document.getElementById("optionC").innerText = current.options.C;
  document.getElementById("optionD").innerText = current.options.D;
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

  const notification = document.getElementById("notification");
  if (selected.value === current.correct) {
    notification.innerText = "Correct! Well done.";
    notification.className = "correct";
  } else {
    notification.innerText = "Incorrect. Try again next time!";
    notification.className = "incorrect";
  }
});

// Load the question when the page loads
loadQuestion();
