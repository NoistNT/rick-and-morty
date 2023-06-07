const { Router } = require('express')
const {
  getEpisodes,
  getEpisodeById
} = require('../controllers/episodes/episodesController')

const router = Router()

// Routes config
router.get('/', getEpisodes)
router.get('/:id', getEpisodeById)

module.exports = router
