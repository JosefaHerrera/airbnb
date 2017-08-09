$(document).ready(function() {
	var lugarGuardado = $("#busqueda").val(localStorage.getItem("lugar"));
	var llegadaGuardado = $("#llegadaDos").val(localStorage.getItem("llegada"));
	var salidaGuardado = $("#salidaDos").val(localStorage.getItem("salida"));
	var personasGuardado = $("#cantidadDos").val(localStorage.getItem("personas"));	


	$('#filtros').click(function() {
		
		res.search_results.forEach(function(el){
			console.log(el.listing.picture_url);
			$("#muestraDatos").append( '<div class="row">'+
											'<div class="col l4 col s2">'+
											'<img src="'+ el.listing.picture_url+'" class="responsive-img">'+
											' </div>'+	
										'</div>');

			/*document.write("<img src = '' " + el.listing.thumbnail_url + "''" + "><br>");
			document.write("<b>" + el.listing.localized_city + " - " + el.listing.name + "</b>");
			document.write("Baños : " + el.listing.bathrooms + "<br>");
			document.write("Dormitorios : " +  el.listing.bedrooms + "<br>");
		  
			  el.listing.picture_urls.forEach(function(e){
			    document.write("<img width ='100' src ='" + e + "'" + ">")
			  })*/
			});
	});
});

                
                   
               
          