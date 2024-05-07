const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'WE LOVE PROGRAMMING' 

let a = 1

let speed = 300 / speedEl.value


writeText()

function writeText(){
    textEl.innerText = text.slice(0, a)
    a++

    if(a > text.length){
        a = 1
    }

    setTimeout(writeText,speed)
}


speedEl.addEventListener('input', (i) =>speed = 300 / i.target.value)
