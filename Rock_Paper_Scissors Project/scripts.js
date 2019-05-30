// Circle Divs
let playerCircle = document.getElementById('player');
let computerCircle = document.getElementById('computer');
let winloss = document.getElementById('winloss');
let turnCounter = 0;

// Color Array
const myArray = [
  "grey",
  "beige",
  "red"
];

// Gets Random Color from Array
function randomColor ()
{
  for (let i = 0; i < myArray.length; i++)
  {
    let random = myArray[Math.floor(Math.random() * myArray.length)];
    return random;
  }
}

// Buttons
let selectRock = document.getElementById('rock');
let selectPaper = document.getElementById('paper');
let selectScissors = document.getElementById('scissors');

selectRock.addEventListener('click', () => {
  playerCircle.style.backgroundColor = "grey";
  computerCircle.style.backgroundColor = randomColor();

  if (playerCircle.style.backgroundColor === "grey" && computerCircle.style.backgroundColor === "grey")
  {
    winloss.innerHTML = "<h2>You tied!</h2>";
  } else if (playerCircle.style.backgroundColor === "grey" && computerCircle.style.backgroundColor === "beige")
  {
    winloss.innerHTML = "<h2>You Lost!</h2>";
  } else if (playerCircle.style.backgroundColor === "grey" && computerCircle.style.backgroundColor === "red")
  {
    winloss.innerHTML = "<h2>You Won!</h2>";
  }

  turnCounter++;
});

selectPaper.addEventListener('click', () => {
  playerCircle.style.backgroundColor = "beige";
  computerCircle.style.backgroundColor = randomColor();

  if (playerCircle.style.backgroundColor === "beige" && computerCircle.style.backgroundColor === "beige")
  {
    winloss.innerHTML = "<h2>You tied!</h2>";
  } else if (playerCircle.style.backgroundColor === "beige" && computerCircle.style.backgroundColor === "red")
  {
    winloss.innerHTML = "<h2>You Lost!</h2>";
  } else if (playerCircle.style.backgroundColor === "beige" && computerCircle.style.backgroundColor === "grey")
  {
    winloss.innerHTML = "<h2>You Won!</h2>";
  }

  turnCounter++;
});

selectScissors.addEventListener('click', () => {
  playerCircle.style.backgroundColor = "red";
  computerCircle.style.backgroundColor = randomColor();

  if (playerCircle.style.backgroundColor === "red" && computerCircle.style.backgroundColor === "red")
  {
    winloss.innerHTML = "<h2>You tied!</h2>";
  } else if (playerCircle.style.backgroundColor === "red" && computerCircle.style.backgroundColor === "grey")
  {
    winloss.innerHTML = "<h2>You Lost!</h2>";
  } else if (playerCircle.style.backgroundColor === "red" && computerCircle.style.backgroundColor === "beige")
  {
    winloss.innerHTML = "<h2>You Won!</h2>";
  }

  turnCounter++;

  if (turnCounter > 3)
  {
    turnCounter = 0;
  }

  console.log(turnCounter);
});
