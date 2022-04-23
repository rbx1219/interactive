function onLoad() {
    document.getElementById("Answer").addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            onClick();
            event.preventDefault();
        }
    })
}

function init() {
    initGameValues();
}

function initGameValues() {
    game.start = 1;
    game.end = 100;
    game.answer = generateRandomInt(1,101);
    game.count = 0;
    game.history = []
}

function generateRandomInt(min,max){
    return Math.floor((Math.random() * (max-min)) +min);
}

function onClick() {   
    const guess = document.getElementById("Answer").value;
    const history = game.history;

    game.count += 1;
    history.push(guess);
    adjustUI();
    document.getElementById("Answer").value = "";
    
}

function adjustUI(){
    const times = document.getElementById("time");
    const range = document.getElementById("range");
    
    judgeGuess(); 

    times.innerText = '猜的次數'+ game.count;
    range.innerText = '猜的範圍'+ game.start+"~"+game.end;
}

function judgeGuess() {
    const guess = parseInt(document.getElementById("Answer").value);
    const answer = game.answer;
    
    if (guess <= game.start || guess >= game.end){
        document.getElementById("prompt").innerHTML = "超出範圍囉"
        return;
    }

    if (answer > guess) {
        document.getElementById("prompt").innerHTML = "再高一點";
        game.start = guess;
    } else if (answer < guess) {
        document.getElementById("prompt").innerHTML = "再低一點";
        game.end = guess;
    } else {
        document.getElementById("prompt").innerHTML = "BINGO";
    }
}
function onHistory() {
    document.getElementById("prompt").innerHTML = "猜過的數字"+game.history;
    document.getElementById("prompt").style.fontSize = "35px";
}

window.game = {};
init();
window.onload = onLoad;