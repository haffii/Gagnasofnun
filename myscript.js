
google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(start);

function start(){

	var breyta;
	dostuff("seasons");
	dostuff("champs")
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
			else if(breyta == "champs"){
				champs.push(data);
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
							if(data[i].Player=="Kobe Bryant")
							{
								kobe.push(data[i]);
							}
							
							if(data[i].Player == "Wilt Chamberlain*")
							{
								wilt.push(data[i])
							}
							if(data[i].Player == "LeBron James")
							{
								lebron.push(data[i])
							}
							if(data[i].Player == "Michael Jordan*")
							{
								jordan.push(data[i])
							}
							
							
						}

					}

				}	

				database.push(arr);
				if(breyta==2014)
				{
					goats.push(kobe);
					goats.push(lebron);
					goats.push(jordan);
					goats.push(wilt);
					drawppg();	
				} 
			}
		}
	});
}


$(function() {
$( "#slider-range" ).slider({
range: true,
min: 1950,
max: 2014,
values: [ 1950, 2014 ],
slide: function( event, ui ) {
$( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
	from = ui.values[0]- 1950;
	to = ui.values[1]- 1949
	if(chartType == 0){
		drawppg();
	}
	else if(chartType == 1){
		drawfgp();
	}
	else if(chartType == 2){
		drawFreeThrow();
	}
	else if(chartType == 3){
		drawBlocks();
	}
	else if(chartType == 4){
		drawAge();
	}
	else if(chartType == 5){
		drawTo();
	}
	else if(chartType == 6){
		drawTrb();
	}
	else if(chartType == 7){
		drawPf();
	}
	else if(chartType == 8){
		drawFg();
	}
	else if(chartType == 9){
		drawSt();
	}
	else if(chartType == 10){
		draw3p();
	}
	else if(chartType == 11){
		draw3pp();
	}
	else if(chartType == 12){
		drawTeamCount();
	}
	else if(chartType == 13){
		drawChamps();
	}
	else if(chartType == 14){
		drawGoats();
	}

}
});
$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
" - " + $( "#slider-range" ).slider( "values", 1 ) );
});

