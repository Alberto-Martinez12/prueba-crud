import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  URL = "http://localhost/api/";

  constructor(private http: HttpClient) { }

  obtenerGrupos() {
    return this.http.get(`${this.URL}ObtenerGrupos.php`);
  }

  altaGrupo(grupo) {
    return this.http.post(`${this.URL}AltaGrupo.php`, JSON.stringify(grupo));
  }

  bajaGrupo(idUsuario: number) {
    return this.http.get(`${this.URL}BajaGrupo.php?idGrupo=${idGrupo}`);
  }

  seleccionarGrupo(idGrupo: number) {
    return this.http.get(`${this.URL}SeleccionarGrupo.php?idGrupo=${idGrupo}`);
  }

  editarGrupo(grupo) {
    return this.http.post(`${this.URL}EditarGrupo.php`, JSON.stringify(grupo));
  }
}
