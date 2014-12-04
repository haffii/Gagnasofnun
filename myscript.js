var toats;
$(document).ready(function() {
	var breyta;
	for(var i = 0; i<2; i++)
	{
		var b = 2014;
		if(i == 0){
			breyta = "data/"+b+".json"
		}
		else{
			breyta = "data/1992.json"
		}
		dostuff(breyta);
	}
});

function dostuff(breyta){
$.getJSON(breyta, function(data) {
	var arr=[];
	var last;
	console.log(data[0]);
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
console.log(avg);
});
}