var x = Math.floor(Math.random()*6) + 1;
var y = Math.floor(Math.random()*6) + 1;
document.querySelector(".img1").setAttribute("src", "/home/aviral/Web Development Udemy/Dice Game/images/dice"+x+".png");
document.querySelector(".img2").setAttribute("src", "/home/aviral/Web Development Udemy/Dice Game/images/dice"+y+".png");
if (x > y){

  document.querySelector("h1").innerHTML = "🚩 Player1 Wins!"

}

else if (x == y) {

  document.querySelector("h1").innerHTML = "Match Tie"

}

else{

  document.querySelector("h1").innerHTML = "Player2 Wins! 🚩"

}
