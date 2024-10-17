let questionContainer = document.querySelector(".quiz-question p");
let nextBtn = document.querySelector(".next-btn");
let questionIndicator = document.querySelector(".quiz-info-question span");
let correctAnswerContainer = document.querySelector("#correct");
let incorrectAnswerContainer = document.querySelector("#incorrect");
let optionsContainer = document.querySelector(".quiz-options");
let currentQuestionIndex = 0;
let correctAnswerCount = 0;
let incorrectAnswerCount = 0;
//Result Popup
let resultPopUp = document.querySelector(".pop-up");
let closePopUpBtn = document.querySelector("#close-btn");
let resultInfo = document.querySelector(".result-info");
let resultTitle = document.querySelector(".result-title");
let dropDownContainer = document.querySelector(".dropdown-select-item");
let mainItem = document.querySelector(".select");
let options = document.querySelectorAll("#option li");
dropDownContainer.addEventListener("click", () => {
   dropDownContainer.classList.toggle("active");
   document.querySelector(".dropdown-options").classList.toggle("visible");
});
options.forEach((option) => {
   option.addEventListener("click", () => {
      mainItem.innerHTML = `${option.innerHTML}`;
   });
});
document.addEventListener("click", (e) => {
   if (!dropDownContainer.contains(e.target)) {
      dropDownContainer.classList.remove("active"); // Remove active class if clicking outside
      document.querySelector(".dropdown-options").classList.remove("visible"); // Hide dropdown
   }
});
function questions() {
   let footballQuestions = [
      {
         question: "Who won the FIFA World Cup in 2018?",
         answers: ["Brazil", "France", "Germany", "Argentina"],
         correct: 1,
      },
      {
         question: "Which player has the most Ballon d'Or awards?",
         answers: [
            "Cristiano Ronaldo",
            "Lionel Messi",
            "Neymar",
            "Luka Modrić",
         ],
         correct: 1,
      },
      {
         question: "Which club has won the most UEFA Champions League titles?",
         answers: ["Barcelona", "Real Madrid", "AC Milan", "Bayern Munich"],
         correct: 1,
      },
      {
         question:
            "Who is the top scorer in the history of the Premier League?",
         answers: [
            "Thierry Henry",
            "Sergio Agüero",
            "Alan Shearer",
            "Wayne Rooney",
         ],
         correct: 2,
      },
      {
         question: "Which country has won the most FIFA World Cups?",
         answers: ["Italy", "Germany", "Argentina", "Brazil"],
         correct: 3,
      },
      {
         question: "Who scored the famous 'Hand of God' goal?",
         answers: ["Pelé", "Diego Maradona", "Johan Cruyff", "Zinedine Zidane"],
         correct: 1,
      },
      {
         question:
            "Which player holds the record for most goals in a single World Cup?",
         answers: ["Just Fontaine", "Ronaldo", "Gerd Müller", "Pelé"],
         correct: 0,
      },
      {
         question: "Which team is known as 'The Red Devils'?",
         answers: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"],
         correct: 1,
      },
      {
         question: "Who was the top scorer of the 2022 FIFA World Cup?",
         answers: [
            "Kylian Mbappé",
            "Lionel Messi",
            "Cristiano Ronaldo",
            "Harry Kane",
         ],
         correct: 0,
      },
      {
         question:
            "What is the nickname of the Brazilian national football team?",
         answers: [
            "The Samba Boys",
            "La Albiceleste",
            "The Selecao",
            "Azzurri",
         ],
         correct: 2,
      },
   ];
   let football2Questions = [
      {
         question:
            "Who scored the winning goal in the 2014 FIFA World Cup final?",
         answers: ["Lionel Messi", "Mario Götze", "Neymar", "Mesut Özil"],
         correct: 1,
      },
      {
         question: "Which country hosted the 2010 FIFA World Cup?",
         answers: ["Brazil", "Germany", "South Africa", "Spain"],
         correct: 2,
      },
      {
         question: "Which football club is known as 'The Old Lady'?",
         answers: ["Juventus", "AC Milan", "Inter Milan", "Napoli"],
         correct: 0,
      },
      {
         question: "Who won the Ballon d'Or in 2021?",
         answers: [
            "Robert Lewandowski",
            "Lionel Messi",
            "Karim Benzema",
            "Mohamed Salah",
         ],
         correct: 1,
      },
      {
         question: "Which team did Lionel Messi join in 2021?",
         answers: [
            "Manchester City",
            "Barcelona",
            "Paris Saint-Germain",
            "Chelsea",
         ],
         correct: 2,
      },
      {
         question:
            "Who holds the record for the most goals in La Liga history?",
         answers: [
            "Cristiano Ronaldo",
            "Raúl",
            "Lionel Messi",
            "Karim Benzema",
         ],
         correct: 2,
      },
      {
         question: "Which country won Euro 2020?",
         answers: ["Italy", "England", "Spain", "Germany"],
         correct: 0,
      },
      {
         question: "Which player is known as 'O Fenômeno'?",
         answers: ["Ronaldinho", "Romário", "Pelé", "Ronaldo Nazário"],
         correct: 3,
      },
      {
         question: "Which Premier League team has the nickname 'The Blues'?",
         answers: ["Chelsea", "Manchester City", "Everton", "Leicester City"],
         correct: 0,
      },
      {
         question: "Who won the UEFA Champions League in 2021?",
         answers: ["Bayern Munich", "Chelsea", "Manchester City", "Liverpool"],
         correct: 1,
      },
   ];
   let cricketQuestions = [
      {
         question: "Who won the ICC Cricket World Cup in 2019?",
         answers: ["India", "Australia", "England", "New Zealand"],
         correct: 2,
      },
      {
         question: "Who has the most runs in Test cricket history?",
         answers: [
            "Sachin Tendulkar",
            "Ricky Ponting",
            "Brian Lara",
            "Jacques Kallis",
         ],
         correct: 0,
      },
      {
         question:
            "Who holds the record for the fastest century in ODI cricket?",
         answers: [
            "AB de Villiers",
            "Chris Gayle",
            "Shahid Afridi",
            "Virat Kohli",
         ],
         correct: 0,
      },
      {
         question: "Which team won the inaugural T20 World Cup in 2007?",
         answers: ["India", "Pakistan", "Australia", "Sri Lanka"],
         correct: 0,
      },
      {
         question: "Who is the leading wicket-taker in Test cricket?",
         answers: [
            "Shane Warne",
            "Anil Kumble",
            "James Anderson",
            "Muttiah Muralitharan",
         ],
         correct: 3,
      },
      {
         question: "Which cricketer is known as 'The Wall'?",
         answers: [
            "Virat Kohli",
            "Sachin Tendulkar",
            "Rahul Dravid",
            "VVS Laxman",
         ],
         correct: 2,
      },
      {
         question: "Which team has won the most ICC Champions Trophy titles?",
         answers: ["India", "Australia", "South Africa", "West Indies"],
         correct: 0,
      },
      {
         question:
            "Who is the captain of the Indian cricket team in all three formats (as of 2021)?",
         answers: ["Rohit Sharma", "Virat Kohli", "MS Dhoni", "KL Rahul"],
         correct: 1,
      },
      {
         question:
            "Which player has hit the most sixes in international cricket?",
         answers: ["Chris Gayle", "Rohit Sharma", "Shahid Afridi", "MS Dhoni"],
         correct: 0,
      },
      {
         question:
            "Who is the only player to score 100 international centuries?",
         answers: [
            "Brian Lara",
            "Ricky Ponting",
            "Sachin Tendulkar",
            "Virat Kohli",
         ],
         correct: 2,
      },
   ];
   let f1Questions = [
      {
         question:
            "Who holds the record for the most Formula 1 World Championships?",
         answers: [
            "Michael Schumacher",
            "Lewis Hamilton",
            "Ayrton Senna",
            "Sebastian Vettel",
         ],
         correct: 1,
      },
      {
         question: "Which team has the most Constructors' Championships?",
         answers: ["Ferrari", "Mercedes", "Red Bull", "McLaren"],
         correct: 0,
      },
      {
         question: "Which driver won the F1 World Championship in 2020?",
         answers: [
            "Max Verstappen",
            "Lewis Hamilton",
            "Valtteri Bottas",
            "Charles Leclerc",
         ],
         correct: 1,
      },
      {
         question: "Who is known as 'The Iceman' in Formula 1?",
         answers: [
            "Niki Lauda",
            "Kimi Räikkönen",
            "Ayrton Senna",
            "Fernando Alonso",
         ],
         correct: 1,
      },
      {
         question: "Which Grand Prix is held at the Circuit de Monaco?",
         answers: ["Italian GP", "Spanish GP", "Monaco GP", "French GP"],
         correct: 2,
      },
      {
         question: "Which F1 team is also known as the 'Silver Arrows'?",
         answers: ["Ferrari", "Mercedes", "Red Bull", "Williams"],
         correct: 1,
      },
      {
         question: "Who was the youngest driver to win a Formula 1 race?",
         answers: [
            "Sebastian Vettel",
            "Max Verstappen",
            "Lewis Hamilton",
            "Charles Leclerc",
         ],
         correct: 1,
      },
      {
         question: "Which country hosts the Suzuka Grand Prix?",
         answers: ["China", "Japan", "Malaysia", "Singapore"],
         correct: 1,
      },
      {
         question: "Which driver has the most wins in the Monaco Grand Prix?",
         answers: [
            "Ayrton Senna",
            "Lewis Hamilton",
            "Michael Schumacher",
            "Niki Lauda",
         ],
         correct: 0,
      },
      {
         question: "Who won the 2021 F1 World Championship?",
         answers: [
            "Lewis Hamilton",
            "Max Verstappen",
            "Charles Leclerc",
            "Valtteri Bottas",
         ],
         correct: 1,
      },
   ];
   let literatureQuestions = [
      {
         question: "Who wrote 'Pride and Prejudice'?",
         answers: [
            "Charlotte Brontë",
            "Emily Brontë",
            "Jane Austen",
            "George Eliot",
         ],
         correct: 2,
      },
      {
         question: "Which novel begins with the line 'Call me Ishmael'?",
         answers: ["Moby-Dick", "The Great Gatsby", "1984", "Ulysses"],
         correct: 0,
      },
      {
         question: "Who is the author of 'The Catcher in the Rye'?",
         answers: [
            "F. Scott Fitzgerald",
            "J.D. Salinger",
            "Ernest Hemingway",
            "George Orwell",
         ],
         correct: 1,
      },
      {
         question: "What is the title of the epic poem written by Homer?",
         answers: ["The Iliad", "Paradise Lost", "Beowulf", "Divine Comedy"],
         correct: 0,
      },
      {
         question: "Who wrote 'The Great Gatsby'?",
         answers: [
            "Ernest Hemingway",
            "F. Scott Fitzgerald",
            "William Faulkner",
            "John Steinbeck",
         ],
         correct: 1,
      },
      {
         question: "Which play is often referred to as the 'Scottish Play'?",
         answers: ["Macbeth", "Othello", "Hamlet", "King Lear"],
         correct: 0,
      },
      {
         question: "Who wrote the play 'Death of a Salesman'?",
         answers: [
            "Tennessee Williams",
            "Arthur Miller",
            "Edward Albee",
            "David Mamet",
         ],
         correct: 1,
      },
      {
         question: "Who is the author of the Harry Potter series?",
         answers: [
            "J.R.R. Tolkien",
            "C.S. Lewis",
            "J.K. Rowling",
            "Philip Pullman",
         ],
         correct: 2,
      },
      {
         question: "Which of the following is a novel by Leo Tolstoy?",
         answers: [
            "Crime and Punishment",
            "War and Peace",
            "Anna Karenina",
            "Both B and C",
         ],
         correct: 3,
      },
      {
         question:
            "What is the name of the protagonist in George Orwell's '1984'?",
         answers: ["Winston Smith", "Big Brother", "O'Brien", "Julia"],
         correct: 0,
      },
   ];
   let architectureQuestions = [
      {
         question: "Who designed the Guggenheim Museum in New York?",
         answers: [
            "Frank Gehry",
            "Zaha Hadid",
            "Frank Lloyd Wright",
            "Le Corbusier",
         ],
         correct: 2,
      },
      {
         question: "The Eiffel Tower was designed by which architect?",
         answers: [
            "Gustave Eiffel",
            "Antoni Gaudí",
            "I. M. Pei",
            "Renzo Piano",
         ],
         correct: 0,
      },
      {
         question: "Which famous building is located in Agra, India?",
         answers: ["Red Fort", "Taj Mahal", "Lotus Temple", "Qutub Minar"],
         correct: 1,
      },
      {
         question: "Who is considered the pioneer of modern architecture?",
         answers: [
            "Ludwig Mies van der Rohe",
            "Frank Lloyd Wright",
            "Le Corbusier",
            "Walter Gropius",
         ],
         correct: 2,
      },
      {
         question: "Which architect is known for designing Fallingwater?",
         answers: [
            "Frank Gehry",
            "Louis Kahn",
            "Frank Lloyd Wright",
            "Eero Saarinen",
         ],
         correct: 2,
      },
      {
         question: "The Colosseum is located in which city?",
         answers: ["Athens", "Rome", "Paris", "Istanbul"],
         correct: 1,
      },
      {
         question: "Which building is known as 'The Shard'?",
         answers: [
            "A skyscraper in London",
            "A museum in Paris",
            "A cathedral in Milan",
            "A tower in Dubai",
         ],
         correct: 0,
      },
      {
         question:
            "Which style of architecture is the Notre-Dame Cathedral known for?",
         answers: ["Gothic", "Baroque", "Neoclassical", "Renaissance"],
         correct: 0,
      },
      {
         question: "Which architect designed the Sydney Opera House?",
         answers: ["Renzo Piano", "Norman Foster", "Jørn Utzon", "I. M. Pei"],
         correct: 2,
      },
      {
         question: "Which architect is associated with the Bauhaus movement?",
         answers: [
            "Walter Gropius",
            "Frank Lloyd Wright",
            "Ludwig Mies van der Rohe",
            "Alvar Aalto",
         ],
         correct: 0,
      },
   ];
   let category = mainItem.innerHTML.trim();
   if (category == "Football") {
      return footballQuestions;
   } else if (category == "Football 2") {
      return football2Questions;
   } else if (category == "Cricket") {
      return cricketQuestions;
   } else if (category == "F1") {
      return f1Questions;
   } else if (category == "Literature") {
      return literatureQuestions;
   } else if (category == "Architecture") {
      return architectureQuestions;
   } else {
      alert("Error");
   }
}

