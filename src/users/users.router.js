//? Dependencies
const router = require('express').Router()

//? File Imports
const userServices = require('./users.services')

router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.postNewUser)
router.get('/users/:id', userServices.getUserById)

module.exports = router
