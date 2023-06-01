var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/ultimas-influencer/:idAquario", function (req, res) {
    medidaController.buscarUltimasinfluencer(req, res);
});

router.get("/tempo-real-influencer/:idAquario", function (req, res) {
    medidaController.buscarinfluencerEmTempoReal(req, res);
})

module.exports = router;