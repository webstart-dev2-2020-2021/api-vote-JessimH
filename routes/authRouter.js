const express = require('express')
const authController = require('../controllers/authController')

exports.router = (() => {
    const authRouter = express.Router()
    /*CREATION DES ROUTES */
    authRouter.route('/signup/').post(authController.signup)
    authRouter.route('/signin/').post(authController.signin)


    return authRouter
})()