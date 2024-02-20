// INITIAL CALL FOR EXECUTION IS AT loadQuestion() FUNCTION. LINE 385.

const header = document.querySelector("header");

// to make the header sticky
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

let HTMLquestions = [
  {
    question: "which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "javascript",
    d: "PHP",
    correct: "a",
  },

  {
    question: "what does HTML stands for?",
    a: "hyper toast markup language",
    b: "hyper text markup language",
    c: "hyper toast makeup language",
    d: "hyphen text markup language",
    correct: "b",
  },

  {
    question: "what does CSS stands for?",
    a: "case style sheets",
    b: "casing styling sheet",
    c: "cascading simple sheets",
    d: "cascading style sheets",
    correct: "d",
  },

  {
    question: "choose the correct HTML element for the largest heading:",
    a: "<heading>",
    b: "<head>",
    c: "<h1>",
    d: "<6>",
    correct: "c",
  },

  {
    question:
      "whih computer language was designed to extract data from a database",
    a: "BASIC",
    b: "SQL",
    c: "COBOL",
    d: "FORTRAN",
    correct: "b",
  },

  {
    question: "which HTML tag is used to define an internal style sheet",
    a: "<style>",
    b: "<script>",
    c: "<css>",
    d: "<body>",
    correct: "a",
  },

  {
    question: "How do you insert a comment in a CSS file?",
    a: "// this is a comment",
    b: "!this is a comment",
    c: "/*this is a comment*/",
    d: "?? this is a comment ??",
    correct: "c",
  },

  {
    question: "which property is used to change the background color?",
    a: "color",
    b: "background-color",
    c: "bgcolor",
    d: "bground",
    correct: "b",
  },

  {
    question: 'How do you write "Hello World" in an alert box?',
    a: 'msgBox("hello world");',
    b: 'alertBox("hello world");',
    c: 'msg("hello world");',
    d: 'alert("hello world");',
    correct: "d",
  },

  {
    question: "what is not a legal variable name?",
    a: "Myvar",
    b: "my_var",
    c: "_myvar",
    d: "my-var",
    correct: "c",
  },
];

let index = 0;
let total = HTMLquestions.length;
let correct = 0;
let incorrect = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

const loadQuestions = () => {
  if (index === total) {
    return endQuiz();
  }

  // here the when last question comes, the next button text changes to submit.
  if (index === total - 1) {
    document.getElementById(
      "btn"
    ).innerHTML = `<h4 id="kunj" onclick=stopTime()>submit</h4>`;
  }

  try {
    reset(); // this is needed to uncheck the readio button after each question.

    //below 2 lines are responsible for loading the questions.
    const data = HTMLquestions[index];
    quesBox.innerText = `${index + 1}) ${data.question}`;

    //below 4 lines are responsible for loading the options.
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    // console.log(data);
  } catch (error) {
    console.error("Error in loadQuestions:", error.message);
  }
};

// Add an event listener to the "Skip" button
document.getElementById("skipBtn").addEventListener("click", () => {
  // Check if the current question index is not the last question
  if (index < total - 1) {
    // Increment the question index to move to the next question
    index++;
    // Load the next question
    loadQuestions();
  }
});

const nextQuiz = () => {
  try {
    const ans = getAnswer();
    if (!ans) {
      // Display an alert indicating that the user needs to select an answer
      alert(
        "Please select an answer before moving to the next question or else press skip."
      );
      return;
    }

    if (time <= 0) {
      //here we will handle the situation when the time is up.

      document.getElementById("btn").innerText = `submit`;

      setTimeout(() => {
        alert(
          "Time's up! You cannot answer any more questions................."
        );
      });

      // alert("hii");
      return;
    }

    //here we will handle that which quiz is to be loaded.
    const data = HTMLquestions[index];
    // const ans = getAnswer();

    // below line makes the decision that if the user has selected the answer or not.
    ans == data.correct ? correct++ : incorrect++;
    index++;
    loadQuestions();
    return;
  } catch (error) {
    console.error("Error in nextQuiz:", error.message);
  }
};

// this function is used to get the selected answer of the user.
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

// to uncheck all radio button values.
//NOTE:- THIS SHOULD BE BELOW getAnswer() FUNCTION.
const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

// this function is called when the user clicks on the submit button.
const endQuiz = () => {
  const unansweredQuestions = HTMLquestions.filter(
    (question) => !getAnsweredQuestions().includes(question)
  );

  if (unansweredQuestions.length > 0) {
    // Display error message or handle the situation where not all questions are answered
    const unansweredQuestionNumbers = unansweredQuestions.map(
      (question) => HTMLquestions.indexOf(question) + 1
    );
    alert(
      `Please answer all questions before submitting the quiz. Unanswered questions: ${unansweredQuestionNumbers.join(
        ", "
      )}`
    );
    return;
  }

  document.getElementById("quesBox").innerHTML = `<h2>result</h2>`;
  document.getElementById(
    "btn"
  ).innerHTML = `<a href="home.html"><h5 id="k">home page</h5></a>`;
  document.getElementById("btn").style.backgroundColor = "#008080";
  document.getElementById("k").style.color = "white";
  document.getElementById("box").innerHTML = `
        <div id="end-1">
        <h3> thankyou for participating in the quiz</h3>
        <h2> ${correct} / ${total} are correct</h2>
        <img src="images/img-31.png" height="100px" width="100px"/>
        </div>
    `;
  document.getElementById("end-1").style.textAlign = "center";
};

