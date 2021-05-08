/*
    http://localhost:3000/api/admin/users/
    http://localhost:3000/api/admin/users/:id
*/
const User = require('../models/user');

module.exports = {
    async seeAll(req, res) {
        try {
            const users = await User.find().select('username')
            return res.status(200).json({
                success: true,
                users: [users]
            })
        } catch (error) {
            console.log(error);
            return res.status(500).send('Erreur du serveur');
        }
    },
    user(req, res) {
        return res.status(200).json({
            success: true,
            user: {
                id: 1,
                username: 'USER 1'
            }
        })
    }
}