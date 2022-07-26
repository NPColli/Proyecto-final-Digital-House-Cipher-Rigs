const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

const Users = sequelize.define("User", cols, config) 

}

cols = {
user_id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

},
email:{
    type: DataTypes.STRING
} ,
nombre:{
    type: DataTypes.STRING
} ,
apellido:{
    type: DataTypes.STRING
} ,
contraseña: {
    type: DataTypes.STRING
}

}

return Users;
