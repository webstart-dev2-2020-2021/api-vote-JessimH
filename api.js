/*CONSTANTES ESSENTIELLES A NODEJS AVEC EXPRESS*/
const express = require('express')
const helmet = require('helmet')
const mongoose = require('mongoose')
const PORT = 3000

/*Liens avec les routeurs*/
const authRouter = require('./routes/authRouter').router
const adminRouter = require('./routes/adminRouter').router
const voteRouter = require('./routes/voteRouter').router

/*Initialisation de l'app*/
const api = express()
api.use(helmet())
api.use(express.json())

/*MONGODB CONNECTION*/
mongoose.set('useFindAndModify', false)
mongoose.connect(
    `mongodb+srv://JessimAdmin:azertyuiop1@cluster0.ohmmx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'ERROR: Connexion a MongoDb impossible'))
db.once('open', () => console.log('MongoDb à bien été connecté'))

/*ROUTES*/
api.use('/auth/', authRouter)
api.use('/admin/', adminRouter)
api.use('/vote/', voteRouter)

/*START serveur */
api.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}, bon développement !`))