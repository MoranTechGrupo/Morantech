 /* CLIMOGRAMA */

 const canvas = document.getElementById('Chart_climograma');
 const mixedChart = new Chart(canvas, {
   data: {
     labels: ['12:05', '12:10', '12:15', '12:20', '12:25', '12:30', '12:35', '12:40', '12:45'],
     datasets: [{
       type: 'bar',
       tension: 0.4, /* curvatura da linha */
       label: 'Umidade (%)',
       data: [90, 91.5, 92, 95, 97, 91.4, 92, 90, 93],
       backgroundColor:  'rgba(54,162, 235, 0.3)',
       borderColor: 'rgba(54,162, 235, 0.3)',
       yAxisID: 'y_umid'
     }, {
       type: 'line',
       label: 'Temperatura (°C)',
       data: [0, 2, 3, 10, 14, 10, 5, 8, 10],
       backgroundColor: '#E6005A',
       borderColor: '#E6005A',
       tension: 0.4,
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
        text: "Temperatura e Umidade nas últimas 24h",
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
