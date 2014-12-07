function drawppg() {
	chartType = 0;
	if(to == 0){
		to = database.length;
	}
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Points');


	var points = 0;

	for(var i = from; i<to;i++)
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
	chartType = 1;
	if(to == 0){
		to =database.length;
	}
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'FG%');
	var fg = 0;
	var fga = 0;
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			fg += parseInt(database[i][x].FG);
			fga += parseInt(database[i][x].FGA);

		}
		fg = fg/fga;
		data.addRows([
			[String(1950+i),fg]
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