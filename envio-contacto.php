<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guardar datos del Cliente</title>
    <script type="text/javascript" src="js/script.js"></script>
</head>
<body>
<p> <a href="libros.html"> Regresar</a> </p>
<input type="button" value="Volver"onclick="pVolver();"> <br>

<input type='button' value='Submit' id='submit' onclick='paginaRedirect();'> <br/>
 
 <!-- Message -->
 <div id="mensaje"></div>
 
<?php

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$direccion = $_POST["direccion"];
$usuarioF = $_POST["usuarioF"];

print "  <p>Su Usuario es <strong>$usuarioF</strong>.</p>\n";
print "\n";
print "  <p>Su nombre es <strong>$nombre</strong>.</p>\n";
print "\n";
print "  <p>Su apellido es <strong>$apellido</strong> .</p>\n";
print "\n";
print "  <p>Su mail es <strong>$direccion</strong>.</p>\n";
print "\n";


// Incluimos los datos de conexión y las funciones:
include("datosDB.php");
$con = mysqli_connect($host,$usuario,$clave,$basededatos) or die ("No se ha podido conectar al servidor de Base de datos");
if (!$con) {
    die("Conexión fallida: " . mysqli_connect_error());
}



$db = mysqli_select_db($con, $basededatos) or die ( "Upps! no se ha podido conectar a la base de datos" );
$consulta = "INSERT INTO usuarios (Usuario, nombre, apellido, correo) VALUES ('$usuarioF', '$nombre', '$apellido', '$direccion')";

// Usamos esas variables:
if (mysqli_query ($con, $consulta)){
    echo "<h3>Registro agregado.</h3>";
    } else {
    echo "<h3>No se agregó nuevo registro</h3>";
    echo "Error: " . $consulta . "<br>" . mysqli_error($con);
 }
 mysqli_close($con);


?>



<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>

</body>
</html>
