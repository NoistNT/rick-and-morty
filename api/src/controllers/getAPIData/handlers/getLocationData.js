require('dotenv').config()
const axios = require('axios')
const { URL } = process.env
const { Location } = require('../../../db')

// Get data from external API
const getAPIDataForLocation = async () => {
  const { data } = await axios.get(`${URL}/location`)
  try {
    const locations = data.results.map((location) => {
      return {
        id: location.id,
        name: location.name,
        type: location.type,
        dimension: location.dimension,
        residents: location.residents,
        url: location.url,
        created: location.created
      }
    })
    return locations
  } catch (error) {
    console.error(error)
    return error
  }
}

// Load the retrieved data into the Location table
const loadLocation = async () => {
  try {
    const locations = await Location.findAll()
    if (!locations.length) {
      const locationData = await getAPIDataForLocation()
      await Location.bulkCreate(locationData)
      console.log('Location data loaded into database successfully!')
    }
  } catch (error) {
    console.error(`Error loading location data into database`)
    return error
  }
}

// Synchronize data to database
const syncLocationToDB = async () => await loadLocation()

module.exports = syncLocationToDB
