const User = require('../models/user')

module.exports = {
    async signup(req, res) {
        const { username, password, email } = req.body
        if (!username || !password || !email) {
            return res.status(401).json({
                success: false,
                errors: "Vous devez remplir toutes les informations."
            })
        }
        try {
            const newUser = new User({ username, password, email })
            const savedUser = await newUser.save()
            return res.status(201).send({
                success: true,
                _id: savedUser._id,
                username: savedUser.username
            })
        } catch (error) {
            console.log(error)
            return res.status(500).send('Erreur du serveur')
        }
    },
    async signin(req, res) {
        if (!req.body.email || !req.body.password) {
            return res.status(401).json({
                success: false,
                errors: "Tous les champs ne sont pas remplis."
            })
        }
        try {
            const userToSignIn = await User.findOne({ "email": req.body.email, "password": req.body.password });
            return res.status(200).json({
                success: true,
                user: {
                    name: userToSignIn.name,
                    _id: userToSignIn._id
                }
            })
        } catch (error) {
            console.log(error);
            return res.status(500).send('Erreur du serveur');
        }
    }
}