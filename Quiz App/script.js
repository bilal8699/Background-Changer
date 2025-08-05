const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who wrote the national anthem of Pakistan?",
        answers: [
            { text: "Allama Iqbal", correct: false },
            { text: "Liaquat Ali Khan", correct: false },
            { text: "Hafeez Jullundhri", correct: true },
            { text: "Faiz Ahmed Faiz", correct: false }
        ]
    },
    {
        question: "Which is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Makalu", correct: false }
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Perth", correct: false }
        ]
    }
];

const questionElement = document.querySelector(".quiz-container p")
const answerButtons = document.querySelector(".quiz-container ul")
const nextButton = document.querySelector(".next-btn")

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text
        if (answer.correct) {
            button.dataset.correct = "true";
        }   
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", handleNext);

function handleNext() {
    if (nextButton.innerHTML === "Restart") {
        line1.style.display = "block";
        line2.style.display = "block";
        startQuiz();
        return;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }

}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored <strong>${score}</strong> out of <strong>${questions.length}</strong>!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";

    line1.style.display = "none";
    line2.style.display = "none";
}

startQuiz();