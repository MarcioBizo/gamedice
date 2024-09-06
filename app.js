
let randomnumber1 =Math.floor (Math.random() *6)+1
let randomDiceImage = 'dice' + randomnumber1 + '.png'

let randomImageSource = 'img/' + randomDiceImage

let image1 = document.querySelectorAll('img')[0]

image1.setAttribute('src', randomImageSource)


let randomNumber2 = Math.floor(Math.random()*6) + 1

let randomImageSource2 = 'img/dice' + randomNumber2 +'.png'

document.querySelectorAll('img') [1].setAttribute('src',randomImageSource2)

if(randomnumber1 >randomNumber2){
    document.querySelector('h1').innerHTML='🏆 Player 1 Won'
} else  if(randomNumber2 > randomnumber1){
    document.querySelector('h1').innerHTML='🏆 Player 2 Won'
} else {
    document.querySelector('h1').innerHTML='The two tied'
}

var btn = document. querySelector(".btnjogar");
btn. addEventListener("click", function() {
location. reload();
});