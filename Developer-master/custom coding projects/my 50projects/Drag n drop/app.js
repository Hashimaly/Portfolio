const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',startDrag)
fill.addEventListener('dragend', startEnd)

for(const empty of empties){
    empty.addEventListener('dragover',startOver)
    empty.addEventListener('dragenter',startEnter)
    empty.addEventListener('dragleave',startleave)
    empty.addEventListener('drop',startDrop)


}





function startDrag(){
    this.className =+ 'hold ';
    setTimeout(()=>this.className = 'invisible', 0)
}
function startEnd(){
this.className =  'fill'}
function startOver(){
    console.log('start over')
}
function startEnter(){
    console.log('start enter')
}
function startleave(){
    console.log('start leave')
}
function startDrop(){
    console.log('start drop')
}