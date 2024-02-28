let pro1 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 20

    if( a == b ){
        resolve([11,22,33])
    }
    else {
        reject([-11, -22, -33, -44])
    }
})


pro1.then(function (a){
    console.log(a[2])
},function (a){
    console.log(a[0])
})


let pro2 = new Promise(function(resolve, reject){

    let a = 10
    let b= 20

    if( a == b ){
        resolve("hello")
    }
    else {
        reject("bye")
    }
})

pro2.then(function(a){
    console.log(a)
})
.catch(function(b){
    console.log(b)
})
.finally(function(){
    console.log("I always executed")
})