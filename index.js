
let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

let randomImage1 = "images/dice" + randomNumber1 + ".png"
let randomImage2 = "images/dice" + randomNumber2 + ".png"

let image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "It's a tie,try again!";
}
