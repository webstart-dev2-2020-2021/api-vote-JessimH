const express = require('express')
const voteController = require('../controllers/voteController')

exports.router = (() => {
    const voteRouter = express.Router()
    /*CREATION DES ROUTES */
    voteRouter.route('/see').get(voteController.seeAll)


    return voteRouter
})()