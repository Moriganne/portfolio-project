(function(){
var d3 = Plotly.d3;

var element = d3.select('#myGraphPie');
var graphnode = element.node();


var graphTitle = "My First Pie graph";

var data = [{
  values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie'
}];


Plotly.plot(graphnode, data,
    {
    title: graphTitle,
    font: {
        size: 16
    }
},
{
  displayModeBar: false
});

//this part make sure every window resize it also resizes the graph
window.addEventListener('resize', function(event){
    Plotly.Plots.resize(graphnode);
});
})();