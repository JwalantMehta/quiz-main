let questionCount = 0;

function addQuestion() {
    questionCount++;

    const questionsContainer = document.getElementById('questionsContainer');
    const correctAnswerSelect = document.getElementById("correctAnswer${questionCount}");
    // console.log("Options count:", correctAnswerSelect.options.length);
// console.log("Selected index:", correctAnswerSelect.selectedIndex);
console.log("Selected index:", correctAnswerSelect);

    const correctAnswerValue = correctAnswerSelect.options[correctAnswerSelect.selectedIndex].text;

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `
        <h3>Question ${questionCount}:</h3>
        <p>Question: ${document.getElementById('question').value}</p>
        <p>Option 1: ${document.getElementById('option1').value}</p>
        <p>Option 2: ${document.getElementById('option2').value}</p>
        <p>Option 3: ${document.getElementById('option3').value}</p>
        <p>Option 4: ${document.getElementById('option4').value}</p>
        <p>Correct Answer: ${correctAnswerValue}</p>
    `;

    questionsContainer.appendChild(questionDiv);
}

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