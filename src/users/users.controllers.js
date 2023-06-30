const usersDB = []
let id = 1
//* {
//*     id: 1,
//*     first_name: "lili", 
//*     last_name: "altamirano",
//*     email: "lili@email.com", 
//*     password: "1234" ,
//*     birthday: "2022" ,
//* }

const findAllUsers = () => {
    return usersDB
}

const findUserById = (id) => {
    const filteredUser = usersDB.find(user => user.id == id)
    return filteredUser
}

const createNewUser = (obj) => {
    const newUser = {
        id: id++, // este valor lo administramos nosotros
        first_name: obj.first_name ? obj.first_name :  'Anonymous', //? Somos campos opcionales+
        last_name: obj.last_name ? obj.last_name : 'Anonymous',
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday || 'Year Unknown' //? Somos campos opcionales
    }
    usersDB.push(newUser)
    return newUser
}


module.exports = {
    findAllUsers,
    findUserById,
    createNewUser
}
