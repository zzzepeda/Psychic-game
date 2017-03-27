//Computer Selects a Random Letter
var vowels = ["a", "e", "i", "o", "u"];
var RandomNumber = Math.round(Math.random() * 5);
var compVowel = vowels[RandomNumber];

//sets w/l to zero

var win = 0;
var loss = 0;


//user chooses vowel

document.onkeyup = function(event)

//compare computer guess with user guess



function checkGuess() {
    var guess = document.getElementById('guess');
}