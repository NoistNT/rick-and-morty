const { Router } = require('express')
const {
  getLocations,
  getLocationById
} = require('../controllers/locations/locationsController')

const router = Router()

// Routes config
router.get('/', getLocations)
router.get('/:id', getLocationById)

module.exports = router
