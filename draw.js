function drawppg() {
	chartType = 0;
	if(to == 0){
		to = database.length;
	}
	facts();
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Points');

	var points = 0;
	var maxpoints = 0;
	var maxpointsname = "";
	var maxpointsyear = 0;
	var maxavg = 0;
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			if(maxpoints < parseInt(database[i][x].PTS)){
				maxpoints=database[i][x].PTS;
				maxpointsname = database[i][x].Player;
				maxpointsyear = i+1950;
				maxavg = (database[i][x].PTS/database[i][x].G)
				maxavg = maxavg.toFixed(2);
			}
			points += parseInt(database[i][x].PTS);	
			
		}

		points = points/(seasons[0][i].Teams * seasons[0][i].Games);
		data.addRows([
			[String(1950+i), points]
			]);

		points = 0;


	}
	if(maxpointsname.substr(maxpointsname.length -1) == "*")
	{
		maxpointsname = maxpointsname.substring(0, maxpointsname.length - 1);
	}
	$("#factslist").append("<li>Most points scored in one season :<br> <b>"+maxpoints+"</b> in <b>"+maxpointsyear+"</b> by <b>"+maxpointsname+"</b><br> Averaging <b>"+maxavg+"</b> points per game</li>");
	highlight('PPGB');
	showhide("PPG");
	drawGraph(data, '', 'Year', '', 'auto', 'auto', '', 'Points');
}

function drawfgp()
{
	chartType = 1;
	if(to == 0){
		to =database.length;
	}
	facts();

	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'FG%');
	var fg = 0;
	var fga = 0;
	var max = 0;
	var maxgp = 0;
	var maxname = "";
	var maxyear = 0;
	var maxavg = 0;
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			fg += parseInt(database[i][x].FG);
			fga += parseInt(database[i][x].FGA);
			if(max < parseInt(database[i][x].FGA))
			{
				max = parseInt(database[i][x].FGA);
				maxgp = parseInt(database[i][x].G);
				maxname = database[i][x].Player;
				maxyear = i+1950;
				maxavg = parseInt(database[i][x].FG)/parseInt(database[i][x].FGA)
			}
		}

		fg = fg/fga;
		data.addRows([
			[String(1950+i),fg]
			]);

		fg = 0;
		fga = 0;

	}

	highlight('FGB');

	showhide("FG");
	maxavg = maxavg*100;
	maxavg = maxavg.toFixed(2);
	if(maxname.substr(maxname.length -1) == "*")
		{
			maxname = maxname.substring(0, maxname.length - 1);
		}
	$("#factslist").append("<li>Most field goals attempted in one season :<br><b> "+max+"</b> in <b>"+maxyear+"</b> by <b>"+maxname+"</b><br> Making <b>"+maxavg+"%</b> of them</li>");

		drawGraphPerc(data, '', 'Year', '');
}

function drawFreeThrow()
{
	facts();
	chartType = 2;
	if(to == 0){
		to = database.length;
	}
	
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Freethrow %');
	var fta = 0;
	var ftm = 0;
	var max = 0;
	var maxname = "";
	var maxyear = 0;
	var maxgp = 0;
	var maxavg = 0;
	var maxatt = 0;
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			fta += parseInt(database[i][x].FTA);
			ftm += parseInt(database[i][x].FT);
			if(max < parseInt(database[i][x].FT))
			{
			max = database[i][x].FT;
			maxname = database[i][x].Player;
			maxgp = database[i][x].G;
			maxatt = database[i][x].FTA;
			maxyear = i+1950;
			}
		}
		
		var tmp = ftm/fta;
		data.addRows([
			[String(1950+i),tmp]
			]);
		fta = 0;
		ftm = 0;
	}
	var temp = max/maxatt;
	temp = temp*100;
	temp = temp.toFixed(2);
	maxavg = max/maxgp;
	maxavg = maxavg.toFixed(2);
	if(maxname.substr(maxname.length -1) == "*")
	{
		maxname = maxname.substring(0, maxname.length - 1);
	}
	$("#factslist").append("<li>Most Freethrows made in one season :<br><b>"+max+"</b> in <b>"+maxyear+"</b> by <b>"+maxname+"</b><br>Averaging <b>"+maxavg+"</b> freethrows made per game, making around <b>"+temp+"%</b> of his freethrows</li>");
	

	highlight('FTB');

	showhide("FT");
	// data, title, xAxis, yAxis, ymax, ymin, ticker
	// data, title, xAxis, yAxis, ymax, ymin, ticker
	drawGraphPerc(data, '', 'Year', '','auto', 0, [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8]);

}

