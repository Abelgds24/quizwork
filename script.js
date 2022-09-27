let quizData = [
    {
        question: "What is 6 + 2",
        a: "4",
        b: "8",
        c: "2",
        d: "10",
        correct: "b",

    },
    {
        question: "What is 80 / 4 ",
        a: "20",
        b: "40",
        c: "60",
        d: "80",
        correct: "a",
    },
    {question: "What is 10 to the 3rd power",
    a: "100",
    b: "10000",
    c: "1000",
    d: "2300",
    correct: "c",
},
{
    question: "What is 24 + 6(2)",
    a: "46",
    b: "36",
    c: "15",
    d: "25",
    correct: "b",
},
{
    question: "Find x  2x-1 = 0",
    a: "-1/2",
    b: "1/2",
    c: "2/2",
    d: "3/2",
    correct: "b",
},{
    question: "sin/cos = ",
    a: "cotangent",
    b: "-sin",
    c: "-cosine",
    d: "tangent",
    correct: "d",
},
];

const startButton = document.getElementById('start-btn')

const quiz= document.getElementById('quiz')

const answerEls = document.querySelectorAll('.answer')

const questionEl = document.getElementById('question')

const a_text = document.getElementById('a_answer')

const b_text = document.getElementById('b_answer')

const c_text = document.getElementById('c_answer')

const d_text = document.getElementById('d_answer')

const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0



loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
};
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
};
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       };
   
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = ` <h2>Your score is: ${score}</h2>
           `

           if (score > 4) {
            document.body.style.background = "Green"
            let title = document.getElementById('title').innerHTML = "Good Job!"

           };

           if (score > 3 && score < 4) {
            document.body.style.background = "Orange"
            let title = document.getElementById('title').innerHTML = "Not bad"

           };
            if (score < 2) {
                document.body.style.background = "red"
                let title = document.getElementById('title').innerHTML = "Game Over"
            };


       }
    }
})

function myButton() {
    location.reload();
};
