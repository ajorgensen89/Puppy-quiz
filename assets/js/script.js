/** Load DOM centent first and add event listeners to buttons */
document.addEventListener("DOMContentLoaded", function() {
let buttons = document.getElementsByTagName("button");
for (let button of buttons) {
    /**add event listener to all buttons in HTML. Listeners for button to be clicked and then
     * runs the code in this block
    */
button.addEventListener("click", function() {
    /**refers to specific data-type button that has been clicked */
if (this.getAttribute("data-type") === "submit") {
    alert("clicked submit");
} else {
    let gameType = this.getAttribute("data-type");
    alert(`You clicked ${gameType}`);
}
})
}
})

function runQuiz() {

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