function drawBlocks()
{
	chartType = 3;
	if(to == 0){
		to = database.length;
	}

	facts();
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
	var avg = max/maxgp;
	avg = avg.toFixed(2)
	//console.log(maxname+ " had the most blocked shots in one season : "+max+" it happened in the "+maxyear+" season. He played "+maxgp+" games that season, so he averaged "+max/maxgp+" blocks per game");
	if(maxname.substr(maxname.length -1) == "*")
	{
		maxname = maxname.substring(0, maxname.length - 1);
	}
	if(to>1974-1950)
	{
		$("#factslist").append("<li>Most Blocks in one season : <br><b>"+max+"</b> in <b>"+maxyear+"</b> by <b>"+maxname+"</b><br>Average of <b>"+avg+"</b> blocks per game  </li>");
	}
	highlight('BB');
	showhide("B");
	drawGraph(data, '', 'Year', '', 'auto', 'auto', '', 'Blocks');
}
function facts(){
	var temp1= from+1950;
 	var temp2 = to+1949;
 	$("#facts").empty();
	$("#facts").append(	"<h2>Facts</h2>");
	$("#facts").append(	"<h3>"+temp1+" - "+temp2+"</h3>");
	$("#facts").append("<ul id='factslist'></ul>");
}
function drawFt() {
	facts();
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
	highlight('FTMB');
	showhide("FTM");

	drawGraph(data, '', 'Year', '', 'auto', 'auto', '', 'Count');
}
function drawAge() 
{
	facts();
	chartType = 4;
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Age');
	var ag = 0;
	var max = 0;
	var year = 0;
	var name = "";
	for(var i = from; i<to;i++)
	{
		
		for(var x = 0;x<database[i].length;x++)
		{
			var counter=0;
			if(max<parseInt(database[i][x].Age))
			{
				max = parseInt(database[i][x].Age);
				year = i+1950;
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
	if(name.substr(name.length -1) == "*")
	{
		name = name.substring(0, name.length - 1);
	}
	$("#factslist").append("<li>Oldest player in the NBA : <br><b>"+name+"</b> in <b>"+year+"</b> at the age of <b>"+max+"</b></li>");

	highlight('AgeB');

	showhide("Age");
	drawGraph(data, '', 'Year', '', 'auto',20, [20,22,24,26,28,30], 'Age');
}
function drawTo()
{
	facts();
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
	var maxname = "";
	var maxavg = 0;
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			if(max<parseInt(database[i][x].TOV))
			{
				max = parseInt(database[i][x].TOV);
				maxyear = i+1950;
				maxgp = database[i][x].G ;
				maxname = database[i][x].Player;
			}
			turn += parseInt(database[i][x].TOV)

			
		}
		var tmp = turn/(seasons[0][i].Teams * seasons[0][i].Games);
		data.addRows([
			[String(1950+i),tmp]
			]);

		turn = 0;
	}

	maxavg = max/maxgp;
	maxavg = maxavg.toFixed(2);
	if(maxname.substr(maxname.length -1) == "*")
	{
		maxname = maxname.substring(0, maxname.length - 1);
	}
	if(to>1978-1950)
	{
	$("#factslist").append("<li>Most turnovers in one season:<br><b>"+max+"</b> in <b>"+maxyear+"</b> by <b>"+maxname+"</b><br> Averaging <b>"+maxavg+"</b> turnovers per game</li>");
	}
	highlight('TOB');

	showhide("TO");
	drawGraph(data, '', 'Year', '', 'auto', 'auto', '', 'Turnovers');
}
function drawTrb()
{
	facts();
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
	highlight('TRBB');
	showhide("TRB");
	drawGraph(data, '', 'Year', '', 'auto', 0,'', 'Rebounds');
}
function drawPf()
{
	facts();
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
	var maxname = "";
	var maxavg = 0;
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			if(max<parseInt(database[i][x].PF))
			{
				max = parseInt(database[i][x].PF);
				maxyear = i+1950;
				maxgp = database[i][x].G ;
				maxname = database[i][x].Player;
			}
			pf += parseInt(database[i][x].PF)

			
		}
		var tmp = pf/(seasons[0][i].Teams * seasons[0][i].Games);
		data.addRows([
			[String(1950+i),tmp]
			]);

		pf = 0;
	}

	maxavg = max/maxgp;
	maxavg = maxavg.toFixed(2);
	if(maxname.substr(maxname.length -1) == "*")
	{
		maxname = maxname.substring(0, maxname.length - 1);
	}
	$("#factslist").append("<li>Most fouls committed in one season :<br> <b>"+max+"</b> in <b>"+maxyear+"</b> by <b>"+maxname+"</b><br> Averaging <b>"+maxavg+"</b> fouls per game</li>");
	

	highlight('PFB');

	showhide("PF");
	drawGraph(data, '', 'Year', '', 'auto', 0,[0,10,20,30], 'Fouls');
}
function drawFg() {
	facts();
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
	highlight('FGMB');
	showhide("FGM");
	drawGraph(data, '', 'Year', '', 'auto', 'auto', '', 'Count');
}
function drawSt()
{
	facts();
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
	var maxname = "";
	var maxgames = 0;
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			if(max<parseInt(database[i][x].STL))
			{
				max = parseInt(database[i][x].STL);
				maxyear = i+1950;
				maxname = database[i][x].Player ;
				maxgames = parseInt(database[i][x].G);
			}
			st += parseInt(database[i][x].STL)

			
		}
		var tmp = st/(seasons[0][i].Teams * seasons[0][i].Games);
		data.addRows([
			[String(1950+i),tmp]
			]);

		st = 0;
	}

	var maxavg = max/maxgames;
	maxavg = maxavg.toFixed(2);
	if(maxname.substr(maxname.length -1) == "*")
	{
		maxname = maxname.substring(0, maxname.length - 1);
	}
	if(to>1974-1950)
	{
	$("#factslist").append("<li>Most steals in one season : <br><b>"+max+"</b> in <b>"+maxyear+"</b> by <b>"+maxname+"</b><br> Averaging <b>"+maxavg+"</b> steals per game</li>");
	}
	highlight('STB');

	showhide("ST");
	drawGraph(data, '', 'Year', '', 'auto', 0, '', 'Steals');
}
function draw3p() {
	facts();
	chartType = 10;
	if(to == 0){
		to = database.length;
	}
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Attempts');
	data.addColumn('number', 'Made');
	var att = 0;
	var mad = 0;
	var a = '3PA'
	var b = '3P'
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			if(!database[i][x][a] == "")
			{
				att += parseInt(database[i][x][a]);
			}
			if (0 < parseInt(database[i][x][b]) < 1)
			{
				 database[i][x][b] = database[i][x][a]*database[i][x][b];
				 mad += parseInt(database[i][x][b]);
			}
			else if(!database[i][x][b] == "")
			{
				mad += parseInt(database[i][x][b]);			
			}
		}
		att = att/(seasons[0][i].Teams * seasons[0][i].Games);
		mad = mad/(seasons[0][i].Teams * seasons[0][i].Games);

		data.addRows([
			[String(1950+i), att, mad]
			]);

		att = 0;
		mad = 0;
	}
	highlight('3PB');
	showhide("3P");
	drawGraph(data, '', 'Year', '', 'auto', 'auto', '', 'Count');
}
function draw3pp()
{
	facts();
	chartType = 11;
	if(to == 0){
		to =database.length;
	}
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', '3P%');
	var P = 0;
	var PA = 0;
	var m = '3P';
	var a = '3PA';
	var max = 0;
	var maxatt = 0;
	var maxavg = 0;
	var maxyear = 0;
	var maxname = "";
	for(var i = from; i<to;i++)
	{
		for(var x = 0;x<database[i].length;x++)
		{
			if(0< parseInt(database[i][x][m]) < 1)
			{
				database[i][x][m] = database[i][x][m]*database[i][x][a];
			}
			if(max<database[i][x][m])
			{
				max = database[i][x][m];
				max = Math.round(max);
				maxatt = parseInt(database[i][x][a]);
				maxyear = i+1950;
				maxname = database[i][x].Player;
				maxavg = database[i][x].G;
			}
			P += parseInt(database[i][x][m]);
			PA += parseInt(database[i][x][a]);

		}
		P = P/PA;
		data.addRows([
			[String(1950+i),P]
			]);
		P = 0;
		PA = 0;

	}

	maxavg = max/maxavg;
	maxavg = maxavg.toFixed(2);
	var temp = max/maxatt;
	temp = temp*100;
	temp = temp.toFixed(2);
	if(maxname.substr(maxname.length -1) == "*")
	{
		maxname = maxname.substring(0, maxname.length - 1);
	}
	if(to>1980-1950)
	{
		$("#factslist").append("<li>Most three point shots made in one season :<br> <b>"+max+"</b> in <b>"+maxyear+"</b> by <b>"+maxname+"</b><br> Averaging <b>"+maxavg+"</b> three point shots made per game<br> Making around <b>"+temp+"%</b> of his three point shoots</li>");
	}

	highlight('3P%B');

	showhide("3P%");
	drawGraphPerc(data, '', 'Year', '');
}
function drawTeamCount()
{
	facts();
	chartType = 12;
	if(to == 0){
		to =database.length;
	}
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Teams');
	var teams = 0;
	for(var i = from; i<to;i++)
	{
		teams = seasons[0][i].Teams;
		data.addRows([
			[String(1950+i),teams]
			]);
		teams = 0;

	}
	highlight('TeamsB');
	showhide("Teams");
	drawGraph(data, '', 'Year', '', 'auto', 'auto', '', 'Teams');
}

