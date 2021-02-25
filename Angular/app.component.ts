import { Component, OnInit } from '@angular/core';

import { GruposService } from './grupos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  grupos = null;

  grupo = {
    idGrupo: null,
    nombre: null,
    ponderacion: null,

  }

  constructor(private gruposServicio: GruposService) { }

  ngOnInit() {
    this.obtenerGrupos();
  }

  obtenerGrupos() {
    this.gruposServicio.obtenerGrupos().subscribe(
      result => this.grupos = result
    );
  }

  altaGrupo() {
    this.grupoServicio.altaGrupo(this.grupo).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerGrupos();
        }
      }
    );
  }

  bajaGrupo(idGrupo) {
    this.grupoServicio.bajaGrupo(idGrupo).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerGrupos();
        }
      }
    );
  }

  editarGrupo() {
    this.gruposServicio.editarGrupo(this.grupo).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerGrupos();
        }
      }
    );
  }

  seleccionarGrupo(idGrupo) {
    this.gruposServicio.seleccionarGrupo(idGrupo).subscribe(
      result => this.grupo = result[0]
    );
  }

  hayRegistros() {
    if(this.grupos == null) {
      return false;
    } else {
      return true;
    }
  }
}
