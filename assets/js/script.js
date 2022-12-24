/** Load DOM centent first and add event listeners to buttons */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        /**add event listener to all buttons in HTML. Listeners for button to be clicked and then
         * runs the code in this block
         */
        button.addEventListener("click", function () {
            /**refers to specific data-type button that has been clicked
             */
            if (this.getAttribute("data-type") === "submit") {
                alert("clicked submit");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})
/**The main game which is be first loaded and then again
 * after the user answer is processed
*/
function runQuiz() {
    /**List of questions to run in game with question, answer, choice and isCorrect lists in array */
let numberOfQuestions = [{

        question: "What is naughty Majors name in Paw Patrol who causes problems for the Paw Patrol gang?",
        answers: [{
                choice: "Major Goodway",
                isCorrect: false
            },
            {
                choice: "Major Humdinger",
                isCorrect: true
            },
            {
                choice: "Major Johnson",
                isCorrect: false
            },
        ]

    },
    {

        question: "What name is given to the puppy who wears a blue police unifrom in Paw Patrol?",
        answers: [{
                choice: "Chase",
                isCorrect: true
            },
            {
                choice: "Rumble",
                isCorrect: false
            },
            {
                choice: "Tracker",
                isCorrect: false
            },
        ],

    },
    {

        question: "What is the name of Major Goodways pet chicken?",
        answers: [{
                choice: "Wally",
                isCorrect: false
            },
            {
                choice: "Chickaletta",
                isCorrect: true
            },
            {
                choice: "Ryder",
                isCorrect: false
            },
        ]

    },
    {

        question: "What name is given to the puppy who wears a blue police unifrom?",
        answers: [{
                choice: "Chase",
                isCorrect: true
            },
            {
                choice: "Rumble",
                isCorrect: false
            },
            {
                choice: "Tracker",
                isCorrect: false
            },
        ]

    },
    {
        question: "Where do the Paw Patrol pups live with Ryder?",
        answers: [{
                choice: "Tinsel Town",
                isCorrect: false
            },
            {
                choice: "Lands End",
                isCorrect: false
            },
            {
                choice: "Adventure Bay",
                isCorrect: true
            },
        ]

    }, {
        question: "What name is given to the puppy who wears a pink helicopter pilot uniform?",
        answers: [{
                choice: "Rocky",
                isCorrect: false
            },
            {
                choice: "Everest",
                isCorrect: false
            },
            {
                choice: "Sky",
                isCorrect: true
            },
        ]

    },
];



}

function checkAnswer() {

}

function calculateAnswer() {

}

function increaseScore() {

}

function increaseIncorrect() {

}

function displayAnswer1() {

}

function displayAnswer2() {

}

function displayAnswer3() {

}

function displayQuestion() {

}