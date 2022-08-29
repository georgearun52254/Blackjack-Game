let sum = 0
let cards=[]
let player={
  name:userName(),
  chips:10
}
let message=""
let displayUserNameEl=document.getElementById("displayUserName")
displayUserNameEl.textContent=player.name

let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el") //equivalent to let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")

document.getElementById("newCard-btn").disabled=true
document.getElementById("reset-btn").disabled=true

function condition() {
  if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"    
    } else {
        message = "You're out of the game!"    
    }
}

function randomNumber(){
   let cardValue=Math.floor(Math.random()*13)+1
   if(cardValue>10){
    return 10
   }else if(cardValue==1){
    return 11
   }else{
    return cardValue
   }
}

function newGame(){
    condition()
    messageEl.textContent = message
    sumEl.textContent=sum
    cardEl.textContent=cards

    if (sum< 21){
      playerEl.textContent=""
    } else if(sum==21){
      playerEl.textContent=player.name+": "+"$"+player.chips*sum
    } else{
      playerEl.textContent=player.name+": "+"$"+player.chips*sum
    }

    manage()
}

function startGame() {
  firstCard = randomNumber()
  secondCard = randomNumber()
  sum = firstCard + secondCard
  cards=[firstCard,secondCard]
  newGame()
  manage()

  document.getElementById("startGame-btn").disabled=true
  document.getElementById("reset-btn").disabled=false
}

function newCard(){
  let newCarD=randomNumber()
  sum+=newCarD
  cards.push(newCarD)
  newGame()
}

function reset() {
  cards=[]
  sum=0
  sumEl.textContent=sum
  cardEl.textContent=sum
  messageEl.textContent="Want to play a round?"
  playerEl.textContent=""

  document.getElementById("startGame-btn").disabled=false
  document.getElementById("newCard-btn").disabled=true
}

function manage(){
  if (sum<21) {
    document.getElementById("newCard-btn").disabled=false
  }else{
    document.getElementById("newCard-btn").disabled=true 
  }
}

function play(){
  let userNameEl=document.getElementById("userName-el").value;
  if(userNameEl.length>1){
    location.href="index2.html"
  }
  localStorage.setItem("userNameEl",userNameEl)
}

function userName(){
  return localStorage.getItem("userNameEl")
}












