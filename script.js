const weeklyQuestions = [
  {
    startDate: "2025-12-22",
    question: "Republic Records needs Sam's help! He has to choose 3 different singers to team up and become the next hit music group. Who does he choose?",
    options: {
      A: "Tyler Joseph (Twenty One Pilots), Molly Rankin (Alvvays), and Matty Healy (The 1975)",
      B: "Thom Yorke (Radiohead), Julian Casablancas (The Strokes), and Clairo",
      C: "Ben Gibbard (Death Cab), Justin Vernon (Bon Iver), and Lorde",
      D: "Jon Bellion, Janelle Monae, and Remi Wolf"
    },
    correct: "B"
  },
  {
    startDate: "2025-12-29",
    question:
      "Chrissy has the following 4 options in front of her. Stella will be shown the same options and Chrissy must choose which one she thinks Stella will start eating first. Which one does she bet on?",
    options: {
      A: "Spaghetti",
      B: "Chicken Noodle Soup",
      C: "Bean Burrito",
      D: "Cheetos"
    },
    correct: "D"
  },
  {
    startDate: "2026-01-05",
    question: "If Lucy suddenly got 1 million dollars, her first purchase would be…",
    options: {
      A: "A house",
      B: "A car",
      C: "Clothes",
      D: "Donate to charity"
    },
    correct: "A"
  },
  {
    startDate: "2026-01-12",
    question: "If Aidan could have any of the following super powers, which would he choose?",
    options: {
      A: "The ability to speak telepathically (but only in a screaming voice)",
      B: "The ability to breath underwater (but only if his eyes are closed)",
      C: "The ability to fly (but only in the direction that the wind is blowing)",
      D: "The ability to teleport (but once it’s used he can’t use it again for 7-10 business days)"
    },
    correct: "D"
  },
  {
    startDate: "2026-01-19",
    question: "Mom won a radio show contest! She gets to travel to anywhere in the world, all expenses paid, for a full week! What destination would she choose?",
    options: {
      A: "Ireland",
      B: "France",
      C: "China",
      D: "New York"
    },
    correct: "A"
  },
  {
    startDate: "2026-01-26",
    question: "If Dad could play for a big show at The Amp, what band or artist would he choose to perform alongside?",
    options: {
      A: "Sabrina Carpenter",
      B: "The Black Keys",
      C: "Chicago",
      D: "a.play"
    },
    correct: "D"
  },
  {
    startDate: "2026-02-02",
    question: "PatPat is about to have an all inclusive spa day! All of it is going to be taken care of, the only thing she needs to do is pick the scent for her relaxation… which scent does she choose?",
    options: {
      A: "Vanilla",
      B: "Eucalyptus",
      C: "Lavender",
      D: "Sandalwood"
    },
    correct: "C"
  },
  {
    startDate: "2026-02-09",
    question: "Isaac was chosen to be on a hit new TV show streaming on Tubi (lol). He’s been given the following choices for the series, which does he choose?",
    options: {
      A: "“STINK!” - he’ll host a game show where contestants must smell whacky items blind and then guess the STINK for cash prizes!",
      B: "“The Lonely Road” - he’ll host a talk show where he drives across the country but he never has any guests so he must converse only with himself.",
      C: "“The Politics of Country Livin’” - he’ll travel across the american south interviewing the hard working blue collar members of the US. However, every episode ends with a lengthy discussion about the political state of the country… but this Tubi, he must agree with everything the other person says.",
      D: "“Oops! I did it again!” - a reality TV show based off the classic “Impractical Jokers” where he must reenact famous celebrity crash and burn moments including but not limited to… Kanye’s VMA interruption, Will Smith’s Slap, and Fergies National Anthem."
    },
    correct: "D"
  },
  {
    startDate: "2026-02-16",
    question: "If Isaac could choose a book to make it to the big screen, what book would he choose and who would be cast as the lead?",
    options: {
      A: "Curious Incident of the Dog in the Night Time starring Murph",
      B: "Mr. Mercedes starring Russell Crowe",
      C: "The Silent Patient starring Emma Stone",
      D: "The Kite Runner starring Ramy Youssef"
    },
    correct: "D"
  },
  {
    startDate: "2026-02-23",
    question: "Chrissy has been cursed by the ghost of desserts. She can only have one dessert for the rest of her life. What dessert does she choose?",
    options: {
      A: "Pumpkin Spice Cake Balls",
      B: "Chocolate Covered Strawberries",
      C: "Coffee Cheesecake Tiramisu",
      D: "Banana Bread"
    },
    correct: "A"
  },
  {
    startDate: "2026-03-02",
    question: "The human necessity for water is being changed and Lucy has to decide what will replace it. Which of these liquids does she choose?",
    options: {
      A: "Body Armor",
      B: "Diet Coke",
      C: "Milk",
      D: "Sweet Tea"
    },
    correct: "B"
  },
  {
    startDate: "2026-03-09",
    question: "If Aidan could go back in time and replace a famous movie performance with his own, what movie and character would choose…",
    options: {
      A: "Roy Hobbs (The Natural)",
      B: "Neo (The Matrix)",
      C: "Indiana Jones (Raiders of the Lost Ark)",
      D: "James Bond (Casino Royale)"
    },
    correct: "A"
  },
  {
    startDate: "2026-03-16",
    question: "After a freak chemical accident in the garden, Mom has gained the ability to grow any plant instantly in the palm of her hand. Luckily, it happened to be the plant she most desired! What plant is it?",
    options: {
      A: "Squash",
      B: "Daisy",
      C: "Cucumber",
      D: "Okra"
    },
    correct: "D"
  },
  {
    startDate: "2026-03-23",
    question: "Dad has to get a case of Coors from Texarkana to Atlanta within 28 hours. What car is he choosing for the trip?",
    options: {
      A: "Trans Am",
      B: "GTO",
      C: "Corvette",
      D: "Ford F150"
    },
    correct: "A"
  },
  {
    startDate: "2026-03-30",
    question: "Fayetteville High School is changing their mascot. They’ve consulted PatPat to decide what direction they should go in. What does PatPat recommend for their new representation?",
    options: {
      A: "Tigers",
      B: "Eagles",
      C: "Wolves",
      D: "Bears"
    },
    correct: "A"
  },
  {
    startDate: "2026-04-06",
    question: "Ah, look at the time! It's 10pm and Sam hasn't eaten dinner...What does he do?",
    options: {
      A: "Doordash Panda Express",
      B: "Leftovers from earlier",
      C: "Heat up a can of soup",
      D: "Just stick it out"
    },
    correct: "A"
  },
  {
    startDate: "2026-04-13",
    question: "Oh No! Sam is in danger! In order to save him, Isaac must win a 2 on 2 game to 21 against prime John Wall and current day Scottie Pippen! To take them on, who did he choose as his teammate?",
    options: {
      A: "Prime Shaq",
      B: "Prime Russel Westbrook",
      C: "Prime Bron",
      D: "Current day Charles Barkley (Sam is cooked)"
    },
    correct: "A"
  },
  {
    startDate: "2026-04-20",
    question: "Chrissy has been gifted the opportunity to see any band live in concert. She (and whoever she brings) will be the only people in the venue. Whose concert does she choose?",
    options: {
      A: "Taylor Swift",
      B: "Frank Sinatra",
      C: "The Beach Boys",
      D: "Joni Mitchell"
    },
    correct: "C"
  },
  {
    startDate: "2026-04-27",
    question: "If Lucy could shape shift into any animal on command, which animal would she choose?",
    options: {
      A: "Tiger",
      B: "Sadie",
      C: "Panda",
      D: "Fruit Fly"
    },
    correct: "C"
  },
  {
    startDate: "2026-05-04",
    question: "Aidan has been tasked with replacing the Bald Eagle as the US National Bird, after much consideration, he decided to go with…",
    options: {
      A: "Pigeon",
      B: "Cardinal",
      C: "Woodpecker",
      D: "Raven"
    },
    correct: "D"
  },
  {
    startDate: "2026-05-11",
    question: "Bon Appétit! Mom’s new restaurant is finally open! Everyone is going to love eating at…",
    options: {
      A: "Mama's Southern Kitchen",
      B: "Tunafish Town",
      C: "Fried & Buttered Love",
      D: "Pickle Palace"
    },
    correct: "B"
  },
  {
    startDate: "2026-05-18",
    question: "Dad has been cursed! He’s now allergic to every food on earth except one! What food would he choose to sustain him for the rest of his life?",
    options: {
      A: "Bread",
      B: "Fried Chicken",
      C: "Burgers",
      D: "Steak"
    },
    correct: "B"
  },
  {
    startDate: "2026-05-25",
    question: "PatPat has had an encounter with the ghost of Beethoven! He announces that he will gift her immediate and complete mastery over one instrument. What instrument does she choose?",
    options: {
      A: "Guitar",
      B: "Violin",
      C: "Piano",
      D: "Harp"
    },
    correct: "C"
  },
  {
    startDate: "2026-06-01",
    question: "Sam has the opportunity to bring back a sitcom! The sitcom will get one more season that’s guaranteed to be just as good as it was at its peak. What show does he choose?",
    options: {
      A: "Seinfeld",
      B: "The Office",
      C: "Parks and Rec",
      D: "New Girl"
    },
    correct: "A"
  },
  {
    startDate: "2026-06-08",
    question: "Isaac was chosen to be on a hit new TV show streaming on Tubi (lol). He’s been given the following choices for the series, which does he choose?",
    options: {
      A: "“STINK!” - he’ll host a game show where contestants must smell whacky items blind and then guess the STINK for cash prizes!",
      B: "“The Lonely Road” - he’ll host a talk show where he drives across the country but he never has any guests so he must converse only with himself.",
      C: "“The Politics of Country Livin’” - he’ll travel across the american south interviewing the hard working blue collar members of the US. However, every episode ends with a lengthy discussion about the political state of the country… but this Tubi, he must agree with everything the other person says.",
      D: "“Oops! I did it again!” - a reality TV show based off the classic “Impractical Jokers” where he must reenact famous celebrity crash and burn moments including but not limited to… Kanye’s VMA interruption, Will Smith’s Slap, and Fergies National Anthem."
    },
    correct: "D"
  },
  {
    startDate: "2026-06-15",
    question: "There’s too many holidays. One of them has to go. Chrissy must decide which holiday to CANCEL! What holiday does she pull the plug on?",
    options: {
      A: "MLK Day",
      B: "Halloween",
      C: "Valentines Day",
      D: "The 4th of July"
    },
    correct: "D"
  },
  {
    startDate: "2026-06-22",
    question: "Aliens have arrived. A global lottery lead to one individual who must greet the extraterrestrial beings… and that individual is Lucy. The gate drops from the space ship and a creature steps out and faces her. What’s the first thing she says?",
    options: {
      A: "“Bring me to your leader.”",
      B: "“Do you speak english?”",
      C: "“Are you here to kill all of us?”",
      D: "“Hello!” *waves*"
    },
    correct: "D"
  },
  {
    startDate: "2026-06-29",
    question: "A zombie apocalypse has begun and Aidan is alone at his house. He must venture into the danger outside in order to find Chrissy who was at work when it started. He’s only able to carry one item from the house to defend himself, what item does he choose?",
    options: {
      A: "Broken Wine Bottle",
      B: "Fire Extinguisher",
      C: "Frying Pan",
      D: "Chair"
    },
    correct: "C"
  },
  {
    startDate: "2026-07-06",
    question: "Oh no! Mom has caught a virus! There’s one major side effect: every time she enters a room she must break out into a viral dance move. What dance move would she choose?",
    options: {
      A: "The Charleston",
      B: "Sprinkler",
      C: "Renegade",
      D: "Jazzercise"
    },
    correct: "D"
  },
  {
    startDate: "2026-07-13",
    question: "The UN has called on Dad to make an impactful decision on behalf of the planet. He is has to choose one of the following options that have been presented to him. Which does he choose?",
    options: {
      A: "ALL non-electric cars will be destroyed.",
      B: "ALL competitive sports will be outlawed.",
      C: "ALL forms of meat will be banned.",
      D: "ALL music must be made by artificial intelligence."
    },
    correct: "C"
  },
  {
    startDate: "2026-07-20",
    question: "If PatPat could have dinner with any famous person from any time period, who would it be?",
    options: {
      A: "Abraham Lincoln",
      B: "Amelia Earhart",
      C: "Brian Wilson",
      D: "Steven Spielberg"
    },
    correct: "A"
  },
  {
    startDate: "2026-07-27",
    question: 'The word "Murph" has been outlawed in the United States. Sam must rename "Murph" to one of the following options that were given to him. Which does he begrudgingly choose?',
    options: {
      A: "Dog",
      B: "Meta World Peace",
      C: "Goober",
      D: "Stinky"
    },
    correct: "C"
  },
  {
    startDate: "2026-08-03",
    question: "Isaac is tired of brown hair. He’s decided to dye his hair a new color! What color does he choose?",
    options: {
      A: "Blonde",
      B: "Black",
      C: "White",
      D: "Ginger"
    },
    correct: "A"
  },
  {
    startDate: "2026-08-10",
    question: "Chrissy lost a bet. Now she has to wear one of the following hairstyles for one whole year. Which one does she choose?",
    options: {
      A: "Dreads",
      B: "Length down to waist",
      C: "Short haired undercut",
      D: "Bald"
    },
    correct: "B"
  },
  {
    startDate: "2026-08-17",
    question: "Lucy screamed so loud at a concert she broke her vocal cords… The doctors have a few options for her to be able to speak again, which of the following did she choose?",
    options: {
      A: "She can only speak in full autotune.",
      B: "She can speak but she can’t form any “O” sounds.",
      C: "She can speak but after 15 minutes of talking, she has to recharge in silence for 1 hour.",
      D: "She can only speak at full volume."
    },
    correct: "D"
  },
  {
    startDate: "2026-08-24",
    question: "Aidan has been offered 1 million dollars. All he has to do is correctly name 3 songs off of just the first 5 seconds. Each song is randomly chosen from one artists discography. What band does he choose?",
    options: {
      A: "Oasis",
      B: "Twenty One Pilots",
      C: "Death Cab For Cutie",
      D: "Alvvays"
    },
    correct: "B"
  },
  {
    startDate: "2026-08-31",
    question: "If Mom had to choose one of the following to become allergic to, which would she choose?",
    options: {
      A: "Cheese",
      B: "Eggs",
      C: "Red Meat",
      D: "Wheat"
    },
    correct: "A"
  },
  {
    startDate: "2026-09-07",
    question: "Dad was asked to choose a number between 1–100. What number did he choose?",
    options: {
      A: "1",
      B: "24",
      C: "41",
      D: "67"
    },
    correct: "C"
  },
  {
    startDate: "2026-09-14",
    question: "Penguins are in need of a new trait. Luckily they have asked PatPat what the addition should be. Which does she choose?",
    options: {
      A: "They switch their feathers to fur",
      B: "They grow up to 10 feet tall",
      C: "They can fly",
      D: "They can breathe under water"
    },
    correct: "D"
  },
  {
    startDate: "2026-09-21",
    question: "Sam has been selected to choose an artist to do the soundtrack for a new A24 coming-of-age romance movie. What artist is going to drop an album made for the movie?",
    options: {
      A: "Radiohead",
      B: "The Neighborhood",
      C: "Snail Mail",
      D: "The 1975"
    },
    correct: "C"
  },
  {
    startDate: "2026-09-28",
    question: "A CURSE IS UPON US! Isaac is only allowed to use one of the following forms of walking for the rest of his life. Which does he choose?",
    options: {
      A: "He must walk backwards",
      B: "He must walk heel to toe",
      C: "He must walk on his tip toes",
      D: "He can’t walk, he can full sprint"
    },
    correct: "B"
  },
  {
    startDate: "2026-10-05",
    question: "Chrissy can no longer sit in a chair normally. What position does she choose as her default from now on?",
    options: {
      A: "Camp Counselor (backwards chair)",
      B: "Criss Cross Apple Sauce",
      C: "Standing up on the seat of the chair",
      D: "The Bird (Feet perched on seat, knees to chest)"
    },
    correct: "B"
  },
  {
    startDate: "2026-10-12",
    question: "Lucy has run into Mr. Beast at Walmart! He’s given her 60 seconds to run around a grab anything in the store. Whatever she grabs she can take home for free! What’s the first thing she goes for?",
    options: {
      A: "iPhones",
      B: "Clothes",
      C: "TVs",
      D: "Home Decor"
    },
    correct: "A"
  },
  {
    startDate: "2026-10-19",
    question: "Aidan has been diagnosed with monochromatic syndrome. He can only wear shades of ONE color for the rest of his life. What color does he choose to dictate his style?",
    options: {
      A: "Red",
      B: "Green",
      C: "Brown",
      D: "Blue"
    },
    correct: "D"
  },
  {
    startDate: "2026-10-26",
    question: "Mom has found a time machine. She can travel to any time period she wants, past or future. What decade does she choose?",
    options: {
      A: "The 1960s",
      B: "The 1980s",
      C: "The 1990s",
      D: "The 2150s"
    },
    correct: "A"
  },
  {
    startDate: "2026-11-02",
    question: "LADIES AND GENTLEMEN. INTRODUCING EARTH’S NEWEST SUPER HERO… What name would Dad choose as his super-alias?",
    options: {
      A: "Captain Pontiac",
      B: "The Judge",
      C: "Mr. Mediocre",
      D: "The Iron Wrench"
    },
    correct: "A"
  },
  {
    startDate: "2026-11-09",
    question: "PatPat has been chosen to design a sky scraper! What city does she choose to add to their skyline?",
    options: {
      A: "Paris",
      B: "St. Louis",
      C: "Fayetteville",
      D: "Little Rock"
    },
    correct: "C"
  },
  {
    startDate: "2026-11-16",
    question: "The verdict is in. Sam is guilty by rule of the culture. He is considered... CANCELED. Which of the follwing reasions would he choose to be canceled over?",
    options: {
      A: "Starting a band, breaking up that band, and starting a slightly worse band with the same name",
      B: "Publically correcting another person's grammar but being wrong about it",
      C: "Posting an Notes-App apology for something no one heard about that makes everything worse",
      D: "Losing public credibility and starting a podcast about it"
    },
    correct: "A"
  },
  {
    startDate: "2026-11-23",
    question: "Isaac can only watch one TV show for the rest of his life. What TV show does he choose?",
    options: {
      A: "Breaking Bad",
      B: "Scrubs",
      C: "Avatar the Last Airbender",
      D: "Spongebob"
    },
    correct: "C"
  }
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

