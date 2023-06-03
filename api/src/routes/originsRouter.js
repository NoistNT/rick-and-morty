const { Router } = require('express')

const router = Router()

// Routes config
router.get('/', (req, res) => res.status(200).send('Origins route!'))

module.exports = router
