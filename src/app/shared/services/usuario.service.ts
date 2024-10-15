import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Constantes } from '../util/constantes';
import { Usuario } from '../models/tre/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

   autenticar(usuario: Usuario): Observable<Usuario> {
     return this.http.post<Usuario>(`${Constantes.endpoint}usuario/autenticar`, usuario);
   }
}
