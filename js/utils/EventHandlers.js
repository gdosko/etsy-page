/**
 * Wrapper for event handlers
 * @type {Object}
 */
var EventHandlers = {};

/**
 * Setup all event listeners
 */
EventHandlers.StartListening = function (){
	$('#search').click(EventHandlers.Search);
	$('#preview_page').click(EventHandlers.Preview);
	$('#next_page').click(EventHandlers.Next);
	$('#sort_by').click(EventHandlers.Sort);
};

/**
 * Setup all event listeners
 */
EventHandlers.StartListeningResults = function (){
	$('.product').mouseenter(EventHandlers.ShowOptions);
	$('.product').mouseleave(EventHandlers.DeleteOptions);
	$('a.option_view').click(EventHandlers.ShowProduct);
	$('a.option_delete').click(EventHandlers.DeleteProduct);

};

/**
 * Performs a search using the Etsy API
 */
EventHandlers.Search = function (){
	var searchText = $('#search-text').val();
	Etsy.Request($.trim(searchText));
};

/**
 * View the preview page
 */
EventHandlers.Preview = function (){
	if(Etsy.Page == 1){
	} else {
		Etsy.Page -= 1;
	}
	Etsy.Request(Etsy.Keywords);
};

/**
 * View the next page
 */
EventHandlers.Next = function (){
	Etsy.Page += 1;
	Etsy.Request(Etsy.Keywords);
};

/**
 * Sort the page
 */
EventHandlers.Sort = function (event){
	var option = event.currentTarget.value; 
	switch(option){
		case 'latest':
		Etsy.Order = Order.Up;
		Etsy.Sort = Sort.Created;
		Etsy.Request(Etsy.Keywords);
		break;
		case 'relevance':
		Etsy.Order = Order.Down;
		Etsy.Sort = Sort.Score
		Etsy.Request(Etsy.Keywords);
		break;
		case 'more_expensive':
		Etsy.Order = Order.Down;
		Etsy.Sort = Sort.Price;
		Etsy.Request(Etsy.Keywords);
		break;
		case 'cheaper':
		Etsy.Order = Order.Up;
		Etsy.Sort = Sort.Price;
		Etsy.Request(Etsy.Keywords);
		break;	
	}
};

/**
 * Show product options 
 */
EventHandlers.ShowOptions = function (event){	
	event.currentTarget.children[0].style.display = "inline";
};

/**
 * Delete product options 
 */
EventHandlers.DeleteOptions = function (event){	
	event.currentTarget.children[0].style.display = "none";
};

/**
 * View more information about the product 
 */
EventHandlers.ShowProduct = function (){
	var html = '';
	$('#show_product').dialog({
		modal: true,
		width: 700,
		height: 600
	});
};

/**
 * Delete product 
 */
EventHandlers.DeleteProduct = function (event){	
	var id = "#" + event.currentTarget.offsetParent.parentNode.id;
	$(id).remove();
};
