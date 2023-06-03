const { Router } = require('express')

// Importing Routers
const getAPIData = require('../controllers/getAPIData/getAPIData')
const charactersRouter = require('./charactersRouter')
const locationsRouter = require('./locationsRouter')
const originsRouter = require('./originsRouter')

// Loading database with Characters, Location and Origin data
const loadDb = async () => await getAPIData()
loadDb()

const router = Router()

// Setting Routers
router
  .use('/character', charactersRouter)
  .use('/location', locationsRouter)
  .use('/origin', originsRouter)

module.exports = router
