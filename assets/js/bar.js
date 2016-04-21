  var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

  var barChartData = {
    labels : ["Medicals","Good Intent Calls","False Alarms","Service Calls","Hazardous Conditions","Fires/Explosions","Other Requests for Service"],
    datasets : [
      {
        fillColor : "rgba(171,29,64,1)",
        strokeColor : "rgba(220,220,220,0.8)",
        highlightFill: "rgba(171,29,64,0.8)",
        highlightStroke: "rgba(220,220,220,1)",
        data : [76,9,7,4,2,2,0.2]
      }
    ]
  }
  window.onload = function(){
    var ctx = document.getElementById("bar").getContext("2d");
    window.myBar = new Chart(ctx).Bar(barChartData, {
      responsive : true,
       scaleShowGridLines : false,
       scaleShowHorizontalLines: false,
       scaleShowVerticalLines: true,
       barShowStroke: false,
       scaleFontSize: 15,
       responsive: true,
    });
  }