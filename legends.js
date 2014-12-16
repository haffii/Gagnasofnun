var data;
function drawGoats()
{
	facts();
	$("#Goats").empty();
	$("#Goats").append("Greatest Players")
	$("#Goats").append("<button id='goatppg' class = 'legends' onclick='goatchart(0)'>PPG</button>")
	$("#Goats").append("<button id='goatfgp' class = 'legends' onclick='goatchart(1)'>FG%</button>")
	$("#Goats").append("<button id='goatast' class = 'legends' onclick='goatchart(2)'>Assists</button>")
	
	chartType = 14;
	if(to == 0){
		to =database.length;
	}
	data = new google.visualization.DataTable();
	data.addColumn('string', 'Seasons');
	for(var i = 0;i<4;i++){
		data.addColumn('number', goats[i][0].Player);
	}
	if(goatChartType==0){
		goatppg();
	}
	else if(goatChartType == 1)
	{
		goatfgp();
	}
	else if(goatChartType == 2)
	{
		goatast();
	}
	
	highlight('GoatsB');
	showhide("Goats");
}

function goatppg(){
	var tmppg=[];
	for(var i = 0; i<4; i++){
		tmppg.push([]);
		for(var x = 0;x<20;x++){
			if(goats[i][x] !=null){
			tmppg[i].push(parseInt(goats[i][x].PTS)/parseInt(goats[i][x].G));
			}
		}

	}
	for(var i = 1;i<20;i++)
	{
		data.addRows([
			[""+i,tmppg[0][i],tmppg[1][i],tmppg[2][i],tmppg[3][i]]
			]);
	}

	highlight('GoatsB');
	showhide("Goats");
	drawGraph(data, '', 'Year', '', 'auto', 'auto', '', 'PPG');

}
function goatfgp(){
	var tmp=[];
	for(var i = 0; i<4; i++){
		tmp.push([]);
		for(var x = 0;x<20;x++){
			if(goats[i][x] !=null){
			tmp[i].push(parseInt(goats[i][x].FG)/parseInt(goats[i][x].FGA));
			}
		}

	}
	for(var i = 1;i<20;i++)
	{
		data.addRows([
			[""+i,tmp[0][i],tmp[1][i],tmp[2][i],tmp[3][i]]
			]);
	}
	drawGraphPerc(data, '', 'Year', '', 'auto', 'auto', '', 'FGP');

}
function goatast(){
	var tmp=[];
	for(var i = 0; i<4; i++){
		tmp.push([]);
		for(var x = 0;x<20;x++){
			if(goats[i][x] !=null){
			tmp[i].push(parseInt(goats[i][x].AST)/parseInt(goats[i][x].G));
			}
		}

	}
	for(var i = 1;i<20;i++)
	{
		data.addRows([
			[""+i,tmp[0][i],tmp[1][i],tmp[2][i],tmp[3][i]]
			]);
	}
	drawGraph(data, '', 'Year', '', 'auto', 'auto', '', 'Assists per game');

}

function goatchart(number)
{
	goatChartType = number;
	drawGoats();
}