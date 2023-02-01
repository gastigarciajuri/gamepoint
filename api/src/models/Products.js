const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {


  sequelize.define('Products', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    consolas: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    lanzamiento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Stock: {
      type: DataTypes.TEXT,
      allowNull:true
    },
  },{ timestamps: false });
};