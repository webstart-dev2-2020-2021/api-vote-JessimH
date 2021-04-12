const express = require('express')
const adminController = require('../controllers/adminController')

exports.router = (() => {
    const adminRouter = express.Router()
    /*CREATION DES ROUTES */
    adminRouter.route('/users').get(adminController.seeAll)
    adminRouter.route('/users/:id').get(adminController.user)


    return adminRouter
})()