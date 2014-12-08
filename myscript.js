
google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(start);

function start(){

	var breyta;
	dostuff("seasons");
	for(var i = 1950; i<2015; i++)
	{
		dostuff(i);	
	}
	
	for (var i = 65; i < 91; i++) {
		var stafur = String.fromCharCode(i) ;
		
		byname(stafur);

	};

}
function byname(stafur){
	$.ajax({
			dataType: "json",
			url: "data/"+stafur+".json",
			mimeType: "application/json",
			success: function(data){
				players.push(data);
				if(stafur == "Z")
				{
					var avgold = 0;
					var countold = 0;
					
				for(var z = 0;z<database.length;z++){
								
							
					for(var i = 0; i<players.length; i++)
					{
						for(var x = 0; x<players[i].length;x++)
						{						
							

							if(players[i][x].To<1950+z){
								var height = 0;
								height = 12*players[i][x].Ht[0];
								height += parseInt(players[i][x].Ht[2]);				
								height = height*2.54;
								avgold+=height;
								countold++;	
								}
												
						}
						
					}
					avgold = avgold/countold;

					avgHeight.push(avgold);
					avgold=0;
					countold=0;
					}

				}
			}
		});
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
		drawheight();
	}

}
});
$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
" - " + $( "#slider-range" ).slider( "values", 1 ) );
});

