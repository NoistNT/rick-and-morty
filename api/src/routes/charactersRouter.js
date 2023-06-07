const { Router } = require('express')
const {
  getCharacters,
  getCharacterById
} = require('../controllers/characters/charactersController')

const router = Router()

// Routes config
router.get('/', getCharacters)
router.get('/:id', getCharacterById)

module.exports = router
