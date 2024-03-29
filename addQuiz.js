let questionCount = 0;


function addQuestion() {
    // Get values from input fields
    const questionInput = document.getElementById('question').value.trim();
    const option1Input = document.getElementById('option1').value.trim();
    const option2Input = document.getElementById('option2').value.trim();
    const option3Input = document.getElementById('option3').value.trim();
    const option4Input = document.getElementById('option4').value.trim();
    const correctAnswerSelect = document.getElementById("correctAnswer${questionCount}");
    const correctAnswerValue = correctAnswerSelect.options[correctAnswerSelect.selectedIndex].text.trim();

    // Check if any of the input fields are empty
    if (questionInput === '' || option1Input === '' || option2Input === '' || option3Input === '' || option4Input === '' || correctAnswerValue === '') {
        alert('Please fill in all fields before adding the question.');
        return; // Exit the function if any field is empty
    }

    questionCount++;

    const questionsContainer = document.getElementById('questionsContainer');

    const questionData = {
        questionNumber: questionCount,
        question: questionInput,
        option1: option1Input,
        option2: option2Input,
        option3: option3Input,
        option4: option4Input,
        correctAnswer: correctAnswerValue
    };

    // Convert object to JSON string
    const jsonData = JSON.stringify(questionData);

    // Create a Blob containing the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a link element for downloading the JSON file
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `question_${questionCount}.json`;
    downloadLink.textContent = `Download Question ${questionCount} JSON`;

    // Append the download link to the questions container
    questionsContainer.appendChild(downloadLink);
}

// function addQuestion() {
//     questionCount++;

//     const questionsContainer = document.getElementById('questionsContainer');
//     const correctAnswerSelect = document.getElementById("correctAnswer${questionCount}");
//     //     // console.log("Options count:", correctAnswerSelect.options.length);
//     // // console.log("Selected index:", correctAnswerSelect.selectedIndex);
//     // console.log("Selected index:", correctAnswerSelect);
    
//     const correctAnswerValue = correctAnswerSelect.options[correctAnswerSelect.selectedIndex].text;
    
//     const questionData = {
//         questionNumber: questionCount,
//         question: document.getElementById('question').value,
//         option1: document.getElementById('option1').value,
//         option2: document.getElementById('option2').value,
//         option3: document.getElementById('option3').value,
//         option4: document.getElementById('option4').value,
//         correctAnswer: correctAnswerValue
//     };

//     // Convert object to JSON string
//     const jsonData = JSON.stringify(questionData);

//     // Create a Blob containing the JSON data
//     const blob = new Blob([jsonData], { type: 'application/json' });

//     // Create a URL for the Blob
//     const url = URL.createObjectURL(blob);

//     // Create a link element for downloading the JSON file
//     const downloadLink = document.createElement('a');
//     downloadLink.href = url;
//     downloadLink.download = `question_${questionCount}.json`;
//     downloadLink.textContent = `Download Question ${questionCount} JSON`;

//     // Append the download link to the questions container
//     questionsContainer.appendChild(downloadLink);
// }

// function addQuestion() {
//     questionCount++;

//     const questionsContainer = document.getElementById('questionsContainer');
//     const correctAnswerSelect = document.getElementById("correctAnswer${questionCount}");
//     // console.log("Options count:", correctAnswerSelect.options.length);
// // console.log("Selected index:", correctAnswerSelect.selectedIndex);
// console.log("Selected index:", correctAnswerSelect);

//     const correctAnswerValue = correctAnswerSelect.options[correctAnswerSelect.selectedIndex].text;

//     const questionDiv = document.createElement('div');
//     questionDiv.classList.add('question');
//     questionDiv.innerHTML = `
//         <h3>Question ${questionCount}:</h3>
//         <p>Question: ${document.getElementById('question').value}</p>
//         <p>Option 1: ${document.getElementById('option1').value}</p>
//         <p>Option 2: ${document.getElementById('option2').value}</p>
//         <p>Option 3: ${document.getElementById('option3').value}</p>
//         <p>Option 4: ${document.getElementById('option4').value}</p>
//         <p>Correct Answer: ${correctAnswerValue}</p>
//     `;

//     questionsContainer.appendChild(questionDiv);
// }

const quizForm = document.getElementById('quizForm');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Form submission prevented.');
    
    const options = [];
    for (let i = 1; i <= 4; i++) {
        const option = document.getElementById(`option${i}`).value.trim();
        if (!option) {
            alert(`Option ${i} cannot be empty.`);
            return;
        }
        if (options.includes(option)) {
            alert(`Option ${i} already exists.`);
            return;
        }
        options.push(option);
    }
    
    // Proceed with form submission if all options are unique
    console.log('Form submitted!');
    quizForm.submit();
});