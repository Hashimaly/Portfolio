let maximum = parseInt(prompt("please enter a maximum number"))
while(!maximum){
    maximum = parseInt(prompt("please enter a valid  maximum number"))
}


const targetNum = Math.floor(Math.random() * maximum)+ 1;


let guess = parseInt(prompt(`your have to choose number between 0 to ${maximum} `));
let attempts = 1;

while(parseInt(guess) !== targetNum){
if(guess==='quit') break;
attempts++;
if(guess > targetNum){
    guess = prompt("too higher number")
}
else{
    guess = prompt("lower number")
}
}

if(guess==='quit'){
    document.write("ok you quit this game" )

}else{
    document.write(`you win this game <br>`)
    
}
if (attempts < 3){
    document.write(`brilliant you done it in only ${attempts} try <br>`)
}
else if(attempts < 6){
    document.write(`good you choose correct number in ${attempts} tries <br>`)
}
else(`well you chose correct number after ${attempts} times try`)


