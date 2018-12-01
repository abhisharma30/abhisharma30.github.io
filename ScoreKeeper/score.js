var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");

var limit = document.getElementById("limit");  // var limit = document.querySelector("p span");
var reset = document.getElementById("Reset");

var input = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;

var gameOver= false;
var winScore = 5;


// increasing player1 score on clicking button player two
player1.addEventListener("click",function(){
	if(!gameOver){                  // will increase the score until game over is true and will stop uodating score when socre = win score
	p1Score++;
  		if(p1Score === winScore){
  			gameOver = true;
  			score1.style.color = "green"; 
  		}
  		score1.innerHTML = p1Score; //display  the score pf player one
	}
});

// increasing player2 score on clicking button player two
player2.addEventListener("click",function(){
	if(!gameOver){
	p2Score++;
		if(p2Score === winScore){
			gameOver = true;
			score2.style.color = "green"; 
		}
score2.innerHTML = p2Score; //display  the score pf player two
	}
});


// to reset scores to 0
reset.addEventListener("click",function(){
startOver();
});

function startOver(){
p1Score = 0;    // set both score to zero because it we start again then it will start from the last number.
p2Score = 0;
score1.innerHTML = 0;
score2.innerHTML = 0;
score1.style.color = "black"; 
score2.style.color = "black"; 
gameOver = false;	
}


input.addEventListener("change",function(){
  	limit.innerHTML = Number(input.value);   // Number(input.value) because input.value will give string like  "6" and score is number
  	winScore = Number(input.value);          // Other option is not using the === above.
  	startOver();

}); 