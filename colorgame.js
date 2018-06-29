alert("connected");
var colors= generateRandomColors(6);
var colorsDisplay=document.getElementById("colorDisplay");
var pickedColor=pickColor(); // getting a random color
var message= document.getElementById("message");
var reset= document.getElementById("reset")
var easybtn= document.getElementById("btneasy");
var hardbtn= document.getElementById("btnhard");
var h1= document.querySelector("h1");
colorsDisplay.textContent=pickedColor;

easybtn.addEventListener("click",function(){
hardbtn.classList.remove("selected");
easybtn.classList.add("selected");
colors= generateRandomColors(3);
pickedColor=pickColor();
colorsDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
if(colors[i]){
    squares[i].style.backgroundColor=colors[i];
}
else{
    squares[i].style.display="none";
}

}
});


hardbtn.addEventListener("click",function(){
hardbtn.classList.add("selected");
easybtn.classList.remove("selected");
colors= generateRandomColors(6);
pickedColor=pickColor();
colorsDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){

    squares[i].style.backgroundColor=colors[i];
squares[i].style.display="block";




}
});


reset.addEventListener("click",function(){   // reset button
 colors= generateRandomColors(6);  // generate random colors
pickedColor=pickColor();    // pick a new color
colorsDisplay.textContent=pickedColor;  // display the rgb value
 message.textContent=""; // set the message to empty once reset is clicked
 this.textContent="New colors";
 for (var i = 0; i < squares.length; i++) {   // change color in square boxes
        squares[i].style.backgroundColor=colors[i];

}
});


var squares= document.querySelectorAll(".square");
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor=colors[i];    // Add initial color


squares[i].addEventListener("click",function () {
    // get current color
    var clickedColor= this.style.backgroundColor;
    if(clickedColor===pickedColor){ // check whether clickedcolor is equal to picked color
    message.textContent="Right choice";
    reset.textContent="play again?"
    changeColors(clickedColor);
    h1.style.backgroundColor=clickedColor;
    }
else{
    this.style.backgroundColor="black";
message.textContent="Try again";
h1.style.backgroundColor="steelblue";
}

});
}

function changeColors(color){
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor=color;
}
}

function pickColor(){
    var random= Math.floor(Math.random()*colors.length);  // this fn generates a random no.
    return colors[random];  //then random generated no. is passed to colors array
}
 function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to arr
    for(var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
