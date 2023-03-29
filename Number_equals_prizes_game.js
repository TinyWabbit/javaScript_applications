//Number = Prizes Game
let prize = prompt("Please type a number between zero and ten, then press ENTER");
prize = parseInt(prize);

let outputMessage1 = `Your selection: ${prize} -`;

switch(prize){
    case 0:
        console.log("Based on" + " " + outputMessage1  + " " + "YOU LOSE! Zero means zero after all!");
        break;
    case 1:
    case 2:
        console.log("Based on" + " " + outputMessage1  + " " + "You WIN!... a small prize - A mini Twix bar");
        break;
    case 3:
    case 5:
        console.log("Based on" + " " + outputMessage1  + " " + "YOU LOSE! Who on Earth chooses that boring number?!");
        break;
    case 4:
    case 6:
        console.log("Based on" + " " + outputMessage1  + " " + "YOU WIN!....My respect. No prizes on this occassion");
        break;
    case 7:
    case 8:
        console.log("Based on" + " " + outputMessage1  + " " + "YOU WIN..No wait! YOU LOSE, I think....? Do you? Yes, sorry YOU LOSE! Sorry for getting your hopes up.....loser");
        break;
    case 9:
        console.log("Based on" + " " + outputMessage1  + " " + "YOU WIN - WELL DONE - You've won the BIG PRIZE - A kiss from the person next to you and a cup of hot and delicious tea!");
        break;
    case 10:
        console.log("Based on" + " " + outputMessage1  + " " + "YOU LOSE! - Choosing 10 is just too predictable");
        break;
    default:
        console.log("That number doesn't seem to fit anywhere between zero and ten?! - Please try again");
}