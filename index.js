
        
        
        
        // Dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumberImage1 = "dice" + randomNumber1 +".png";

var randomNumberSource1 = "images/" + randomNumberImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomNumberSource1);

        // Dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomNumberImage2 = "dice" + randomNumber2 + ".png";

var randomNumberSource2 = "images/" + randomNumberImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomNumberSource2);

        // If player1 wins

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

