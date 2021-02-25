<?php

// DATOS DE CONEXION A LA BASE DE DATOS
function conexion() {
  $conexion = mysqli_connect("localhost", "root", "", "pruebas");// estos datos de la base de datos


  return $conexion;
}

?>