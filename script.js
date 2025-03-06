//Selecting Elements

var inp=document.getElementById("inp")
var btn=document.getElementById("btn")
var guesscount=document.getElementById("guess")
var check=document.getElementById("check")
var cg=document.querySelector("h2")

//Generate random number
var g=3;

function checkthenumber(){
    var ran_num = Math.floor(Math.random() * 10) + 1;
    if (ran_num > 5) {
      ran_num+=-5;
    }
    if(inp.value==ran_num){
        check.style.color="green"
        check.textContent = "You are Right" ;
        alert("You Guessed it Right . Congratulation")
        
    }
    else{
        g--;
        if (g == 0) {
          alert("You loss .The random number is : " + ran_num);
        }
        check.style.color="red"
        check.textContent = "You are Wrong";
        guesscount.textContent="Available Guesses : "+g
        cg.style.color="red"
        cg.textContent=" Oops the random number is : "+ran_num
    }
}