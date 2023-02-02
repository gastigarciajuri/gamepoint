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
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:"https://i.pinimg.com/236x/08/2b/da/082bda63f261722a24fa31751ccfe896.jpg"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false
    },
    state: {
      type: DataTypes.TEXT,
      allowNull:true,
      defaultValue: "active"
    },
    isBaned: {
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
  },{ timestamps: false });
};