'use strict'

var express = require('express')
var router = express.Router()
var RegistrosController = require('../controller/registros')

var md_auth = require('../middleware/auth')
var multipart = require('connect-multiparty')
var uploadDir = multipart({uploadDir:'assets/aspirantes'})

// RUTAS POST

router.post('/crear-aspirante', [md_auth.autenticacion, uploadDir], RegistrosController.creaRegistro)

// RUTAS GET

router.get('/aspirantes', md_auth.autenticacion, RegistrosController.aspirantes)
router.get('/aspirante/:ced', md_auth.autenticacion, RegistrosController.aspirante)

// RUTAS PUT

router.put('/actualizar-aspirante', md_auth.autenticacion, RegistrosController.actualizarAspirante)
router.put('/actualizar-aspirante-aspirante', [md_auth.autenticacion, uploadDir], RegistrosController.subirAvatarAspirante)

// RUTAS DELETE

router.delete('/eliminar-aspirante/:id', md_auth.autenticacion, RegistrosController.eliminarAspirante)

module.exports = router;