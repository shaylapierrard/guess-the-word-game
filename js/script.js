const lettersGuessedArea = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingNumParagraph = document.querySelector(".remaining");
const remainingNumSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again"); 

const word = "magnolia";
const guessedLetters = [];


const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    const goodGuess = validateInput(guess);

if (goodGuess) {
    makeGuess (guess);
}
    letterInput.value = "";

});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
    message.innerText = "Please enter a letter!";
} else if (input.length > 1) {
    message.innerText = "Oops, one letter at a time!";
} else if (!input.match(acceptedLetter)) {
    message.innterText = "Oops, please enter a letter A to Z.";
} else {
    return input;
}
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.InnerText = "Oops, already used. Try again!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        guessUpdate();
        updateWordInProgress(guessedLetters);
    }
    };

    const guessUpdate = function () {
        lettersGuessedArea.innerHTML = "";
        for (const letter of guessedLetters) {
            const li = document.createElement ("li");
            li.innerText = letter;
            lettersGuessedArea.append(li);
        }
    }
const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
      if (guessedLetters.includes(letter)) {
        revealWord.push(letter.toUpperCase());
      } else {
        revealWord.push("●");
      }
    }
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
};

const checkIfWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">Congrats! You got it!</p>`;
    }
}
