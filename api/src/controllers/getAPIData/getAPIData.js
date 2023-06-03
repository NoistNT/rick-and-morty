const syncCharactersToDB = require('./handlers/getCharacterData')
const syncLocationToDB = require('./handlers/getLocationData')
const syncOriginToDB = require('./handlers/getOriginData')

const getAPIData = async () => {
  try {
    await syncCharactersToDB()
    await syncLocationToDB()
    await syncOriginToDB()
    console.log('All data has been successfully loaded into database!')
  } catch (error) {
    console.error(error)
    return error
  }
}

module.exports = getAPIData
