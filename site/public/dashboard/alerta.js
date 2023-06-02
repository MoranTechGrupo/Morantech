var alertas = [];

function obterdados(idTransporte) {
  fetch(`/medidas/tempo-real/${idTransporte}`)
    .then((resposta) => {
      if (resposta.ok) {
        resposta.json().then((respostaJSON) => {
          console.log(`Dados recebidos: ${JSON.stringify(respostaJSON)}`);

          alertar(respostaJSON, idTransporte);
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(
        `Erro na obtenção dos dados do caminhao p/ gráfico: ${error.message}`
      );
    });
}

function alertar(resposta, idTransporte) {
  var temp = resposta[0].temperatura;
  var umid = resposta[0].umidade;

  console.log(idTransporte === resposta[0].fkSensor);

  var grauDeAvisoTemp = "";
  var grauDeAvisoUmid = "";

  var limitesTemp = {
    muito_quente: 12.1,
    quente: 9.1,
    ideal: 4,
    frio: 3.9,
    muito_frio: 0,
  };

  var limitesUmid = {
    muito_umido: 96,
    umido: 95,
    ideal: 91,
    seco: 90.9,
    muito_seco: 90,
  };

  var classe_temperatura = "cor-alerta";
  var classe_umidade = "cor-alerta";

  // ALERTAS DE TEMPERATURA
  if (temp >= limitesTemp.muito_quente) {
    classe_temperatura = "cor-alerta perigo-quente";
    grauDeAvisoTemp = "perigo quente";
    grauDeAvisoCor = "cor-alerta perigo-quente";
    exibirAlertaTemp(temp, idTransporte, grauDeAvisoTemp, grauDeAvisoCor);
  } else if (temp < limitesTemp.muito_quente && temp >= limitesTemp.quente) {
    classe_temperatura = "cor-alerta alerta-quente";
    grauDeAvisoTemp = "alerta quente";
    grauDeAvisoCor = "cor-alerta alerta-quente";
    exibirAlertaTemp(temp, idTransporte, grauDeAvisoTemp, grauDeAvisoCor);
  } else if (temp <= limitesTemp.frio && temp > limitesTemp.muito_frio) {
    classe_temperatura = "cor-alerta alerta-frio";
    grauDeAvisoTemp = "alerta frio";
    grauDeAvisoCor = "cor-alerta alerta-frio";
    exibirAlertaTemp(temp, idTransporte, grauDeAvisoTemp, grauDeAvisoCor);
  } else if (temp <= limitesTemp.muito_frio) {
    classe_temperatura = "cor-alerta perigo-frio";
    grauDeAvisoTemp = "perigo frio";
    grauDeAvisoCor = "cor-alerta perigo-frio";
    exibirAlertaTemp(temp, idTransporte, grauDeAvisoTemp, grauDeAvisoCor);
  }
  // ALERTAS DE UMIDADE
  if (umid >= limitesUmid.muito_umido) {
    classe_umidade = "cor-alerta perigo-quente";
    grauDeAvisoUmid = "perigo úmido";
    grauDeAvisoCor = "cor-alerta perigo-quente";
    exibirAlertaUmid(umid, idTransporte, grauDeAvisoUmid, grauDeAvisoCor);
  } else if (umid < limitesUmid.muito_umido && umid >= limitesUmid.umido) {
    classe_umidade = "cor-alerta alerta-quente";
    grauDeAvisoUmid = "alerta úmido";
    grauDeAvisoCor = "cor-alerta alerta-quente";
    exibirAlertaUmid(umid, idTransporte, grauDeAvisoUmid, grauDeAvisoCor);
  } else if (umid <= limitesUmid.seco && umid > limitesUmid.muito_seco) {
    classe_umidade = "cor-alerta alerta-frio";
    grauDeAvisoUmid = "alerta seco";
    grauDeAvisoCor = "cor-alerta alerta-frio";
    exibirAlertaUmid(umid, idTransporte, grauDeAvisoUmid, grauDeAvisoCor);
  } else if (umid <= limitesUmid.muito_seco) {
    classe_umidade = "cor-alerta perigo-frio";
    grauDeAvisoUmid = "perigo seco";
    grauDeAvisoCor = "cor-alerta perigo-frio";
    exibirAlertaUmid(umid, idTransporte, grauDeAvisoUmid, grauDeAvisoCor);
  }

  var card;

  if (idTransporte == 1) {
    temp_caminhao_1.innerHTML = temp + "°C";
    card = card_1;
  } else if (idTransporte == 2) {
    temp_caminhao_2.innerHTML = temp + "°C";
    card = card_2;
  } else if (idTransporte == 3) {
    temp_caminhao_3.innerHTML = temp + "°C";
    card = card_3;
  } else if (idTransporte == 4) {
    temp_caminhao_4.innerHTML = temp + "°C";
    card = card_4;
  } else if (idTransporte == 5) {
    temp_caminhao_5.innerHTML = temp + "°C";
    card = card_5;
  }

  card.className = classe_temperatura;
  card.className = classe_umidade;
}

function exibirAlertaTemp(temp, idTransporte, grauDeAvisoTemp, grauDeAvisoCor) {
  alertas.push({ temp, idTransporte, grauDeAvisoTemp, grauDeAvisoCor });

  exibirCards("temperatura");

  // Dentro da div com classe grauDeAvisoCor há um caractere "invisível",
  // que pode ser inserido clicando com o seu teclado em alt+255 ou pelo código adicionado acima.
}

function exibirAlertaUmid(umid, idTransporte, grauDeAvisoUmid, grauDeAvisoCor) {
  alertas.push({ umid, idTransporte, grauDeAvisoUmid, grauDeAvisoCor });

  exibirCards("umidade");

  // Dentro da div com classe grauDeAvisoCor há um caractere "invisível",
  // que pode ser inserido clicando com o seu teclado em alt+255 ou pelo código adicionado acima.
}

function exibirCards() {
  alerta.innerHTML = "";
  for (var i = 0; i < alertas.length; i++) {
    var mensagem = alertas[i];
    if (mensagem.temp) {
      alerta.innerHTML += transformarEmDivTemp(mensagem);
    } else {
      alerta.innerHTML += transformarEmDivUmid(mensagem);
    }
  }
}

function transformarEmDivTemp({
  idTransporte,
  temp,
  grauDeAvisoTemp,
  grauDeAvisoCor,
}) {
  return `<div class="notificacoes">
  <div class="${grauDeAvisoCor}">&#12644;</div>
    <div class="coluna">
      <div class="content">
        <h4>Caminhão ${idTransporte} está em estado de ${grauDeAvisoTemp}!<h4>
      </div>
    <small>Temperatura: ${temp}°C</small>  
  </div>
  </div>`;
}

function transformarEmDivUmid({
  idTransporte,
  umid,
  grauDeAvisoUmid,
  grauDeAvisoCor,
}) {
    return `<div class="notificacoes">
    <div class="${grauDeAvisoCor}">&#12644;</div>
    <div class="coluna">
      <div class="content">
        <h4>Caminhão ${idTransporte} está em estado de ${grauDeAvisoUmid}!<h4>
      </div>
    <small>Umidade: ${umid}°C</small>  
  </div>
  </div>`;
}
