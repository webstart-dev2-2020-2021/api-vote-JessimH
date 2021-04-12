module.exports = {
    signup(req, res) {
        return res.status(201).json({
            success: true,
            user: {
                id: 1,
                username: 'SIGNUP USER'
            }
        })
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