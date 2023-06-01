var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/ultimasinfluencer/:idUsuario", function (req, res) {
    medidaController.buscarUltimasinfluencer(req, res);
});

router.get("/tempo-real-influencer/:idUsuario", function (req, res) {
    medidaController.buscarinfluencerEmTempoReal(req, res);
})

module.exports = router;