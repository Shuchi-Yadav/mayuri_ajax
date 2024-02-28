let pro = new Promise(function(resolve, reject){
    let a = 10
    let b = 10

    if( a == b ){
        resolve("Hello")
    }
    else {
        reject("bye")
    }
})

pro.then(function(str){
    console.log(str)
    return str + 'Shuchi'
})
.then(function(str){
    console.log(str)
    return "Hello Mayuri"
})
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})