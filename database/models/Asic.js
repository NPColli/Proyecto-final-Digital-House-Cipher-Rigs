
module.exports = function (sequelize, DataTypes){
    let alias = "Asic";

    let cols = { 
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

    let config = {
        tableName: "asics",
        timestamps: false
    }

    let Asic = sequelize.define(alias, cols, config);

    return Asic;
}
