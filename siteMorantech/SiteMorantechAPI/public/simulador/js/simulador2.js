


function simule() {

  var qtdMorangoKg = Number(input_qtdMorangoKg.value);
  var precoMorangoKg = Number(input_valorMorango.value);
  var porcDesperdicioCliente = Number(input_porcEstimadaCliente.value);
  var porcDesperdicioMedia = "";

  if (porcDesperdicioCliente != "") {
    porcDesperdicioMedia = Number(porcDesperdicioCliente);
  }

  if (qtdMorangoKg > 0 && precoMorangoKg > 0 && (porcDesperdicioCliente > 5 && porcDesperdicioCliente < 100)) {
      // CÁLCULO SEM MORANTECH
  var precoTotalMorango = qtdMorangoKg * precoMorangoKg;
  var perdaKgMorango = qtdMorangoKg * (porcDesperdicioMedia / 100);
  var perdaPorcRenda = precoTotalMorango * (porcDesperdicioMedia / 100);
  var lucroTotal = precoTotalMorango - perdaPorcRenda;

  // CÁLCULO COM MORANTECH
  var economiaKgMorango = perdaKgMorango - (qtdMorangoKg * 0.05);
  var lucroTotalMoranthec = precoTotalMorango * 0.95;
  var economiaTotalMoranthec = lucroTotalMoranthec - lucroTotal;

  document.getElementById("resultado").classList.remove("hidden")

  resultado.innerHTML += `<style> .result {
    background-color: #fff;
   }
   h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 25px;
   }
    </style>`
  
  semMoranT.innerHTML += `<style>
  .semMoran {
   padding: 8px;
    background: #f97b90de;
    border-radius: 20px;
  }
  </style>
  
  <h4>SEM A TECNOLOGIA MORANTECH</h4>
Haverá uma perda de <b style="color: red">${perdaKgMorango}Kg</b> de morango; <br>
Isso representa <b style="color: red">R$ ${perdaPorcRenda}</b> perdidos; <br>
Ao final do transporte receberá no total <b style="color: red">R$ ${lucroTotal}</b>
.`;

comMoranT.innerHTML += `<style>
.comMoran {
  padding: 8px;
  background: #84fb51ca;
  border-radius: 20px;
}
</style>
<h4>COM A TECNOLOGIA MORANTECH</h4> 
<b style="color: green">${economiaKgMorango}kg</b> de morango vão deixar de ser perdidos; <br>
Vai haver um lucro de <b style="color: green">R$ ${economiaTotalMoranthec}</b>; <br>
Ao final do transporte receberá no total um lucro de <b style="color: green">R$ ${lucroTotalMoranthec}</b>.`;
}
  if (qtdMorangoKg <= 0) {
    alert("Por favor, digite uma quantidade de Kg válida!");
  }

   if (precoMorangoKg <= 0) {
    alert("Por favor, digite um preço válido!");
  }

    if (porcDesperdicioMedia <= 5) {
    alert("Por favor, digite uma porcentagem válida!");
  }

   if (porcDesperdicioMedia > 100) {
    alert("Por favor, digite uma porcentagem válida!");
  }
  }
  
  
 
