let plDisplay = document.querySelector('#plDisplay')
let p2Display = document.querySelector('#p2Display')

let p1pl = document.getElementById('p1pl')
let p2pl = document.getElementById('p2pl')

let player1 = 0;
let gameOver = false;

let winningScore = document.querySelector('#playSet')

winningScore.addEventListener('change', function(){
    winningScore = parseInt(this.value)
})


p1pl.addEventListener('click', function(){
    if(!gameOver){
        player1 += 1;
        if(player1 === winningScore){
            gameOver = true;
            plDisplay.style.color = 'green'
        
        }
        plDisplay.textContent = player1;
    }
})

let player2 = 0;

p2pl.addEventListener('click', function(){
    if(!gameOver){
        player2 += 1;
        if(player2 === winningScore){
            gameOver = true;
        }
        p2Display.textContent = player2
    }
    
})