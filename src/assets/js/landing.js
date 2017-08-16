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

const contador = 4;
let tipos = [];
let categorias = [];

const cargarPagina = function () {
    $('.collapsible').collapsible();
    $('.modal').modal();
    $("#categoria").change(confirmacion);
    $("#ue1").mouseup(confirmacion2);
    $("#check1").click(seccion2);
    $("#check2").click(seccion3);
    $("#seccion1").submit(siguiente1_2);
    $("#seccion2").submit(siguiente2_3);
    $("#seccion3").submit(siguiente3_4);
    $("#nuevoUsuario").click(masUsuario);

};


const Proyectos = {
	proyectos:[]	
};


const confirmacion = function(){
	console.log("cambió");
	$("#correcto1").removeClass("hide");
};

const confirmacion2 = function(){
	console.log("cambió");
	$("#correcto2").removeClass("hide");
};

const seccion2 = function(){
	console.log("sig de 1 a 2");
	$("#correcto1s").removeClass("hide");
};

const seccion3 = function(){
	console.log("sig de 2 a 3");
	$("#correcto2s").removeClass("hide");
};

const tipo_producto = function(){}


const siguiente1_2 = function(e){
	e.preventDefault();
	localStorage.descripcion = $("#textarea1").val();
	tipos = $(".tipo").map(function(indice, tipo){
		if(tipo.checked){
			console.log(tipo.id);
			return tipo.id;
		}
	});
	categorias = $(".categorias").map(function(indice, categoria){
		if(categoria.checked){
			console.log(categoria.id);
			return categoria.id;
		}
	});
	$("#inicio").addClass("hide");
	$("#user-persona").removeClass("hide");
};

const siguiente2_3 = function(e){
	e.preventDefault();
	console.log("enter");
	$("#user-persona").addClass("hide");
	$("#acciones").removeClass("hide");
};

const siguiente3_4 = function(e){
	e.preventDefault();
	console.log("enter");
	$("#acciones").addClass("hide");
	$("#objetos").removeClass("hide");
};
 
//Section1: Tipo de Prooducto
const masUsuario = function () {
    //let contadorUsuario = contador;
    const plantillaUsuario = `<div class="row">
                            <div class="input-field col s6">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="un__contador__" type="text" class="validate">
                                <label for="un__contador__">Nombre de usuario (rol):</label>
                            </div>
                            <div class="input-field col s6">
                                <i class="material-icons prefix">details</i>
                                <input id="ue__contador__" class="">
                                <label for="ue__contador__">Especificaciones(edad, sexo):</label>
                            </div>
                        </div>`;
    for (let i = 4; i < 7; i++) {
        let nuevaPlantilla = plantillaUsuario.replace('__contador__', i)
            .replace('__contador__', i)
            .replace('__contador__', i)
            .replace('__contador__', i);
        $("#seccion2").append(nuevaPlantilla);
    }
        
}


$(document).ready(cargarPagina);
