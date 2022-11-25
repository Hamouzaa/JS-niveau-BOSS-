


// Generate a random number between 1 and 10 (including 1 and 6)
var randomNum1 = Math.floor (Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNum1 + ".png";//

var randomImageSource1 = "images/" + randomDiceImage1;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);


var randomNum2 = Math.floor (Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNum2 + ".png";//

var randomImageSource2 = "images/" + randomDiceImage2;


var image2= document.querySelectorAll("img")[1];


image2.setAttribute("src", randomImageSource2);



if(randomNum1  > randomNum2){
    document.querySelector("h1").innerHTML="🎲PLAYER1 WIN !🎲";
    

}else if(randomNum1 ==randomNum2){
    document.querySelector("h1").innerHTML="🎲DRAW!🎲";

    
}
else{
    document.querySelector("h1").innerHTML=" 🎲PLAYER2 WIN! 🎲";

}
