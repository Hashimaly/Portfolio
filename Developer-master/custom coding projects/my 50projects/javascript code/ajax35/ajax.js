let fetchBtn = document.getElementById('fetchBtn');
 fetchBtn.addEventListener('click', clickButtonHandler);

 function clickButtonHandler() {
     console.log('button clicked');


      //we have to create an xhr object

     const file = new XMLHttpRequest();

   
        file.open('GET','myData.txt',true)
    

     file.onprogress = function () {
         console.log('on progress')
     }
     file.onload = function () {
         if(this.status === 200){
            console.log(this.responseText)

         }
         else{
             console.log('some error found')
         }
     }

     //after that send the request

     file.send();

     


 }


 let popBtn = document.getElementById('popBtn');
 popBtn.addEventListener('click', popButtonHandler);

 function popButtonHandler() {
    console.log('button clicked');


     //we have to create an xhr object

    const file = new XMLHttpRequest();

  
       file.open('GET',/*this is the area where api data is stored */true)
   
    file.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText)
            console.log(obj)

        }
        else{
            console.log('some error found')
        }
    }

    //after that send the request

    file.send();

    


}

