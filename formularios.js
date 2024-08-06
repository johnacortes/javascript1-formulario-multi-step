
var nombreIngresado;
var correoIngresado;

function accionInputNombre(nombre) {
  document.getElementById(nombre).classList.add("button-azul");
}

function accionInputCorreo(email) {
  document.getElementById(email).classList.add("button-azul");
}

function accionButton1(buttonf1) {
  var nombre = document.getElementById("nombre").value;
  nombreIngresado = nombre;
  var correo = document.getElementById("email").value;
  correoIngresado = correo;
  var expresionCorre = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (nombreIngresado.length > 3) {
    if (expresionCorre.test(correoIngresado)) {
      document.getElementById("email").value = "";
      document.getElementById("nombre").value = "";
      window.location.href = "indexf2.html";
      sessionStorage.setItem("nombre", nombreIngresado);
      sessionStorage.setItem("correo", correoIngresado);
    } else {
      alert("Correo invalido, por favor ingrese otro correo.");
    }
  } else {
    alert("Por favor ingrese su nombre.");
  }
}

var topicsSeleccionados = [];

function manejarClickTopic(nombreDeTopic) {
  topicsSeleccionados.push(nombreDeTopic);
  switch (nombreDeTopic) {
    case "Software Development":
      document.querySelector("#opcion1").classList.add("button-azul");
      break;

    case "User Experience":
      document.querySelector("#opcion2").classList.add("button-azul");
      break;

    case "Graphic Design":
      document.querySelector("#opcion3").classList.add("button-azul");
      break;

    default:
      console.log("");
  }
}

var correoIngresado = sessionStorage.getItem("correo");
var nombreIngresado = sessionStorage.getItem("nombre");

function accionButton2(buttonf2) {
  if (topicsSeleccionados.length > 0) {
    secuenciaP3 = 5;
    window.location.href = "indexf3.html";
    var topicsSeleccionadosJSON = JSON.stringify(topicsSeleccionados);
    sessionStorage.setItem("topicsSeleccionados", topicsSeleccionadosJSON);
    sessionStorage.setItem("secuenciaP3", secuenciaP3);
  } else {
    alert("Por favor seleccione un topic.");
  }
}

var topicsSeleccionadosR = JSON.parse(
  sessionStorage.getItem("topicsSeleccionados")
);

if (document.getElementById("h2")) {
  document.querySelector("#nombre-salida").innerHTML = nombreIngresado;
  document.querySelector("#email-salida").innerHTML = correoIngresado;
  document.querySelector("#topic1").innerHTML = topicsSeleccionadosR[0];
  document.querySelector("#punto-blanco1").classList.add("punto-blanco");
  if (topicsSeleccionadosR.length > 1) {
    document.querySelector("#topic2").innerHTML = topicsSeleccionadosR[1];
    document.querySelector("#punto-blanco2").classList.add("punto-blanco");
    if (topicsSeleccionadosR.length > 2) {
      document.querySelector("#topic3").innerHTML = topicsSeleccionadosR[2];
      document.querySelector("#punto-blanco3").classList.add("punto-blanco");
    }
  }
}

function confirmarEnvio(confirmar) {
  alert("El registro ha sido exitoso.");
  window.location.href = "index.html";
}
