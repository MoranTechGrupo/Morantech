var enderecoModel = require("../models/enderecoModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA enderecoController");
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
    var idEmpresa = req.body.idEmpresaServer;



    if (rua == undefined) {
        res.status(400).send("Sua rua está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Seu bairro está indefinida!");
    } else {

        enderecoModel.entrar(idEmpresa)
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

function cadastrarEndereco(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idEmpresa = req.body.idEmpresaServer;
    var rua = req.body.ruaServer;
    var bairro = req.body.bairroServer;
    var numero = req.body.numeroServer;
    var cidade = req.body.cidadeServer;
    var UF = req.body.UFServer;
    var caixaPostal = req.body.caixaPostalServer;



    // Faça as validações dos valores
    if (idEmpresa == undefined) {
        res.status(400).send("Seu rua está undefined!");
    } else if (rua == undefined) {
        res.status(400).send("Seu rua está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Seu rua está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu rua está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Seu rua está undefined!");
    } else if (UF == undefined) {
        res.status(400).send("Seu rua está undefined!");
    } else if (caixaPostal == undefined) {
        res.status(400).send("Seu rua está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo empresaModel.js


        // empresaModel.cadastrar(nome ,cnpj , qtdSensor,telefone, email, senha)
        enderecoModel.cadastrarEndereço(idEmpresa, rua, bairro, numero, cidade, UF, caixaPostal)
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
    cadastrarEndereco,
    listar,
    testar
}