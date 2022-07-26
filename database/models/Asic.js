const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

const Asics = sequelize.define("Asic", cols, config) 

}

cols = {
    id_asic: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    
    },
    image:{
        type: DataTypes.BLOB
    } ,
    titulo:{
        type: DataTypes.STRING
    } ,
    precio:{
        type: DataTypes.DECIMAL
    } ,
    especificaciones: {
        type: DataTypes.STRING
    }
    
    }
    
    config = {timestamps: false};

return Asics;
