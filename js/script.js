function miMensaje() {
    alert ("Primer Mensaje de JavaScript")
}

function cambiarTextoH3 () {
    document.getElementById("ficcion").innerHTML = "cambio Sección Libros de ficción con JS";

}

function muestraEdad () {
    let edad = 20;
    if(edad < 12) {
        alert("Todavía eres muy pequeño");
      }
      else if(edad < 19) {
        alert("Eres un adolescente");
      }
      else if(edad < 35) {
        alert("Aun sigues siendo joven");
      }
      else {
        alert("Piensa en cuidarte un poco más");
      }
      
}

function pruebaConsolaUno() {

    console.log (10);
    console.log ("Diez");
    console.log (20);
    console.log ("veinte");
}


function pruebaConsolaConValor() {

    console.log (10);
    console.log ("Diez");
    // return "" que pasa se retorno aqui??
    console.log (20);
    console.log ("veinte");
    return "Fin de la funcion y devuelvo valor a pag que lo llama";
}

function bienvenida () {
    return "esta funcion es un mensaje de bienvenida";

}

function bienvenidaConParam (nombre="No se tu nombre", edad = 0) {
    //template string backtick character https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    // nombre="No se tu nombre", edad = 0
    console.log (`Hola, tu nombre es ${nombre} y tienes ${edad} años`);

    
}

function mOver(obj) {
  obj.innerHTML = "Gracias";
}

function mOut(obj) {
  obj.innerHTML = "Mi mouse se fue";
}


function pVolver() {
  location.replace("libros.html");
}

function paginaRedirect(){
  var delay = 4000; // tiempo in milliseconds
 
  // Display message
  document.getElementById("mensaje").innerHTML = "Espere, en breve será redirigido a la pagina de inicio.";
  
  setTimeout(function(){
   window.location = "index.html";
  },delay);
  
 }