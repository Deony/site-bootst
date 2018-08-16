var infoButton = document.querySelectorAll('.infoButton');

[].forEach.call(infoButton, function(el) {
	el.addEventListener('click', function(){
		var submit = document.querySelector('form');

		submit.addEventListener('submit', Validation);
	});

});

function Validation(event) {
	event.preventDefault();
	inputs = document.querySelectorAll('input, textarea');
	[].forEach.call(inputs, function(el) {
		if( !el.value || el.value.length > 32) { //blank or more than 32 symbols
			el.style.border = '3px solid red';
		}
		else {
			el.style.border = '1px solid #ced4da';
		}
	});
};