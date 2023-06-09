var database = require("../database/config");

function buscarUltimasMedidas(idTransporte, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select 
        temperatura as temperatura, 
        umidade as umidade,
        dataHora,
                        DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico
                    from dadosSensor
                    where fkSensor = ${idTransporte}
                    order by idDados desc limit ${limite_linhas}`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        temperatura as temperatura, 
        umidade as umidade,
        dataHora,
                        DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico
                    from dadosSensor
                    where fkSensor = ${idTransporte}
                    order by idDados desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idTransporte) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select 
        temperatura as temperatura, 
        umidade as umidade,
                        DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico, 
                        fkSensor
                        from dadosSensor where fkSensor = ${idTransporte} 
                    order by idDados desc limit 1`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        temperatura as temperatura, 
        umidade as umidade,
                        DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico, 
                        fkSensor
                        from dadosSensor where fkSensor = ${idTransporte} 
                    order by idDados desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
