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
const users = new Object();
const database = firebase.database();

const cargarPagina = function () {
    $('.collapsible').collapsible();
    $('.modal').modal();
    $("#categoria").change(confirmacion);
    $("#ue1").mouseup(confirmacion2);
    $("#check1").click(seccion2);
    $("#check2").click(seccion3);
    $("#check3").click(seccion4);
    $("#seccion1").submit(siguiente1_2);
    $("#seccion2").submit(siguiente2_3);
    $("#seccion3").submit(siguiente3_4);
    $("#nuevoUsuario").click(masUsuario);

};


const Proyectos = {
    proyectos: []
};


const confirmacion = function () {
    console.log("cambió");
    $("#correcto1").removeClass("hide");
};

const confirmacion2 = function () {
    console.log("cambió");
    $("#correcto2").removeClass("hide");
};

const seccion2 = function () {
    console.log("sig de 1 a 2");
    $("#correcto1s").removeClass("hide");
};

const seccion3 = function () {
    console.log("sig de 2 a 3");
    $("#correcto2s").removeClass("hide");
};

const seccion4 = function () {
    console.log("sig de 3 a 4");
    $("#correcto3s").removeClass("hide");
};

const tipo_producto = function () {}


const siguiente1_2 = function (e) {
    e.preventDefault();
    localStorage.descripcion = $("#textarea1").val();
    tipos = $(".tipo").map(function (indice, tipo) {
        if (tipo.checked) {
            console.log(tipo.id);
            return tipo.id;
        }
    });
    categorias = $(".categorias").map(function (indice, categoria) {
        if (categoria.checked) {
            console.log(categoria.id);
            return categoria.id;
        }
    });
    $("#inicio").addClass("hide");
    scrollTo(0, 0);
    $("#user-persona").removeClass("hide");
};

const siguiente2_3 = function (e) {
    e.preventDefault();
    console.log("enter");
    $("#user-persona").addClass("hide");
    scrollTo(0, 0);
    const numeroUsuarios = userArray();
    console.log(numeroUsuarios);

    const plantillaAcciones = `<div class="row">
        <div class="col s4">
            <div class="usuarios">
                <h5 class="amber-text text-darken-4">Usuario</h5>
                <div class="col s4 center-align">
                    <img class="responsive-img circle" src="../assets/img/user_female.png" alt="userx">
                    <h6>__user__</h6>
                </div>
            </div>
        </div>
        <div class="user-action col s4">
            <h5 class="amber-text text-darken-4">Acciones sugeridas</h5>
            <div id="acciones-basicas">
                <div class="chip blue darken-3 white-text accion">
                    Log-in
                    <i class="close material-icons">close</i>
                </div>
                <div class="chip blue darken-3 white-text accion">
                    Perfil
                    <i class="close material-icons">close</i>
                </div>
                <div class="chip blue darken-3 white-text accion">
                    Mensajes
                    <i class="close material-icons">close</i>
                </div>
                <div class="chip blue darken-3 white-text accion accion-sugerida">
                    Publicaciones
                    <i class="close material-icons">close</i>
                </div>
            </div>
        </div>
        <div class="col s4">
            <h5 class="amber-text text-darken-4">Acciones particulares</h5>
            <div>
                <input class="accion" type="text" placeholder="Ingresa una acción" />
                <input class="accion" type="text" placeholder="Ingresa una acción" />
                <input class="accion" type="text" placeholder="Ingresa una acción" />
                <!-- <div class="row">
                <button id="nueva-accion1" class="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">add</i></button>
            </div> -->
            </div>
        </div>
    </div>`;

    database.ref('/static/social').on('value', function (snapshot) {
        const social = snapshot.val();
        console.log(social);
    });
    for (var i = numeroUsuarios - 1; i >= 0; i--) {
        let newUser = "user" + i;
        let nuevaPlantilla = plantillaAcciones.replace('__user__', users[newUser]);
        $("#usuario-acciones").append(nuevaPlantilla);
    }

    $("#acciones").removeClass("hide");

};

const siguiente3_4 = function (e) {
    e.preventDefault();
    console.log("enter");
    $("#acciones").addClass("hide");
    scrollTo(0, 0);
    $("#objetos").removeClass("hide");
};

const masUsuario = function () {
    let contadorUsuario = contador;
    const plantillaUsuario = `<div class="row">
                            <div class="input-field col s6">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="un-__contador__" type="text" class="validate user">
                                <label for="un-__contador__">Nombre de usuario (rol):</label>
                            </div>
                            <div class="input-field col s6">
                                <i class="material-icons prefix">list</i>
                                <input id="ue__contador__" type="text" class="">
                                <label for="ue__contador__">Especificaciones(edad, sexo):</label>
                            </div>
                        </div>`;
    for (let i = contadorUsuario; i < (contadorUsuario + 3); i++) {
        let nuevaPlantilla = plantillaUsuario.replace('__contador__', i)
            .replace('__contador__', i)
            .replace('__contador__', i)
            .replace('__contador__', i);
        $("#userPersona").append(nuevaPlantilla);
    }
}
const userArray = function () {
    $(".valid").each(function (index, user) {
        let newUser = "user" + index;
        users[newUser] = this.value;
    });
    return $(".valid").length;
}

$(document).ready(cargarPagina);
