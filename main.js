
// generating random number 
function randomNumber(){
    var num = Math.floor((Math.random() * 6) + 1);
    
    return num;
}
// winner

function winner( num1 , num2){
    if(num1 > num2){
        document.getElementById("result").innerHTML="Player 1 is the winner";
    }
    else if(num1 < num2){
        
        document.getElementById("result").innerHTML="Player 2 is the winner";
        
    }
    else{
        
        document.getElementById("result").innerHTML="It's a draw";
    }

}



// throwing the dice 
function shuffel(){
    
    var dicenum1 = randomNumber();
    var dicenum2 = randomNumber();
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var dice1_img = "images/dice" + dicenum1 + ".png";
    var dice2_img = "images/dice" + dicenum2 + ".png";
    dice1.setAttribute("src" ,dice1_img );
    dice2.setAttribute("src" ,dice2_img );
    winner(dicenum1 , dicenum2);


}

