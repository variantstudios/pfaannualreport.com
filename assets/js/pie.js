
var data = [
    {
      value: 92.48,
      label: "Intergovernmental",
      color: "#6CAFDF",
    },{
      value: 6.03,
      label: "Fees and charges for services",
      color: "#AB1D40",
    },{
      value: 5.31,
      label: "Capital Fund revenue",
      color: "#626366",
    },{
      value: 1.21,
      label: "Miscellaneous Revenue",
      color: "#002B54",
    },{
      value: 0.28,
      label: "Earnings on investments",
      color: "#F48120",
    },{
      value: 0.01,
      label: "Grants and non-capital projects",
      color: "#499638",
    }
  ];

var doughnutData2 = [
    {
      value: 71.6,
      label: "Operations",
      color: "#6CAFDF"
    },{
      value: 11.46,
      label: "Support",
      color: "#AB1D40",
    },{
      value: 8.2,
      label: "Administration",
      color: "#F48120"
    },{
      value: 7.48,
      label: "Community Safety Services",
      color: "#9D8C6F"
    },{
      value: 4.09,
      label: "Total Capital Expenditures",
      color: "#626366"
    },{
      value: 0.95,
      label: "Lease Purchase (Station 4)",
      color: "#002B54"
    },{
      value: 0.5,
      label: "Grants and Non Capital Services",
      color: "#499638"
    }
  ];




var inView = false;
var inView4 = false;

function isScrolledIntoView(elem)
{
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}
$(window).scroll(function() {
  if (isScrolledIntoView('#chart-area')) {
      if (inView) { return; }
      inView = true;
      new Chart(document.getElementById("chart-area").getContext("2d")).Doughnut(data, {responsive : true, segmentShowStroke : false,animationSteps : 150,  animationEasing : "easeInOutExpo",tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>%",});        
  } else {
      inView = false;  
  }
});
$(window).scroll(function() {
  if (isScrolledIntoView('#chart-area2')) {
      if (inView4) { return; }
      inView4 = true;
      new Chart(document.getElementById("chart-area2").getContext("2d")).Doughnut(doughnutData2, {responsive : true, segmentShowStroke : false,animationSteps : 150,  animationEasing : "easeInOutExpo",tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>%",});
      
  } else {
      inView4 = false;  
  }
});


