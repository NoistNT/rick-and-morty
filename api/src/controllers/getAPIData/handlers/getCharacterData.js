require('dotenv').config()
const axios = require('axios')
const { URL } = process.env
const { Character } = require('../../../db')

// Get data from external API
const getAPIDataForCharacters = async () => {
  const { data } = await axios.get(`${URL}/character`)
  try {
    const characters = data.results.map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type || 'Unknown',
        gender: character.gender,
        image: character.image,
        episode: character.episode ? character.episode : undefined,
        url: character.url,
        created: character.created
      }
    })
    return characters
  } catch (error) {
    console.error(error)
    return error
  }
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
    console.log(error)
    // console.error('Error loading characters data into database')
    return error
  }
}

// Synchronize data to database
const syncCharactersToDB = async () => await loadCharacters()

module.exports = syncCharactersToDB
