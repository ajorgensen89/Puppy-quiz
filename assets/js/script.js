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
                alert(`${gameType}`);
                runQuiz(gameType);
            }
        })
    }
    runQuiz("easy");
})
/**The main game which is be first loaded and then again
 * after the user answer is processed
 */
    /**List of questions to run in game with question, answer, choice and isCorrect lists in array */
    let numberOfQuestions = [{
        /**0 */
        qu: "What is naughty Majors name in Paw Patrol who causes problems for the Paw Patrol gang?",
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
        /**1 */
        qu: "What name is given to the puppy who wears a blue police unifrom in Paw Patrol?",
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
        /**2 */
        qu: "What is the name of Major Goodways pet chicken?",
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
        /**3 */
        qu: "What name is given to the puppy who wears a blue police unifrom?",
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
        /**4 */
        qu: "Where do the Paw Patrol pups live with Ryder?",
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
        /**5 */
        qu: "What name is given to the puppy who wears a pink helicopter pilot uniform?",
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

function runQuiz(gameType) {
if (gameType === "easy") {
    displayEasy();
} else {
    alert("wrong game");
}

if (gameType === "medium") {
displayMedium();
} if (gameType === "hard"); {
displayHard();
}
};

function displayQuestion() {
    /** Get id of question form HTML to place text */
    let question = document.getElementById("question");

    question.textContent = numberOfQuestions[0].qu;
    console.log(numberOfQuestions[0].qu);
}

function displayAnswer1() {
    /**Getting my answer 1 box */
    let answer1 = document.getElementById("answer1");
    console.log("2");
    /** getting innertext of my answer choices from my answer arrays */
    answer1.textContent = numberOfQuestions[qu].answers[0].choice;
    /** idenifying the correct option from the answer in the array */
    answer1.value = numberOfQuestions[qu].answers[0].isCorrect;
    console.log("3");
    /** Add event listeners to the 3 answers */
    let confirmed = "";
    answer1.addEventListener("click", () => {
        answer1.style.backgroundColor = "green";
        answer2.style.backgroundColor = "red";
        answer3.style.backgroundColor = "red";
        confirmed = answer1.value;
    });
    console.log("4");
    /**get html element check from html */
    let check = document.getElementsByClassName("check");

    /**comfirm the view of correct or incorrect choices for user */
    check[0].addEventListener("click", () => {
        if (confirmed === "green") {
            isCorrect = true;
            outcome[0].textContent = "True";
            outcome[0].style.color = "green";
        } else(confirmed === "red"); {
            isCorrect = false;
            outcome[0].textContent = "False";
            outcome[0].style.color = "red";
        }
    })
}
function displayAnswer2() {
    /**Getting my answer 2 box */
    let answer2 = document.getElementById("answer2");
    console.log("2.2");
    /** getting innertext of my answer choices from my answer arrays */
    answer2.textContent = numberOfQuestions[qu].answers[1].choice;
    /** idenifying the correct option from the answer in the array */
    answer2.value = numberOfQuestions[qu].answers[1].isCorrect;
    console.log("3.2");
    /** Add event listeners to the 3 answers */
    let confirmed = "";
    answer2.addEventListener("click", () => {
        answer1.style.backgroundColor = "red";
        answer2.style.backgroundColor = "green";
        answer3.style.backgroundColor = "red";
        confirmed = answer2.value;
    });
  
    console.log("4");
    /**get html element check from html */
    let check = document.getElementsByClassName("check");

    /**comfirm the view of correct or incorrect choices for user */
    check[0].addEventListener("click", () => {
        if (confirmed === "green") {
            isCorrect = true;
            outcome[0].textContent = "True";
            outcome[0].style.color = "green";
        } else(confirmed === "red"); {
            isCorrect = false;
            outcome[0].textContent = "False";
            outcome[0].style.color = "red";
        }
    })
}
function displayAnswer3() {
    /**Getting my answer 3 box */
    let answer3 = document.getElementById("answer3");
    console.log("2.3");
    /** getting innertext of my answer choices from my answer arrays */
    answer3.textContent = numberOfQuestions[qu].answers[2].choice;
    /** idenifying the correct option from the answer in the array */
    answer3.value = numberOfQuestions[qu].answers[2].isCorrect;
    console.log("3.3");
    /** Add event listeners to the 3 answers */
    let confirmed = "";
    answer3.addEventListener("click", () => {
        answer1.style.backgroundColor = "red";
        answer2.style.backgroundColor = "red";
        answer3.style.backgroundColor = "green";
        confirmed = answer3.value;
    });
    console.log("4");
    /**get html element check from html */
    let check = document.getElementsByClassName("check");

    /**comfirm the view of correct or incorrect choices for user */
    check[0].addEventListener("click", () => {
        if (confirmed === "green") {
            isCorrect = true;
            outcome[0].textContent = "True";
            outcome[0].style.color = "green";
        } else(confirmed === "red"); {
            isCorrect = false;
            outcome[0].textContent = "False";
            outcome[0].style.color = "red";
        }
    })
}

function calculateAnswer() {

}

function increaseScore() {

}

function increaseIncorrect() {

}

function displayEasy() {
for (numberOfQuestions = 0; numberOfQuestions < 2; numberOfQuestions++);
console.log("yesE");
}

function displayMedium() {
for (numberOfQuestions = 0; numberOfQuestions < 4; numberOfQuestions++);
console.log("yesM");
}

function displayHard() {
for (numberOfQuestions = 0; numberOfQuestions < 7; numberOfQuestions++);
console.log("yesH");
}