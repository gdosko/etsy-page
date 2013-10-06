/**
 * Wrapper for event GUI rendering
 * @type {Object}
 */
var View = {};

/**
 * Shows the results in the as HTML components
 * @param {Object} data The json object from API response
 */
View.ShowResults = function (data){
	if (data.ok) {
		console.dir(data);
		$('#results').empty();
		var itemHtml = "";
		for (var i = 0; i < data.results.length; i++) {
			Components.Item(data.results[i]);
			itemHtml += Components.Item(data.results[i]);
		};
		$('#results').html(itemHtml);
		EventHandlers.StartListeningResults();
	} else {
		console.log(data.error);
	}
};

/**
 * Show one product 
 * @param {Object} data The json object from API response
 */
View.ShowProduct = function (data){
	if (data.ok) {
		$('#show_product').empty();
		var itemHtml = Components.ItemIndividual(data);
		$('#show_product').html(itemHtml);
		$('#show_product').dialog({
			modal: true,
			width: 700,
			minHeight: 300		
		});
	}	
};
