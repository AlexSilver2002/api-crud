const usersDB = [];
let id = 1;

const findAllUsers = () => {
    return usersDB;
};

const findUserById = (id) => {
    const filteredUser = usersDB.find((user) => user.id == id);
    return filteredUser;
};

const createNewUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name ? obj.first_name : 'Anonymous',
        last_name: obj.last_name ? obj.last_name : 'Anonymous',
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday || 'Year Unknown'
    };
    usersDB.push(newUser);
    return newUser;
};

const updateUser = (id, obj) => {
    const userIndex = usersDB.findIndex((user) => user.id == id);
    if (userIndex !== -1) {
        const updatedUser = {
            ...usersDB[userIndex],
            ...obj
        };
        usersDB[userIndex] = updatedUser;
        return updatedUser;
    } else {
        return null; 
    }
};

const deleteUser = (id) => {
    const userIndex = usersDB.findIndex((user) => user.id == id);
    if (userIndex !== -1) {
        const deletedUser = usersDB[userIndex];
        usersDB.splice(userIndex, 1);
        return deletedUser;
    } else {
        return null; 
    }
};

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
    updateUser,
    deleteUser
};
