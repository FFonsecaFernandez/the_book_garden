function crearCuenta() {
    location.href = "http://127.0.0.1:8000/login"
}

function regresar(){
    location.href = "http://127.0.0.1:8000/"
}

function inicioSesion() {
    document.getElementById("login").style.display = "none";
    document.getElementById("singin").style.backgroundColor = "rgb(250,250,250)"; 
    document.getElementById("singin").style.display = "flex";
}
    
/*function save_user() {
    var nombre = document.getElementsByTagName("Nombre").value
    document.getElementById("log_container").style.backgroundColor = "rgb(0,0,0)";
    var h2 = document.querySelector("h2");
    var text = document.createTextNode(nombre);
    h2.append(text);
}
*/
