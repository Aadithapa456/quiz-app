// Importing questions from external module
import {
   footballQuestions,
   football2Questions,
   cricketQuestions,
   f1Questions,
   literatureQuestions,
   architectureQuestions,
} from "./questions.js";

//Accesing DOM Elements
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
      resultTitle.innerHTML = `<span class="red"> Error ! </span>`;
      resultInfo.innerHTML = `Select a category`;
      showPopUp();
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
