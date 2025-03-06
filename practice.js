var prompt=require("prompt-sync")()
function letguess(guess){
    let ran=Math.floor(Math.random()*10/2)+1
    if(guess==ran){
        console.log("Correctly Guessed");
    }
    else{
        console.log("Guess is wrong the random num is: "+ran);
        
    }

}
console.log("Enter a number");

var guess=prompt()
letguess(guess);