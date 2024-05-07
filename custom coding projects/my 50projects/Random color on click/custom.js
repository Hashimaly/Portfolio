// let btn = document.getElementById("btn");

// btn.addEventListener("dblclick",function welcome(){
//     let click = 0;
//     click++
   
//     console.log(alert('you clicked'));
//     console.log(click)
    
    
// })

let button = document.querySelector('button')



button.addEventListener('click',function(){
   
    let head = document.querySelector('h1');

    let r = Math.floor(Math.random()*255);

    let g = Math.floor(Math.random()*255);

    let b = Math.floor(Math.random()*255);
    let a = Math.random()*1;

    let newColor = ` rgba(${r},${g},${b},${a})`;

    document.body.style.backgroundColor = newColor;

    head.innerText = newColor;
})








