// Initialize Firebase
var config = {
	apiKey: "AIzaSyBOFC9R93z-5Yq6c4wNbT2OqK3nrAROunU",
	authDomain: "product-planer.firebaseapp.com",
	databaseURL: "https://product-planer.firebaseio.com",
	projectId: "product-planer",
	storageBucket: "product-planer.appspot.com",
	messagingSenderId: "1039482368977"
};
firebase.initializeApp(config);

 
const cargarPagina = function(){
    $('.collapsible').collapsible();
    $('.modal').modal();
    $("#categoria").change(confirmacion);
    $("#check1").click(seccion2);
    $("#seccion1").submit(siguiente);
    $("#seccion2").submit(siguiente);
    $("#seccion3").submit(siguiente);

    
 };


const confirmacion = function(){
	console.log("cambió");
	$("#correcto1").removeClass("hide");
};

const seccion2 = function(){
	console.log("sig de 1 a 2");
	$("#correcto1s").removeClass("hide");
};

const siguiente = function(e){
	e.preventDefault();
	console.log("enter");
	$("#inicio").addClass("hide");
	$("#user-persona").removeClass("hide");
};
 //Section1: Tipo de Prooducto

 $(document).ready(cargarPagina);
