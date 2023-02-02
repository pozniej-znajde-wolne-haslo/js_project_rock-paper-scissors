// How many rounds?
const roundsNo = document.getElementById("roundsNo");

// Scores & Rounds-count
const roundWinner = document.getElementById("roundWinner");
const gameWinner = document.getElementById("gameWinner");
const roundsCount = document.getElementById("roundsCount");
const playerScoreOutput = document.getElementById("playerScoreOutput");
const compScoreOutput = document.getElementById("compScoreOutput");
// Game-btns FORM for PLAYER game decision
const playerGameChoices = document.getElementById("playerGameChoices");

// so (wie unten) muss ich nicht jeden input ins js holen, nur die form/
// mit '(e)' & TARGET+(value,id..) greife ich auf einzelne inputs zu(z.B.'target.value' / 'target.id')
let howManyRounds; //to store the chosen value (number of rounds)
roundsNo.addEventListener('change', (e) => {
  howManyRounds = parseInt(e.target.value); // parseInt for conversion of the html-value im a number!!
  console.log(howManyRounds);
})

let roundsPlayed = 0; // needs to be global, when inside the function - counting stagnates at '1'!!!
 // variables for SCORES / need to be global too (otherwise the score gets resetted each round!!)
let scoreComp = 0;
let scorePlayer = 0;

const playGame = (playerInput) => {

  // ARRAY for random game-choice by comp
  const compChoicesArray = ["rock", "paper", "scissors"];
  // Math.random method - to randomise comp game behaviour / plus 'floor' - rounding down to nearest integer
  let compChoice = compChoicesArray[Math.floor(Math.random()*compChoicesArray.length)];
  console.log(compChoice);

  // btn chosen - value im html als onclick fn parameter.. hier als plaerInput als parameter / und dann variable, die das speichert..
  let playerChoice = playerInput;
  console.log(playerChoice);

  if (howManyRounds != undefined) {

    if ((compChoice === "rock" && playerChoice === "scissors") || 
        (compChoice === "paper" && playerChoice === "rock") || 
        (compChoice === "scissors" && playerChoice === "paper")) {
      scoreComp++;
      roundsPlayed++;
      roundWinner.innerHTML = "Computer wins";
  
    } else if ((compChoice === "scissors" && playerChoice === "rock") || 
              (compChoice === "rock" && playerChoice === "paper") || 
              (compChoice === "paper" && playerChoice === "scissors")) {
        scorePlayer++;
        roundsPlayed++;
        roundWinner.innerHTML = "You win!";
    
    } else if  ((compChoice === "rock" && playerChoice === "rock") || 
                (compChoice === "paper" && playerChoice === "paper") || (compChoice === "scissors" && playerChoice === "scissors")) {
        roundWinner.innerHTML = "Draw. Round doesn't count.";
    }

    //this statement has to be embedded here, otherwise the rounds-count geht eine zahl drüber bevor GAME OVER kommt !!!
    if (roundsPlayed === howManyRounds) {
      playerGameChoices.style.display = "none";

      if (scorePlayer > scoreComp) {
          gameWinner.innerHTML = `<h2>GAME OVER</h2> <p>You seem to be a true mind-reader. You won the game!</p>`;
      } else if (scorePlayer < scoreComp) {
        gameWinner.innerHTML = `<h2>GAME OVER</h2> <p>Computer won this time.. Wanna have another go?</p>`;
      } else {
        gameWinner.innerHTML = `<h2>GAME OVER</h2> <p>Draw. No winner this time. Another game another chance?</p>`;
      }
    }

    compScoreOutput.innerHTML = scoreComp;
    playerScoreOutput.innerHTML = scorePlayer; 
    roundsCount.innerHTML = `<h3>Rounds: ${roundsPlayed} / ${howManyRounds}</h3>`;

    // dieses ELSE gehört zu allerersten IF / 'if (howManyRounds != undefined)'
  } else {
    window.alert("Choose the number of rounds!")
  }
}



/* fragen sven:

- onclick bei btns - haben value als string drinne (statt value des buttons abzurufen nachher) - wie geht das? ist das dann quasi wie value???
warum kann ich nicht über form die calue btn abrufen? oder über class X bei btn und dann deren value..
*/

//warum bei if in klammern muss === stehen und es mit 0 nicht funktioniert
//deswegen habe ich imer verloren und der count ging nicht????


/* const x = document.querySelector(".x")
why can't i get the vakue of btns thru either class given to btns/ or id to the parent-form??? */
/* rockBtn.addEventListener('click', calculateGameOutcome);
paperBtn.addEventListener('click', calculateGameOutcome);
scissorsBtn.addEventListener('click', calculateGameOutcome); */



/* const fiveRounds = document.getElementById("fiveRounds");
const tenRounds = document.getElementById("tenRounds");
const fifteenRounds = document.getElementById("twentyRounds");
const twentyRounds = document.getElementById("twentyRounds"); */

/*
// Rock- Paper - Scissors-Btns
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn"); */



// sinnloses probieren???
/*  let pointsCalculationComp;
  let pointsCalculationPlayer; */
/*  if (howManyRounds === 5) {
    pointsCalculationComp = Number(pointForComp) + Number(pointForComp) + Number(pointForComp) + Number(pointForComp) + Number(pointForComp);
    pointsCalculationPlayer = Number(pointForPlayer) + Number(pointForPlayer) + Number(pointForPlayer) + Number(pointForPlayer) + Number(pointForPlayer);
  } else if (howManyRounds === 15) {
    pointsCalculationComp = Number(pointForComp) + Number(pointForComp) + Number(pointForComp) + Number(pointForComp) + Number(pointForComp);
    pointsCalculationPlayer = Number(pointForPlayer) + Number(pointForPlayer) + Number(pointForPlayer) + Number(pointForPlayer) + Number(pointForPlayer);
  } else {
    pointsCalculationComp = Number(pointForComp) + Number(pointForComp) + Number(pointForComp) + Number(pointForComp) + Number(pointForComp);
    pointsCalculationPlayer = Number(pointForPlayer) + Number(pointForPlayer) + Number(pointForPlayer) + Number(pointForPlayer) + Number(pointForPlayer);
  } */















