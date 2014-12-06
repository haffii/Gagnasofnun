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

function timeController($scope) {
	$scope.changeFrom = function() {
		tempfrom = $scope.FROM;
		if(tempfrom > 1949 && tempfrom < 2015){
			from = tempfrom - 1950;
			if(chart == 0)
				{drawppg();}

			else if(chart == 1){
				drawfgp()
			}
		}
	}
	$scope.changeTo = function() {
			tempto = $scope.TO;
			if(tempto > from + 1950 && tempto< 2015){
				to = tempto-1949;
				if(chart == 0){
					drawppg();
				}

				else if(chart == 1){
					drawfgp();
				}
			}
		};
	
}