/*
    http://localhost:3000/api/admin/users/
    http://localhost:3000/api/admin/users/:id
*/

module.exports = {
    seeAll(req, res) {
        return res.status(201).json({
            success: true,
            users: [
                {
                    id: 1,
                    username: 'user 1'
                },
                {
                    id: 2,
                    username: 'User2'
                },
                {
                    id: 3,
                    username: 'User3'
                },
            ]
        })
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