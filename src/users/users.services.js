// Importación de archivos
const userControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
  const data = userControllers.findAllUsers();
  res.status(200).json(data);
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const data = userControllers.findUserById(id);

  if (data) {
    res.status(200).json(data); // Caso Exitoso
  } else {
    res.status(404).json({ message: "Invalid ID" }); // Error
  }
};

const postNewUser = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  if (first_name) {
    const data = userControllers.createNewUser({
      first_name,
      last_name,
      email,
      password,
      birthday
    });
    res.status(201).json(data); // Caso Exitoso
  } else {
    res.status(400).json({
      message: "Invalid Data",
      fields: {
        first_name: "alex*",
        last_name: "rojas*",
        email: "example@hotmail.com",
        password: "1234",
        birthday: "1691"
      }
    }); // Error
  }
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const { first_name, last_name, email, password, birthday } = req.body;
  const updatedUser = userControllers.updateUser(id, {
    first_name,
    last_name,
    email,
    password,
    birthday
  });

  if (updatedUser) {
    res.status(200).json(updatedUser); 
  } else {
    res.status(404).json({ message: "Invalid ID" }); // Error
  }
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  const deletedUser = userControllers.deleteUser(id);

  if (deletedUser) {
    res.status(200).json(deletedUser); 
  } else {
    res.status(404).json({ message: "Invalid ID" }); // Error
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  postNewUser,
  updateUser,
  deleteUser
};
