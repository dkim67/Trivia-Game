$(document).ready(function() {


function startGame() {
	beginGame = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Click to Ball Out!</a></p>";
	$(".box").html(beginGame);
}

startGame();


$("body").on("click", ".start-button", function(event){
	event.preventDefault();  
	
	display();

	timer();

}); 

$("body").on("click", ".answer", function(event){
	

	userPick = $(this).text();
	if(userPick === correctAnswers[questionCounter]) {
		alert("correct");

		clearInterval(shotClock);
		generateWin();
	}
	else {
		console.log("");
		clearInterval(shotClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	
	resetGame();
}); 

});  

function timeOutLoss() {
	unansweredScore++;
	gameHTML = "<p class='text-center timer-p'>Shot Clock: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".box").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateWin() {
	correctScore++;
	gameHTML = "<p class='text-center timer-p'>Shot Clock: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + "Nice!!!!";
	$(".box").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateLoss() {
	incorrectScore++;
	gameHTML = "<p class='text-center timer-p'>Shot Clock: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".box").html(gameHTML);
	setTimeout(wait, 4000); //  
}

function display() {
	gameHTML = "<p class='text-center timer-p'>Shot Clock: <span class='timer'>30</span></p><p class='text-center'>" + questionBank[questionCounter] + "</p><p class='first-answer answer'>A. " + answerBank[questionCounter][0] + "</p><p class='answer'>B. "+answerBank[questionCounter][1]+"</p><p class='answer'>C. "+answerBank[questionCounter][2]+"</p><p class='answer'>D. "+answerBank[questionCounter][3]+"</p>";
	$(".box").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	display();
	counter = 30;
	timer();
	}
	else {
		finalScreen();
	}
}

function timer() {
	shotClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(shotClock);
			timeOutLoss();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Shot Clock: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctScore + "</p>" + "<p>Wrong Answers: " + incorrectScore + "</p>" + "<p>Unanswered: " + unansweredScore + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".box").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctScore = 0;
	incorrectScore = 0;
	unansweredScore = 0;
	counter = 30;
	display();
	timer();
}

var beginGame;
var gameHTML;
var counter = 30;
var questionBank = ["Which NBA team has won the most championships?", "Which NBA player has the most championship rings?", "Which NBA player has the nickname: 'The Black Mamba'?", "Which is not an NBA team?", "What is the name of the Atlanta NBA team?", "How long is an official NBA regulation-size court?", "Which NBA coach has won championships with both Michael Jordan and Kobe Bryant?", "Who was the tallest player to ever play in the NBA?"];
var answerBank = [["Boston Celtics", "Chicago Bulls", "Los Angeles Lakers", "Golden State Warriors"], ["Lebron James", "Bill Russel", "Kobe Bryant", "Michael Jordan"], ["James Harden", "Russel Westbrook", "Kobe Bryant", "Kevin Durant"], ["Lakers", "Nets", "Eagles", "Mavericks"], ["Falcons", "Eagles", "Bluejays", "Hawks"], ["94 feet", "100 feet", "120 feet", "90 feet"], ["Todd Crenshaw", "Phil Jackson", "Pete Caroll", "Michael Jackson"], ["Shaquille O'Neal", "Manute Bol", "Yao Ming", "Gheorghe Muresan"]];
var imageBank = [];
var correctAnswers = ["A. Boston Celtics", "B. Bill Russel", "C. Kobe Bryant", "C. Eagles", "D. Hawks", "A. 94 feet", "B. Phil Jackson", "D. Gheorghe Muresan"];
var questionCounter = 0;
var selecterAnswer;
var shotClock;
var correctScore = 0;
var incorrectScore = 0;
var unansweredScore = 0;

