  var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

  var barChartData = {
    labels : ["Medicals","Good Intent Calls","False Alarms","Service Calls","Hazardous Conditions","Fires/Explosions","Other Requests"],
    datasets : [
      {
        fillColor : "rgba(171,29,64,1)",
        highlightFill: "rgba(171,29,64,0.8)",
        data : [76,9,7,4,2,2,0.2]
      },

    ]
  }

var inView2 = false;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#bar')) {
        if (inView2) { return; }
        inView2 = true;
        new Chart(document.getElementById("bar").getContext("2d")).Bar(barChartData, {
         responsive : true,
         scaleShowGridLines : false,
         scaleShowHorizontalLines: false,
         scaleShowVerticalLines: false,
         barShowStroke: false,
         scaleFontSize: 12,
         showScale: true,
         animationSteps: 200,
      });        
    } else {
        inView2 = false;  
    }
});


