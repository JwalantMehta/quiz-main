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

let pythonQuestions = [
  {
    question:
      "What is the output of the following code snippet?\n\nx = [i**2 for i in range(5)]\nprint(x)",
    a: "[0, 1, 4, 9, 16]",
    b: "[1, 4, 9, 16, 25]",
    c: "[0, 2, 4, 6, 8]",
    d: "[0, 1, 2, 3, 4]",
    correct: "a",
  },
  {
    question:
      "Which of the following is a correct way to open a file named 'data.txt' in read mode?",
    a: "file = open('data.txt', 'r')",
    b: "file = open('data.txt', 'read')",
    c: "file = open('data.txt')",
    d: "file = open('data.txt', mode='r')",
    correct: "c",
  },
  {
    question:
      "What will be the output of the following code?\n\nx = 'hello'\nprint(x[::-1])",
    a: "olleh",
    b: "hello",
    c: "h",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "Which method is used to remove an item from a set?",
    a: "remove()",
    b: "discard()",
    c: "pop()",
    d: "delete()",
    correct: "b",
  },
  {
    question: "What is the output of the following code?\n\nprint(3 < 4 < 5)",
    a: "True",
    b: "False",
    c: "Syntax Error",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "Which of the following is used to create a dictionary in Python?",
    a: "{}",
    b: "[]",
    c: "()",
    d: "<>",
    correct: "a",
  },
  {
    question: "What is the result of '5' + '5' in Python?",
    a: "10",
    b: "55",
    c: "Syntax Error",
    d: "TypeError",
    correct: "b",
  },
  {
    question: "What does the 'continue' statement do in Python?",
    a: "Exits the loop",
    b: "Skips the rest of the code in the loop and moves to the next iteration",
    c: "Restarts the loop",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "What will be the output of the following code?\n\nprint(list(range(1, 6, 2)))",
    a: "[1, 3, 5]",
    b: "[1, 2, 3, 4, 5]",
    c: "[2, 4]",
    d: "[1, 4]",
    correct: "a",
  },
  {
    question: "Which of the following is an incorrect variable name in Python?",
    a: "_my_var",
    b: "1var",
    c: "myVar",
    d: "my_Var",
    correct: "b",
  },
];

let jsQuestions = [
  {
    question: "What is the result of the following expression: 5 + '5'?",
    a: "55",
    b: "10",
    c: "'55'",
    d: "TypeError",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code?\n\nconsole.log(2 + '2' - 1);",
    a: "21",
    b: "22",
    c: "3",
    d: "NaN",
    correct: "c",
  },
  {
    question: "Which keyword is used to declare variables in JavaScript?",
    a: "dim",
    b: "var",
    c: "int",
    d: "let",
    correct: "b",
  },
  {
    question: "What does 'DOM' stand for in JavaScript?",
    a: "Document Object Model",
    b: "Data Object Model",
    c: "Document Oriented Model",
    d: "Data Object Method",
    correct: "a",
  },
  {
    question:
      "Which method is used to add a new element to the end of an array?",
    a: "push()",
    b: "append()",
    c: "addToEnd()",
    d: "add()",
    correct: "a",
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    a: "var colors = [red, blue, green];",
    b: "var colors = 'red', 'blue', 'green';",
    c: "var colors = {red, blue, green};",
    d: "var colors = ['red', 'blue', 'green'];",
    correct: "d",
  },
  {
    question: "Which event is triggered when a user clicks on an HTML element?",
    a: "onchange",
    b: "onmouseclick",
    c: "onhover",
    d: "onclick",
    correct: "d",
  },
  {
    question: "What is the correct way to write an if statement in JavaScript?",
    a: "if x = 5 then",
    b: "if (x === 5)",
    c: "if x == 5",
    d: "if x = 5",
    correct: "b",
  },
  {
    question:
      "Which operator is used for strict equality comparison in JavaScript?",
    a: "==",
    b: "=",
    c: "===",
    d: "===",
    correct: "d",
  },
  {
    question:
      "What does the following expression evaluate to: Boolean('false')?",
    a: "false",
    b: "true",
    c: "TypeError",
    d: "Undefined",
    correct: "b",
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
      alert("Please select an answer before moving to the next question or else press skip.");
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

  const unansweredQuestions = HTMLquestions.filter(question => !getAnsweredQuestions().includes(question));
  
  if (unansweredQuestions.length > 0) {
    // Display error message or handle the situation where not all questions are answered
    const unansweredQuestionNumbers = unansweredQuestions.map(question => HTMLquestions.indexOf(question) + 1);
    alert(`Please answer all questions before submitting the quiz. Unanswered questions: ${unansweredQuestionNumbers.join(", ")}`);
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
  HTMLquestions.forEach(question => {
    if (getAnswer(question)) {
      answeredQuestions.push(question);
    }
  });
  return answeredQuestions;
};

//initial call. all the execution starts from here.
loadQuestions();

const startingTime = 1;
let time = startingTime * 60;
let is_examover = false;
const countdown = document.getElementById("countdown");

// setInterval() is used to set the max time limit for the quiz.
setInterval(update, 1000);

function update() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if ((minutes === 0 && seconds === 0) || is_examover) {
    countdown.innerHTML = `0:00`;
    return;
  }
  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdown.innerHTML = `${minutes}:${seconds}`;

  time--;
}

function stopTime() {
  const time = 0;
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (minutes === 0 && seconds === 0) {
    is_examover = true;
    return (countdown.innerHTML = `0:00`);
  }
}
