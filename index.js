var arr=['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];
var randomNumber1 = Math.floor(Math.random()*arr.length);
var randomname1=arr[randomNumber1];
document.getElementById("diceImage1").src=randomname1;

var randomNumber2= Math.floor(Math.random()*arr.length);
var randomName2 = arr[randomNumber2];
document.getElementById("diceImage2").src=randomName2;
if(randomNumber1>randomNumber2){
    document.querySelector("h2").textContent="Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h2").textContent="Player 2 Wins";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h2").textContent="Draw";
}
//console.log(randomname);