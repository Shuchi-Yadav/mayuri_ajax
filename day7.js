//Asynch => synch

//multipleUser ==> singleUser => showUser

function getMultipleUser(pageNo){
    fetch('https://reqres.in/api/users?page=${pageNo}')
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        return res.data
    })
}

//getMultipleUser(2)

function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
       return (res.data)
    })
}
//getSingleUser()