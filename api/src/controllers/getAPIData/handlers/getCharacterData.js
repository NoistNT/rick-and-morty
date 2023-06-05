require('dotenv').config()
const axios = require('axios')
const { URL, CHARACTERS_TOTAL } = process.env
const { Character } = require('../../../db')

// Get data from external API
const getAPIDataForCharacters = async () => {
  const characters = []

  for (let id = 1; id <= CHARACTERS_TOTAL; id++) {
    try {
      const { data } = await axios.get(`${URL}/character/${id}`)
      const character = {
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        type: data.type || 'Unknown',
        gender: data.gender,
        image: data.image,
        episode: data.episode ? data.episode : 'None',
        url: data.url,
        created: data.created
      }
      characters.push(character)
    } catch (error) {
      console.error(`Error retrieving character with id ${id}`, error)
      return error
    }
  }

  return characters
}

// Load the retrieved data into the Character table
const loadCharacters = async () => {
  try {
    const characters = await Character.findAll()
    if (!characters.length) {
      const charactersData = await getAPIDataForCharacters()
      await Character.bulkCreate(charactersData)
      console.log('Characters data loaded into database successfully!')
    }
  } catch (error) {
    console.error('Error loading characters data into database', error)
    return error
  }
}

// Synchronize data to database
const syncCharactersToDB = async () => {
  if (await loadCharacters())
    console.log('✔ - Character data synced to database')
  console.log('✔ - Character data is up to date')
}

module.exports = syncCharactersToDB
