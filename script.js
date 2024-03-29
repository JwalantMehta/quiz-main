// INITIAL CALL FOR EXECUTION IS AT loadQuestion() FUNCTION. LINE 407.


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


const header = document.querySelector("header");
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
let sections = document.querySelectorAll("section");
let index = 0;
let total = HTMLquestions.length;
let correct = 0;
let incorrect = 0;

let userAnswers = [];


// to make header sticky
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});



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


const displayQuestionAndOptions = (questionNumber) => {
  const data = HTMLquestions[questionNumber];
  quesBox.innerText = `${questionNumber + 1}) ${data.question}`;

  optionInputs.forEach((input, index) => {
    input.nextElementSibling.innerText = data[String.fromCharCode(97 + index)];
  });
};

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

    // to get the options of the question.
    optionInputs.forEach((input, i) => {
      input.nextElementSibling.innerText = data[String.fromCharCode(97 + i)];
    });

  } catch (error) {
    console.error("Error in loadQuestions:", error.message);
  }
};

const showSelectedAnswers = () => {
  index = 0;
  try {


    displayQuestionAndOptions(index);

    // for (let i = 0; i < HTMLquestions.length; i++) {
    //   const questionData = HTMLquestions[i];
    //   const radioButtons = document.getElementsByName(`question${i + 1}`);
    //   let selectedValue = "";
  
      // Check which radio button is checked
    //   for (let j = 0; j < radioButtons.length; j++) {
    //       if (radioButtons[j].checked) {
    //           selectedValue = radioButtons[j].value;
              
    //           if (selectedValue === questionData.correct) {
    //               radioButtons[j].parentNode.style.border = "2px solid green";
    //           } else {
    //               radioButtons[j].parentNode.style.border = "2px solid red";
    //           }
    //           break;
    //       }
    //   }
    // }
  
    optionInputs.forEach((input) => {
      input.disabled = true;

      for(let i = 0; i<HTMLquestions.length; i++){

        if(userAnswers[index] === HTMLquestions[i].correct){
          console.log("inside if condition"); 
        
          // input.parentNode.style.border = "2px solid green";
        }
      }
      // if (input.value === userAnswers[index]) {
      //   input.checked = true;
      //   console.log("inside if condition");
      //   optionInputs[index].parentNode.style.backgroundColor = `2px solid lightgreen`;
      // }
    });
    // // console.log(data);
  } catch (error) {
    console.error("Error in loadQuestions:", error.message);
  }
};

// Add an event listener to the "Skip" button
document.getElementById("skipBtn").addEventListener("click", () => {
  // Check if the current question index is not the last question
  if (index < total - 1) {
    const data = HTMLquestions[index];
    const num = document.getElementsByClassName("number");
    userAnswers.push("skipped");
    Array.from(num).forEach((element, index) => {
      if (index === HTMLquestions.indexOf(data)) {
        element.style.backgroundColor = "skyblue";

        console.log("index", index);
      }
    });
    // Increment the question index to move to the next question
    index++;
    // Load the next question
    loadQuestions();
  }
});

const nextQuiz = () => {
  try {
    const ans = getAnswer();
    userAnswers.push(ans);
    // console.log("userAnswers", userAnswers);
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
        endQuiz();
      });

      // alert("hii");
      return;
    }

    //here we will handle that which quiz is to be loaded.
    const data = HTMLquestions[index];
    // const ans = getAnswer();

    // below line makes the decision that if the user has selected the answer or not.
    ans == data.correct ? correct++ : incorrect++;
    const num = document.getElementsByClassName("number");
    Array.from(num).forEach((element, index) => {
      if (index === HTMLquestions.indexOf(data)) {
        element.style.backgroundColor = "lightgreen";
        // console.log("index", index);
      }
    });
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

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

// to iterate on the question number.
function selectQuestion(questionNumber) {
  var questionContainers = document.querySelectorAll(".num");
  questionContainers.forEach(function () {
    index = questionNumber;

    displayQuestionAndOptions(questionNumber);
    
  });
}

// this function is called when the user clicks on the submit button.
const endQuiz = () => {
  restartCountdown(); // Restart the countdown timer
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
  showSelectedAnswers();
};

// to select the radio button of the corresponding row.
function selectRadio(optionId) {
  document.getElementById(optionId).checked = true;
}

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


const startingTime = 100; // Time limit in minutes
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

      // Update local storage
      localStorage.setItem("countdownTime", time);

      time--;
    } else {
      clearInterval(countdownInterval);
      is_examover = true;
      // Handle the case when the time limit is reached
      endQuiz();
    }
  }, 1000); // Update every second
}

// Function to restart countdown timer
function restartCountdown() {
  clearInterval(countdownInterval); // Clear existing interval
  time = startingTime * 60; // Reset time to starting time
  updateCountdown(); // Start the countdown again
}

// Load countdown time from local storage if available
const storedCountdownTime = localStorage.getItem("countdownTime");
if (storedCountdownTime) {
  time = parseInt(storedCountdownTime);
} else {
  localStorage.setItem("countdownTime", time);
}

// Start the countdown timer
updateCountdown();

loadQuestions();
