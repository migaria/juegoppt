// Opciones
var opt_piedra = document.getElementById("piedra");
var opt_papel = document.getElementById("papel");
var opt_tijera = document.getElementById("tijera");
// Iniciar Juego
var start = document.getElementById("start_game");
// Jugadores
var img_opt_persona1 = document.getElementById("persona1");
var img_opt_computadora2 = document.getElementById("computadora2");
//Recuento
var ptos_persona1 = document.getElementById("persona1").innerText;
var ptos_computadora2 = document.getElementById("computadora2").innerText;
// Play
var select_persona1;
var select_computadora2;
var vs;

start.onclick = function(){            
    select_computadora2 = opt_random(val_opt_random.toString());
    display_option_computadora2(select_computadora2);
    game_vs(select_persona1,select_computadora2);

    console.log(select_persona1,select_computadora2.toString());
}

// Persona 1

opt_piedra.onclick = function () {
    select_persona1 = "piedra";
    img_opt_persona1.src = "./img/piedra.jpg";
    img_opt_computadora2.src = "./img/cpu.jpg";
}

opt_papel.onclick = function () {
    select_persona1 = "papel";
    img_opt_persona1.src = "./img/papel.png";
    img_opt_computadora2.src = "./img/cpu.png";
}

opt_tijera.onclick = function () {
    select_persona1 = "tijera";
    img_opt_persona1.src = "./img/tijera.png";
    img_opt_computadora2.src = "./img/cpu.png";
}

//Player 2 CPU

var val_opt_random = ["piedra","papel","tijera"];
function opt_random() {
    return [...val_opt_random]
    .sort(()=>Math.random() > 0.5 ? 1:-1)
    .slice(0,1);
}

function game_vs(select_persona1,select_computadora2){ 

    if (select_persona1 == "piedra") {
        if (select_computadora2 == "piedra") {
            vs = "same";
        } else if (select_computadora2 == "papel") {
            vs = "p2win";
         }else {
            vs = "p1win";
        } 
    } else if (select_persona1 == "papel") {
        if (select_computadora2 == "papel") {
            vs = "same";
        } else if (select_computadora2 == "tijera") {
            vs = "p2win";
        } else {
            vs = "p1win";
        }
    } else if (select_persona1 == "tijera") {
        if (select_computadora2 == "tijera") {
            vs = "same";
        } else if (select_computadora2 == "piedra") {
            vs = "p2win";
        } else {
            vs = "p1win";
        }
    }

    if (vs == "p1win") {
        document.getElementById("result").innerText = "Persona 1 gana";
        document.getElementById("result").style.color = "#3FA796";
        ptos_persona1++;
        document.getElementById("ptos_persona1").innerText = ptos_persona1;
    } else if (vs == "same") {
        document.getElementById("result").innerText = "Empate";
        document.getElementById("result").style.color = "#FEC260";
    } else if (vs == "p2win") {
        document.getElementById("result").innerText = "computadora 2 gana";
        document.getElementById("result").style.color = "#A10035";
        ptos_computadora2++;
        document.getElementById("ptos_computadora2").innerText = ptos_computadora2;
    }
}

function display_option_computadora2(select_computadora2){
    if (select_computadora2 == "piedra"){
        img_opt_computadora2.src = "./img/piedra.jpg";
    } else if (select_computadora2 == "papel"){
        img_opt_computadora2.src = "./img/papel.png";
    } else {
        img_opt_computadora2.src = "./img/tijera.png";
    }
}

const reload = document.getElementById('reset');
reload.addEventListener('click', _ => {
    location.reload();
});
