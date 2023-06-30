//? File's imports
const userControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
  const data = userControllers.findAllUsers();
  res.status(200).json(data);
};



const getUserById = (req, res) => {
  const id = req.params.id;
  const data = userControllers.findUserById(id);

  if (data) {
    //? Caso Exitoso
    res.status(200).json(data);
  } else {
    //! error
    res.status(404).json({ message: "Invalid ID" });
  }
};

const postNewUser = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  if (first_name) {
    //? Caso Exitoso
    const data = userControllers.createNewUser({ first_name, last_name, email, password, birthday  });
    res.status(201).json(data);
  } else {
    //! error
    res.status(400).json({
            message: "Invalid Data",
            fields: { 
                first_name: "lili*", 
                last_name: "altamirano*",
                email: "lili@email.com", 
                password: "1234" ,
                bithday: "1991" 
            },
        });
  }
};



module.exports = {
    getAllUsers,
    getUserById,
    postNewUser
}

