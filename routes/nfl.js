var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Equipo= require('../models/team');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Equipo.find({},function(err,datos){
    res.json(datos);
  });

});

/* nuevo equipo*/
router.post('/', function(req, res, next) {
  console.log(req.body);
  var nuevoequip=  Equipo({
    nombre: req.body.nombre,
    conferencia: {
    tipoconf: req.body.tipoconf,
    division: req.body.division,
  },
  ciudad: String,

    id: req.body.id,
    marca:req.body.marca,
    modelo:req.body.modelo
  });

  nuevoequip.save(function(err,data){
    if (err) {
      res.send('error');
    }else {
      res.send(data);
    }
  });

});

module.exports = router;
