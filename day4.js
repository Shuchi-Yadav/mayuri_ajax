// let pro = new Promise(function(resolve, reject){
//     let firstName = 'mayuri'
//     if(firstName.startsWith("M")){
//         resolve("Hello")
//     }
//     else {
//         reject("Bye")
//     }
// })

// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(str){
//     console.log("always executed")
// })


// program 4

// let pro3 = new Promise(function(resolve, reject){
//     let a = 20
//     let b = 20

//     if( a == b){
//         resolve("hi")
//     }
//     else {
//         resolve("bye")
//     }
// })

// pro.then(function(str){
//     console.log(str)
//     return "Miniskole"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })




function createUser(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("user created")
        },2000)
    })
}


function getId(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Get Id")
        },2000)
    })
}

function showUser(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("show user")
        },1000)
    })
}

createUser()
.then(function(str){
    console.log(str)
    return getId()
})
.then(function(str){
    console.log(str)
    return showUser()
})
.then(function(){
    console.log(str)
   
})

.catch(function(){
    console.log(bye)
})
.finally(function(){
    console.log('I am alwaya executed')
})

