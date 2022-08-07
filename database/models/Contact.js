module.exports = function (sequelize, DataTypes){
    let alias = "Contact";

    let cols = {
idcontacto: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

},
nombre:{
    type: DataTypes.STRING
} ,
email:{
    type: DataTypes.STRING
} ,
asunto:{
    type: DataTypes.STRING
} ,
mensaje: {
    type: DataTypes.STRING
},
    }
let config = {
    tableName: "contacto",
    timestamps: false
}

let Contact = sequelize.define(alias, cols, config);

return Contact;

}