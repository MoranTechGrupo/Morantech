const labels6 = ["12:00", "12:05", "12:10", "12:15", "12:20", "12:25", "12:30", "12:35", "12:40", "12:45"];

const data6 = {
  labels: labels6,
  datasets: [
    {
      label: "Temperatura",
      backgroundColor: "#ff6384",
      borderColor: "#ff6384",
      data: [7, 12, 13, 17, 20, 15, 13, 12, 9, 4],
      yAxisID: 'y_temp'
    },
  ],
};
 
const config6 = {
  type: "line",
  data: data6,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Caminhão 5 (MNO1234)",
      },
    },
    scales: {
      y_temp: {
        type: 'linear',
        position: 'left',
        ticks: {
          max: 12,
          min: 0
      },
      }
    }
  }
  };
const myChart1 = new Chart(document.getElementById("temperatura_historico"), config6);

const data7 = {
  labels: labels7,
  datasets: [
    {
      label: "Umidade",
      backgroundColor: "#36a2eb",
      borderColor: "#36a2eb",
      data: [92, 88, 85, 80, 76, 83, 86, 89, 92, 95],
      yAxisID: 'y_umid'
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
        text: "Caminhão 5 (MNO1234)",
      },
    },
    scales: {
      y_umid: {
        type: 'linear',
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
  },
};
const myChart2 = new Chart(document.getElementById("umidade_historico"), config7);
 
 
