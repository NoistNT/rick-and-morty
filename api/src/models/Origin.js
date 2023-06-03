const { DataTypes } = require('sequelize')

// Export Model definition
// Then inject the sequelize connection
module.exports = (sequelize) => {
  sequelize.define(
    'Origin',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: false }
  )
}
