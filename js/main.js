var chartColors = {
    blue: "rgb(106, 147, 181)",
    green: 'rgb(97, 123, 114)',
    red: 'rgb(196, 78, 103)',
    yellow: 'rgb(251, 177, 52)',
    purple: 'rgb(151, 109, 127)',
    purple2: 'rgb(103, 97, 116)',
    white: 'rgb(255, 255, 255)',
    bluePoncho: '#0072bb',
    celestePoncho: 'rgba(55,187,237,255)'
  };

var paletaGob = {
  azul: '#0072bb',
  celeste: '#039BE5',
  rojo: '#c62828',
  violeta: '#9284BE',
  amarillo: '#F79525',
  verde: '#6EA100',
  negro: '#555',
  blanco: '#fefefe',

}
  
  
  /*----------CANTIDAD DE SUCESOS------------------*/
  
  const ctx = document.getElementById("eventsNumber").getContext("2d");
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Accidentes", "Incidente grave", "Incidente", "Intervenci\u00f3n"],
      datasets: [{
        label: "Cantidad de Sucesos",
        data: [ 30, 15, 13, 23, 35],
        backgroundColor: [
          paletaGob.azul,
          paletaGob.azul,
          paletaGob.azul,
          paletaGob.azul
        ],
        /* 
        borderColor: [
          paletaGob.celeste,
          paletaGob.celeste,
          paletaGob.celeste,
          paletaGob.celeste
        ], */
        borderWidth: 0,
        hoverBorderWidth: 0
      }] 
    },
    options: {
      responsive: false,
      legend: {
          position: 'bottom',
          align: 'end',
          fontSize: 8,
          labels: {
            fontSize: 15,
            titleFontFamily: "Encode Sans",
            boxWidth: 10,
            fontStyle: 'normal',
            padding: 20,
            usePointStyle: true
          },
          onHover: function(e) {
            e.target.style.cursor = 'pointer';
         }
      },
      hover: {
        onHover: function(e) {
           var point = this.getElementAtEvent(e);
           if (point.length) e.target.style.cursor = 'pointer';
           else e.target.style.cursor = 'default';
        }
     },
      tooltips: {
        intersect	: true,
        position: 'nearest'	,
        titleFontFamily: "Encode Sans",
        titleAlign: 'center',
        titleSpacing: 0,	
        titleMarginBottom: 10,
        bodyFontFamily: "Encode Sans",
        bodyFontSize: 15,
        backgroundColor: 'rgba(0,0,0,0.5)',
        bodyAlign: 'left',
        bodySpacing: 5,
        footerFontFamily: "Encode Sans",
        footerFontSize: 50,
        footerAlign: 'left',
        caretSize: 25,
        cornerRadius: 5,
        xPadding: 20,
        yPadding: 20,
        displayColors: true,
        rtl: true,
        mode: "index",
        intersect: true
      },
    /*
    fondo negro
    
    
    {
      responsive: true,
      legend: {
          position: 'bottom',
      }, */



      scales: {
        yAxes: [{
          barPercentage: 0.5,
            beginAtZero: true
          
          /*,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }*/
        }],
        xAxes: [{
          barPercentage: 0.3,
          ticks: {
            fontSize: 15,
          },
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
      }
    }
  
  });
  


  /*-------------------------OPERACIONES MENSUALES-----------------------------*/
  
  
  const operations = document.getElementById("operations").getContext("2d");
  
  var nonCommercialOperations = {
    label: "Operaciones No Comerciales", 
    data: [50, 10, 20, 24, 9, 6, 8, 8, 17, 15, 25, 21],
    /*lineTension: 0.3,*/
    fill: false,
    lineTension: 0.3,
    backgroundColor: paletaGob.azul,
    borderColor: paletaGob.azul,
    borderCapStyle: 'round',
    
    borderWidth: 3,
    borderDash: [],
    borderDashOffset: 6.0,
    borderJoinStyle: 'miter',
    pointBorderColor: paletaGob.azul,
    pointBackgroundColor: "#fff",
    pointBorderWidth: 5,
    pointHoverRadius: 6,
    pointHoverBackgroundColor: paletaGob.azul,
    pointHoverBorderColor: paletaGob.azul,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
  };
  
  
  var specialicedOperations = {
    label: "Operaciones Especializadas", 
    data: [30, 5, 13, 20, 10,5, 3, 3, 10, 15, 20, 20],
    fill: false,
    lineTension: 0.3,
    backgroundColor: paletaGob.celeste,
    borderColor: paletaGob.celeste,
    borderCapStyle: 'round',
    borderWidth: 3,
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: paletaGob.celeste,
    pointBackgroundColor: "#fff",
    pointBorderWidth: 5,
    pointHoverRadius: 6,
    pointHoverBackgroundColor: paletaGob.celeste,
    pointHoverBorderColor: paletaGob.celeste,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
  };
  
  var comercialAirTransport = {
    label: "Transporte Aéreo Comercial", 
    data: [20, 15, 30, 30, 35, 30, 40, 20, 30, 5, 11, 12],

  fill: false,
  lineTension: 0.3,
  backgroundColor: paletaGob.rojo,
  borderColor: paletaGob.rojo,
  borderCapStyle: 'round',
  borderWidth: 3,
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: paletaGob.rojo,
  pointBackgroundColor: "#fff",
  pointBorderWidth: 5,
  pointHoverRadius: 6,
  pointHoverBackgroundColor: paletaGob.rojo,
  pointHoverBorderColor: paletaGob.rojo,
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  };
  
  var NationallyRegulatedOperations = {
    label: "Operaciones Nacionales Reguladas",
    data: [5, 5, 0, 10, 5, 0, 6, 17, 8, 10, 4, 9],
    fill: false,
    lineTension: 0.3,
    backgroundColor: paletaGob.violeta,
    borderColor: paletaGob.violeta,
    borderCapStyle: 'round',
    borderWidth: 3,
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: paletaGob.violeta,
    pointBackgroundColor: "#fff",
    pointBorderWidth: 5,
    pointHoverRadius: 6,
    pointHoverBackgroundColor: paletaGob.violeta,
    pointHoverBorderColor: paletaGob.violeta,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,

  };

  var illegal = {
    label: "Ilegales",
    data: [0, 0, 0, 0, 8, 0, 7, 7, 3, 0, 2, 1],

    fill: false,
    lineTension: 0.3,
    backgroundColor: paletaGob.amarillo,
    borderColor: paletaGob.amarillo,
    borderCapStyle: 'round',
    borderWidth: 3,
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: paletaGob.amarillo,
    pointBackgroundColor: "#fff",
    pointBorderWidth: 5,
    pointHoverRadius: 6,
    pointHoverBackgroundColor: paletaGob.amarillo,
    pointHoverBorderColor: paletaGob.amarillo,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
  };



  var unknown = {
    label: "Desconocido",
    data: [0, 5, 7, 8, 9, 9, 7, 8, 3, 0, 2, 1],
    fill: false,
    lineTension: 0.3,
    backgroundColor: paletaGob.verde,
    borderColor: paletaGob.verde,
    borderCapStyle: 'round',
    borderWidth: 3,
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: paletaGob.verde,
    pointBackgroundColor: "#fff",
    pointBorderWidth: 5,
    pointHoverRadius: 6,
    pointHoverBackgroundColor: paletaGob.verde,
    pointHoverBorderColor: paletaGob.verde,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
  };
  
  var speedData = {
      labels: ["En", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      datasets:  [nonCommercialOperations, specialicedOperations, comercialAirTransport, NationallyRegulatedOperations, illegal, unknown]
  };
  
  var lineChart = new Chart(operations, {
    type: 'line',
    data: speedData,
    options: {
      layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    },
      responsive: false,
      legend: {
        position: 'bottom',
        textDirection: "rtl",
        labels: {
          fontSize: 15,
          titleFontFamily: "Encode Sans",
          boxWidth: 10,
          fontStyle: 'normal',
          padding: 10,
          usePointStyle: true,
        },
        onHover: function(e) {
          e.target.style.cursor = 'pointer';
       }
    },
    hover: {
      onHover: function(e) {
         var point = this.getElementAtEvent(e);
         if (point.length) e.target.style.cursor = 'pointer';
         else e.target.style.cursor = 'default';
      }
   },  
      tooltips: {
        intersect	: true,
        position: 'nearest'	,
        titleFontFamily: "Encode Sans",
        titleAlign: 'center',
        titleSpacing: 0,	
        titleMarginBottom: 10,
        bodyFontFamily: "Encode Sans",
        bodyFontSize: 15,
        backgroundColor: 'rgba(0,0,0,0.5)',
        bodyAlign: 'left',
        bodySpacing: 5,
        footerFontFamily: "Encode Sans",
        footerFontSize: 50,
        footerAlign: 'left',
        caretSize: 25,
        cornerRadius: 5,
        xPadding: 20,
        yPadding: 20,
        displayColors: true,
        rtl: true,
        mode: "index",
        intersect: true
    },
      scales: {
        yAxes: [{
          barPercentage: 0.5,
          ticks: {
            fontSize: 18,
            beginAtZero: true
          },/*,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }*/
        }],
        xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          },
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
            fontSize: 15
          }   
      }]
      }
    }
  });
  
  /*-----------------------RESUMEN--------------------------- */
  
  var summary = document.getElementById("summary");
  
  var summaryData = {
      labels: [
          "Operaciones No Comerciales",
          "Operaciones especializadas",
          "Transporte aéreo comercial",
          "Operaciones Nacionales Reguladas",
          "Ilegales",
          "Desconocido"
      ],
      datasets: [
          {
              data: [204, 5, 54, 198, 7, 4],
              backgroundColor: [
                paletaGob.azul,
                paletaGob.celeste,
                paletaGob.rojo,
                paletaGob.violeta,
                paletaGob.amarillo,
                paletaGob.verde,
  
              ],
              
              borderColor: [
                paletaGob.azul,
                paletaGob.celeste,
                paletaGob.rojo,
                paletaGob.violeta,
                paletaGob.amarillo,
                paletaGob.verde,
  
              ],
              borderWidth: 3
              
          }]
  };
  
  var pieChart = new Chart(summary, {
    type: 'doughnut',
    data: summaryData,
    options: {
      responsive: false,
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 15,
          titleFontFamily: "Encode Sans",
          boxWidth: 10,
          fontStyle: 'normal',
          padding: 10,
          usePointStyle: true
        },
        onHover: function(e) {
          e.target.style.cursor = 'pointer';
       }
    },
    hover: {
      onHover: function(e) {
         var point = this.getElementAtEvent(e);
         if (point.length) e.target.style.cursor = 'pointer';
         else e.target.style.cursor = 'default';
      }
   },    
      tooltips: {
        intersect	: true,
        position: 'nearest'	,
        titleFontFamily: "Encode Sans",
        titleAlign: 'center',
        titleSpacing: 0,	
        titleMarginBottom: 10,
        bodyFontFamily: "Encode Sans",
        bodyFontSize: 15,
        backgroundColor: 'rgba(0,0,0,0.5)',
        bodyAlign: 'left',
        bodySpacing: 5,
        footerFontFamily: "Encode Sans",
        footerFontSize: 50,
        footerAlign: 'left',
        caretSize: 25,
        cornerRadius: 5,
        xPadding: 20,
        yPadding: 20,
        displayColors: true,
        rtl: true,
        mode: "index",
        intersect: true
      },
    }
  });
     
  /*----------------------------SUCESOS POR FASE DE VUELO--------------------------------------*/
  const faseDeVuelo = document.getElementById("faseDeVuelo").getContext("2d");
  const chart3 = new Chart(faseDeVuelo, {
    type: "bar",
    data: {
      labels: ["Rodaje salida", "Despegue", "Ascenso", "Crucero", "Maniobras", "Aproximación", "Descenso", "Aterrizaje", "Rodaje a plataforma", "Estacionado", "Se desconoce"],
      datasets: [{
        label: "Cantidad de Sucesos",
        data: [ 30, 15, 13, 23, 35, 30, 20, 10, 4, 6, 7, 40],
        backgroundColor: [
          paletaGob.azul,
          paletaGob.azul,
          paletaGob.azul,
          paletaGob.azul,
          paletaGob.azul,
          paletaGob.azul,
          paletaGob.azul,
          paletaGob.azul,
          paletaGob.azul,
          paletaGob.azul,
          paletaGob.azul,
        ],
        /*
        borderColor: [
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)"
        ],
        borderWidth: 3,
        hoverBorderWidth: 0
        */
      }] 
    },
    options: {
      responsive: false,
      legend: {
          position: 'bottom',
          align: 'end',
          fontSize: 8,
          labels: {
            fontSize: 15,
            titleFontFamily: "Encode Sans",
            boxWidth: 10,
            fontStyle: 'normal',
            padding: 0,
            usePointStyle: true,
            /*
            fontColor: chartColors.blue
            */
          },
          onHover: function(e) {
            e.target.style.cursor = 'pointer';
         }
      },
      hover: {
        onHover: function(e) {
           var point = this.getElementAtEvent(e);
           if (point.length) e.target.style.cursor = 'pointer';
           else e.target.style.cursor = 'default';
        }
     },  
      tooltips: {
        intersect	: true,
        position: 'nearest'	,
        titleFontFamily: "Encode Sans",
        titleAlign: 'center',
        titleSpacing: 0,	
        titleMarginBottom: 10,
        bodyFontFamily: "Encode Sans",
        bodyFontSize: 15,
        backgroundColor: 'rgba(0,0,0,0.5)',
        bodyAlign: 'left',
        bodySpacing: 5,
        footerFontFamily: "Encode Sans",
        footerFontSize: 50,
        footerAlign: 'left',
        caretSize: 25,
        cornerRadius: 5,
        xPadding: 20,
        yPadding: 20,
        displayColors: true,
        rtl: true,
        mode: "index",
        intersect: true
      },
    /*
    fondo negro
    
    
    {
      responsive: true,
      legend: {
          position: 'bottom',
      }, */



      scales: {
        yAxes: [{
          barPercentage: 0.5,
            beginAtZero: true
          
          /*,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }*/
        }],
        xAxes: [{
          barPercentage: 0.6,
          ticks: {
            fontSize: 15,
          },
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
      }
    }
  
  });
   
  
  
  /*-----------------DOBLE DOS --------------------------*/
  
  var harmonizedCategory = document.getElementById("harmonizedCategory").getContext("2d");
  
  
  var line1 = {
    label: 'Operaciones No Comerciales',
    data: [0, 0, 15, 15, 47, 10, 30, 0],
    backgroundColor: paletaGob.azul,
    /*
    borderColor: 'rgb(106, 127, 181)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line2 = {
    label: 'Operaciones Nacionales Reguladas',
    data: [0, 0, 0, 0, 0, 0, 0, 0],
    backgroundColor: paletaGob.celeste,
    /*
    borderColor: 'rgba(99, 112, 0)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line3 = {
    label: 'Operaciones Especiales',
    data: [0, 0, 5, 0, 0, 0, 7, 0],
    backgroundColor: paletaGob.rojo,
    /*
    borderColor: 'rgb(97, 103, 114)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line4 = {
    label: 'Ilegales',
    data: [20, 35, 70, 35, 125, 0, 80, 0],
    backgroundColor: paletaGob.violeta,
    /*
    borderColor: 'rgb(251, 157, 52)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line5 = {
    label: 'No comerciales',
    data: [0, 0, 0, 0, 25, 0, 25, 0],
    backgroundColor: paletaGob.amarillo,
    /*
    borderColor: 'rgb(103, 77, 116)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line6 = {
    label: 'Desconocidos',
    data: [0, 3, 0, 0, 3, 0, 0 , 0],
    backgroundColor: paletaGob.verde,
    /*
    borderColor: 'rgb(196, 58, 103)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var category = {
    labels: ["CFIT (Controlled flight into toward terrain)", "LOC-I (Loss of control - inflight)", "RS (Runway Safety)", "GS (Ground Safety)", "OD (Operational Damage)", "MED", "OTHER", "UNK"],
    datasets: [line1, line2, line3, line4, line5, line6],
    
  };
  
  var chartOptions = {
    responsive: false,
    legend: {
        position: 'bottom',
        labels: {
          fontSize: 15,
          titleFontFamily: "Encode Sans",
          boxWidth: 10,
          fontStyle: 'normal',
          padding: 20,
          usePointStyle: true
        },
        onHover: function(e) {
          e.target.style.cursor = 'pointer';
       }
    },
    hover: {
      onHover: function(e) {
         var point = this.getElementAtEvent(e);
         if (point.length) e.target.style.cursor = 'pointer';
         else e.target.style.cursor = 'default';
      }
   },  
    tooltips: {
      intersect	: true,
      position: 'nearest'	,
      titleFontFamily: "Encode Sans",
      titleAlign: 'center',
      titleSpacing: 0,	
      titleMarginBottom: 10,
      bodyFontFamily: "Encode Sans",
      bodyFontSize: 15,
      backgroundColor: 'rgba(0,0,0,0.5)',
      bodyAlign: 'left',
      bodySpacing: 5,
      footerFontFamily: "Encode Sans",
      footerFontSize: 50,
      footerAlign: 'left',
      caretSize: 25,
      cornerRadius: 5,
      xPadding: 20,
      yPadding: 20,
      displayColors: true,
      rtl: true,
      mode: "index",
      intersect: true
    },
    scales: {
      responsive: true,
      xAxes: [{
        barPercentage: 0.8,
        ticks: {
          fontSize: 15
        },
        categoryPercentage: 1,
        /*
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        } */
      }],
      yAxes: [{
        barPercentage: 1,
        ticks: {
          fontSize: 15,
        },
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      },
      ]
    }
  };
  
  var barChart = new Chart(harmonizedCategory, {
    type: 'horizontalBar',
    data: category,
    options: chartOptions
  });
  
  /*-----------------ACCIDENTES POR CATEGORIA --------------------------*/
  
  var accidentCategory = document.getElementById("accidentCategory").getContext("2d");

  
  var accidentes = {
    label: 'Accidentes',
    data: [0, 0, 15, 15, 47, 10, 30, 0, 10, 0, 20, 30, 0, 10, 20 , 30, 20, 10, 0, 10, 0, 0, 20, 30, 40],
    backgroundColor: paletaGob.azul,
   /* borderColor: "rgb(1, 94, 184)",
    borderWidth: 2,
    hoverBorderWidth: 0 */
  };
  
  var accidentesFatales = {
    label: 'Accidentes Fatales',
    data: [10, 0, 10, 50, 0, 20, 0, 10, 10, 20, 0, 5, 0, 10, 0, 20, 10, 0, 10, 20, 10, 0, 0, 10, 30],
    backgroundColor: paletaGob.negro
    /*
    borderColor: "rgb(45, 24, 43)",
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var categoryA = {
    labels: ["SCF-PP (Powerplant failure or malfunction)", "LOC-I (Loss of control, inflight)", "ARC (Abnormal runway contact)", "RE (Runway excursion)", "LALT (Low altitude operations)", "LOC-G (loss of control -ground)", "F-POST (Fire-Smoke Post-Impact)", "CTOL(Collision with obstacle)", "FUEL (Fuel Related)", "OTHER(Other)", "ADRM(Aerodrome)", "WILD (Collision widlife)"],
    datasets: [accidentes, accidentesFatales]
  };
  
  var chartOptions = {
    responsive: false,
    legend: {
        position: 'bottom',
        labels: {
          fontSize: 15,
          titleFontFamily: "Encode Sans",
          boxWidth: 10,
          fontStyle: 'normal',
          padding: 20,
          usePointStyle: true
        },
        onHover: function(e) {
          e.target.style.cursor = 'pointer';
       }
    },
    hover: {
      onHover: function(e) {
         var point = this.getElementAtEvent(e);
         if (point.length) e.target.style.cursor = 'pointer';
         else e.target.style.cursor = 'default';
      }
   },  
    tooltips: {
      intersect	: true,
      position: 'nearest'	,
      titleFontFamily: "Encode Sans",
      titleAlign: 'center',
      titleSpacing: 0,	
      titleMarginBottom: 10,
      bodyFontFamily: "Encode Sans",
      bodyFontSize: 15,
      backgroundColor: 'rgba(0,0,0,0.5)',
      bodyAlign: 'left',
      bodySpacing: 5,
      footerFontFamily: "Encode Sans",
      footerFontSize: 50,
      footerAlign: 'left',
      caretSize: 25,
      cornerRadius: 5,
      xPadding: 20,
      yPadding: 20,
      displayColors: true,
      rtl: true,
      mode: "index",
      intersect: true
    },
    scales: {
      xAxes: [{
        barPercentage: 0.8,
        categoryPercentage: 1,
        /*
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },*/
        ticks: {
          fontSize: 15
        }
      }],
      yAxes: [{
        ticks: {
          fontSize: 15,
        },
        
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      },
      ]
    }
  };
  
  var barChart = new Chart(accidentCategory, {
    type: 'horizontalBar',
    data: categoryA,
    options: chartOptions
  });