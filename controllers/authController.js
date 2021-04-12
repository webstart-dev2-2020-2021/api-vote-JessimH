const User = require('../models/user')

module.exports = {
    async signup(req, res) {
        const { username, password, email } = req.body
        try {
            const newUser = new User({ username, password, email })
            const savedUser = await newUser.save()
            return res.status(201).send({
                success: true,
                _id: newUser._id,
                username: newUser.username
            })
        } catch (error) {
            console.log(error)
            return res.status(500).send('Erreur du serveur')
        }
    },
    signin(req, res) {
        return res.status(200).json({
            success: true,
            user: {
                id: 1,
                username: 'SIGNIN USER'
            }
        })
    }
}