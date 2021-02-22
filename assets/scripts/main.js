google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.setOnLoadCallback(drawDashboard);

window.onresize = function(){
   drawDashboard();
};

window.onload = function(){
   drawDashboard();
};

function drawDashboard() {
   let data = new google.visualization.DataTable();
   
   data.addColumn('string', 'Status');
   data.addColumn('number', 'Quantity');
   data.addRows([
      ['Assigned', 4100],
      ['Suspended', 800],
      ['Cancelled', 320]
   ]);

   let data_z = new google.visualization.DataTable();
   data_z.addColumn('string', 'Id');
   data_z.addColumn('number', 'Zone');
   data_z.addRows([
      ['North', 1220],
      ['South', 800],
      ['West', 1400],
      ['East', 1800]
   ]);  

   let piechart_options = {title:'Items Status',
                  width: "100%",
                  height: 300,
                  legend: 'bottom'};
   let piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
   piechart.draw(data, piechart_options);

   let barchart_options = {title:'Items by Region',
                  width: "100%",
                  height: 300,
                  legend: 'none'};
   let barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
   barchart.draw(data_z, barchart_options);
}