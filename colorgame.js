var numSquares = 6;
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
/*
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
*/
var modeButtons = document.querySelectorAll(".mode");

	//mode button event listener
for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		if(this.textContent === "Easy"){
			numSquares = 3;
		} else {
			numSquares = 6;
		}
		/*or
this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
*/	
	});
}


function reset(){
	colors =  generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//사라졌다가 다시 하거나 맞았을경우 효과//
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
}

/*
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display = "none";
	}
	h1.style.background = "steelblue";
}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
}
});
*/

resetButton.addEventListener("click", function(){
	reset();
	//generate all new colors
	colors =  generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;

	//사라졌다가 다시 하거나 맞았을경우 효과//
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
})


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	//add initial color to sqaure
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
	
	//grab color of clicked sqaure
	var clickedColor = this.style.background;

	//compare color to picked color
	if(clickedColor === pickedColor) {
		messageDisplay.textContent = "correct";
		resetButton.textContent = "play Again?" 
		chnageColors(clickedColor);
		h1.style.background = clickedColor;
		} else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}

//collor 가 맞았을 경우 전체 색이 같은색으로 바뀌는 값
function chnageColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

//random number effect = 색상의 값이 새로고칠떄 마다 바뀜
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors [random];
}

function generateRandomColors(num){
	//make an arry
	var arr =[]
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g +", "+ b +")";
}