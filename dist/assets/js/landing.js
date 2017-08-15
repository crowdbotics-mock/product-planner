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
    $("#correcto1s").submit(siguiente);
    $("#correcto2s").submit(siguiente);
    $("#correcto3s").submit(siguiente);

    
 };


const siguiente = function(e){
	e.preventDefault();
};
 //Section1: Tipo de Prooducto

 $(document).ready(cargarPagina);
