const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

const User = sequelize.define("User", {
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

} ,

{
timestamps: false

});

return User;

}