function updateQuestion() {
   if (currentQuestionIndex >= questions().length) {
      quizOver(correctAnswerCount, incorrectAnswerCount);
      return;
   }
   let currentQuestion = questions()[currentQuestionIndex];
   questionIndicator.innerHTML = currentQuestionIndex + 1; // Since currentQuestionIndex starts from 0 so adding 1 for proper question count display
   questionContainer.innerHTML = currentQuestion.question;
   correctAnswerContainer.innerHTML = correctAnswerCount;
   incorrectAnswerContainer.innerHTML = incorrectAnswerCount;
   // Clearing previous options
   optionsContainer.innerHTML = "";

   // Creating a new button element for each option
   const optionElements = ["a", "b", "c", "d"].map((currentOption, index) => {
      const option = document.createElement("button");
      option.classList.add("option-btn");
      option.innerHTML = `<span>${currentOption})</span> ${currentQuestion.answers[index]}`;

      // Attaching the click event listener for each new button
      option.addEventListener("click", (event) => {
         let newOptions = document.querySelectorAll(".quiz-options button");
         let correctBtn = newOptions[currentQuestion.correct];
         console.log(correctBtn);
         checkAnswer(currentQuestion, index, event, correctBtn);
      });

      // Appending the new option button to the options container
      optionsContainer.appendChild(option);

      return option; // Since map is meant to return an array of values
   });

   currentQuestionIndex++; // Move to the next question
}
nextBtn.addEventListener("click", updateQuestion);

