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
  var grauDeAvisoCorTemp = "";
  var grauDeAvisoCorUmid = "";

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

  var classe_temperatura = "bolinha-cor";
  var classe_umidade = "bolinha-cor";

  // ALERTAS DE TEMPERATURA
  if (temp >= limitesTemp.muito_quente) {
    grauDeAvisoTemp = "perigo quente";
    grauDeAvisoCorTemp = "perigo-quente";
    exibirAlertaTemp(temp, idTransporte, grauDeAvisoTemp, grauDeAvisoCorTemp);
  } else if (temp < limitesTemp.muito_quente && temp >= limitesTemp.quente) {
    grauDeAvisoTemp = "alerta quente";
    grauDeAvisoCorTemp = "alerta-quente";
    exibirAlertaTemp(temp, idTransporte, grauDeAvisoTemp, grauDeAvisoCorTemp);
  } else if (temp < limitesTemp.quente && temp > limitesTemp.frio) {
    grauDeAvisoCorTemp = "ideal";
  } else if (temp <= limitesTemp.frio && temp > limitesTemp.muito_frio) {
    grauDeAvisoTemp = "alerta frio";
    grauDeAvisoCorTemp = "alerta-frio";
    exibirAlertaTemp(temp, idTransporte, grauDeAvisoTemp, grauDeAvisoCorTemp);
  } else if (temp <= limitesTemp.muito_frio) {
    grauDeAvisoTemp = "perigo frio";
    grauDeAvisoCorTemp = "perigo-frio";
    exibirAlertaTemp(temp, idTransporte, grauDeAvisoTemp, grauDeAvisoCorTemp);
  }
  // ALERTAS DE UMIDADE
  if (umid >= limitesUmid.muito_umido) {
    grauDeAvisoUmid = "perigo úmido";
    grauDeAvisoCorUmid = "perigo-umido";
    exibirAlertaUmid(umid, idTransporte, grauDeAvisoUmid, grauDeAvisoCorUmid);
  } else if (umid < limitesUmid.muito_umido && umid >= limitesUmid.umido) {
    grauDeAvisoUmid = "alerta úmido";
    grauDeAvisoCorUmid = "alerta-umido";
    exibirAlertaUmid(umid, idTransporte, grauDeAvisoUmid, grauDeAvisoCorUmid);
  } else if (umid < limitesUmid.umido && umid > limitesUmid.seco) {
    grauDeAvisoCorUmid = "ideal";
  } else if (umid <= limitesUmid.seco && umid > limitesUmid.muito_seco) {
    grauDeAvisoUmid = "alerta seco";
    grauDeAvisoCorUmid = "alerta-seco";
    exibirAlertaUmid(umid, idTransporte, grauDeAvisoUmid, grauDeAvisoCorUmid);
  } else if (umid <= limitesUmid.muito_seco) {
    grauDeAvisoUmid = "perigo seco";
    grauDeAvisoCorUmid = "perigo-seco";
    exibirAlertaUmid(umid, idTransporte, grauDeAvisoUmid, grauDeAvisoCorUmid);
  }

  var card;

  if (idTransporte == 1) {
    temp_caminhao_1.innerHTML = temp + "°C";
    temp_caminhao_1.classList.add(grauDeAvisoCorTemp);
    umid_caminhao_1.innerHTML = umid + "%";
    umid_caminhao_1.classList.add(grauDeAvisoCorUmid);
    card = card_1;
  } else if (idTransporte == 2) {
    temp_caminhao_2.innerHTML = temp + "°C";
    temp_caminhao_2.classList.add(grauDeAvisoCorTemp);
    umid_caminhao_2.innerHTML = umid + "%";
    umid_caminhao_2.classList.add(grauDeAvisoCorUmid);
    card = card_2;
  } else if (idTransporte == 3) {
    temp_caminhao_3.innerHTML = temp + "°C";
    temp_caminhao_3.classList.add(grauDeAvisoCorTemp);
    umid_caminhao_3.innerHTML = umid + "%";
    umid_caminhao_3.classList.add(grauDeAvisoCorUmid);
    card = card_3;
  } else if (idTransporte == 4) {
    temp_caminhao_4.innerHTML = temp + "°C";
    temp_caminhao_4.classList.add(grauDeAvisoCorTemp);
    umid_caminhao_4.innerHTML = umid + "%";
    umid_caminhao_4.classList.add(grauDeAvisoCorUmid);
    card = card_4;
  } else if (idTransporte == 5) {
    temp_caminhao_5.innerHTML = temp + "°C";
    temp_caminhao_5.classList.add(grauDeAvisoCorTemp);
    umid_caminhao_5.innerHTML = umid + "%";
    umid_caminhao_5.classList.add(grauDeAvisoCorUmid);
    card = card_5;
  }

  card.className = classe_temperatura;
  card.className = classe_umidade;
}

function exibirAlertaTemp(temp, idTransporte, grauDeAvisoTemp, grauDeAvisoCorTemp) {
  alertas.push({ temp, idTransporte, grauDeAvisoTemp, grauDeAvisoCorTemp });

  exibirCards("temperatura");

  // Dentro da div com classe grauDeAvisoCor há um caractere "invisível",
  // que pode ser inserido clicando com o seu teclado em alt+255 ou pelo código adicionado acima.
}

function exibirAlertaUmid(umid, idTransporte, grauDeAvisoUmid, grauDeAvisoCorUmid) {
  alertas.push({ umid, idTransporte, grauDeAvisoUmid, grauDeAvisoCorUmid });

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
  grauDeAvisoCorTemp,
}) {
  return `<div class="notificacoes">
  <div class="bolinha-cor ${grauDeAvisoCorTemp}"></div>
    <div class="coluna">
      <h5>Caminhão ${idTransporte} está em estado de ${grauDeAvisoTemp}!</h5>
    <h5>Temperatura: ${temp}°C</h5>  
  </div>
</div>`;;
}

function transformarEmDivUmid({
  idTransporte,
  umid,
  grauDeAvisoUmid,
  grauDeAvisoCorUmid,
}) {
 return `<div class="notificacoes">
            <div class="bolinha-cor ${grauDeAvisoCorUmid}"></div>
              <div class="coluna">
                <h5>Caminhão ${idTransporte} está em estado de ${grauDeAvisoUmid}!</h5>
              <h5>Umidade: ${umid}%</h5>  
            </div>
          </div>`;
}
