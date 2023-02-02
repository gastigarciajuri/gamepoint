const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {


  sequelize.define('Genres', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    generos: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    },
  },{ timestamps: false });
};