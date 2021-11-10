<?php
$host="localhost";
$usuario="proa";
$clave="Proa123456*";
$basededatos="empresa";

$conn = new mysqli($host, $usuario, $clave, $basededatos);
    mysqli_query($conn , "SET character_set_result=utf8");
    if($conn->connect_error){
        die("Database Error : " . $conn->connect_error);
    }
?>