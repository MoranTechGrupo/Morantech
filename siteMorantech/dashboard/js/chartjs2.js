/* CHART JS TRANSPORTE */

 // Gráfico de Linha
 const labels6 = [ "12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00"];

 const data6 = {
   labels: labels6,
   datasets: [
     {
       label: "Temperatura Média",
       backgroundColor: "#ff6384",
       borderColor: "#ff6384",
       data: [12, 4, 7, 8, 6, 3, 9, 10, 11, 8, 12, 11]
     },
     {
       label: "Umidade Média",
       backgroundColor: "#36a2eb",
       borderColor: "#36a2eb",
       data: [90, 89, 93, 87, 88, 82, 90, 91, 95, 89, 90, 91],
     },
   ],
 };

 const config6 = {
   type: "line",
   data: data4,
   options: {
     responsive: true,
     plugins: {
       legend: {
         position: "top",
       },
       title: {
         display: true,
         text: "Temperatura e umidade em tempo real",
       },
     },
   },
 };

 const myChart6 = new Chart(document.getElementById("myChart6"), config6);




 // Gráfico de Linha
 const labels7 = [ "12:00", "12:20", "12:40", "13:00", "13:20", "13:40", "14:00"];

 const data7 = {
   labels: labels7,
   datasets: [
     {
       label: "Temperatura Média",
       backgroundColor: "#ff6384",
       borderColor: "#ff6384",
       data: [12, 4, 7, 8, 6, 3, 9, 10, 11, 8, 12, 11]
     },
     {
       label: "Umidade Média",
       backgroundColor: "#36a2eb",
       borderColor: "#36a2eb",
       data: [90, 89, 93, 87, 88, 82, 90, 91, 95, 89, 90, 91],
     },
   ],
 };

 const config7 = {
   type: "line",
   data: data7,
   options: {
     responsive: true,
     plugins: {
       legend: {
         position: "top",
       },
       title: {
         display: true,
         text: "Temperatura e umidade em tempo real",
       },
     },
   },
 };

 const myChart7 = new Chart(document.getElementById("myChart7"), config7);



 /* CLIMOGRAMA */

 const canvas = document.getElementById('Chart_climograma');
 const mixedChart = new Chart(canvas, {
   data: {
     labels: ['12:00', '12:20', '12:40', '13:00', '13:20', '13:40', '14:00'],
     datasets: [{
       type: 'line',
       tension: 0.4, /* curvatura da linha */
       label: 'Umidade (%)',
       data: [90, 91.5, 92, 95, 97, 91.4, 92],
       backgroundColor: '#E6005A',
       borderColor: '#E6005A',
       yAxisID: 'y_umid'
     }, {
       type: 'bar',
       label: 'Temperatura (°C)',
       data: [0, 2, 3, 10, 14, 10, 5],
       backgroundColor: 'rgba(54,162, 235, 0.2)',
       borderColor: 'rgba(54,162, 235, 0.2)',
       yAxisID: 'y_temp' /* configurar o eixo y */
     }],
   },
   options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Temperatura e Umidade em tempo real",
      },
    },
     scales: {
       y_umid: {
         type: 'linear',
         position: 'right',
         ticks: {  
           max: 95,
           min: 90
         }
       },
       y_temp: {
         type: 'linear',
         position: 'left',
         ticks: {  
           max: 12,
           min: 0
         }
       }
     }
   }
 });
