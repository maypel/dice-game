var randomNumber1 = Math.random()*6;

randomNumber1 = Math.floor(randomNumber1)+1;

var randomNumber2 = Math.random()*6;

randomNumber2 = Math.floor(randomNumber2)+1;


var x = document.getElementsByTagName("img").item(0);

x.setAttribute("src", "images/dice"+randomNumber1+".png");

var y = document.getElementsByTagName("img").item(1);

y.setAttribute("src", "images/dice"+randomNumber2+".png");

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Egality";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