function drawChamps()
{
	facts();
	$("#y-axis").empty();
	$("#y-axis").append("<h2>Teams</h2>");
	chartType = 13;
	var tmp = [];
	var input;
	tmp[0] = ['Team', 'Wins'];
	for(var i = 1; i < champs[0].length + 1; i++){
		
		if(champs[0][i-1].Champ != '0')
			{
				input = [champs[0][i-1].Franchise, parseInt(champs[0][i-1].Champ)];
				tmp.push(input);
			}
	}
	var data = google.visualization.arrayToDataTable(tmp);

        var options = {
        'height':600,
        'width':850, 
          titleTextStyle: {color: 'black' ,bold: true, fontSize: 20, italic: false},
          legend:{position:'none'} ,
          vAxis: {title: '',  titleTextStyle: {color: 'black' ,bold: true, fontSize: 20, italic: false }},
          hAxis: {title: 'Wins',  titleTextStyle: {color: 'black', bold: true, fontSize: 20, italic: false}, ticks: [0,2,4,6,8,10,12,14,16,18,20]},
          'chartArea': {'top': '1%',height: '76%'},
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
		highlight('ChampsB');
		showhide("Champs");
		showhideSlide("slider-range", "hide");
        chart.draw(data, options);

}
function drawGraph(data, title, xAxis, yAxis, ymax, ymin, ticker, ytitle)

{
	$("#y-axis").empty();
	$("#y-axis").append(	"<h2>"+ytitle+"</h2>");
	var options = 
{	
	'title':title,
	'width':800,
	'height':500,
	hAxis: {title: xAxis, titleTextStyle: {color: 'black' ,bold: true, fontSize: 20, italic: false }},
    vAxis: {title: yAxis, viewWindow:{min:ymin, max:ymax},  titleTextStyle: {color: 'black' ,bold: true, fontSize: 20, italic: false }, ticks:ticker},
    series: {0:{color: '374ca6'}},
    'chartArea': { top: '5%',height: '76%'},
    
    
};
	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data, options);
	showhideSlide("slider-range", "show");
}

