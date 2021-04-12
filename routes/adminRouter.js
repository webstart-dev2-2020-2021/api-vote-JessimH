const express = require('express')
const adminController = require('../controllers/adminController')

exports.router = (() => {
    const authRouter = express.Router()
    /*CREATION DES ROUTES */
    authRouter.route('/users').get(adminController.seeAll)
    authRouter.route('/users/:id').get(adminController.user)


    return authRouter
})()