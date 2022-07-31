
module.exports = (sequelize, DataTypes) => {

const Asic = sequelize.define("Asics",{

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
    
    },
    {
 timestamps: false,
});

return Asic;

}