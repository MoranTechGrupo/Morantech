var express = require("express");
var router = express.Router();

var LoginUsuarioController = require("../controllers/LoginUsuarioController");

router.get("/", function (req, res) {
    LoginUsuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    LoginUsuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de empresaController.js
router.post("/cadastrar", function (req, res) {
    LoginUsuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    LoginUsuarioController.entrar(req, res);
});

module.exports = router;