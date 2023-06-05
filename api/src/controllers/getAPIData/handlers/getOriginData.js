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
    console.error('Error retrieving origins', error)
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
    console.error('Error loading origin data into database', error)
    return error
  }
}

// Synchronize data to database
const syncOriginToDB = async () => {
  if (await loadOrigin()) console.log('✔ - Origin data synced to database')
  console.log('✔ - Origin data is up to date')
}

module.exports = syncOriginToDB
