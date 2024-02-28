// synch -> asynch

// function add1(){
//     setTimeout(function(){
//         console.log("add one")
//     },1000)
// }

// function add2(){
//     console.log("add two")
// }

// add1()
// add2()

//sych => asych

//Scenario
//MultipleUser => getId => showInfo

// function getInfo(){
//     setTimeout(function(){
//         console.log("create user")
//     },3000)

//     setTimeout(function(){
//         console.log('Get one user id')
//     },2000)

//     setTimeout(function(){
//         console.log('show single user info')
//     },1000)
// }

// getInfo()

//synch => asych => synch

//=========================================================================

//asych => synch
//CallBack hell

//MultipleUser => getId => showInfo


// function getUserInfo(){
//     setTimeout(function(){
//         console.log('get multiple user')

//         setTimeout(function(){
//             console.log('get one user id')

//             setTimeout(function(){
//                 console.log('show user info')
//             },1000)
//         },2000)
//     },3000)
// }

// getUserInfo()

//readability
//tightly couple

//===========================================================================
//Promises

//Es6 => 2015


//Promises => reject , resolve, pending


let pro = new Promise(function(resolve, reject){
    let a = 10;
    let b = 20;

    if( a == b){
        resolve('hello')
    }
    else{
        reject('bye')
    }
})

// consumed

pro.then(function(str){
    console.log(str)
}, function(str){
    console.log(str)
})