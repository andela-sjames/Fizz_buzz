function fizzBuzz(num) {
    if (num % 15 == 0) {
        return ('FizzBuzz');
    } else if (num % 3 == 0) {
        return ('Fizz');
    } else if (num % 5 == 0) {
        return ('Buzz');
    } else if (!isNaN(num)) {
        return (num);
    } else return ("Play game with only number");
}

function playGame() {
    var play = document.getElementById("play");
    play.addEventListener("click", function(){
        var text = document.getElementById("fbinput").value;
        var display = document.getElementById("result");
        var answer = fizzBuzz(text);
        display.innerHTML = answer;
    })
}

window.onload = function(){
    playGame();
}