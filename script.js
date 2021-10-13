let btnNewGame = document.getElementById('newGame');
let btnHold = document.getElementById('hold');
let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let dice3 = document.getElementById('dice3');
let dice4 = document.getElementById('dice4');
let dice5 = document.getElementById('dice5');
let dice6 = document.getElementById('dice6');
let indicatorPlay1 = document.getElementById('indicatorPlay1')
let indicatorPlay2 = document.getElementById('indicatorPlay2')
let currentPlayer = 1 ;
let playerBackground = document.getElementsByTagName('body')

//lancer du dé
let btnRollDice = document.getElementById('rollDice');
let dice = "" ;
let randomNum = (min, max) => Math.floor(Math.random() * (max - min +1)) + min;
let roll =() => {
  dice = randomNum(1,6);
  diceHide()
  diceDisplay()
  currentScoreUpdate()
  document.getElementById('hold').style.visibility = "visible";
}

//cacher tous le dé
diceHide = () => {
  if (dice1.style.display === 'block') {
   dice1.style.display  = 'none';      
  } 
  if (dice2.style.display === 'block') {
   dice2.style.display  = 'none';      
  }
  if (dice3.style.display === 'block') {
   dice3.style.display  = 'none';      
  } 
  if (dice4.style.display === 'block') {
   dice4.style.display  = 'none';      
  }
   if (dice5.style.display === 'block') {
   dice5.style.display  = 'none';      
  } 
  if (dice6.style.display === 'block') {
   dice6.style.display  = 'none';      
  }      
}

//Afficher le dé
let diceDisplay = () => {
  switch (dice) {
    case 1 :
    dice1.style.display  = 'block';
    break;
    case 2 :
    dice2.style.display  = 'block';
    break;
    case 3 :
    dice3.style.display  = 'block';
    break;
    case 4 :
    dice4.style.display  = 'block';
    break;
    case 5 :
    dice5.style.display  = 'block';
    break;
    case 6 :
    dice6.style.display  = 'block';
    break;
  }
}

//Current score
let score1Current = document.getElementById('score1').innerText;
let score2Current = document.getElementById('score2').innerText;
let currentScoreUpdate = () => {
  switch (currentPlayer) {
      case 1 :
      indicatorPlay1.style.display  = 'block';
      indicatorPlay2.style.display  = 'none';
      score1Current = parseInt(score1Current) + dice;
      console.log(score1Current);
      $("#score1").text(score1Current); 
      break;
      case 2 :
      indicatorPlay1.style.display  = 'none';
      indicatorPlay2.style.display  = 'block';
      score2Current = parseInt(score2Current) + dice;
      console.log(score2Current);
      $("#score2").text(score2Current);
      break;
  }  
}

//global score
let score1Global = document.getElementById('score1Global').innerText;
let score2Global = document.getElementById('score2Global').innerText;
let globalScoreUpdate = () => {
  switch (currentPlayer) {
      case 1 :
      score1Global = parseInt(score1Global) + parseInt(score1Current);
      console.log(score1Global);
      $("#score1Global").text(score1Global);
      currentPlayer = 2
      score1Current = 0
      $("#score1").text(score1Current);
      indicatorPlay1.style.display  = 'none';
      indicatorPlay2.style.display  = 'block';
      document.body.style.background="linear-gradient(90deg, white 50%, lightGrey 50%)";     
      break;
      case 2 :
      score2Global = parseInt(score2Global) + parseInt(score2Current);
      console.log(score1Global);
      $("#score2Global").text(score2Global); 
      currentPlayer = 1
      score2Current = 0
      $("#score2").text(score2Current);
      indicatorPlay1.style.display  = 'block';
      indicatorPlay2.style.display  = 'none';
      document.body.style.background="linear-gradient(90deg, lightGrey 50%, white 50%)";
      break;
  }

  
}

//newGame
let newGame = () => {
  diceHide()
  score1Current = 0
  score2Current = 0
  $("#score1").text(0)
  $("#score2").text(0)
  score1Global = 0
  score1Global = 0
  $("#score1Global").text(0)
  $("#score2Global").text(0)
  indicatorPlay1.style.display  = 'block';
  indicatorPlay2.style.display  = 'none';
  document.body.style.background="linear-gradient(90deg, lightGrey 50%, white 50%)";
  document.getElementById('rollDice').style.visibility = "visible";
  document.getElementById('hold').style.visibility = "hidden";
}


//events
btnRollDice.addEventListener('click', roll);
btnHold.addEventListener('click',globalScoreUpdate)
btnNewGame.addEventListener('click',newGame)