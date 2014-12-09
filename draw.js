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
	showhide("PPG");

drawGraph(data, '', 'Year', 'Average Points');
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
	showhide("FG");


drawGraphPerc(data, '', 'Year', 'Percentage');
}

function drawFreeThrow()
{
	chartType = 2;
	if(to == 0){
		to = database.length;
	}
	
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Freethrow %');
	var fta = 0;
	var ftm = 0;
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			fta += parseInt(database[i][x].FTA);
			ftm += parseInt(database[i][x].FT);
			
		}
		var tmp = ftm/fta;
		data.addRows([
			[String(1950+i),tmp]
			]);
		fta = 0;
		ftm = 0;
	}
	showhide("FT");
drawGraphPerc(data, '', 'Year', 'Percentage');
}

function drawBlocks()
{
	chartType = 3;
	if(to == 0){
		to = database.length;
	}
	
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Blocks');
	var blocks = 0;
	var max = 0;
	var maxyear = 0;
	var maxname;
	var maxgp = 0;
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			if(max<parseInt(database[i][x].BLK))
			{
				max = parseInt(database[i][x].BLK);
				maxyear = parseInt(i+1950);
				maxname = database[i][x].Player
				maxgp = database[i][x].G 
			}
			blocks += parseInt(database[i][x].BLK)

			
		}
		
		var tmp = blocks/(seasons[0][i].Teams * seasons[0][i].Games);
		data.addRows([
			[String(1950+i),tmp]
			]);

		blocks = 0;
	}
	//console.log(maxname+ " had the most blocked shots in one season : "+max+" it happened in the "+maxyear+" season. He played "+maxgp+" games that season, so he averaged "+max/maxgp+" blocks per game");

	showhide("B");
	drawGraph(data, '', 'Year', 'Average Blocks');
}

function drawFt() {
	chartType = 0;
	if(to == 0){
		to = database.length;
	}
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Attempts');
	data.addColumn('number', 'Made');
	var att = 0;
	var ft = 0;
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			att += parseInt(database[i][x].FTA);
			ft += parseInt(database[i][x].FT);			
		}

		att = att/(seasons[0][i].Teams * seasons[0][i].Games);
		ft = ft/(seasons[0][i].Teams * seasons[0][i].Games);

		data.addRows([
			[String(1950+i), att, ft]
			]);

		att = 0;
		ft = 0;
	}
showhide("FTM");
drawGraph(data, '', 'Year', 'Count');
}
function drawAge() {
	chartType = 4;
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Age');
	var ag = 0;
	var max = 0;
	var year = 0;
	var name;
	for(var i = from; i<to;i++)
	{
		
		for(var x = 0;x<database[i].length;x++)
		{
			var counter=0;
			if(max<parseInt(database[i][x].Age))
			{
				max = parseInt(database[i][x].Age);
				year = parseInt(i+1950);
				name = database[i][x].Player
			}
			if(!database[i][x].Age == "")
			{
				ag += parseInt(database[i][x].Age)
			}
			else
			{
				counter++;
			}
		}
		var tmp = ag/(database[i].length - counter);
		data.addRows([
			[String(1950+i),tmp]
			]);

		ag = 0;
	}
	showhide("Age");
	drawGraph(data, '', 'Year', 'Age');
}
function drawGraph(data, title, xAxis, yAxis)
{
	var options = 
{	
	'title':title,
	'width':800,
	'height':500,
	hAxis: {title: xAxis, titleTextStyle: {color: 'black' ,bold: true, fontSize: 20, italic: false }},
    vAxis: {title: yAxis,  titleTextStyle: {color: 'black' ,bold: true, fontSize: 20, italic: false }},
    series: {0:{color: '374ca6'}},
    'chartArea': { top: '5%'},
    
};

var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
chart.draw(data, options);
}

function drawGraphPerc(data, title, xAxis, yAxis)
{
	var options = 
{	
	'title':title,
	'width':800,
	'height':500,
	hAxis: {title: xAxis, titleTextStyle: {color: 'black' ,bold: true, fontSize: 20, italic: false }},
    vAxis: {title: 'Percentage', format:'#,###%', titleTextStyle: {color: 'black' ,bold: true, fontSize: 20, italic: false }},
    series: {0:{color: '374ca6'}},
    'chartArea': { top: '5%'},

};

var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
chart.draw(data, options);
}

function showhide(id){
        if (document.getElementById) {
          var divid = document.getElementById(id);
          var divs = document.getElementsByClassName("hide");
          for(var i=0;i<divs.length;i++) {
             divs[i].style.display = "none";
          }
          divid.style.display = "block";
        } 
        return false;
 }
