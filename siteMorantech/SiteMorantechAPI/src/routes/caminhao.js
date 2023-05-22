var express = require("express");
var router = express.Router();

var caminhaoController = require("../controllers/caminhaoController");

router.get("/", function (req, res) {
    caminhaoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    caminhaoController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de empresaController.js
router.post("/cadastrar", function (req, res) {
    caminhaoController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    caminhaoController.entrar(req, res);
});

module.exports = router;