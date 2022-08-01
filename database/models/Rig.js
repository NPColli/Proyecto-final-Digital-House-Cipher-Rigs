
module.exports = function (sequelize, DataTypes){
    let alias = "Rig";

    let cols = { 
        id_rigs: {
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
        tableName: "rigs",
        timestamps: false
    }

    let Rig = sequelize.define(alias, cols, config);

    return Rig;
}
