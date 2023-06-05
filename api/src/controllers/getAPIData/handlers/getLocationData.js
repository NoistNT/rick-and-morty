require('dotenv').config()
const axios = require('axios')
const { URL } = process.env
const { Location } = require('../../../db')

// Get data from external API
const getAPIDataForLocation = async () => {
  const id = []

  for (let i = 1; i < 127; i++) {
    id.push(i)
  }

  const { data } = await axios.get(`${URL}/location/${id}`)
  try {
    const locations = data.map((location) => {
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
    console.error('Error retrieving location', error)
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
    console.error(`Error loading location data into database`, error)
    return error
  }
}

// Synchronize data to database
const syncLocationToDB = async () => {
  if (await loadLocation()) console.log('✔ - Location data synced to database')
  console.log('✔ - Location data is up to date')
}

module.exports = syncLocationToDB
