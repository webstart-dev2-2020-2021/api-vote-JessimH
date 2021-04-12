const express = require('express')
const helmet = require('helmet')

const authRouter = require('./routes/authRouter').router
const adminRouter = require('./routes/adminRouter').router
const voteRouter = require('./routes/voteRouter').router
const PORT = 3000

const api = express()
api.use(helmet())
api.use(express.json())

api.use('/auth/', authRouter)
api.use('/admin/', adminRouter)
api.use('/vote/', voteRouter)

api.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}, bon développement !`))

/*  ROUTES:
    http://localhost:3000/api/auth/signin/
    http://localhost:3000/api/auth/signup/

    http://localhost:3000/api/admin/users/
    http://localhost:3000/api/admin/users/:id

    http://localhost:3000/api/vote/
*/
