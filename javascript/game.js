var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];

var w = document.getElementById("win");
var l = document.getElementById("losses");
var gl = document.getElementById("guessesLeft");
var gm = document.getElementById("wrongAnswers");

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);;
    

    w.textContent = wins;
    l.textContent = losses;
    gl.textContent = guessesLeft;
    gm.textContent = guessesMade;

document.onkeyup = function(event) {
    var userGuess = event.key;
    
   

    if (userGuess === computerGuess) {
        wins+=1;
        alert("Well done! Reboot Page and Keep Going!");
        guessesLeft = 8;
        
    }

    else if (userGuess !== computerGuess) {
        guessesLeft--;
        console.log(userGuess);
        guessesMade.push(userGuess);
    }

    w.textContent = wins;
    l.textContent = losses;
    gl.textContent = guessesLeft;
    gm.textContent = guessesMade;
    if (guessesLeft < 1) {
        alert("Keep trying!");
        guessesLeft = 8;
        console.log(computerGuess);
    }
}

       
