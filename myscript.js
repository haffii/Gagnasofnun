var database = [];
google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(start);

function start(){
	
	 	var breyta;
		for(var i = 1950; i<2015; i++)
		{
		dostuff(i);	
	}
	}

	function dostuff(breyta){
	$.getJSON("data/"+breyta+".json", function(data) {
		var arr=[];
		var last;
		for(var i = 0; i <data.length;i++)
		{
			if(!(data[i].Player == last)){
			 	if(!(data[i].Player=="Player")){
					last = data[i].Player;
					arr.push(data[i]);
				}
			}
			
		}	
		
	database.push(arr);
	if(breyta==2014)
	{
		drawChart();	
	}
	});
	}

		
      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');
        data.addColumn('number', 'Points');
        console.log(database.length)
     var tots = 0;
	for(var i = 0; i<database.length;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			tots += parseInt(database[i][x].PTS);

		}
        data.addRows([
          [String(1950+i), tots]
        ]);
        tots=0;
	}
        // Set chart options
        var options = {'title':'Points Scored',
                       'width':800,
                       'height':500};

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

	

