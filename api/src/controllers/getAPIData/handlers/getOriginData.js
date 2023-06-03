require('dotenv').config()
const axios = require('axios')
const { URL } = process.env
const { Origin } = require('../../../db')

// Get data from external API
const getAPIDataForOrigin = async () => {
  const { data } = await axios.get(`${URL}/character`)
  try {
    const origins = data.results.map((character) => {
      return {
        name: character.origin.name,
        url: character.origin.url
      }
    })
    return origins
  } catch (error) {
    console.error(error)
    return error
  }
}

// Load the retrieved data into the Origin table
const loadOrigin = async () => {
  try {
    const origins = await Origin.findAll()
    if (!origins.length) {
      const originData = await getAPIDataForOrigin()
      await Origin.bulkCreate(originData)
      console.log('Origin data loaded into database successfully!')
    }
  } catch (error) {
    console.log(error)
    // console.error('Error loading origin data into database')
    return error
  }
}

// Synchronize data to database
const syncOriginToDB = async () => await loadOrigin()

module.exports = syncOriginToDB
