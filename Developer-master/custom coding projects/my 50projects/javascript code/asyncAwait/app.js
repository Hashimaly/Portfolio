function func() {
    console.log('inside func function')
    const  response = await fetch('https.api.github.com')
    console.log('before response')
    const users = await response.json();
    console.log('users resolved')
    return Data
    return "func"

}

console.log('before calling harry')
let a = func();
console.log('after calling harry')
console.log(a)
console.log('last line')