/** Fixed score and question total value */
const MAX_SCORE = 10;
const MAX_QUESTIONS = 10;

let question = document.querySelector("#question");
let choice = Array.from(document.querySelectorAll(".choice-box"));
let progressName = document.querySelector("#progress-name");
let scoreTotal = document.querySelector('#score');
let progressBarFull = document.querySelector("#progress-full");

let actualQuestion = {};
let checkAnswer = true;
let score = 0;
let questionCount = 0;
let otherQuestions = [];


let numberOfQuestions = [{
        questionId: 0,
        question: "What is naughty Majors name in Paw Patrol who causes problems for the Paw Patrol gang?",
        choice1: "Major Goodway",
        choice2: "Major Humdinger",
        choice3: "Major Johnson",
        answers: 2,


    },
    {
        questionId: 1,
        question: "What name is given to the puppy who wears a blue police unifrom in Paw Patrol?",
        choice1: "Chase",
        choice2: "Rumble",
        choice3: "Tracker",
        answers: 1,


    },
    {
        questionId: 2,
        question: "What is the name of Major Goodways pet chicken?",
        choice1: "Wally",
        choice2: "Chickaletta",
        choice3: "Ryder",
        answers: 2,
    },
    {
        questionId: 3,
        question: "What name is given to the puppy who wears blue Pup Tag with a star on?",
        choice1: "Chase",
        choice2: "Rumble",
        choice3: "Tracker",
        answers: 1,
    },
    {
        questionId: 4,
        question: "Which Major is trying to rule Adventure City in Paw Patrol, The Movie?",
        choice1: "Major Johnson",
        choice2: "Major Humdinger",
        choice3: "Major Goodway",
        answers: 2,
    },
    {
        questionId: 5,
        question: "Which Pup can fly a Helocopter and wears a Pink Uniform?",
        choice1: "Everest",
        choice2: "Zuma",
        choice3: "Skye",
        answers: 3,
    }
];





function submission(event) {
    event.preventDefault();
    let nameStored = document.forms["id"]["name"].value;
    sessionStorage.setItem("name", nameStored);
    console.log("username log")
}