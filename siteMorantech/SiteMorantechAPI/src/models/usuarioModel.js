var database = require("../database/config");

function listar() {
    console.log("ACESSEI A EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE senha = '${senha}' AND email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao

function cadastrar(nome, cargo, email, senha) {
    console.log("ACESSEI EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, cargo);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
<<<<<<< HEAD
    /* var instrucao = `
        INSERT INTO usuario (cargo, nome, email, senha) VALUES ('${cargo}', ${nome}','${email}', '${senha}');
        `; */
        var instrucao = `
        INSERT INTO usuario (fkEmpUs, cargo, nome, email, senha) VALUES ('(SELECT idEmpresa FROM Empresa JOIN usuario ON fkEmpUs = idEmpresa WHERE Empresa.nome = '${nomeEmpresa}')','${cargo}', '${nome}','${email}', '${senha}');
    `; 
=======
    var instrucao = `
        INSERT INTO usuario ( fkEmpUs,cargo, nome, email,senha) VALUES (${fkEmp},'funcionario','${nome}','${email}','${senha}');
    `;
>>>>>>> 6323ce9634a9acb3b36cf91ad07885477c8125f8
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
}; 