const questionEl = document.getElementById('questions');
const inputEl = document.getElementById('input');
const formEl = document.getElementById('form');
const scoreEl = document.getElementById('score');


const num1 = Math.floor(Math.random() *10) +1;
const num2 = Math.floor(Math.random() *10) +1;
const correctAns = num1*num2;

let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`;
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
formEl.addEventListener('submit', () => {
    const userAns = +inputEl.value;
    if(correctAns === userAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage () {
    localStorage.setItem('score', JSON.stringify(score));
}

