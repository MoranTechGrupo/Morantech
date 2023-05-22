var caminhaoModel = require("../models/caminhaoModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA CaminhaoController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    caminhaoModel.listar()
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
    var placa = req.body.placaServer;
    var modelo = req.body.modeloServer;

    if (placa == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (modelo == undefined) {
        res.status(400).send("Sua cnpj está indefinida!");
    } else {

        caminhaoModel.entrar(placa, modelo)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("placa e/ou modelo inválido(s)");
                    } else {
                        res.status(403).send("Mais de um caminhao com a mesma placa e modelo!");
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
    var placa = req.body.caminhao_placaServer;
    var modelo = req.body.caminhao_modeloServer;
    var fkEmp = req.body.idEmpresaServer;



    // Faça as validações dos valores
    if (placa == undefined) {
        res.status(400).send("Sua placa está undefined!");
    } else if (modelo == undefined) {
        res.status(400).send("modelo está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo empresaModel.js


        // empresaModel.cadastrar(nome ,cnpj , qtdSensor,telefone, email, senha)
        caminhaoModel.cadastrar(placa, modelo, fkEmp)
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