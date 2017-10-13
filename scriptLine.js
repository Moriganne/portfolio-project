(function(){

var d3 = Plotly.d3;

var element = d3.select('#myGraphLine');
var graphnode = element.node();


var graphTitle = "My First Line graph";

var data1 = {
  name: 'Red Title',
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  line: {
    color: 'red',
    width: 3
  }
};

var data2 = {
  name: 'Blue',
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter',
  line: {
    color: 'blue',
    width: 3
  }
};

var data = [data1, data2];


Plotly.plot(graphnode, data, {
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