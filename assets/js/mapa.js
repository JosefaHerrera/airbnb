function initMap(){
	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;

	var map = new google.maps.Map(document.getElementById("map"),{
	zoom: 4,
    center: {lat: -33.416667,lng: -70.65},
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'terrain']
    }
	});
	//input búsqueda resultado
	directionsDisplay.setMap(map);
		var inputResultado = (document.getElementById('busqueda')); 
		var autocompletar = new google.maps.places.Autocomplete(inputResultado);
	autocomplete.bindTo('bounds', map); 
	
	directionsDisplay.setMap(map);
		var inputHome = (document.getElementById('first_name')); 
		var autocompletar = new google.maps.plafirst_nameces.Autocomplete(inputHome);
	autocomplete.bindTo('bounds', map);      
}