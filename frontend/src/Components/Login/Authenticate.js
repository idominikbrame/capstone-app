//TODO

export const Authentication = (email, password, users) => {
    let success = false
    console.log(users)
    console.log("checking user")
    users.forEach(user => {
        if(user.email == email && user.pass == password){
            console.log("We Found You in Our Database")
            success = true
        }
    })
    console.log(success)
}