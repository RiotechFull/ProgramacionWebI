<?php
$nomUsu = $_POST["nomUsu"];
$nombre = $_POST["fname"];
$apellido = $_POST["lname"];
$email = $_POST["email"];
print "  <p>Su Usuario es <strong>$nomUsu</strong>.</p>\n";
print "\n";
print "  <p>Su nombre es <strong>$nombre</strong>.</p>\n";
print "\n";
print "  <p>Su apellido es <strong>$apellido</strong> .</p>\n";
print "\n";
print "  <p>Su mail es <strong>$email</strong>.</p>\n";
print "\n";


// Incluimos los datos de conexión y las funciones:
include("datosDB.php");
$con = mysqli_connect($host,$usuario,$clave,$basededatos) or die ("No se ha podido conectar al servidor de Base de datos");
if (!$con) {
    die("Conexión fallida: " . mysqli_connect_error());
}



$db = mysqli_select_db($con, $basededatos) or die ( "Upps! no se ha podido conectar a la base de datos" );
$consulta = "INSERT INTO usuarios (Usuario, nombre, apellido, correo) VALUES ('$nomUsu', '$nombre', '$apellido', '$email')";

//echo $host,$usuario,$clave,$basededatos;
//echo $consulta;
// Usamos esas variables:
if (mysqli_query ($con, $consulta)){
    echo "<p>Registro agregado.</p>";
    } else {
    echo "<p>No se agregó nuevo registro</p>";
    echo "Error: " . $consulta . "<br>" . mysqli_error($con);
 }
 mysqli_close($conn);
?>