function checkAnswer(question, indexOfSelectedAnswer, selectedBtn, correctBtn) {
   let clickedBtn = selectedBtn.target;
   if (indexOfSelectedAnswer == question.correct) {
      clickedBtn.classList.add("correct");
      correctAnswerCount++;
   } else {
      clickedBtn.classList.add("incorrect");
      setTimeout(() => {
         correctBtn.classList.add("correct");
      }, 1000);
      incorrectAnswerCount++;
   }
   updateResultCount();
   disableOptions();
}
function updateResultCount() {
   correctAnswerContainer.innerHTML = correctAnswerCount;
   incorrectAnswerContainer.innerHTML = incorrectAnswerCount;
}
function disableOptions() {
   let options = document.querySelectorAll(".quiz-options button");
   options.forEach((current) => {
      current.disabled = true;
   });
}
function quizOver(correct, incorrect) {
   const lowest = Math.round(questions.length / 3);
   const average = Math.round(questions.length / 2) + 1;
   console.log(lowest, average);
   if (correct <= lowest) {
      resultTitle.innerHTML = `<span class="red">You could do Better<span>`;
   } else if (correct <= average) {
      resultTitle.innerHTML = `<span class = "orange">Grind More</span>`;
   } else {
      resultTitle.innerHTML = `<span class="green">GG</span>`;
   }
   resultInfo.innerHTML = `Correct : ${correct} <br><br> Incorrect: ${incorrect}`;
   showPopUp();
}
function showPopUp() {
   setTimeout(() => {
      resultPopUp.style.display = "flex";
      resultPopUp.classList.add("fly-in");
      resultPopUp.classList.remove("fly-out");
   }, 800);
}
closePopUpBtn.addEventListener("click", () => {
   resultPopUp.classList.remove("fly-in");
   resultPopUp.classList.add("fly-out");
   setTimeout(() => {
      resultPopUp.style.display = "none";
   }, 300); //Added 300ms delay for smoother animation
});
