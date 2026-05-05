const questions = [
    {
        question: "What is HTML?",
        answers: ["Programming Language", "Markup Language", "Database", "OS"],
        correct: 1
    },
    {
        question: "What is CSS used for?",
        answers: ["Styling", "Logic", "Database", "Server"],
        correct: 0
    }
];

let currentQ = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    let q = questions[currentQ];
    questionEl.innerText = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach((ans, index) => {
        let btn = document.createElement("button");
        btn.innerText = ans;
        btn.classList.add("answer-btn");

        btn.onclick = () => {
            if(index === q.correct) score++;
        };

        answersEl.appendChild(btn);
    });
}

nextBtn.onclick = () => {
    currentQ++;
    if(currentQ < questions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "Your Score: " + score;
        answersEl.innerHTML = "";
        nextBtn.style.display = "none";
    }
};

loadQuestion();
