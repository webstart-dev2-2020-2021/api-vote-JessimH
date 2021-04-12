const express = require('express')
const voteController = require('../controllers/voteController')

exports.router = (() => {
    const voteRouter = express.Router()
    /*CREATION DES ROUTES */
    voteRouter.route('/').get(voteController.vote)


    return voteRouter
})()