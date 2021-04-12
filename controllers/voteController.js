module.exports = {
    vote(req, res) {
        return res.status(201).json({
            success: true,
            vote: {
                id: 1,
                name: "Virer Thomas du post de délégé",
                nbrVotes: 15
            }
        })
    }
}