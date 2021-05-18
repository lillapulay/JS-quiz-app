const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
//console.log(choices);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    //console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign('/end.html'); /* If no questions left, goes to end page */
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number']; 
        choice.innerText = currentQuestion['choice' + number]
    });

    availableQuestions.splice(questionIndex, 1); /* Takes the current question out of the array */
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        
        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        /* const classToApply = 'incorrect';
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct';
        } */

        const classToApply = 
        selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        //console.log(classToApply);

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        //console.log(selectedAnswer == currentQuestion.answer); /* Data type isn't the same, so === fails */
        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);        
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();