var enderecoModel = require("../models/enderecoModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA empresaController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    enderecoModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var senha = req.body.senhaServer;
    var email = req.body.emailServer;

    if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está indefinida!");
    } else {

        enderecoModel.entrar(senha, email)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um empresa com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idEmpresaServer;
    var rua = req.body.ruaServer;
    var bairro = req.body.bairroServer;
    var numero = req.body.numeroServer;
    var cidade = req.body.cidadeServer;
    var UF  = req.body.UFServer;
    var caixaP  = req.body.caixaPostalServer;

    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu cargo está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (rua == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo empresaModel.js

        enderecoModel.cadastrar(id, rua, bairro, numero,cidade,UF,caixaP)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar
}