//TODO

export const Authentication = (email, password, users) => {
    let success = false
    users.forEach(user => {
        if(user.email === email && user.pass === password){
            return (
                success = true,
                console.log("We found you in our Database")
            )} else {
                return(
                    console.log(success),
                        console.log("Unable to find you in our Database, please try again!")
                )
            }
        })
    }

