var numb = 6;
var color = generateRandomNumber(numb);

var square=document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numb=3;
	color = generateRandomNumber(numb);
	pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
     for (var i = 0;i<square.length; i++) {
     	if(color[i])
	square[i].style.background =color[i];
else
square[i].style.display="none";}

});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numb=6;
	color = generateRandomNumber(numb);
	pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
     for (var i = 0;i<square.length; i++) {
	square[i].style.background =color[i];
    square[i].style.display ="block";}

});



resetButton.addEventListener("click",function(){
    color = generateRandomNumber(numb);
    pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
    messageDisplay.textContent="";
    this.textContent="new color";
    for (var i = 0;i<square.length; i++) {
	square[i].style.background =color[i];}
	h1.style.backgroundColor ="steelblue";
});


colorDisplay.textContent=pickedColor;

for (var i = 0;i<square.length; i++) {
	square[i].style.background =color[i];

	square[i].addEventListener("click",function(){

		var clickedColor= this.style.background;

		if(clickedColor === pickedColor){
			messageDisplay.textContent ="correct!";
			resetButton.textContent = "play again?";
		    changeColor(clickedColor);
		    h1.style.backgroundColor = clickedColor;
            
		}
		else{
			this.style.background="#232323";
		messageDisplay.textContent="try again";
        }
	});
}

function changeColor(color) {
	for(var i=0; i<square.length ;i++)
		square[i].style.backgroundColor =color;
}

function pickColor(){
	var random=Math.floor(Math.random() * color.length);
	return color[random];
}

function generateRandomNumber(num){
	var arr=[];
    for(i=0;i<num;i++)
    	arr.push(randomColor());
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);

	return "rgb(" + r+", "+g+", "+b+")";
}