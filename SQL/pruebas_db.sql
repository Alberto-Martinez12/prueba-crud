CREATE DATABASE `pruebas`;

use `pruebas`;

CREATE TABLE `usuarios` (
  `idGrupo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `ponderacion` int(15) NOT NULL,

  PRIMARY KEY (`idGrupo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;