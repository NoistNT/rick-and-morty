const { Router } = require('express')

const router = Router()

// Routes config
router.get('/', (req, res) => {
  try {
    res.status(200).send('Character route!')
  } catch (error) {
    console.log(error.message)
  }
})

module.exports = router
