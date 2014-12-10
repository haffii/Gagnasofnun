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
function drawAge() 
{
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
	drawGraph(data, '', 'Year', 'Age', 30,0);
}
function drawTo()
{
	chartType = 5;
	if(to == 0){
		to = database.length;
	}
	
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Turnovers');
	var turn = 0;
	var max = 0;
	var maxyear = 0;
	var maxgp = 0;
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			if(max<parseInt(database[i][x].TOV))
			{
				max = parseInt(database[i][x].TOV);
				maxyear = parseInt(i+1950);
				maxgp = database[i][x].G ;
			}
			turn += parseInt(database[i][x].TOV)

			
		}
		var tmp = turn/(seasons[0][i].Teams * seasons[0][i].Games);
		data.addRows([
			[String(1950+i),tmp]
			]);

		turn = 0;
	}
	showhide("TO");
	drawGraph(data, '', 'Year', 'Turnovers');
}
function drawTrb()
{
	chartType = 6;
	if(to == 0){
		to = database.length;
	}
	
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Rebounds');
	var reb = 0;
	var max = 0;
	var maxyear = 0;
	var maxgp = 0;
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			if(max<parseInt(database[i][x].TRB))
			{
				max = parseInt(database[i][x].TRB);
				maxyear = parseInt(i+1950);
				maxgp = database[i][x].G ;
			}
			reb += parseInt(database[i][x].TRB)

			
		}
		var tmp = reb/(seasons[0][i].Teams * seasons[0][i].Games);
		data.addRows([
			[String(1950+i),tmp]
			]);

		reb = 0;
	}
	showhide("TRB");
	drawGraph(data, '', 'Year', 'Rebounds', 'auto', 0);
}
function drawPf()
{
	chartType = 7;
	if(to == 0){
		to = database.length;
	}
	
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Personal Fouls');
	var pf = 0;
	var max = 0;
	var maxyear = 0;
	var maxgp = 0;
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			if(max<parseInt(database[i][x].PF))
			{
				max = parseInt(database[i][x].PF);
				maxyear = parseInt(i+1950);
				maxgp = database[i][x].G ;
			}
			pf += parseInt(database[i][x].PF)

			
		}
		var tmp = pf/(seasons[0][i].Teams * seasons[0][i].Games);
		data.addRows([
			[String(1950+i),tmp]
			]);

		pf = 0;
	}
	showhide("PF");
	drawGraph(data, '', 'Year', 'Personal Fouls', 'auto', 0);
}
function drawFg() {
	chartType = 8;
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
			att += parseInt(database[i][x].FGA);
			ft += parseInt(database[i][x].FG);			
		}

		att = att/(seasons[0][i].Teams * seasons[0][i].Games);
		ft = ft/(seasons[0][i].Teams * seasons[0][i].Games);

		data.addRows([
			[String(1950+i), att, ft]
			]);

		att = 0;
		ft = 0;
	}
showhide("FGM");
drawGraph(data, '', 'Year', 'Count');
}
function drawSt()
{
	chartType = 9;
	if(to == 0){
		to = database.length;
	}
	
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Steals');
	var st = 0;
	var max = 0;
	var maxyear = 0;
	var maxgp = 0;
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			if(max<parseInt(database[i][x].STL))
			{
				max = parseInt(database[i][x].STL);
				maxyear = parseInt(i+1950);
				maxgp = database[i][x].G ;
			}
			st += parseInt(database[i][x].STL)

			
		}
		var tmp = st/(seasons[0][i].Teams * seasons[0][i].Games);
		data.addRows([
			[String(1950+i),tmp]
			]);

		st = 0;
	}
	showhide("ST");
	drawGraph(data, '', 'Year', 'Steals', 'auto', 0);
}
// function draw3p() {
// 	chartType = 10;
// 	if(to == 0){
// 		to = database.length;
// 	}
// 	var data = new google.visualization.DataTable();
// 	data.addColumn('string', 'Year');
// 	data.addColumn('number', 'Attempts');
// 	data.addColumn('number', 'Made');
// 	var att = 0;
// 	var mad = 0;
// 	for(var i = from; i<to;i++)
// 	{
// 		for(var x = 0;x<database[i].length;x++)
// 		{
// 			att += parseInt(database[i][x]."3PA");
// 			mad += parseInt(database[i][x]."3P");			
// 		}

// 		att = att/(seasons[0][i].Teams * seasons[0][i].Games);
// 		mad = mad/(seasons[0][i].Teams * seasons[0][i].Games);

// 		data.addRows([
// 			[String(1950+i), att, mad]
// 			]);

// 		att = 0;
// 		mad = 0;
// 	}
// showhide("3P");
// drawGraph(data, '', 'Year', 'Count');
// }
function drawGraph(data, title, xAxis, yAxis, ymax, ymin)
{
	var options = 
{	
	'title':title,
	'width':800,
	'height':500,
	hAxis: {title: xAxis, titleTextStyle: {color: 'black' ,bold: true, fontSize: 20, italic: false }},
    vAxis: {title: yAxis, viewWindow:{min:ymin, max:ymax},  titleTextStyle: {color: 'black' ,bold: true, fontSize: 20, italic: false }},
    series: {0:{color: '374ca6'}},
    'chartArea': { top: '5%'},
    
};
var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
chart.draw(data, options);
}

function drawGraphPerc(data, title, xAxis, yAxis, ymax, ymin)
{
	var options = 
{	
	'title':title,
	'width':800,
	'height':500,
	hAxis: {title: xAxis, titleTextStyle: {color: 'black' ,bold: true, fontSize: 20, italic: false }},
    vAxis: {title: 'Percentage', viewWindow:{min:ymin, max:ymax}, format:'#,###%', titleTextStyle: {color: 'black' ,bold: true, fontSize: 20, italic: false }},
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
