const url = 'https://api.covid19api.com/total/country/peru'
var confirmados = []
var     activos = []
var     muertos = []
var recuperados = []
var fecha =[]


fetch(url)
.then(response => response.json() )
.then(data => {

    data.forEach( function(valor, indice, array) {
        confirmados.push(valor.Confirmed) 
        activos.push(valor.Active) 
        muertos.push(valor.Deaths) 
        recuperados.push(valor.Recovered) 
        fecha.push(new Date(valor.Date).toLocaleDateString())
        
      
    })

   
    renderCharts();
})
.catch(err => console.log(err))

function totalCasesChart(ctx){
  
  
  var miGrafica2 = new Chart(ctx, {
              type: 'line',
              data: {
                  labels: fecha,
                  datasets: [
                             {
                                  label: 'ACTIVOS',
                                  data: activos,
                                  borderColor: 'rgb(75, 192, 192)',
                                  tension: 0.1
                              },
                              {
                                  label: 'CONFIRMADOS',
                                  data: confirmados,
                                  borderColor: 'rgb(50, 205, 50)',
                                  tension: 0.1
                              },
                              {
                                  label: 'MUERTOS',
                                  data: muertos,
                                  borderColor: 'rgb(255, 0, 0)',
                                  tension: 0.1
                              },
                              {
                                  label: 'RECUPERADOS',
                                  data: recuperados,
                                  borderColor: 'rgb(255, 165, 0)',
                                  tension: 0.1
                              }
                            ],
                  
                  
                  
              },
              options: {
                scales: {
                    x: {
                      display: false,
                    }
                },
                      plugins: {
                          title: {
                                display: true,                            
                                text: 'Casos COVID-19 en el peru al 2020-07-15',
                                align: 'start',
                                weight: 'bold',
                                font: {
                                  size : 30,
                                  family: 'times new roman'
                                },
                                padding: {
                                        top: 10,
                                        bottom: 30
                                    }
                                
                              },
                              legend:{
                                  position: 'bottom',
                                  labels: {
                                      padding: 20,
                                      boxWidth: 15,
                                      fontFamily: 'system-ui',
                                      fontColor: 'black',
                                  }
                              },
                              tooltip: {
                                backgroundColor: '#rgb(255, 165, 0)',
                                titleFontSize: 20,
                                xPadding: 20,
                                yPadding: 20,
                                bodyFontSize: 15,
                                bodySpacing: 10
                              }
                              
                          },
                          
                      
                  elements: {
                              line: {
                                  borderWidth: 8,
                                  fill: false,
                              },
                              point: {
                                  backgroundColor: 'rgb(255, 255, 255)',
                                  hoverRadius: 8,
                                  hoverBorderWidth: 4,
                                  hitRadius: 4
                              }
                        }

              }
             
      })
}

function renderCharts() {
  var ctx = document.getElementById('grafica2').getContext('2d');
  totalCasesChart(ctx)
}

