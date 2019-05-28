var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EquipoSchema =  Schema({
  nombre: String,
  conferencia: String,
  division: String,
  ciudad: String,

});

module.exports = mongoose.model('Equipo', EquipoSchema);