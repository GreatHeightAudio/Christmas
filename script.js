// List of questions for each week with correct answers
const weeklyQuestions = [
  {
    startDate: "2024-12-16",
    question: "Who is a baller?",
    options: { A: "Prob Sam", B: "Sam?", C: "IDK SAM?!", D: "100% Sam fs" },
    correct: "D"
  },
  {
    startDate: "2024-12-23",
    question: "What present did Sam give you for Christmas (with the help of the entire family of course)?",
    options: { A: "Nothing. There is no present.", B: "I hope it's not answer A", C: "Okay I get it. Just tell me.", D: "An online game that asks questions about our family memories every Monday for a full year?!?" },
    correct: "D"
  },
  {
    startDate: "2024-12-30",
    question: "The first year the kids decided to give the parents a gift, it was hidden until the last gift had been opened. What did the kids give the parents?",
    options: { A: "Coupon Book", B: "Photo Cube", C: "Painting", D: "Framed Photos" },
    correct: "D"
  },
  {
    startDate: "2025-01-06",
    question: "What original song did Samuel perform at holt?",
    options: { A: "The Winter Song", B: "The Summer Song", C: "The Spring Song", D: "The Fall Song" },
    correct: "B"
  },
  {
    startDate: "2025-01-13",
    question: "After a heartfelt presentation, what did the kids name our precious guinea pigs?",
    options: { A: "Michael and Jordan", B: "Bonnie and Clyde", C: "Gibson and Albert", D: "Stan and Ozzie" },
    correct: "D"
  },
  {
    startDate: "2025-01-20",
    question: "When Isaac and Samuel were on the same baseball team, what team were they on?",
    options: { A: "The Cardinals", B: "The Nationals", C: "The White Sox", D: "The Cubs" },
    correct: "B"
  },
  {
    startDate: "2025-01-27",
    question: "Michael proposed to Leigh at a Razorback football game. Who were the Hogs playing?",
    options: { A: "Texas Tech", B: "Texas Christian", C: "Texas A&M", D: "Texas" },
    correct: "A"
  },
  {
    startDate: "2025-02-03",
    question: "Where did we eat at a restaurant we picked because Isaac had a crush on Selena Gomez?",
    options: { A: "Washington DC", B: "Louisville", C: "Indianapolis", D: "Memphis" },
    correct: "B"
  },
  {
    startDate: "2025-02-10",
    question: "Mama and Isaac went to an AWESOME Chvrches concert together in Toronto. What band shirt did Mama wear to the show?",
    options: { A: "Death Cab For Cutie", B: "Alvvays", C: "Weezer", D: "Wombats" },
    correct: "A"
  },
  {
    startDate: "2025-02-17",
    question: "When a hermit crab decided to venture out of the boys room, where was it found?",
    options: { A: "The Bathroom", B: "The Kitchen", C: "Lucy's Room", D: "The Parent's Room" },
    correct: "C"
  },
  {
    startDate: "2025-02-24",
    question: "Which of these songs was a favorite for Dad to play on piano and Samuel to sing?",
    options: { A: "Piano Man by Billy Joel", B: "Lovesong by The Cure", C: "Fix You by Coldplay", D: "Beat It by Michael Jackson" },
    correct: "C"
  },
  {
    startDate: "2025-03-03",
    question: "The only Smith family feline, “Momo,” is named after a character in what show?",
    options: { A: "Arcane", B: "Spongebob", C: "Avatar the Last Airbender", D: "Pokemon" },
    correct: "C"
  },
  {
    startDate: "2025-03-10",
    question: "Where did we get blasted by sand as a storm came in?",
    options: { A: "Phoenix", B: "Amarillo", C: "Destin", D: "Virginia Beach" },
    correct: "D"
  },
  {
    startDate: "2025-03-17",
    question: "Which of these cities have we NOT seen Cardinals minor league baseball in?",
    options: { A: "Memphis", B: "Tulsa", C: "Oklahoma City", D: "Springfield" },
    correct: "C"
  },
  {
    startDate: "2025-03-24",
    question: "In honor of Dad's birthday this week: On an adventure at the Renegar’s, Dad got in a little “over his head” when this happened…",
    options: { A: "He got lost on the trails!", B: "He ran out of gas!", C: "He flipped a four-wheeler!", D: "He forgot to bring the food!" },
    correct: "C"
  },
  {
    startDate: "2025-03-31",
    question: "What traditional Holcomb trip was Mama happy to wrangle a bunch of elementary school kids on?",
    options: { A: "Write it! Shoot it! Hike it!", B: "Shoot it! Write it! Hike it!", C: "Hike it! Write it! Shoot it!", D: "Hike it! Shoot it! Write it!" },
    correct: "D"
  },
  {
    startDate: "2025-04-07",
    question: "How much money were the kids given on Mamo’s famous dollar store runs?",
    options: { A: "$1", B: "$2", C: "$3", D: "$5" },
    correct: "C"
  },
  {
    startDate: "2025-04-14",
    question: "What team’s baseball stadium was the family at when Isaac hit the beach ball off the upper deck?",
    options: { A: "The Cubs", B: "The Dodgers", C: "The Cardinals", D: "The Padres" },
    correct: "B"
  },
  {
    startDate: "2025-04-21",
    question: "PatPat accidentally created one of the greatest family memories when she attempted to ride a dirt bike! Where were we when we witnessed the world's greatest wheelie?",
    options: { A: "Holt", B: "Holcomb", C: "The Ramps", D: "The Lawson's" },
    correct: "A"
  },
  {
    startDate: "2025-04-28",
    question: "Where have we seen the Thunder play?",
    options: { A: "Memphis", B: "St. Louis", C: "Chicago", D: "New Orleans" },
    correct: "A"
  },
  {
    startDate: "2025-05-05",
    question: "Lucy once had a hat with such big lettering that it became a family inside joke. What is that inside joke?",
    options: { A: "ELEWARE", B: "RKANSAS", C: "SHINTON", D: "ENNESSEE" },
    correct: "C"
  },
  {
    startDate: "2025-05-12",
    question: "Where did Michael & Leigh honeymoon?",
    options: { A: "Destin", B: "Pensacola", C: "Panama City", D: "Gult Shores" },
    correct: "B"
  },
  {
    startDate: "2025-05-19",
    question: "Where was the Norris family reunion where Lucy was introduced to the family?",
    options: { A: "Biloxi", B: "Mobile", C: "Petit Jean", D: "Shreveport" },
    correct: "A"
  },
  {
    startDate: "2025-05-26",
    question: "What TV show does the family favorite line, “Hooray! We made it!” come from? (spoken in a thick New Zealand accent…)",
    options: { A: "Spongebob", B: "Seinfeld", C: "Breaking Bad", D: "Flight of the Conchords" },
    correct: "D"
  },
  {
    startDate: "2025-06-02",
    question: "Who was PatPat’s friend that you worked with at Lake Junior High?",
    options: { A: "Ginny Wiseman", B: "Roy Bishop", C: "Carol Rose", D: "Linda Anderson" },
    correct: "C"
  },
  {
    startDate: "2025-06-09",
    question: "What number was on Lucy’s blue yamaha dirt bike?",
    options: { A: "22", B: "14", C: "41", D: "99" },
    correct: "A"
  },
  {
    startDate: "2025-06-16",
    question: "What Wii game did Samueel receive that fueled his obsession with its topic? (hint: we owned all of these games but one was gifted to Sam specifically)",
    options: { A: "Star Wars: Battle Field", B: "NBA2k 16", C: "Mario & Sonic: Winter Olympic Games", D: "Michael Jackson: The Experience" },
    correct: "D"
  },
  {
    startDate: "2025-06-23",
    question: "What was Isaac’s favorite stuffed animal as a kid? (Hint: Pokémon)",
    options: { A: "Snorlax", B: "Pikachu", C: "Squirtle", D: "Blaziken" },
    correct: "D"
  },
  {
    startDate: "2025-06-30",
    question: "One day at Morning Mist, Isaac and Samuel decided to surprise Mama with dinner during a long week. What special ingredient did Samuel add to the Spaghetti sauce we served?",
    options: { A: "Corona (hahaha imagine)", B: "Hot Sauce", C: "Chopped Hot Dogs", D: "Bacon" },
    correct: "D"
  },
  {
    startDate: "2025-07-07",
    question: "Which of Isaac’s classmates at PlayLearn would go on to be good friends with him in high school and to this current day?",
    options: { A: "Jonah", B: "Kimia", C: "Carson", D: "Trindyn" },
    correct: "B"
  },
  {
    startDate: "2025-07-14",
    question: "In honor of my birthday today (assuming you play this on Monday): WHAT IS SAM'S FAVORITE FOOD ON PLANET EARTH?",
    options: { A: "Nasvhille Hot Chicken", B: "Literally any kind of soup", C: "Mama's famous homemade spaghetti and meat sauce", D: "Avacado (haha)" },
    correct: "C"
  },
  {
    startDate: "2025-07-21",
    question: "The day we moved out of the Gypsum house, one of Sam’s closest childhood friends was moving in one street over (on Ike Ln)! Who was it?",
    options: { A: "Cole Gasner", B: "Anston Eckert", C: "Brandus Mitchell", D: "Michael Lee" },
    correct: "B"
  },
  {
    startDate: "2025-07-28",
    question: "Lucy once had a hat with such big lettering that it became a family inside joke. What is that inside joke?",
    options: { A: "ELEWARE", B: "RKANSAS", C: "SHINTON", D: "ENNESSEE" },
    correct: "C"
  },
  {
    startDate: "2025-08-04",
    question: "Where did we ride a boat on an architecture tour?",
    options: { A: "St. Louis", B: "Oklahoma City", C: "Chicago", D: "Washington DC" },
    correct: "C"
  },
  {
    startDate: "2025-08-11",
    question: "Where have we seen the Cardinals play?",
    options: { A: "Pheonix", B: "Washington DC", C: "San Diego", D: "Denver" },
    correct: "A"
  },
  {
    startDate: "2025-08-18",
    question: "Where did Michael & Leigh have their wedding rehearsal dinner?",
    options: { A: "The Ice House", B: "The Whippet", C: "The Church Fellowship Hall", D: "Grandpa Bob and Mamo's House" },
    correct: "D"
  },
  {
    startDate: "2025-08-25",
    question: "Where have we seen the Cardinals play?",
    options: { A: "Pheonix", B: "Washington DC", C: "San Diego", D: "Denver" },
    correct: "A"
  },
  {
    startDate: "2025-09-01",
    question: "Sam worked at Shave The Planet for many years! Which of the following flavors was NOT offered at the time?",
    options: { A: "Tropical Sunrise", B: "Invisibility Cloak", C: "Blue Lightning", D: "Royal Wedding" },
    correct: "C"
  },
  {
    startDate: "2025-09-15",
    question: "What was the brand of flip flop that all the girls in the smith-Fuhrman family buy each summer?",
    options: { A: "Wildflower", B: "Yellow Box", C: "Birkenstock", D: "Sunflower" },
    correct: ["A", "B", "C", "D"] 
  },
  {
    startDate: "2025-09-22",
    question: "What was the brand of flip flop that all the girls in the smith-Fuhrman family buy each summer?",
    options: { A: "Wildflower", B: "Yellow Box", C: "Birkenstock", D: "Sunflower" },
    correct: "B"
  },
  {
    startDate: "2025-09-29",
    question: "How does lucy always pronounce R2-D2?",
    options: { A: "r too d tee", B: "r doo d too", C: "r tee doo too", D: "r tee d tee" },
    correct: "C"
  },
  {
    startDate: "2025-10-06",
    question: "What store were we shopping at when Lucy saw an amputee for the first time and became afraid of going into that store from then on?",
    options: { A: "Old Navy", B: "Justice", C: "PacSun", D: "Academy" },
    correct: "B"
  },
  {
    startDate: "2025-10-13",
    question: "What was the name of the stuffed animal that Dad gifted you and later Lucy enjoyed playing with?",
    options: { A: "Bunny bear", B: "Sadie", C: "Bear bunny", D: "Lamb" },
    correct: "C"
  },
   {
    startDate: "2025-10-20",
    question: "What did Lucy name the fish she won at the fair? ",
    options: { A: "Bill", B: "Lucy", C: "Tony", D: "Silvia" },
    correct: "D"
  },
  {
    startDate: "2025-10-20",
    question: "What did Lucy name her Build-a-bear she got on her Daddy-daughter trip to STL?",
    options: { A: "Matt Carpenter", B: "Ozzie Smith", C: "Skip Schumaker", D: "Lee Smith" },
    correct: "C"
  },


];
  // Add more questions here with startDate, question, options, and correct answer

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

  const notification = document.getElementById("notification");
  if (selected.value === current.correct) {
    notification.innerText = "Correct! You're just too good!";
    notification.className = "correct";
  } else {
    notification.innerText = "Almost got it! Try a different answer!";
    notification.className = "incorrect";
  }
});

// Load the question when the page loads
window.onload = loadQuestion; // Ensure it loads after DOM is ready

