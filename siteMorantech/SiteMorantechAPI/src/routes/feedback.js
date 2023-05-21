var express = require("express");
var router = express.Router();

var feedbackController = require("../controllers/feedbackController");

router.get("/", function (req, res) {
    feedbackController.testar(req, res);
});

router.get("/listar", function (req, res) {
    feedbackController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de empresaController.js
router.post("/cadastrar", function (req, res) {
    feedbackController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    feedbackController.entrar(req, res);
});

module.exports = router;