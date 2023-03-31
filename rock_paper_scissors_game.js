// Rock, Paper, Scissors Game

let items = ["rock", "paper", "scissors"];

let userNumber = prompt("Let's play a Game! -- Please enter either `Rock`, `Paper` or `Scissors` and then press enter").toLowerCase();
 
if (userNumber == "rock" ){
    userNumber = 0;
} else if(userNumber == "paper"){
    userNumber = 1;
} else if(userNumber == "scissors"){
    userNumber = 2;
}

let computerNumber = Math.random();
computerNumber = computerNumber * 3;
computerNumber = Math.floor(computerNumber);

let arrayValue1 ;
let arrayValue2 ;

if(userNumber == 0){
    arrayValue1 = items[0]
} else if(userNumber == 1){
    arrayValue1 = items[1];
} else if(userNumber == 2){
    arrayValue1 = items[2];
}

if(computerNumber == 0){
    arrayValue2 = items[0];
} else if(computerNumber == 1){
    arrayValue2 = items[1];
} else if(computerNumber == 2){
    arrayValue2 = items[2];
}

let message1 = `Your choice was ${arrayValue1} and the computer chose ${arrayValue2}`;
console.log(message1);

let message2 = "You WIN!!!";
let message3 = "You LOSE!";
let message4 = "It's a DRAW";

switch(true){
    case arrayValue1 == arrayValue2:
        console.log(message4);
        break;
    case arrayValue1 == "rock" && arrayValue2 == "paper":
        console.log(message3);
        break;
    case arrayValue1 == "rock" && arrayValue2 == "scissors":
        console.log(message2);
        break;
    case arrayValue1 == "paper" && arrayValue2 == "rock":
        console.log(message2);
        break;
    case arrayValue1 == "paper" && arrayValue2 == "scissors":
        console.log(message3);
        break;
    case arrayValue1 == "scissors" && arrayValue2 == "rock":
        console.log(message3);
        break;
    case arrayValue1 == "scissors" && arrayValue2 == "paper":
        console.log(message2);
        break;
}