const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/db-connection2")

const Booking = sequelize.define(
  'Booking',
  {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull: false
    },
    busNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seatNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }
);

module.exports=Booking;