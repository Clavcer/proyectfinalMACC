var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Equipo = require('../models/team');


/* GET users listing. */
router.get('/', function(req, res, next) {
  Equipo.find({}, function(err, datos) {
    res.status(200).json(datos);
  });

});


router.get('/:id', function(req, res, next) {
  Equipo.findOne({
    'nombre': req.params.id
  }, function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      res.status(200).json(datos);
    }

  });
  //res.json(req.params.userId);
});


/*Verbo POST, nuevo equipo*/
router.post('/', function(req, res, next) {
  var nuevoequip=  Equipo({
    nombre: req.body.nombre,
    conferencia: req.body.conferencia,
    division: req.body.division,
    ciudad: req.body.ciudad,
  });
  //res.send(usuario);


  nuevoequip.save(function(err, data) {
    if (err) {
      res.status(404).json({
        mensaje: "Error al guardar"
      });
    } else {
      res.status(201).json(data);
    }
  });

});

/*
router.put('/api/nfl/:id',(req,res)=>{
  if (!validarBody(req.body.nota)){
    res.status(400).send(mensajeErroneo);
  }
  else if (!validarId(req.params.id)){
    res.status(404).send(mensajeNoEncontrado);
  }
  else{
    actualizarNota( req.params.id ,req.body.nota);
    res.send(mensajeCorrecto);
  }
});
*/

/*DELETE */
router.delete('/:id', function(req, res, next) {
  Equipo.findOneAndDelete({
    nombre: req.params.id
  }, function(err, data) {
    if (err) {
      res.status(404).json(err);
    }
    res.status(200).json(data);
  });
});

router.delete('/',function(req, res, next){
  res.status(405).json({mensaje: 'Acción no permitida'});
})

module.exports = router;
