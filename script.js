const ctx = document.getElementById('myChart').getContext('2d');

const meses = ['January', 'February', 'March', 'April', 'May', 'June'];
const datosOriginales = [12, 19, 3, 5, 2, 3];

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: meses,
        datasets: [{
            label: 'Sample Data',
            data: datosOriginales,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Filtro de meses
document.getElementById('meses').addEventListener('change', function() {
  const valorSeleccionado = this.value;

  if (valorSeleccionado === 'all') {
    myChart.data.labels = meses;
    myChart.data.datasets[0].data = datosOriginales;
  } else {
    const index = meses.indexOf(valorSeleccionado);
    if (index !== -1) {
      myChart.data.labels = [meses[index]];
      myChart.data.datasets[0].data = [datosOriginales[index]];
    }
  }

  myChart.update();
});

const localidades = ['Posadas', 'Oberá', 'Eldorado'];
const datosOriginal = [120, 80, 65]; // ejemplo: cantidad de técnicos

let chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: localidades,
    datasets: [{
      label: 'Cantidad de técnicos',
      data: datosOriginal,
      backgroundColor: ['#007bff', '#17a2b8', '#28a745'],
      borderColor: '#333',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function filtrar(provincia) {
  if (provincia === 'Todos') {
    chart.data.labels = localidades;
    chart.data.datasets[0].data = datosOriginal;
  } else {
    const index = localidades.indexOf(provincia);
    chart.data.labels = [provincia];
    chart.data.datasets[0].data = [datosOriginal[index]];
  }
  chart.update();
}
