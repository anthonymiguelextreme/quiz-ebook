// script.js
const questions = [
    {
        question: "Qual é seu nível atual de conhecimento sobre investimentos em ações?",
        answers: {
            a: "Iniciante",
            b: "Intermediário",
            c: "Avançado"
        },
        correctAnswer: "a"
    },
    {
        question: "Você já investe em ações atualmente?",
        answers: {
            a: "Sim",
            b: "Não"
        },
        correctAnswer: "b"
    },
    {
        question: "Qual é seu principal objetivo financeiro?",
        answers: {
            a: "Aposentadoria",
            b: "Renda extra",
            c: "Independência financeira"
        },
        correctAnswer: "c"
    },
    {
        question: "Quanto você está disposto a investir inicialmente?",
        answers: {
            a: "Menos de R$1.000",
            b: "R$1.000 - R$10.000",
            c: "Mais de R$10.000"
        },
        correctAnswer: "b"
    },
    {
        question: "Qual é sua maior preocupação ao investir em ações?",
        answers: {
            a: "Risco de perda",
            b: "Falta de conhecimento",
            c: "Volatilidade do mercado"
        },
        correctAnswer: "a"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <ul class="answers">
            ${Object.keys(question.answers).map(key => `
                <li>
                    <label>
                        <input type="radio" name="answer" value="${key}">
                        ${question.answers[key]}
                    </label>
                </li>
            `).join('')}
        </ul>
    `;
    document.getElementById('next-button').disabled = true;
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const resultTitle = document.getElementById('result-title');
    const resultText = document.getElementById('result-text');

    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    resultTitle.textContent = Você completou o quiz!;
    resultText.textContent = Sua pontuação: ${score} de ${questions.length}. Baseado nas suas respostas, recomendamos fortemente o eBook "Trilhando o Sucesso Financeiro" para alcançar seus objetivos de gerar R$1000 por mês em renda passiva.;

    // Aqui você pode adicionar um botão ou link para comprar o eBook
}

document.addEventListener('change', function(event) {
    if (event.target.name === 'answer') {
        document.getElementById('next-button').disabled = false;
    }
});

showQuestion(currentQuestionIndex);
