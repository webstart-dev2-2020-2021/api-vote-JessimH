const express = require('express')
const voteController = require('../controllers/voteController')

exports.router = (() => {
    const authRouter = express.Router()
    /*CREATION DES ROUTES */
    authRouter.route('/signup/').post(authController.signup)
    authRouter.route('/signin/').post(authController.signin)


    return authRouter
})()