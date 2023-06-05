const syncCharactersToDB = require('./handlers/getCharacterData')
const syncLocationToDB = require('./handlers/getLocationData')
const syncOriginToDB = require('./handlers/getOriginData')

const getAPIData = async () => {
  try {
    await syncCharactersToDB()
    await syncLocationToDB()
    await syncOriginToDB()
  } catch (error) {
    console.error('Data sync error', error)
    return error
  }
}

module.exports = getAPIData
