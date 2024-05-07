const students = [
    {name : "hashim", subject : "js"},
    {name: "ali", subject : "ai"}
]

function enrollStudent(student) {
    return new Promise(function(resolve,reject) {
        setTimeout( function() {
            students.push(student)
            console.log('students has been enrolled')
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject();
            }

        }, 1000);
    })
}

function getStudents() {
    setTimeout(function()  {
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('student').innerHTML = str;
        console.log('students have been fetched')


    }, 2000);
    
}

let newStudent = {name : "pashaa", subject : "Data science"}

enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log('some error found')
})