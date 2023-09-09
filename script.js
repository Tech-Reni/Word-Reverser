// ***********************
// ******************************
// I KNOW THIS METHOD IS NOT THE BEST BUT I WANT YOU ALL TO SEE THE BEAUTY OF ARRAY IN THIS CODE 
// ******************************
// ***********************

var text = document.getElementById("text");
var btn = document.querySelector(".btn");
var result = document.querySelector(".result");


var textCont = []; //This stores the word or sentence
var currentWord = [] //This holds the last Word from the textCont array
var eachLetterCont = [] //This holds each letter
var reversedCont = [];

function Reverse() {
    if (text.value.length < 3) {
        result.innerHTML = "Sorry the word is too short";
    } else {
        textCont.push(text.value);
        currentWord.push(textCont[textCont.length - 1]);
    }
    var lastcurrent = currentWord[currentWord.length - 1];

    for (let i = 0; i < lastcurrent.length; i++) {
        var eachLetter = lastcurrent.substring(i, i + 1);
        eachLetterCont.push(eachLetter);
    }
    for (let j = eachLetterCont.length - 1; j > -1; j--) {
        var reversedWord = eachLetterCont[j];
        reversedCont.push(reversedWord);
    }
    result.innerHTML = reversedCont.join(" ");

    textCont = []; //This stores the word or sentence
    currentWord = [] //This holds the last Word from the textCont array
    eachLetterCont = [] //This holds each letter
    reversedCont = [];

}

btn.addEventListener("click", () => {
    Reverse();
});