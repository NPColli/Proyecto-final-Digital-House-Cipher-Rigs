
module.exports = (sequelize, DataTypes) => {

    const Rig = sequelize.define("Rig",{
    
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
        
        },
        {
     timestamps: false,
    });
    
    return Rig;
    
    }