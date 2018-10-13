var guessesCount = document.getElementById('guesses')
var lossesCount = document.getElementById('losses')
var winsCount = document.getElementById('winscount') 

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 10; 
var guessesSoFar = []; // array to push user choices to 
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
winsCount.innerHTML = wins; 
lossesCount.innerHTML = losses; 
guessesCount.innerHTML = guesses; 


console.log('computerChoice: ', computerChoice)  



// When the user presses a key, it will run the following function... 
document.onkeypress = function(event) {
var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess 
guessesCount.innerHTML = --guesses 
// console.log(userGuess)
guessesSoFar.push(userGuess); //pushing user guess to guesses so far 
guessesCount.innerHTML = guessesSoFar;
// console.log(guessesSoFar)
if (userGuess === computerChoice) {
    wins++; 
    winsCount.innerHTML = wins;
    winCount.text = (wins);
    guesses--  //reseting the guesses back to 9 so that the user can play again
    guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
    alert('Way to go! You\'ve guesesed corrrectly. You Won!');
}
else if (guesses == 0){
    guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
    alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
} 
else if (userGuess !== computerChoice) {
    losses++;  
    lossesCount.innerHTML = losses; 
    lossesCount.text = (losses);
    guesses-- 
    guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
    alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
}
} 

    
   
  
    


 

 












   
    
    
    


    

  
      
    
   
   
   
    
    


