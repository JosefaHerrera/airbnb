function initMap(){
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

        var inputResultado = (document.getElementById('donde')); 
        var autocomplete = new google.maps.places.Autocomplete(inputResultado);
        autocomplete.bindTo('bounds', map); 
}