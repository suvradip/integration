var Fiddle;
$(document).ready(function() {
	Fiddle = new fiddle();
	$("button").on('click', function() {
		Fiddle.showOutput();
	});
});
$(window).load(function() {
	if(!$.trim(Fiddle.getJSContent()).length) {
		Fiddle.resetElements();
	}
});