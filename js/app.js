var init = function (){
	Etsy.Request();
	EventHandlers.StartListening();
};

$(document).ready(init);