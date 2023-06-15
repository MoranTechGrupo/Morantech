function simule() {

  var qtdMorangoKg = Number(input_qtdMorangoKg.value);
  var precoMorangoKg = Number(input_valorMorango.value);
  var porcDesperdicioCliente = Number(input_porcEstimadaCliente.value);
  var porcDesperdicioMedia = "";

  if (porcDesperdicioCliente != "") {
    porcDesperdicioMedia = Number(porcDesperdicioCliente);
  }

  if (qtdMorangoKg == "" || precoMorangoKg == "" || porcDesperdicioCliente == "") {
    swal("Ops", "Por favor, preencha todos os campos!", "error");
  } else if (qtdMorangoKg <= 0) {
    swal("Ops", "Por favor, digite uma quantidade de Kg válida!", "error");
  } else if (precoMorangoKg <= 0) {
    swal("Ops", "Por favor, digite um preço válido!", "error");
  } else if (porcDesperdicioMedia <= 5 || porcDesperdicioMedia > 100) {
    swal("Ops", "Por favor, digite uma porcentagem válida!", "error");
  }

  else {
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
}
  
  
 
