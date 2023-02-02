const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {


  sequelize.define('Reviews', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  },{ timestamps: false });
};