// Function to get answered questions
const getAnsweredQuestions = () => {
  const answeredQuestions = [];
  HTMLquestions.forEach((question) => {
    if (getAnswer(question)) {
      answeredQuestions.push(question);
    }
  });
  return answeredQuestions;
};

//initial call. all the execution starts from here.
loadQuestions();

const startingTime = 10; // Time limit in minutes
let time = startingTime * 60; // Convert minutes to seconds
let countdownInterval; // Interval variable for countdown timer

// Function to update countdown timer
function updateCountdown() {
  countdownInterval = setInterval(() => {
    if (time > 0) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      countdown.innerHTML = `${minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`;
      time--;
    } else {
      clearInterval(countdownInterval);
      is_examover = true;
      // Handle the case when the time limit is reached
      endQuiz();
    }
  }, 1000); // Update every second
}

// Start the countdown timer
updateCountdown();

// const quizModule = (function(HTMLquestions) {
//     let index = 0;
//     let total = HTMLquestions.length;
//     let correct = 0;
//     let incorrect = 0;
//     const quesBox = document.getElementById("quesBox");
//     const optionInputs = document.querySelectorAll(".options");

//     function loadQuestions() {
//         if (index === total) {
//             return endQuiz();
//         }

//         if (index === total - 1) {
//             document.getElementById("btn").innerHTML = `<h4 id="kunj" onclick=stopTime()>submit</h4>`;
//         }

//         try {
//             reset();

//             const data = HTMLquestions[index];
//             quesBox.innerText = `${index + 1}) ${data.question}`;

//             optionInputs[0].nextElementSibling.innerText = data.a;
//             optionInputs[1].nextElementSibling.innerText = data.b;
//             optionInputs[2].nextElementSibling.innerText = data.c;
//             optionInputs[3].nextElementSibling.innerText = data.d;
//         } catch (error) {
//             console.error("Error in loadQuestions:", error.message);
//         }
//     }

//     document.getElementById("skipBtn").addEventListener("click", () => {
//         if (index < total - 1) {
//             index++;
//             loadQuestions();
//         }
//     });

    
    
//     function nextQuiz() {
//         try {
//             const ans = getAnswer();
//             if (!ans) {
//                 alert("Please select an answer before moving to the next question or else press skip.");
//                 return;
//             }

//             if (time <= 0) {
//                 document.getElementById("btn").innerText = `submit`;
//                 setTimeout(() => {
//                     alert("Time's up! You cannot answer any more questions.................");
//                 });
//                 return;
//             }

//             const data = HTMLquestions[index];
//             ans == data.correct ? correct++ : incorrect++;
//             index++;
//             loadQuestions();
//             return;
//         } catch (error) {
//             console.error("Error in nextQuiz:", error.message);
//         }
//     }

    

//     function getAnswer() {
//         let answer;
//         optionInputs.forEach((input) => {
//             if (input.checked) {
//                 answer = input.value;
//             }
//         });
//         return answer;
//     }

//     function reset() {
//         optionInputs.forEach((input) => {
//             input.checked = false;
//         });
//     }

//     function endQuiz() {
//         const unansweredQuestions = HTMLquestions.filter(
//             (question) => !getAnsweredQuestions().includes(question)
//         );

//         if (unansweredQuestions.length > 0) {
//             const unansweredQuestionNumbers = unansweredQuestions.map(
//                 (question) => HTMLquestions.indexOf(question) + 1
//             );
//             alert(`Please answer all questions before submitting the quiz. Unanswered questions: ${unansweredQuestionNumbers.join(", ")}`);
//             return;
//         }

//         document.getElementById("quesBox").innerHTML = `<h2>result</h2>`;
//         document.getElementById("btn").innerHTML = `<a href="home.html"><h5 id="k">home page</h5></a>`;
//         document.getElementById("btn").style.backgroundColor = "#008080";
//         document.getElementById("k").style.color = "white";
//         document.getElementById("box").innerHTML = `
//             <div id="end-1">
//             <h3> thankyou for participating in the quiz</h3>
//             <h2> ${correct} / ${total} are correct</h2>
//             <img src="images/img-31.png" height="100px" width="100px"/>
//             </div>
//         `;
//         document.getElementById("end-1").style.textAlign = "center";
//     }

//     function getAnsweredQuestions() {
//         const answeredQuestions = [];
//         HTMLquestions.forEach((question) => {
//             if (getAnswer(question)) {
//                 answeredQuestions.push(question);
//             }
//         });
//         return answeredQuestions;
//     }

//     // Call the loadQuestions function to initiate the quiz
//     loadQuestions();

//     return {
//         loadQuestions,
//         nextQuiz,
//         endQuiz
//     };
// })(HTMLquestions);
