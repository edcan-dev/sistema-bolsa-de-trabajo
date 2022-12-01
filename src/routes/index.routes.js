const { Router } = require("express");
const router = Router();

const indexController = require('../controllers/index.controller'); // Controla las peticiones



router.get('/', indexController.getSlash);
router.get('/login', indexController.getLogin);
router.get('/inicio', indexController.getInicio);

module.exports = router; // Exporta el objeto "router"