function drawGraphPerc(data, title, xAxis, yAxis, ymax, ymin, ticker)
{
	$("#y-axis").empty();
	$("#y-axis").append(	"<h2>Percentage</h2>");
	var options = 
{	
	'title':title,
	'width':800,
	'height':500,
	hAxis: {title: xAxis,  titleTextStyle: {color: 'black' ,bold: true, fontSize: 20, italic: false }},
    vAxis: {title: '', viewWindow:{min:ymin, max:ymax}, format:'#,###%', titleTextStyle: {color: 'black' ,bold: true, fontSize: 20, italic: false }, ticks:ticker},
    series: {0:{color: '374ca6'}},
    'chartArea': { top: '5%', height: '76%'},
    
};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data, options);
	showhideSlide("slider-range", "show");
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
 function showhideSlide(id, option){
        if (document.getElementById) {
          var divid = document.getElementById(id);
          if(option == "hide")
          	{
          		divid.style.display = "none";
          	}
          else if(option == "show")
          {
          	divid.style.display = "block";
          }
        } 
        return false;
 }
function highlight(id){
        if (document.getElementById) {
          var divid = document.getElementById(id);
          var divs = document.getElementsByClassName("buttons");
          for(var i=0;i<divs.length;i++) {
             divs[i].style.background = "#374ba6";

          }
          divid.style.background = "#E50024";
        } 
        return false;
 }
