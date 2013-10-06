/**
 * Wrapper for GUI components
 * @type {Object}
 */
var Components = {};

/**
 * Prefix for id product
 * @type {String}
 */
Components.ItemPrefix = "prod_";

/**
 * Generates the html for a result item
 * @param {Object} data The result item data
 * @return {string} The item html code
 */
Components.Item = function (data){ 
	var html = '<div class="product" id="'+ Components.ItemPrefix + data.listing_id +'">';
	html += '<div class="options">';
	html += '<a class="option_view"  href="javascript:void(0);">View More</a><a class="option_delete" href="javascript:void(0);">Delete</a>';
	html += '</div>';
	html += '<img class="image" src="'+ data.Images[0].url_170x135 +'" />';
	if(data.title.length > 20){
		html += '<span class="title">'+ data.title.substring(0,17) +'...</span>';
	} else {
		html += '<span class="title">'+ data.title +'</span>';	
	}
	if(data.description.length > 70){
		html += '<span class="description">'+ data.description.substring(0,67) +'...</span>';
	} else {
		html += '<span class="description">'+ data.description +'</span>';	
	}
	html += '<span class="price">$'+ data.price +'</span>';
	html += '</div>';
	return html;
};