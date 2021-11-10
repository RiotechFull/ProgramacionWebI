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