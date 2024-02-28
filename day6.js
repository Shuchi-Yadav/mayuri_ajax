// function getMultipleUser(){
//     fetch('https://reqres.in/api/users?page=2') 
//     .then(function(res){
//         //console.log(res)
//         //console.log(res.json())
//         return res.json()
//     })  
//     .then(function(response){
//         console.log(response.data)
//         response.data.forEach(function(el){
//             //console.log(el)
//             document.write(`<h1>${el.first_name}</h1>`)
//             document.write(`<h1>${el.last_name}</h1>`)
//             document.write(`<h1>${el.email}</h1>`)
//             document.write(`<h1>${el.id}</h1>`)
//             document.write(`<img src=${el.avatar}>`)
//         })
        
//     })         
// }

//getMultipleUser()

// let btn = document.querySelector('button')
// btn.addEventListener('click', function(){
//     getMultipleUser()
// })

//asynch==> synch => dependancy
//GetUser => getId => showInfo

//GetUser

function getMultipleUsers(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(res){
        return res.json() //return
    })
    .then(function(res){
        return res.data
    })
}

//getMultipleUsers()

//SingleUser
function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            return (res.data)
        })
}
//getSingleUser()

//ShowInfo
function showInfo(el) {
    document.write(`<h1>${el.first_name}</h1>`)
    document.write(`<h1>${el.last_name}</h1>`)
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<h1>${el.email}</h1>`)
    document.write(`<img src=${el.avatar}>`)
}

// getMultipleUser(2)
// .then(function(res){
//     console.log(res)
//     getId = (res[4].id)
//     return getSingleUser(getId)
// })
// .then(function(){
//     console.log(res)
//     showInfo(res)
// })


//asynch await

async function info(){
    let dataArray=await getMultipleUsers(1)
    console.log(dataArray)
    let idUserInfo=await getSingleUser(dataArray[4].id)
    showInfo(idUserInfo)
}
info()