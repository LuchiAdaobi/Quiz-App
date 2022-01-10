

const quizData = [
    {
        question: 'What is the capital of indonesia?',
        a: ' Britain',
        b: ' Sweden',
        c: ' Jakarta',
        d: ' Tokyo',
        e: ' Surabaya',
        correct: 'c'
    },
    {
        question: 'Who is the world\'s first programmer?',
        a: ' Ada Lovelace',
        b: ' Albert Einstein',
        c: ' Charles Babbage',
        d: ' Alan Turing',
        e: ' Isaac Newton',
        correct: 'a'
    },
    {
        question: 'In what country is Africa?',
        a: ' South Africa',
        b: ' Kenya',
        c: ' Nigeria',
        d: ' Africa is not a country',
        e: ' Ghana',
        correct: 'd'
    },
    {
        question: 'Which country invented Cars?',
        a: ' England',
        b: ' Germany',
        c: ' USA',
        d: ' Japan',
        e: ' China',
        correct: 'b'
    },
    {
        question: 'What does SASS stand for?',
        a: ' Software as a Service',
        b: ' Single Action Shooting Society',
        c: ' Syntactically Awesome Stylesheets',
        d: ' Short Attention Span Syndrome',
        e: ' Stay Awesome Stay Sassy',
        correct: 'c'
    }
]

const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const e_text = document.getElementById('e-text');
const submitBtn = document.getElementById('submit');
let question = document.getElementById('question');



let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;

}



function getSelected(){
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
           answer = answerEl.id;
        }
    });

    return answer;   
}


 function deselectAnswers(){
     answerEls.forEach(answerEl => {
         answerEl.checked = false;
     });

 }

submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz()
    // currentQuiz++;
    }else{
        document.querySelector('.quiz-container').innerHTML=
        `<h2>You answered ${score}/${quizData.length} questions correctly. </h2> 
        
        <button onClick='location.reload()'> Reload </button>`;

        console.log(button)
    }
    }

    
    
})

