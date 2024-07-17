//using fetch function
// program 1
//GET -----> get user
// function getUser(id) {
//     fetch('https://reqres.in/api/users/${id}')
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (response) {
//             console.log(response.data)
//         })
// }
// getUser(1) 

// program 2
// POST -----> User Created
function userCreated() {
 fetch('https://reqres.in/api/users',{
    method:"POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        
            "name": "morpheus",
            "job": "leader"
        
    })
 })
 .then(function(response) {
    console.log(response)
    return response.json()
 })
 .then(function(response){
    console.log(response)
 })
 .catch(function(error){
    console.error(error)
 })
}
userCreated() 

// program 3
// PUT ----> User Update
function updateUser(id){
    fetch('https://reqres.in/api/users/${id}',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "name": "morpheus",
                "job": "zion resident"
            })
        })
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.error(error)
        })
}

updateUser()
// program 4
//DELETE -----> delete users

function deleteUser(id){
    fetch(`https://reqres.in/api/users/${id}`,{
        method:"DELETE"
    })
    .then(function(response){
        console.log(response)
        if(response.status == 204){
            console.log("user deleted successfully")
        }

    })

}
deleteUser(2)
