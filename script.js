let questionContainer = document.querySelector(".quiz-question p");
let options = document.querySelectorAll(".quiz-options div button");
let nextBtn = document.querySelector(".next-btn");
let questionIndicator = document.querySelector(".quiz-info-question span");
let i = 0;
let questions = [
   {
      question: "Who tf is the GOAT?",
      a: "Messi",
      b: "Lionel Messi",
      c: "Lionel Andrés Messi",
      d: "Lionel Andrés Messi Cuccitini ",
      correct: "b",
   },
   {
      question: "What is the capital of France?",
      a: "Berlin",
      b: "Madrid",
      c: "Paris",
      d: "Rome",
      correct: "c",
   },
   {
      question: "Which planet is known as the Red Planet?",
      a: "Venus",
      b: "Mars",
      c: "Jupiter",
      d: "Saturn",
      correct: "b",
   },
   {
      question: "Who wrote the play 'Romeo and Juliet'?",
      a: "Charles Dickens",
      b: "Mark Twain",
      c: "William Shakespeare",
      d: "Leo Tolstoy",
      correct: "c",
   },
   {
      question: "What is the chemical symbol for water?",
      a: "O2",
      b: "H2O",
      c: "CO2",
      d: "H2",
      correct: "b",
   },
   {
      question: "What is the powerhouse of the cell?",
      a: "Nucleus",
      b: "Mitochondria",
      c: "Ribosome",
      d: "Endoplasmic Reticulum",
      correct: "b",
   },
];
function updateQuestion() {
   let currentQuestion = questions[i];
   questionIndicator.innerHTML = i + 1;
   console.log(i);
   questionContainer.innerHTML = currentQuestion.question;
   options.forEach((option, index) => {
      const currentOption = ["a", "b", "c", "d"][index];
      option.innerHTML = currentQuestion[currentOption];
   });
   i++;
}
nextBtn.addEventListener("click", updateQuestion);
// function updateQuestion() {
//     // Get the first question from the questions array
//     const currentQuestion = questions[0];

//     // Update the question text
//     questionContainer.innerHTML = currentQuestion.question;

//     // Update the options
//     options.forEach((option, index) => {
//         // Ensure you have an option available for the current index
//         const letter = ["a", "b", "c", "d"][index]; // Get the option letter (a, b, c, d)

//         // Check if the letter exists in the current question object
//         if (currentQuestion[letter]) {
//             option.innerHTML = currentQuestion[letter]; // Access the correct answer using the letter
//         } else {
//             option.innerHTML = ""; // If not available, clear the option
//         }
//     });
// }
