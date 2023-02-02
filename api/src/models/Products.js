const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {


  sequelize.define('Products', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    platforms: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    publishers: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stock: {
      type: DataTypes.TEXT,
      allowNull: true
    },
  },{ timestamps: false });
};