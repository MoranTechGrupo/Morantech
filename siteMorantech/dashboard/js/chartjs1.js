// Gráfico caminhão 1
const labels1 = ["12:00", "12:05", "12:10", "12:15", "12:20", "12:25", "12:30", "12:35", "12:40", "12:45"];

const data1 = {
  labels: labels1,
  datasets: [
    {
      label: "Temperatura (°C)",
      backgroundColor: "#ff6384",
      borderColor: "#ff6384",
      data: [21, 24, 28, 23, 20, 17, 15, 12, 8, 7],
      yAxisID: 'y_temp'
    },
    {
      label: "Umidade (%)",
      backgroundColor: "#36a2eb",
      borderColor: "#36a2eb",
      data: [80, 73, 66, 76, 80, 83, 86, 89, 91, 92],
      yAxisID: 'y_umid'
    },
  ],
};

const config1 = {
  type: "line",
  data: data1,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Caminhão 1 (ABC1234)",
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
};

const myChart1 = new Chart(document.getElementById("myChart1"), config1);

// Gráfico caminhão 2
const labels2 = ["12:00", "12:05", "12:10", "12:15", "12:20", "12:25", "12:30", "12:35", "12:40", "12:45"];

const data2 = {
  labels: labels2,
  datasets: [
    {
      label: "Temperatura (°C)",
      backgroundColor: "#ff6384",
      borderColor: "#ff6384",
      data: [15, 11, 8, 5, 2, 0, 3, 6, 8, 11],
      yAxisID: 'y_temp2'
    },
    {
      label: "Umidade (%)",
      backgroundColor: "#36a2eb",
      borderColor: "#36a2eb",
      data: [82, 90, 92, 95, 91, 87, 84, 89, 91, 91],
      yAxisID: 'y_umid2'
    },
  ],
};

const config2 = {
  type: "line",
  data: data2,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Caminhão 2 (DEF1234)",
      },
    },
    scales: {
      y_umid2: {
        type: 'linear',
        position: 'right',
        ticks: {
          max: 95,
          min: 90
        }
      },
      y_temp2: {
        type: 'linear',
        position: 'left',
        ticks: {
          max: 12,
          min: 0
        }
      }
    }
  }
};

const myChart2 = new Chart(document.getElementById("myChart2"), config2);

// Gráfico caminhão 3
const labels3 = ["12:00", "12:05", "12:10", "12:15", "12:20", "12:25", "12:30", "12:35", "12:40", "12:45"];

const data3 = {
  labels: labels3,
  datasets: [
    {
      label: "Temperatura",
      backgroundColor: "#ff6384",
      borderColor: "#ff6384",
      data: [4, 3, 5, 7, 8, 10, 12, 14, 16, 17],
      yAxisID: 'y_temp'
    },
    {
      label: "Umidade",
      backgroundColor: "#36a2eb",
      borderColor: "#36a2eb",
      data: [95, 96, 95, 93, 93, 91, 89, 85, 82, 79],
      yAxisID: 'y_umid'
    },
  ],
};

const config3 = {
  type: "line",
  data: data3,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Caminhão 3 (GHI1234)",
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
  },
};

const myChart3 = new Chart(document.getElementById("myChart3"), config3);

// Gráfico caminhão 4
const labels4 = ["12:00", "12:05", "12:10", "12:15", "12:20", "12:25", "12:30", "12:35", "12:40", "12:45"];

const data4 = {
  labels: labels4,
  datasets: [
    {
      label: "Temperatura",
      backgroundColor: "#ff6384",
      borderColor: "#ff6384",
      data: [18, 22, 20, 17, 15, 12, 9, 11, 14, 15],
      yAxisID: 'y_temp'

    },
    {
      label: "Umidade",
      backgroundColor: "#36a2eb",
      borderColor: "#36a2eb",
      data: [77, 73, 76, 80, 85, 89, 91, 89, 85, 83],
      yAxisID: 'y_umid'
    },
  ],
};

const config4 = {
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
        text: "Caminhão 4 (JKL1234)",
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
  },
};

const myChart4 = new Chart(document.getElementById("myChart4"), config4);

// Gráfico caminhão 5
const labels5 = ["12:00", "12:05", "12:10", "12:15", "12:20", "12:25", "12:30", "12:35", "12:40", "12:45"];

const data5 = {
  labels: labels5,
  datasets: [
    {
      label: "Temperatura",
      backgroundColor: "#ff6384",
      borderColor: "#ff6384",
      data: [7, 12, 13, 17, 20, 15, 13, 12, 9, 4],
      yAxisID: 'y_temp'
    },
    {
      label: "Umidade",
      backgroundColor: "#36a2eb",
      borderColor: "#36a2eb",
      data: [92, 88, 85, 80, 76, 83, 86, 89, 92, 95],
      yAxisID: 'y_umid'
    },
  ],
};

const config5 = {
  type: "line",
  data: data5,
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
  },
};

const myChart5 = new Chart(document.getElementById("myChart5"), config5);
