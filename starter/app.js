/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let score=[0,0];
let activePlayer=0;
let roundScore=0;
document.querySelector('.dice').style.display= 'none';

document.getElementById("score-0").textContent= '0';
document.getElementById("score-1").textContent= '0';

document.getElementById("current-0").textContent= '0';
document.getElementById("current-1").textContent= '0';

document.querySelector('.btn-roll').addEventListener('click',function () {
    let dice=Math.floor(Math.random()*6)+1;
    let diceDom=document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-' + dice +'.png';

    // adding the rolling result until it appears 1

    if(dice!==1){
        roundScore+=dice;
        document.querySelector("#current-" +activePlayer).textContent = roundScore;
    }
    else {
        nextPlayer();
    }
});

function nextPlayer(){
    activePlayer===0 ?activePlayer=1 :activePlayer=0;
    roundScore=0;
    document.getElementById("current-0").textContent= '0';
    document.getElementById("current-1").textContent= '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display= 'none';
}

document.querySelector('.btn-hold').addEventListener('click',function () {
    score[activePlayer]=roundScore;
    
    document.querySelector("#score-" +activePlayer).textContent = score[activePlayer];
    nextPlayer();

})


