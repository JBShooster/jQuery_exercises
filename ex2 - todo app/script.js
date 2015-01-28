$(document).ready(function() {
  $("input[type=submit]").on("click", function(e){
	var addedText = $('input[type=text]').val();

	$("div").append('<li><input type="checkbox" class="checked">' + addedText + '<input type="button" class="remove">');
	});


  $("body").on("click", "li", function(e){
  	$(this).addClass('strikeout');
  });

  $("body").on("click", "input.checked", function(e){
  	$(this).addClass('strikeout');
  });

  $("body").on("click", "input.remove", function(e){
  	$(this).parent().remove();
  });

});