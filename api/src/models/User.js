const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {


  sequelize.define('User', {
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
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true
    },
    Adress: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    IsAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    State: {
      type: DataTypes.TEXT,
      allowNull:true
    },
    IsBaned: {
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
  },{ timestamps: false });
};
