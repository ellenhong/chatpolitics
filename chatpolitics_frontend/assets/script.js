$(document).ready(function() {
	$('.map').usmap({
		showLabels: false,
		stateStyles: {
			'fill': '#354458',
			'stroke': 'white'
		},
	  	stateHoverStyles: {
	  		'stroke': 'white',
	  		'fill': '#29ABA4'
	  	},
	  	'click' : function(event, data) {
	  		$('.label-pre').text('You have selected ');
	  		$('.label').text(data.name);
	  	}
	});
});