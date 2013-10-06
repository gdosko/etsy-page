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
		html += '<span class="description">'+ data.description.substring(0,55) +'...</span>';
	} else {
		html += '<span class="description">'+ data.description +'</span>';	
	}
	html += '<span class="price">$'+ data.price +'&nbsp;</span>';
		html += '<span class="currency_code">'+ data.currency_code +'</span>';
	html += '</div>';
	return html;
};

/**
 * Generates the html for an individual item
 * @param {Object} data The result item data
 * @return {string} The individual item html code
 */
Components.ItemIndividual = function (data){ 
	for(p in data.results){
		if(data.results[p].listing_id == Etsy.Id){
			var html = '';
			html += '<div id="show_product_images">';
			for (i=0; i<3; i++){
				if(data.results[p].Images[i]){
					html += '<img class="image" src="'+ data.results[p].Images[i].url_170x135 +'" />';		
				}	
			}
			html += '</div>';
			html += '<span id="show_product_title">' + data.results[p].title + '</span>';
			html += '<span id="show_product_description">' + data.results[p].description + '</span>';
			html += '<span id="show_product_rank">Rank #' +data.results[p].featured_rank + '</span>';
			html += '<span id="show_product_views">Views: ' + data.results[p].views + '</span>';
			html += '<span id="show_product_currency">'+ data.results[p].currency_code +'</span>';
			html += '<span id="show_product_price">$ ' +  data.results[p].price + '&nbsp;</span>';
			html += '<div class="clearfix"></div>';
			return html;
		}
	}
};