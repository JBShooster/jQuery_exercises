$(document).ready(function() {

  $("input[type=submit]").on("click", function(e){
	var newColor = $('input#color').val();
	$("tbody tr:even td").css("background", newColor);
	});
});