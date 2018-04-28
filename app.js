/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var globalScour , current , activePlayer , playingGame , finallRemove;
inti();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if(playingGame){
        //Generate random number
        var dice = Math.floor(Math.random() * 6 )+ 1 ;
        //update UI
        var object = document.querySelector('.dice');
        object.style.display = 'block';
        object.src = 'dice-'+dice+'.png';
        //if the player rolls a 1, all his ROUND score gets lost
        if (dice !== 1) {
            current += dice;
            document.getElementById('current-' + activePlayer).textContent = current;
        } else {
            updateUI();
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click', function () {
    if(playingGame){
        //Fill scour
        globalScour[activePlayer]+=current;
        document.getElementById('score-'+activePlayer).textContent=globalScour[activePlayer];
        //Check if user is win or not
        if(globalScour[activePlayer]>=20){
            document.getElementById('name-'+activePlayer).textContent = 'Winner!';
            playingGame = false;
            removeActive();
        }
        //Update UI & remove activation
        updateUI();
    }
})

document.querySelector('.btn-new').addEventListener('click', function () {
    inti();
})
function updateUI() {
    var object = document.querySelector('.dice');
    document.getElementById('current-' + activePlayer).textContent = 0;
    if(!finallRemove) {
        if (activePlayer === 0) {
            document.getElementById('op0').classList.remove('active');
            document.getElementById('op1').classList.add('active');
        } else {
            document.getElementById('op1').classList.remove('active');
            document.getElementById('op0').classList.add('active');

        }
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    }
    current = 0;
    object.style.display = 'none';
}
function removeActive() {
    if(activePlayer===0){
        document.getElementById('op0').classList.remove('active');
    }else{
        document.getElementById('op1').classList.remove('active');
    }
    finallRemove = true;
}

function inti() {
    globalScour = [0,0];
    current = 0;
    activePlayer = 0;
    playingGame = true;
    finallRemove = false;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';

    document.getElementById('op0').classList.add('active');
}