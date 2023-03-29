// 8-Ball Random Number Generator
let randomNumber = Math.random();
randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

const userInput = "will Rich get a new job in the next 2 months?";
let userName = prompt("Please enter your name:");
let yes = "yes".toLowerCase();
let no = "no".toLowerCase();

let userReturn = prompt(`Hi ${userName}, would you like to know, ${userInput}?`);

if(userReturn == yes){
    console.log("Great let's ask the Magic 8-Ball...");
}
else{
    console.log("OK, well I'll just sit here and twiddle my thumbs on my own then!");
}

if(userReturn == yes ){
    switch(randomNumber){
    case 0:
        console.log("It feels very likely to be the case...");
        break;
    case 1:
        console.log("It seems unlikely I'm afraid...");
        break;
    case 2:
        console.log("I wouldn't rule it out!");
        break;
    case 3:
        console.log("It's 50:50");
        break;
    case 4:
        console.log("Wot!? with his coding skills? Don't make me laugh!");
        break;
    case 5:
        console.log("Of course he will! Rich is a world renowned genius!");
        break;
    default:
        console.log("The Bee ate the Honey, Bad Bee!");
}
}