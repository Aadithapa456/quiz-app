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

function questions() {
   let questionsNormal = [
      {
         question: "Who tf is the GOAT?",
         answers: [
            "Messi",
            "Lionel Messi",
            "Lionel Andrés Messi",
            "Lionel Andrés Messi Cuccitini",
         ],
         correct: 1,
      },
      {
         question: "What is the capital of France?",
         answers: ["Berlin", "Madrid", "Paris", "Rome"],
         correct: 2,
      },
      {
         question: "Which planet is known as the Red Planet?",
         answers: ["Venus", "Mars", "Jupiter", "Saturn"],
         correct: 1,
      },
      {
         question: "Who wrote the play 'Romeo and Juliet'?",
         answers: [
            "Charles Dickens",
            "Mark Twain",
            "William Shakespeare",
            "Leo Tolstoy",
         ],
         correct: 2,
      },
      {
         question: "What is the chemical symbol for water?",
         answers: ["O2", "H2O", "CO2", "H2"],
         correct: 1,
      },
      {
         question: "What is the powerhouse of the cell?",
         answers: [
            "Nucleus",
            "Mitochondria",
            "Ribosome",
            "Endoplasmic Reticulum",
         ],
         correct: 1,
      },
   ];
   let questions2 = [
      {
         question: "What is the largest mammal in the world?",
         answers: [
            "African Elephant",
            "Blue Whale",
            "Giraffe",
            "Humpback Whale",
         ],
         correct: 1, // Index of the correct answer
      },
      {
         question: "Which element has the chemical symbol 'Fe'?",
         answers: ["Gold", "Iron", "Silver", "Lead"],
         correct: 1,
      },
      {
         question: "What is the capital city of Japan?",
         answers: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
         correct: 2,
      },
      {
         question: "Who painted the Mona Lisa?",
         answers: [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Claude Monet",
         ],
         correct: 2,
      },
      {
         question: "What is the smallest prime number?",
         answers: ["0", "1", "2", "3"],
         correct: 2,
      },
      {
         question: "What gas do plants absorb from the atmosphere?",
         answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
         correct: 2,
      },
   ];
   let questions = [
      {
         question:
            "Which club did Cristiano Ronaldo join after leaving Manchester United in 2009?",
         answers: ["Barcelona", "Juventus", "Real Madrid", "AC Milan"],
         correct: 2,
      },
      {
         question:
            "As of 2021, how many Ballon d'Or awards has Lionel Messi won?",
         answers: ["5", "6", "7", "8"],
         correct: 3,
      },
      {
         question:
            "Which player holds the record for the most goals scored in El Clásico?",
         answers: [
            "Cristiano Ronaldo",
            "Lionel Messi",
            "Alfredo Di Stéfano",
            "Raúl",
         ],
         correct: 1,
      },
      {
         question:
            "In which year did Lionel Messi make his official debut for FC Barcelona?",
         answers: ["2003", "2004", "2005", "2006"],
         correct: 1,
      },
      {
         question:
            "How many times have Barcelona and Real Madrid faced each other in official competitions as of 2021?",
         answers: ["250", "260", "270", "280"],
         correct: 1,
      },
      {
         question:
            "What is the name of the stadium where Barcelona plays its home matches?",
         answers: ["Santiago Bernabéu", "Old Trafford", "Camp Nou", "San Siro"],
         correct: 2,
      },
      {
         question:
            "Who scored the winning goal in the 2011 UEFA Champions League final against Manchester United?",
         answers: ["Lionel Messi", "Cristiano Ronaldo", "Pedro", "David Villa"],
         correct: 0,
      },
      {
         question:
            "Which player famously said, 'I am not a robot' after winning the Ballon d'Or?",
         answers: [
            "Cristiano Ronaldo",
            "Lionel Messi",
            "Ronaldinho",
            "Zinedine Zidane",
         ],
         correct: 1,
      },
      {
         question: "In which year did Ronaldo win his first Ballon d'Or?",
         answers: ["2006", "2007", "2008", "2009"],
         correct: 1,
      },
      {
         question: "Who is the all-time leading scorer for FC Barcelona?",
         answers: ["Samuel Eto'o", "Lionel Messi", "Ronaldinho", "Luis Suárez"],
         correct: 1,
      },
      {
         question: "Which player has the most assists in El Clásico history?",
         answers: [
            "Lionel Messi",
            "Cristiano Ronaldo",
            "Xavi Hernández",
            "Andrés Iniesta",
         ],
         correct: 2,
      },
   ];
   return questions;
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
