/**
 * Wrapper for Etsy API requests
 * @type {Object}
 * @see http://www.etsy.com/developers/documentation/reference/listing#method_findalllistingactive
 * @see http://www.etsy.com/developers/documentation/reference/listing#section_fields
 * @see http://www.etsy.com/developers/documentation/getting_started/resources#section_associations
 */
var Etsy = {};

/**
 * Initialize the app
 * @return {String}
 */
Etsy.Init = function (){
 Etsy.Request();
 EventHandlers.StartListening();
};

/**
 * API base URL
 * @type {String}
 */
Etsy.Url = 'https://openapi.etsy.com/v2';

/**
 * The query path
 * @type {String}
 */
Etsy.Query = '/listings/active';

/**
 * The API key
 * @type {String}
 */
Etsy.Key = '5ek4vq6nbjpzsyisap0n8woc';

/**
 * Number of results per page
 * @type {Number}
 */
Etsy.ResultsPerPage = 20;

/**
 * Current page number
 * @type {Number}
 */
Etsy.Page = 1;

/**
 * The number of images per results
 * @type {Number}
 */
Etsy.IncludeImages = 1;

/**
 * Text to search
 * @type {String}
 */
Etsy.Keywords = undefined;

/**
 * How the results will be sorted
 * @type {String}
 */
Etsy.Sort = Sort.Created;

/**
 * How the results will be ordered
 * @type {String}
 */
Etsy.Order = Order.Up;

/**
 * The product id to find
 * @type {String}
 */
Etsy.Id = 0;

/**
 * Creates the url to request the API
 * @return {String}
 */
Etsy.GetQueryUrl = function (){
	var url = Etsy.Url+Etsy.Query+'.js?api_key='+Etsy.Key;
	if(typeof Etsy.Keywords == 'string' && $.trim(Etsy.Keywords)){
		url += '&keywords='+$.trim(Etsy.Keywords);
	}
	if(Etsy.IncludeImages > 0){
		url += '&includes=Images:'+Etsy.IncludeImages;
	}
	if(Etsy.ResultsPerPage > 0){
		url += '&limit='+Etsy.ResultsPerPage;
	}
	if(Etsy.Page > 0){
		url += '&page='+Etsy.Page;
	}
	if(typeof Etsy.Sort == 'string'){
		url += '&sort_on='+Etsy.Sort;
	}
	if(typeof Etsy.Order == 'string'){
		url += '&sort_order='+Etsy.Order;
	}
	if(typeof Etsy.Id > 0){
		url += '&listing_id='+Etsy.Id;
	}
	return url;
};

/**
 * Performs a request to the API and shows the results
 * @param {String} keywords Text to search
 */
Etsy.Request = function (keywords){
	if(typeof keywords == 'string'){
		Etsy.Keywords = keywords;
	} else {
		Etsy.Keywords = undefined;
	}
	$.ajax({
		url: Etsy.GetQueryUrl(),
		dataType: 'jsonp',
		success: View.ShowResults
	});
};

/**
 * Performs a request to the API and find product by Id
 * @param {Number} Id to Search
 */
Etsy.RequestById = function (){
	$.ajax({
		url: Etsy.GetQueryUrl(),
		dataType: 'jsonp',
		success: View.ShowProduct
	});
};