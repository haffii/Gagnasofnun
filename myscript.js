var database = [];
$(document).ready(function() {
	var breyta;
	for(var i = 1950; i<2015; i++)
	{
		dostuff("data/"+i+".json");
	}
	console.log(database);
});

function dostuff(breyta){
$.getJSON(breyta, function(data) {
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
	var avg = 0;
for(var i = 0; i<arr.length;i++)
{
	avg += parseInt(arr[i].PTS);
}
database.push(arr);
});
}