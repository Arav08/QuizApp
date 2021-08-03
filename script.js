const quizData = [
    {
        question: 'What is the biggest animal in the world?',
        a: 'Tiger shark',
        b: 'Killer whale',
        c: 'Blue whale',
        d: 'Hammerhead shark',
        correct: 'c'
    }, {
        question: 'Which planet is closest to the sun?',
        a: 'Venus',
        b: 'Earth',
        c: 'Moon',
        d: 'Mercury',
        correct: 'd'

    }, {
        question: 'What was the most used programming language in the year 2020?',
        a: 'Java',
        b: 'Javascript',
        c: 'Python',
        d: 'C++',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext markup language',
        b: 'Helicopters Terminals Motorboats Lamborginis',
        c: 'Cascading Style Sheet',
        d: 'Jason Object Notation',
        correct: 'a'
    }, {
        question: 'What year was Javascript launched?',
        a: '1994',
        b: '1996',
        c: '1993',
        d: '1995',
        correct: 'd'
    }
]

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();

    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
            currentQuestion++;
            if(currentQuestion < quizData.length){
                loadQuiz();
            } else {
                quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions</h2> 
                                  <button onClick="location.reload()">Reload</button>`
        }
    }
})