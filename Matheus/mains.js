const ctx = document.getElementById('myChart')

const labels = [
    '03/04/2023  12:00:00',
    '03/04/2023  12:20:00',
    '03/04/2023  12:40:01',
    '03/04/2023  13:00:01',
    '03/04/2023  13:20:02',
    '03/04/2023  13:40:02',
    '03/04/2023  14:00:03'
]
    const data ={
        labels,
        datasets:[{
            data:[23, 22, 25, 5, 5, 6, 6],
            label: " Metrica Temperatura"
        }]
    }

        const config ={
            type: 'line',
            data,
            Options:{
            responsive: true
            }
        };
        const myChart = new myChart(ctx,config);