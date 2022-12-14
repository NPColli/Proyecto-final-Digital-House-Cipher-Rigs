module.exports = function (sequelize, DataTypes){
    let alias = "User";

    let cols = {
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
password: {
    type: DataTypes.STRING(400)
},
rol: {
  type: DataTypes.TINYINT(1)
},
    }
let config = {
    tableName: "users",
    timestamps: false
}

let User = sequelize.define(alias, cols, config);

return User;

}