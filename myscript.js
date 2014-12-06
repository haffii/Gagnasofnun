	var database = [];
	var seasons = [];
	var chart = 0;
	var from = 0;
	var to = 0;

	google.load('visualization', '1.0', {'packages':['corechart']});
	google.setOnLoadCallback(start);

	function start(){
		
		 	var breyta;
		 	dostuff("seasons");
			for(var i = 1950; i<2015; i++)
			{
				dostuff(i);	
			}

		}

		function dostuff(breyta){
		$.ajax({
		    dataType: "json",
		    url: "data/"+breyta+".json",
		    mimeType: "application/json",
		    success: function(data){
				if(breyta == "seasons"){
						seasons.push(data);
				}
				else{
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
					drawppg();	
					} 
				}
			}
		});
		}

			
	      function drawppg() {
	      		      	chart = 0;
	        var data = new google.visualization.DataTable();
	        data.addColumn('string', 'Year');
	        data.addColumn('number', 'Points');
	        

	     var points = 0;
	    
		for(var i = from; i<database.length;i++)
		{
			for(var x = 0;x<database[i].length;x++)
			{
				points += parseInt(database[i][x].PTS);			
			}
			
			points = points/(seasons[0][i].Teams * seasons[0][i].Games);
	        data.addRows([
	          [String(1950+i), points]
	        ]);
	      
	        points = 0;
	      
	        
		}
	        // Set chart options
	        var options = {'title':'average points scored per game',
	                       'width':800,
	                       'height':500};

	        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	        chart.draw(data, options);
	      }
		
function drawfgp()
{
	chart = 1;
 var data = new google.visualization.DataTable();
	        data.addColumn('string', 'Year');
	        data.addColumn('number', 'FG%');
	     var fg = 0;
	     var fga = 0;
		for(var i = from; i<database.length;i++)
		{
			for(var x = 0;x<database[i].length;x++)
			{
				
				fg += parseInt(database[i][x].FG);
				fga += parseInt(database[i][x].FGA);
				
			}
			fg = fg/fga;
			data.addRows([
	          [String(1950+i),fg*100]
	        ]);
	      
	       
	        fg = 0;
	        fga = 0;
	        
		}
	        // Set chart options
	        var options = {'title':'Field goal percentage',
	                       'width':800,
	                       'height':500};

	        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	        chart.draw(data, options);
	      }

function timeController($scope) {
	$scope.changeFrom = function() {
	tempfrom = $scope.from;
	if(tempfrom > 1949 && tempfrom < 2015){
	 from = tempfrom - 1950;
	 if(chart == 0)
	 {drawppg();}

	 else if(chart == 1){
	 	drawfgp()
	 }
	}
};
}